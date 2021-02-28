const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const logo = document.querySelectorAll('#logo path');
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

for(let i = 0; i<logo.length; i++){
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y:'-100%', duration: 2, delay: 0.5});
tl.to('.intro', {y:'-100%', duration: 4}, '-=1.7');
tl.fromTo('nav', {opacity: 1}, {opacity: 1, duration: 3.2});