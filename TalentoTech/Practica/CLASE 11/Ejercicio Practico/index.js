import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hola mundo!");
});

// #region CORS Básico
// Configuración básica de CORS para permitir cualquier origen
const corsOptions = {
    origin: '*', // Permite cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

app.use(cors(corsOptions));
// #endregion

// Path Params para manejar rutas específicas
app.get('/producto/:id/color/:color', (req, res) => {
    const { id, color } = req.params;
    res.send(`Esta es la ruta del producto: ${id}, color: ${color}`);
});

// Query Params para manejar parámetros de consulta
app.get('/carrito', (req, res) => {
    const { producto, cantidad } = req.query;
    res.send(`Productos del carrito:\n Producto: ${producto}, Cantidad: ${cantidad}`);
});

// #region Manejo de error 404
// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).send("Recurso no encontrado o ruta inválida");
});
// #endregion

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});