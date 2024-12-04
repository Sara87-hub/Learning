// // document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// //==for get specific item==//
// console.log(items[0]);
// //==for change text color==//
// items[0].style.color = 'red';
// //==for change text content==//
// items[3].textContent = 'Hello';

// //======Use .getElementById on a global scope=======//
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// document.getElementByTagName
      //(i)
// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

      //(ii)
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into array
// // lis = Array.from(lis);

// // lis.reverse();
// // console.log(lis);

// // lis = Array.from(lis);

// // lis.reverse();
// // lis.forEach(function(li){
// //     console.log(li.className)
// // });
// // console.log(lis);

// // change text content with for-each loop
//      //(i)
// // lis = Array.from(lis);

// // lis.reverse();
// // lis.forEach(function(li){
// //     console.log(li.className);
// //     li.textContent = 'Hello';
// // });
// // console.log(lis);

//       //(ii) use index
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });
// console.log(lis);

// Query Selector (all) [Moudulus]
// const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });
// console.log(items);

      // forEach (even and odd)
//(i) ODD
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
});
// console.log(items);

        // for loop (even and odd)
//(ii)Even

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}

console.log(items);


