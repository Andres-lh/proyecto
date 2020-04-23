var Product = require('../models/product');
var mongoose = require('mongoose');
require('../database/db')

var products = [
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/GA0370-01_1024x1024@2x.png?v=1540236026',
        title : 'Guitarra acústica cort',
        price : 250000,
        category : 'guitar',
        units : 6

    }),
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/GA0370-01_1024x1024@2x.png?v=1540236026',
        title : 'Guitarra acústica valencia',
        price : 600000,
        category : 'guitar',
        units : 6

    }),
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/GA0370-01_1024x1024@2x.png?v=1540236026',
        title : 'Guitarra acústica fender',
        price : 450000,
        category : 'guitar',
        units : 6

    }),
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/GA0370-01_1024x1024@2x.png?v=1540236026',
        title : 'Guitarra acústica cort',
        price : 800000,
        category : 'piano',
        units : 6

    }),
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/GA0370-01_1024x1024@2x.png?v=1540236026',
        title : 'Guitarra acústica valencia',
        price : 50000,
        category : 'guitar',
        units : 6

    }),
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/GA0370-01_1024x1024@2x.png?v=1540236026',
        title : 'Guitarra acústica cort',
        price : 250000,
        category : 'piano',
        units : 6

    }),

]



var done = 0;


for(let i = 0; i < products.length; i++){
    products[i].save((err, result)=>{
        done++;
        if(done === products.length){
            exit();
        }
    })
}

function exit(){
    mongoose.disconnect();
}
