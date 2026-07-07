const cards = document.querySelectorAll(".service-card");
const navbar = document.querySelector(".navbar");
const mobileActions = document.querySelector(".mobile-actions");

// ----------------------------
// Initial Animations
// ----------------------------

window.addEventListener("load", () => {

    // Resume button appears
    if (mobileActions) {
        setTimeout(() => {
            mobileActions.classList.add("show");
        }, 2200);
    }

    // Cards appear one by one
    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, 2800 + (index * 180));

    });

    // Desktop navbar appears
    if (navbar && window.innerWidth > 480) {
        setTimeout(() => {
            navbar.classList.add("show");
        }, 3400);
    }

});

// ----------------------------
// Enable Polaroid Tooltip
// ----------------------------

// ----------------------------
// Navbar Scroll
// ----------------------------

window.addEventListener("scroll", () => {

    // No navbar animation on small phones
    if (window.innerWidth <= 480) return;

    if (window.scrollY > 50) {

        navbar.classList.add("hide");
        navbar.classList.remove("show");

    } else {

        navbar.classList.remove("hide");
        navbar.classList.add("show");

    }

});



const work = document.querySelector("#work");
const projectWindow = document.querySelector(".project-window");
const projectImage = document.querySelector(".project-scroll");


window.addEventListener("scroll", () => {

    const start = work.offsetTop;

    const end =
        work.offsetTop +
        work.offsetHeight -
        window.innerHeight;

    const distance = end - start;

    // Wait for 15% of the section before scrolling starts
    const delay = distance * 0.05;

    let progress =
        (window.scrollY - start - delay) /
        (distance - delay);

    progress = Math.max(0, Math.min(progress, 1));

    

    const move =
        projectImage.offsetHeight -
        projectWindow.offsetHeight;

    projectImage.style.transform =
        `translateY(-${move * progress}px)`;

});

const isMobile = window.matchMedia("(max-width: 480px)");

window.addEventListener("scroll", () => {

    if (isMobile.matches) return;

    // scrolling code...
});

