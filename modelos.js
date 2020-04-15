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


exports.guitars = guitars;
exports.bassGuitar = bassGuitar;
exports.pianos = pianos;
exports.others = others;
exports.percussion = percussion;

