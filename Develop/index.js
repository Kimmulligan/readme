// array of questions for user
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require(`inquirer`)
const questions = [
{
  message: "What is your title?",
  type: "input",
  name: "title",
  default: "title"
},
{
  message: "What is your description?",
  type: "input",
  name: "description",
  default: "description"
},
{
  message: "Choose licence.",
  type: "list",
  name: "licence",
  default: "MIT licence",
  choices: ["MIT licence", "GNU GPLv3 licence", "Apache licence 2.0"]
},
{
  message: "How do you install the program?",
  type: "input",
  name: "installation",
  default: "npm install",
},
{
  message: "How do run the program?",
  type: "input",
  name: "run",
  default: "node index.js",
},
{
  message: "What are the githubs of the contributors? List with commas.",
  type: "input",
  name: "contributors",
  default: "",
},
{
  message: "List any third-party assets creator's links. List with commas.",
  type: "input",
  name: "thirdPartyAssets",
  default: "",
},
{
  message: "Describe how others can contribute to the project?(The default is Contributer Covenant)",
  type: "input",
  name: "futureContributors",
  default: `# Contributor Covenant Code of Conduct`,
},
{
  message: "What is the name of your github?",
  type: "input",
  name: "github",
  default: ""
},
{
  message: "What is your repo name?",
  type: "input",
  name: "repo",
  default: ""
},
{
  message: "How do run the tests",
  type: "input",
  name: "tests",
  default: "npm test"
},




];

// function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, function(){

})
}

// function to initialize program
function init() {
  inquirer
  .prompt(
    questions
    /* Pass your questions in here */
  )
  .then(answers => {
    const returnValue = generateMarkdown(answers)
    writeToFile("readme.md", returnValue)
    // Use user feedback for... whatever!!
  })
}

// function call to initialize program
init();
