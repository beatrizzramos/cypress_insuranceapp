# language: pt
# encoding: utf-8

Funcionalidade: Fluxo de Seguro - Cenários Negativos


  Cenário: Preencher e-mail com formato inválido
    Dado que estou na página inicial do simulador
    Quando preencho todos os dados do veículo
    E clico em próximo
    E preencho todos os dados do segurado com e-mail inválido
    E clico em próximo
    Então devo ver a mensagem de erro no campo de e-mail

  Cenário: Informar data de nascimento futura
    Dado que estou na página inicial do simulador
    Quando preencho todos os dados do veículo
    E clico em próximo
    E preencho os dados do segurado com data de nascimento futura
    E clico em próximo
    Então devo ver a mensagem de erro no campo de data de nascimento

    Cenário: Informar senhas diferentes no envio da cotação
    Dado que estou na página inicial do simulador
    Quando preencho todos os dados do veículo
    E clico em próximo
    E preencho todos os dados do segurado
    E clico em próximo
    E preencho todos os dados do produto
    E clico em próximo
    E seleciono a opção de preço
    E clico em próximo
    E envio a cotação com senhas diferentes
    Então devo ver a mensagem de erro informando que as senhas não coincidem