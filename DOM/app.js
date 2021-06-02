
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM LOADED');
    let btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.textContent = "Alert"
    
    btn.addEventListener('click', () => {
        alert("Have a nice day!")
    })
    
    let inputBu = document.querySelector("#inputBtn");
    let inputBox = document.querySelector("#inputBox")
    
    
    inputBu.textContent = "Click Me"
   /*  inputBu.addEventListener('click', () => {
        readButton()
        
    }) */

    document.getElementById("inputBtn").addEventListener('click', () => {
        alert(inputBox.value);
    })

    /* function readButton() {
        let val = document.getElementById("#inputBox");
        console.log(document.inputBox) 
    }
 */

    let createDiv = document.createElement("div");
    document.body.appendChild(createDiv)
    
    createDiv.addEventListener('mouseover', () => {
        this.style.backgroundColor = "blue"
        
    })

    let createPara = document.createElement("p");
    document.body.appendChild(createPara);
    createPara.textContent = "blah blah blah"
    createPara.className = "paragraph"

    createPara.addEventListener('click', () => {
        document.getElementsByClassName("paragraph").style.color = "blue";
        
    })
    
});