// const arr = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(arr.map(item => item * 10));
// console.log(arr);




// const arr = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(arr.forEach(item => item * 10));                //tricky line ........... pay attention
// console.log(arr);




// console.log(parseInt(10 + 2));
// 'use strict';
// console.log(parseInt('M7F'));
// console.log(parseInt('7MF'));


// *************************
// ########### Super Complicated, trying playing with the iside values of a and b, and use Strict and also the data type of the inner a and  b ,  data types like const , var, let 
// {
//     function abc(a,b){
//         'use strict';
//           a= 11;
//           b= 12;
//         return arguments[0] + arguments[1];
//         console.log(a+b);
//     }
// }

// console.log(abc(10,20));



// console.log( [...'gk']);




// (function abc(){
//     console.log("IIFE");
// })();



// important 
// function abc(){
//     console.log(abc.xyz);
// }

// abc();
// abc.xyz = 100;
// abc.xyz = 200;
// abc();



// Event Propagation




// const nums= [ 1,2,3,4,5,6,7,8,9];
// nums[100] = 222;
// console.log(nums);



// console.log(typeof typeof 10, 11,  2);




// VERY IMPORTANT
// console.log(parseInt('10 + 2'));
// console.log(parseInt('7MF'));
// console.log(parseInt('MF7'));



// console.log(parseInt(10 + 2));
// console.log(parseInt('7MF'));
// console.log(parseInt('MF7'));






// *************************
// console.log([1,2,3,4,5].map(num => {
//     if(num > 0) return ;
//     return num * 2;
// }))





//VERY IMPORTANT 

// 'use strict';
// {
//     function abc(){
//         console.log('Gaurav Kumar');
//         function abc2(){
//             console.log("Anand Kumar"); 
//         }
//         abc2();
//     }
    
// } 

// abc();


// try trying after removing ht use strict because it chnages the aswer and things can be super  confusing as well. 

// Chnage the scopes of the function calls in variaous places and chce if u can call them or not . 
// When called outside the other fucntion's scope does'nt calls the function and it says that the func is not defiend and thriws reference error
// Bu t if it is called inside teh window scope , the n it can be called 




//VERY IMPORTANT
// console.log([1,2,3,4,5,6].some((n) => n > 4)) // returns true
// console.log([1,2,3,4,5,6].some((n) => {n > 4})) // returns false


// const nums  = [1,2  ,3,4,5,6];
// console.log(nums.splice(1,2));
// console.log(nums);
// splice modifies the array return after it has deleted some elements 



// Shift, Unshift, Pop, Push

// const arr = [1,2,3,4,5,6,7];
// console.log(arr.shift());


// const nums = [1,2,3,4,5,6];
// nums.unshift(11,22);
// console.log(nums);


// const nums = [1,2,3,4,5,6];
// nums.pop();
// console.log(nums);

// .shift => removes and gives u the first element of the array
// .unshift => adds given elements from front of the array
// .push => adds elemnets from back/rear of the array
// .pop => removes and gives u the last element(s) of the array



// const nums = [1,2,3,4,5,6];
// const arr = [11,22,33,33,33,33,33,33];
// nums.push(arr);
// console.log(nums);

// console.log(nums.flat(2));


// const nums = [1,2,3,4,5,6];
// console.log(nums.includes(1, 4));
// params : (a,b) -- a is the parameter to be checked if inclued, and b is the index from which the seaching has to happen



// const arr = [1,2,3,4,5,6];
// console.log(arr.reduce((accumultor, current_value) => accumultor + current_value, 0));




// const nums = [1,2,3,4,5,6];
// const join = (nums.join("|"));
// console.log(join);
// console.log(typeof join);



// const revArr  = [1,2,3,4,5,6];
// const rev = revArr.reverse();
// console.log(rev);


// const arr = [1,2,3,4,5,6];
// console.log(arr.find(a  => a > 2));
// // find gives u one result not arrray of resultz ,
// // where as the .filter gives all the elements that satisfy the condition



// const array = [1,2,3,4,5,6];
// console.log(array.filter(a  => a > 2))






