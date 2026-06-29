const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.transform = "translateY(-120%)";
        navbar.style.opacity = "0";

    }else{

        navbar.style.transform = "translateY(0)";
        navbar.style.opacity = "1";

    }

});