export type BriefingFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  type: string;
  purpose: string;
  dimensions: string;
  destination: string;
  deadline: string;
  description: string;
};

const labels: Array<[keyof BriefingFields, string]> = [
  ['name', 'Nome'],
  ['company', 'Empresa'],
  ['email', 'E-mail'],
  ['phone', 'Telefone'],
  ['type', 'Tipo de maquete'],
  ['purpose', 'Finalidade do projeto'],
  ['dimensions', 'Dimensões aproximadas'],
  ['destination', 'Cidade ou estado de destino'],
  ['deadline', 'Prazo desejado'],
  ['description', 'Descrição do projeto'],
];

export function formatBriefing(fields: BriefingFields) {
  return [
    'Olá, Bustamante Maquetes.',
    '',
    'Gostaria de solicitar um orçamento para uma maquete.',
    '',
    ...labels.map(([key, label]) => `${label}: ${fields[key].trim() || 'Não informado'}`),
    '',
    'Enviado a partir da proposta de redesign independente.',
  ].join('\n');
}

export function buildMailto(email: string, fields: BriefingFields) {
  const subject = `Solicitação de orçamento — ${fields.name.trim() || 'novo contato'}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formatBriefing(fields))}`;
}

export function formatBrazilPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 13);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return `+${digits.slice(0, 2)} (${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`;
}
