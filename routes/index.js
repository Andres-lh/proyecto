const express = require('express');
const router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');


router.get('/', (req,res)=>{
   
    Product.find((err, products) => {
        var productChunk = [];
        var chunkSize = 3;
        for (let index = 0; index < products.length; index += chunkSize) {
                productChunk.push(products.slice(index, index + chunkSize));
            }  
            res.render('index', { title : 'Tienda de instrumentos musicales', products : productChunk})
        })

    
})


module.exports = router;