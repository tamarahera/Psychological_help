import modals from './modules/modals';
import hamburger from './modules/hamburger';
import forms from './modules/forms';
import timer from './modules/timer';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    modals();
    hamburger();
    forms();
    timer('.bonus__timer');
})