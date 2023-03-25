//For loops for printing the numbers
let n=prompt("Enter the number");
n=Number.parseInt(n);
for(let i=1;i<=n;i++){
  console.log(i);
}

//for-in loop is used to loop through the keys of the object
let obj={
  Ujjwal:98,
  Shiv:78,
  Harry:81,
  Adit:86,
}
for(let a in obj){
  console.log(a);
  //we can also print the values of the keys using for-in loop
  console.log("Marks of the "+a+" is "+obj[a]);
}

//for-of loop is used to run over the itereable data-Structures like  arrays,strings..
//if we pass obj instead of ujjwal because it's not iterable..
for(let b of "Ujjwal"){
  console.log(b);
}