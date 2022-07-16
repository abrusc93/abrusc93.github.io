ScrollReveal().reveal('.reveal', { 
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    reset: true,
    afterReveal: revealFromTop
});

function revealFromTop (el) {
    ScrollReveal().reveal(el, { 
        delay: 200,
        distance: '50px',
        origin: 'top',
        reset: true,
        afterReveal: revealFromBottom
    });
}

function revealFromBottom (el) {
    ScrollReveal().reveal(el, { 
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        reset: true,
        afterReveal: revealFromTop
    });
}