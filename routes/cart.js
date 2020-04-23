var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');

router.get('/cart/add-to-cart/:id', (req, res, next) => {

    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
    Product.findById(productId, (err, product) => {
        if (err) return res.redirect('/');
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');

    });

});

router.get('/cart/shoppingCar', (req, res, next) => {
    if (!req.session.cart) {
        return res.render('shoppingCar', { products: null });
    }

    var cart = new Cart(req.session.cart);
    var total = parseFloat(cart.totalPrice).toFixed(2);

    res.render('shoppingCar', { products: cart.addItems(), totalPrice: total });


});

router.get('/remove/:id', (req, res, next) => {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
    cart.removeItems(productId);
    req.session.cart = cart;
    res.redirect('/cart/shopping-cart');

});

router.get('/reduce/:id', (req, res, next) => {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
    cart.reduceItem(productId);
    req.session.cart = cart;
    res.redirect('/cart/shopping-cart');

});



module.exports = router;