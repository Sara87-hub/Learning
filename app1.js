// //Create a function that receives an array of numbers and returns an array containing only the positive numbers

// let x = [1,2,-3,5,10,-4];
// let y = [];
// for (let i = 0; i < x.length; i++) 
//     {
//     if (x[i] > 0) {
//         console.log(x[i]);
//         y.push(x[i]);
//     }
// }
// console.log(y);

//Create a function that’ll return an integer of the number of vowels found in a string

// const string = "i am a web developer";
// let vowelsCount = 0;
// for (let i = 0; i < string.length; i++) {
//     let currentChar = string.charAt(i)

//     if (currentChar == "a" || currentChar == "e" || currentChar == "i" || currentChar == "o" || currentChar == "u") {
//         vowelsCount++;
//     }
//     // else if(currentChar == "e"){
//     //     vowelsCount++;
//     // }
//     // else if(currentChar == "i"){
//     //     vowelsCount++;
//     // }
//     // else if(currentChar == "o"){
//     //     vowelsCount++;
//     // }
//     // else if(currentChar == "u"){
//     //     vowelsCount++;
//     // }

// }
// console.log(vowelsCount);

//Task: Remove the spaces found in a string ,aik string hoga just like "i am developer", iska output ye hona chahye "iamdeveloper", spaces remove krni hen, new string bnana Same as above, little bit diff

// const string = "i am a web developer";

// console.log(string.replace(/\s/g, '')); 


//========================loop lgayen har char ko match kren,=========================//

// const string = "i am a web developer";
// let newString = "";
// for (let i = 0; i < string.length; i++) {

//     let currentChar = string.charAt(i)
//     if (currentChar !== " ") {
//         newString = newString.concat(currentChar)
//     }

// }
// console.log(newString);


//====================REVERSE A STRING=========================//
  // Write a program to reverse a given string

// Input sting
let string = "Technologies";

// Function to reverse string
function reverse(str) {
    // Variable to store reverse
    let x = "";
    for (let i = str.length - 1; i >= 0; x += str[i--]) {}
    return x;
}
// Function to display output
function gfg_Run() {
    console.log(reverse(string));
}

// Function call
gfg_Run();
