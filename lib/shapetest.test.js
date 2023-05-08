const {Circle, Square, Triangle} = require('./shapes.js');

describe("Triangle", () => {
    it("Will be a triangle with a set text and color", () => {
        const triangle = new Triangle();
        triangle.setText('JSR');
        triangle.setColor('red');
        expect(triangle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">JSR</text></svg>')})
});


describe("Circle", () => {
    it("Will be a circle with a set text and color", () => {
        const circle = new Circle();
        circle.setText('JSR');
        circle.setColor('red');
        expect(circle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">JSR</text></svg>')})
});



describe("Square", () => {
    it("Will be a square with a set text and color", () => {
        const square = new Square();
        square.setText('JSR');
        square.setColor('red');
        expect(square.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" x="90" y="40" fill="red" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">JSR</text></svg>')})
});