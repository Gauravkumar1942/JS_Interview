// const arr = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(arr.map(item => item * 10));         // gives new array after operation . Does not chnage the original array 
// console.log(arr);                    // original array is as it is 




// const arr = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(arr.forEach(item => item * 10));                //tricky line ........... pay attention
// console.log(arr);




// console.log(parseInt(10 + 2));
// // 'use strict';               
//    // no impact on the operation wheather we use "use strict" or not 
// console.log(parseInt('M7F'));
// console.log(parseInt('7MF'));


// *************************
// ########### Super Complicated, trying playing with the inside values of a and b, and use Strict and also the data type of the inner a and  b ,  data types like const , var, let 
// {
//     function abc(a,b){
//         // 'use strict';                     
//         var  a= 11;
//         var  b= 12;
//         return arguments[0] + arguments[1];   // while using "use strict" , we can't change the param variables value , they remain what we have sent from while calling the function , but while we don't use the 'use strict', we can chnage the value of arguements inside the fucntion as done in this example

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
//     if(num > 0) return ;               // [undefined * no.of. element]
//     return num * 2;
// }))





//VERY IMPORTANT 

// 'use strict';                     // tricky 
// {
//     function abc(){
//         console.log('Gaurav Kumar');
//         function abc2(){
//             console.log("Anand Kumar"); 
//         }
//         abc2();
//     }
                       // in this try putting abc(), while using "use strict" , then it wil work and not give Reference Error 
// } 
// abc();



// try after removing the use strict because it changes the answer and things can be super  confusing as well. 

// Change the scopes of the function calls in variaous places and check if u can call them or not . 
// When called outside the other fucntion's scope does'nt calls the function and it says that the func is not defiend and throws reference error
// But if it is called inside the window scope , then it can be called 




//VERY IMPORTANT
// console.log([1,2,3,4,5,6].some((n) => n > 4)) // returns true
// console.log([1,2,3,4,5,6].some((n) => {n > 4})) // returns false


// const nums  = [1,2,3,4,5,6];
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
// find gives u one result not arrray of resultz ,
// where as the .filter gives all the elements that satisfy the condition



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



// async function res(){
// const [,,,a, b] = [1,2,3,4,5,6];
// console.log(a);






// console.log("A");
// setTimeout(() => {
//     console.log("B");
// });
// by default the time is 0 sec, u can give it as 0 sec or u can leave as it is as well 
// ["C", "D"].forEach((x) => console.log(x));
// console.log("E");





// This is the Input 
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
// The output has to be something like this 

// const output = {
    // "sample 1" : [
    //     {
    //         key: 'sample 1',
    //         data: 'Data 1'
    //     },
    //     {
    //         key: 'sample 1',
    //         data: 'Data1'
    //     }
    // ],
    // "sample 2": [
    //     {
    //         key: 'sample 3',
    //         data: 'Data3'
    //     },
    //     {
    //         key: 'sample 3',
    //         data: 'Data3'
    //     }
    // ],
    // "sample 5": [{

    //     key: 'sample 5',
    //     data: 'Data5'
    // }]


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
// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

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
// numbers.push(5); //  TypeError: Cannot assign to read only property 'length' of object '[object Array]'

// const a= [1,2,3];
// Object.defineProperty(a, 'length', {writable: false});
// by doing that, we can make the len of the array non writable that means we cant change the lenght of the array in the future by either manually chaning the lenght or by trying to push anything into teth array 


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
    // make a hashtable , and store the arg[0] and arg[1] as key and value pair;
    // first check either hashtable.has(arg[0]), 
    // hs.get(arg[0]) - arg[0] == arg[1]
    // return hash.get(arg[0])

//  for add(1,2)
// 1,3 => take 1 , find value that is 3 , then subtract value - key if this equals to second arguemnt / param then return the value of key name param 1 



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

// const arr = [1,2,3,4,5];
// let outerArr = [];
// let innerArr = [];
// const size  = 2;
// let m = 1;

// for (let index = 0; index < arr.length; index++) {
//     if(index < size*m){
//         innerArr.push(arr[index])
//     }
//     else{
//         index--;
//         outerArr.push(innerArr);
//         innerArr = [];
//          m++;
//     }
// }
// outerArr.push(innerArr);

// console.log(outerArr);






