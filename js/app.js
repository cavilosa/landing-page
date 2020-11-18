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
function navbarItems () {
    for (const section of sections) {
        const li = section.getAttribute("data-nav");
        navList.innerHTML += `<li class="menu__link">${li}</li>`;
    }
    return navList;
}

// Add class 'active' to section when near top of viewport
function classActive () {
    for (const section of sections) {
        window.addEventListener("scroll", function () {
            const block = section.getBoundingClientRect();
            //console.log(block.top, block.bottom);
            //const viewportHeight = window.innerHeight;
            //console.log(viewportHeight);
            //section.classList.add("your-active-class");
            //console.log(section.classList);
            if (block.top <= 200 && block.bottom >= 200) {
                section.classList.add("your-active-class");
                console.log(section, section.classList, "active added");
            } else {
                section.classList.remove("your-active-class");
                console.log(section, section.classList, "active removed");
            }
        })
    }
}




// Scroll to anchor ID using scrollTO event
function buildMenu () {
    navbarItems();
    document.addEventListener("scroll", function (){
        classActive();
    })
    const menuLinks = document.querySelectorAll(".menu__link");
    for (const menuLink of menuLinks) {
        const text = menuLink.textContent.split(" ").join("").toLowerCase();
        //const text = menuLink.textContent
        //console.log(text);
        const place = document.getElementById(`${text}`);
        //console.log(place);
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
