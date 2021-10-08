// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = 
inquirer.prompt([
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
    const readMePageContent = generateReadMe(answers);

        fs.writeFile('readMe.md', readMePageContent, (err) => err ? console.log(err) : console.log('Successfully created index.html!')
        )
})

// TODO: Create a function to write README file
function writeToFile(readMe.md, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
