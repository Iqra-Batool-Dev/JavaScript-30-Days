const container = document.querySelector('.container')
const h1= document.createElement('h1')


// Main function to display text 
    const fontFamily = ['Lato', 'Montserrat', 'Nunito' , 'Roboto']
    let i= 0
    setInterval(() => {
        h1.style.fontFamily = fontFamily[i]
        i++
        if(i==fontFamily.length)
        i=0
        createText()
        container.appendChild(h1)
        container.style.background = randomColor()
    }, 3000);

// generating random colors
    const randomColor =()=>{
        const string = '1234567890abcdef'
        let color= '#'
        for(let i=0; i <= 5 ; i++){
        const id = Math.floor(Math.random() * string.length)
        const letter = string.charAt(id)
        color += letter
        
    }
    return color
    }

    // creating text
    const text = '30 Days of JavaScript Challenge 2020 Asabeneh Yetayeh'
    const StringArray = text.split('')
    const createText = ()=>{
        h1.innerHTML = ''
        StringArray.forEach((character)=>{
            const span = document.createElement('span')
            span.style.color = randomColor()
            span.innerHTML = character
            h1.appendChild(span)
        })
    }

    