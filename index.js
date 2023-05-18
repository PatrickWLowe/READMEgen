// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const GenMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Would You like a Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Would You like a "Descriptions" Section?',
    },
    {
        type: 'input',
        name: 'installations',
        message: 'Would You like a "Installation" Section?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Would You like a "Usage" Section?',
    },
    {
        type: 'input',
        name: 'License',
        message: 'Would You like to add a "License"?',
        choices: ['MIT', 'Apache 2.0' ],
        filter(choice) {
           return choice; 
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Would You like a "Contributing" Section?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Would You like a "Tests" Section?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Would You like a "Questions" Section?',
    },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
