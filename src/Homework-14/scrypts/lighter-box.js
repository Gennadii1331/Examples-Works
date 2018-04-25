import '../scrypts/lighter-box.scss'

const ACTIVE_CLASS_NAME = 'active';
const DEACTIVE_TOOGL_CLASSNAME = 'deactivator';
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
        this.lighterSettings();
    }

    render() {
        this.rootElement.classList.add(LIGHTER_BOX_CLASS_NAME);

        this.renderLighter();
    }

    renderLighter() {
            this.lighter = document.createElement('div');

            this.lighter.classList.add(LIGHTERS_CLASS_NAME);
            this.lighter.innerHTML = CONTENT_TEMPLATE;

            this.rootElement.appendChild(this.lighter);
    }

    lighterSettings(){
        const btnSwitch = this.lighter.querySelector(`.${LIGHTERS_TOOGL_CLASSNAME}`);
        const btnOff = document.querySelector(`.${DEACTIVE_TOOGL_CLASSNAME}`);
        const lamp = this.lighter.querySelector(`.${LIGHTERS_LIGHT_CLASSNAME}`);
        btnSwitch.innerText = 'OFF';
        let isOn = lamp.classList.contains('active');

        function On() {
            lamp.classList.add('active');
            isOn = true;
            btnSwitch.innerText = 'ON';
        }

        function Off() {
            lamp.classList.remove('active');
            isOn = false;
            btnSwitch.innerText = 'OFF';
        }

        function toggleBtn() {
            if(isOn) {
                Off();
            } else {
                On();
            }
        }
        btnSwitch.addEventListener('click', (eventObject) => {
            eventObject.stopPropagation();
                toggleBtn()
        });
        btnOff.addEventListener('click', (eventObject) => {
            eventObject.stopPropagation();
            Off();
        });

    }
}


 const lighter = new Lighter(document.querySelector('#appLighterBox'));

 export { lighter };