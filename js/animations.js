const heroVideo = document.getElementById("hero-video");

const polaroid = document.querySelector(".polaroid");
const pencil = document.querySelector(".pencil");
const brush = document.querySelector(".brush");

heroVideo.addEventListener("ended", () => {

    polaroid.style.animation =
        "polaroidDrop .9s cubic-bezier(.22,1.25,.3,1) forwards";

    setTimeout(() => {

        pencil.style.animation =
            "pencilSwing .8s cubic-bezier(.22,1,.36,1) forwards";

    },300);

    setTimeout(() => {

        brush.style.animation =
            "brushSlide .55s ease forwards";

    },520);

});