// importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One  dollar should be 106,583333 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yen = fromDollarToYen(1)

    
    const expected = (1/1.2)*127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yen);
})

test("One  yen should be 0,00625489 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')


    const pound = fromYenToPound(1)

    
    const expected = (1/127.9)*0.8;
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pound);
})
