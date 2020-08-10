/**
 * File: detalhesProdutoPage.js
 * Autor: Fernanda Ferreira
 * Data: 09/08/2020
 */

const assert = require('chai').assert;
const expect = require('chai').expect;
class DetalhesProdutoPage {
    // define os elementos
    get productNameLbl() { return $('b[itemprop="name"]') }
    get dePrecoLbl() { return $('strong[id*="precoDeValue"]') }
    get porPrecoLbl() { return $('strong[id*="precoPorValue"] > i') }
    get comprarBtn() { return $('a#btnAdicionarCarrinho') }
    get duasVezesSJurosLbl() { return $('tr[id*="rptParcelamentoCartao1_ctl02_tr"] > th:nth-child(1)') }
    get valorDuasVezesSJurosLbl() { return $('tr[id*="rptParcelamentoCartao1_ctl02_tr"]  > td:nth-child(2)') }

    //Metodos dos elementos de ação
    visualizarProductName(name) {
        this.productNameLbl.waitForDisplayed();
        expect(this.productNameLbl.getText()).to.contain(name);
    }
    dePrecoValue() {
        this.dePrecoLbl.waitForDisplayed();
        return this.dePrecoLbl.getText();
    }
    porPrecoValue() {
        this.porPrecoLbl.waitForDisplayed();
        return this.porPrecoLbl.getText();
    }
    verificaPrestacoes() {
        this.duasVezesSJurosLbl.waitForDisplayed();
        assert.equal(this.duasVezesSJurosLbl.isDisplayed(), true);
        assert.equal(this.valorDuasVezesSJurosLbl.isDisplayed(), true);
    }
    validaPrestacoes() {
        // Desenvolver calculos
    }
    comprarClick() {
        this.comprarBtn.waitForDisplayed();
        this.comprarBtn.click();
    }
    open(produto) {
        browser.url('/'+produto+'/b')
    }
}

module.exports = DetalhesProdutoPage;