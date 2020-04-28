var Product = require('../models/product');
var mongoose = require('mongoose');
require('../database/db')



var products = [
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/GA0370-01_1024x1024.png?v=1540236026',
        title : 'Guitarra Acústica Cort AC100op',
        price : 505900

    }),
    new Product({
        imagePath : 'https://www.trinomusic.com/sites/default/files/styles/uc_product_full/public/content_images/product/cort_cr_100_crs.jpg?itok=wrdBkyEN',
        title : 'Guitarra Eléctrica Cort CR100 BK',
        price : 902900

    }),
    new Product({
        imagePath : 'https://http2.mlstatic.com/guitarra-electroacustica-texas-adk-aw35cet-mn-cutaway-cuer-D_NQ_NP_995607-MCO28039100217_082018-F.webp',
        title : 'Guitarra Electroacústica Texas Cutaway',
        price : 578000

    }),
    new Product({
        imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsoiCB95u0A3TmS2GEa9cLXE-uOnEp62AaPc6CF_w8d59QKI1QlIaoU1Iy9NqSfUk1qXVlrGI&usqp=CAc',
        title : 'Bajo Eléctrico Cort Open Pore',
        price : 645900

    }),
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/p_1734813_1024x1024@2x.jpg?v=1572374763',
        title : 'Piano de cola HG-158 Harrodser',
        price : 41000000

    }),
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/CV3465-VIOLIN4-4-VERONA-1_copia_1024x1024@2x.jpg?v=1501714301',
        title : 'Violín 1/4 verona HXTQ08P',
        price : 195900

    }),
    new Product({
        imagePath : 'https://cdn.shopify.com/s/files/1/2235/9983/products/LUDWIG_ACCENT_BLUE-01_245b44b3-4c10-493c-a268-5e1aab5f156b_1024x1024@2x.png?v=1544478403',
        title : 'Batería Acent 5p 20 Ludwig',
        price : 1812900

    }),
    new Product({
        imagePath : 'https://lacolonial.com.co/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/2/_/2_1_18.jpg',
        title : 'Flauta traversa New Orleans 6456N',
        price : 644700

    }),
    new Product({
        imagePath : 'https://lacolonial.com.co/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/3/_/3_12_16.jpg',
        title : 'Cello 3/4 Genova 1443P3/4',
        price : 1402800

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
