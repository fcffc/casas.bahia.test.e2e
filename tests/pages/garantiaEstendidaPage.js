/**
 * File: garantiaEstendidaPage.js
 * Autor: Fernanda Ferreira
 * Data: 09/08/2020
 */
const assert = require('chai').assert;

class GarantiaEstendidaPage {
    // define os elementos
    get tituloLbl() { return $('div[class="content-wrapper"] > h2') }
    get semGarantiaRad() { return $('label[for="ew-option-00"]') }
    get dozeMesesRad() { return $('label[for="ew-option-01"]') }
    get vlrDozeMesesRad() { return $('section#sectionContent div.plan-box.option-012 > div.details > div > span > i') }
    get vinteQuatroMesesLbl() { return $('label[for="ew-option-02"]') }
    get vlrVinteQuatroMesesLbl() { return $('section#sectionContent div.plan-box.option-024 > div.details > div > span > i') }
    get continuarBtn() { return $('section#sectionContent div.header > div > a') }

    //Metodos dos elementos de ação
    visualizaTelaGarantia() {
        this.tituloLbl.waitForDisplayed();
        assert.equal(this.tituloLbl.isDisplayed(), true);
    }
    habilitaTipoGarantia(meses) {
        switch (meses) {
            case 'Sem garantia':
                this.semGarantiaRad.waitForDisplayed();
                this.semGarantiaRad.click();
                break;
            case '12 meses':
                this.dozeMesesRad.waitForDisplayed();
                this.dozeMesesRad.click();
                break;
            case '24 meses':
                this.vinteQuatroMesesLbl.waitForDisplayed();
                this.vinteQuatroMesesLbl.click();
                break;
            default:
                console.log("Outro caso não definido");
                break;
        }
    }
    verificaValorGarantia(meses) {
        if (meses == '12 meses') {
            return this.vlrDozeMesesRad.getText();
        } if ('24 meses') {
            return this.vlrVinteQuatroMesesLbl.getText();
        } else {
            return 0;
        }
    }
    continuarClick() {
        this.continuarBtn.waitForDisplayed();
        this.continuarBtn.click();
    }
}

module.exports = GarantiaEstendidaPage;