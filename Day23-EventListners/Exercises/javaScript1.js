const msg = document.querySelector('#msg')
const input = document.querySelector('#number')
const button =document.querySelector('#btn')
const numDiv = document.querySelector('.numberDiv')


// creating some number by default 

for(let i=0; i<=50 ; i++){
    let numBox = document.createElement("div")
    numBox.textContent = i
    numBox.style.fontSize = "18px"
    numBox.style.color = "white"
    numBox.style.textAlign="center"
    numBox.style.padding =" 5px"
    if(i%2===0){
        numBox.style.backgroundColor = "#1f8d1f"
    }
    else{
        numBox.style.backgroundColor = "#ce2f2f"
    }
    if(i>1){
        let isPrime = true 
        for(let j=2 ; j < i ; j++){
            if(i%j === 0){
                isPrime= false
                break
            }
            else{
                isPrime = true
            }
        }
    if(isPrime)
        numBox.style.backgroundColor = "#f0f030"
    }
    numDiv.appendChild(numBox)
}




// generating more numbers according to user input
button.addEventListener('click' , (e)=>{
    if(input.value === ''){
        msg.textContent = "Enter number values on input field to generate the numbers"
    }
    else if(isNaN(input.value)){
        msg.textContent = "Enter a valid number"
    }
// adding more numbers
else{
    msg.textContent = " "
    if(numDiv.hasChildNodes){
        numDiv.innerHTML = " "
    }
    for(let i=0; i<=input.value; i++){
        let numBox = document.createElement("div")
        numBox.textContent = i
        numBox.style.fontSize = "18px"
        numBox.style.color = "white"
        numBox.style.textAlign="center"
        numBox.style.padding =" 5px"
        if(i%2===0){
            numBox.style.backgroundColor = "#1f8d1f"
        }
        else{
            numBox.style.backgroundColor = "#ce2f2f"
        }
        if(i>1){
            let isPrime = true 
            for(let j=2 ; j < i ; j++){
                if(i%j === 0){
                    isPrime= false
                    break
                }
                else{
                    isPrime = true
                }
            }
        if(isPrime)
            numBox.style.backgroundColor = "#f0f030"
        }
        numDiv.appendChild(numBox)

}
}
})