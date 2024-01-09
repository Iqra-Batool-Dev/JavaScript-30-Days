const span = document.querySelector('.total')
const p = document.querySelector('p')
const starting = document.querySelector('.starting')
const including = document.querySelector('.including')
const sortButton = document.querySelector('.sorting')
const input = document.querySelector('input')
const resultDiv = document.querySelector('.result-section')
const icon = document.querySelector('.sorting-icon')
// console.log(countries)

span.innerHTML= countries.length

// change background color of buttons when these are active
let click = false
starting.addEventListener('click', ()=>{
    click = true
    including.classList.remove("active")
    starting.classList.add("active")
})
including.addEventListener('click' , ()=>{
    click = false
    starting.classList.remove('active')
    including.classList.add('active')
})

// show output boxes
const showOutput = (data)=>{
    resultDiv.innerHTML = ''
    data.forEach(element => {
        const box = document.createElement('div')
        box.setAttribute('class' , 'box')
        box.innerHTML = element
        resultDiv.appendChild(box)
    });
}


// Generating outputs thats has to be show in output boxes

const searchWithStart = (inputValue)=>{
    const result = countries.filter((element)=>element.startsWith(inputValue))
    return result
}

const searchWithAnyWord = (inputValue)=>{
    const result = countries.filter((element)=> element.includes(inputValue))
    return result
}

let matchCountries
input.addEventListener("input" , ()=>{
    let word = input.value.toUpperCase()
    if(click == true){
        matchCountries = searchWithStart(word)
        p.innerHTML = `Countries start with <span class= 'string' > ${word} </span> are <span class= 'number'> ${matchCountries.length}</span>`
        if(input.value== '')
        p.innerHTML = ''
    }
    else{
        matchCountries = searchWithAnyWord(word)
        p.innerHTML = `Countries that contains <span class= 'string' > ${word} </span> are <span class= 'number'> ${matchCountries.length}</span>`
        if(input.value== '')
        p.innerHTML = ''
    }
    showOutput(matchCountries)
})

// sorting of countries
sortButton.addEventListener('click', ()=>{
    icon.classList.toggle('fa-arrow-down-a-z')
    icon.classList.toggle('fa-arrow-up-a-z')
    icon.classList.toggle('z-a')
    const result = icon.classList.contains('z-a')
    if (result) {
        matchCountries.reverse()
    } else {
        matchCountries.sort()
    }
    showOutput(matchCountries)
})


