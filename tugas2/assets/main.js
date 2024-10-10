/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})

// GSAP Animations
window.onload = function() {
    gsap.from(".link-img", { 
        duration: 1, 
        opacity: 0, 
        y: 50, 
        stagger: 0.2,
        ease: "power3.out"
    });
};

// HIDE SECTIONS INITIALLY
document.querySelectorAll('.container').forEach(section => {
    gsap.set(section, { opacity: 0, y: 100 });
});

// FUNCTION TO REVEAL SECTIONS
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            });
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
};

// INTERSECTION OBSERVER SETUP
const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.2 // Adjust this to control when to start the animation (0 = at the beginning, 1 = fully in view)
});

// OBSERVE EACH SECTION
document.querySelectorAll('.container').forEach(section => {
    sectionObserver.observe(section);
});