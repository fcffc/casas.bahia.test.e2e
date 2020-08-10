/**
 * File: produtosSugeridosPage.js
 * Autor: Fernanda Ferreira
 * Data: 09/08/2020
 */

class ProdutosSugeridosPage {
    // define os elementos
    get tituloProdSugeridosLbl() { return $('.ac-product-title') }
    get descProdSugeridoFirstLink() { return $('ul > li:nth-child(1) > span[class="ac-product-name"]') }

    //Metodos dos elementos de ação
    verificaProdutoSugerido() {
        this.tituloProdSugeridosLbl.waitForDisplayed();
        this.descProdSugeridoFirstLink.waitForDisplayed();
        return this.descProdSugeridoFirstLink.getText();
    }
    selecionaProdutoSugerido() {
        this.descProdSugeridoFirstLink.waitForDisplayed();
        this.descProdSugeridoFirstLink.click();
    }
}

module.exports = ProdutosSugeridosPage;