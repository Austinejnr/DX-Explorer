
// basic Es5 functon declaration 
// function name (){}

var hamburger = document.querySelector(".hamburger-container")
console.log(hamburger)

var mobilelinkscontainer = document.querySelector(".mobilelinks-container")



function addandremove(){
    hamburger.classList.toggle('showburger')
    mobilelinkscontainer.classList.toggle('showmobilelinks')
}