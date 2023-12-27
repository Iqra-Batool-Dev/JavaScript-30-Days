let container = document.getElementById("container")
let n = 101;
for(let i = 0; i<=101; i++){
    let div = document.createElement('div')
    div.className= "box"
    div.textContent = i
    div.style.textAlign = "center"
    div.style.paddingTop = "12px"
    div.style.paddingBottom = "12px"
    div.style.paddingRight = "5px"
    div.style.paddingLeft = "5px"
    div.style.color = "white"
    div.style.fontSize = "18px"
    
    
    if(i%2===0){
        div.style.backgroundColor = "green"
    }

    else{
        div.style.backgroundColor = "yellow"
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
        div.style.backgroundColor = "red"
    }
    
    container.appendChild(div)

}

container.style.display = "grid"
// container.style.gridTemplateRows = " 1fr 1fr 1fr 1fr 1fr 1fr"
container.style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
container.style.rowGap = "3px"
container.style.columnGap = "3px"







