# Handoff — Bustamante Maquetes

## Estado atual

O projeto está no modo `demo` por padrão. Ele utiliza fotografias demonstrativas licenciadas, não se apresenta como site oficial e mantém `noindex` nos metadados. O fluxo padrão de orçamento é `mailto:` e não captura dados automaticamente.

## Antes da publicação oficial

O cliente deverá fornecer ou aprovar:

1. Logotipo oficial em vetor e regras de aplicação, se desejar substituir a marca tipográfica.
2. Fotografias próprias dos projetos, da oficina e da equipe, com autorização de uso digital.
3. Nome correto, categoria, localidade e descrição de cada case.
4. Autorização para citar clientes, prêmios, imprensa e demais reconhecimentos.
5. Confirmação do e-mail, telefone, domínio e responsável pelo recebimento de solicitações.
6. Política de privacidade e texto de consentimento, caso um formulário externo seja ativado.
7. Conta de hospedagem do cliente e acesso ao DNS/domínio no momento da publicação.

## Alternar modo

O modo é controlado por variável de ambiente:

```env
NEXT_PUBLIC_SITE_MODE=demo
```

Para produção, após aprovação e substituição das imagens:

```env
NEXT_PUBLIC_SITE_MODE=production
```

O modo de produção remove a indicação de conceito e permite indexação. Ele não deve ser ativado antes da contratação e aprovação formal.

## Formulário

### E-mail, padrão da demonstração

```env
NEXT_PUBLIC_FORM_MODE=mailto
```

O briefing é revisado no navegador e convertido em um link para `comercial@bustamantemaquetes.com.br`. O visitante confirma o envio em seu próprio aplicativo de e-mail.

### Formspree, opcional após autorização

```env
NEXT_PUBLIC_SITE_MODE=production
NEXT_PUBLIC_FORM_MODE=formspree
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/SEU_ENDPOINT
```

O endpoint precisa ser criado na conta do cliente. Não coloque tokens secretos no código público. O site só exibe confirmação após uma resposta HTTP bem-sucedida do endpoint e pede consentimento antes do encaminhamento.

## Publicação estática

```bash
npm install
npm run build
```

Publique o conteúdo da pasta `out/` em Netlify, Vercel Static, Cloudflare Pages, GitHub Pages ou no serviço de hospedagem escolhido pelo cliente. A conta deve pertencer ao cliente, não ao desenvolvedor da proposta.

## Atualização de projetos

Fotografias oficiais aprovadas devem ser adicionadas em `public/images/projects/`. Depois, acrescente objetos em `approvedProjects` em `src/data/projects.ts`, removendo ou mantendo os itens demonstrativos conforme o modo de apresentação. Atualize também `IMAGE_SOURCES.md`.
