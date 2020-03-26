// DEFINING NAV ELEMENT AND NAVWIDTH
const nav = document.querySelector(".nav");
const navButton = document.querySelector(".nav-button");
const navWidth = "20vw";
const main = document.querySelector("main");
const navButtons = document.querySelectorAll(".nav-item");

// IMPORTING BARBA AND INITIALIZING
barba.use(barbaCss);
barba.use(barbaPrefetch)
barba.init();

// INITALIZING ANIMATE ON-SCROLL
AOS.init({
    disable: ['phone', 'tablet', 'mobile'],
    startEvent: 'DOMContentLoaded',
    useClassNames: true,

    // DEFAULT SETTING
    duration: 250,
    easing: 'ease-out-quint',
    mirror: false
});

// REFRESHING AOS ANIMATIONS WHEN WINDOW IS RESIZED
window.addEventListener('resize', function () {
    AOS.refresh();
})

// closing sidenav when a button is pressed
navButtons.forEach(item => {
    item.addEventListener('click', event => {
        toggleNav();
        console.log(event);
    });
})

// SETTING UP TOGGLENAV FUNCTION, CALLED BY EVENT LISTENER
function toggleNav() {
    if (nav.style.width == "0px") {
        nav.style.width = navWidth;
        nav.classList.add("shadow");
        navButton.innerHTML = "close"

    } else {
        nav.style.width = "0px";
        nav.classList.remove("shadow");
        navButton.innerHTML = "menu"
    }
}

navButton.addEventListener("click", function () {
    toggleNav();
});

document.body.classList.remove('loading');