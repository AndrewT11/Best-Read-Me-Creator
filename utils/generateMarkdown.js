// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license) {
      return `![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
    } else {
      return "";
    }
} 


//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//   [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
//   [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
//   [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==='MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license==='GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license==='ODbl') {
    return 'https://opendatacommons.org/licenses/odbl/';
  } else if (license==='ISC') {
    return 'https://opensource.org/licenses/ISC';
  } else {
    return "";
  }
  console.log('license link');
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Title 

  ${renderLicenseBadge(data.license)}

  ${data.title}

  ## Description

  ${data.description}

  ## License
  ${renderLicenseLink(data.license)}

  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contributions )
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  This is required for installation:

  # ${data.installation}

  ## Usage 

  ${data.usage}

  ## Contributions
  
  ${data.contribution}

  ## Tests
  
  ${data.test}


  ## Questions

  Contact me by the following:

  GitHub Username and Link: [${data.github}](http://www.github.com/${data.github})

  LinkedIn Username and Link: [${data.linkedin}](http://www.linkedin.com/${data.linkedin})
`;
}
// [TEXT TO SHOW](actual URL to navigate)
module.exports = generateMarkdown;
