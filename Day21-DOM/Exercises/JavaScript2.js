let para1 = document.getElementById("text1")
let para2 = document.getElementById("text2")
let para3 = document.getElementById("text3")
let para4 = document.getElementById("text4")
console.log(para1)
//Q1:
para1.style = `
color:black;
background : yellow;
padding:10px;
margin:10px;
`
para2.style = `
color:black;
background : brown;
padding:10px;
margin:10px;
`
para3.style = `
color:black;
background : purple;
padding:10px;
margin:10px;
`
para4.style = `
color:black;
background : orange;
padding:10px;
margin:10px;
`
//Q2:
let allParas = document.querySelectorAll('p')
let length= allParas.length
for(let i=1; i<=length; i++){
    if(i%2==0){
        allParas[i-1].style.color = "red"
    }
    else {
        allParas[i-1].style.color = "green"
    }
}

//Q3:
para1.setAttribute("id", "one")
para1.setAttribute("class", "paragraph")
para1.textContent= "its color is yellow"

para2.setAttribute("id", "two")
para2.setAttribute("class", "paragraph")
para2.textContent= "its color is brown"

para3.setAttribute("id", "three")
para3.setAttribute("class", "paragraph")
para3.textContent= "its color is purple"

para4.setAttribute("id", "four")
para4.setAttribute("class", "paragraph")
para4.textContent= "its color is orange"







