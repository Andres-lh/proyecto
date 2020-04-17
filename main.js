const controladores = require('./controladores');
const http = require('http');
const https = require('https');


http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    

    const responseBody = { headers, method, url, body};

    response.write(JSON.stringify(responseBody));
    response.end('La aplicacion se inició', controladores.run);
    
    
  });
}).listen(3000);


setInterval(()=>{
    console.log('\n Gracias por preferirnos, si necesitas ayuda puedes contactarnos')
},30000)
