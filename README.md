# Projeto de Testes Automatizados com Cypress

Este projeto contém testes automatizados para um simulador de seguros, utilizando Cypress e Cucumber para implementar testes baseados em comportamento (BDD).

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

### 1. Instalação do Node.js
1. Acesse o site oficial do [Node.js](https://nodejs.org/)
2. Baixe e instale a versão LTS (Long Term Support)
3. Verifique a instalação executando no terminal:
```bash
node --version
npm --version
```

### 2. Instalação do Cypress e Cucumber
1. Clone o repositório:
```bash
git clone https://github.com/beatrizzramos/cypress_insuranceapp.git
cd cypress_insuranceapp
```

2. Instale as dependências do projeto:
```bash
npm install
```

3. Instale o Cypress globalmente (opcional):
```bash
npm install -g cypress
```

4. Instale o Cucumber para Cypress:
```bash
npm install --save-dev @badeball/cypress-cucumber-preprocessor
```

5. Instale o Faker para geração de dados:
```bash
npm install @faker-js/faker --save-dev
```

### 3. Configuração do Cucumber

1. Adicione a configuração do Cucumber no arquivo `cypress.config.js`:
```javascript
const { defineConfig } = require('cypress')
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await cucumber(on, config)
      on('file:preprocessor', browserify(config))
      return config
    },
    specPattern: 'cypress/e2e/**/*.feature'
  }
})
```

2. Crie o arquivo `.cucumberrc.json` na raiz do projeto:
```json
{
  "nonGlobalStepDefinitions": true
}
```

3. Adicione as configurações no `package.json`:
```json
{
  "cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/support/step-definitions/**/*.js",
    "nonGlobalStepDefinitions": true
  }
}
```

4. Crie a estrutura de diretórios necessária:
```bash
mkdir -p cypress/support/step-definitions
mkdir -p cypress/e2e
```

5. Crie o arquivo de suporte do Cucumber em `cypress/support/e2e.js`:
```javascript
import '@badeball/cypress-cucumber-preprocessor/support'
```

6. Crie o arquivo de suporte do Cypress em `cypress/support/commands.js`:
```javascript
import './commands'
```

7. Crie um arquivo de teste de exemplo em `cypress/e2e/insuranceFluxoCompleto.feature`:
```gherkin
Feature: Fluxo Completo de Seguro Automotivo

  Scenario: Realizar cotação de seguro automotivo
    Given que estou na página inicial do simulador
    When preencho todos os dados do veículo
    And clico em próximo
    And preencho todos os dados do segurado
    And clico em próximo após preencher os dados do segurado
    And preencho todos os dados do produto
    And clico em próximo após preencher os dados do produto
    And seleciono a opção de preço
    And clico em próximo após selecionar a opção de preço
    And envio a cotação
    Then devo ver a mensagem de sucesso
```

## ⚙️ Configuração

### 1. Configuração do Cypress
O projeto está configurado com as seguintes configurações no arquivo `cypress.config.js`:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Configurações de viewport
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Configurações de tempo
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    
    // Configurações de execução
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://sampleapp.tricentis.com',
    
    // Configuração do Cucumber
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
      return config;
    }
  }
});
```

### 2. Configurações de Ambiente
As variáveis de ambiente estão configuradas no arquivo `cypress.env.json`:
```json
{
  "baseUrl": "https://sampleapp.tricentis.com",
  "apiKey": "sua_chave_api",
  "username": "seu_usuario",
  "password": "sua_senha"
}
```

#### Protegendo Dados Sensíveis
1. Crie um arquivo `.gitignore` na raiz do projeto e adicione:
```bash
cypress.env.json
```

2. Crie um arquivo `cypress.env.example.json` com a estrutura, mas sem os valores reais:
```json
{
  "baseUrl": "https://sampleapp.tricentis.com",
  "apiKey": "sua_chave_api_aqui",
  "username": "seu_usuario_aqui",
  "password": "sua_senha_aqui"
}
```

3. Para usar as variáveis de ambiente nos testes:
```javascript
// Exemplo de uso
const username = Cypress.env('username');
const password = Cypress.env('password');

cy.get('#username').type(username);
cy.get('#password').type(password);
```

4. Para definir variáveis de ambiente em tempo de execução:
```bash
npx cypress run --env username=seu_usuario,password=sua_senha
```

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
- Constantes em UPPER_CASE
- Nomes descritivos em inglês
- Comandos Cypress em uma única linha

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Autores

- Beatriz Ramos - [GitHub](https://github.com/beatrizzramos)

## 🙏 Agradecimentos

Gostaria de expressar minha profunda gratidão aos professores que foram fundamentais no meu aprendizado e evolução usando o Page Object no Cypress:

- **Joniclear dos Passos**: Pela orientação valiosa e por compartilhar sua experiência em testes automatizados, ajudando a desenvolver uma base sólida em Cypress e BDD
- **Allan Baptista**: Pelo compartilhamento de experiência e aprendizado utilizando Cypress.

Este projeto é fruto do conhecimento compartilhado por esses excelentes profissionais e uma turma de colegas que sempre foram muito prestativos com todos, que não apenas ensinaram técnicas, mas também inspiraram a busca por qualidade e excelência em testes automatizados. 