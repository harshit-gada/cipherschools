var x= function(x,y){
    return x+y;
};


const x=(x,y)=>{
    return x+y;
};
console.log(x(5,6));

const q1= ["Jan","Feb","Mar"]
const q2=["Apr","May","Jun"]
const q3=["Jul","Aug","sep"]

const year=[...q1,...q2,...q3]
console.log(year);


const myNumbers=[34,45,23,56,8,54];
let maxValue=Math.max(...myNumbers);
console.log(maxValue);

let sum=0;
for (let num of myNumbers){
    sum=sum+num ;
}
console.log(sum);

const name="CipherSchools"
let text="";
for (let ch of name){
    text+=ch+" " ;
}
console.log(text);


const fruits=new Map ([
 ["apples",900],
 ["oranges",590],
 ["mango",500]
]);

console.log(fruits);
console.log(fruits.get("mango"));


class Car{
    constructor(name,mfgYear){
        this.name=name;
        this.mfgYear=mfgYear;

    }
}

const myCar1=new Car("honda",2012);
const myCar2=new Car("volo",2022);
console.log(myCar1,myCar2);


const myFunction=()=>{
    return new Promise((resolve,rejiect)=>{
    setTimeout(()=>{
        console.log("This is Inside Promise");
        resolve();
    },2000);

    });
};

myFunction()
 .then(()=>{
    console.log("Resolved");
 })
 .catch(()=>{
    console.log("Rejected");
 });


const person={
    firstName:"harsh",
    lastName:"gada",
    age:20,
    eyeColor:"Black",
}

let id=Symbol("id");
person[id]=144022
console.log(person);


const addTwoNumbers=(a,b=10)=> a+b;
console.log(addTwoNumbers(2));

const addNumbers=(...args)=>{
    console.log(args);
    let sum=0;
    for (let arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(addNumbers(2,32,435,55));