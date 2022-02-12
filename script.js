"use strict"; 

const body = document.body;
const bgColorsBody = ["#e0dede", "#e0dede", "#e0dede", "#e0dede", "#e0dede"];
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");
const menuBorder = document.querySelector(".menu__border");
let activeItem = document.querySelector(".active");

function clickItem(item, index) {
    menu.classList.remove("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    document.querySelector('.first-Icon').classList.remove('OMG-Icon');
    document.querySelector('.first-Icon').style.width = '4rem';
    document.querySelector('.first-Icon').style.borderRadius = '50%';
    document.querySelector('.first-Icon').style.display = 'inline-block';

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);   
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}; // BTW I tried to turn this into a function expression but when I made it into a function expression It should have not worked. because only function declarations can be called before they are declared not function expressions

// offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
});

/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );