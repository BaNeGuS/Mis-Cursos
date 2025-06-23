import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(join(__dirname, "public")));

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "public", "Colores/index1.html"));
});