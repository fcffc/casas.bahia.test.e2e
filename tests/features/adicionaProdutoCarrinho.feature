Feature: Adicionar produto no carrinho de compras da loja online Casas Bahia
    Como cliente da loja online Casas Bahia
    Eu desejo adicionar um produto no meu carrinho de compras
    Para que eu possa reservar meu produto
    
    Scenario: Adicionar um Iphone XR no carrinho
        # Given eu estou na página de identificação do site
        # When eu informo meus dados de login "automatedsteticmob@gmail.com" "viavarejo2020"
        # And eu clico em continuar
        And eu estou na página inicial
        And eu realizo a pesquisa e seleciono o produto desejado "Iphone XR"
        And eu visualizo os detalhes do produto
        And eu clico em comprar o produto para informar os dados da garantia "24 meses"
        And eu clico em continuar para visualizar o meu carrinho
        Then eu reservo meu produto sem concluir a compra