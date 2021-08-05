// GET THE NAME OF THE ACTUAL PAGE TO TRIGGER THE PROPER FUNCTIONS
const path = window.location.pathname;
const page = path.split("/").pop();

// NAVBAR FUNCTIONS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// HOMEPAGE FUNCTIONS
if (page == 'index.html'){
    let counter = 1
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true
        counter++
        if (counter > 4) counter = 1
    
    }, 4000)
}

// HISTORY PAGE FUNCTIONS
if (page == 'history.html') {
    // Modal
// Get the modal #1
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Get the modal #2
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
// Get the modal #3
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close3")[0];
// Get the modal #4
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var span4 = document.getElementsByClassName("close4")[0];

if (btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
    btn2.onclick = function() {
        modal2.style.display = "block";
    }
    btn3.onclick = function() {
        modal3.style.display = "block";
    }
    btn4.onclick = function() {
        modal4.style.display = "block";
    }
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
    span3.onclick = function() {
        modal3.style.display = "none";
    }
    span4.onclick = function() {
        modal4.style.display = "none";
    }
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
} else if (event.target == modal2) {
    modal2.style.display = "none";
} else if (event.target == modal3) {
    modal3.style.display = "none";
} else if (event.target == modal4) {
    modal4.style.display = "none";
} 
}

// SECTION QUOTES

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
if (slides !== undefined){
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}
}

// History Page - Image Panel
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActive()
        panel.classList.add('active')
    })
})

function removeActive() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
}

// MOMENTS PAGE FUNCTIONS

if (page == 'moments.html'){
    const toggles = document.querySelectorAll('.btn-toggle')

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('toggle')
        })
    })
}