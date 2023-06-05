/*-----------Importing----------------*/

//for importing we have to use type=module in <script> where we are linking our importing js file.

// import {addtoCart,totalquantity,weight} from './shopingCart.js';

// console.log('Importing');
// addtoCart('bread',5);
// console.log(totalquantity);
// console.log(weight);

//we can copy/import all the values from the other js file using;

import * as shopingCart from './shopingCart.js';

console.log('Importing');
shopingCart.addtoCart('bread',5);
console.log(shopingCart.totalquantity);
console.log(shopingCart.weight);