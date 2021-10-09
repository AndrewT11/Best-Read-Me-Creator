// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please specify any installation instructinos'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please Provide some usage information'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list any contributing guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What test instructions would you like to include?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located?'
    },
    {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?'
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
.then((answers) => {
    const readMeGenerator = generateMarkdown(answers);

        fs.writeFile('readMe.md', readMeGenerator, (err) => err ? console.log(err) : console.log('Successfully created readMe.md!')
        )
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
