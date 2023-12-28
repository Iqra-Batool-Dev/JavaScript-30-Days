const body = document.querySelector('body')
const msgDisplay = document.createElement('div')
msgDisplay.textContent = 'Press any keyboard key'
msgDisplay.style.width= "25%"
// msgDisplay.style.border =" 1px solid gray"
msgDisplay.style.borderRadius ="10px"
msgDisplay.style.boxShadow = "1px 1px 3px gray"
msgDisplay.style.fontSize ="30px"
msgDisplay.style.padding = "15px"
msgDisplay.style.textAlign = "center"
msgDisplay.style.color ="#2b2929"
msgDisplay.style.margin = "100px auto 20px auto"
body.appendChild(msgDisplay)

// making code box
const codeBox = document.createElement('div')
codeBox.style.width = "5%"
codeBox.style.padding = "15px"
codeBox.style.borderRadius ="10px"
codeBox.style.boxShadow = "1px 1px 3px gray"
codeBox.style.fontSize ="30px"
codeBox.style.padding = "20px 10px"
codeBox.style.textAlign = "center"
codeBox.style.color ="#ce2f2f"
codeBox.style.margin = "20px auto"
body.appendChild(codeBox)

body.addEventListener('keypress' , e=>{
    codeBox.innerHTML = e.keyCode
})

// updating the key name in msg box
const key = document.createElement("div")
key.style.color = "green"
key.style.display = "inline"
key.style.margin = "0 0 0 10px"

body.addEventListener('keypress' , e=>{
    let keyName = e.key
    msgDisplay.textContent='You Pressed'
    key.innerHTML = keyName
    msgDisplay.append(key)
})