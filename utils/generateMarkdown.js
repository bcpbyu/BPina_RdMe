// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.desc}

  ## Table of Contents
  
  * [Installation](##install)
  * [Usage](##Usage)
  * [License](##License)
  * [Contributing](##Contributing)
  * [Tests](##Tests)
  * [Questions](##Questions)

  ## Install

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contr}

  ## Tests

  ${data.tests}

  ## Questions

  ### GitHub: ${data.git}
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
