const inquirer = require('inquirer');
const fs = require('fs');
const controladores = require('./controladores');
const modelos = require('./modelos');


function run(){

    inquirer.prompt([
        {
            type : 'list',
            name : 'categoria',
            message : 'Escoge la categoria del instrumento que deseas ',
            choices : ['Guitarras','Bajos','Pianos','Cuerdas y Vientos','Percusión','Carrito de compras','Factura','Salir']
    
        },
        {
            type : 'list',
            name : 'guitarras',
            message : '¿Que tipo de guitarra?',
            when : (answers) =>{
                return answers.categoria === 'Guitarras';
            },
            choices : ['Guitarras Acústicas','Guitarras Eléctricas','Guitarras Electroacústicas', 'Volver al menú']
            
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de guitarras acústicas',
            when : (answers) =>{
                return answers.guitarras === 'Guitarras Acústicas';
            },
            choices : modelos.guitars.acoustic
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de guitarras eléctricas',
            when : (answers) =>{
                return answers.guitarras === 'Guitarras Eléctricas';
            },
            choices : modelos.guitars.electric, 
            
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de guitarras electroacústicas',
            when : (answers) =>{
                return answers.guitarras === 'Guitarras Electroacústicas';
            },
            choices : modelos.guitars.electroAcoustic
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de bajos',
            when : (answers) =>{
                return answers.categoria === 'Bajos';
            },
            choices : modelos.bassGuitar
        },
        {
            type : 'list',
            name : 'pianos',
            message : '¿Que tipo de piano?',
            when : (answers) =>{
                return answers.categoria === 'Pianos';
            },
            choices : [
                'Pianos Acústicos','Pianos Eléctricos', 'Volver al menú'
            ]
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de pianos acústicos',
            when : (answers) =>{
                return answers.pianos === 'Pianos Acústicos';
            },
            choices : modelos.pianos.acoustic
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de pianos eléctricos',
            
            when : (answers) =>{
                return answers.pianos === 'Pianos Eléctricos';
            },
            choices : modelos.pianos.electric
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de cuerdas y vientos',
            
            when : (answers) =>{
                return answers.categoria === 'Cuerdas y Vientos';
            },
            choices : modelos.others
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo en percusión',
            
            when : (answers) =>{
                return answers.categoria === 'Percusión';
            },
            choices : modelos.percussion
        },
        {
            type : 'list',
            name : 'carrito',
            message : 'Carrito de compras',
            
            when : (answers) =>{
                return answers.categoria === 'Carrito de compras';
            },
            choices : [
                'Ver productos agregados','Recibo', 'Comprar', 'Volver al menú' 
            ],    
        },
        {  
            type : 'list',
            name : 'recibo',
            message : 'Factura',
            when : (answers)=>{
                return answers.categoria === 'Factura';
            },
            choices : [
                'Generar Factura','Consulta de factura', 'Actualización de factura', 'Eliminar factura', 'Volver al menú'
            ], 

        },
        {  
            type : 'input',
            name : 'gen-factura',
            message : 'Ingrese número de la factura',
            when : (answers)=>{
                return answers.recibo === 'Generar Factura'
            },

        },
        {  
            type : 'input',
            name : 'cons-factura',
            message : 'Ingrese número de la factura',
            when : (answers)=>{
                return answers.recibo === 'Consulta de factura'
            },

        },
        {  
            type : 'input',
            name : 'act-factura',
            message : 'Ingrese número de la factura',
            when : (answers)=>{
                return answers.recibo === 'Actualización de factura'
            },

        },
        {  
            type : 'input',
            name : 'elim-factura',
            message : 'Ingrese número de la factura',
            when : (answers)=>{
                return answers.recibo === 'Eliminar factura'
            },

        },        
        
    ])
        .then(answers => {
            
            if(answers.recibo === 'Generar Factura'){
                fs.writeFile(`./${answers["gen-factura"]}`, JSON.stringify(compra), (err)=>{
                    if(err) console.log(err);
                    console.log('factura generada');
                    
                })
            }else if (answers.recibo === 'Consulta de factura'){
                fs.readFile(`./${answers["cons-factura"]}`, (err,data) =>{
                    if(err) console.log(err);
                    console.log('\n '+ data.toString());
                    
                })
            }else if(answers.recibo === 'Eliminar factura'){
                fs.unlink(`./${answers["elim-factura"]}`, (err) =>{
                    if(err) console.log(err);
                    console.log('Factura eliminada');    
                } )
            }

            
            controladores.options(answers.Instrumento)
            controladores.options2(answers.carrito, answers.categoria)
            run();
        })
        
        
}

run();

setInterval(()=>{
    console.log('\n Gracias por preferirnos')
},30000)
