// Variable to append li items to
const navList = document.querySelector("ul");

const links = document.querySelectorAll(".menu__link");
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
function navItem (section) {
    const text = section.getAttribute("data-nav");
    const links = document.querySelectorAll(".menu__link");
    for (const link of links) {
        if (link.textContent === text) {
            link.classList.add("active__link");
        } else {
            link.classList.remove("active__link");
        }
    }
}


function classActive () {
    for (const section of sections) {
        window.addEventListener("scroll", function () {
            const block = section.getBoundingClientRect();
            if (block.top <= 200 && block.bottom >= 200) {
                section.classList.add("active");
                navItem(section);
            } else {
                section.classList.remove("active");
            }
        })
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    const links = document.querySelectorAll(".menu__link");
    for (const link of links) {
        const text = link.textContent.split(" ").join("").toLowerCase();
        const place = document.getElementById(`${text}`);
        // Listener form nav link to the section with same id
        link.addEventListener("click", function (e) {
            place.scrollIntoView();
        });
    }
}

function hideMenu() {
    navList.style.display = "none";
}


function scrollToTop() {
    window.scrollTo(0, 0);
}

function scrollTop() {
    const pageFold = window.innerHeight;
    console.log(pageFold);
    console.log(window.scrollY);
    if (window.scrollY > pageFold) {
        const button = document.querySelector("#button");
        button.style.display = "inline";
        button.addEventListener("click", function() {
            scrollToTop();
        })
    } else {
        button.style.display = "none";
    }
}


// Main function to create menue items and make them % sections active or not
function buildMenu() {
    // Create list of items in navbar
    navbarItems();
    // Listener for scroll event to make the section active
    classActive();
    // Scroll to specified section by clicking on the nav link
    scrollToSection();

    scrollTop();

    window.onscroll = function() {
        navList.style.display = "flex";
    };
    window.onclick = function() {
        navList.style.display = "flex";
    };
    // 10 sec after no scroll or click activity the navbar hides
    window.addEventListener("scroll", function() {
        setTimeout("hideMenu()", 10000);
    });
    window.addEventListener("click", function() {
        setTimeout("hideMenu()", 10000);
    });

    window.addEventListener("scroll", function() {
        scrollTop();
    })
}

buildMenu();
