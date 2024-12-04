// Window Method / Objects / Properties

// console.log(123);

// Alert /  Propmt / Confirm
  
// (1) Alert

// window.alert('Hello World');

 // we can do it without window
// alert('Hello World');

// (2) Prompt

// const input = propmt();
// alert(input);


// (3) Confirm
// if(confirm('Are you sure')) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }


//===============properties================//
let val;         
//(1) Outer Height and width
      //Height
// val = window.outerHeight;
// console.log(val);
      //Width
// (val = window.outerWidth;
// console.log(val);

//(2) Inner Height and Width
//       // height
// val = window.innerHeight;
//      console.log(val);

      // width
//  val = window.innerWidth;
//       console.log(val);

//(3) Scroll Points
       // Vertically
// val = window.scrollY;

// console.log(val);

      // Horizontally
//  val = window.scrollX;

//       console.log(val);

 //(4) Location Object
    //(i)
//  val = window.location;

//  console.log(val);

//     //(ii) Host name
// val = window.location.hostname;

//     console.log(val);

       //(iii) Port no
// val = window.location.port;

//     console.log(val);

       //(iv) Protocol
// val = window.location.href;

//     console.log(val);

        //(v) Host name
// val = window.location.search;

//     console.log(val);

//(5) REDIRECT
// window.location.href = 'http://google.com';

// console.log(val);

//(6) Reload
// window.location.reload();
// console.log(val);

//(7) History Object
     //history check
// window.history.go(-2);

// console.log(val);

     //history length
// val = window.history.length;
//  console.log(val);


//(8) Navigator Object
       //(i)
// val = window.navigator;

// console.log(val);

       //(ii)[app name]
// val = window.navigator.appName;

// console.log(val);

       //(iii)[app version]
// val = window.navigator.appVersion;

// console.log(val);

       //(iv)[user agent]
// val = window.navigator.userAgent;

// console.log(val);

       //(v)[platform]
// val = window.navigator.platform;

// console.log(val);

       //(vi)[vender]
// val = window.navigator.vendor;

// console.log(val);

       //(vii)[language]
val = window.navigator.language;

console.log(val);