import express from "express";

const app = express();

const PORT = 3000;

app.get("/item/:id/:categoria", (req, res) => {
	const { id, categoria } = req.params;
    // console.log('req', req);
    console.log('params', req.params);
    console.log(`Solicitud recibida para el elemento con ID: ${id}`);
	res.send(`Item ID: ${id}`);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
