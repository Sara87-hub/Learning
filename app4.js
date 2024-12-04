// Global Scope
var a = 1;
let b = 2;
const c = 3;
// console.log('Global Scope: ',a,b,c);


// Function Scope
// function test(){
//     var a = 4;
//     let b = 5;
//     const c =6;
//     console.log('Function Scope: ' , a, b, c);
// }
// test();

//Block Scope
              //If Statement
// if(true){
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log('If Scope:', a, b, c);

// }
// console.log('Global Scope: ',a,b,c);

               //For loop
for(let a = 0; a < 10; a++){
    console.log(`Loop: ${a}`);
}
console.log('Global Scope: ',a,b,c);
