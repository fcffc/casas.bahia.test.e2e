Feature: Acessar a loja online Casas Bahia
    Como cliente da loja online Casas Bahia
    Eu desejo poder logar no site
    Para que eu possa ter acesso aos meus dados

    Scenario: Logar na loja online Casas Bahia
        Given eu estou na página de identificação do site
        When eu informo meus dados de login "automatedsteticmob@gmail.com" "viavarejo2020"
        And eu clico em continuar
        Then eu sou redirecionado para página principal