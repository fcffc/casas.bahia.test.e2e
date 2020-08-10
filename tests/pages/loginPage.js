/**
 * File: loginPage.js
 * Autor: Fernanda Ferreira
 * Data: 09/08/2020
 */
const assert = require('chai').assert;
const expect = require('chai').expect;

class LoginPage {
    // define os elementos
    get tituloLbl() { return $('h2[data-id="titulo"]') }
    get emailTxt() { return $('input#Email') }
    get senhaTxt() { return $('input#Senha') }
    get continuarBtn() { return $('input[id="btnClienteLogin"]') }

    //Metodos dos elementos de ação
    visualizarTelaLogin(){
        this.tituloLbl.waitForDisplayed();
        assert.equal(this.tituloLbl.isDisplayed(), true);
    }
    informaDadosLogin(email, senha){
        this.senhaTxt.waitForDisplayed(); // Se campo senha visivel o cliente já possui cadastro
        this.emailTxt.setValue(email);
        this.senhaTxt.setValue(senha);
    }
    continuarClick(){
        this.continuarBtn.waitForDisplayed();
        browser.pause(1500);
        this.continuarBtn.click();
    }
    open() {
        browser.url('https://carrinho.casasbahia.com.br/Checkout?ReturnUrl=https://www.casasbahia.com.br#login')
    }
}

module.exports = LoginPage;