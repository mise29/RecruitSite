const line = document.querySelector('.line');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

line.addEventListener('click', () => {
    menu.classList.add('open');
    line.classList.add('open');  
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    line.classList.remove('open'); 
});

gsap.to('.box1', {
    y: '-200px',
    opacity: 1,
    duration: 1,
    delay: 0.1
});
gsap.to('.box2', {
    y: '-300px',
    opacity: 1,
    duration: 1,
    delay: 0.3
});
gsap.to('.box3', {
    y: '-300px',
    opacity: 1,
    duration: 1,
    delay: 0.5
});
gsap.to('.box4', {
    y: '-300px',
    opacity: 1,
    duration: 1,
    delay: 0.7
});
gsap.to('.vector', {
    y: '-300px',
    opacity: 1,
    duration: 1,
    delay: 0.7
});

gsap.to('.text', {
    y: 0, 
    opacity: 1,
    duration: 1.8, 
    ease: 'power1.out' 
});
