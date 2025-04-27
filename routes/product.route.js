const express = require('express');
const router = express.Router();

const { createProduct, getProducts, getProduct, updatedProduct, deleteProduct } = require('../Controllers/product.controllers');

// Routes
router.get('/', getProducts);
router.post('/', createProduct); 
router.get('/:id', getProduct);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
