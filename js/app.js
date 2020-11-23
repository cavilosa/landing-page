// Variable to append li items to
const navList = document.querySelector("ul");

// Links from navbar to sections
const links = document.querySelectorAll(".menu__link");

// Variable for sections selector
const sections = document.querySelectorAll("section");


// A variable to clear setTimeout so the navbar doen't disappear after
// repetetive events
let timer = null;


// build the nav
function navbarItems () {
    for (const section of sections) {
        const li = section.getAttribute("data-nav");
        navList.innerHTML += `<li class="menu__link">${li}</li>`;
    }
    return navList;
}


// Add class 'active' to a link
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


// Add class active to a section
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


// Link click will open the collapsed text in the corresponding section
function openTextFromLink(context) { // (landing__container)
    context.style.display="block";
    context.previousElementSibling.classList.add("opened"); // button
}

// Close collapsible by clocking the menu link
function closeTextFromLink(context) {
    if (context.style.display="block") {
        context.style.display="none";
        context.previousElementSibling.classList.remove("opened");
    }
}


// to check whether close or open sectino to link click
function openOrCloseFromLink(context) {
    if (context.previousElementSibling.classList.contains("opened")) {
        closeTextFromLink(context);
    } else {
        openTextFromLink(context);
    }
}


// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    const links = document.querySelectorAll(".menu__link");
    for (const link of links) {
        const text = link.textContent.split(" ").join("").toLowerCase();
        const place = document.getElementById(`${text}`);
        const context = place.firstElementChild.nextElementSibling;
        console.log(context);
        console.log(context.classList);
        // Listener form nav link to the section with same id
        link.addEventListener("click", function () {
            openOrCloseFromLink(context);
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
        })
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
            }
        });
    }
}


// 10 sec after no scroll or click activity the navbar hides
window.addEventListener("scroll", function() {
    if (timer !== null) {
        clearTimeout(timer);
        navList.style.display="block";
    }

    timer = setTimeout(hideMenu, 10000);
});

window.addEventListener("click", function() {
    if (timer !== null) {
        clearTimeout(timer);
        navList.style.display="block";
    }

    timer = setTimeout(hideMenu, 10000);
});

window.addEventListener("scroll", function() {
    scrollTop();
});

window.onscroll = function() {
    navList.style.display = "flex";
};

window.onclick = function() {
    navList.style.display = "flex";
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
