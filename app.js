// testing the app prior to developint
// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// 1st result is path to Node - 2nd is path to js file
// var commandLineArgs = process.argv;

// console.log(commandLineArgs);

// File system need
// const fs = require('fs');

// // creates an array when input entered in terminal
// const profileDataArgs = process.argv.slice(2,process.argv.length);

// // variable assignment
// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];

// // 1 line variable assignment
// const [name, github]=profileDataArgs;

// function to print each argument individually
// const printProfileData = profileDataArr => {
//     // this...
//     for (let i=0; i < profileDataArr.length; i++){
//     console.log(profileDataArr[i]);
//     };

//     console.log('===========');

//     // is the same as this ...
//     // profileDataArr.forEach((profileItem) => {
//     //     console.log(profileItem);
//     // });
//     // and this is the same as well - simpler arrow function forEach with 1 job
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// adding specific names - Option 1
// const generatePage =() => 'Name:Jane, Github:janehub';
// console.log(generatePage());

// template literal, not hardwired, interpolated text using variables passed into the function
// const generatePage =(userName, githubName) => `Name:${userName}, Github:${githubName}`;
// console.log(generatePage('Erickson', 'EricksonVIK'));

// line breaks extended form
// const generatePage =(userName, githubName) =>{
//     return `
//     Name: ${userName}
//     GitHub: ${githubName}
//     `;
// };
// console.log(generatePage('Erickson', 'EricksonVIK'));

// generate html
// const generatePage = (name, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
// };

// fs.writeFile('index.html', generatePage(name,github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!')
// });

// streamline code after 9.2
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
    // will be uncommented in lesson 4
    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });
