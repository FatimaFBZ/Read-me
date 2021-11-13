// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
//const utils = require("./utils/generateMarkdown.js");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input


const questions = [{
    type: "input",
    message: "what is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "Table of contents.",
    name: "Table Of Contents"

}, {
    type: "input",
    message: "what is the project about?",
    name: "Description",
}, {
    type: "input",
    message: "what is your GitHub user name?",
    name: "username",
}, {
    type: "input",
    message: "what is your email address?",
    name: "email",

}, {
    type: "list",
    message: "what license did you used?",
    name: "license",
    choices: ['The MIT License', 'The IBM License', 'Apache License', 'Mozilla License']
}, {
    type: "input",
    message: "how do you use your app?",
    name: 'usage',

}, {
    type: "input",
    message: "installation?",
    name: "Installation",
}, {
    type: "input",
    message: "instructions to follow?",
    name: "Instructions",
}]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    console.log("about the write a file")
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)


        if (err) {
            return console.log(err)
        } else {
            console.log('success' + fileName)
        }
    })


}

// TODO: Create a function to initialize app
function init() {
    console.log('INSIDE THE INIT!')
    inquirer.prompt(questions)
        .then(function (data) {
            console.log("inquirer is done")
            writeToFile('README.md', generateMarkdown(data));
            //console.log(data)

        })
        .catch(function (err) {
            console.log('ERRRRRR', err)
        })

}

// Function call to initialize app
init();
