import express from "express";
import {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
	productsMaxPrice,
} from "../controllers/products.controller.js";

const router = express.Router();

// Rutas para productos
// router.get("/", getAllProducts);
router.get("/", (req, res) => {
	if (req.query.maxPrice) {
		return productsMaxPrice(req, res);
	}
	return getAllProducts(req, res);
});
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/maxPrice", productsMaxPrice);

export default router;
// Exportar el router para usarlo en el servidor principal
