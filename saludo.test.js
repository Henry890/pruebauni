const holaMundo = require('./saludo');

test('Debe devolver "Hola, Mundo!"', () => {
    expect(holaMundo()).toBe('Hola, Mundo!');
});