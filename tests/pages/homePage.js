/**
 * File: homePage.js
 * Autor: Fernanda Ferreira
 * Data: 09/08/2020
 */

const ProdutosSugeridosPage = require('./produtosSugeridosPage');
const ResultadoPesquisaPage = require('./resultadoPesquisaPage');
const assert = require('chai').assert;

const produtosSugeridosPage = new ProdutosSugeridosPage();
const resultadoPesquisaPage = new ResultadoPesquisaPage();
class HomePage {
    // define os elementos
    get inputBuscaTxt() { return $('input#strBusca') }
    get itensCarrinho() { return $('a#itensCarrinho') }
    get descProdCarrinho() { return $('div#produtosMeuCarrinhoHeader div.item-description') }

    //Metodos dos elementos de ação
    visualizaPagHome() {
        this.inputBuscaTxt.waitForDisplayed();
    }
    pesquisaProduto(produto) {
        this.inputBuscaTxt.waitForDisplayed();
        this.inputBuscaTxt.setValue(produto);
        let prod = produtosSugeridosPage.verificaProdutoSugerido();
        if (prod.includes(produto) == true) { // Se modal de produtos sugeridos conter o texto iPhone XR, seleciona o primeiro produto
            produtosSugeridosPage.selecionaProdutoSugerido();
        } else {
            browser.keys('Enter'); // caso não, seleciona o produto conforme filtro aplicado
            resultadoPesquisaPage.selecionaProdutoDesejado();
        }
    }
    visualizaProdtoCarrinho() {
        this.itensCarrinho.waitForDisplayed();
        this.itensCarrinho.keys(''); // Campo recebe apenas foco
        this.descProdCarrinho.waitForDisplayed();
        assert.equal(this.descProdCarrinho.isDisplayed(), true);
    }
    open() {
        browser.url('/')
    }
}

module.exports = HomePage;