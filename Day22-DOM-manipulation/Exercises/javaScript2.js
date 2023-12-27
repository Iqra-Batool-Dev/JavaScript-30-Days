let container = document.querySelector(".container")

// adding tptal number of countries in h3
let h3 = document.getElementById("total")
h3.append(countries.length)

countries.forEach(country => {
    let box = document.createElement("div")
    box.textContent = country
    box.style.padding = "15px"
    box.style.border = "1px solid #d4d0d0"
    box.style.display = "flex"
    box.style.justifyContent = "center"
    box.style.alignItems = "center"
    box.style.fontSize = "14px"
    container.appendChild(box)
});