// const promiseOne = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     console.log(`PromiseOne is resolved`)
//     // }, 2000)
//     const obj = {
//         name: "Gaurav Kuamr",
//         class: "CS/Major"
//     }
//     // const error = false;
//     if(false){
//         reject("Something went Wrong !!!");
//     }else{
//          resolve(obj);
//     }
   
// }).then((res) => console.log(res)
// )
// .catch((err) => console.log(err));



// // async function res(){
// const [,,,a, b] = [1,2,3,4,5,6];
// console.log(a);






// console.log("A");
// setTimeout(() => {
//     console.log("B");
// });
// // by default the time is 0 sec, u can give it as 0 sec or u can leave as it is as well 
// ["C", "D"].forEach((x) => console.log(x));
// console.log("E");





// // This is the Input 
// const  obj = [
//     {
//         key: 'sample 1',
//         data: 'Data1'

//     },
//     {
//         key: 'sample 1',
//         data: 'Data1'
//     },
//     {
//         key: 'sample 3',
//         data: 'Data3'},
//     {
//         key: 'sample 3',
//         data: 'Data3'
//     },
//     {
//         key: 'sample 5',
//         data: 'Data5'
//     }
// ];
// // The output has to be something like this 

// const output = {
//     // "sample 1" : [
//     //     {
//     //         key: 'sample 1',
//     //         data: 'Data 1'
//     //     },
//     //     {
//     //         key: 'sample 1',
//     //         data: 'Data1'
//     //     }
//     // ],
//     // "sample 2": [
//     //     {
//     //         key: 'sample 3',
//     //         data: 'Data3'
//     //     },
//     //     {
//     //         key: 'sample 3',
//     //         data: 'Data3'
//     //     }
//     // ],
//     // "sample 5": [{

//     //     key: 'sample 5',
//     //     data: 'Data5'
//     // }]


// };



// The question is that we have tp group the common types o f data into one array form fro ex: multiple sample 1 will come under sample 1 named Key and similarly, many oif the sample3 objs will group as array in one key named sample 3 
// obj.forEach((item) => {
//     if(!output[item.key]){
//         output[item.key]  = [item];
//     }
//     else{
//         output[item.key].push(item);
//     }
// })

// console.log(output);






// custom memoized function TOUGH


// const arr = [1,[2,3,4], 5, 6, [7,8],[9,10,11,[12,[13,[14]]]]];
// console.log(arr.flat(Infinity));



// Array in  JS

// const array = [1,2,3,4];
// console.log(array[3]);
// console.log(array.length);
// console.log(array.includes(3));
// console.log(array.filter(num => num >= 2));



// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
//   console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9

// we can flatten the whole array not just by uisng Infinity inside the flat method, we can also do it uisng join method in the Array.prototype methods by just using it and not giving anything inside the method

//   const a = [1,2,[3,4,[5,6],7,8]];
// //   console.log(a.flat(2));
//   console.log(a.join());
//   console.log(a.flat(Infinity));
  
//   JOIN 

// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
//     3: 5, // ignored by join() since length is 3
//   };
//   console.log(Array.prototype.join.call(arrayLike));
//   // 2,3,4
//   console.log(Array.prototype.join.call(arrayLike, "."));
//   console.log(Array.prototype.join.call(arrayLike, ", "));
 
//   2,3,4
//   2.3.4
//   2, 3, 4



// SLICE
// .slice(start index , end index (end index in not included));

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());

// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
    
//     3: 33,
//     4: 44,
//     5: 55,
//     6: 66
    
    
   
//   };
//   console.log(Array.prototype.slice.call(arrayLike, 1, 6));
//   while slicing like thi s, first teh lenght in the obj comes into play, only then after that we get the end index in the slice methid acting , suppose the lenght is less than the end index , the slicing will happen onl y till the lenght and it wont go beyod the till end index depsite the fact that obj has more elements to it .


//   LENGTH

// "use strict";

// const numbers = [1, 2, 3, 4, 5];
// Object.defineProperty(numbers, "length", { writable: false });
// numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
// numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'

// const a= [1,2,3];
// Object.defineProperty(a, 'length', {writable: false});
// // by doing that, we can make the len of the array non writable that means we cant change the lenght of the array in the future by either manually chaning the lenght or by trying to push anything into teth array 


