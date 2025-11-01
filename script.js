// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
        if(navLinks.classList.contains("active")) navLinks.classList.remove("active");
    });
});

// Fade-in on Scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Slick Carousel Initialization
$(document).ready(function(){
    $('.product-carousel').slick({
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        dots:true,
        responsive:[
            { breakpoint:1024, settings:{ slidesToShow:2 } },
            { breakpoint:768, settings:{ slidesToShow:1 } }
        ]
    });
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if(name && email && message){
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        formMessage.style.color = "green";
        this.reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    }
});
