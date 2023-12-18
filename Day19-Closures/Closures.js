// Closures

function outerFunction (){
    let count = 0;
    function innerFunction(){
        count++
        return count
    }
    return innerFunction
}
const result = outerFunction()
console.log(result())
console.log(result())
console.log(result())

// One more example

function outerFunction2(){
    let count =0;
    function plusOne (){
        count++;
        return count;
    }
    function minusOne(){
        count--;
        return count;
    }

    return{
        plusOne:plusOne(),
        minusOne: minusOne()
    }
}

const innerFunctions =  outerFunction2()
console.log(innerFunctions.plusOne)
console.log(innerFunctions.minusOne)

