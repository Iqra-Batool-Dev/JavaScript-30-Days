// 1. Create a closure which has three inner functions

function outerFunction(){
    let num1= 5;
    let num2= 3;
    let num3= 6;
    function sumFunc(){
        let sum =num1 + num2;
        return sum
    }

    function subFunc(){
        let minus = num1 - num2;
        return minus
    }

    function Multiply (){
        let mul = num1* num2;
        return mul;
    }

    return {
        Addition: sumFunc(),
        Subtraction:subFunc(),
        Multiply: Multiply()
    }
}

const results = outerFunction()
console.log(results)

