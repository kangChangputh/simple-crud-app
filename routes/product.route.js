import express from 'express'
import { getProducts, getSingleProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';
const router = express.Router();

// get all products
router.get('/', getProducts);

// get single product
router.get('/:id', getSingleProduct);

// update product
router.put('/:id', updateProduct);

// delete product
router.delete('/:id', deleteProduct);

export default router;