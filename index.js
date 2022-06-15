const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown=require("./src/generateMarkdown.js");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projTitle',
      message: 'What is the title of your Project?',
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Please enter the description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter the installation instructions for your code',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter the usage information for the project',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Let us know how to contribute to the project!',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Let us know how to test the project:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license would you like for the project? (Please enter one of apache, boost, bsd3, bsd2, cc0, eclipse or gnugpl3)',
    },
    {
        type: 'input',
        name: 'url',
        message: 'Please enter your Github Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
  ]);
};
  

const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('ProfessionalReadme.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote your README'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();