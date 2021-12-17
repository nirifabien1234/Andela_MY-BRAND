const contactPage = document.querySelector('.own');
const contactContainer = document.querySelector('.own .contact-container');
const btnContact = document.getElementById('submitBtn');

let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav_list");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu(e) {
    e.preventDefault();
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}
