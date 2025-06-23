import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.status(200).send("<h1>Hola, Mundo!</h1>");
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/productos", (req, res) => {
	res.send("Bienvenid@ a la página de productos");
});
app.get("/productos/14", (req, res) => {
	res.send("Estás viendo el producto N° 14.");
});
