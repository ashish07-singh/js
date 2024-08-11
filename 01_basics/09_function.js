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
