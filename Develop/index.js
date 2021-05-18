// GIVEN a command-line application that accepts user input

//TODO:
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//TODO:
// WHEN I enter my project title
// THEN this is displayed as the title of the README

//TODO:
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

//TODO:
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

//TODO:
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

//TODO:
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//TODO:
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generator = require('./utils/generateMarkdown');
  
console.log('!!Time to create a new README!!');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'fileName',
    message: 'Enter the README file name (title only no extension): ',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Please Enter your README project title: ',
  },
  {
    type: 'editor',
    name: 'description',
    message: 'Now please write a description: ',
  },
  {
    type: 'editor',
    name: 'table',
    message: 'A contents table would be handy: ',
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'You may want to enter some installation instructions: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How about some usage instructions: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose your preferred licensing: ', 
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are your contribution guidelines: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: "Test information: ",
  },
  {
    type: 'confirm',
    name: 'question',
    message: 'Would you like to include a questions section?: '
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, data, function (err){
    if (err) throw err;
    console.log('Writing README...')
  })
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('Example: \n')
  })
  writeToFile(fileName, data)
}


// Function call to initialize app
init();
