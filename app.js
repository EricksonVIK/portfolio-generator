// testing the app prior to developint
// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// 1st result is path to Node - 2nd is path to js file
// var commandLineArgs = process.argv;

// console.log(commandLineArgs);

// creates an array when input entered in terminal
const profileDataArgs = process.argv.slice(2,process.argv.length);
console.log(profileDataArgs);

// function to print each argument individually
const printProfileData = profileDataArr => {
    // this...
    for (let i=0; i < profileDataArr.length; i++){
    console.log(profileDataArr[i]);
    };

    console.log('===========');

    // is the same as this ...
    // profileDataArr.forEach((profileItem) => {
    //     console.log(profileItem);
    // });
    // and this is the same as well - simpler arrow function forEach with 1 job
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);