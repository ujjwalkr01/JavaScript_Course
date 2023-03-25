//Q1.
//prompt only works with the browser.
let age=prompt("Enter the age:");
age=Number.parseInt(age); //its always safe to convert the string to the number

if(age>10 && age<20){
  console.log("Your age lies between 10 and 20");
}else{
  console.log("Your age doesn't lies between 10 and 20");
}

//Q2.
let age1=prompt("Enter your age");
age1=Number.parseInt(age1);
switch(age1){
  case 12: console.log("your age is 12");
            break;
  case 13: console.log("your age is 13");
            break;
  case 14: console.log("your age is 14");
            break;
  case 15: console.log("your age is 15");
            break;
  default: console.log("your age is not specified");
            break;
}

//Q3 and 4.
let num=prompt("Enter the number");
num=Number.parseInt(num);
if(num%2==0 && num%3==0){
  console.log("Yes the number is divisible with both 2 and 3");
}else if(num%2==0){
  console.log("The number is only divisible by 2");
}else if(num%3==0){
  console.log("The number is only divisible by 3");
}else{
  console.log("The number is not divisible by 2 and 3");
}

//Q5.
age>=18?console.log("you can drive") : console.log("You can't drive");

