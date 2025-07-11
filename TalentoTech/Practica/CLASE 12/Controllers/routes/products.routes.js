import express from 'express';
const router = express.Router();

import {
    getAllProducts,
    getProductById,
    createProduct
} from '../controllers/products.controller.js';

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', createProduct);

export default router;