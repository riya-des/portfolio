const heroVideo = document.getElementById("hero-video");

const polaroid = document.querySelector(".polaroid");
const pencil = document.querySelector(".pencil");
const brush = document.querySelector(".brush");
const polaroidWrapper = document.querySelector(".polaroid-wrapper");

heroVideo.addEventListener("ended", () => {

    polaroid.style.animation =
        "polaroidDrop .9s cubic-bezier(.22,1.25,.3,1) forwards";

        setTimeout(() => {

            polaroidWrapper.classList.add("active");

        }, 900);

        setTimeout(() => {

            pencil.style.animation =
                "pencilSwing .8s cubic-bezier(.22,1,.36,1) forwards";

        },300);

        setTimeout(() => {

            brush.style.animation =
                "brushSlide .55s ease forwards";

        },520);

});
document.addEventListener("DOMContentLoaded", function () {

    const aboutSection = document.querySelector(".about-section");
    const flipPhone = document.getElementById("flipPhoneTrigger");

    if (!aboutSection || !flipPhone) return;

    const phoneObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    // Wait until the user has actually reached the section
                    setTimeout(function () {

                        // Start vibration
                        flipPhone.classList.add("phone-vibrate");

                        // Turn screen on after vibration finishes
                        setTimeout(function () {
                            flipPhone.classList.add("phone-active");
                        }, 1500);

                    }, 1000);

                    // Only trigger once
                    observer.unobserve(aboutSection);
                }

            });

        },
        {
            threshold: 0.6
        }
    );

    phoneObserver.observe(aboutSection);

});