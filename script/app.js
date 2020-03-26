// DEFINING NAV ELEMENT AND NAVWIDTH
const nav = document.querySelector(".nav");
const navButton = document.querySelector(".nav-button");
const navWidth = "20vw";
const main = document.querySelector("main");
const navButtons = document.querySelectorAll(".nav-item");
var navOpen = false;

function makeNavLookNice() {
    navButton.addEventListener('mouseenter', () => {
        if (!navOpen) {
            nav.classList.add("shadow");
        }
    });

    navButton.addEventListener('mouseleave', () => {
        if (!navOpen) {
            nav.classList.remove("shadow");
        }
    });

    document.querySelector('main').addEventListener('click', () => {
        if (navOpen) {
            toggleNav();
            nav.classList.remove("shadow");
        }
    });

    navButton.addEventListener("click", function () {
        toggleNav();
    });
}

function prepNavButtons() {
    navButtons.forEach(item => {
        item.addEventListener('click', event => {
            toggleNav();
            console.log(event);
        });
    });
}

function toggleNav() {
    if (nav.style.width == "0px") {
        nav.style.width = navWidth;
        navButton.innerHTML = "close";
        navOpen = true;

    } else {
        nav.style.width = "0px";
        navButton.innerHTML = "menu";
        navOpen = false;
    }
}

function resetNav() {
    nav.style.width = "0px";
    nav.classList.remove("shadow");
    navOpen = false;
}

function init() {
    prepNavButtons();
    makeNavLookNice();
    resetNav();
    AOS.init({
        'easing': 'ease-out-quint',
        'duration': '300ms'
    });
    document.body.classList.remove("loading");
}

init();