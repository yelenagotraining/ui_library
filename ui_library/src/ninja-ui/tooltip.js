import './styles/tooltips.css';

class Tooltip {
    constructor(element, displaytext){
        this.element = element;
        // this.meesage = element.getAttribute('data-message');
        this.displaytext = displaytext;
    }

    init(){
        this.meesage = this.displaytext;
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.meesage;
        this.element.appendChild(tip);

        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        });

        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        });
    }
}

export {Tooltip as default};