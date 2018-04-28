import {Lamp} from "../lamp/lamp";



export class LampManager {
    constructor(rootElement=document.querySelector('body')){
        this.rootElement = rootElement;
        this.lamps = [];
        this.render();
    }

    render(){
        const controlsContainer = document.createElement('div');
        const btnAdd  = document.createElement('button');
        const toogleAll = document.createElement('button');

        this.lampContainer = document.createElement('div');

        btnAdd.textContent = 'Add Lamp';
        toogleAll.textContent = 'Toogle All Lamps';
        controlsContainer.appendChild(btnAdd);
        controlsContainer.appendChild(toogleAll);

        btnAdd.addEventListener('click', () => this.addLamp());
        toogleAll.addEventListener('click', () => this.toogleAll());

        this.lampContainer.classList.add('lamp-manager__container');

        this.rootElement.appendChild(controlsContainer);
        this.rootElement.appendChild(this.lampContainer);
    }
    addLamp(){
        const lamp = new Lamp(this.lampContainer);
        this.lamps.push(lamp);
    }

    offLamp(){
       this.lamps.forEach((lamp) => lamp.deactive());
    }
    onLamp(){
        this.lamps.forEach((lamp) => lamp.activate());
    }

    toogleAll(){
        const toogleOnLamps = this.lamps.filter((lamp) => lamp.isActive);
        const isActive = toogleOnLamps.length > 0;


        if(isActive){
            this.offLamp();
        }else {
            this.onLamp();
        }

    }


}
