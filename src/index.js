import './less/index.less'

const aTagSelector = document.querySelectorAll('a');
const logoSelector = document.querySelector('.logo-heading');
const imgSelector = document.querySelector('img');
const h2Selector = document.querySelector('h2');
const pSelector = document.querySelectorAll("p");

aTagSelector.forEach(a => (
    a.addEventListener("mouseover", evt => {
        a.style.color = 'blue';
    }), 
    a.addEventListener("mouseleave", evt => {
        a.style.color = 'black';
    }))
);

document.addEventListener('keydown', function(evt) {
    if(evt.key === 'a') {
        logoSelector.textContent = "Fun Bus!!!"
    } else if (evt.key === 's') {
        logoSelector.textContent = "Fun Bus???"
    }
});

document.addEventListener('keyup', function (evt) {
    logoSelector.textContent = "Fun Bus";
});

document.addEventListener("scroll", function(evt) {
    if(evt.type === "scroll") {
    imgSelector.style.position = 'bottom';
    imgSelector.style.opacity = "50%";
    }
});

document.addEventListener("keydown", function(evt) {
    if(evt.key === 'PageUp') {
    imgSelector.style.position = null;
    imgSelector.style.opacity = '100%'
    }
});

imgSelector.addEventListener("mousedown", function(evt) {
    if(evt.type === "mousedown") {
        h2Selector.textContent = "FUN BUS!!"
    }});
imgSelector.addEventListener('mouseup', function(evt) {
    if (evt.type === "mouseup") {
        h2Selector.textContent = "Welcome To Fun Bus!"
    }
})

pSelector.forEach(p => (
    p.addEventListener("click", evt => {
        alert('hello world');
    })
))

homeSelect[0].addEventListener("click", evt => {
    console.log('preventDefault!!')
        evt.preventDefault()})