const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const cartController = require('../controllers/cartController');
const userController = require('../controllers/userController');

// Rutas para productos
router.get('/products/:id', productsController.getProduct);
router.get('/cats', productsController.getCats);
router.get('/cats_products/:id', productsController.getCatsProducts);
router.get('/products_comments/:id', productsController.getProductsComments);

// Rutas para el carrito
router.get('/user_cart/:id', cartController.getUserCart);
router.get('/cart', cartController.getCart);
router.get('/sell', (req, res) => {
    res.sendFile("publish.json", { root:"./data/sell" });
});

// Rutas para el usuario
router.get('/user', userController.getUser);

module.exports = router;
