
import './modal-window.scss';

const SHOWED_CLASS_NAME = 'visible';
const MODAL_WINDOW_CLASS_NAME = 'modal';
const OVERLAY_CLASS_NAME = 'modal__overlay';
const CONTENT_CLASS_NAME = 'modal__content';
const MODAL_TITLE_CLASSNAME = 'modal__title';
const MODAL_MAIN_CLASSNAME = 'modal__main';
const MODAL_CONTROLS_CLASSNAME = 'modal__controls';
const MODAL_CANCEL_CLASSNAME = 'modal__cancel';
const MODAL_CONTROL_CLASSNAME = 'modal__confirm';


const CONTENT_TEMPLATE = `
  <h1 class="${MODAL_TITLE_CLASSNAME}"></h1> 
  <div class="${MODAL_MAIN_CLASSNAME}"></div> 
  <div class="${MODAL_CONTROLS_CLASSNAME}">
    <button class="${MODAL_CANCEL_CLASSNAME}${MODAL_CONTROL_CLASSNAME}"></button>
    <button class="${MODAL_CONFIRM_CLASSNAME}${MODAL_CONTROL_CLASSNAME}"></button>
  </div> 
`;

class ModalWindow {
    constructor(rootElement) {
        this.rootElement = rootElement;

        this.render();
    }
    /**
     * @param {Object} options
     * @param {string|undefined} options.title
     * @param {string|undefined} options.content
     * @param {Array|undefined} options.controls
     * @param {object} options.controls
     * @param {string} options.controls.cancel.text
     * @param {function} options.controls.cancel.callback
     * @param {object} options.controls
     * @param {string} options.controls.confirm.text
     * @param {function} options.controls.confirm.callback
     * */
    show(options) {
        if (options.title) {
            const title = this.content.querySelector(`.${MODAL_TITLE_CLASSNAME}`);
            title.innerHTML = options.title;
            title.classList.add(`${MODAL_TITLE_CLASSNAME}_visible`);
        }

        if (options.title) {
            const content = this.content.querySelector(`${MODAL_MAIN_CLASSNAME}`);
            content.innerHTML = options.title;
        }

        if(options.controls && options.controls.length > 0){
            const controlsWrapper = this.content.querySelector(`${MODAL_CONTROLS_CLASSNAME}`);
            controlsWrapper.classList.add(`${MODAL_CONTROLS_CLASSNAME}_visible`);

            const controls = this.content.querySelectorAll(`.${MODAL_CONTROL_CLASSNAME}`);
            controls.forEach((control, i) => {

            })
        }


        this.rootElement.classList.add(SHOWED_CLASS_NAME);
    }

    hide() {
        this.rootElement.classList.remove(SHOWED_CLASS_NAME);
    }

    render() {
        this.rootElement.classList.add(MODAL_WINDOW_CLASS_NAME);

        this.renderOverlay();
        this.renderContent();
    }

    renderOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.classList.add(OVERLAY_CLASS_NAME);

        this.overlay.addEventListener('click', () => this.hide());

        this.rootElement.appendChild(this.overlay);
    }

    renderContent() {
        this.content = document.createElement('div');

        this.content.classList.add(CONTENT_CLASS_NAME);
        this.content.innerHTML = CONTENT_TEMPLATE;

        this.rootElement.appendChild(this.content);
    }
}

const modalWindow = new ModalWindow(document.querySelector('#appModalContainer'));// singleton

export { modalWindow };