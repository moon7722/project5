function toggleMenu() {
  const menu = document.querySelector(".menu-links"); //targeting the menu links 
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");   // adding a class name open to open and close when we click on the ham icon
  icon.classList.toggle("open");
}