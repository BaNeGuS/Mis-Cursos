const products = [
    {
        id: 1,
        name: 'Producto 1',
        price: 1000
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 2000
    }
];

export const getAllProducts = () => {
    return products;
};

export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
};

export const createProduct = (productData) => {
    const newProduct = {
        id: products.length + 1,
        name: productData.name,
        price: productData.price
    };
    products.push(newProduct);
    return newProduct;
};

export const updateProduct = (id, productData) => {
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    if (productIndex === -1) {
        return null;
    }
    const updatedProduct = {
        ...products[productIndex],
        ...productData
    }
    products[productIndex] = updatedProduct;
    return updatedProduct;
}

export const deleteProduct = (id) => {
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    if (productIndex === -1) {
        return null;
    };
    const deletedProduct = products[productIndex];
    products.splice(productIndex, 1);
    return deletedProduct;
};

export const productsMaxPrice = (maxPrice) => {
    return products.filter(product => product.price <= maxPrice);
};

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    productsMaxPrice
};