//=================FOR LOOP==================//
// for(let i = 0; i < 10; i++){
//     if(i == 2){
//         console.log('2 is a even number');
//         continue;
//     }
//         console.log('Number' + i);
// }


//==================While Loop===============//

// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

//================Do While Loop==============//
// let i = 0;

// do{
//     console.log('Number ' + i);
//     i++;
// }
//    while(i < 10);

//=================For-Loop through array================//
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     // console.log(cars[i]);
//     console.log(i);
// }


//=================(1) For-Each-Loop================//
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(function(car){
//     console.group(car);
// });

//=================(2) For-Each-Loop (index)================//
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(function(car, index){
//     console.group(`${index}: ${car}`);
// });

//=================(3) For-Each-Loop (array)================//
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(function(car, index, array){
//     console.group(`${index}: ${car}`);
//     console.log(array);
// });


//====================MAP=====================//

// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);




//=======================(1) For-In loop (for just key)==========================//

// const user = {
//     firstName: 'Jhon',
//     lastName: 'Doe',
//     age: 40
// }

// for(let x in user){
//     console.log(x);
// }

//=======================(2) For-In loop (for key and value)==========================//

const user = {
    firstName: 'Jhon',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}
