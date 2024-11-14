const http = require('http');

const port = 5000;

const pages = {
    '/': { content: '<h2>INDEX SAYFASINA HOŞGELDİNİZ</h2>', statusCode: 200 },
    '/about': { content: '<h2>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h2>', statusCode: 200 },
    '/contact': { content: '<h2>ILETISIM SAYFASINA HOŞGELDİNİZ</h2>', statusCode: 200 },
    '404': { content: '<h2>404 SAYFA BULUNAMADI</h2>', statusCode: 404 }
};

const server = http.createServer((req, res) => {
    const url = req.url.toLowerCase();

    const page = pages[url] || pages['404'];

    res.writeHead(page.statusCode, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(page.content);
    res.end();
});

server.listen(port, () => {
        console.log(`sunucu port ${port} de başlatıldı.`)
})
