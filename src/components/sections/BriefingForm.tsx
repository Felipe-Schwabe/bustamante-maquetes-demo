'use client';

import { Check, Clipboard, Mail, Send } from 'lucide-react';
import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import { siteConfig } from '@/config/site';
import { buildMailto, formatBrazilPhone, formatBriefing, type BriefingFields } from '@/lib/briefing';

const initialFields: BriefingFields = {
  name: '', company: '', email: '', phone: '', type: '', purpose: '', dimensions: '', destination: '', deadline: '', description: '',
};

const fieldLabels: Array<{ key: keyof BriefingFields; label: string; placeholder: string; type?: string; required?: boolean }> = [
  { key: 'name', label: 'Nome', placeholder: 'Como podemos chamar você?', required: true },
  { key: 'company', label: 'Empresa', placeholder: 'Nome da empresa ou escritório' },
  { key: 'email', label: 'E-mail', placeholder: 'voce@empresa.com.br', type: 'email', required: true },
  { key: 'phone', label: 'Telefone', placeholder: '+55 (00) 00000-0000', type: 'tel' },
];

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

export function BriefingForm() {
  const [fields, setFields] = useState<BriefingFields>(initialFields);
  const [reviewing, setReviewing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [consent, setConsent] = useState(false);
  const [formError, setFormError] = useState('');
  const [sendStatus, setSendStatus] = useState<SendStatus>('idle');

  const mailto = useMemo(() => buildMailto(siteConfig.email, fields), [fields]);
  const update = (key: keyof BriefingFields, value: string) => setFields((current) => ({ ...current, [key]: key === 'phone' ? formatBrazilPhone(value) : value }));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim());
    if (!fields.name.trim() || !emailIsValid || !fields.type || !fields.description.trim()) {
      setFormError('Preencha nome, e-mail válido, tipo de maquete e descrição do projeto para continuar.');
      return;
    }
    if (siteConfig.form.mode === 'formspree' && !consent) {
      setFormError('Confirme o consentimento para encaminhar os dados ao serviço de formulário.');
      return;
    }
    setFormError('');
    setCopied(false);
    setSendStatus('idle');
    setReviewing(true);
  }

  async function handleFormspreeSend() {
    if (!siteConfig.form.endpoint) return;
    setSendStatus('sending');
    try {
      const response = await fetch(siteConfig.form.endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, briefing: formatBriefing(fields), _subject: `Solicitação de orçamento — ${fields.name}` }),
      });
      if (!response.ok) throw new Error('Falha no envio');
      setSendStatus('sent');
    } catch {
      setSendStatus('error');
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(formatBriefing(fields));
    } catch {
      const area = document.createElement('textarea');
      area.value = formatBriefing(fields);
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    setCopied(true);
  }

  return (
    <div className="briefing-card">
      <div className="briefing-card__top"><span className="eyebrow">Comece por aqui</span><span className="briefing-card__step">{reviewing ? '02' : '01'} <span>/</span> 02</span></div>
      {!reviewing ? (
        <form className="briefing-form" onSubmit={handleSubmit} noValidate>
          <div className="briefing-form__intro"><h3>Conte o que você está imaginando.</h3><p>Alguns detalhes ajudam a preparar uma conversa mais objetiva. Campos sem asterisco são opcionais.</p></div>
          <div className="form-grid">
            {fieldLabels.map(({ key, label, placeholder, type = 'text', required }) => (
              <label className="field" key={key}><span>{label}{required && <sup>*</sup>}</span><input type={type} value={fields[key]} onChange={(event) => update(key, event.target.value)} placeholder={placeholder} required={required} /></label>
            ))}
            <label className="field"><span>Tipo de maquete<sup>*</sup></span><select value={fields.type} onChange={(event) => update('type', event.target.value)} required><option value="">Selecione uma opção</option><option>Arquitetônica ou residencial</option><option>Comercial ou corporativa</option><option>Industrial</option><option>Urbanística ou loteamento</option><option>Ambiental ou paisagística</option><option>Modelo reduzido</option><option>Outro</option></select></label>
            <label className="field"><span>Finalidade do projeto</span><input value={fields.purpose} onChange={(event) => update('purpose', event.target.value)} placeholder="Apresentação, estudo, exposição..." /></label>
            <label className="field"><span>Dimensões aproximadas</span><input value={fields.dimensions} onChange={(event) => update('dimensions', event.target.value)} placeholder="Se já souber, informe aqui" /></label>
            <label className="field"><span>Cidade ou estado de destino</span><input value={fields.destination} onChange={(event) => update('destination', event.target.value)} placeholder="Onde a peça será entregue?" /></label>
            <label className="field"><span>Prazo desejado</span><input value={fields.deadline} onChange={(event) => update('deadline', event.target.value)} placeholder="Mês ou data aproximada" /></label>
            <label className="field field--full"><span>Descrição do projeto<sup>*</sup></span><textarea value={fields.description} onChange={(event) => update('description', event.target.value)} placeholder="Fale um pouco sobre o projeto, os arquivos disponíveis e o nível de detalhe esperado." required rows={5} /></label>
          </div>
          {siteConfig.form.mode === 'formspree' && <label className="consent-field"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} /><span>Autorizo o encaminhamento desses dados ao serviço de formulário configurado pelo responsável pelo site.</span></label>}
          {formError && <p className="form-error" role="alert">{formError}</p>}
          <div className="briefing-form__bottom"><span><sup>*</sup> preenchimento obrigatório</span><button type="submit" className="button button--solid">Revisar briefing <Send size={16} /></button></div>
        </form>
      ) : sendStatus === 'sent' ? (
        <div className="briefing-result"><span className="success-icon"><Check size={17} /></span><h3>Briefing encaminhado.</h3><p>O serviço de formulário confirmou o recebimento dos dados. A equipe poderá responder pelo e-mail informado.</p><button className="text-button text-button--dark" type="button" onClick={() => setReviewing(false)}>Enviar outro briefing</button></div>
      ) : (
        <div className="briefing-preview">
          <div className="briefing-form__intro"><span className="success-icon"><Check size={17} /></span><h3>Briefing pronto para revisão.</h3><p>{siteConfig.form.mode === 'formspree' ? 'Confira o resumo antes de encaminhar os dados.' : 'Confira o resumo. Ao preparar o e-mail, seu aplicativo de correio será aberto — o envio ainda precisa ser confirmado por você.'}</p></div>
          <pre>{formatBriefing(fields)}</pre>
          <div className="briefing-preview__actions">
            {siteConfig.form.mode === 'formspree' ? <button className="button button--solid" type="button" onClick={handleFormspreeSend} disabled={sendStatus === 'sending'}><Send size={16} /> {sendStatus === 'sending' ? 'Enviando...' : 'Enviar briefing'}</button> : <a className="button button--solid" href={mailto}><Mail size={16} /> Preparar e-mail de orçamento</a>}
            <button className="button button--outline-dark" type="button" onClick={handleCopy}>{copied ? <Check size={16} /> : <Clipboard size={16} />} {copied ? 'Briefing copiado' : 'Copiar briefing'}</button><button className="text-button text-button--dark" type="button" onClick={() => setReviewing(false)}>Editar respostas</button>
          </div>
          {sendStatus === 'error' && <p className="form-error" role="alert">Não foi possível encaminhar agora. Revise a conexão ou copie o briefing para enviar manualmente.</p>}
          <p className="briefing-preview__note">Você poderá anexar plantas, imagens e documentos manualmente no e-mail.</p>
        </div>
      )}
    </div>
  );
}

export function BriefingSection() {
  return (
    <section className="section briefing-section" id="orcamento" aria-labelledby="briefing-title">
      <div className="shell briefing-section__grid">
        <div className="briefing-section__intro"><span className="eyebrow eyebrow--light">Orçamento inteligente</span><h2 id="briefing-title">Uma boa conversa começa com um bom briefing.</h2><p>Reúna as informações essenciais e encaminhe tudo diretamente para o comercial. Sem cadastro, sem promessa automática — apenas um ponto de partida mais claro.</p><div className="briefing-callout"><span>01</span><p>Preencha o formulário.<br /><span>02</span> Revise e encaminhe.</p></div></div>
        <BriefingForm />
      </div>
    </section>
  );
}
