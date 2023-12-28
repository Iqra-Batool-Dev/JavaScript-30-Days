// -------------Event Listeners----------- //
//addEventListener() method can take two things as argument , the first is event type and the second is a callback function
// syntax to add an event listener 
// selectedElement.addEventListener(eventListener , function(e){
//     // the activity you want to occur after event will be in here
// })
//or we can use arrow function like
// selectedElement.addEventListener(eventListener , (e)=>{
//     // the activity you want to occur after event will be in here
// })

// Click 
const btn = document.querySelector('button')
btn.addEventListener('click' , e=>{
    console.log('e gives the event listener object' ,e)
    console.log(e.target)
    console.log(e.type)
})

// An event can be also attached directly to the HTML element as inline script.
let click = (e)=>{
    console.log('this event is attached directly  to html element')
}

// Double Click
const btn2 = document.querySelector('#button2')
btn2.addEventListener('dblclick' , e =>{
    console.log('this is double click event listener')
})

//Getting value from an input element
const mass = document.querySelector('#mass')
const height  = document.querySelector('#height')
const btn3 = document.querySelector('#calc')

btn3.addEventListener('click' , ()=>{
    let bmi = mass.value / height.value ** 2
    alert(`your bmi is: ${bmi.toFixed(2)}`)
    console.log(bmi)
})

// input event and change

const msg = document.querySelector('#message')
const p = document.querySelector('p')

msg.addEventListener('input' , e=>{
    p.textContent = e.target.value
})

// blur event
msg.addEventListener('blur', e=>{
    p.textContent = "this field is required"
})

//keyPress , keydown , keyup

document.querySelector('body').addEventListener('keypress' , e=>{
    console.log(e.keyCode)
})







