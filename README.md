# Bustamante Maquetes — landing page comercial

Landing page institucional estática em Next.js, TypeScript, Tailwind CSS e Lucide Icons. O projeto possui dois modos centralizados: `demo` para apresentação independente e `production` para publicação somente após aprovação e contratação.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build estático

```bash
npm run lint
npm run build
```

O projeto usa `output: "export"`; publique o conteúdo de `out/` em um serviço de hospedagem estática comercial.

## Configuração de modo

Crie `.env.local` quando quiser sobrescrever o padrão:

```env
NEXT_PUBLIC_SITE_MODE=demo
NEXT_PUBLIC_FORM_MODE=mailto
```

`demo` mantém a indicação de proposta independente e `noindex`. `production` remove essa indicação e permite indexação, mas só deve ser ativado depois de autorização formal.

## Estrutura importante

- `src/config/site.ts`: modo, marca, contatos, navegação e configuração do formulário.
- `src/data/projects.ts`: galeria demonstrativa, cases aprovados e referências verificadas aguardando fotos oficiais.
- `src/components/sections/`: seções da landing page.
- `src/components/portfolio/`: filtros, cards e galeria ampliada.
- `src/lib/briefing.ts`: validação auxiliar, máscara de telefone e geração do briefing.
- `public/images/hero/`: imagem principal.
- `public/images/company/`: imagem da seção institucional.
- `public/images/projects/`: imagens da galeria demonstrativa ou futuras fotos aprovadas.
- `public/images/specialties/`: imagens usadas nas especialidades.
- `IMAGE_SOURCES.md`: procedência, licença e status de cada imagem.
- `HANDOFF.md`: guia para transição ao cliente e publicação oficial.

## Imagens

Não havia fotos autorizadas da Bustamante no repositório. As imagens atuais são licenciadas pelo Pexels e estão identificadas na interface como demonstrativas; não representam trabalhos ou clientes da empresa. Antes da publicação oficial, substitua-as por materiais aprovados e atualize `IMAGE_SOURCES.md`.

## Formulário comercial

### E-mail, padrão da demonstração

```env
NEXT_PUBLIC_FORM_MODE=mailto
```

O visitante revisa os dados e prepara um e-mail para `comercial@bustamantemaquetes.com.br`. O site não simula envio e também oferece cópia manual do briefing.

### Formspree, opcional

Após autorização do cliente, configure:

```env
NEXT_PUBLIC_SITE_MODE=production
NEXT_PUBLIC_FORM_MODE=formspree
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/SEU_ENDPOINT
```

Use um endpoint criado na conta do cliente. Não coloque credenciais secretas no código público. O fluxo exibe sucesso ou erro conforme a resposta real do serviço e solicita consentimento.

Consulte [HANDOFF.md](HANDOFF.md) para publicação, transferência de hospedagem e checklist de aprovação.
