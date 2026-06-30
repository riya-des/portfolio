const navbar = document.querySelector(".navbar");
const mobileResume = document.querySelector(".mobile-resume");

let lastScroll = 0;

// Show navbar after intro animation
window.addEventListener("load", () => {

    setTimeout(() => {

        navbar.classList.add("show");

    }, 3200);

});

window.addEventListener("scroll", () => {

    // Mobile Resume Button
    if(window.innerWidth <= 480){

        if(mobileResume){

            if(window.scrollY > lastScroll){

                mobileResume.style.transform = "translate(-50%,120px)";

            }else{

                mobileResume.style.transform = "translate(-50%,0)";

            }

        }

        lastScroll = window.scrollY;
        return;
    }

    // Desktop / Tablet Navbar

    if(window.scrollY > 50){

        navbar.classList.add("hide");
        navbar.classList.remove("show");

    }else{

        navbar.classList.remove("hide");
        navbar.classList.add("show");

    }

    lastScroll = window.scrollY;

});