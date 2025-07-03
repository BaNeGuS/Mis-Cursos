import express from "express";
import cors from "cors";
import productsRouter from "./router/products.router.js";

const app = express();
app.use(cors()); // Middleware para permitir CORS

app.use(express.json()); // Middleware para parsear JSON

app.use("/api/products", productsRouter); // Usar el router de productos
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
