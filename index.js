// Write your code here!

let main = document.querySelector('#main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'GC3 is the champion'
let body = document.querySelector('body')
body.appendChild(newHeader)