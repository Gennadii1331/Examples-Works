import {Lamp} from "./component/lamp/lamp";
import {LampManager} from "./component/lamp-manager/lamp-manager";
import {TaskList} from "./component/taskList/task-list";


new LampManager(document.querySelector('#manager'));


window.lamp = new Lamp(document.querySelector('#lamp'));

new TaskList(document.querySelector('#task-list'));