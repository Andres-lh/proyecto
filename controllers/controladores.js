const inquirer = require("inquirer");
const modelos = require('./modelos');
const util = require('util');
const eventEmitter = require('events').EventEmitter;


var compra = [];


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
                var format = util.format('Productos : \n %j' , compra)
                
                fs.writeFile(`./${answers["gen-factura"]}`, format, (err)=>{
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

            options(answers.Instrumento)
            options2(answers.carrito, answers.categoria)
            run();
        })
        
        
}





function options (aIntruments){    

    
    switch(aIntruments){
        case 1.1:
            modelos.guitars.acoustic[0].units --;
            unitsError(modelos.guitars.acoustic[0].units,modelos.guitars.acoustic[0].name )
            compra.push(modelos.guitars.acoustic[0])
            break;
        case 1.2:
            modelos.guitars.acoustic[1].units --;
            unitsError(modelos.guitars.acoustic[1].units,modelos.guitars.acoustic[1].name )
            compra.push(modelos.guitars.acoustic[1])
            break;
        case 1.3:
            modelos.guitars.acoustic[2].units --;
            unitsError(modelos.guitars.acoustic[2].units,modelos.guitars.acoustic[2].name )
            compra.push(modelos.guitars.acoustic[2])
            break;
        case 1.4:
            modelos.guitars.acoustic[3].units --;
            unitsError(modelos.guitars.acoustic[3].units,modelos.guitars.acoustic[3].name )
            compra.push(modelos.guitars.acoustic[3])
            break;
        case 2.1:
            modelos.guitars.electric[0].units --;
            compra.push(modelos.guitars.electric[0])
            break;
        case 2.2:
            modelos.guitars.electric[1].units --;
            compra.push(modelos.guitars.electric[1])
            break;
        case 2.3:
            modelos.guitars.electric[2].units --;
            compra.push(modelos.guitars.electric[2])
            break;    
        case 2.4:
            modelos.guitars.electric[3].units --;
            compra.push(modelos.guitars.electric[3])
            break;
        case 2.5:
            modelos.guitars.electric[4].units --;
            compra.push(modelos.guitars.electric[4])
            break; 
        case 3.1:
            modelos.guitars.electroAcoustic[0].units --;
            compra.push(modelos.guitars.electroAcoustic[0])
            break;
        case 3.2:
            modelos.guitars.electroAcoustic[1].units --;
            compra.push(modelos.guitars.electroAcoustic[1])
            break;
        case 3.3:
            modelos.guitars.electroAcoustic[2].units --;
            compra.push(modelos.guitars.electroAcoustic[2])
            break;
        case 3.4:
            modelos.guitars.electroAcoustic[3].units --;
            compra.push(modelos.guitars.electroAcoustic[3])
            break;
        case 4.1:
            modelos.bassGuitar[0].units --;
            compra.push(modelos.bassGuitar[0])
            break;
        case 4.2:
            modelos.bassGuitar[1].units --;
            compra.push(modelos.bassGuitar[1])
            break;
        case 4.3:
            modelos.bassGuitar[2].units --;
            compra.push(modelos.bassGuitar[2])
            break;    
        case 4.4:
            modelos.bassGuitar[3].units --;
            compra.push(modelos.bassGuitar[3])
            break;
        case 4.5:
            modelos.bassGuitar[4].units --;
            compra.push(modelos.bassGuitar[4])
            break;
        case 5.1:
            modelos.pianos.acoustic[0].units --;
            compra.push(modelos.pianos.acoustic[0])
            break;
        case 5.2:
            modelos.pianos.acoustic[1].units --;
            compra.push(modelos.pianos.electric[0])
            break;
        case 5.3:
            modelos.pianos.acoustic[2].units --;
            compra.push(modelos.pianos.electric[1])
            break;
        case 6.1:
            modelos.others[0].units --;
            compra.push(modelos.others[0])
            break;
        case 6.2:
            modelos.others[1].units --;
            compra.push(modelos.others[1])
            break;
        case 6.3:
            modelos.others[2].units --;
            compra.push(modelos.others[2])
            break;    
        case 6.4:
            modelos.others[3].units --;
            compra.push(modelos.others[3])
            break;
        case 6.5:
            modelos.others[4].units --;
            compra.push(modelos.others[4])
            break;
        case 7.1:
            modelos.percussion[0].units --;
            compra.push(modelos.percussion[0])
            break;
        case 7.2:
            modelos.percussion[1].units --;
            compra.push(modelos.percussion[1])
    }

    

}


function options2(aCar,aCategory){
    
    if(aCar === 'Ver productos agregados'){
        console.table(compra, ['name', 'price']);

    }else if(aCategory === 'Salir'){
        process.exit();
    }

}


function unitsError(instUnits,inst) {
    if(instUnits < 0 ) {
        
        throw new Error(util.format('lo sentimos por el momentos no nos quedan mas unidades de %s', inst))   
    }
} 













module.exports ={
    run,
    options,
    options2,
    compra
} 

