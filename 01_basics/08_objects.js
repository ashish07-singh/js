//primitive and object(for in)

//  objects - objects is a kind of like map/dictionary where we have key-value pairs

/**     colon :  lagta h yaad rakhiyooo  OR equalto ka sign x ke baad*/ 

var details = ["ashish", 24,55.00, false];  // ARRAY representation 

// object representation  (key : values) pairs

let x = {  

    name : "ashish",    //  colon : yaad rakhiyooo
    "nick name" : "ashu",
    age : 24,
    percentage : 55.00,
    isMarried : false
};

console.log(x);    // op - { name: 'ashish', age: 24, percentage: 55, isMarried: false }


let car = {
    name : "Honda City",
    milage : 200,
}
console.log(car);


/** use of dot operator and [] bracket */
console.log(x.age);   // op - 24
console.log(x["nick name"]);



/**    forin loop is used to print objects
 */

for(const key in x){
    console.log(key,x[key]);
}