const controladores = require('./controladores');
var http = require('http');


var server = http.createServer((req, res) =>{
    
    res.end('<h1>La aplicación se inició</h1>' , controladores.run);
});
server.listen(3000, () =>{
   console.log("El servidor está listo");
});



setInterval(()=>{
    console.log('\n Gracias por preferirnos, si necesitas ayuda puedes contactarnos')
},30000)
