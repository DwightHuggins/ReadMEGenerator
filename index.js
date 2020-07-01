// require fs
// require inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is your title?",
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
    type: "list",
    message: "What is your licenses?",
    choices: ["MIT", "GPL", "Apache License", "Mozilla Public License"],
    name: "license"
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
    message: "What's your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
];
// inquirer.prompt method
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    //Write file called ReadMe

    generateMarkdown(data)
      .then((md) => {
        fs.writeFile("sampleReadMe.md", md, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("Success!");
        });
      })
      .catch((err) => console.log(err));
  });
}
//function call to initlialize
init();
