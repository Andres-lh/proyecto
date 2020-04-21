const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const order = require('./controllers/order');
const mongoose = require('mongoose');


const app = express();
require('./database/db')

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    extname : 'hbs',
    defaultLayout : 'layout',
    layoutsDir : path.join(app.get('views')),
    partialsDir: path.join(app.get('views'), 'partials')
    
}));
app.set('view engine', 'hbs');



app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(bodyParser.json())

app.use(require('./routes/routes.js'))



app.listen(app.get('port'), ()=>{
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
    
})