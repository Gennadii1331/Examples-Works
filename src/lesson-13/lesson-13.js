import './lesson-13.scss';


/**
 * @param {Element} dropdownContainer Html element for dropdown
 * */
function dropdown (dropdownContainer) {
    const title = dropdownContainer.querySelector('.dropdown__title');
    const options = dropdownContainer.querySelectorAll('.dropdown__option');
    let isOpened = dropdownContainer.classList.contains('active');

    function open() {
        dropdownContainer.classList.add('active');
        isOpened = true;
        document.addEventListener('click', close);
    }

    function close() {
        console.log('Drop down closed');
        dropdownContainer.classList.remove('active');
        isOpened = false;
        document.removeEventListener('click', close);
    }

    function toggleDropdown() {
        if(isOpened) {
            close();
        } else {
            open();
        }
    }

    function changeTitle(text) {
        title.textContent = text;
        close();
    }

    title.addEventListener('click', (eventObject) => {
        console.log(eventObject);
        eventObject.stopPropagation();
        toggleDropdown()
    });

    title.addEventListener('keypress', (eventObject) => {
        console.log(eventObject);
        console.log('Keypressed');
        if (eventObject.keyCode === 13) {
            toggleDropdown();
        }
    });

    options.forEach((option) => {
        option.addEventListener('click', () => {
            changeTitle(option.textContent);
        });
        option.addEventListener('keypress', (eventObject) => {
            if (eventObject.keyCode === 13) {
                changeTitle(option.textContent);
            }
        });
    });
}

dropdown(document.querySelector('#countries'));
dropdown(document.querySelector('#movies'));

function accordion(accordionContainer){
    const elems = accordionContainer.querySelectorAll('accordion__block');
    const titles = accordionContainer.querySelectorAll('accordion__title');
    function closeAll() {
        elems.forEach((el) => el.classList.remove(ACCTIVE_CLASS_NAME))
    }

    titles.forEach((title) => {
        title.addEventListener('click', () => {
            const accordionBlock =
            closeAll();
            title.parentElement.classList.add(ACTIVE_CLASS_NAME)
        })
    })

}

accordion(document.querySelector('.accordion'));
