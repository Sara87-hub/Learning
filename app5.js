
//=================================Select data with SELECTORS======================================//
// let val;
// val = document;
// console.log(val);

//to fetch all data from html 
// let val;
// val = document.all;
// console.log(val);

//fetch data by numbers
//(i)
// let val;
// val = document.all[0];
// console.log(val);

//(ii)
// let val;
// val = document.all[2];
// console.log(val);

//Length
// let val;
// val = document.all.length;
// console.log(val);

//step by step by tags nameslet val;
//(i)
// let val;
// val = document.head;
// console.log(val);

//(ii)
// let val;
// val = document.body;
// console.log(val);

//(iii)
// let val;
// val = document.doctype;
// console.log(val);

//(iv)
// let val;
// val = document.domain;
// console.log(val);

//(v)
// let val;
// val = document.URL;
// console.log(val);

//(vi)
// let val;
// val = document.characterSet;
// console.log(val);

//(vii)
// let val;
// val = document.contentType;
// console.log(val);


//=================================Select data without SELECTORS======================================//
//(i)
// val = document.forms;
// console.log(val);

// //(ii)
// val = document.forms[0];
// console.log(val);

// //(iii)
// val = document.forms[1];
// console.log(val);

// //(iv)
// val = document.forms[0].id;
// console.log(val);

// //(v)
// val = document.forms[0].method;
// console.log(val);

//(vi)
// val = document.forms[0].action;
// console.log(val);

//========================================LINKS=====================================================//
//(i)
// val = document.links;
// console.log(val);


//(ii)
// val = document.links[0];
// console.log(val);

//(iii)
// val = document.links[0].id;
// console.log(val);

//(iv)
// val = document.links[0].className;
// console.log(val);

//(v)
// val = document.links[0].classList;
// console.log(val);

  //(a) to get specific item
// val = document.links[0].classList[0];
// console.log(val);

//=======================================IMAGES=====================================================//
// val = document.images;
// console.log(val);

//======================================SCRIPTS====================================================//
// //(i)
// val = document.scripts;
// console.log(val);

//(ii) to get Attribute
// val = document.scripts[2].getAttribute('src');
// console.log(val);


//======================================FOR EACH SCRIPTS==========================================//
//(i)
// val = document.scripts[2].getAttribute('src');
// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//     console.log(script);
// });
// console.log(val);


//(ii)
val = document.scripts[2].getAttribute('src');
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});
console.log(val);