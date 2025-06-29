import express from "express";

const app = express();

const PORT = 3000;

// Middleware para capturar los parámetros de la URL con Path Parameters
// Ejemplo: /item/123/electronics
app.get("/item/:id/:categoria", (req, res) => {
	const { id, categoria } = req.params;
	console.log("params", req.params);
	console.log(`Solicitud recibida para el elemento con ID: ${id}`);
	res.send(`Item ID: ${id}, ${categoria}`);
});

// Middleware para capturar los parámetros de la URL con Query Parameters
// Ejemplo: /items?category=electronics&price=100
app.get("/items", (req, res) => {
	const category = req.query.category;
	const price = req.query.price;
	res.send(`Categoría: ${category}, Precio: ${price}`);
});
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
