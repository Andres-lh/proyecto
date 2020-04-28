var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');

router.get('/add-to-cart/:id', (req, res) => {

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

router.get('/shoppingCar', (req, res) => {
    if (!req.session.cart) {
        return res.render('shoppingCar', { products: null });
    }

    var cart = new Cart(req.session.cart);
    var total = parseFloat(cart.totalPrice);

    res.render('shoppingCar', { products: cart.addItems(), totalPrice: total });


});


router.get('/remove/:id', (req, res) => {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
    cart.removeItems(productId);
    req.session.cart = cart;
    res.redirect('/cart/shoppingCar');

});



router.get('/checkout',(req, res, next)=>{
    if (!req.session.cart) {
        return res.render('shoppingCar', { products: null });
    }
    var cart = new Cart(req.session.cart);
    res.render('checkout', {total : cart.totalPrice, products : cart.addItems()} )
})


module.exports = router;