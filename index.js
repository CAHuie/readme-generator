// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Give your project a name.',
      },
      {
        name: 'userName',
        message: 'Enter your Github Username.',
      },
      {
        name: 'description',
        message: 'What is your project about? What does it do? What are you hoping to accomplish with it?',
      },
      {
        name: 'installation',
        message: 'Describe the installation process for your project. List any modules that will need to be installed for it to run.',
      },
      {
        name: 'usage',
        message: 'Provide instructions for the usage of your project. Include pictures as needed.',
      },
      {
        name: 'license',
        message: 'Describe what your project may and may not be used for. Include any special permissions that must be sought.',
      },
      {
        name: 'contributing',
        message: 'If you wish for others to build on your project, include instructions on accessing the project and guidelines for contribution.',
      },
      {
        name: 'tests',
        message: 'What kind of tests did you run?',
      },
        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();
