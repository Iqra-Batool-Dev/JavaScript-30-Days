const titles = [
    { icon: '📌', skill: 'Instructor' },
    { icon: '🔥', skill: 'Motivational Speaker' },
    { icon: '📒', skill: 'Content Creator' },
    { icon: '💻', skill: 'Programmer' }
]

const techs = ['Redux', 'Python',  'c++', 'JavaScript' ]

const randomColors = ()=>{
    const string = "abcdef1234567890"
    let color ='#'
    for(let i=0; i<=5; i++){
        const number = string.charAt(Math.floor(Math.random()* string.length))
        color += number
    }
        return color
    
}

const title = document.querySelector('.titles')
const tech = document.querySelector('.teach')
let index = 0
setInterval(()=>{
    title.innerHTML = ''
    const icon =document.createElement('h2')
    icon.setAttribute('class', 'icon')
    icon.innerHTML = titles[index].icon
    title.appendChild(icon)

    const skill = document.createElement('h2')
    skill.setAttribute('class' , 'skill')
    skill.innerHTML = titles[index].skill
    title.appendChild(skill)

    tech.innerHTML=''
    const topic = document.createElement('div')
    topic.setAttribute('class', 'topic')
    topic.innerHTML = techs[index]
    topic.style.color = randomColors()
    tech.appendChild(topic)


    index++
    if(index == 4)
    index=0
}, 2000)