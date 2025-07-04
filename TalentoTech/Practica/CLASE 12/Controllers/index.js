import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Usando las rutas de productos
app.use("/api", productsRouter);

//Middleware para manejar errores
app.use((req, res, next) => {
	res.status(404).json({ message: "Ruta no encontrada" });
});

const PORT  = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});