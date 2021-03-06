// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

console.log("!!Time to create a new README!! LETS GO!");
// An array of questions for user input
const questions = [
  {
    type: "input", //todo:make so cant enter white space for filename (maybe filter look into later.) 
                   //todo:have alook at a would you like to use editor function incase user would like to enter text after the readme is generated
    name: "fileName",
    message: "Enter the README file name (File name only no extension): ",
    // filter: function(answers){
    //   if (answers.fileName === undefined) {
    //     answers.fileName = "README";
    //   }
    // }
  },
  {
    type: "input",
    name: "title",
    message: "Please Enter your README project title: ",
  },
  {
    type: "input",
    name: "author",
    message: "Please enter author's name: ", 
  },
  {
    type: "editor",
    name: "description",
    message: "Now please write a description: ",
  },
  {
    type: "confirm",
    name: "table",
    message: "A contents table would be handy: ",
  },
  {
    type: "editor",
    name: "installation",
    message: "You may want to enter some installation instructions: ",
  },
  {
    type: "editor",
    name: "usage",
    message: "How about some usage instructions: ",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your preferred licensing: ",
    choices: ["Apache", "GPL", "MIT", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are your contribution guidelines: ",
  },
  {
    type: "input",
    name: "tests",
    message: "Test information: ",
  },
  {
    type: "confirm",
    name: "question",
    message: "Would you like to include a questions section?: ",
  },
  {
    when: (answers) => answers.question === true,
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  {
    when: (answers) => answers.question === true,
    type: "input",
    name: "email",
    message: "Enter your Email address.",
  },
  {
    type: "confirm",
    name: "future",
    message:
      "Lastly do you have any plans you would like to document for the future?",
  },
];

// a function to write README file
function writeToFile(answers) {
  fs.writeFile(
    `${answers.fileName}.md`,
    generateMarkdown(answers),
    function (err) {
      if (err) throw err;
      console.log(`Writing ${answers.fileName}.md...`);
      console.log(`\n ...${answers.fileName}.md created.`);
    }
  );
}
// original code
// function writeToFile(fileName, markDownString) {
//   fs.writeFile(`${fileName}.md`, markDownString, function (err){
//     if (err) throw err;
//     console.log('Writing README...')
//     console.log(`${fileName}.md`)
//   })
// }

// a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(" \n ");
    writeToFile(answers);
  });
  // original code
  // inquirer.prompt(questions).then((answers) => {
  //   console.log('Example: \n')
  //   writeToFile(answers.fileName, generateMarkdown(answers))
  // })
}

// Function call to initialize app
init();
