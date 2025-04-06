#utf-8
# language: pt

Funcionalidade: Fluxo completo de cotação de seguro

  Cenário: Realizar cotação completa de seguro com sucesso
    Dado que estou na página inicial do simulador
    Quando preencho todos os dados do veículo
    E clico em próximo
    E preencho todos os dados do segurado
    E clico em próximo
    E preencho todos os dados do produto
    E clico em próximo
    E seleciono a opção de preço
    E clico em próximo
    E envio a cotação
    Então devo ver a mensagem de sucesso 