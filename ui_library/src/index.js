import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tab';
import Snackbar from './ninja-ui/snackbar';

const tooltip = new Tooltip(document.querySelector('.tooltip'),'new message');
tooltip.init();

const dropDowns = document.querySelectorAll('.dropdown');

dropDowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();

});

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('you clicked me :)');
});



