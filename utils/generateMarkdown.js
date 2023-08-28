function renderLicenseBadge(license) {
  let badge = "";

  if (license === "MIT") {
    badge =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache 2.0") {
    badge =
      "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "IBM Public License Version 1.0") {
    badge =
      "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
  } else if (license === null) {
    badge = "";
  }
  return badge;
}

function renderLicenseLink(license) {
  let licenselink = "";

  if (license === "MIT") {
    return (licenselink = "[MIT](https://opensource.org/licenses/MIT)");
  } else if (license === "Apache 2.0") {
    return (licenselink =
      "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)");
  } else if (license === "IBM Public License Version 1.0") {
    return (licenselink =
      "[IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0");
  } else if (license === null) {
    return (licenselink = "");
  }
  return licenselink;
}

function renderLicenseSection(license) {
  let sec = "";

  if (license === "MIT") {
    return (sec = "This project is licensed under the MIT License");
  } else if (license === "Apache 2.0") {
    return (sec = "This project is licensed under the Apache 2.0 License");
  } else if (license === "IBM Public License Version 1.0") {
    return (sec =
      "This project is licensed under the IBM Public License Version 1.0 License");
  } else if (license === null) {
    return (sec = "");
  }
  return sec;
}

function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.License);
  const licenselink = renderLicenseLink(data.License);
  const sec = renderLicenseSection(data.License);
  return `
  # ${badge}
  
  # ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${sec}
  ${licenselink}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.QuestionsSec}

  ### Email
  ${data.email}

  ### GitHub UserName
  #### [${data.Github}](https://github.com/${data.Github})
`;
}

module.exports = generateMarkdown;
