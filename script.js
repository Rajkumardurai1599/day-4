// 1(a)Print odd numbers in an array 
// anonymous function & IIFE //

//[1,2,3,4,5,6,7,8,9]

//anonymous function
/*var result=[];
var a =function (arr){
    for (var i=0;i<arr.length;i++)
    if(arr[i]%2!==0){
        result.push(arr[i])
    }
    return result
}
console.log(a([1,2,3,4,5,6,7,8,9]));

//IIFE function
var result=[];
(function (arr){
    for (var i=0;i<arr.length;i++)
    if(arr[i]%2!==0){
        result.push(arr[i])
    }
    console.log(result);
})
([1,2,3,4,5,6,7,8,9])

2(a)Print odd numbers in an array 
arrow funtion
var result=[];
var a =(arr)=>{
    for (var i=0;i<arr.length;i++)
    if(arr[i]%2!==0){
        result.push(arr[i])
    }
    return result
}
console.log(a([1,2,3,4,5,6,7,8,9]))*/

//1(b) Convert all the strings to title caps in a string array
// anonymous function & IIFE //

//["fuLL sTack deveLOper"]

//anonymous function

 /*   var b=arr.toString()
    var c = b.toLowerCase().split(" ")
    for ( var i=0;i<c.length;i++){
  c[i] = c[i].charAt(0).toUpperCase()+c[i].slice(1)
 }
return c.join(" ")

}

console.log(title(["fuLL sTack deveLOper"]));*/

/*IIFE function
var title = (function (arr){
    var b=arr.toString()
    var c = b.toLowerCase().split(" ")
    for ( var i=0;i<c.length;i++){
  c[i] = c[i].charAt(0).toUpperCase()+c[i].slice(1)
 }
 return c.join(" ");
 
})
console.log(title(["fuLL sTack deveLOper"]))*/

/* 2(b) arrow function
var title = (arr)=>{
    var b=arr.toString()
    var c = b.toLowerCase().split(" ")
    for ( var i=0;i<c.length;i++){
  c[i] = c[i].charAt(0).toUpperCase()+c[i].slice(1)
 }
 return c.join(" ");
 
}
console.log(title(["fuLL sTack deveLOper"]))*/

/*1(c) Sum of all numbers in an array
//anonymous function

var sumof = function(arr){
var sum = 0; 
for (let i = 0; i < arr.length; i++) 
{ sum += arr[i]; } 
return sum} 
console.log(sumof([1,2,3,4,5,6]));

//IFFE function

var sumof = (function(arr){
    var sum = 0; 
    for (let i = 0; i < arr.length; i++) 
    { sum += arr[i]; } 
    return sum
   
} )
console.log(sumof([1,2,3,4,5,6]));
// 2(c)  arror function 
var sumof = (arr)=>{
    var sum = 0; 
    for (let i = 0; i < arr.length; i++) 
    { sum += arr[i]; } 
   return sum;
   
}
console.log(sumof([1,2,3,4,5,6]))*/

/*1(d)Return all the prime numbers in an array
//anonymous function

var result = []
var prime = function (arr){
   for(var i=0;i<arr.length;i++){
    var count = 0
    for(var j =2;j<arr[i];j++){
        if(arr[i]%j===0)
        {
            count = 1;
        }
    }
    if(count ===0)
    {
        result.push(arr[i])
    }
   }
   return result;
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]))

//IFFE function

var result = []
var prime = (function (arr){
   for(var i=0;i<arr.length;i++){
    var count = 0
    for(var j =2;j<arr[i];j++){
        if(arr[i]%j===0)
        {
            count = 1;
        }
    }
    if(count ===0)
    {
        result.push(arr[i])
    }
   }
   return result;
})
console.log(prime([1,2,3,4,5,6,7,8,9,10]))

//2(d) Arrow function 
var result = []
var prime =  (arr)=>{
   for(var i=0;i<arr.length;i++){
    var count = 0
    for(var j =2;j<arr[i];j++){
        if(arr[i]%j===0)
        {
            count = 1;
        }
    }
    if(count ===0)
    {
        result.push(arr[i])
    }
   }
   return result;
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]))*/

    
    


/*1(e)Return all the palindromes in an array
//anonymous function

var result=[]
var prime = function (arr){
    for ( var i=0;i<arr.length;i++){
        var a = arr[i].split("").reverse().join("");
        if(a===arr[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(prime(["wow","sis","good","lol"]));

//IFFE function
var result=[]
var prime = (function (arr){
    for ( var i=0;i<arr.length;i++){
        var a = arr[i].split("").reverse().join("");
        if(a===arr[i]){
            result.push(arr[i])
        }
    }
    return result
})
console.log(prime(["wow","sis","good","lol"]))
//2(e) arrow funtion

var result=[]
var prime =  (arr)=>{
    for ( var i=0;i<arr.length;i++){
        var a = arr[i].split("").reverse().join("");
        if(a===arr[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(prime(["wow","sis","good","lol"]))*/

/*1(f) Return median of two sorted arrays of the same size
//anonymous function

let arr1 = [1, 3, 5, 7,9];
let arr2 = [2, 4, 6, 8,10];
var median =function (arr1, arr2) {
  let arr = [...arr1, ...arr2];
arr.sort((a, b) => a - b);
 let n = arr.length;
  if (n % 2 === 0) {
    return ((arr[n / 2] + arr[n - 1 ]/ 2) / 2);
  } else {
    return arr[Math.floor(n / 2)];
  }
}
console.log(median(arr1, arr2))

//IFFE function

let arr1 = [1, 3, 5, 7,9];
let arr2 = [2, 4, 6, 8,10];
var median =( function (arr1, arr2) {
  let arr = [...arr1, ...arr2];
arr.sort((a, b) => a - b);
 let n = arr.length;
  if (n % 2 === 0) {
    return ((arr[n / 2] + arr[n - 1 ]/ 2) / 2);
  } else {
    return arr[Math.floor(n / 2)];
  }
})
console.log(median(arr1, arr2))*/

/* 1(g)Remove duplicates from an array
//anonymous function

 var duplicates= function (arr) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(duplicates([1,2,1,3,4,3,5]))

//IFFE function

var duplicates= (function (arr) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
})
console.log(duplicates([1,2,1,3,4,3,5]))*/

/*1(h)Rotate an array by k times
//anonymous function
const arr = [1,2,3,4,5,6,7]
const K =5;
var rotate = function (arr,K){
   for(var i=0;i<K;i++){
    arr.push(arr[i])
   }
   for(var i=0;i<K;i++){
    arr.shift()
   }
   return arr
} 
console.log(rotate(arr,K));

//IFFE function
const arr = [1,2,3,4,5,6,7]
const K =5;
var rotate = (function (arr,K){
   for(var i=0;i<K;i++){
    arr.push(arr[i])
   }
   for(var i=0;i<K;i++){
    arr.shift()
   }
   return arr
} )
console.log(rotate(arr,K));*/























 