// Exponential Shortcut 

// console.log(2 ** 2); this returns 4   = 2 mutiplied by 2 two times




// Treating array like that of an Object. Remeber that array has its won props like length


// const arr = [1, 2, 3];

// // Adding a custom property like an object
// arr.customProp = "I’m an object-like property!";
// console.log(arr.customProp); // Output: I’m an object-like property!

// // Iterating over both array elements and custom properties
// for (let key in arr) {
//   console.log(`${key}: ${arr[key]}`);
// }
// // Output:
// // 0: 1
// // 1: 2
// // 2: 3
// // customProp: I’m an object-like property!


// for(let keys in arr){
//     console.log(arr[keys]);
    
    
// }

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }





// const obj = {
//     length: 0,
  
//     addElem(elem) {
//       // obj.length is automatically incremented
//       // every time an element is added.
//       [].push.call(this, elem);
//     },
//   };
  
//   // Let's add some empty objects just to illustrate.
//   obj.addElem({});
//   obj.addElem({});
//   console.log(obj.length); // 2
//   Object.





// console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value() );

// function computeAmount() {
//     let total = 0;
    
//     const calculator = {
//       lacs: function(value) {
//         total += value * 100000;
//         return this;
//       },
//       crore: function(value) {
//         total += value * 10000000;
//         return this;
//       },
//       thousand: function(value) {
//         total += value * 1000;
//         return this;
//       },
//       value: function() {
//         return total;
//       }

//     };
    
//     return calculator;
//   }


//   const finalVal = computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
//   console.log(finalVal);
  


// var obj = {
//     helloworld: function(){
//         return "hellow world - " + this.name
//     },
//     name: "John"
// }

// var obj2 = {
//     helloworld: obj.helloworld,
//     name: "Gaurav"
// }

// console.log(obj2.helloworld());










// two way binding - change the ui the model changes and chnage the model and UI changes. like we do it react while using useState when we chnage thr value uidng input tag the usestate values changes and we change ther usetate value programmaticaly teh username in the UI changes 













// memoization : suppose there is add function that takes two params a and b, and return the sum , but when user passes the same params the 
// function should not recompute the addition , rather it should return the memoized sum , so that it performs well .

// add(1,2);
// let obj = {};
// function add(a,b)
// {
//     // make a hashtable , and store the arg[0] and arg[1] as key and value pair;
//     // first check either hashtable.has(arg[0]), 
//     // hs.get(arg[0]) - arg[0] == arg[1]
//     // return hash.get(arg[0])

// //  for add(1,2)
// // 1,3 => take 1 , find value that is 3 , then subtract value - key if this equals to second arguemnt / param then return the value of key name param 1 



// obj.a = a + b;
// if(obj.a){
//     if(b==(obj.a - a)){
//         return obj.a;
//     }
// }else{
//     obj.a = a + b;
//     return obj.a;
// }

 
// }
// console.log(add(0,4));


// nullish coalescing (??)
// ?? return the things on the right side if the value of the variable on which is applied is either null or undefined , 
// if they are not null or undefined then they return the things on the left side . For ex:

// const g= null;
// console.log(g ?? 'Gaurav Kumar');

// the answer in the o/p will be Gaurav Kumar , because the value on the left of ?? is null or undefined 

// const d  = undefined;
// console.log(d ?? "Anna");

// I hope u got it . The answer was not undefined but Anna becuse the on the left of the ?? was a null or undefined and hence it returned the value on its rigth side 

// const val  = 1;
// console.log(val ?? 10);
// the o/p is 1 because the on the left of ?? , ,it is neither NUll nor undefined and that is why it returned the value on the left side and left side we have variable val whose value is 1;
// ******* REMEMBER THE NULLISH COALESCING ?? RETURNS THE VALUE ON THE RIGHT SIDE , ONLY AND ONLY IF THE VALUE OF THE LEFT SIDE IS SOMEHOWE 'NULL' OR 'UNDEFINED'. IT DOES NOT RETUTN THE RIGHT SIDE VALUE ON ANY OTHER CASE .

// const string  = '';
// console.log(string ?? "India defeated China in 1967 war");

// this will give empty string as o/p , becuase the value of string is anything but not 'null'  or 'undefined';


