/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const forms = () => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    textareas = document.querySelectorAll('textarea'),
    inputPhone = document.querySelector('input[name="user_phone"]');
  inputPhone.addEventListener('input', () => {
    inputPhone.value = inputPhone.value.replace(/[^-0-9\+\(\)]/, '');
  });
  const message = {
    loading: 'Loading...',
    success: 'Thanks! We will answer as soon as possible.',
    error: 'Something goes wrong.'
  };
  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let result = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await result.text();
  };
  const resetInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    textareas.forEach(item => {
      item.value = '';
    });
  };
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div'); // ств блок, а який вставимо повідомлення для корист
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);
      const formData = new FormData(item); // або JSON

      postData('server.php', formData).then(result => {
        console.log(result);
        statusMessage.textContent = message.success;
      }).catch(() => {
        statusMessage.textContent = message.error;
      }).finally(() => {
        resetInputs();
        setTimeout(() => {
          statusMessage.remove();
        }, 4000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const hamburger = () => {
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__menu');
  function closeMenu() {
    menu.classList.remove('header__menu--active');
    hamburger.classList.remove('hamburger--active');
    document.body.style.overflow = '';
  }
  hamburger.addEventListener('click', e => {
    if (!menu.classList.contains('header__menu--active')) {
      menu.classList.add('header__menu--active');
      hamburger.classList.add('hamburger--active');
      document.body.style.overflow = 'hidden';
    } else {
      closeMenu();
    }
  });
  menu.addEventListener('click', e => {
    if ((e.target.tagName === 'A' || e.target.classList.contains('overlay')) && menu.classList.contains('header__menu--active')) {
      closeMenu();
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modals = () => {
  function initModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        modal.classList.add('modal--active');
        document.body.style.overflow = 'hidden'; //прибирає скролл
        if (window.screen.width >= 992) {
          //скролл стрибає тільки на комп'ютерах
          document.body.style.marginRight = `${scroll}px`;
        }
      });
    });
    close.addEventListener('click', () => {
      modal.classList.remove('modal--active');
      document.body.style.overflow = '';
      if (window.screen.width >= 992) {
        document.body.style.marginRight = '';
      }
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
        if (window.screen.width >= 992) {
          document.body.style.marginRight = '';
        }
      }
    });
  }
  function calcScroll() {
    let block = document.createElement('div');
    block.style.width = '40px';
    block.style.height = '40px';
    block.style.overflowY = 'scroll';
    block.style.visibility = 'hidden';
    document.body.appendChild(block);
    let scrollWidth = block.offsetWidth - block.clientWidth;
    block.remove();
    return scrollWidth;
  }
  initModal('[data-modal]', '.modal__contact', '.modal__contact [data-close]');
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = (slides, prev, next) => {
  let slideIndex = 1;
  const items = document.querySelectorAll(slides),
    btnDotsWrapper = document.querySelector('.specialist__dots'),
    btnDots = document.querySelectorAll('.specialist__dots-btn');
  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach(item => {
      item.classList.add('animate__animated');
      item.classList.remove('specialist__slides-item--active');
    });
    btnDots.forEach(item => {
      item.classList.remove('specialist__dots-btn--active');
    });
    items[slideIndex - 1].classList.add('specialist__slides-item--active');
    btnDots[slideIndex - 1].classList.add('specialist__dots-btn--active');
  }
  ;
  showSlides(slideIndex);
  function changeSlides(n) {
    showSlides(slideIndex += n);
  }
  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      changeSlides(-1);
      items[slideIndex - 1].classList.remove('animate__fadeInLeft');
      items[slideIndex - 1].classList.remove('animate__fadeInDown');
      items[slideIndex - 1].classList.add('animate__fadeInRight');
    });
    nextBtn.addEventListener('click', () => {
      changeSlides(1);
      items[slideIndex - 1].classList.add('animate__fadeInLeft');
      items[slideIndex - 1].classList.remove('animate__fadeInDown');
      items[slideIndex - 1].classList.remove('animate__fadeInRight');
    });
    btnDotsWrapper.addEventListener('click', e => {
      btnDots.forEach((item, index) => {
        if (e.target === item) {
          slideIndex = index + 1;
          showSlides(slideIndex);
          items[slideIndex - 1].classList.remove('animate__fadeInRight');
          items[slideIndex - 1].classList.remove('fadeInLeft');
          items[slideIndex - 1].classList.add('animate__fadeInDown');
        }
      });
    });
  } catch (e) {}
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const timer = id => {
  const hours12 = 12 * 60 * 60 * 1000,
    deadline = Date.parse(new Date()) + hours12;
  const getTimeDeadline = endtime => {
    const time = endtime - Date.parse(new Date()),
      seconds = Math.floor(time / 1000 % 60),
      //к-сть хвилин, які всередині часу t, повертається залишок  в с
      minutes = Math.floor(time / 1000 / 60 % 60),
      // поверт залишок в хв
      hours = Math.floor(time / (1000 * 60 * 60) % 24); // поверт залишок в год

    return {
      'total': time,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours
    };
  };
  const addZero = num => {
    if (num <= 9) {
      return `0${num}`;
    } else {
      return num;
    }
  };
  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
      seconds = timer.querySelector('#seconds'),
      minutes = timer.querySelector('#minutes'),
      hours = timer.querySelector('#hours'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const time = getTimeDeadline(endtime);
      seconds.textContent = addZero(time.seconds);
      minutes.textContent = addZero(time.minutes);
      hours.textContent = addZero(time.hours);
      if (time.total <= 0) {
        seconds.textContent = '00';
        minutes.textContent = '00';
        hours.textContent = '00';
        clearInterval(timeInterval);
      }
      ;
    }
    ;
  };
  setClock(id, deadline);
};
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");





window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__["default"])('.bonus__timer');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])('.specialist__slides-item', '[data-prev]', '[data-next]');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map