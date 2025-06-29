import express from 'express';
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('Listado de productos');
});

router.get('/products/:id', (req, res) => {
    res.send(`Producto con id ${req.params.id}`);
});

router.post('/products', (req, res) => {
    res.send('Producto creado');
});

export default router;