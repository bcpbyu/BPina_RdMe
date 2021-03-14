// Include necessarry files and things
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title or your project? ',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'A brief description of the project: ',
    },
    {
        type: 'input',
        name: 'intall',
        message: 'Instrustions to install: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage info: ',
    },
    {
        type: 'input',
        name: 'contr',
        message: 'Guidelines for contribution: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your project license? ',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: 'input',
        name: 'git',
        message: 'What is your github username? ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? ',
    },

];

// function to call questions and create ReadMe
function init() {
    inquirer.prompt(questions).then((ans) => {
        const readMe = generateMarkdown(ans);
        fs.writeFile('README_generated.md', readMe, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
}

// function call to initialize program
init();
