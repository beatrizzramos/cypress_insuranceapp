# Desafio de Testes Automatizados com Cypress - Academia QE

Este projeto contém testes automatizados para um simulador de seguros, utilizando Cypress e Cucumber para implementar testes baseados em comportamento

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)
- [Faker](https://fakerjs.dev/)

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (geralmente vem com o Node.js)
- Git

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd [NOME_DO_DIRETÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Instale o Cypress globalmente (opcional):
```bash
npm install -g cypress
```

## ⚙️ Configuração

1. O projeto já vem com as configurações básicas no arquivo `cypress.config.js`
2. As variáveis de ambiente estão configuradas no arquivo `cypress.env.json`

## 🧪 Estrutura do Projeto

```
cypress/
├── support/
│   ├── pages/           # Páginas do Page Object Model
│   ├── selectors/       # Seletores CSS
│   ├── step-definitions/# Definições dos passos do Cucumber
│   └── fakers/          # Geradores de dados falsos
├── e2e/                 # Testes em formato .feature
└── fixtures/            # Dados estáticos
```

## 📝 Executando os Testes

1. Abra o Cypress:
```bash
npx cypress open
```

2. Execute os testes em modo headless:
```bash
npx cypress run
```

3. Execute um teste específico:
```bash
npx cypress run --spec "cypress/e2e/insuranceFluxoCompleto.feature"
```

## 🎯 Funcionalidades Testadas

- Cadastro de veículo
- Cadastro de segurado
- Seleção de produtos
- Seleção de preços
- Envio de cotação

## 📚 Padrões de Código

- Page Object Model (POM)
- Behavior Driven Development (BDD)
- Constantes
- Nomes descritivos em inglês
- Comandos Cypress

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✨ Autores

- Beaatriz Ramos - [Seu GitHub](https://github.com/beatrizzramos)

## 🙏 Agradecimentos

# Projeto de Testes Automatizados com Cypress

// ... existing code ...

## 🙏 Agradecimentos

# Projeto de Testes Automatizados com Cypress

// ... existing code ...

## 🙏 Agradecimentos

Gostaria de expressar minha profunda gratidão aos professores que foram fundamentais no meu aprendizado e evolução usando o Page Object no Cypress:

- **Joniclear dos Passos**: Pela orientação valiosa e por compartilhar sua experiência em testes automatizados, ajudando a desenvolver uma base sólida em Cypress e BDD
- **Allan Baptista**: Pelo compartilhamento de experiência e aprendizado utilizando Cypress.

Este projeto é fruto do conhecimento compartilhado por esses excelentes profissionais e uma turma de colegas que sempre foram muito prestativos com todos, que não apenas ensinaram técnicas, mas também inspiraram a busca por qualidade e excelência em testes automatizados.
