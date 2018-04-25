import './lesson-14.scss';
import { modalWindow} from './scrypts/modal-window';

document.querySelector('#btn').addEventListener('click', () => {
    const options = {
        title: 'Hello world',
        content: '<p>Hello Content</p>',
        controls: [
            {
                text: 'Cancel!',
                callback: () => console.log('Canceled!'),
            },
            {
                text: 'OK!',
                callback: () => console.log('CONFIRMED!'),
            }

        ]
    };
    modalWindow.show(options);
});

setTimeout(() =>{
    const options = {
        title: 'Hello world',
        content: '<p>Hello Content</p>',
        controls: []
    };
    modalWindow.show(options);
});