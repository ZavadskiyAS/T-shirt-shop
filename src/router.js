export class Router {

    constructor() {
        this.controllers = {
            '/': 'defaultController',
            '/user': 'userController',
            '/messages': 'messageController'
        };

        window.addEventListener('load', this.determineController.bind(this));
        document.getElementById('button').addEventListener('click', this.determineController.bind(this));
    }

    setContainer(container) {
        this.container = container;
    }

    determineController(event) {
        event.preventDefault();

        let allPath;
        let mapping;
        if('load' === event.type) {
            allPath = window.location.pathname;
            let regex = new RegExp('/Shop/src/main/webapp/view(.*)');
            mapping = regex.exec(allPath)[1];
        } else {
            mapping = event.target.attributes['router'].value;
            allPath = '/Shop/src/main/webapp/view' + mapping;
        }
        window.history.pushState({}, "Cocaine", allPath);

        this.container.determineAction(this.controllers[mapping]);
    }

    addListenerOnElement(element, eventElement) {
        element.addEventListener('click', this.determineController.bind(this));
    }

}