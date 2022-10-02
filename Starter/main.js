
// basic Es5 functon declaration 
// function name (){}

var hamburger = document.querySelector(".hamburger-container")
console.log(hamburger)

var mobilelinkscontainer = document.querySelector(".mobilelinks-container")



function addandremove(){
    hamburger.classList.toggle('showburger')
    mobilelinkscontainer.classList.toggle('showmobilelinks')
}

ScrollReveal({ reset: true,
    duration: 2000,
  distance: "70px"
});
ScrollReveal().reveal('.nav-desktop', { delay: 500,
    origin: "left"
  });
  ScrollReveal().reveal('.nav-brand', { delay: 500,
    origin: "left"
  });
  ScrollReveal().reveal('.desktoplinkcontainer', { delay: 500,
    origin: "right" });
   