const cards = document.querySelectorAll(".service-card");
const navbar = document.querySelector(".navbar");
const mobileResume = document.querySelector(".mobile-resume");

// ----------------------------
// Initial Animations
// ----------------------------

window.addEventListener("load", () => {

    // Resume button appears
    if (mobileResume) {
        setTimeout(() => {
            mobileResume.classList.add("show");
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