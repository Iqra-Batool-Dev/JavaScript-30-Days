let wrapper = document.getElementById("wrapper")
wrapper.style.display = "flex"
wrapper.style.flexDirection = "column"
wrapper.style.alignItems = "center"
wrapper.style.width = "50%"

const showDateTime = () =>{
    const date= new Date();
    const dd= date.getDate()
    const mm= date.getMonth()
    const yyyy= date.getFullYear()
    const hh = date.getHours()
    const min= date.getMinutes()
    const sec = date.getSeconds()
    const formate = (a)=>{
        if(a<10){
            a=`0${a}`
        }
        return a 
    }
    const day= formate(dd);
    const month =formate(mm)
    const year= formate(yyyy)
    const hours = formate(hh)
    const minutes = formate(min)
    const seconds = formate(sec)
    let finalDate=(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`)
    return finalDate
}
// generate random colors
let randomColor = ()=>{
    let string = "1234567890abcdef"
    let length = string.length
    let id=""
        for(let i=0; i<6; i++){
            id+=string.charAt(Math.floor(Math.random()*length))
        }
        let color = `#${id}`
        return color
        
}

// create heading one
let heading1 = document.createElement("h1")
heading1.textContent = asabenehChallenges2020.challengeTitle
heading1.style.margin = "5px"
wrapper.appendChild(heading1)

//year creating and styling

let year = document.createElement("span")
year.textContent = asabenehChallenges2020.challengeYear
year.style.fontSize = "80px"
setInterval(()=>{
    year.style.color = randomColor()
}, 1000)
heading1.append(year)

//creating subheading

let subHeading = document.createElement("h3")
subHeading.style.margin = "5px"
subHeading.textContent = asabenehChallenges2020.challengeSubtitle
subHeading.style.textDecoration = "underline"
wrapper.appendChild(subHeading)

// creating date and time 
let date = document.createElement("p")
date.style.padding = "5px"
date.style.margin = "5px"
date.textContent = showDateTime()
setInterval(()=>{
    date.style.backgroundColor = randomColor()
},1000)
wrapper.appendChild(date)

//creating challenges list

asabenehChallenges2020.challenges.forEach((element)=>{
    let row = document.createElement("div")
    row.className = "row"
    row.style.display = "flex"
    row.style.flexDirection = "row"
    row.style.justifyContent ="space-between"
    row.style.alignItems = "center"
    row.style.backgroundColor = "red"
    row.style.width = "100%"
    row.style.padding = "20px"
    row.style.margin = "2px 0"
// creating part 1
    let name = document.createElement("div")
    name.textContent = element.name
    row.appendChild(name)
// creating part 2
    let topics = document.createElement("div")
    row.appendChild(topics)
    // creating details 
    let details = document.createElement("details")
    let summary = document.createElement("summary")
    let topicName = element.name.slice(10 , element.name.length)
    summary.textContent = topicName
    details.appendChild(summary)
    topics.appendChild(details)
    // creating details list
    element.topics.forEach((topic)=>{
        let list = document.createElement("li")
        list.textContent = topic
        list.style.listStyle = "none"
        details.appendChild(list)
    })


// creating part3
    let status = document.createElement("div")
    status.textContent = element.status
    row.appendChild(status)
    wrapper.appendChild(row)

})

//change the colors of done and ongoing challenges 
let rows = document.querySelectorAll(".row")
    rows[0].style.backgroundColor = "green"
    rows[1].style.backgroundColor = "yellow"


// creating Bio Section 

let bio = document.createElement("div")
bio.className = "bio"
wrapper.appendChild(bio)
bio.style.display = "flex"
bio.style.flexDirection = "column"
bio.style.justifyContent = "center"
bio.style.alignItems = "center"
bio.style.width = "100%"
bio.style.margin = "20px 0"
// bio.style.backgroundColor = "brown"

// author name
let author = document.createElement("h2")
author.textContent = asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName
bio.appendChild(author)

// creating social platform links
let socialPlatforms = document.createElement("div")
socialPlatforms.className = "social"
socialPlatforms.style.display = "flex"
socialPlatforms.style.flexDirection = "row"
socialPlatforms.style.justifyContent = "center"
socialPlatforms.style.alignItems = "center"
socialPlatforms.style.margin = "5px auto"
bio.appendChild(socialPlatforms)

asabenehChallenges2020.author.socialLinks.forEach((element)=>{
    let link = document.createElement("a")
    let url = element.url
    let icon = element.fontawesomeIcon
    link.setAttribute("href" , url)
    link.innerHTML = icon
    link.style.fontSize = "40px"
    link.style.color = "black"
    link.style.margin = "5px"
    socialPlatforms.appendChild(link)
    
})

// creating bio description

let description = document.createElement("p")
description.textContent = asabenehChallenges2020.author.bio
description.style.fontSize ="16px"
description.style.textAlign = "center"
description.style.margin ="15px auto"
bio.appendChild(description)

//  more info  about author 

let moreInfo = document.createElement("div")
moreInfo.style.display = "flex"
moreInfo.style.flexDirection = "row"
moreInfo.style.justifyContent = "space-between"
moreInfo.style.width ="100%"
wrapper.appendChild(moreInfo)

// adding titles
let titles = document.createElement("div")
moreInfo.appendChild(titles)
let titleHeading = document.createElement("h3")
titleHeading.textContent = "Titles"
titles.appendChild(titleHeading)
asabenehChallenges2020.author.titles.forEach((element)=>{
    let title = document.createElement("div")
    title.innerHTML = `${element[0]}    ${element[1]}`
    title.style.fontSize = "15px"
    titles.appendChild(title)

})

// adding skills

let skills = document.createElement("div")
moreInfo.appendChild(skills)

let skillHeading = document.createElement("h3")
skillHeading.textContent = "Skills"
skills.appendChild(skillHeading)

asabenehChallenges2020.author.skills.forEach((element)=>{
    let skill = document.createElement("div")
    skill.innerHTML =`✅    ${element}` 
    skill.style.fontSize = "15px"
    skills.appendChild(skill)

})

// adding qualifications

let qualifications = document.createElement("div")
moreInfo.appendChild(qualifications)
let qHeading = document.createElement("h3")
qHeading.textContent = "Qualifications"
qualifications.appendChild(qHeading)
asabenehChallenges2020.author.qualifications.forEach((element)=>{
    let qualification = document.createElement("div")
    qualification.innerHTML = "📖" + "   " + element
    qualification.style.fontSize = "15px"
    qualifications.appendChild(qualification)

})

// creating Keywords section
let keySection  = document.createElement("div")
keySection.style.width = "100%"
keySection.style.margin = "25px 0"
wrapper.appendChild(keySection)

let keyHeading = document.createElement("h2")
keyHeading.textContent = "Keywords"
keyHeading.style.margin = "20px 0"
keySection.appendChild(keyHeading)

// adding keywords

asabenehChallenges2020.keywords.forEach((keyword)=>{
    let keywordDiv = document.createElement("div")
    keywordDiv.style.display = "inline-block"
    keywordDiv.innerHTML = "#" + " " +keyword
    keywordDiv.style.padding = "3px 15px"
    keywordDiv.style.margin = "2px 5px"
    keywordDiv.style.backgroundColor = randomColor()
    keywordDiv.style.borderRadius = "15px"
    keySection.appendChild(keywordDiv)
})








