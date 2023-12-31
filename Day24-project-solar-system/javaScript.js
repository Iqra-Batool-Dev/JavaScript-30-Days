const mass = document.querySelector('#mass')
const option = document.querySelector('#planets')
const button = document.querySelector('#calc')
const resultDiv = document.querySelector('.outputs')
const image = document.querySelector('#image')

// creating description div
const description = document.createElement('div')
description.style.backgroundColor = "#ffffff21"
description.style.padding = "20px"
description.style.width = "48%"
const text = document.createElement('p')
text.style.textAlign = "center"
text.style.fontSize = "1.2rem"
text.style.color = "white"
// creating element for weight result
const h3 = document.createElement('div')
h3.style.padding = "10px"
h3.style.margin = "10px auto"
h3.style.color = "white"
h3.style.backgroundColor = "#ffffff21"


button.addEventListener('click' , ()=>{
    const selectedPlanet = option.value
    const massInput = mass.value
    if(isNaN(massInput) || massInput===""){
        if(isNaN(massInput)){
            image.style.display = "none"
        text.innerHTML= "please enter valid mass value"
        description.appendChild(text)
        resultDiv.appendChild(description)
        }
        else{
        image.style.display = "none"
        text.innerHTML= "Mass is required"
        description.appendChild(text)
        resultDiv.appendChild(description)
    }
    }
    else if(selectedPlanet == 'none'){
        image.style.display = "none"
        text.innerHTML= "You did not entered planet yet"
        description.appendChild(text)
        resultDiv.appendChild(description)
    }
    else{
        let  calculation = (gravity)=>{
            let weight = massInput * gravity/9.8
            return weight.toFixed(2)
        }
        let result
        switch(selectedPlanet){
            case 'earth' : 
                result = calculation(9.8)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;

            case 'jupiter' :
                result = calculation(24.79)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Jupiter</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;

            case 'mars' :
                result = calculation(3.71)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Mars</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;

            case 'mercury' :
                result = calculation(3.7)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Mercury</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;

            case 'moon' :
                result = calculation(1.62)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Moon</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;

            case 'neptune' :
                result = calculation(11.15)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Neptune</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;

            case 'pluto' :
                result = calculation(0.62)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Pluto</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;

            case 'saturn' :
                result = calculation(10.44)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Saturn</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;

            case 'uranus' :
                result = calculation(8.7)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Uranus</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;

            case 'venus' :
                result = calculation(8.7)
                h3.innerHTML = result
                text.innerHTML = `The Weight of the Object on <strong>Venus</strong>`
                description.appendChild(text)
                description.appendChild(h3)
                resultDiv.appendChild(description)
                resultDiv.style.justifyContent = "space-around"
                image.src = `images/${selectedPlanet}.png`
                break;
        }
    }
    
})

