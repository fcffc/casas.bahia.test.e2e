# casas.bahia.test.e2e
Projeto para avaliação ViaVarejo

![WebdriverIO](http://www.christian-bromann.com/wdio.png)

## Principais Frameworks:
- webdriverIO (v6)
- cucumber (v6)
- chromedriver (v83)

## Principais Funcionalidades:
- Page Object Model
- Projeto em JavaScript
- Compatível com as versões 8.x a 13.x do Nodejs
- Contém cenários de exemplo do tipo declarativo do BDD
- Integrado com [@wdio/allure-reporter](wdio) para relatórios em HTML intuitivos e detalhados
- Incorpora capturas de tela em caso de falha

## Para começar:
#### Pré-requisito
1. NodeJS instalado globalmente no sistema operacional. Instale sempre a versão estável.
https://nodejs.org/dist/v12.18.3/node-v12.18.3.pkg

2. Git instalado

3. Navegador Chrome instalado

4. JAVA SDK

4. Editor de texto (Opcional) instalado => Sublime/VSCode/Atom/Sublime

**Editor padrão:** *VSCode (Visual Studio Code). Instalar os plugins [Cucumber (Gherkin)] by Alexandre Krechik e [vscode-icons] by Roberto Huertas.*

6. Para SO MacOs, instale [Xcode](https://developer.apple.com/xcode/) ou na loja App Store

**ATENÇÃO - Xcode:** *É necessário ACEITAR os termos do CONTRATO após a instalação*

**Aceitar os termos do Xcode (by Salla para MacOS):**
```
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install
sudo xcodebuild -license accept
```

7. Para SO MacOS, instale também [Homebrew Tutorial](https://brew.sh/index_pt-br) e [nvm](https://github.com/nvm-sh/nvm)

8. Instale o [Python](https://www.python.org/downloads/release/python-2714/) para MacOS / Windows

## Instalação

```
npm install
```

## Executando os cenários

- Executar no navegador chrome:

```
npm run test
```

- Gera e abre o relatório allure-reports:

```
npm run allure-report
```