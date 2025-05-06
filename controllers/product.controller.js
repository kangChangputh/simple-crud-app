
import Product from '../models/product.model.js';

// @desc Get all products
// @route GET /api/posts
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
};

// @desc Get single product
// @route GET /api/products/:id
export const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ messsage: 'Product not found' })
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });


    }
};

// @desc Create new product
// @route POST /api/products
export const createProdcut = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
};

// @desc Update product
// @route PUT /api/products/:id
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ messsage: 'Product not found' })
        };

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

// @desc Delete product
// @route DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.status(200).json({ message: 'Product has been deleted successfully' })


    } catch (error) {
        res.status(500).json({ message: error.message })

    }
};



