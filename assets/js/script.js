const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
allEventListners();

function allEventListners() {
    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

function navLinkClick() {
    if(navMenu.classList.contains('open')) {
        navToggler.click();
    }
}

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

var vid = document.getElementById("home-video");
const button = document.getElementById("video-button");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

button.addEventListener('click', event => {
    if(vid.paused) {
        playVid();
    } else{
        pauseVid();
    }
});
