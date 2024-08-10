 //..... Arrays - creation, output, builtin method, indexing,       ## forof, foreach ##

let brr = [1,2,3,4,5];
n= brr.length;
//print
for(let i=0; i<n; i++){
    console.log(brr[i]);
     
}

/** In C++ - vectors 
 * In java - ArrayList
 * In js - simply array can be used
 */

let arr = [1,2,3,4,5];
console.log(arr);  // op - [1,2,3,4,5]

//add from last
arr.push(9)
console.log(arr);  //op - [1,2,3,4,5,9]   //push the number at the last

//insertion from first
arr.unshift(23);                                                      //   *****
console.log(arr);  //op- [23,1,2,3,4,5,9]

arr.shift()  // shift - removes first element fromm the array              #*****
console.log(arr);


arr.pop()
console.log(arr)  //op - [1,2,3,4,5,]    pop - it remove last element of array       #*****

arr.push(7);
console.log(arr);

/**\
 * we can also create an arr of different object
 */

let a = [4,"ashish",14.5,[1,2,4],true];
console.log(a);



/**         /// KUCH BHI HOORA H BC ISS JAVASCRIPT M */


// FOROF loop in array 

let b =[4,2,8,3,1,6];
for (const ele of b) {
    console.log(ele);
    
}

//FOR EACH lopp

b.forEach((ele,i)=>{          // it will also print index with element       *****
    console.log(ele,i);
})
