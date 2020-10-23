const tl = gsap.timeline({defaults: {ease: 'power1.out'}});






document.addEventListener("DOMContentLoaded",()=>{
    function animateIntroText(id,delay,delayIncrease){
        const logo = document.getElementById(id);
        const logoG = document.querySelector("#logo g")
        const logoPaths = document.querySelectorAll(`#${id} path`);
        delay = delay;
        for(let i = 0; i < logoPaths.length;i++){
            logoPaths[i].style.strokeDasharray  = logoPaths[i].getTotalLength();
            logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
            logoPaths[i].style.animation = `line-animation 2s ease forwards ${delay}s`;
            delay+=delayIncrease;
            console.log(delay)
        }
        logoG.style.animation = `fill 1s ease-in-out forwards 2s`;
    }
    animateIntroText('logo',0 , 0.1)
})

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");


tl.to('.intro',{y: '-100%',duration: 1, delay: 3});
tl.to('.slider',{y:"-100%",duration: 1}, "-=1.2");

tl.fromTo('.main-text',{opacity:0},{opacity:1,duration:1.5},"-=0.5")
