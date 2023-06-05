/*-----------Exporting----------------*/

console.log("Exporting")
const totalquantity=500;
const weight=100;

export const addtoCart=function(product,qt){
  console.log(`You have ${qt} ${product}`);
}

export {totalquantity,weight};