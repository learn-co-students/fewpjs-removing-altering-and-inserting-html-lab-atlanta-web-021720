// Write your code here!

let element = document.querySelector("p#greeting");
element.innerHTML = 'Hello, DOM!'

let main = document.getElementById("main")

main.remove()

let newHeader = document.createElement("h1")

newHeader.id = "victory"

newHeader.innerHTML = "spencer is the champion"


