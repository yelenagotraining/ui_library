import './styles/tab.css';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');

    }

    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                if(e.target.tagName === 'LI'){

                
                this.toggleTabs(e);
                this.toggleContainer(e);
                }
            });
        });
    }
    toggleTabs(e) {
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        e.target.classList.add('active');

    }

    toggleContainer(e) {
        //remove current active classes from contnet
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        const selector = e.target.getAttribute('data-target');
        const contnet = this.container.querySelector(selector);
        contnet.classList.add('active');
        //add new active class to content
    }
}

export { Tabs as default};