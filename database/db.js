const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('MondoDb está conectado'))
    .catch(err => console.log(err) )