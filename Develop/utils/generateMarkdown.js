// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![MIT License](https://img.shields.io/badge/MIT-Licence-yellow)](${renderLicenseLink(
      license
    )})`;
  }
  if (license === "GPL") {
    return `[![GPLv3 License](https://img.shields.io/badge/GPL-License-blue)](${renderLicenseLink(
      license
    )})`;
  }
  if (license === "Apache") {
    return `[![Apache License](https://img.shields.io/badge/Apache-License-blue)](${renderLicenseLink(
      license
    )})`;
  }
  if (license === "None") {
    return `""`;
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  }
  if (license === "GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
  if (license === "Apache") {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  }
  if (license === "None") {
    return `" "`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ``;
}

function renderTables(answers) {
  if (answers.table === true) {
return `
---

<br>

## CONTENTS:
* [Installation](#INSTALLATION:)
* [Usage](#USAGE:)
* [Contribution guidelines](#CONTRIBUTION-GUIDELINES:)
* [Tests](#TESTS:)
${questionContentTable(answers.question)}
`;
  } else {
    return " ";
  }
}

function questionsConfirmed(question) {
  if (question === true) {
return `
---

<br>

## QUESTIONS: 
todo: placeholder till i write add github and email link 
`;
  } else {
    return " ";
  }
}
function questionContentTable(question) {
  if (question === true) {
    return `* [Questions](#QUESTIONS:)`;
  } else {
    return " ";
  }
}

// function plansConfirmed(future){
//   if (question === true) {
//     return `
//     ---

//     <br>

//     ## FUTURE PLANS:

//     `;
//   } else {
//     return " ";
//   }
// }

// a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${renderLicenseBadge(answers.license)}
  
  --- 
  --- 

  <br>
  
  ## DESCRIPTION: 
  ${answers.description}
  

  ${renderTables(answers)}
  
    
  ---

  <br>

  ## INSTALLATION:

  ${answers.installation}


  ---

  <br>

  ## USAGE: 

  ${answers.license}


  ---

  <br>

  ## CONTRIBUTION GUIDELINES:

  
  ![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)
  ${answers.contributing}
  

  ---

  <br>

  ## TESTS:

  ${answers.tests}


  ${questionsConfirmed(answers.question)}


  ---
  ---


`;
}

module.exports = generateMarkdown;

//${plansConfirmed(answers.future)} todo: work out why this section sends error when have more time
