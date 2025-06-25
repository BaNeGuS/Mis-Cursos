import express from "express";

const app = express();

// Configuración básica: Permitir todos los orígenes

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use((req, res, next) => {
	// // Permitir un dominio
	res.header("Access-Control-Allow-Origin", "https://example.com");
	// Métodos permitidos
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	// Encabezados permitidos
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	// Permitir cookies/credenciales
	res.header("Access-Control-Allow-Credentials", "true");
	next();
});

const port = 3000;

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
