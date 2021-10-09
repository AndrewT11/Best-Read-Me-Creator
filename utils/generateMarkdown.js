// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//   [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
//   [![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//   [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Title 

  ${data.title}

  ## Description

  ${data.description}

  ## License
  
  ${data.licenseBadge}
  
  ## Table of Contents

  ## Installation

  This is required for installation:

  # ${data.installation}

  ## Usage 

  ${data.usage}

  ## Contribution Guidelines 
  
  ${data.contribution}

  ## Test Instructions
  
  ${data.test}


  ## Questions

  Contact me by the following:

  GitHub Link: [${data.github}](http://www.github.com/${data.github})

  LinkedIn: [${data.linkedin}](http://www.linkedin.com/${data.linkedin})
`;
}
// [TEXT TO SHOW](actual URL to navigate)
module.exports = generateMarkdown;
