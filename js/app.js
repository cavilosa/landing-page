// Variable to append li items to
const navList = document.querySelector("ul");
// Variable for sections selector
const sections = document.querySelectorAll("section");


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
            if (block.top <= 200 && block.bottom >= 200) {
                section.classList.add("your-active-class");
            } else {
                section.classList.remove("your-active-class");
            }
        })
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    const menuLinks = document.querySelectorAll(".menu__link");
    for (const menuLink of menuLinks) {
        const text = menuLink.textContent.split(" ").join("").toLowerCase();
        const place = document.getElementById(`${text}`);
        // Listener form nav link to the section with same id
        menuLink.addEventListener("click", function (e) {
            place.scrollIntoView();
        });
    }
}


function buildMenu () {
    // Create list of items in navbar
    navbarItems();
    // Listener for scroll event to make the section active
    classActive();
    // Scroll to specified section by clicking on the nav link
    scrollToSection();
}

buildMenu();
