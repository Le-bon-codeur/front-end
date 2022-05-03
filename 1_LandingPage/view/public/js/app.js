const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const navLinksA = document.querySelectorAll('.nav-links li a');
const mouseCursor = document.querySelector('.cursor');

const navSlide = () => {

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle('burger-active');
    });
}

const cursorMoove = () => {

    //custom mouse movement
    window.addEventListener('mousemove', e => {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    });

    //custom mouse animation
    navLinksA.forEach(link => {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow');
            link.style.color = 'rgb(214, 214, 214)';
        });
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-grow');
            link.classList.add('hovered-link');
            link.style.color = '#333';
        });
    });
}

const main = function() {
    navSlide();
    cursorMoove();
}()
