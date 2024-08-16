function OnetoN(n){
    for(let i=1; i<=n; i++){
        console.log(i);

    }
    console.log()
}

OnetoN(10)
OnetoN(5)

function eqn(a,b){
    return (Math.abs(a*a*a) + Math.abs(b*b*b));
}

let a = -3;
let b = 4;
console.log(eqn(a,b));    // eqn () ek valuse return karke degi jo  ki print karani hogi console.log se 


// other function
console.log(Math.abs(-7))
console.log(Math.abs(-7.5))
console.log(Math.max(5,1))
console.log(Math.max(7,1,8,2,4,6,3))   //only in javascript to get maximum out of multiple number

console.log(Math.pow(2,3))
console.log(Math.pow(2.3,2))   //only in js
console.log(Math.log(2.81))

console.log(Math.sqrt(64))   
console.log(Math.cbrt(529))

//floor , ceil

console.log(Math.random())  // ge
