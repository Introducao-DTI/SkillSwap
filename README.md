# SkillSwap

Marketplace interno de mentorias para grandes empresas.

## Descrição

O SkillSwap é uma ferramenta de troca de conhecimentos e mentorias entre colaboradores. Quem ensina ganha pontos que podem ser resgatados em um marketplace interno, enquanto quem aprende agenda sessões com facilidade.

### Diferenciais

- Agendamentos intensivos e integrados com calendário
- Busca avançada por Stack, Cargo, disponibilidade e critérios de perfil
- Sistema de notificações e fluxo de reserva de horário
- Feedback e avaliação 360° após cada sessão
- Controle de pontos e resgate de benefícios

## Tecnologias utilizadas

- C#
- .NET
- ASP.NET Core
- React
- Swagger (OpenAPI)
- Git

## Funcionalidades principais

- Busca com filtros avançados (Stack, Cargo, Disponibilidade)
- Reserva de horários com agenda e exceções de disponibilidade
- Cadastro e gestão de conhecimentos/habilidades
- Registro de mentorias, aceitação, cancelamento e conclusão
- Avaliações pós-sessão com impacto na reputação do mentor
- Carteira de pontos com transações de crédito e débito
- Marketplace interno para resgatar benefícios com pontos
- Auditoria de ações críticas para governança e rastreabilidade

## Por que criar este projeto?

- Excelente prática para consultas SQL complexas envolvendo joins entre usuários, horários e habilidades
- Desafio de modelar estados complexos em React e fluxo de interface com reservas e avaliações
- Projeto ideal para simular um ambiente corporativo de marketplace interno e governança de mentorias

## API

A especificação da API está disponível em `docs/openapi.yaml`.

### Principais domínios

- Usuários (Admin)
- Usuários (Colaborador)
- Mentorias
- Marketplace
- Auditoria (Admin)

### Exemplos de recursos

- `GET /api/v1/usuario/{id}`
- `POST /api/v1/mentorias`
- `PATCH /api/v1/mentorias/{id}/status`
- `POST /api/v1/me/carteira/resgatar-item`
- `GET /api/v1/marketplace/itens`

