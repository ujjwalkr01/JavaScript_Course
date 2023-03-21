console.log("In this we are going to learn the data-types use:- let,const,var")

//so var basically we must avoid using it nowadays as it allows so many bugs

let a="Ujjwal"; //this means we have created the variable a. so now we can't again create the variable
console.log(a);
//so line 8 will throw the error
//let a=86; //basically variables declared with let can't be re-declared.
//but variables initialized with let can be re-initialized.
a=8;
console.log(a);

var c="singh";
{
  //basically we can re-declare the variable inside the block but that value limitation will be inside the only block only
  //variable declared using let inside the block can't be accessed outside the block.
  let a='Hi';
  console.log(a);
  
  var c=5; //variable declared with the var can be accessed outside the block
  console.log(c);
}
console.log(a);

console.log(c);

const b="Kumar";
console.log(b);
//so variable declared or initialized with const data type can't be changed. hence lines 23 and 24 will throw an error
//const b=98;
//b=9;