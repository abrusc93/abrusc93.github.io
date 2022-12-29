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

ScrollReveal().reveal('.reveal-up', { 
    delay: 200,
    distance: '30px'
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

$(window).resize(function(){
    if($(window).width()<768){
     $('nav ul').removeClass('position-absolute top-50 start-50 translate-middle nav-pills');
     $('nav').removeClass('animate__animated');
    }
    if($(window).width()>768){
        $('nav ul').addClass('position-absolute top-50 start-50 translate-middle nav-pills');
        $('nav').addClass('animate__animated');
    }
});

if($(window).width()<768){
    $('nav ul').removeClass('position-absolute top-50 start-50 translate-middle nav-pills');
    $('nav').removeClass('animate__animated');
}
if($(window).width()>768){
    $('nav ul').addClass('position-absolute top-50 start-50 translate-middle nav-pills');
    $('nav').addClass('animate__animated');
}

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const exampleModal = document.getElementById('photoDisplayModal')
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const imgSrc = button.getAttribute('data-bs-image')
  // Update the modal's img src attribute.
  document.getElementById("modalImage").src = imgSrc;
})