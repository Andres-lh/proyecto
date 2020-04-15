const inquirer = require("inquirer");
const modelos = require('./modelos');

var compra = [];

function options (aIntruments){    

    
    
    switch(aIntruments){
        case 1.1:
            //guitars.acoustic[0].units --;
            compra.push(modelos.guitars.acoustic[0])
            break;
        case 1.2:
            //guitars.acoustic[1].units --;
            compra.push(modelos.guitars.acoustic[1])
            break;
        case 1.3:
            //guitars.acoustic[2].units --;
            compra.push(modelos.guitars.acoustic[2])
            break;
        case 1.4:
            //guitars.acoustic[3].units --;
            compra.push(modelos.guitars.acoustic[3])
            break;
        case 2.1:
            //guitars.electric[0].units --;
            compra.push(modelos.guitars.electric[0])
            break;
        case 2.2:
            //guitars.electric[1].units --;
            compra.push(modelos.guitars.electric[1])
            break;
        case 2.3:
            //guitars.electric[2].units --;
            compra.push(modelos.guitars.electric[2])
            break;    
        case 2.4:
            //guitars.electric[3].units --;
            compra.push(modelos.guitars.electric[3])
            break;
        case 2.5:
            //guitars.electric[4].units --;
            compra.push(modelos.guitars.electric[4])
            break; 
        case 3.1:
            //guitars.electroAcoustic[0].units --;
            compra.push(modelos.guitars.electroAcoustic[0])
            break;
        case 3.2:
            //guitars.electroAcoustic[1].units --;
            compra.push(modelos.guitars.electroAcoustic[1])
            break;
        case 3.3:
            //guitars.electroAcoustic[2].units --;
            compra.push(modelos.guitars.electroAcoustic[2])
            break;
        case 3.4:
            //guitars.electroAcoustic[3].units --;
            compra.push(modelos.guitars.electroAcoustic[3])
            break;
        case 4.1:
            //bassGuitar[0].units --;
            compra.push(modelos.bassGuitar[0])
            break;
        case 4.2:
            //bassGuitar[1].units --;
            compra.push(modelos.bassGuitar[1])
            break;
        case 4.3:
            //bassGuitar[2].units --;
            compra.push(modelos.bassGuitar[2])
            break;    
        case 4.4:
            //bassGuitar[3].units --;
            compra.push(modelos.bassGuitar[3])
            break;
        case 4.5:
            //bassGuitar[4].units --;
            compra.push(modelos.bassGuitar[4])
            break;
        case 5.1:
            //pianos.acoustic[0].units --;
            compra.push(modelos.pianos.acoustic[0])
            break;
        case 5.2:
            //pianos.acoustic[1].units --;
            compra.push(modelos.pianos.electric[0])
            break;
        case 5.3:
            //pianos.acoustic[2].units --;
            compra.push(modelos.pianos.electric[1])
            break;
        case 6.1:
            //others[0].units --;
            compra.push(modelos.others[0])
            break;
        case 6.2:
            //others[1].units --;
            compra.push(modelos.others[1])
            break;
        case 6.3:
            //others[2].units --;
            compra.push(modelos.others[2])
            break;    
        case 6.4:
            //others[3].units --;
            compra.push(modelos.others[3])
            break;
        case 6.5:
            //others[4].units --;
            compra.push(modelos.others[4])
            break;
        case 7.1:
            //percussion[0].units --;
            compra.push(modelos.percussion[0])
            break;
        case 7.2:
            //percussion[1].units --;
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

module.exports.options = options
module.exports.options2= options2;