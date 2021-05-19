

// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![MIT License](https://img.shields.io/badge/MIT-Licence-yellow)](${renderLicenseLink(license)})`
  }
  if (license === 'GPL') {
    return `[![GPLv3 License](https://img.shields.io/badge/GPL-License-blue)]`
  }
  if (license === 'Apache') {
    return `[![Apache License](https://img.shields.io/badge/Apache-License-blue)]`
  }
  if (license === 'None') {
    return `""`
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'GPL') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }
  if (license === 'Apache') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  }
  if (license === 'None') {
    return `" "`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} 
  ${renderLicenseBadge(answers.license)}
  <br>

  --- 
  --- 

  <br>
  
  # DESCRIPTION 
  ## ${answers.description} 

`;
}

module.exports = generateMarkdown;