// implement a count fucntion that when called for three times it returns or logs 1 2 3 respectively 
// as shown in the code below 

// (function(){
//     let i=1;

//     function count(){
      
//         console.log(i++);
        
//     }
//     count();
//     count();
//     count();
  
// })();







// implement the same chunks , but this time after say calling for 3 times when users does count.reset(), and then when he/she again calls the count func it should return 0 and not 4 becoz when called for 3 times the counter would have been 3 but now when we reset the count the counter goes to 0 and after that when we call it has to be 1 2 3 and so on 


// let count = (function() {
//                 let counter  = 0; 
//                  function inner(){
//                     console.log(counter++);
                    
//                 };
                
//                  inner.reset = function() {
//                       counter = 0;
//                 };

               
//                 return inner;

//                         })();

// count();
// count();
// count();
// count.reset();
// count();
// count();
// count();
// count();















// console.log(typeof undefined);
// console.log(typeof 42);
// console.log(typeof null);
// console.log(typeof NaN);          // super tricky , surprisingly -> Not a Number(NaN) is actaully a Number. Surprised !!?? Welcome to JavaScript
// console.log(typeof Symbol('id'));  
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function() {});   // returns function as answer but remember , fucntion is also an object somwehwere down the line 
// console.log(typeof new Date());
// console.log(typeof Math);
// console.log(typeof Infinity);  // pay attention
// console.log(typeof /abc/);   // remember this, this looks regex but this does not return regex , REGEX ARE OBJECT IN JS
// // console.log(typeof (() => {}));
// console.log(typeof arguments);     // Read this 5 times 

// console.log(typeof parseInt);
// console.log(typeof parseFloat);
// console.log(typeof async function() {});   // read the ans for this for 5 times 
// console.log(typeof new Promise(() => {}));       // information: Promise is actually an Object in JS

// console.log(typeof 0n);    // tricky and unusual

// console.log(typeof new Set());
// console.log(typeof new Map());




       
// console.log(typeof undefined === typeof null);   // Important 

// console.log(typeof function*() {});    //tricky , be aware of what answer does AI models like ChatGPT gives and what answer ur VSCode gives
// console.log(typeof new Error());
// console.log(typeof new RegExp('abc'));
// console.log(typeof 3.14)
// console.log(typeof (() => {}).prototype);    // super tricky , initially i thought i will give object beacuse the () => {} is fucntion and prototype of fucntion would be an obj, but no i was wrong . The ans is 'undefined';

// console.log(typeof 1+'1');   // slightly tricky . Typeof 1 is processed first then the '1'. so it became number + '1' = 'number1' and not typeof '11' which would have been string in tht case but it is not .
// console.log(typeof [1,2] === typeof { a: 1});      // be aware of the answer from chatGPT they can be some times wrong , use the vscode or any other coding software to verify the answers 

// console.log(String(1)); // String("anything") is better/safer  than .toString()
// console.log(typeof new Function());   // remember this , this is different than the new Set(), new Map(), new Date(), etc


// //If there is any undeclared variable , n if u try to find its type of then it will return undefined 

// console.log(typeof g);  // typeof undeclared_Variable  = 'undefined'  // **** important




// regarding variable type let , const and class, when they are not declared then it will return undefined but suppose they are defined in the bottm of the code and we are trying to finnd the typeof in above lines , then it will throw ReferenceError beacuse while HOISTING the let , const and class are in Temporal Dead Zone (TDZ)and hence it will give error
// console.log(typeof g);
// console.log(typeof m);
// console.log(typeof Anna);

// let g = 32;
// const m = "Gaurav Kumar";
// class Anna {};


// ***             FUNCTIONS ARE CALLABLE OBJECTS IN JS

// console.log( typeof (function(){}).__proto__); 
// console.log( typeof typeof (function(){}).__proto__); 
// console.log(typeof (() => {}) === typeof class {});  // classes are nothing but syntactic sugar name for function , more presicely constructor function 

// console.log(typeof (function*() {})()  );   // read ten times 
//function*() {} defines a generator function.

// When you call a generator function (with ()), it returns a generator object.

// typeof on any object (including generator objects) returns "object".



// ??          VERY IMPORTANT AND TRICKY


