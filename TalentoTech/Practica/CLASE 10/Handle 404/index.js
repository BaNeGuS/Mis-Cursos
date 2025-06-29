import express from "express";
import cors from "cors";

const app = express();

//Configuración básica: Permitir todos los orígenes
app.use(cors());

app.get("/", (req, res) => {
	res.send("¡Hola, mundo! Esta es la ruta raíz.");
});

app.get("/item/12345", (req, res) => {
	res.send("¡Hola, mundo! Esta es la ruta /item/12345.");
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
	res.status(404).send("Recurso no encontrado o ruta inválida");
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
