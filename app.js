
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro) {
    return euro*1.2;
}

function fromDollarToYen(dolares) {
    return (dolares/1.2)*127.9;
}

function fromYenToPound(yenes) {
    return (yenes/127.9)*0.8;
}

console.log(fromDollarToYen(2));

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}

