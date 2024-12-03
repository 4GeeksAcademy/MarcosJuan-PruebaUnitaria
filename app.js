let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToDollar = (amountInEuro) => {
    return amountInEuro * 1.07;
};

const fromDollarToYen = (amountInDollar) => {
    let amountInEuro = amountInDollar / 1.07;
    return amountInEuro * 156.5;
};

const fromYenToPound = (amountInYen) => {
    let amountInEuro = amountInYen / 156.5;
    return amountInEuro * 0.87;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};
