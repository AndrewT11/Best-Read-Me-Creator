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
function renderLicenseSection(license) {
  if(license==='MIT') {
    return `MIT License

    Copyright (c) [year] [fullname]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`;
  } else if (license==='GPLv3') {
    return `License is really long. Follow this link: https://choosealicense.com/licenses/gpl-3.0/`;
  } else if (license==='ODbl') {
    return `License is really long. Follow this link: https://opendatacommons.org/licenses/odbl/1-0/`;
  } else if (license==='ISC') {
    return `Copyright <YEAR> <OWNER>

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
  } else {
    return "";

}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Title 

  ${data.title}

  ## Description

  ${data.description}

  ## License
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}
  
  ${renderLicenseSection(data.license)}

  
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
