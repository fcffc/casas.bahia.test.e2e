/**
 * File: resultadoPesquisaPage.js
 * Autor: Fernanda Ferreira
 * Data: 09/08/2020
 */
const expect = require('chai').expect;

class ResultadoPesquisaPage {
    // define os elementos
    get resultadoBuscaLbl() { return $('.nm-dektop-only :nth-child(1) > h1 > span') }
    get filtraQuartoProd() { return $('li:nth-child(4) > a > h4') }
    get selectFirstProductLink() { return $('div:nth-child(7) > section > div.cont-product > picture > div') }

    //Metodos dos elementos de ação
    resultadoBusca(texto) {
        this.resultadoBuscaLbl.waitForDisplayed();
        expect(this.resultadoBuscaLbl.getText()).to.equal(texto);
    }
    selecionaProdutoDesejado(){
        this.filtraQuartoProd.waitForDisplayed();
        this.filtraQuartoProd.click();
        this.selectFirstProductLink.waitForDisplayed();
        this.selectFirstProductLink.click();
    }
}

module.exports = ResultadoPesquisaPage;