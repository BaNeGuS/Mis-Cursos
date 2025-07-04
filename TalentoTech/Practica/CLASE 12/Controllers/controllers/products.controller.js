const products = [
	{
		id: 1,
		name: "Producto 1",
		price: 1000,
	},
	{
		id: 2,
		name: "Producto 2",
		price: 2000,
	},
];

export const getAllProducts = async (req, res) => {
	res.status(200).json(products);
};

export const getProductById = async (req, res) => {
	const id = req.params.id;
	const product = products.find((product) => product.id === parseInt(id));
	if (product) {
		res.status(200).json(product);
	} else {
		res.status(404).json({ message: "Producto no encontrado no no" });
	}
};

export const createProduct = async (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
};