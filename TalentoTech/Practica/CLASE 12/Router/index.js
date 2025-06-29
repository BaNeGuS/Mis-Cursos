import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.routes.js";

const app = express();

// Middleware para permitir todos los orígenes
app.use(cors());

// Routers
app.use("/api", productsRouter);

// Middleware para manejar errores
app.use((req, res, next) => {
	res.status(404).send("Recurso no encontrado :(");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})