// const instance = new (class { constructor() { return {}; } });
// console.log(instance instanceof class {}); // false (proof it's not a class instance)
// console.log(instance); // {} (plain object)
// console.log(typeof instance); // object (plain object)
// console.log(typeof instance.constructor); // function (constructor function)


// console.log(typeof (class {})); // function (class is a function)
 // function (class is a function)







// ***********      Object          *************

// const obj  = new Object();         // object creation using new keyword 
// obj.value = 8055;
// console.log(obj.value);



// const obj = Object();                 // object creation without new keyword 
// obj.name = 'Gaurav';
// console.log(obj.name);




// const obj = {                            // direct object creation 
//     value : 8055
// }
// console.log(obj.value);



// const o = new Object(null);
// const q  = new Object(undefined)

// console.log(o, q);






// const target = { a: 1 };
// const source = { b: 2, c: 3 };
// const result = Object.assign(target, source);   // it is short of like adding target obj and source obj or say adding obj1 and obj2 

// console.log(result); // { a: 1, b: 2, c: 3 }
// console.log(target); // { a: 1, b: 2, c: 3 } (target is modified)





// const target = { a: 1 };
// const source = { a: 2, c: 3 };
// const result = Object.assign(target, source);   // it is short of like adding target obj and source obj or say adding obj1 and obj2 

// console.log(result); 
// console.log(target);  // also the target obj is modified 
// if there is any overrlapping key then then key of the source object is considered and no the target object, as u can see in the o/p, the value of a is not 1 but 2





// const person = {
//     greet() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };
  
//   const john = Object.create(person);
//   john.name = 'John';
//   john.greet(); // Hello, my name is John
//   console.log(person);
//   console.log(person.greet());

//   console.log(john);
//   console.log(john.greet());             // tricky ,,,, read it carefully !!



// const obj = {};

// Object.defineProperty(obj, 'property1', {
//   value: 42,
//   writable: false,
//   enumerable: true
// });

// console.log(obj.property1); // 42
// obj.property1 = 100; // Throws in strict mode, fails silently otherwise
// console.log(obj.property1); // 42 (value didn't change)
  
  
// const obj = {};
// Object.defineProperty(obj, 'property', {
//     value: 24,
//     writable: true,                // if writable is true then u can change the value of the value : 24, as shown in line 1055, but if it is false then u cant do it 
//     enumerable: true
// });

// console.log(obj.property);

// obj.property = 99;
// console.log(obj.property);





// const obj = {};

// Object.defineProperties(obj, {       // Object.defineProperties(<object name>, { {}, {}, {}, ...............})
//   property1: {
//     value: true,
//     writable: true
//   },
//   property2: {
//     value: 'Hello',
//     writable: false
//   }
// });

// console.log(obj.property1); // true
// console.log(obj.property2); // 'Hello'
// obj.property2  = "GK";
// console.log(obj.property2); // return Hello, becuase the writable fro property2 is false that means u can not change the value of the property2 




// const obj = { name: 'John' };
// const descriptor = Object.getOwnPropertyDescriptor(obj, 'name'); // gives the description about the value of key "name", but lets change the writable property to false and check if we can the value of the key 'name';
// console.log(descriptor);





// Object.defineProperty(obj, 'name', {
//     value: 'Gaurav',
//     writable: false,                  // we changed the writable property of the NAME to false now we cannot change the value of name;

// });

// console.log(obj.name);
// obj.name = "Anand";
// console.log(obj.name);







// const obj = {
//     name: "Gaurav Kumar",
//     class: "SDE2"
// }
// console.log(Object.getOwnPropertyDescriptors(obj)); // returns the value and also the desciption of the value 
                                                      // as the above example we can change the description using the Object.defineProperty()





// const obj = {
//     name: "Gaurav kumar",
//     degree: 'CSS',
//     CGPA: 9.3,
//     company: "Google"
// }

// // to get all the keys of the object obj 
// console.log(Object.keys(obj));

// // to get all the values of the object obj
// console.log(Object.values(obj));
// Object.keys(obj).map(item => console.log(item));
// Object.values(obj).map(item => console.log(item));





// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(Object.entries(obj));



// prevent adding new properties to an object
// const obj = {};
// console.log(Object.isExtensible(obj));

