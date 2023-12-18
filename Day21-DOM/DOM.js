// Getting Elements of html in js

//Getting elements by TagName
  let allTitles = document.getElementsByTagName("h1")
  console.log(allTitles)//HTML collection
  console.log(allTitles.length) //4

  for(let i=0; i<allTitles.length; i++){
    console.log(allTitles[i])
  }

//Getting Elements by class name
  let titleByClass = document.getElementsByClassName("title")
  console.log(titleByClass)//HTMLcollection
  console.log(titleByClass.length)

  for(let i=0; i<titleByClass.length; i++){
    console.log(titleByClass[i])
  }

//Getting an element by id
  let titleById = document.getElementById("first-heading")
  console.log(titleById) // first-heading

// Getting elements by using query Selector methods
  let firstTitle = document.querySelector("h1") // get the first available h1 element
  let firstClass = document.querySelector(".title") // get first available element with class="title"
  let firstId = document.querySelector("#first-heading")// get element byn using id

// Getting elements by using querySelectorAll 
let allElements = document.querySelectorAll("h1") // get all h1 elements available in the page


// Adding Attribute by simple object method
  firstTitle.className = "heading"
  firstTitle.id = "forth-title"

// adding attribute by using setAttribute()
  firstClass.setAttribute("class", "head")

// adding attribute by using classList
  firstClass.classList.add("style")
  firstClass.classList.remove("style")

//adding text content to html element by using textContent method
allElements[0].textContent = "This is a content"

// adding text to html element by using innerHTML method
allElements[0].innerHTML = "this is html content"

//adding style
allElements[0].style.color = "red"
allElements[0].style.background = "yellow"

