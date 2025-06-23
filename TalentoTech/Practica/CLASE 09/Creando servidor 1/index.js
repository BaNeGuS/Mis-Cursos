import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hola, Mundo!</h1>');
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});