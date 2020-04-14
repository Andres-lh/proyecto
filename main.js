const inquirer = require('inquirer');
const fs = require('fs');


var compra = [];
var orden;

//Modelos---------------------------------------------------------------------------------



var guitars = {
    acoustic : [
        {name : 'Guitarra Acústica Cort AC100op',value: 1.1 , price: 505900, units: 1},
        {name : 'Guitarra Acústica Squier Dreadnought',value: 1.2, price : 454900, units: 1},
        {name : 'Guitarra Acústica Valencia VC350', value: 1.3, price: 381900, units: 1},
        {name : 'Guitarra Acústica Fender CD-60SCCE', value : 1.4 ,price: 1379900, units: 1},
        {name: 'Volver al menú'}
    ],
    electric : [
        {name : 'Guitarra Eléctrica Cort CR100 BK',value: 2.1, price: 902900, units: 1},
        {name : 'Guitarra Eléctrica Epiphone les paul',value: 2.2, price: 765000, units: 1},
        {name : 'Guitarra Eléctrica Gibson SG fusion ', value: 2.3, price: 2609250, units: 1},
        {name : 'Guitarra Eléctrica Jazzmaster fender', value: 2.4, price: 1118900, units: 1},
        {name : 'Guitarra Eléctrica Stratocaster', value : 2.5, price: 1319900, units: 1},
        {name: 'Volver al menú'}
    ],
    electroAcoustic : [
        {name : 'Guitarra Electroacústica Texas Cutaway ', value: 3.1, price: 578000, units: 1},
        {name : 'Guitarra Electroacústica Washburn AG20CE', value: 3.2, price : 771750, units: 1},
        {name : 'Guitarra Electroacústica Cort AC160F', value: 3.3, price: 973900, units: 1},
        {name : 'Guitarra Electroacústica Epiphone AJ-210CE', value: 3.4, price: 1389900, units: 1},
        {name: 'Volver al menú'}
    ]
}

var bassGuitar = [
    {name : 'Bajo Eléctrico Cort Open Pore', value: 4.1, price: 645900, units: 1},
    {name : 'Bajo Eléctrico Squier AFF PJ ', value: 4.2, price: 995900, units: 1},
    {name : 'Bajo Eléctrico Texas ADK-E82-3TS ', value: 4.3, price: 552000, units: 1},
    {name : 'Bajo Eléctrico Washburn XB125B 5 cuerdas ', value: 4.4, price: 1425000, units: 1},
    {name : 'Bajo Electroacústico Cort SJB5F', value: 4.5, price: 1573900, units: 1},
    {name: 'Volver al menú'}
]

var pianos = {
    acoustic : [
        {name : 'Piano de cola HG-158 Harrodser', value: 5.1, price: 41000000, units: 1 },
        {name: 'Volver al menú'}
    ],
    electric : [
        {name : 'Teclado Kurzweil KP 110', value: 5.2, price: 843000, units: 1},
        {name : 'Piano digital yamaha P-125 ', value: 5.2, price: 2769000, units: 1},
        {name: 'Volver al menú'}
    ]

}

var others = [
    {name : 'Violín 1/4 verona HXTQ08P', value: 6.1, price: 195900, units: 1},
    {name : 'Cello 3/4 Genova 1443P3/4 ', value: 6.2, price: 1402800, units: 1},
    {name : 'Armónica Blues Band en C ', value: 6.3, price: 35000, units: 1},
    {name : 'Clarinete soprano New Orleans 6402 ', value: 6.4, price: 499800, units: 1},
    {name : 'Flauta traversa New Orleans 6456N', value: 6.5, price: 644700, units: 1},
    {name: 'Volver al menú'}
]

var percussion = [
    {name : 'Batería Acent 5p 20 Ludwig', value: 7.1, price: 1812900, units: 1 },
    {name : 'Batería Digital Medeli DD403', value: 7.2, price: 1815000, units: 1 }
]


//-------------------------------------------------------------------------------------

