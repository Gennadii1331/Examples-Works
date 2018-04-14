import './lesson-10.scss';

const MyBtn = document.querySelector('#MyBtn');
const MyOutput = document.querySelector('#MyOutput');
const nameField = document.querySelector('#nameField');
const passwordField = document.querySelector('#passwordField');
const btnAdd = document.querySelector('#btnAdd');
const newElements = document.querySelector('#newElements');

btnAdd.onclick = addElements;
MyBtn.onclick = login;

function login() {
    const name = nameField.value;
    nameField.value = '';
    const password = passwordField.value;
    passwordField.value = '';
    if(name && password){
        if(name === 'admin' && password === '1111' ) {
            MyBtn.classList.remove('notValid');
            MyOutput.classList.remove('textValid');
            MyOutput.innerHTML = `<h2>Welcome, admin!</h2>`;
        }else{
            MyOutput.classList.add('textValid');
            MyOutput.innerHTML = `<h2>Credentials are wrong!</h2>`;
        }
    }else{
        MyBtn.classList.add('notValid');
        MyOutput.classList.add('textValid');
        MyOutput.innerHTML = `<h2>Not valid</h2>`;
    }
}

function addElements() {
    const newElement = document.createElement('div');
    newElement.innerHTML = `Hello, world!`;
    newElements.appendChild(newElement);
}

