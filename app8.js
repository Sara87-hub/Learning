let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// console.log(val);

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


//====================Get Children element nodes======================//
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';

// console.log(val);

//==========Children of children============//
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];


// first element child //
val = list.firstChild;
val = list.firstElementChild;

// last element child //
val = list.lastChild;
val = list.lastElementChild;


// Count Child Element //
val = list.childElementCount;



//=============Get Parent node===================//
val = listItem.parentNode;
val = listItem.parentElement;

//parent of parent //
val = listItem.parentElement.parentElement;

//=======================Get Next Sibling=========================//
val = listItem.nextSibling;
// val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//=======================Get Previous Sibling=====================//
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);