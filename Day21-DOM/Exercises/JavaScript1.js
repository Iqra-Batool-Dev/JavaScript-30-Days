// Q1:
let firstPara = document.querySelector("p")
console.log(firstPara)

//Q2:
let para1 = document.querySelector("#text1")
let para2 = document.querySelector("#text2")
let para3 = document.querySelector("#text3")
console.log(para3)

//Q3:
let allParas = document.querySelectorAll("p")
console.log(allParas)

//Q4:
let length = allParas.length
for(let i=0; i<length; i++){
    console.log(allParas[i].innerText)
}

//Q5:
allParas[3].textContent = "the forth paragraph"

//Q6:
para1.setAttribute("id", "para1")
para1.setAttribute("class", "paragraph")
console.log(para1)
