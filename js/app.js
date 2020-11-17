/*
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/*
 * Define Global Variables
 *
*/

// Variable to append li items
const navList = document.querySelector("ul");

const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// build the nav
function listItems () {
    for (const section of sections) {
        const li = section.getAttribute("data-nav");
        navList.innerHTML += `<li class="menu__link">${li}</li>`;
    }
    return navList;
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function buildMenu () {
    listItems();
    const menuLinks = document.querySelectorAll(".menu__link");
    for (const menuLink of menuLinks) {
        const text = menuLink.textContent.split(" ").join("").toLowerCase();
        //const text = menuLink.textContent
        console.log(text);
        const place = document.getElementById(`${text}`);
        console.log(place);
        menuLink.addEventListener("click", function (e) {
            place.scrollIntoView();
        });
    }
}

buildMenu();
/**
 * End Main Functions
 * Begin Events
 *
*/


// Build menu

// Scroll to section on link click

// Set sections as active
