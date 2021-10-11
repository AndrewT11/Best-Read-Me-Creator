// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a brief description of your project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project have?',
            choices: [
                'MIT',
                'ODbL',
                'GPLv3',
                'ISC',
                'Unlicense'
            ]
        },
        {
            type: 'list',
            name: 'color',
            message: 'What color would you like your license badge?',
            choices: [
                'yellow',
                'brightgreen',
                'lightgreen',
                'blue',
                'lightgrey',
                'red',
                'orange'
            ]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please specify installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please list any contributions'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What test(s) instructions would you like to include?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please input your Github Username'
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Please input your LinkedIn Username'
        },
    ])    
}
// .then((answers) => writeToFile(answers))
//     .catch((err) => console.error(err));

// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFileSync('newReadMes/readMe.md', generateMarkdown(answers))
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => writeToFile(answers))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
