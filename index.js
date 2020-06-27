// require fs
// require inquirer
var inquirer = require("inquirer");
var fs = require("fs");
const questions = [
    inquirer
    .prompt( [
        {
            type: "input",
            message: "What is your description?",
            name: "title",
        },

    {
        type: "input",
        message: "What is your description?",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
      },
      {
          type: "input",
          message: "What are your instructions for use?",
          name: "usage",
        },
        {
          type: "input",
          message: "Who are your collaborators?",
          name: "credits",
        },
        {
          type: "input",
          message: "What is your licenses?",
          name: "license",
        },
        {
          type: "input",
          message: "What are your contribution guidelines?",
          name: "contributing",
        },
        {
          type: "input",
          message: "What tests were ran?",
          name: "tests",
        },
           {
          type: "input",
          message: "Questions?",
          name: "questions",
        },
    ])
  ]
    .then(function (data) {
      var filename = data.name.toLowerCase().split(" ").join("") + ".json";
      fs.writeFile(filename, JSON.stringify(data, null, "\t"), function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
    });

// array of questions for user
const questions = [
    // https://www.npmjs.com/package/inquirer#questions

];

// function to write README file
function writeToFile(fileName, data) {
    // Use the fs package
}

// function to initialize program
function init() {
// Use the inquirer package
}

// function call to initialize program
init();
