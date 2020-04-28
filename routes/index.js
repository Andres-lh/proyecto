const express = require('express');
const router = express.Router();
const fs = require('fs');
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

router.get('/stream', (req,res)=>{
    const path = './video/video.mp4';
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if(range){
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0],10);
        const end = parts[1] ? parseInt(parts[1],10) : fileSize-1;
        const chunkSize = (end - start) + 1;
        const file = fs.createReadStream(path, {start,end});
        const head = {
            'Content-Range' : `bytes ${start} - ${end} / ${fileSize}`,
            'Accept-Range' : `bytes`,
            'Content-Lenght' : chunkSize,
            'Content-Type' : 'video/mp4'
        }
        res.writeHead(206, head);
        file.pipe(res)
    }else{
        const head = {
            'Content-Lenght' : fileSize,
            'Content-Type' : 'video/mp4'
        }
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res)
    }
});





module.exports = router;