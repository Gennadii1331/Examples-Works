export class TaskList {
    constructor(element) {
        this.rootElement = element;
        this.fetchData();
    }

    fetchData() {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://localhost:4001/list');

        xhr.send();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.render(xhr.response);
            }
        });
    }


    render(data) {
        console.log(data);
    }
}