// active hamburger menu
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navbar
navlist.addEventListener("click",()=>{
    menuIcon.classList.remove("active");
    navlist.classList.remove("active");
    document.body.classList.remove("open");
})

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


// side progress bar

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
   
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



//active menu

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu)

// scroll reveal
ScrollReveal({
    distance:"90px",
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.hero-info,.main-text,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.filter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.info', { origin: "right" });
ScrollReveal().reveal('.allService,.portfolio-gallery,.hobby-box, footer,.img-hero', { origin: "bottom" });



// typing effect
var typingEffect = new Typed(".type_effect",{
    strings : ["Designer","Python Developer","Frontend Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
});
