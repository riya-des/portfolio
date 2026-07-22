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


const havenSection = document.querySelector(".haven-section");
const havenId = document.querySelector(".haven-id-card");
const havenCards = document.querySelector(".haven-business-cards");

const havenObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        setTimeout(() => {
            havenId.classList.add("show");
        }, 250);

        setTimeout(() => {
            havenCards.classList.add("show");
        }, 700);

        havenObserver.unobserve(entry.target);

    });

}, {
    threshold:0.35
});

havenObserver.observe(havenSection);


const graphicsGallery = document.querySelector(".graphics-gallery");

if (graphicsGallery) {

    graphicsGallery.scrollLeft = 55;

    let isDragging = false;
    let startX;
    let scrollLeft;

    graphicsGallery.addEventListener("mousedown", (e) => {

        isDragging = true;

        graphicsGallery.classList.add("dragging");

        startX = e.pageX - graphicsGallery.offsetLeft;
        scrollLeft = graphicsGallery.scrollLeft;

    });

    document.addEventListener("mousemove", (e) => {

        if (!isDragging) return;

        e.preventDefault();

        const x = e.pageX - graphicsGallery.offsetLeft;
        const walk = (x - startX) * 1.3;

        graphicsGallery.scrollLeft = scrollLeft - walk;

    });

    document.addEventListener("mouseup", () => {

        isDragging = false;

        graphicsGallery.classList.remove("dragging");

    });

    document.addEventListener("mouseleave", () => {

        isDragging = false;

        graphicsGallery.classList.remove("dragging");

    });

}



const projects = [

    {

        brand: "@uroparis",
        bgClass: "uroparis-bg",
        background: "assets/images/graphics-bg.png",

        images: [

            "assets/images/uroparis-1.png",
            "assets/images/uroparis-2.png",
            "assets/images/uroparis-3.png",
            "assets/images/uroparis-4.png",
            "assets/images/uroparis-5.png",
            "assets/images/uroparis-6.png"

        ]

    },

    {

        brand: "@sayagrandbytreat",
        bgClass: "saya-bg",
        background: "assets/images/saya-bg.png",

        images: [

            "assets/images/saya-1.png",
            "assets/images/saya-2.png",
            "assets/images/saya-3.png",
            "assets/images/saya-4.png",
            "assets/images/saya-5.png",
            "assets/images/saya-6.png",
            "assets/images/saya-7.png",
            "assets/images/saya-8.png",
            "assets/images/saya-9.png"

        ]

    },

    {
        brand: "@avekshaa",
        bgClass: "avekshaa-bg",

        background: "assets/images/avekshaa-bg.png",

        images: [

            "assets/images/avekshaa-1.png",
            "assets/images/avekshaa-2.png",
            "assets/images/avekshaa-3.png",
            "assets/images/avekshaa-4.png",
            "assets/images/avekshaa-5.png",
            "assets/images/avekshaa-6.png",
            "assets/images/avekshaa-7.png",
            "assets/images/avekshaa-8.png"

        ]

    },

    {
        brand: "@teamglobal",
        bgClass: "teamglobal-bg",

        background: "assets/images/teamglobal-bg.png",

        images: [

            "assets/images/teamglobal-1.png",
            "assets/images/teamglobal-2.png",
            "assets/images/teamglobal-3.png",
            "assets/images/teamglobal-4.png",
            "assets/images/teamglobal-5.png",
            "assets/images/teamglobal-6.png",
            "assets/images/teamglobal-7.png",
            "assets/images/teamglobal-8.png"

        ]

    },

    {
    brand: "@inskin",
    bgClass: "inskin-bg",

    background: "assets/images/inskin-bg.png",

    images: [

        "assets/images/inskin-1.png",
        "assets/images/inskin-2.png",
        "assets/images/inskin-3.png",
        "assets/images/inskin-4.png",
        "assets/images/inskin-5.png",
        "assets/images/inskin-6.png",
        "assets/images/inskin-7.png",
        "assets/images/inskin-8.png"

    ]

},

{
    brand: "@beratung",
    bgClass: "beratung-bg",

    background: "assets/images/beratung-bg.png",

    images: [

        "assets/images/beratung-1.png",
        "assets/images/beratung-2.png",
        "assets/images/beratung-3.png",
        "assets/images/beratung-4.png",
        "assets/images/beratung-5.png",
        "assets/images/beratung-6.png",
        "assets/images/beratung-7.png",
        "assets/images/beratung-8.png"

    ]

},
{
    brand: "@visure",
    bgClass: "visure-bg",

    background: "assets/images/visure-bg.png",

    images: [

        "assets/images/visure-1.png",
        "assets/images/visure-2.png",
        "assets/images/visure-3.png",
        "assets/images/visure-4.png",
        "assets/images/visure-5.png",
        "assets/images/visure-6.png"

    ]

}

];

let currentProject = 0;
const graphicsWindow = document.querySelector(".graphics-window");
const graphicsBg = document.getElementById("graphicsBg");
const graphicsBrand = document.getElementById("graphicsBrand");
const graphicsTrack = document.getElementById("graphicsTrack");


function renderProject(index){

    const project = projects[index];

    graphicsBrand.textContent = project.brand;

    graphicsBg.src = project.background;

    graphicsBg.className = `graphics-bg ${project.bgClass}`;

    graphicsTrack.innerHTML = "";

    project.images.forEach(image => {

        graphicsTrack.innerHTML += `
            <div class="graphics-card">
                <img src="${image}" alt="">
            </div>
        `;

    });

    graphicsGallery.scrollTo({
        left:55,
        behavior:"smooth"
    });

}

renderProject(currentProject);
document.querySelector(".graphics-next").addEventListener("click", () => {

    currentProject = (currentProject + 1) % projects.length;
    renderProject(currentProject);

});

document.querySelector(".graphics-prev").addEventListener("click", () => {

    currentProject =
        (currentProject - 1 + projects.length) % projects.length;

    renderProject(currentProject);

});