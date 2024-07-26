const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const country = document.querySelector('#country')
const score = document.querySelector('#player-score')
const addPlayer = document.querySelector('#btn1')
const error = document.querySelector('.error')
const outputTable = document.querySelector('output-table')

// validation function
const valid = (firstName, lastName, country, score)=>{
    if(firstName==''|| lastName==''|| country==''|| score==''){
        error.innerHTML = "These all fields are required "
        return false
    }
    else{
        error.innerHTML = ''
        return true
    }
}

//  event Listener
addPlayer.addEventListener('click' , ()=>{
    if(firstName.value, lastName.value, country.value, score.value){
        addData()
    }
})

// function for adding data to result table

const addData = ()=>{
    if('playerData' in localStorage){
        playerData = getData()
        playerData.push({
            firstName : firstName.value,
            lastName : lastName.value,
            country : country.value,
            score : score.value,
            time : showDateTime()
        })

        const playerString = JSON.stringify(playerData)
        localStorage.setItem('playerData' , playerString)
        createTable()
    }
    else{
        const playerData = []
        playerData.push({
            firstName : firstName.value,
            lastName : lastName.value,
            country : country.value,
            score : score.value,
            time : showDateTime()
        })
        saveData(playerData)
        createTable()
    }

    firstName.value = ''
    lastName.value = ''
    country.value = ''
    score.value = ''
}

// function to get data from localStorage

const getData = ()=>{
    const players = JSON.parse(localStorage.getItem('playerData'))
    players.sort((a,b)=>{
        return a.score - b.score
    })
    return players
}

// creating function to save Data in local storage

const saveData = (array)=>{
    const playerString = JSON.stringify(array)
        localStorage.setItem('playerData' , playerString)
}

// function to show Date and Time
const showDateTime = ()=>{
    const date = new Date()
    const  dd = date.getDay()
    const mm = date.getMonth()
    const year = date.getFullYear()
    const hour = date.getHours()
    const minut = date.getMinutes()
    // const second = date.getSeconds()

    const formate = (a)=>{
        if(a<10){
            a = `0${a}`
        }
            return a
    }
    const formateDay = formate(dd)
    const formateHour = formate(hour)
    const formateMin = formate(minut)
    // const formateSec = formate(second)

    const fullDateTime = `${formateDay}/${mm}/${year} ${formateHour}:${formateMin}`
    return fullDateTime
}

// function to create output table 

const createTable = ()=>{
    outputTable.innerHTML=""
    const players = getData()
    players.forEach(player => {
        const row = document.createElement('div')
    
    })
}


