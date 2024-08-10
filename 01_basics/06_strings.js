// string is treated as array therefore we can use for loop in sting

let s= "ashish singh rawat"
console.log(s,s.length);

// can also use for loop to print
for(let i=0; i<s.length; i++){
    console.log(s[i]);          // print in a vertical direction

}



//  >>>>>>>>>>>>>>>>>>>>>>>>   String Built in func.     


/** -> in string it wors just like in java
 *  it has primitive and nor=n primitive
 * cannot be change in sting if do it will create a copy of itt
*/

let str = "ashish"                                   //     *****
str.toUpperCase();  //ye kuch nahi karega 
let str2 = str.toUpperCase(); // ye karega
console.log(str,str2)  // str is same , but str2 is different 


let as = "     ashish singh     "
console.log(as,as.length);
as2 = as.trim();           //  trim() - this method only removes left and right space , not middle one
console.log(as2,as2.length);

console.log(as.indexOf('h'));
console.log(as.lastIndexOf('h'));

// this below line can show that this langusge is C++ and also JAVA
console.log(as2.charAt(3))
console.log(as2[3])

 /**    slice   */
let as3 = "asdfghjkl";
console.log(as3.slice(3))  // print after index 3
console.log(as3.slice(3,7)) // gives substring from 3 to 6


/**     split */
let a = "ashish singh rawat";
console.log(a);

let ARR = s.split(' ');        // this will split in terms of space   

for( const ele of ARR){
    console.log(ele);

}

console.log(ARR);

