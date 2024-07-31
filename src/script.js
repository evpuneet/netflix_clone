let cart=document.querySelector("#cart")
let cartOverlay = document.querySelector("#cartOverlay")
let locate = document.querySelector("#locate")
let locationOverlay = document.querySelector("#locationOverlay")

cart.addEventListener("click",()=>{
    cartOverlay.classList.toggle("flex")
    cartOverlay.classList.remove("hidden")
    
})

cartOverlay.addEventListener("click", (event)=>{
    if (event.target.nodeName == ("SECTION") || event.target.nodeName == ("I") || event.target.nodeName == ("BUTTON")){
        cartOverlay.classList.toggle("flex")
        cartOverlay.classList.add("hidden")
    }
})

locate.addEventListener("click", () => {
    locationOverlay.classList.remove("hidden")

})

locationOverlay.addEventListener("click", (event) => {
    if (event.target.nodeName == ("SECTION") || event.target.nodeName == ("I") || event.target.nodeName == ("BUTTON")) {
        locationOverlay.classList.add("hidden")
    }
})

