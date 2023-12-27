// creating an element 
let title = document.createElement('h1')
title.className = "title"
title.style.color = "red"
title.style.fontSize = "30px"
title.textContent = "it is a first element of this page"
title.style.backgroundColor = "plum"
console.log(title)

// Creating multiple elements

let n= 3;
for(let i=0; i<n; i++){
let title = document.createElement('h1')
title.className = "title"
title.style.color = "red"
title.style.fontSize = "30px"
title.textContent = `this heading has ${i} index`
console.log(title)
}

//Append child to parent element
document.body.appendChild(title)

// removing childNode from parent
let heading2 = document.querySelector('h2')
document.body.removeChild(heading2)

