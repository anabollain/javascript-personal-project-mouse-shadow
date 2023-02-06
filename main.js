'use strict';

//VARIABLES
const heroEl = document.querySelector('.js-hero');
const titleEl = document.querySelector('.js-title');
const walk = 100; //100px

//FUNCTIONS
function handleShadow(ev) {
    const {offsetWidth: width, offsetHeight: height} = heroEl;
    let {offsetX: x, offsetY: y} = ev;
    if(this !== ev.target){
        x = x + ev.target.offsetLeft;
        y = y + ev.target.offsetTop;
    }
    
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    titleEl.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

}


//EVENT LISTENER
heroEl.addEventListener('mousemove', handleShadow);