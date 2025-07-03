import productsService from "../services/products.service.js";

export const getAllProducts = (req, res) => {
	res.status(200).json(productsService.getAllProducts());
};

export const getProductById = (req, res) => {
	const id = req.params.id;
	const product = productsService.getProductById(id);
	if (product) {
		res.status(200).json(product);
	} else {
		res.status(404).json({ message: "Producto no encontrado" });
	}
};

export const createProduct = async (req, res) => {
	const { name, price } = req.body;
	const newProduct = productsService.createProduct({ name, price });
	res.status(201).json(newProduct);
};

export const updateProduct = (req, res) => {
	const id = req.params.id;
	const { name, price } = req.body;
	const updatedProduct = productsService.updateProduct(id, { name, price });
	if (updatedProduct) {
		res.status(200).json(updatedProduct);
	} else {
		res.status(404).json({ message: "Producto no encontrado" });
	}
};

export const deleteProduct = (req, res) => {
	const id = req.params.id;
	const deletedProduct = productsService.deleteProduct(id);
	if (deletedProduct) {
		res.status(200).json(deletedProduct);
	} else {
		res.status(404).json({ message: "Producto no encontrado" });
	}
};

export const productsMaxPrice = (req, res) => {
	const maxPrice = parseFloat(req.query.maxPrice);
	if (isNaN(maxPrice)) {
		return res
			.status(400)
			.json({ message: "El parámetro maxPrice debe ser un número válido" });
	}
    const filteredProducts = productsService.productsMaxPrice(maxPrice);
    if (filteredProducts.length > 0) {
        res.status(200).json(filteredProducts);
    }
    else {
        res.status(404).json({ message: "No se encontraron productos con el precio máximo especificado" });
    }
};
