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
 
import cloneDeep from 'lodash-es';

const state={
    cart:[
        {product:'bread', quantity:5},
        {product:'pizza', quantity:5},
    ],
    user:{loggedIn: true},
};
const stateClone=Object.assign({}, state);
//here we have made the change in the original object even though by using the cloneDeep we can see no change in the original object 
const stateDeepClone=cloneDeep(state);
state.user.loggedIn=false;
console.log(stateClone);


console.log(stateDeepClone);
console.log(state)

//Note
/*If we delete the node_module folder then there is no issues we can simply redownload by using the <npm install> and it will download according to the dependencies used in package.json folder
 */

if(module.hot){
    module.hot.accept();
}