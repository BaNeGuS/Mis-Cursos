import express from "express";
const app = express();

let solicitudes = 0;

app.use((req, res, next) => {
    console.log("Prueba de middleware: conteo de peticiones:", solicitudes++);
    next(); // Pasa el control al siguiente middleware o ruta
})

// Middleware de aplicación
app.use((req, res, next) => {
	console.log(`Datos recibidos: ${req.method} ${req.url}`);
	next(); // Pasa el control al siguiente middleware o ruta
});

// Ruta principal
app.get("/", (req, res) => {
	res.send("Hola desde Express con middlewares!");
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Servidor en http://localhost:${PORT}`);
});