// Nullish ?? is similar to || (logical OR) , the only difference is that the || also considers the falsy values like  (0, false, "", NaN) and if it finds them on left side then it returns the right value 

// **       ?? -> considers only null or undefined
//**        || -> considers null, undefined as well as falsy values like '', 0, NaN, false, etc 






// const count   = 0; 
// const text = '';
// console.log(count || 10);
// console.log(text || 'Gaurav');

// the o/p is 10 and Gaurav , because the || (logical OR) encountered either null, undefined or falsy value like 0, '', NaN or false .
// In this case it is , 0 and ''.




// **           OPTIONAL CHAINING (?.)

// const obj = {
//     name: 'Gaurav Kumar',
//     kaam : 'SDE',
//     getGoal : function(){
//         return '$1 Million'
//     }
// };

// console.log(obj?.name);            // checks either obj has name as key inside , if yes then return the value in this case it is Gaurav Kumar
// console.log(obj?.kaam);            // checks the obj has key as kaam , i yes then return the value of teh key kaam
// console.log(obj?.daam);            // checks if obj has key named daaam , no so it should throw an error , but here it will not throw error but it will throw undefined because we have used the (?.), yes , that is why we use this optional chaining , so that when we encounter a situation where there can be an error to avoid that error we use ?. so that instead of error we get instead and our code does not fuck up. 
                                      // if u want to check the eror , the try removing ?. and just write console.log(obj.daam);   and then see what happend then u will know why we use this ?.
// console.log(obj?.getGoal());       //same here checks weather we have function named getGoal in the obj if yes call it and print the value .
// console.log(obj?.getLoan?.());     // checks weather we have getLoan function in the obj , NO ,,,, so it returns undefined instead of throwing an error, try removing ?. and see for urself .



// ?. cannot be used with undeclared variable or undeclared object 


// ********  DATE  *******

// console.log(new Date().getTime()); // remove getTime and put other function like .getMonth(), getDay() and many more and experiment urself.

// PURE FUNCTION
// DIFF BW ARRAY.SLICE N ARRAY.SPLICE // SLICE : doesn't change array and returns the expected elements where as the .splice method modifies the original array 
// LAMBDA FUNCTION

// FACTORY FUNCTION , CONSTRUCTION FUNCTION DIFFERENCE , SIMILARITY 






// function Gaurav(){
//     console.log('Gaurav function is called ');
    
// }

// new Gaurav();
// Gaurav();






// function anand(){
//     console.log('Anand Kumar');
    
// }
// new anand();
// anand();




// const arr = [1,2,,33,4,5];
// arr.length = 0;
// console.log(arr);




// let userDetail = {
//     name : 'Gaurav Kumar',
//     age : 16,
    
// };

// Object.freeze(userDetail);
// userDetail.class = '1st';
// console.log(userDetail);
// userDetail.name = 'Anand kumar';
// console.log(userDetail);




// freeze one key of the user object 





// throttling a function 

// function throttle(func, delay){
//     let last = 0;
//     return function(...args){
//         let now  = Date.now();
//         if(now - last >= delay){
//             last= now;
//             func.apply(this, args)
//         }
//     };
// }




// debouncing a function

// function debounce(func, delay){
//     let time;
//     return function(...args){
//         clearTimeout(time);
//         time = setTimeout(() => func.apply(this,args), delay);
//     };
// }





// function foo(a, c, ...rest){
//     console.log(a,rest, c);
    
// }
// foo(1,2,3,4,5);




// function foo(a, ...rest, c){
//     console.log(a,rest, c);
    
// }
// foo(1,2,3,4,5);



// implement Chunks for ex const arr = [1,2,3,4,5] ,const size = 2 then the o/p has to be [[1,2], [3,4], [5]]

const arr = [1,2,3,4,5];
let outerArr = [];
let innerArr = [];
const size  = 2;
let m = 1;

for (let index = 0; index < arr.length; index++) {
    if(index < size*m){
        innerArr.push(arr[index])
    }
    else{
        index--;
        outerArr.push(innerArr);
        innerArr = [];
         m++;
    }
}
outerArr.push(innerArr);

console.log(outerArr);









