let year = document.getElementById("year")
let list = document.querySelectorAll("li")
let date = document.getElementById("date")

year.style.fontSize = '50px'

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
//show date 
date.innerHTML = showDateTime()

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
//changing colors of year and date every one second
setInterval(()=>{
    year.style.color= randomColor()
date.style.backgroundColor= randomColor()
}, 1000)

//give background colors to all list items 
list.forEach(element => {
    element.style.backgroundColor = "red"
});
list[0].style.backgroundColor = "green"
list[1].style.backgroundColor = "yellow"




