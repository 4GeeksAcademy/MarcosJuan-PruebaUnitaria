const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test ('Mensaje: Un euro debe ser 1.07 dólares', () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test ('Mensaje: Un dólar debe ser 146.26 yenes', () => {
    const yenes = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    expect(yenes).toBe(expected);
});

test ('Mensaje: Un yen debe ser 0.00557 libras', () => {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pounds).toBe(expected);
});