function run(){

    inquirer.prompt([
        {
            type : 'list',
            name : 'categoria',
            message : 'Escoge la categoria del instrumento que deseas ',
            choices : ['Guitarras','Bajos','Pianos','Cuerdas y Vientos','Percusión','Ver el carrito de compras','Factura','Salir']
    
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
            choices : guitars.acoustic
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de guitarras eléctricas',
            when : (answers) =>{
                return answers.guitarras === 'Guitarras Eléctricas';
            },
            choices : guitars.electric, 
            
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de guitarras electroacústicas',
            when : (answers) =>{
                return answers.guitarras === 'Guitarras Electroacústicas';
            },
            choices : guitars.electroAcoustic
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de bajos',
            when : (answers) =>{
                return answers.categoria === 'Bajos';
            },
            choices : bassGuitar
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
            choices : pianos.acoustic
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de pianos eléctricos',
            
            when : (answers) =>{
                return answers.pianos === 'Pianos Eléctricos';
            },
            choices : pianos.electric
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo de cuerdas y vientos',
            
            when : (answers) =>{
                return answers.categoria === 'Cuerdas y Vientos';
            },
            choices : others
        },
        {
            type : 'list',
            name : 'Instrumento',
            message : 'Este es nuestro catalogo en percusión',
            
            when : (answers) =>{
                return answers.categoria === 'Percusión';
            },
            choices : percussion
        },
        {
            type : 'list',
            name : 'carrito',
            message : 'Carrito de compras',
            
            when : (answers) =>{
                return answers.categoria === 'Ver el carrito de compras';
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
                'Generar Factura','Consulta de factura', 'Actualización de factura', 'Eliminar factura' 
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

            

            options(answers.Instrumento)
            a(answers.carrito, answers.categoria)
            run();
        })
        
        
}

run();


//Controladores-------------------------------------------------------------------------------

function options(aIntruments){    


    
    switch(aIntruments){
        case 1.1:
            //guitars.acoustic[0].units --;
            compra.push(guitars.acoustic[0])
            break;
        case 1.2:
            //guitars.acoustic[1].units --;
            compra.push(guitars.acoustic[1])
            break;
        case 1.3:
            //guitars.acoustic[2].units --;
            compra.push(guitars.acoustic[2])
            break;
        case 1.4:
            //guitars.acoustic[3].units --;
            compra.push(guitars.acoustic[3])
            break;
        case 2.1:
            //guitars.electric[0].units --;
            compra.push(guitars.electric[0])
            break;
        case 2.2:
            //guitars.electric[1].units --;
            compra.push(guitars.electric[1])
            break;
        case 2.3:
            //guitars.electric[2].units --;
            compra.push(guitars.electric[2])
            break;    
        case 2.4:
            //guitars.electric[3].units --;
            compra.push(guitars.electric[3])
            break;
        case 2.5:
            //guitars.electric[4].units --;
            compra.push(guitars.electric[4])
            break; 
        case 3.1:
            //guitars.electroAcoustic[0].units --;
            compra.push(guitars.electroAcoustic[0])
            break;
        case 3.2:
            //guitars.electroAcoustic[1].units --;
            compra.push(guitars.electroAcoustic[1])
            break;
        case 3.3:
            //guitars.electroAcoustic[2].units --;
            compra.push(guitars.electroAcoustic[2])
            break;
        case 3.4:
            //guitars.electroAcoustic[3].units --;
            compra.push(guitars.electroAcoustic[3])
            break;
        case 4.1:
            //bassGuitar[0].units --;
            compra.push(bassGuitar[0])
            break;
        case 4.2:
            //bassGuitar[1].units --;
            compra.push(bassGuitar[1])
            break;
        case 4.3:
            //bassGuitar[2].units --;
            compra.push(bassGuitar[2])
            break;    
        case 4.4:
            //bassGuitar[3].units --;
            compra.push(bassGuitar[3])
            break;
        case 4.5:
            //bassGuitar[4].units --;
            compra.push(bassGuitar[4])
            break;
        case 5.1:
            //pianos.acoustic[0].units --;
            compra.push(pianos.acoustic[0])
            break;
        case 5.2:
            //pianos.acoustic[1].units --;
            compra.push(pianos.electric[0])
            break;
        case 5.3:
            //pianos.acoustic[2].units --;
            compra.push(pianos.electric[1])
            break;
        case 6.1:
            //others[0].units --;
            compra.push(others[0])
            break;
        case 6.2:
            //others[1].units --;
            compra.push(others[1])
            break;
        case 6.3:
            //others[2].units --;
            compra.push(others[2])
            break;    
        case 6.4:
            //others[3].units --;
            compra.push(others[3])
            break;
        case 6.5:
            //others[4].units --;
            compra.push(others[4])
            break;
        case 7.1:
            //percussion[0].units --;
            compra.push(percussion[0])
            break;
        case 7.2:
            //percussion[1].units --;
            compra.push(percussion[1])
    }

}


function a(aCar,aCategory){
    
    if(aCar === 'Ver productos agregados'){
        console.table(compra);

    }else if(aCategory === 'Salir'){
        process.exit();
    }

}




//-----------------------------------------------------------------------------------