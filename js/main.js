//select dom items (document object model, UI structure: html tags, etc)
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set intial state of Menu (overlay, variable for open-true and closed-false)
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");

  thumbnailElement.addEventListener("click", function() {
    //code executed when image smart_thumbnail is clicked
    //thumbnailElement.className = "";

    if (thumbnailElement.className == "") {
      // write here the code that will execute if the image is big
      thumbnailElement.className = "small";
    } else {
      thumbnailElement.className = "";
    }
  });
});
