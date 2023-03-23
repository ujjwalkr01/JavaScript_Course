//Primitive Data-types:
//nn bb ss u
let a=null;
let b=357;
let c=true; //can also be false
let d=BigInt(356)+BigInt(4);
let e="Ujjwal";
let f=Symbol("Hi i am symbol");
//it's not necessary to initialize the variable with undefined if we don't define the variable then also
//by default it will be set to undefined
let g;
//let g=undefined;
console.log(a,b,c,d,e,f,g);
//typeof defines the datatype of the variable
console.log(typeof d);

//Non-primitive Data-types- Object in JS(i.e key-value pairs)

const item=
  {
    "Ujjwal": 26,
    "isPresent":false,
    "isEqual":true,
    "Kumar": undefined,    
  }
//if the key is not present in the item and we want to find it's value then it will return undefined
console.log(item["Ujjwal"]);
console.log(item["Kr"]);
console.log(item["Kumar"]);