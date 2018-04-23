import '../scrypts/lighter-box.scss'

const ACTIVE_CLASS_NAME = 'active';
const LIGHTER_BOX_CLASS_NAME = 'lighter-box';
const LIGHTERS_CLASS_NAME = 'lighters';
const LIGHTERS_TOOGL_CLASSNAME = 'lighters__toogl';
const LIGHTERS_LIGHT_CLASSNAME = 'lighters__light';



const CONTENT_TEMPLATE = ` 
    <div class="${LIGHTERS_CLASS_NAME}">
        <button class="${LIGHTERS_TOOGL_CLASSNAME}"></button>
        <div class="${LIGHTERS_LIGHT_CLASSNAME}"></div>
    </div> 
`;

class Lighter {
    constructor(rootElement) {
        this.rootElement = rootElement;

        this.render();
        this.addActive();
    }

    render() {
        this.rootElement.classList.add(LIGHTER_BOX_CLASS_NAME);

        this.renderContent();
    }

    renderContent() {
        this.content = document.createElement('div');

        this.content.classList.add(LIGHTERS_CLASS_NAME);
        this.content.innerHTML = CONTENT_TEMPLATE;

        this.rootElement.appendChild(this.content);
    }

    addActive(){
        const btnSwitch = this.content.querySelector(`.${LIGHTERS_TOOGL_CLASSNAME}`);
        const lamp = this.content.querySelector(`.${LIGHTERS_LIGHT_CLASSNAME}`)
        btnSwitch.innerText = 'OFF';
        btnSwitch.onclick = () => {
            btnSwitch.innerText = 'ON';
            lamp.classList.add('active');
        }
    }

}

 const lighter = new Lighter(document.querySelector('#appLighterBox'));

 export { lighter };