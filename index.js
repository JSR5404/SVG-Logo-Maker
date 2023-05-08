const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {Triangle, Circle, Square} = require('./lib/shapes.js');

const questions = [
    {
      type: "input",
        message: "Enter Three Logo Letters",
        name: "letters",
      validate: (input) => {
        if (input.length > 3) {return false} else {return true}
      },
    },
    {
      type: "list",
      message: "Select Your Shape",
      name: "shapes",
      choices: ["Square", "Triangle", "Circle"],
    },
    {
      type: "input",
      message: "Select Your Color",
      name: "color",
    },
  ];

  function init() {
    inquirer.prompt(questions).then((response) => {generateSVG(response.color, response.shapes, response.letters)})};

    function generateSVG(color, shapes, letters) {
        let newShape;
        let code;
        switch (shapes) {
                
                case 'Square':
                newShape = new Square();
                newShape.setColor(color);
                newShape.setText(letters);
                code = newShape.render();
                break
                
                case 'Triangle':
                newShape = new Triangle();
                newShape.setColor(color);
                newShape.setText(letters);
                code = newShape.render();
                break
                
                case 'Circle':
                newShape = new Circle();
                newShape.setColor(color);
                newShape.setText(letters);
                code = newShape.render();
                break
            
        }
console.log("New Logo Created!");
        fs.writeFileSync(path.join(__dirname, '.', 'examples', 'yourlogo.svg'), code)
    };
    init();