import './Homework-10.scss';

const nameField = document.querySelector('#nameField');
const textField = document.querySelector('#textField');
const btnAdd = document.querySelector('#btnAdd');
const userName = document.querySelector('#userName');
const userComment = document.querySelector('#userComment');


btnAdd.onclick = addComments;


function addComments() {
    const newElement = document.createElement('div');
    const newName = document.createElement('div');
    const newData  = document.createElement('div');
    const Time = new Date();
    newData.innerHTML = Time.toLocaleString();
    newName.innerHTML = nameField.value;
    newElement.innerHTML = textField.value;
    nameField.value = '';
    textField.value = '';
    newElement.className = "user__Comment";
    newName.className = "user__Name";
    newData.className = "user__data";
    if(nameField.value && textField.value) {
        userComment.appendChild(newName);
        userComment.appendChild(newElement);
        userComment.appendChild(newData);
    }
}


