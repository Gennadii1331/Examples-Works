import './Homework-12.scss';
/*
const accordion = document.querySelector('#accordion');
accordion.addEventListener('click', open);
accordion.addEventListener('keypress', open);
function open() {
    const title = document.querySelectorAll('.Chapter');
    for (let i = 0; i < title.length; i++) {
        title[i].addEventListener('click', function () {
            if (!(this.classList.contains('active'))) {
                for (let i = 0; i < title.length; i++) {
                    title[i].classList.remove('active');

                }
                title[i].classList.add('active');
            }
        });
        title[i].addEventListener('keypress', (ev) => {
            if(ev.keyCode === 13){
                if (!(this.classList.contains('active'))) {
                    for (let i = 0; i < title.length; i++) {
                        title[i].classList.remove('active');
                    }
                    title[i].classList.add('active');
                }
            }
        });
    }
}


*/
const accordion = document.querySelector('.card');
const accordionItems = document.querySelectorAll('.Chapter');
function open() {
    for (let chapter of accordionItems) {
        chapter.onclick = function () {
           close();
            chapter.classList.add('active');
        };
        chapter.addEventListener('keypress', (event)=>{
            if(event.keyCode === 13){
            close();
            chapter.classList.add('active');
            }
        });
    }
}

function close() {
    for (let chapter of accordionItems) {
        chapter.classList.remove('active');
    }
}


open();























