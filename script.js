// Scroll Bar JS Code
let nav = document.querySelector("nav");
window.onscroll = function() {
  if(document.documentElement.scrollTop > 10){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
}