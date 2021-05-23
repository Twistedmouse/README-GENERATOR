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
function renderLicenseSection(answers) {
  if (answers.license === "Apache") {
    return `
${renderLicenseLink(answers.license)} License
Version 2.0, January 2004
http://www.apache.org/licenses/
${renderLicenseBadge(answers.license)}
`;
  }

  if (answers.license === "GNU") {
    return `
${renderLicenseLink(answers.license)} GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation, Inc. https://fsf.org/ Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
${renderLicenseBadge(answers.license)}
`;
  }

  if (answers.license === "MIT") {
    return `
${renderLicenseLink(answers.license)} License
Copyright (c) 2021 ${answers.author}
${renderLicenseBadge(answers.license)}
`;
  }
  if (answers.license === "None") {
    return "";
  }
}

//renders a contents table in the markdown
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

function questionsConfirmed(answers) {
  if (answers.question === true) {
    return `
---

<br>

## QUESTIONS: 
If you have questions, head to my [GitHub](https://github.com/${answers.github}) 
or send an email at ${answers.email}
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

function plansConfirmed(future) {
  if (future === true) {
    return `
---

<br>

## FUTURE PLANS:

`;
  } else {
    return " ";
  }
}

// a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} 
  
  ${renderLicenseBadge(answers.license)}

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


${answers.usage}


---

<br>

## CONTRIBUTION GUIDELINES:


![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)
${answers.contributing} \n


---

<br>

## TESTS:

${answers.tests}


${questionsConfirmed(answers)}


${plansConfirmed(answers.future)}


---
---
${renderLicenseSection(answers)}

`;
}

module.exports = generateMarkdown;
