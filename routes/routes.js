const express = require('express');
const router = express.Router();
const models = require('../models/modelos')



router.get('/', (req,res)=>{
    res.render('index', { title : 'Tienda de instrumentos musicales'})
})

router.get('/guitars', (req,res)=>{
    res.render('guitars', { title : 'Guitarras'})
})

router.get('/baseGuitars', (req,res)=>{
    res.render('baseGuitars',{ title : 'Bajos'})
})

router.get('/pianos', (req,res)=>{
    res.render('pianos', { title : 'Pianos'})
})

router.get('/strings', (req,res)=>{
    res.render('strings', { title : 'Cuerdas'})
})

router.get('/wind', (req,res)=>{
    res.render('wind', { title : 'Vientos'})
})

router.get('/drums', (req,res)=>{
    res.render('drums', { title : 'Percusión'})
})

module.exports = router;