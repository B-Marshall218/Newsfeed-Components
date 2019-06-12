
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu1.classList.toggle("menu--open");
};

// Start Here: Create a reference to the ".menu" class

const menu1 = document.querySelector(".menu");


// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
console.log(menu1);
console.log(menuButton);


// class Menu {
//   constructor(menuElement) {
//     this.menu - button =
//     menuElement.querySelector(".menu-button");
//     this.menu =
//       menuElement.querySelector(".menu");
//     this.menu--open =
//       menuElement.querySelector(".menu--open");

//     this.menu - button.addEventListener('click',
//       this.togglemenu - button.bind(this));

// const menus = document.querySelectorAll(".menu");
// menus.forEach(menu => new Menu(menuElement));

// toggleMenu() {
//   this.menuButton.classList.toggle(".menu-button")