import './Homework-14.scss';

import { lighter} from './scrypts/lighter-box';

document.querySelector('#btn-creator').addEventListener('click', () => {
    lighter.render();
    lighter.addActive();
});

