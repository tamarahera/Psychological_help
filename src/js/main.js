import modals from './modules/modals';
import hamburger from './modules/hamburger';
import forms from './modules/forms';
import timer from './modules/timer';
import slider from './modules/slider';
import accordion from './modules/accordion';
import scrolling from './modules/scrolling';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    modals();
    hamburger();
    forms();
    timer('.bonus__timer');
    slider('.specialist__slides-item', '[data-prev]', '[data-next]');
    accordion('.question__text', 'question__text--active', 'question__descr--active');
    scrolling('.pageup', '#about');
})