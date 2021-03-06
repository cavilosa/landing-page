// Variable to append li items to
const navList = document.querySelector("ul");


// Variable for sections selector
const sections = document.querySelectorAll("section");


// A variable to clear setTimeout so the navbar doen't disappear after
// repetetive events
let timer = null;


// build the nav
function navbarItems() {
    for (const section of sections) {
        const li = section.getAttribute("data-nav");
        navList.innerHTML += `<li class="menu__link">${li}</li>`;
    }
    return navList;
}


// Add class 'active' to a link
function activeLink(text) {
    const links = document.querySelectorAll(".menu__link");
    for (const link of links) {
        if (link.textContent === text) {
            link.classList.add("active__link");
        } else {
            link.classList.remove("active__link");
        }
    }
}


// Add class active to a section
function classActive () {
    for (const section of sections) {
        // Listener for scroll to make the section and link active
        window.addEventListener("scroll", function () {
            const text = section.getAttribute("data-nav");
            const block = section.getBoundingClientRect();
            if (block.top <= 150 && block.bottom >= 150) {
                section.classList.add("active");
                activeLink(text);
            } else {
                section.classList.remove("active");
            }
        });
    }
}


// to check whether close or open sectino to link click
function openOrCloseFromLink(context, text) {
    if (context.previousElementSibling.classList.contains("opened")) {
        context.style.display="none";
        context.previousElementSibling.classList.remove("opened"); // button
        activeLink(text);
    } else {
        context.style.display="block";
        context.previousElementSibling.classList.add("opened");
        activeLink(text);
    }
}


// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    const links = document.querySelectorAll(".menu__link");
    for (const link of links) {
        const text = link.textContent.split(" ").join("").toLowerCase();
        const place = document.getElementById(`${text}`);
        const context = place.firstElementChild.nextElementSibling;

        // Listener form nav link to the section with same id
        link.addEventListener("click", function () {
            openOrCloseFromLink(context, text);
            place.scrollIntoView();
        });
    }
}


// Hides navbar for setTimeout()
function hideMenu() {
    navList.style.display = "none";
}


// Scrolles to top for the button that apepars after page fold is passed
function scrollToTop() {
    window.scrollTo(0, 0);
}


// The button appears after page fold is passed to go up the page
function scrollTop() {
    const pageFold = window.innerHeight / 2;
    if (window.scrollY > pageFold) {
        const button = document.querySelector("#button");
        button.style.display = "inline";
        button.addEventListener("click", function() {
            scrollToTop();
        });
    } else {
        button.style.display = "none";
    }
}


// Openes class collapsible
function openCollapsible() {
    const colls = document.querySelectorAll(".collapsible");
    for (const coll of colls) {
        // Listener for an element to toggle class opened
        coll.addEventListener("click", function() {
            coll.classList.toggle("opened"); // after the button + changes to -
            const content = coll.nextElementSibling; // .landing__container
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
                content.scrollIntoView();
            }
        });
    }
}


// 10 sec after no scroll or click activity the navbar hides
window.addEventListener("scroll", function() {
    if (timer !== null) {
        clearTimeout(timer);
        navList.style.display="flex";
    }

    timer = setTimeout(hideMenu, 10000);
});

window.addEventListener("click", function() {
    if (timer !== null) {
        clearTimeout(timer);
        navList.style.display="flex";
    }

    timer = setTimeout(hideMenu, 10000);
});


// Listener for scroll to check pageFold
window.addEventListener("scroll", function() {
    scrollTop();
});

window.addEventListener("load", function() {
    scrollTop();
});


// The page is at the top after reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


// Main function to create menue items and make them % sections active or not
function buildMenu() {
    // Create list of items in navbar
    navbarItems();
    // Listener for scroll event to make the section active
    classActive();
    // Scroll to specified section by clicking on the nav link
    scrollToSection();

    scrollTop();

    openCollapsible();
}

buildMenu();
