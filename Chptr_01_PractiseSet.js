//Q1.
let a="Ujjwal";
let b=65;
//whenever we add the number to the string it get's concatinated
console.log(a+b); 

//Q2.
console.log(typeof (a+b));

//Q3.
const a1={
  name:"Ujjwal",
  roll:56,
  isPresent:false,
}
//we can't redeclare the a1 value as it's constant and we also can't again make the object
//a1="Kumar";
//a1={};

//Q4.
// so basically we redeclare the value of the key of the defined object and can also insert a new key value in the object
a1['friend']="singh";
a1['name']="Kumar";
console.log(a1);

//Q5.
const dict={
  Accentuate: "make more noticeable or prominent",
  Berate: "scold or criticize someone angrily",
}
// so we can access the key in both the ways..
console.log(dict.Berate);
console.log(dict["Accentuate"]);