// Object.preventExtensions(obj);            // preventing extension of the object obj
// obj.newProp = 'new value'; // This will not be added
// console.log(obj.newProp); // undefined

// console.log(Object.isExtensible(obj)); // false




//seal the Object that is no adding to deleting new property 

// const obj = { prop: 42 };
// Object.seal(obj);
// obj.prop = 33;
// console.log(obj.prop); // 33
// delete obj.prop; // Cannot delete when sealed
// console.log(obj.prop); // 33




// const obj = { prop: 42 };
// Object.freeze(obj);
// obj.prop = 33; // Cannot change when frozen
// console.log(obj.prop); // 42
// delete obj.prop; // Cannot delete when frozen
// console.log(obj.prop); // 42
// obj.newProp = 100; // Cannot add new properties when frozen
// console.log(obj.newProp); // undefined




// const obj = {
//     name: "Gaurav Kumar",
//     class: "SDE2",
//     CGPA: 9.3,
//     company: "Google",
//     petName: "Doggy",           // we have two petName prop in the object obj, but when we print the value of petName it will return the last one that is "Doggy" and not "Tommy" because the last one overwrites the first one
//     __proto__:{                      // manually adding a prototype to the object obj
//         petName: "Tommy",
//         petBDay: 2020
//     }
// };
// console.log(obj.petName);
// console.log(obj.company);
// console.log(obj.petBDay);




 // adding prototype to the object using methods in th e Object in JavaScript

//  const obj  = {
//     firstName: "Anna",
//     lastName: "Karumanchi"
//  };
//  const newObject = {
//     petName: "Tommy",
//     petBDay: 2020
//  };
//  Object.setPrototypeOf(obj, newObject);
//  console.log(obj.petName);
//  console.log(obj.petBDay);
//  console.log(obj.firstName);
//  console.log(obj.lastName);
 



// // freezing one key of the Object obj
// const obj = {
//     name: " Gaurav",
//     class: "CSE"

// };

// // now i want to freeze the name so that no on e change the value of name prop
// Object.defineProperty(obj, 'name', {
//     value: "Gaurav",
//     writable: false,
//     configurable: false,
//     enumerable: false
// });
// obj.name = " Anand Kumar";        // trying to change the val of name prop in the Object Obj 
// console.log(obj.name);          // returns Gaurav n not Anand
// // lets try changing the value of class

// obj.class = "EEE";
// console.log(obj.class);         // returns EEE , that means we can change the class prop but not the val of name prop










//hiding data in an class / object /function 

// class Wallet {
//   #balance = 0; // Truly private (cannot be accessed outside)

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const myWallet = new Wallet();
// myWallet.deposit(100);
// console.log(myWallet.getBalance()); // 100
// console.log(myWallet.#balance); //  SyntaxError: Private field must be declared in class




// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);             // super tricky *******



// diff bw for...in and Object.keys()


// const parent = { a: 1 };
// const child = Object.create(parent);
// child.b = 2;
// console.log(Object.keys(child)); // ['b']    ............only own property and not prop from prototype
// for (let key in child) console.log(key); // 'b', 'a'                ......both props, from own as well as prototype



// computed property name

// const dynamicKey = 'email';
// const user = {
//   id: 1,
//   [dynamicKey]: 'user@example.com',  // Computed key
//   [`get${dynamicKey}`]() { return this[dynamicKey]; }
// };
// console.log(user.getemail()); // 'user@example.com'




// ************* PROMISE IS AN OBJECT ************

// const promis = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         reject();               // try chnaging it to reject(), then check what happens
//     }, 2000)
// });
// promis.then(() => console.log('resolved')
// ).catch(err => console.log('rejected  ', err??"It's not You, it's US !!")
// );





// what will happen when we have two things 1. A Promise and 2. a console.log , Which one will execute first ??
// the console.log and then the Promise // ***** Remember This ************


// const promiseA = new Promise((resolve, reject) => {
//   resolve(777);
// });
// At this point, "promiseA" is already settled.
// promiseA.then((val) => console.log("asynchronous logging has val:", val));
// console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777







//       **  Promise offers 4 static methods to facilitate Concurrency in JS
// *   1. Promise.all()          
// *   2. Promise.allSettled()
// *   3. Promise.any()
// *   4. Promise.race()


