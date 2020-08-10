/**
 * File: meuCarrinhoPage.js
 * Autor: Fernanda Ferreira
 * Data: 09/08/2020
 */

const HomePage = require('./homePage');
const homePage = new HomePage();
class MeuCarrinhoPage {
    // define os elementos
    get nomeProdutoLink() { return $('a > strong[data-id="nome"]') }
    get qtdeProdutoLbl() { return $('input[data-id="qtdeSku"]') } //Pegar value
    get valorUnGarantiaLbl() { return $('.garantia .valorUnitario') }
    get valorTotal() { return $('.total .vTotal') }
    get comprarMaisProdutoBtn() { return $('a#btnComprarMaisProdutosBottom') }

    //Metodos dos elementos de ação
    nomeProdutoValue() {
        this.nomeProdutoLink.waitForDisplayed();
        return this.nomeProdutoLink.getText();
    }
    qtdeProdutoValue() {
        this.qtdeProdutoLbl.waitForDisplayed();
        return this.qtdeProdutoLbl.getValue();
    }
    valorUnGarantiaValue() {
        this.valorUnGarantiaLbl.waitForDisplayed();
        return this.valorUnGarantiaLbl.getText();
    }
    valorTotalValue() {
        this.valorTotal.waitForDisplayed();
        return this.valorTotal.getText();
    }
    comprarMaisProdutoClick() {
        this.comprarMaisProdutoBtn.waitForDisplayed();
        this.comprarMaisProdutoBtn.click();
        homePage.visualizaPagHome();
    }
}

module.exports = MeuCarrinhoPage;