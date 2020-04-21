const express = require('express');
const router = express.Router();
var Product = require('../models/product');



router.get('/', (req,res)=>{
    
    res.render('index', { title : 'Tienda de instrumentos musicales'})
})

router.get('/guitars', (req,res)=>{
    Product.find((err, products) => {
        var productChunk = [];
        var chunkSize = 3;
        for (let index = 0; index < products.length; index += chunkSize) {
          productChunk.push(products.slice(index, index + chunkSize));
        }
    res.render('partials/guitars', { title : 'Guitarras', products : productChunk})
    })
})

router.get('/baseGuitars', (req,res)=>{
    res.render('partials/baseGuitars',{ title : 'Bajos'})
})

router.get('/pianos', (req,res)=>{
    res.render('partials/pianos', { title : 'Pianos'})
})

router.get('/strings', (req,res)=>{
    res.render('partials/strings', { title : 'Cuerdas'})
})

router.get('/wind', (req,res)=>{
    res.render('partials/wind', { title : 'Vientos'})
})

router.get('/drums', (req,res)=>{
    res.render('partials/drums', { title : 'Percusión'})
})

module.exports = router;