// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("generating markdown")
  return `
  # ${data.Title}
  https://github.com/${data.username}/${data.Title}![GitHub license](https://img.shields.io/badge/license-Apache-blue.svg)
 # Description
 ${data.Description}
 # Table Of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [questions](#questions)
 # installation
 ${data.Installation}
 The foloowing necessary dependencies must be installed to run the application.
 # usage
 ${data.usage}
 # license
 ${data.license}
 
 # contact
 # gitHub:${data.username}
 # email:${data.email};




  ${renderLicenseBadge(data.license)}`
}




module.exports = generateMarkdown;
