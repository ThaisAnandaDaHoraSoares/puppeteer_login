//Biblioteca Puppeteer
const puppeteer = require ('puppeteer');

(async () => {
    //Abre o browser
    const browser = await puppeteer.launch({
        headless: false, // exibe o browser sendo aberto
    });
    //Nova aba do navegador
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/login');// o site que será acessado

    // aguardar o carregamento de campo
    await page.waitFor('input[name="username"]')

    await page.type('#username', 'tomsmith', {delay:100}); // preenchimento de usuario
    await page.type('#password', 'SuperSecretPassword!', {delay:100}); // preenchimento senha

    await page.click('[type="submit"]'); //click no botão de login

    //await browser.close(); // fechamento do browser
})();


