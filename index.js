// document.write("This is document write");

// javascript console API
// console.log("Hello World");
// console.warn("this is warning");
// console.error("This is error");

//javascript variable

// var number1 = 34;
// var number2 = 36; 
// console.log(number1 + number2);

//data stypes

var str1 = "This is a string";
var str2 = " this is another string"

//objects
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     somesh: 99
// }
// console.log(number2)
// console.log(str1)
// console.log(marks);

var und ;
// console.log(und);

//Arrays
//in arrays index always starts from 0 and not from 1, it is similar to all languages in programming languages
// var arr = [1,2,3,4,5]
// console.log(arr);
// console.log(arr[0]);


//operators in javascript 
// 1.Addition
// Subractions
// multiplication
// division
// var a = 55
// var b = 67
//  console.log(" Value of a + b is: ", a+b);


//Functions
//the piece ofcode which repeats itself is called as a function
//DRY = Do not repeat yourself
function avg(a,b){
    return (a+b)/2;
}

c1 = avg(4,6)
c2 = avg(5,6);

//conditionals in javascript

// var age = 34
// if (age >8){
//     console.log("Not a kid")
// }
// else{
//     console.log("Kid it is")
// }

//loops
var arr =[1,2,3,4,5,6];
// console.log(arr);
// for (var i =0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let j =0;
// const a1 = 0
// a1 = a+ 1;
// console.log(a)

 let myArr = ["Fan", "Camera", 34, null, true];
 //array Methods
 myArr.length;

 //String methods
 let name = "Somesh is good boy";
//  console.log(name.length);


 //Dates in javascript

 let myDate = new Date();
//  console.log(myDate.getMonth());


//DOM Manipulation
let elem = document.getElementById("click")
// console.log(elem)

let elemclass = document.getElementsByClassName("container")
// console.log(elemclass);
elemclass[0].style.background = "Yellow"



//setTimeout and setInterval

//arrow functions
// function summ(a,b){
//     return a+b;
// }
//  summ = (a,b)=>{
//     return a+b;

//  }
logkaro = ()=>{
    console.log("I am your log");

}

// setTimeout(logkaro, 3000);
// setInterval(logkaro, 2000);