/**
 * Arquivo: conversions.js
 * Data: 09/08/2020
 * Author: Fernanda Ferreira
 */

class Conversions {

    convertCoin(value) {
        //apresenta no formato R$333,34
        let vlr = parseFloat(value);
        let number = vlr.toFixed(2).split('.');
        number[0] = "R$" + number[0].split(/(?=(?:...)*$)/).join('.');
        let vlrConnvert = number.join(',');
        return vlrConnvert;
    }

    convertEmMoeda(value) {
        // Remove simbolo de moeda e convert em float
        let str = value;
        let res;
        if (str.length > 15) {
            res = str.slice(2, 10);
        } else {
            res = str.slice(15, 21);
        }
        let vlr = parseFloat(res);
        let valor = vlr.toFixed(2).split('.');
        return valor;
    }
}
module.exports = Conversions;