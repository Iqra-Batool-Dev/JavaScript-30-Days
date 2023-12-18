// 1. Create a closure which has one inner function

function outerFunction(){
    let a=2;
    let b=3;
    function sumFunc(){
        let sum = a+b;
        return sum;
    }
    return sumFunc;
}
const result = outerFunction();
console.log(result()) // 5