// active hamburger menu
let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
});

// switch between about buttons
const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
    button.addEventListener("click",() => {
        contents.forEach(content => content.style.display = "none");
        contents[index].style.display = "block";
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

// portfolio filter
var mixer = mixitup('.portfolio-gallery', {
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200: {
            slidesPerView:3,
            spaceBetween:20,
        },
    }
});