const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser =  require('cookie-parser');
const morgan = require('morgan');
const order = require('./controllers/order');
const mongoose = require('mongoose');
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const logger = require('morgan');
const flash = require('connect-flash');
//const MongoStore = require('connect-mongo')(session);


const app = express();
require('./database/db');
require('./config/passport');

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    extname : 'hbs',
    defaultLayout : 'layout',
    layoutsDir : path.join(app.get('views')),
    partialsDir: path.join(app.get('views'), 'partials')
    
}));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cookieParser());
app.use(session({
    secret: 'SecretPassword',
    resave: false,
    saveUninitialized: false,
    //store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 120 * 60 * 60 }
  }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(validator());





app.use(require('./routes/index.js'))
app.use(require('./routes/cart.js'))
app.use(require('./routes/users.js'))


app.listen(app.get('port'), ()=>{
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
    
})