//Promise.all()
// **           Promise.all( takes array of promises ) and returns the new resolved Promise only and only when all the Promises resolve. if any of the Promises reject then it rejects and return the promises that got rejected 

// const promise1 = new Promise((resolve, reject) => resolve(1));
// const promise2 = new Promise((resolve, reject) => resolve(2));
// const val = 42;
// const promise3 = new Promise((resolve, reject ) => resolve("GK"));    // try writing reject("GK") then see what happens
// const p4 = Promise.resolve(4);                                        // instead of .resolve(4) , try writing .reject(4)-- then see what happens

// Promise.all([promise1, promise2, promise3, p4, val]).then(val => console.log(val)
// ).catch(err => console.log(err)
// );






// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const  res = Promise.all([p1,p2]);
// console.log(res);                 // pending 

// setTimeout(() => console.log(res)
// , 0.00000000000000000000000000000000000000000000000000001);         // executes fine 
//*****        weired analogy

// if u directly try to consol the promise.all(), results then it is giving {pending}, but when u use the setTimeout even with 1 sec delay or 0.0000000000000000000000000000000000000001 sec dealy it is properly consoling the promise result and gives the proper result 
//what does this mean and say about Promise
// Promise is an asynchronous process and they don't immediately execute . But once u use the some delay technique they execute properly even though u have used so small delay ,,,,, no matter how small is ur delay , even it is so close to 0 then too it will be exeuted properly .




// let us see which is fast Promise or SetTimeout

// console.log(Promise.resolve("Promise Hai"));
//  setTimeout(() => {
//     console.log("timeOut");
    
// }, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);


// Inference from above code 
// if we run  a code that has Promise and setTimeout , then 
// promise will run first and 
// setTimeout will run after wards ,no matter how less is the delay time . 

// IN QUEUEING IN JS  ->    PROMISES ARE FAVOURED MORE THAN SETTIMEOUT              
// *********             But , when the promise.all has empty promises passed , then they are resolved or rejected immediately 









// console.log(Promise.all([]));             // resolves immediately, and gives result of resolve/reject,  because the passes promises are empty. 




// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const res = Promise.all([p1,p2]);          // returns pending , because the passes iterable array is not empty. To resolve or reject use setTimeout
// setTimeout(() => 
//     {
//         console.log(res);           // this approach is good , first get the promise.all() result in one variable then log that variable in setTimeout 

        // console.log(Promise.all([p1,p2]));            // this runs immediately, hence it remains in pending state . dont do like this , better first get the Promise.all() value in other variable and then log that variable inside the setTimeout like we have done in code above

        
        
//      } , 1000);              // should return resolve/reject





//******** Promise.allSettled()      */

// promise.allSettled(), return promise when all the passes promises are settled(either resolved or rejected ), it also gives the resolved value and the reason behind the rejection 

// const p1  = Promise.resolve(100);
// const p2 = new Promise((resolve, reject) =>{
//     reject("Error !!");
// });

// const res = Promise.allSettled([p1,p2]);
// res.then(value => console.log(value));


// ************            Promise.any()      return the completion of promise if any one of the promises fullfilles other wise if all the promises rejects then it returns rejection 

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Err");

// const res  = Promise.any([p1,p2]);
// res.then( value => console.log(value)    // atleast one of the Promises is resolving so it ends up resolving the promise , try writing p1 = promise.reject(1)  and then see what happens .
// );




// Promise.any() is like Array.prototype.some()
// Promise.all() is like Array.prototype.every()




//*       Promise.race()....... whatever the first promise does , it does the same thing 
// if first promise is rejected then it rejects the whole promise n if the first promise is resolved then return the resolved promise

// const p2 = Promise.reject("error");
// const p1 = Promise.resolve(1)

// const res = Promise.race([p1,p2]);             // Remember one thing, the rejection and resolving promises depends on the way we have mentioned the promises in the Promise.race([[  <here>  ]]), it does not depened on how u have declared them , it depend on how u and in what listing manner u have mentioned them in teh array of the Promise.any() .race()    .all(), etc 

// res.then(value => console.log(value)
// ).catch(err => console.log(err)
// );




// const res = Promise.race([]);            // an empty array(iterable) will always return <pending> state, it has to has one or more rejected or resolved Promise
// console.log(res);
// setTimeout(() => console.log(res), 0);
