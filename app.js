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
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});