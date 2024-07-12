// SHAPE 11/7/2024
// collect Element
let shape = document.querySelector(".shapeDiv")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")
let btncircle = document.querySelector(".btncircle")
let displayshape = document.querySelector(".shapeDiv p")

// elements for DROPDOWN menu
let btnmenu = document.querySelector(".menubtn")
let collapsmenu = document.querySelector(".collapsemenu")

// modal window elements
let card = document.querySelector(".card")
let modalwindow = document.querySelector(".modalwindow")
let closemodal = document.querySelector(".closemodal")

// add click evento to each button
btnsquare.addEventListener("click", function(){
    shape.className = "square"
    displayshape.textContent = "square".toUpperCase()
})
btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
    displayshape.textContent = "rectangle".toUpperCase()
})
btncircle.addEventListener("click", function(){
    shape.className = "circle"
    displayshape.textContent = "circle".toUpperCase()
})

// Dropdown js Open and Close when btn is clicked
btnmenu.addEventListener("click",function(){
    collapsmenu.classList.toggle("openToClose")
})

// modal window
card.addEventListener("click",function(){
    modalwindow.style.display = "block"
})
closemodal.addEventListener("click", function(){
    modalwindow.style.display = "none"

})
// close when user clicks anywhere
window.addEventListener("click",function(event){
    if(event.target == modalwindow){
        modalwindow.style.display = "none"
    }
})