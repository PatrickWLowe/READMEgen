// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const GenMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would You like your Project Title to be?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a Description of your Project?',
    },
    {
        type: 'input',
        name: 'installations',
        message: 'Please add any information to your "Installation" Section?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please add any information to your "Usage" Section?',
    },
    {
        type: 'list',
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
        message: 'Please add any information to your "Contributing" Section?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please add any information to your "Tests" Section?',
    },
    {
        type: 'input',
        name: 'QuestionsSec',
        message: 'Please add any information to your "Questions" Section?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your github username?',
    },
    
];



// TODO: Create a function to write README file
const writeToFile = Filecontent => {
    fs.writeFile('README.md', Filecontent, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Your README.md file has been created')
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        return data;
    }) 
};

// Function call to initialize app

init()
.then(data => {
    console.log(data);
    return GenMD(data);
})
.then(pageMD => {
    return writeToFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
});