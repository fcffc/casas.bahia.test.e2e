/**
 * File: loginSteps.js
 * Author: Fernanda Ferreira
 * Date: 09/08/2020
 */
const { Given, When, Then } = require('cucumber');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');

const loginPage = new LoginPage();
const homePage = new HomePage();

Given(/^eu estou na página de identificação do site$/, () => {
    loginPage.open();
    loginPage.visualizarTelaLogin();
});

When(/^eu informo meus dados de login "([^"]*)" "([^"]*)"$/, (email, senha) => {
    loginPage.informaDadosLogin(email, senha);
});

When(/^eu clico em continuar$/, () => {
    loginPage.continuarClick();
});

Then(/^eu sou redirecionado para página principal$/, () => {
    homePage.visualizaPagHome();
});