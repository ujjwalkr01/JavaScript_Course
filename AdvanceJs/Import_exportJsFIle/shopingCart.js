/*-----------Exporting----------------*/

console.log("Exporting")
const totalquantity=500;
const weight=100;
//we can't use export inside any block or function it must be the global variable 
export const addtoCart=function(product,qt){
  console.log(`You have ${qt} ${product}`);
}

export {totalquantity,weight};