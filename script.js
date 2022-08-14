ScrollReveal().reveal('.reveal', { 
    delay: 200
});

ScrollReveal().reveal('.reveal-delay', { 
    delay: 600
});

ScrollReveal().reveal('.reveal-slow', { 
    delay: 300,
    duration: 3000,
    easing: 'ease-in'
});

window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        var emailDiv = document.getElementById("email-div");
        var linkedInDiv = document.getElementById("linkedin-div");
        var gitHubDiv = document.getElementById("github-div");
        var toTop = document.getElementById("to-top");

        emailDiv.classList.add("animate__animated", "animate__headShake", "animate__delay-1s", "animate__slow");
        linkedInDiv.classList.add("animate__animated", "animate__headShake", "animate__delay-2s", "animate__slow");
        gitHubDiv.classList.add("animate__animated", "animate__headShake", "animate__delay-3s", "animate__slow");
        toTop.classList.add("animate__animated", "animate__bounce", "animate__delay-5s", "animate__slow", "animate__repeat-2");
    }
}