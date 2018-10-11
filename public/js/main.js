'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "/js/";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 17);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = getBody;
  function getBody() {
    var doc = document,
        body = doc.body;

    if (!body) {
      body = doc.createElement('body');
      body.fake = true;
    }

    return body;
  }

  /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = setFakeBody;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__docElement_js__ = __webpack_require__(10);

  function setFakeBody(body) {
    var docOverflow = '';
    if (body.fake) {
      docOverflow = __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow;
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow = 'hidden';
      __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].appendChild(body);
    }

    return docOverflow;
  }

  /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = resetFakeBody;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__docElement_js__ = __webpack_require__(10);

  function resetFakeBody(body, docOverflow) {
    if (body.fake) {
      body.remove();
      __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line
      __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].offsetHeight;
    }
  }

  /***/
},
/* 3 */
/***/function (module, exports) {

  var g;

  // This works in non-strict mode
  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") g = window;
  }

  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}

  module.exports = g;

  /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return tns;
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__ = __webpack_require__(5);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__ = __webpack_require__(30);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__ = __webpack_require__(31);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__ = __webpack_require__(32);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__ = __webpack_require__(33);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__helpers_getSlideId_js__ = __webpack_require__(34);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__helpers_calc_js__ = __webpack_require__(35);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__helpers_percentageLayout_js__ = __webpack_require__(36);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__helpers_mediaquerySupport_js__ = __webpack_require__(37);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__helpers_createStyleSheet_js__ = __webpack_require__(38);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__ = __webpack_require__(39);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__helpers_removeCSSRule_js__ = __webpack_require__(40);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__ = __webpack_require__(41);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__helpers_toDegree_js__ = __webpack_require__(42);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__helpers_getTouchDirection_js__ = __webpack_require__(43);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_15__helpers_forEachNodeList_js__ = __webpack_require__(44);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__ = __webpack_require__(6);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__ = __webpack_require__(46);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__ = __webpack_require__(47);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__ = __webpack_require__(7);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__ = __webpack_require__(48);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__ = __webpack_require__(11);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__ = __webpack_require__(13);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_23__helpers_removeElementStyles_js__ = __webpack_require__(49);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_24__helpers_arrayFromNodeList_js__ = __webpack_require__(50);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__ = __webpack_require__(51);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_26__helpers_showElement_js__ = __webpack_require__(52);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_27__helpers_isVisible_js__ = __webpack_require__(53);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_28__helpers_whichProperty_js__ = __webpack_require__(54);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_29__helpers_has3DTransforms_js__ = __webpack_require__(55);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_30__helpers_getEndProperty_js__ = __webpack_require__(56);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__ = __webpack_require__(57);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__ = __webpack_require__(58);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_33__helpers_events_js__ = __webpack_require__(59);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_34__helpers_jsTransform_js__ = __webpack_require__(60);
  // Version: 2.8.2

  // helper functions
  if (!Object.keys) {
    Object.keys = function (object) {
      var keys = [];
      for (var name in object) {
        if (Object.prototype.hasOwnProperty.call(object, name)) {
          keys.push(name);
        }
      }
      return keys;
    };
  }
  if (!("remove" in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  var tns = function tns(options) {
    options = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__["a" /* extend */])({
      container: '.slider',
      mode: 'carousel',
      axis: 'horizontal',
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: false,
      autoWidth: false,
      viewportMax: false,
      slideBy: 1,
      controls: true,
      controlsText: ['prev', 'next'],
      controlsContainer: false,
      prevButton: false,
      nextButton: false,
      nav: true,
      navContainer: false,
      navAsThumbnails: false,
      arrowKeys: false,
      speed: 300,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayDirection: 'forward',
      autoplayText: ['start', 'stop'],
      autoplayHoverPause: false,
      autoplayButton: false,
      autoplayButtonOutput: true,
      autoplayResetOnVisibility: true,
      animateIn: 'tns-fadeIn',
      animateOut: 'tns-fadeOut',
      animateNormal: 'tns-normal',
      animateDelay: false,
      loop: true,
      rewind: false,
      autoHeight: false,
      responsive: false,
      lazyload: false,
      touch: true,
      mouseDrag: false,
      swipeAngle: 15,
      nested: false,
      freezable: true,
      onInit: false,
      useLocalStorage: true
    }, options || {});

    var doc = document,
        win = window,
        KEYS = {
      ENTER: 13,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    },
        tnsStorage = {},
        localStorageAccess = options.useLocalStorage;

    if (localStorageAccess) {
      // check browser version and local storage access
      var browserInfo = navigator.userAgent;
      var uid = new Date();

      try {
        tnsStorage = win.localStorage;
        if (tnsStorage) {
          tnsStorage.setItem(uid, uid);
          localStorageAccess = tnsStorage.getItem(uid) == uid;
          tnsStorage.removeItem(uid);
        } else {
          localStorageAccess = false;
        }
        if (!localStorageAccess) {
          tnsStorage = {};
        }
      } catch (e) {
        localStorageAccess = false;
      }

      if (localStorageAccess) {
        // remove storage when browser version changes
        if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
          ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function (item) {
            tnsStorage.removeItem(item);
          });
        }
        // update browserInfo
        localStorage['tnsApp'] = browserInfo;
      }
    }

    function getSetConstant(name, value) {
      return tnsStorage[name] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage[name]) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, name, value, localStorageAccess);
    }

    var CALC = getSetConstant('tC', Object(__WEBPACK_IMPORTED_MODULE_6__helpers_calc_js__["a" /* calc */])()),
        PERCENTAGELAYOUT = getSetConstant('tPL', Object(__WEBPACK_IMPORTED_MODULE_7__helpers_percentageLayout_js__["a" /* percentageLayout */])()),
        CSSMQ = getSetConstant('tMQ', Object(__WEBPACK_IMPORTED_MODULE_8__helpers_mediaquerySupport_js__["a" /* mediaquerySupport */])()),
        TRANSFORM = getSetConstant('tTf', Object(__WEBPACK_IMPORTED_MODULE_28__helpers_whichProperty_js__["a" /* whichProperty */])('transform')),
        HAS3DTRANSFORMS = getSetConstant('t3D', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_has3DTransforms_js__["a" /* has3DTransforms */])(TRANSFORM)),
        TRANSITIONDURATION = getSetConstant('tTDu', Object(__WEBPACK_IMPORTED_MODULE_28__helpers_whichProperty_js__["a" /* whichProperty */])('transitionDuration')),
        TRANSITIONDELAY = getSetConstant('tTDe', Object(__WEBPACK_IMPORTED_MODULE_28__helpers_whichProperty_js__["a" /* whichProperty */])('transitionDelay')),
        ANIMATIONDURATION = getSetConstant('tADu', Object(__WEBPACK_IMPORTED_MODULE_28__helpers_whichProperty_js__["a" /* whichProperty */])('animationDuration')),
        ANIMATIONDELAY = getSetConstant('tADe', Object(__WEBPACK_IMPORTED_MODULE_28__helpers_whichProperty_js__["a" /* whichProperty */])('animationDelay')),
        TRANSITIONEND = getSetConstant('tTE', Object(__WEBPACK_IMPORTED_MODULE_30__helpers_getEndProperty_js__["a" /* getEndProperty */])(TRANSITIONDURATION, 'Transition')),
        ANIMATIONEND = getSetConstant('tAE', Object(__WEBPACK_IMPORTED_MODULE_30__helpers_getEndProperty_js__["a" /* getEndProperty */])(ANIMATIONDURATION, 'Animation'));

    // get element nodes from selectors
    var supportConsoleWarn = win.console && typeof win.console.warn === "function",
        list = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'];
    for (var i = list.length; i--;) {
      var item = list[i];
      if (typeof options[item] === 'string') {
        var el = doc.querySelector(options[item]);

        if (el && el.nodeName) {
          options[item] = el;
        } else {
          if (supportConsoleWarn) {
            console.warn('Can\'t find', options[item]);
          }
          return;
        }
      }
    }

    // make sure at least 1 slide
    if (options.container.children.length < 1) {
      if (supportConsoleWarn) {
        console.warn('No slides found in', options.container);
      }
      return;
    }

    // update responsive
    // from: { 
    //    300: 2, 
    //    800: {
    //      loop: false
    //    }
    // }
    // to: {
    //    300: { 
    //      items: 2 
    //    }, 
    //    800: {
    //      loop: false
    //    }
    // }
    if (options.responsive) {
      var resTem = {},
          res = options.responsive;
      for (var key in res) {
        var val = res[key];
        resTem[key] = typeof val === 'number' ? { items: val } : val;
      }

      options.responsive = resTem;
      resTem = null;

      // apply responsive[0] to options and remove it
      if (0 in options.responsive) {
        options = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__["a" /* extend */])(options, options.responsive[0]);
        delete options.responsive[0];
      }
    }

    // === define and set variables ===
    var carousel = options.mode === 'carousel' ? true : false;

    if (!carousel) {
      options.axis = 'horizontal';
      options.edgePadding = false;

      var animateIn = options.animateIn,
          animateOut = options.animateOut,
          animateDelay = options.animateDelay,
          animateNormal = options.animateNormal;
    }

    var horizontal = options.axis === 'horizontal' ? true : false,
        outerWrapper = doc.createElement('div'),
        innerWrapper = doc.createElement('div'),
        container = options.container,
        containerParent = container.parentNode,
        slideItems = container.children,
        slideCount = slideItems.length,
        responsive = options.responsive,
        breakpointZone = 0,
        windowWidth = getWindowWidth(),
        isOn;

    // fixedWidth: viewport > rightBoundary > indexMax
    var nested = options.nested,
        autoWidth = options.autoWidth,
        fixedWidth = getOption('fixedWidth'),
        edgePadding = getOption('edgePadding'),
        gutter = getOption('gutter'),
        viewport = getViewportWidth(),
        items = !autoWidth ? Math.floor(getOption('items')) : 1,
        slideBy = getOption('slideBy') === 'page' ? items : getOption('slideBy'),
        viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
        arrowKeys = getOption('arrowKeys'),
        speed = getOption('speed'),
        rewind = options.rewind,
        loop = rewind ? false : options.loop,
        autoHeight = getOption('autoHeight'),
        sheet = Object(__WEBPACK_IMPORTED_MODULE_9__helpers_createStyleSheet_js__["a" /* createStyleSheet */])(),
        lazyload = options.lazyload,
        slidePositions,
        // collection of slide positions
    slideItemsOut = [],
        cloneCount = loop ? getCloneCountForLoop() : 0,
        slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
        hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
        rightBoundary = fixedWidth ? getRightBoundary() : null,
        updateIndexBeforeTransform = !carousel || !loop ? true : false,

    // transform
    transformAttr = horizontal ? 'left' : 'top',
        transformPrefix = '',
        transformPostfix = '',

    // index
    index = getStartIndex(getOption('startIndex')),
        indexCached = index,
        indexMin = 0,
        indexMax = !autoWidth ? getIndexMax() : null,

    // resize
    resizeTimer,
        swipeAngle = options.swipeAngle,
        moveDirectionExpected = swipeAngle ? '?' : true,
        running = false,
        onInit = options.onInit,
        events = new __WEBPACK_IMPORTED_MODULE_33__helpers_events_js__["a" /* Events */](),

    // id, class
    containerIdCached = container.id,
        classContainer = ' tns-slider tns-' + options.mode,
        slideId = container.id || Object(__WEBPACK_IMPORTED_MODULE_5__helpers_getSlideId_js__["a" /* getSlideId */])(),
        disable = getOption('disable'),
        freezable = options.freezable,
        freeze = !autoWidth ? getFreeze() : null,
        frozen,
        controlsEvents = {
      'click': onControlsClick,
      'keydown': onControlsKeydown
    },
        navEvents = {
      'click': onNavClick,
      'keydown': onNavKeydown
    },
        hoverEvents = {
      'mouseover': mouseoverPause,
      'mouseout': mouseoutRestart
    },
        visibilityEvent = { 'visibilitychange': onVisibilityChange },
        docmentKeydownEvent = { 'keydown': onDocumentKeydown },
        touchEvents = {
      'touchstart': onPanStart,
      'touchmove': onPanMove,
      'touchend': onPanEnd,
      'touchcancel': onPanEnd
    },
        dragEvents = {
      'mousedown': onPanStart,
      'mousemove': onPanMove,
      'mouseup': onPanEnd,
      'mouseleave': onPanEnd
    },
        hasControls = hasOption('controls'),
        hasNav = hasOption('nav'),
        navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
        hasAutoplay = hasOption('autoplay'),
        hasTouch = hasOption('touch'),
        hasMouseDrag = hasOption('mouseDrag'),
        slideActiveClass = 'tns-slide-active',
        imgCompleteClass = 'tns-complete',
        imgEvents = {
      'load': imgLoadedOrError,
      'error': imgLoadedOrError
    },
        imgsComplete;

    // controls
    if (hasControls) {
      var controls = getOption('controls'),
          controlsText = getOption('controlsText'),
          controlsContainer = options.controlsContainer,
          prevButton = options.prevButton,
          nextButton = options.nextButton,
          prevIsButton,
          nextIsButton;
    }

    // nav
    if (hasNav) {
      var nav = getOption('nav'),
          navContainer = options.navContainer,
          navItems,
          visibleNavIndexes = [],
          visibleNavIndexesCached = visibleNavIndexes,
          navClicked = -1,
          navCurrentIndex = getAbsIndex(),
          navCurrentIndexCached = navCurrentIndex,
          navActiveClass = 'tns-nav-active';
    }

    // autoplay
    if (hasAutoplay) {
      var autoplay = getOption('autoplay'),
          autoplayTimeout = getOption('autoplayTimeout'),
          autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
          autoplayText = getOption('autoplayText'),
          autoplayHoverPause = getOption('autoplayHoverPause'),
          autoplayButton = options.autoplayButton,
          autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
          autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
          autoplayTimer,
          animating,
          autoplayHoverPaused,
          autoplayUserPaused,
          autoplayVisibilityPaused;
    }

    if (hasTouch || hasMouseDrag) {
      var initPosition = {},
          lastPosition = {},
          translateInit,
          disX,
          disY,
          panStart = false,
          rafIndex = 0,
          getDist = horizontal ? function (a, b) {
        return a.x - b.x;
      } : function (a, b) {
        return a.y - b.y;
      };
    }

    // touch
    if (hasTouch) {
      var touch = getOption('touch');
    }

    // mouse drag
    if (hasMouseDrag) {
      var mouseDrag = getOption('mouseDrag');
    }

    // disable slider when slidecount <= items
    if (freeze) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }

    if (TRANSFORM) {
      transformAttr = TRANSFORM;
      transformPrefix = 'translate';

      if (HAS3DTRANSFORMS) {
        transformPrefix += horizontal ? '3d(' : '3d(0px, ';
        transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
      } else {
        transformPrefix += horizontal ? 'X(' : 'Y(';
        transformPostfix = ')';
      }
    }

    sliderInit();

    // === COMMON FUNCTIONS === //
    function getIndexMax() {
      if (!fixedWidth && !autoWidth) {
        return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(getOption('items'))) : slideCountNew - 1;
      } else {
        if (fixedWidth) {
          return Math.floor(-rightBoundary / (fixedWidth + gutter)) + 1;
        } else {
          var i = slideCountNew - 1,
              result = i;
          while (slidePositions[i] > -rightBoundary) {
            i--;
            result = i;
          }
          return result;
        }
      }
    }

    function getStartIndex(ind) {
      ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
      return carousel ? ind + cloneCount : ind;
    }

    function getAbsIndex(i) {
      if (i == null) {
        i = index;
      }

      if (carousel) {
        i -= cloneCount;
      }
      while (i < 0) {
        i += slideCount;
      }

      return Math.floor(i % slideCount);
    }

    function getItemsMax() {
      // fixedWidth or autoWidth while viewportMax is not available
      if (autoWidth || fixedWidth && !viewportMax) {
        return slideCount - 1;
        // most cases
      } else {
        var str = fixedWidth ? 'fixedWidth' : 'items',
            arr = [];

        if (fixedWidth || options[str] < slideCount) {
          arr.push(options[str]);
        }

        if (responsive) {
          for (var bp in responsive) {
            var tem = responsive[bp][str];
            if (tem && (fixedWidth || tem < slideCount)) {
              arr.push(tem);
            }
          }
        }

        if (!arr.length) {
          arr.push(0);
        }

        return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
      }
    }

    function getCloneCountForLoop() {
      var itemsMax = getItemsMax(),
          result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
      result = Math.max(itemsMax, result);

      return hasOption('edgePadding') ? result + 1 : result;
    }

    function getWindowWidth() {
      return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
    }

    function getClientWidth(el) {
      return el.clientWidth || getClientWidth(el.parentNode);
    }

    function getViewportWidth() {
      var width = getClientWidth(containerParent);
      return edgePadding ? width - (edgePadding * 2 - gutter) : width;
    }

    function hasOption(item) {
      if (options[item]) {
        return true;
      } else {
        if (responsive) {
          for (var bp in responsive) {
            if (responsive[bp][item]) {
              return true;
            }
          }
        }
        return false;
      }
    }

    function getOption(item, viewport) {
      viewport = viewport ? viewport : windowWidth;

      var obj = {
        slideBy: 'page',
        edgePadding: false
      },
          result;

      if (!carousel && item in obj) {
        result = obj[item];
      } else {
        if (item === 'items' && fixedWidth) {
          result = Math.floor(viewport / (fixedWidth + gutter));
        } else if (item === 'autoHeight' && nested === 'outer') {
          result = true;
        } else {
          result = options[item];

          if (responsive) {
            for (var bp in responsive) {
              if (viewport >= bp) {
                if (item in responsive[bp]) {
                  result = responsive[bp][item];
                }
              }
            }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') {
        result = getOption('items');
      }
      if (!carousel && (item === 'slideBy' || item === 'items')) {
        result = Math.floor(result);
      }

      return result;
    }

    function getSlideMarginLeft(i) {
      return CALC ? CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : i * 100 / slideCountNew + '%';
    }

    function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem) {
      var str = '';

      if (edgePaddingTem) {
        var gap = edgePaddingTem;
        if (gutterTem) {
          gap -= gutterTem;
        }
        str = horizontal ? 'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' : 'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
      } else if (gutterTem && !fixedWidthTem) {
        var gutterTemUnit = '-' + gutterTem + 'px',
            dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
        str = 'margin: 0 ' + dir + ';';
      }

      if (TRANSITIONDURATION && speedTem) {
        str += getTrsnsitionDurationStyle(speedTem);
      }

      return str;
    }

    function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
      if (fixedWidthTem) {
        return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
      } else {
        return CALC ? CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' : slideCountNew * 100 / itemsTem + '%';
      }
    }

    function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
      var width;

      if (fixedWidthTem) {
        width = fixedWidthTem + gutterTem + 'px';
      } else {
        if (!carousel) {
          itemsTem = Math.floor(itemsTem);
        }
        var dividend = carousel ? slideCountNew : itemsTem;
        width = CALC ? CALC + '(100% / ' + dividend + ')' : 100 / dividend + '%';
      }

      width = 'width:' + width;

      // inner slider: overwrite outer slider styles
      return nested !== 'inner' ? width + ';' : width + ' !important;';
    }

    function getSlideGutterStyle(gutterTem) {
      var str = '';

      // gutter maybe interger || 0
      // so can't use 'if (gutter)'
      if (gutterTem !== false) {
        var prop = horizontal ? 'padding-' : 'margin-',
            dir = horizontal ? 'right' : 'bottom';
        str = prop + dir + ': ' + gutterTem + 'px;';
      }

      return str;
    }

    function getCSSPrefix(name, num) {
      var prefix = name.substring(0, name.length - num).toLowerCase();
      if (prefix) {
        prefix = '-' + prefix + '-';
      }

      return prefix;
    }

    function getTrsnsitionDurationStyle(speed) {
      return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
    }

    function getAnimationDurationStyle(speed) {
      return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
    }

    function sliderInit() {
      var classOuter = 'tns-outer',
          classInner = 'tns-inner',
          hasGutter = hasOption('gutter');

      outerWrapper.className = classOuter;
      innerWrapper.className = classInner;
      innerWrapper.id = slideId + '-iw';
      if (autoHeight) {
        innerWrapper.className += ' tns-ah';
      }

      // set container properties
      if (container.id === '') {
        container.id = slideId;
      }
      classContainer += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
      classContainer += CALC ? ' tns-calc' : ' tns-no-calc';
      if (carousel) {
        classContainer += ' tns-' + options.axis;
      }
      container.className += classContainer;

      // add constrain layer for carousel
      if (carousel) {
        var middleWrapper = doc.createElement('div');
        middleWrapper.className = 'tns-ovh';

        outerWrapper.appendChild(middleWrapper);
        middleWrapper.appendChild(innerWrapper);
      } else {
        outerWrapper.appendChild(innerWrapper);
      }

      containerParent.insertBefore(outerWrapper, container);
      innerWrapper.appendChild(container);

      // add events
      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(container, eve);
      }

      // add id, class, aria attributes 
      // before clone slides
      for (var x = 0; x < slideCount; x++) {
        var item = slideItems[x];
        if (!item.id) {
          item.id = slideId + '-item' + x;
        }
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, 'tns-item');
        if (!carousel && animateNormal) {
          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateNormal);
        }
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
          'aria-hidden': 'true',
          'tabindex': '-1'
        });
      }

      // ## clone slides
      // carousel: n + slides + n
      // gallery:      slides + n
      if (cloneCount) {
        var fragmentBefore = doc.createDocumentFragment(),
            fragmentAfter = doc.createDocumentFragment();

        for (var j = cloneCount; j--;) {
          var num = j % slideCount,
              cloneFirst = slideItems[num].cloneNode(true);
          Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(cloneFirst, 'id');
          fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

          if (carousel) {
            var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
            Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(cloneLast, 'id');
            fragmentBefore.appendChild(cloneLast);
          }
        }

        container.insertBefore(fragmentBefore, container.firstChild);
        container.appendChild(fragmentAfter);
        slideItems = container.children;
      }

      // ## images loaded/failed
      if (hasOption('autoHeight') || !carousel || autoWidth || !horizontal) {
        var imgs = container.querySelectorAll('img');

        // add complete class if all images are loaded/failed
        Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEachNodeList_js__["a" /* forEachNodeList */])(imgs, function (img) {
          var src = img.src;

          if (src.indexOf('data:image') < 0) {
            Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(img, imgEvents);
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            img.src = src;
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, imgCompleteClass);
          }
        });

        Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function () {
          imageLoaded(Object(__WEBPACK_IMPORTED_MODULE_24__helpers_arrayFromNodeList_js__["a" /* arrayFromNodeList */])(imgs), function () {
            // set imgsComplete to true
            imgsComplete = true;

            // run Fn()s which are rely on image loading
            if (!disable) {
              if (!horizontal || autoWidth) {
                getSlidePositions();
                lazyLoad();

                if (autoWidth) {
                  items = getOption('items');
                  rightBoundary = getRightBoundary();
                  freeze = getFreeze();
                  indexMax = getIndexMax();

                  if (freeze) {
                    controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
                  }

                  // update slider UI
                  initUI();
                }

                if (!horizontal) {
                  updateContentWrapperHeight();
                }
              }

              // set container transform property
              if (carousel) {
                doContainerTransformSilent();
              }
            }
          });
        });
      }

      if (carousel && horizontal && !autoWidth) {
        doContainerTransformSilent();
      }

      initSheet();
      if (!autoWidth) {
        initUI();
      }
      if (responsive) {
        setBreakpointZone();
      }
    }

    function initSheet() {
      // activate visible slides
      // add aria attrs
      // set animation classes and left value for gallery slider
      // use slide count when slides are fewer than items
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, { 'aria-hidden': 'false' });
        Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(item, ['tabindex']);
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, slideActiveClass);

        if (!carousel) {
          item.style.left = (i - index) * 100 / items + '%';
          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateIn);
          Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
        }
      }

      // #### LAYOUT

      // ## INLINE-BLOCK VS FLOAT

      // ## PercentageLayout:
      // slides: inline-block
      // remove blank space between slides by set font-size: 0

      // ## Non PercentageLayout:
      // slides: float
      //         margin-right: -100%
      //         margin-left: ~

      // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
      if (carousel && horizontal) {
        if (PERCENTAGELAYOUT || autoWidth) {
          Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
          Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId, 'font-size:0;', Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEachNodeList_js__["a" /* forEachNodeList */])(slideItems, function (slide, i) {
            slide.style.marginLeft = getSlideMarginLeft(i);
          });
        }
      }

      // ## BASIC STYLES
      if (CSSMQ) {
        // inner wrapper styles
        var str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed);
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + '-iw', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));

        // container styles
        if (carousel) {
          str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
          if (TRANSITIONDURATION) {
            str += getTrsnsitionDurationStyle(speed);
          }
          Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId, str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        }

        // slide styles
        str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
        if (options.gutter) {
          str += getSlideGutterStyle(options.gutter);
        }
        // set gallery items transition-duration
        if (!carousel) {
          if (TRANSITIONDURATION) {
            str += getTrsnsitionDurationStyle(speed);
          }
          if (ANIMATIONDURATION) {
            str += getAnimationDurationStyle(speed);
          }
        }
        if (str) {
          Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        }

        // non CSS mediaqueries: IE8
        // ## update inner wrapper, container, slides if needed
        // set inline styles for inner wrapper & container
        // insert stylesheet (one line) for slides only (since slides are many)
      } else {
        // inner wrapper styles
        innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);

        // container styles
        if (carousel && horizontal && !autoWidth) {
          container.style.width = getContainerWidth(fixedWidth, gutter, items);
        }

        // slide styles
        var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
        if (gutter) {
          str += getSlideGutterStyle(gutter);
        }

        // append to the last line
        if (str) {
          Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        }
      }

      // ## MEDIAQUERIES
      if (responsive && CSSMQ) {
        for (var bp in responsive) {
          var opts = responsive[bp],
              str = '',
              innerWrapperStr = '',
              containerStr = '',
              slideStr = '',
              itemsBP = !autoWidth ? getOption('items', bp) : null,
              fixedWidthBP = getOption('fixedWidth', bp),
              speedBP = getOption('speed', bp),
              edgePaddingBP = getOption('edgePadding', bp),
              gutterBP = getOption('gutter', bp);

          // inner wrapper string
          if ('edgePadding' in opts || 'gutter' in opts) {
            innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP) + '}';
          }

          // container string
          if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || fixedWidth && 'gutter' in opts)) {
            containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
          }
          if (TRANSITIONDURATION && 'speed' in opts) {
            containerStr += getTrsnsitionDurationStyle(speedBP);
          }
          if (containerStr) {
            containerStr = '#' + slideId + '{' + containerStr + '}';
          }

          // slide string
          if ('fixedWidth' in opts || fixedWidth && 'gutter' in opts || !carousel && 'items' in opts) {
            slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
          }
          if ('gutter' in opts) {
            slideStr += getSlideGutterStyle(gutterBP);
          }
          // set gallery items transition-duration
          if (!carousel && 'speed' in opts) {
            if (TRANSITIONDURATION) {
              slideStr += getTrsnsitionDurationStyle(speedBP);
            }
            if (ANIMATIONDURATION) {
              slideStr += getAnimationDurationStyle(speedBP);
            }
          }
          if (slideStr) {
            slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}';
          }

          // add up
          str = innerWrapperStr + containerStr + slideStr;

          if (str) {
            sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
          }
        }
      }
    }

    function initUI() {

      // == autoplayInit ==
      if (hasAutoplay) {
        var txt = autoplay ? 'stop' : 'start';
        if (autoplayButton) {
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(autoplayButton, { 'data-action': txt });
        } else if (options.autoplayButtonOutput) {
          outerWrapper.insertAdjacentHTML('afterbegin', '<button data-action="' + txt + '" type="button">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
          autoplayButton = outerWrapper.querySelector('[data-action]');
        }

        // add event
        if (autoplayButton) {
          Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(autoplayButton, { 'click': toggleAutoplay });
        }

        if (!autoplay) {
          if (autoplayButton) {
            Object(__WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__["a" /* hideElement */])(autoplayButton);
          }
        } else {
          startAutoplay();
          if (autoplayHoverPause) {
            Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(container, hoverEvents);
          }
          if (autoplayResetOnVisibility) {
            Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(container, visibilityEvent);
          }
        }
      }

      // == navInit ==
      if (hasNav) {
        var initIndex = !carousel ? 0 : cloneCount;
        // customized nav
        // will not hide the navs in case they're thumbnails
        if (navContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navContainer, { 'aria-label': 'Carousel Pagination' });
          navItems = navContainer.children;
          for (var i = 0; i < slideCount; i++) {
            var item = navItems[i];
            if (item) {
              Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
                'data-nav': i,
                'tabindex': '-1',
                'aria-selected': 'false',
                'aria-controls': slideItems[initIndex + i].id
              });
            }
          }

          // generated nav 
        } else {
          var navHtml = '',
              hiddenStr = navAsThumbnails ? '' : 'hidden';
          for (var i = 0; i < slideCount; i++) {
            // hide nav items by default
            navHtml += '<button data-nav="' + i + '" tabindex="-1" aria-selected="false" aria-controls="' + slideItems[initIndex + i].id + '" ' + hiddenStr + ' type="button"></button>';
          }
          navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
          outerWrapper.insertAdjacentHTML('afterbegin', navHtml);

          navContainer = outerWrapper.querySelector('.tns-nav');
          navItems = navContainer.children;
        }

        updateNavVisibility();

        // add transition
        if (TRANSITIONDURATION) {
          var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
              str = 'transition: all ' + speed / 1000 + 's';

          if (prefix) {
            str = '-' + prefix + '-' + str;
          }

          Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        }

        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navItems[navCurrentIndex], { 'tabindex': '0', 'aria-selected': 'true' });
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(navItems[navCurrentIndex], navActiveClass);

        // add events
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(navContainer, navEvents);

        if (!nav) {
          Object(__WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__["a" /* hideElement */])(navContainer);
        }
      }

      // == controlsInit ==
      if (hasControls) {
        if (controlsContainer || prevButton && nextButton) {
          if (controlsContainer) {
            prevButton = controlsContainer.children[0];
            nextButton = controlsContainer.children[1];
            Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(controlsContainer, {
              'aria-label': 'Carousel Navigation',
              'tabindex': '0'
            });
            Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(controlsContainer.children, {
              'aria-controls': slideId,
              'tabindex': '-1'
            });
          }

          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(prevButton, { 'data-controls': 'prev' });
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(nextButton, { 'data-controls': 'next' });
        } else {
          outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId + '" type="button">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId + '" type="button">' + controlsText[1] + '</button></div>');

          controlsContainer = outerWrapper.querySelector('.tns-controls');
          prevButton = controlsContainer.children[0];
          nextButton = controlsContainer.children[1];
        }

        prevIsButton = isButton(prevButton);
        nextIsButton = isButton(nextButton);

        updateControlsStatus();

        // add events
        if (controlsContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(controlsContainer, controlsEvents);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(prevButton, controlsEvents);
          Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(nextButton, controlsEvents);
        }

        if (!controls) {
          Object(__WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__["a" /* hideElement */])(controlsContainer);
        }
      }

      if (touch) {
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(container, touchEvents);
      }
      if (mouseDrag) {
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(container, dragEvents);
      }
      if (arrowKeys) {
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(doc, docmentKeydownEvent);
      }

      if (nested === 'inner') {
        events.on('outerResized', function () {
          resizeTasks();
          events.emit('innerLoaded', info());
        });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(win, { 'resize': onResize });
      }

      if (nested === 'outer') {
        events.on('innerLoaded', runAutoHeight);
      } else if ((autoHeight || !carousel) && !disable) {
        runAutoHeight();
      }

      if (!autoWidth) {
        lazyLoad();
      }
      toggleSlideDisplayAndEdgePadding();

      events.on('indexChanged', additionalUpdates);

      if (typeof onInit === 'function') {
        onInit(info());
      }
      if (nested === 'inner') {
        events.emit('innerLoaded', info());
      }

      if (disable) {
        disableSlider(true);
      }

      isOn = true;
    }

    // === ON RESIZE ===
    function onResize(e) {
      Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function () {
        resizeTasks(getEvent(e));
      });
    }

    function resizeTasks(e) {
      if (!isOn) {
        return;
      }

      windowWidth = getWindowWidth();
      if (nested === 'outer') {
        events.emit('outerResized', info(e));
      }

      var breakpointZoneTem = breakpointZone,
          edgePaddingTem = edgePadding,
          gutterTem = gutter,
          indexTem = index,
          itemsTem = items,
          freezeTem = freeze,
          needContainerTransform = false;

      edgePadding = getOption('edgePadding');
      gutter = getOption('gutter');
      viewport = getViewportWidth();
      if (responsive) {
        setBreakpointZone();
      }
      if (breakpointZoneTem !== breakpointZone) {
        events.emit('newBreakpointStart', info(e));
      }
      if ((!horizontal || autoWidth) && !disable) {
        getSlidePositions();
        if (!horizontal) {
          updateContentWrapperHeight();
          needContainerTransform = true;
        }
      }
      if (fixedWidth || autoWidth) {
        rightBoundary = getRightBoundary();
        indexMax = getIndexMax();
      }

      // things do when breakpoint zone change
      if (breakpointZoneTem !== breakpointZone || fixedWidth || autoWidth) {
        var slideByTem = slideBy,
            arrowKeysTem = arrowKeys,
            autoHeightTem = autoHeight,
            fixedWidthTem = fixedWidth,
            disableTem = disable;

        // update variables
        items = getOption('items');
        slideBy = getOption('slideBy');
        disable = getOption('disable');
        if (hasRightDeadZone) {
          needContainerTransform = true;
        }
        freeze = getFreeze();

        if (items !== itemsTem) {
          if (!fixedWidth && !autoWidth) {
            indexMax = getIndexMax();
          }
          // check index before transform in case
          // slider reach the right edge then items become bigger
          updateIndex();
        }

        if (disable !== disableTem) {
          disableSlider(disable);
        }

        if (freeze !== freezeTem) {
          // reset container transforms
          if (freeze) {
            doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          } else {
            needContainerTransform = true;
          }

          toggleSlideDisplayAndEdgePadding();
        }

        if (breakpointZoneTem !== breakpointZone) {
          speed = getOption('speed');

          fixedWidth = getOption('fixedWidth');
          if (!disable && fixedWidth !== fixedWidthTem) {
            needContainerTransform = true;
          }

          autoHeight = getOption('autoHeight');
          if (autoHeight !== autoHeightTem) {
            if (!autoHeight) {
              innerWrapper.style.height = '';
            }
          }
        }

        arrowKeys = freeze ? false : getOption('arrowKeys');
        if (arrowKeys !== arrowKeysTem) {
          arrowKeys ? Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(doc, docmentKeydownEvent) : Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(doc, docmentKeydownEvent);
        }

        if (hasControls) {
          var controlsTem = controls,
              controlsTextTem = controlsText;
          controls = freeze ? false : getOption('controls');
          controlsText = getOption('controlsText');

          if (controls !== controlsTem) {
            controls ? Object(__WEBPACK_IMPORTED_MODULE_26__helpers_showElement_js__["a" /* showElement */])(controlsContainer) : Object(__WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__["a" /* hideElement */])(controlsContainer);
          }
          if (controlsText !== controlsTextTem) {
            prevButton.innerHTML = controlsText[0];
            nextButton.innerHTML = controlsText[1];
          }
        }
        if (hasNav) {
          var navTem = nav;
          nav = freeze ? false : getOption('nav');

          if (nav !== navTem) {
            if (nav) {
              Object(__WEBPACK_IMPORTED_MODULE_26__helpers_showElement_js__["a" /* showElement */])(navContainer);
              updateNavVisibility();
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__["a" /* hideElement */])(navContainer);
            }
          }
        }
        if (hasTouch) {
          var touchTem = touch;
          touch = freeze ? false : getOption('touch');

          if (touch !== touchTem && carousel) {
            touch ? Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(container, touchEvents) : Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(container, touchEvents);
          }
        }
        if (hasMouseDrag) {
          var mouseDragTem = mouseDrag;
          mouseDrag = freeze ? false : getOption('mouseDrag');

          if (mouseDrag !== mouseDragTem && carousel) {
            mouseDrag ? Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(container, dragEvents) : Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(container, dragEvents);
          }
        }
        if (hasAutoplay) {
          var autoplayTem = autoplay,
              autoplayHoverPauseTem = autoplayHoverPause,
              autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
              autoplayTextTem = autoplayText;

          if (freeze) {
            autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
          } else {
            autoplay = getOption('autoplay');

            if (autoplay) {
              autoplayHoverPause = getOption('autoplayHoverPause');
              autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');
            } else {
              autoplayHoverPause = autoplayResetOnVisibility = false;
            }
          }
          autoplayText = getOption('autoplayText');
          autoplayTimeout = getOption('autoplayTimeout');

          if (autoplay !== autoplayTem) {
            if (autoplay) {
              if (autoplayButton) {
                Object(__WEBPACK_IMPORTED_MODULE_26__helpers_showElement_js__["a" /* showElement */])(autoplayButton);
              }
              if (!animating && !autoplayUserPaused) {
                startAutoplay();
              }
            } else {
              if (autoplayButton) {
                Object(__WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__["a" /* hideElement */])(autoplayButton);
              }
              if (animating) {
                stopAutoplay();
              }
            }
          }
          if (autoplayHoverPause !== autoplayHoverPauseTem) {
            autoplayHoverPause ? Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(container, hoverEvents) : Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(container, hoverEvents);
          }
          if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
            autoplayResetOnVisibility ? Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(doc, visibilityEvent) : Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(doc, visibilityEvent);
          }
          if (autoplayButton && autoplayText !== autoplayTextTem) {
            var i = autoplay ? 1 : 0,
                html = autoplayButton.innerHTML,
                len = html.length - autoplayTextTem[i].length;
            if (html.substring(len) === autoplayTextTem[i]) {
              autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
            }
          }
        }

        // non-meduaqueries: IE8
        // ## update inner wrapper, container, slides if needed
        // set inline styles for inner wrapper & container
        // insert stylesheet (one line) for slides only (since slides are many)
        if (!CSSMQ) {
          // inner wrapper styles
          if (!freeze && (edgePadding !== edgePaddingTem || gutter !== gutterTem)) {
            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);
          }

          if (horizontal && !fixedWidth) {
            // container styles
            if (carousel) {
              container.style.width = getContainerWidth(false, null, items);
            }

            // slide styles
            var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter);

            // remove the last line and
            // add new styles
            Object(__WEBPACK_IMPORTED_MODULE_11__helpers_removeCSSRule_js__["a" /* removeCSSRule */])(sheet, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet) - 1);
            Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
          }

          if (!fixedWidth) {
            needContainerTransform = true;
          }
        }

        if (index !== indexTem) {
          events.emit('indexChanged', info());
          needContainerTransform = true;
        }

        // items is not updated in autoWidth slider
        if (items !== itemsTem || autoWidth) {
          additionalUpdates();
          updateSlidePosition();

          if (navigator.msMaxTouchPoints) {
            setSnapInterval();
          }
        }
      }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }

      // auto height
      if ((autoHeight || !carousel) && !disable) {
        runAutoHeight();
      }

      if (breakpointZoneTem !== breakpointZone) {
        events.emit('newBreakpointEnd', info(e));
      }
    }

    // === INITIALIZATION FUNCTIONS === //
    function getFreeze() {
      if (disable) {
        return true;
      } else if (!freezable) {
        return false;
      } else if (!fixedWidth && !autoWidth) {
        return slideCount <= items;
      } else {
        if (loop) {
          var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount];
          return width - gutter <= viewport;
        } else {
          return !rightBoundary;
        }
      }
    }

    function setBreakpointZone() {
      breakpointZone = 0;
      var i = 0;
      for (var bp in responsive) {
        if (windowWidth >= bp) {
          breakpointZone = i + 1;
        }
        i++;
      }
    }

    // (slideBy, indexMin, indexMax) => index
    var updateIndex = function () {
      return loop ? carousel ?
      // loop + carousel
      function () {
        var leftEdge = indexMin,
            rightEdge = indexMax;

        leftEdge += slideBy;
        rightEdge -= slideBy;

        // adjust edges when has edge padding
        // or fixed-width slider with extra space on the right side
        if (edgePadding) {
          leftEdge += 1;
          rightEdge -= 1;
        } else if (fixedWidth) {
          if (viewport % (fixedWidth + gutter)) {
            rightEdge -= 1;
          }
        }

        if (cloneCount) {
          if (index > rightEdge) {
            index -= slideCount;
          } else if (index < leftEdge) {
            index += slideCount;
          }
        }
      } :
      // loop + gallery
      function () {
        if (index > indexMax) {
          while (index >= indexMin + slideCount) {
            index -= slideCount;
          }
        } else if (index < indexMin) {
          while (index <= indexMax - slideCount) {
            index += slideCount;
          }
        }
      } :
      // non-loop
      function () {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
    }();

    function toggleSlideDisplayAndEdgePadding() {
      var str = 'tns-transparent';

      if (freeze) {
        if (!frozen) {
          // remove edge padding from inner wrapper
          if (edgePadding) {
            innerWrapper.style.margin = '0px';
          }

          // add class tns-transparent to cloned slides
          if (cloneCount) {
            for (var i = cloneCount; i--;) {
              if (carousel) {
                Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(slideItems[i], str);
              }
              Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(slideItems[slideCountNew - i - 1], str);
            }
          }

          frozen = true;
        }
      } else if (frozen) {
        // restore edge padding for inner wrapper
        // for mordern browsers
        if (edgePadding && CSSMQ) {
          innerWrapper.style.margin = '';
        }

        // remove class tns-transparent to cloned slides
        if (cloneCount) {
          for (var i = cloneCount; i--;) {
            if (carousel) {
              Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(slideItems[i], str);
            }
            Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(slideItems[slideCountNew - i - 1], str);
          }
        }

        frozen = false;
      }
    }

    function disableSlider(disable) {
      var len = slideItems.length;

      if (disable) {
        sheet.disabled = true;
        container.className = container.className.replace(classContainer.substring(1), '');
        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_removeElementStyles_js__["a" /* removeElementStyles */])(container);
        if (loop) {
          for (var j = cloneCount; j--;) {
            if (carousel) {
              Object(__WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__["a" /* hideElement */])(slideItems[j]);
            }
            Object(__WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__["a" /* hideElement */])(slideItems[len - j - 1]);
          }
        }

        // vertical slider
        if (!horizontal || !carousel) {
          Object(__WEBPACK_IMPORTED_MODULE_23__helpers_removeElementStyles_js__["a" /* removeElementStyles */])(innerWrapper);
        }

        // gallery
        if (!carousel) {
          for (var i = index, l = index + slideCount; i < l; i++) {
            var item = slideItems[i];
            Object(__WEBPACK_IMPORTED_MODULE_23__helpers_removeElementStyles_js__["a" /* removeElementStyles */])(item);
            Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateIn);
            Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
          }
        }
      } else {
        sheet.disabled = false;
        container.className += classContainer;

        // vertical slider: get offsetTops before container transform
        if (!horizontal || autoWidth) {
          getSlidePositions();
          if (autoWidth) {
            rightBoundary = getRightBoundary();
            indexMax = getIndexMax();
          }
        }

        doContainerTransformSilent();
        if (loop) {
          for (var j = cloneCount; j--;) {
            if (carousel) {
              Object(__WEBPACK_IMPORTED_MODULE_26__helpers_showElement_js__["a" /* showElement */])(slideItems[j]);
            }
            Object(__WEBPACK_IMPORTED_MODULE_26__helpers_showElement_js__["a" /* showElement */])(slideItems[len - j - 1]);
          }
        }

        // gallery
        if (!carousel) {
          for (var i = index, l = index + slideCount; i < l; i++) {
            var item = slideItems[i],
                classN = i < index + items ? animateIn : animateNormal;
            item.style.left = (i - index) * 100 / items + '%';
            Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, classN);
          }
        }
      }
    }

    function lazyLoad() {
      if (lazyload && !disable) {
        var i = index,
            len;

        if (!autoWidth) {
          len = index + items;
        } else {
          var a = index + 1,
              len = a,
              edge = slidePositions[index] + viewport + edgePadding - gutter;
          while (slidePositions[a] < edge) {
            a++;
            len = a;
          }
        }

        if (edgePadding) {
          i -= 1;
          if (!autoWidth) {
            len += 1;
          }
        }

        i = Math.floor(Math.max(i, 0));
        len = Math.ceil(Math.min(len, slideCountNew));

        for (; i < len; i++) {
          Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEachNodeList_js__["a" /* forEachNodeList */])(slideItems[i].querySelectorAll('.tns-lazy-img'), function (img) {
            // stop propagationl transitionend event to container
            var eve = {};
            eve[TRANSITIONEND] = function (e) {
              e.stopPropagation();
            };
            Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(img, eve);

            if (!Object(__WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__["b" /* hasClass */])(img, 'loaded')) {
              img.src = Object(__WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__["a" /* getAttr */])(img, 'data-src');
              Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'loaded');
            }
          });
        }
      }
    }

    function imgLoadedOrError(e) {
      var img = getTarget(e);
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, imgCompleteClass);
      Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(img, imgEvents);
    }

    function getImageArray(slideStart, slideRange) {
      var imgs = [];
      for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
        Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEachNodeList_js__["a" /* forEachNodeList */])(slideItems[i].querySelectorAll('img'), function (img) {
          imgs.push(img);
        });
      }

      return imgs;
    }

    // check if all visible images are loaded
    // and update container height if it's done
    function runAutoHeight() {
      var imgs = autoHeight ? getImageArray(index, items) : getImageArray(cloneCount, slideCount);

      Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function () {
        imageLoaded(imgs, updateInnerWrapperHeight);
      });
    }

    function imageLoaded(imgs, cb) {
      // directly execute callback function if all images are complete
      if (imgsComplete) {
        return cb();
      }

      // check selected image classes otherwise
      imgs.forEach(function (img, index) {
        if (Object(__WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__["b" /* hasClass */])(img, imgCompleteClass)) {
          imgs.splice(index, 1);
        }
      });

      // execute callback function if selected images are all complete
      if (!imgs.length) {
        return cb();
      }

      // otherwise execute this functiona again
      Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function () {
        imageLoaded(imgs, cb);
      });
    }

    function additionalUpdates() {
      lazyLoad();
      updateSlideStatus();
      updateControlsStatus();
      updateNavVisibility();
      updateNavStatus();
    }

    function getMaxSlideHeight(slideStart, slideRange) {
      var heights = [];
      for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
        heights.push(slideItems[i].offsetHeight);
      }

      return Math.max.apply(null, heights);
    }

    // update inner wrapper height
    // 1. get the max-height of the visible slides
    // 2. set transitionDuration to speed
    // 3. update inner wrapper height to max-height
    // 4. set transitionDuration to 0s after transition done
    function updateInnerWrapperHeight() {
      var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount);

      if (innerWrapper.style.height !== maxHeight) {
        innerWrapper.style.height = maxHeight + 'px';
      }
    }

    // get the distance from the top edge of the first slide to each slide
    // (init) => slidePositions
    function getSlidePositions() {
      slidePositions = [0];
      var attr = horizontal ? 'left' : 'top',
          first = slideItems[0].getBoundingClientRect()[attr],
          position;
      for (var i = 1; i < slideCountNew; i++) {
        position = slideItems[i].getBoundingClientRect()[attr];
        slidePositions.push(position - first);
      }
    }

    // update slide
    function updateSlideStatus() {
      var l = index + Math.min(slideCount, items);
      for (var i = slideCountNew; i--;) {
        var item = slideItems[i];

        // visible slides
        if (i >= index && i < l) {
          if (Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(item, 'tabindex')) {
            Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, { 'aria-hidden': 'false' });
            Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(item, ['tabindex']);
            Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, slideActiveClass);
          }
          // hidden slides
        } else {
          if (!Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(item, 'tabindex')) {
            Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
              'aria-hidden': 'true',
              'tabindex': '-1'
            });
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__["b" /* hasClass */])(item, slideActiveClass)) {
            Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, slideActiveClass);
          }
        }
      }
    }

    // gallery: update slide position
    function updateSlidePosition() {
      if (!carousel) {
        var l = index + Math.min(slideCount, items);
        for (var i = slideCountNew; i--;) {
          var item = slideItems[i];

          if (i >= index && i < l) {
            // add transitions to visible slides when adjusting their positions
            Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, 'tns-moving');

            item.style.left = (i - index) * 100 / items + '%';
            Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateIn);
            Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
          } else if (item.style.left) {
            item.style.left = '';
            Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateNormal);
            Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateIn);
          }

          // remove outlet animation
          Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateOut);
        }

        // removing '.tns-moving'
        setTimeout(function () {
          Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEachNodeList_js__["a" /* forEachNodeList */])(slideItems, function (el) {
            Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(el, 'tns-moving');
          });
        }, 300);
      }
    }

    // set tabindex & aria-selected on Nav
    function updateNavStatus() {
      // get current nav
      if (nav) {
        navCurrentIndex = navClicked !== -1 ? navClicked : getAbsIndex();
        navClicked = -1;

        if (navCurrentIndex !== navCurrentIndexCached) {
          var navPrev = navItems[navCurrentIndexCached],
              navCurrent = navItems[navCurrentIndex];

          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navPrev, {
            'tabindex': '-1',
            'aria-selected': 'false'
          });
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navCurrent, {
            'tabindex': '0',
            'aria-selected': 'true'
          });
          Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(navPrev, navActiveClass);
          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(navCurrent, navActiveClass);

          navCurrentIndexCached = navCurrentIndex;
        }
      }
    }

    function getLowerCaseNodeName(el) {
      return el.nodeName.toLowerCase();
    }

    function isButton(el) {
      return getLowerCaseNodeName(el) === 'button';
    }

    function isAriaDisabled(el) {
      return el.getAttribute('aria-disabled') === 'true';
    }

    function disEnableElement(isButton, el, val) {
      if (isButton) {
        el.disabled = val;
      } else {
        el.setAttribute('aria-disabled', val.toString());
      }
    }

    // set 'disabled' to true on controls when reach the edges
    function updateControlsStatus() {
      if (!controls || rewind || loop) {
        return;
      }

      var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton),
          nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton),
          disablePrev = index <= indexMin ? true : false,
          disableNext = !rewind && index >= indexMax ? true : false;

      if (disablePrev && !prevDisabled) {
        disEnableElement(prevIsButton, prevButton, true);
      }
      if (!disablePrev && prevDisabled) {
        disEnableElement(prevIsButton, prevButton, false);
      }
      if (disableNext && !nextDisabled) {
        disEnableElement(nextIsButton, nextButton, true);
      }
      if (!disableNext && nextDisabled) {
        disEnableElement(nextIsButton, nextButton, false);
      }
    }

    // set duration
    function resetDuration(el, str) {
      if (TRANSITIONDURATION) {
        el.style[TRANSITIONDURATION] = str;
      }
    }

    function getFixedSliderWidth() {
      return fixedWidth ? (fixedWidth + gutter) * slideCountNew - gutter : slidePositions[slideCountNew - 1] + slideItems[slideCountNew - 1].getBoundingClientRect().width - gutter;
    }

    function getRightBoundary() {
      var result = -(getFixedSliderWidth() - viewport);
      if (result > 0) {
        result = 0;
      }
      return result;
    }

    function getContainerTransformValue(num) {
      if (num == null) {
        num = index;
      }
      var val;
      if (horizontal && !autoWidth) {
        if (fixedWidth) {
          val = -(fixedWidth + gutter) * num;
        } else {
          var denominator = TRANSFORM ? slideCountNew : items;
          val = -num * 100 / denominator;
        }
      } else {
        val = -slidePositions[num];
      }

      if (hasRightDeadZone) {
        val = Math.max(val, rightBoundary);
      }

      val += horizontal && !autoWidth && !fixedWidth ? '%' : 'px';
      return val;
    }

    function doContainerTransformSilent(val) {
      resetDuration(container, '0s');
      doContainerTransform(val);
      setTimeout(function () {
        resetDuration(container, '');
      }, 10);
    }

    function doContainerTransform(val) {
      if (val == null) {
        val = getContainerTransformValue();
      }
      container.style[transformAttr] = transformPrefix + val + transformPostfix;
    }

    function animateSlide(number, classOut, classIn, isOut) {
      var l = number + items;
      if (!loop) {
        l = Math.min(l, slideCountNew);
      }

      for (var i = number; i < l; i++) {
        var item = slideItems[i];

        // set item positions
        if (!isOut) {
          item.style.left = (i - index) * 100 / items + '%';
        }

        if (animateDelay && TRANSITIONDELAY) {
          item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
        }
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, classOut);
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, classIn);

        if (isOut) {
          slideItemsOut.push(item);
        }
      }
    }

    // make transfer after click/drag:
    // 1. change 'transform' property for mordern browsers
    // 2. change 'left' property for legacy browsers
    var transformCore = function () {
      return carousel ? function () {
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or 
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually 
          // when duration is 0 / container is hidden
          if (!speed || !Object(__WEBPACK_IMPORTED_MODULE_27__helpers_isVisible_js__["a" /* isVisible */])(container)) {
            onTransitionEnd();
          }
        } else {
          // for old browser with non-zero duration
          Object(__WEBPACK_IMPORTED_MODULE_34__helpers_jsTransform_js__["a" /* jsTransform */])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) {
          updateContentWrapperHeight();
        }
      } : function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(slideItems[indexCached], eve);
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually 
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(__WEBPACK_IMPORTED_MODULE_27__helpers_isVisible_js__["a" /* isVisible */])(container)) {
          onTransitionEnd();
        }
      };
    }();

    function render(e, sliderMoved) {
      if (updateIndexBeforeTransform) {
        updateIndex();
      }

      // render when slider was moved (touch or drag) even though index may not change
      if (index !== indexCached || sliderMoved) {
        // events
        events.emit('indexChanged', info());
        events.emit('transitionStart', info());

        // pause autoplay when click or keydown from user
        if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) {
          stopAutoplay();
        }

        running = true;
        transformCore();
      }
    }

    /*
     * Transfer prefixed properties to the same format
     * CSS: -Webkit-Transform => webkittransform
     * JS: WebkitTransform => webkittransform
     * @param {string} str - property
     *
     */
    function strTrans(str) {
      return str.toLowerCase().replace(/-/g, '');
    }

    // AFTER TRANSFORM
    // Things need to be done after a transfer:
    // 1. check index
    // 2. add classes to visible slide
    // 3. disable controls buttons when reach the first/last slide in non-loop slider
    // 4. update nav status
    // 5. lazyload images
    // 6. update container height
    function onTransitionEnd(event) {
      // check running on gallery mode
      // make sure trantionend/animationend events run only once
      if (carousel || running) {
        events.emit('transitionEnd', info(event));

        if (!carousel && slideItemsOut.length > 0) {
          for (var i = 0; i < slideItemsOut.length; i++) {
            var item = slideItemsOut[i];
            // set item positions
            item.style.left = '';

            if (ANIMATIONDELAY && TRANSITIONDELAY) {
              item.style[ANIMATIONDELAY] = '';
              item.style[TRANSITIONDELAY] = '';
            }
            Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateOut);
            Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateNormal);
          }
        }

        /* update slides, nav, controls after checking ...
         * => legacy browsers who don't support 'event' 
         *    have to check event first, otherwise event.target will cause an error 
         * => or 'gallery' mode: 
         *   + event target is slide item
         * => or 'carousel' mode: 
         *   + event target is container, 
         *   + event.property is the same with transform attribute
         */
        if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

          if (!updateIndexBeforeTransform) {
            var indexTem = index;
            updateIndex();
            if (index !== indexTem) {
              events.emit('indexChanged', info());

              doContainerTransformSilent();
            }
          }

          if (autoHeight) {
            runAutoHeight();
          }

          if (nested === 'inner') {
            events.emit('innerLoaded', info());
          }
          running = false;
          indexCached = index;
        }
      }
    }

    // # ACTIONS
    function goTo(targetIndex, e) {
      if (freeze) {
        return;
      }

      // prev slideBy
      if (targetIndex === 'prev') {
        onControlsClick(e, -1);

        // next slideBy
      } else if (targetIndex === 'next') {
        onControlsClick(e, 1);

        // go to exact slide
      } else {
        if (running) {
          onTransitionEnd();
        }

        var absIndex = getAbsIndex(),
            indexGap = 0;

        if (targetIndex === 'first') {
          indexGap = -absIndex;
        } else if (targetIndex === 'last') {
          indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
        } else {
          if (typeof targetIndex !== 'number') {
            targetIndex = parseInt(targetIndex);
          }

          if (!isNaN(targetIndex)) {
            // from directly called goTo function
            if (!e) {
              targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
            }

            indexGap = targetIndex - absIndex;
          }
        }

        // gallery: make sure new page won't overlap with current page
        if (!carousel && indexGap && Math.abs(indexGap) < items) {
          var factor = indexGap > 0 ? 1 : -1;
          indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
        }

        index += indexGap;

        // make sure index is in range
        if (carousel && loop) {
          if (index < indexMin) {
            index += slideCount;
          }
          if (index > indexMax) {
            index -= slideCount;
          }
        }

        // if index is changed, start rendering
        if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
          render(e);
        }
      }
    }

    // on controls click
    function onControlsClick(e, dir) {
      if (running) {
        onTransitionEnd();
      }

      var passEventObject;

      if (!dir) {
        e = getEvent(e);
        var target = e.target || e.srcElement;

        while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
          target = target.parentNode;
        }

        var targetIn = [prevButton, nextButton].indexOf(target);
        if (targetIn >= 0) {
          passEventObject = true;
          dir = targetIn === 0 ? -1 : 1;
        }
      }

      if (rewind) {
        if (index === indexMin && dir === -1) {
          goTo('last', e);
          return;
        } else if (index === indexMax && dir === 1) {
          goTo('first', e);
          return;
        }
      }

      if (dir) {
        index += slideBy * dir;
        if (autoWidth) {
          index = Math.floor(index);
        }
        // pass e when click control buttons or keydown
        render(passEventObject || e && e.type === 'keydown' ? e : null);
      }
    }

    // on nav click
    function onNavClick(e) {
      if (running) {
        onTransitionEnd();
      }

      e = getEvent(e);
      var target = e.target || e.srcElement,
          navIndex;

      // find the clicked nav item
      while (target !== navContainer && !Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(target, 'data-nav')) {
        target = target.parentNode;
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(target, 'data-nav')) {
        navIndex = navClicked = [].indexOf.call(navItems, target);
        goTo(navIndex, e);
      }
    }

    // autoplay functions
    function setAutoplayTimer() {
      autoplayTimer = setInterval(function () {
        onControlsClick(null, autoplayDirection);
      }, autoplayTimeout);

      animating = true;
    }

    function stopAutoplayTimer() {
      clearInterval(autoplayTimer);
      animating = false;
    }

    function updateAutoplayButton(action, txt) {
      Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(autoplayButton, { 'data-action': action });
      autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
    }

    function startAutoplay() {
      setAutoplayTimer();
      if (autoplayButton) {
        updateAutoplayButton('stop', autoplayText[1]);
      }
    }

    function stopAutoplay() {
      stopAutoplayTimer();
      if (autoplayButton) {
        updateAutoplayButton('start', autoplayText[0]);
      }
    }

    // programaitcally play/pause the slider
    function play() {
      if (autoplay && !animating) {
        startAutoplay();
        autoplayUserPaused = false;
      }
    }
    function pause() {
      if (animating) {
        stopAutoplay();
        autoplayUserPaused = true;
      }
    }

    function toggleAutoplay() {
      if (animating) {
        stopAutoplay();
        autoplayUserPaused = true;
      } else {
        startAutoplay();
        autoplayUserPaused = false;
      }
    }

    function onVisibilityChange() {
      if (doc.hidden) {
        if (animating) {
          stopAutoplayTimer();
          autoplayVisibilityPaused = true;
        }
      } else if (autoplayVisibilityPaused) {
        setAutoplayTimer();
        autoplayVisibilityPaused = false;
      }
    }

    function mouseoverPause() {
      if (animating) {
        stopAutoplayTimer();
        autoplayHoverPaused = true;
      }
    }

    function mouseoutRestart() {
      if (autoplayHoverPaused) {
        setAutoplayTimer();
        autoplayHoverPaused = false;
      }
    }

    // keydown events on document 
    function onDocumentKeydown(e) {
      e = getEvent(e);
      switch (e.keyCode) {
        case KEYS.LEFT:
          onControlsClick(e, -1);
          break;
        case KEYS.RIGHT:
          onControlsClick(e, 1);
      }
    }

    // on key control
    function onControlsKeydown(e) {
      e = getEvent(e);
      var code = e.keyCode;

      switch (code) {
        case KEYS.LEFT:
        case KEYS.UP:
        case KEYS.PAGEUP:
          if (!prevButton.disabled) {
            onControlsClick(e, -1);
          }
          break;
        case KEYS.RIGHT:
        case KEYS.DOWN:
        case KEYS.PAGEDOWN:
          if (!nextButton.disabled) {
            onControlsClick(e, 1);
          }
          break;
        case KEYS.HOME:
          goTo('first', e);
          break;
        case KEYS.END:
          goTo('last', e);
          break;
      }
    }

    // set focus
    function setFocus(focus) {
      focus.focus();
    }

    // on key nav
    function onNavKeydown(e) {
      var curElement = doc.activeElement;
      if (!Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(curElement, 'data-nav')) {
        return;
      }

      e = getEvent(e);
      var code = e.keyCode,
          navIndex = [].indexOf.call(navItems, curElement),
          len = visibleNavIndexes.length,
          current = visibleNavIndexes.indexOf(navIndex);

      if (options.navContainer) {
        len = slideCount;
        current = navIndex;
      }

      function getNavIndex(num) {
        return options.navContainer ? num : visibleNavIndexes[num];
      }

      switch (code) {
        case KEYS.LEFT:
        case KEYS.PAGEUP:
          if (current > 0) {
            setFocus(navItems[getNavIndex(current - 1)]);
          }
          break;

        case KEYS.UP:
        case KEYS.HOME:
          if (current > 0) {
            setFocus(navItems[getNavIndex(0)]);
          }
          break;

        case KEYS.RIGHT:
        case KEYS.PAGEDOWN:
          if (current < len - 1) {
            setFocus(navItems[getNavIndex(current + 1)]);
          }
          break;

        case KEYS.DOWN:
        case KEYS.END:
          if (current < len - 1) {
            setFocus(navItems[getNavIndex(len - 1)]);
          }
          break;

        // Can't use onNavClick here,
        // Because onNavClick require event.target as nav items
        case KEYS.ENTER:
        case KEYS.SPACE:
          navClicked = navIndex;
          goTo(navIndex, e);
          break;
      }
    }

    function getEvent(e) {
      e = e || win.event;
      return isTouchEvent(e) ? e.changedTouches[0] : e;
    }
    function getTarget(e) {
      return e.target || win.event.srcElement;
    }

    function isTouchEvent(e) {
      return e.type.indexOf('touch') >= 0;
    }

    function preventDefaultBehavior(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }

    function onPanStart(e) {
      if (running) {
        onTransitionEnd();
      }

      panStart = true;
      if (carousel) {
        Object(__WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__["a" /* caf */])(rafIndex);
        rafIndex = 0;
      }

      var $ = getEvent(e);
      events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

      if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
        preventDefaultBehavior(e);
      }

      lastPosition.x = initPosition.x = parseInt($.clientX);
      lastPosition.y = initPosition.y = parseInt($.clientY);
      if (carousel) {
        translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, '').replace(transformPostfix, ''));
        resetDuration(container, '0s');
      }
    }

    function onPanMove(e) {
      if (panStart) {
        var $ = getEvent(e);
        lastPosition.x = parseInt($.clientX);
        lastPosition.y = parseInt($.clientY);

        if (carousel && !rafIndex) {
          rafIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function () {
            panUpdate(e);
          });
        }
      }
    }

    function updateMoveDirectionExpected() {
      if (moveDirectionExpected === '?' && lastPosition.x !== initPosition.x && lastPosition.y !== initPosition.y) {
        moveDirectionExpected = Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getTouchDirection_js__["a" /* getTouchDirection */])(Object(__WEBPACK_IMPORTED_MODULE_13__helpers_toDegree_js__["a" /* toDegree */])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
      }
    }

    function panUpdate(e) {
      if (!moveDirectionExpected) {
        panStart = false;
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__["a" /* caf */])(rafIndex);
      if (panStart) {
        rafIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function () {
          panUpdate(e);
        });
      }

      updateMoveDirectionExpected();
      if (moveDirectionExpected) {
        try {
          if (e.type) {
            events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e));
          }
        } catch (err) {}

        var x = translateInit,
            dist = getDist(lastPosition, initPosition);
        if (!horizontal || fixedWidth || autoWidth) {
          x += dist;
          x += 'px';
        } else {
          var percentageX = TRANSFORM ? dist * items * 100 / (viewport * slideCountNew) : dist * 100 / viewport;
          x += percentageX;
          x += '%';
        }

        container.style[transformAttr] = transformPrefix + x + transformPostfix;
      }
    }

    function onPanEnd(e) {
      if (panStart) {
        if (carousel) {
          Object(__WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__["a" /* caf */])(rafIndex);
          resetDuration(container, '');
        }
        panStart = false;

        var $ = getEvent(e);
        lastPosition.x = parseInt($.clientX);
        lastPosition.y = parseInt($.clientY);
        var dist = getDist(lastPosition, initPosition);

        if (Math.abs(dist) >= 5) {
          // drag vs click
          if (!isTouchEvent(e)) {
            // prevent "click"
            var target = getTarget(e);
            Object(__WEBPACK_IMPORTED_MODULE_31__helpers_addEvents_js__["a" /* addEvents */])(target, { 'click': function preventClick(e) {
                preventDefaultBehavior(e);
                Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(target, { 'click': preventClick });
              } });
          }

          if (carousel) {
            rafIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function () {
              if (horizontal && !autoWidth) {
                var indexMoved = -dist * items / viewport;
                indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                index += indexMoved;
              } else {
                var moved = -(translateInit + dist);
                if (moved <= 0) {
                  index = indexMin;
                } else if (moved >= slidePositions[slidePositions.length - 1]) {
                  index = indexMax;
                } else {
                  var i = 0;
                  while (i < slideCountNew && moved >= slidePositions[i]) {
                    index = i;
                    if (moved > slidePositions[i] && dist < 0) {
                      index += 1;
                    }
                    i++;
                  }
                }
              }

              render(e, dist);
              events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
            });
          } else {
            updateMoveDirectionExpected();
            if (moveDirectionExpected) {
              onControlsClick(e, dist > 0 ? -1 : 1);
            }
          }
        }
      }

      if (swipeAngle) {
        moveDirectionExpected = '?';
      } // reset
    }

    // === RESIZE FUNCTIONS === //
    // (slidePositions, index, items) => vertical_conentWrapper.height
    function updateContentWrapperHeight() {
      innerWrapper.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
    }

    /*
     * get nav item indexes per items
     * add 1 more if the nav items cann't cover all slides
     * [0, 1, 2, 3, 4] / 3 => [0, 3]
     */
    function getVisibleNavIndex() {
      // reset visibleNavIndexes
      visibleNavIndexes = [];

      var absIndexMin = getAbsIndex() % items;
      while (absIndexMin < slideCount) {
        if (carousel && !loop && absIndexMin + items > slideCount) {
          absIndexMin = slideCount - items;
        }
        visibleNavIndexes.push(absIndexMin);
        absIndexMin += items;
      }

      // nav count * items < slide count means
      // some slides can not be displayed only by nav clicking
      if (loop && visibleNavIndexes.length * items < slideCount || !loop && visibleNavIndexes[0] > 0) {
        visibleNavIndexes.unshift(0);
      }
    }

    /*
     * 1. update visible nav items list
     * 2. add "hidden" attributes to previous visible nav items
     * 3. remove "hidden" attrubutes to new visible nav items
     */
    function updateNavVisibility() {
      if (!nav || navAsThumbnails) {
        return;
      }
      getVisibleNavIndex();

      if (visibleNavIndexes !== visibleNavIndexesCached) {
        Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEachNodeList_js__["a" /* forEachNodeList */])(navItems, function (el, i) {
          if (visibleNavIndexes.indexOf(i) < 0) {
            Object(__WEBPACK_IMPORTED_MODULE_25__helpers_hideElement_js__["a" /* hideElement */])(el);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_26__helpers_showElement_js__["a" /* showElement */])(el);
          }
        });

        // cache visible nav indexes
        visibleNavIndexesCached = visibleNavIndexes;
      }
    }

    function info(e) {
      return {
        container: container,
        slideItems: slideItems,
        navContainer: navContainer,
        navItems: navItems,
        controlsContainer: controlsContainer,
        hasControls: hasControls,
        prevButton: prevButton,
        nextButton: nextButton,
        items: items,
        slideBy: slideBy,
        cloneCount: cloneCount,
        slideCount: slideCount,
        slideCountNew: slideCountNew,
        index: index,
        indexCached: indexCached,
        navCurrentIndex: navCurrentIndex,
        navCurrentIndexCached: navCurrentIndexCached,
        visibleNavIndexes: visibleNavIndexes,
        visibleNavIndexesCached: visibleNavIndexesCached,
        sheet: sheet,
        event: e || {}
      };
    }

    return {
      getInfo: info,
      events: events,
      goTo: goTo,
      play: play,
      pause: pause,
      isOn: isOn,
      updateSliderHeight: updateInnerWrapperHeight,
      rebuild: function rebuild() {
        return tns(options);
      },

      destroy: function destroy() {
        // remove win event listeners
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(win, { 'resize': onResize });

        // remove arrowKeys eventlistener
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(doc, docmentKeydownEvent);

        // sheet
        sheet.disabled = true;

        // cloned items
        if (loop) {
          for (var j = cloneCount; j--;) {
            if (carousel) {
              slideItems[0].remove();
            }
            slideItems[slideItems.length - 1].remove();
          }
        }

        // Slide Items
        var slideClasses = ['tns-item', slideActiveClass];
        if (!carousel) {
          slideClasses = slideClasses.concat('tns-normal', animateIn);
        }

        for (var i = slideCount; i--;) {
          var slide = slideItems[i];
          if (slide.id.indexOf(slideId + '-item') >= 0) {
            slide.id = '';
          }

          slideClasses.forEach(function (cl) {
            Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(slide, cl);
          });
        }
        Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(slideItems, ['style', 'aria-hidden', 'tabindex']);
        slideItems = slideId = slideCount = slideCountNew = cloneCount = null;

        // controls
        if (controls) {
          Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(controlsContainer, controlsEvents);
          if (options.controlsContainer) {
            Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(controlsContainer, ['aria-label', 'tabindex']);
            Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(controlsContainer.children, ['aria-controls', 'aria-disabled', 'tabindex']);
          }
          controlsContainer = prevButton = nextButton = null;
        }

        // nav
        if (nav) {
          Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(navContainer, navEvents);
          if (options.navContainer) {
            Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(navContainer, ['aria-label']);
            Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(navItems, ['aria-selected', 'aria-controls', 'tabindex']);
          }
          navContainer = navItems = null;
        }

        // auto
        if (autoplay) {
          clearInterval(autoplayTimer);
          if (autoplayButton) {
            Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(autoplayButton, { 'click': toggleAutoplay });
          }
          Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(container, hoverEvents);
          Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(container, visibilityEvent);
          if (options.autoplayButton) {
            Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(autoplayButton, ['data-action']);
          }
        }

        // container
        container.id = containerIdCached || '';
        container.className = container.className.replace(classContainer, '');
        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_removeElementStyles_js__["a" /* removeElementStyles */])(container);
        if (carousel && TRANSITIONEND) {
          var eve = {};
          eve[TRANSITIONEND] = onTransitionEnd;
          Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(container, eve);
        }
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(container, touchEvents);
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_removeEvents_js__["a" /* removeEvents */])(container, dragEvents);

        // outerWrapper
        containerParent.insertBefore(container, outerWrapper);
        outerWrapper.remove();
        outerWrapper = innerWrapper = container = index = indexCached = items = slideBy = navCurrentIndex = navCurrentIndexCached = hasControls = visibleNavIndexes = visibleNavIndexesCached = this.getInfo = this.events = this.goTo = this.play = this.pause = this.destroy = null;
        this.isOn = isOn = false;
      }
    };
  };

  /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return raf;
  });
  var win = window;

  var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function (cb) {
    return setTimeout(cb, 16);
  };

  /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "b", function () {
    return hasClass;
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__ = __webpack_require__(45);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
    return __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__["a"];
  });

  var hasClass = __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__["a" /* classListSupport */] ? function (el, str) {
    return el.classList.contains(str);
  } : function (el, str) {
    return el.className.indexOf(str) >= 0;
  };

  /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = hasAttr;
  function hasAttr(el, attr) {
    return el.hasAttribute(attr);
  }

  /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* unused harmony export clickInsideElement */
  /* harmony export (immutable) */
  __webpack_exports__["a"] = setNewImg;
  function clickInsideElement(e, elClass) {
    var target = e.target;

    function checkElement(elem) {
      if (elem.classList && elem.classList.contains(elClass)) {
        return elem;
      }

      if (elem.parentNode) {
        return checkElement(elem.parentNode);
      }

      return false;
    }

    return checkElement(target);
  }

  function setNewImg(_ref) {
    var imgEl = _ref.imgEl,
        descriptionEl = _ref.descriptionEl,
        link = _ref.link,
        description = _ref.description;

    descriptionEl.classList.remove('empty');
    descriptionEl.textContent = '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...';
    imgEl.src = '';

    var newImg = document.createElement('img');
    newImg.onload = function () {
      imgEl.src = link;
      if (description && description !== '') {
        descriptionEl.textContent = description;
      } else {
        descriptionEl.classList.add('empty');
      }
    };
    newImg.src = link;
  }

  /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /**
   * @this {Promise}
   */

  function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        return constructor.reject(reason);
      });
    });
  }

  /* harmony default export */__webpack_exports__["a"] = finallyConstructor;

  /***/
},
/* 10 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return docElement;
  });
  var docElement = document.documentElement;

  /***/
},
/* 11 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = setAttrs;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__isNodeList_js__ = __webpack_require__(12);

  function setAttrs(els, attrs) {
    els = Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList_js__["a" /* isNodeList */])(els) || els instanceof Array ? els : [els];
    if (Object.prototype.toString.call(attrs) !== '[object Object]') {
      return;
    }

    for (var i = els.length; i--;) {
      for (var key in attrs) {
        els[i].setAttribute(key, attrs[key]);
      }
    }
  }

  /***/
},
/* 12 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = isNodeList;
  function isNodeList(el) {
    // Only NodeList has the "item()" function
    return typeof el.item !== "undefined";
  }

  /***/
},
/* 13 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = removeAttrs;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__isNodeList_js__ = __webpack_require__(12);

  function removeAttrs(els, attrs) {
    els = Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList_js__["a" /* isNodeList */])(els) || els instanceof Array ? els : [els];
    attrs = attrs instanceof Array ? attrs : [attrs];

    var attrLength = attrs.length;
    for (var i = els.length; i--;) {
      for (var j = attrLength; j--;) {
        els[i].removeAttribute(attrs[j]);
      }
    }
  }

  /***/
},
/* 14 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return passiveOption;
  });
  // Test via a getter in the options object to see if the passive property is accessed
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {}
  var passiveOption = supportsPassive ? { passive: true } : false;

  /***/
},
/* 15 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = ajaxGet;
  /* harmony export (immutable) */__webpack_exports__["b"] = ajaxPost;
  var checkStatus = function checkStatus(response) {
    if (response.ok) {
      return response;
    }

    throw new Error(response.status + ': ' + response.statusText);
  };
  var toJSON = function toJSON(res) {
    return res.json();
  };

  function ajaxGet(link, onLoad, onError) {
    for (var _len = arguments.length, data = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      data[_key - 3] = arguments[_key];
    }

    var requestSettings = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    };
    fetch(link, requestSettings).then(checkStatus).then(toJSON).then(function (response) {
      return onLoad(response, data);
    }).catch(function (err) {
      return onError('Cтатус ответа: : ' + err.status + ' ' + err.statusText);
    });
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';

    // xhr.addEventListener('load', function () {
    //   switch (xhr.status) {
    //     case 200:
    //       onLoad(xhr.response, data);
    //       break;

    //     default:
    //       onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
    //   }
    // });

    // xhr.addEventListener('error', function () {
    //   onError('Что-то пошло не так');
    // });

    // xhr.addEventListener('timeout', function () {
    //   onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    // });


    // xhr.open('GET', link);
    // xhr.send();
  };

  function ajaxPost(link, onLoad, onError, data) {
    var requestSettings = {
      body: data,
      method: 'POST'
    };
    fetch(link, requestSettings).then(checkStatus).then(toJSON).then(function (response) {
      return onLoad(response, data);
    }).catch(function (err) {
      return onError('Cтатус ответа: : ' + err.status + ' ' + err.statusText);
    });
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';

    // xhr.addEventListener('load', function () {
    //   switch (xhr.status) {
    //     case 200:
    //       onLoad(xhr.response);
    //       break;

    //     default:
    //       onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
    //   }
    // });

    // xhr.addEventListener('error', function () {
    //   onError('Что-то пошло не так');
    // });

    // xhr.addEventListener('timeout', function () {
    //   onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    // });


    // xhr.open('POST', link);
    // xhr.send(data);
  }

  /***/
},
/* 16 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  var popup = null;
  var cb = null;

  var isEscPressed = function isEscPressed(e) {
    return e.keyCode == 27;
  };

  var closeByEsc = function closeByEsc(e) {
    if (isEscPressed(e)) {
      closePopup();
    }
  };

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup__close')) {
      closePopup();
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup')) {
      closePopup();
    }
  });

  function openPopup(incomePopup, callback) {
    popup = incomePopup;
    cb = callback;

    popup.classList.add('popup--active');
    window.addEventListener('keydown', closeByEsc);
  }

  function closePopup() {
    if (!popup) return;

    popup.classList.remove('popup--active');
    window.removeEventListener('keydown', closeByEsc);

    if (cb) cb();

    popup = null;
    cb = null;
  }

  var popupActions = {
    open: openPopup,
    close: closePopup
    /* harmony export (immutable) */ };__webpack_exports__["a"] = popupActions;

  /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

  module.exports = __webpack_require__(18);

  /***/
},
/* 18 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_polyfills__ = __webpack_require__(19);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_picturefill__ = __webpack_require__(26);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_picturefill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_picturefill__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__layout_menu__ = __webpack_require__(27);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__layout_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__layout_menu__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__layout_search__ = __webpack_require__(28);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__layout_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__layout_search__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__index_special_offers__ = __webpack_require__(29);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__index_partners__ = __webpack_require__(61);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__stock_stock__ = __webpack_require__(62);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__stock_stock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__stock_stock__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__news_news_load__ = __webpack_require__(63);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__news_carousel__ = __webpack_require__(64);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__product_tabs__ = __webpack_require__(65);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__product_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__product_tabs__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__product_ask__ = __webpack_require__(66);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__product_images__ = __webpack_require__(67);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__producer_images__ = __webpack_require__(68);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__contacts_map__ = __webpack_require__(69);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__contacts_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__contacts_map__);

  // import './components/styles';


  /***/
},
/* 19 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0_promise_polyfill_src_polyfill__ = __webpack_require__(20);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_whatwg_fetch__ = __webpack_require__(25);
  // promise

  // fetch


  // matches
  (function () {

    // проверяем поддержку
    if (!Element.prototype.matches) {

      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
    }
  })();

  // closest
  (function () {

    // проверяем поддержку
    if (!Element.prototype.closest) {

      // реализуем
      Element.prototype.closest = function (css) {
        var node = this;

        while (node) {
          if (node.matches(css)) return node;else node = node.parentElement;
        }
        return null;
      };
    }
  })();

  /***/
},
/* 20 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (global) {
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(21);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__finally__ = __webpack_require__(9);

    /** @suppress {undefinedVars} */
    var globalNS = function () {
      // the only reliable means to get the global object is
      // `Function('return this')()`
      // However, this causes CSP violations in Chrome apps.
      if (typeof self !== 'undefined') {
        return self;
      }
      if (typeof window !== 'undefined') {
        return window;
      }
      if (typeof global !== 'undefined') {
        return global;
      }
      throw new Error('unable to locate global object');
    }();

    if (!('Promise' in globalNS)) {
      globalNS['Promise'] = __WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */];
    } else if (!globalNS.Promise.prototype['finally']) {
      globalNS.Promise.prototype['finally'] = __WEBPACK_IMPORTED_MODULE_1__finally__["a" /* default */];
    }

    /* WEBPACK VAR INJECTION */
  }).call(__webpack_exports__, __webpack_require__(3));

  /***/
},
/* 21 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (setImmediate) {
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__finally__ = __webpack_require__(9);

    // Store setTimeout reference so promise-polyfill will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var setTimeoutFunc = setTimeout;

    function noop() {}

    // Polyfill for Function.prototype.bind
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }

    /**
     * @constructor
     * @param {Function} fn
     */
    function Promise(fn) {
      if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function') throw new TypeError('not a function');
      /** @type {!number} */
      this._state = 0;
      /** @type {!boolean} */
      this._handled = false;
      /** @type {Promise|undefined} */
      this._value = undefined;
      /** @type {!Array<!Function>} */
      this._deferreds = [];

      doResolve(fn, this);
    }

    function handle(self, deferred) {
      while (self._state === 3) {
        self = self._value;
      }
      if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
      }
      self._handled = true;
      Promise._immediateFn(function () {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
          return;
        }
        var ret;
        try {
          ret = cb(self._value);
        } catch (e) {
          reject(deferred.promise, e);
          return;
        }
        resolve(deferred.promise, ret);
      });
    }

    function resolve(self, newValue) {
      try {
        // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
        if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (newValue instanceof Promise) {
            self._state = 3;
            self._value = newValue;
            finale(self);
            return;
          } else if (typeof then === 'function') {
            doResolve(bind(then, newValue), self);
            return;
          }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
      } catch (e) {
        reject(self, e);
      }
    }

    function reject(self, newValue) {
      self._state = 2;
      self._value = newValue;
      finale(self);
    }

    function finale(self) {
      if (self._state === 2 && self._deferreds.length === 0) {
        Promise._immediateFn(function () {
          if (!self._handled) {
            Promise._unhandledRejectionFn(self._value);
          }
        });
      }

      for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
      }
      self._deferreds = null;
    }

    /**
     * @constructor
     */
    function Handler(onFulfilled, onRejected, promise) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.promise = promise;
    }

    /**
     * Take a potentially misbehaving resolver function and make sure
     * onFulfilled and onRejected are only called once.
     *
     * Makes no guarantees about asynchrony.
     */
    function doResolve(fn, self) {
      var done = false;
      try {
        fn(function (value) {
          if (done) return;
          done = true;
          resolve(self, value);
        }, function (reason) {
          if (done) return;
          done = true;
          reject(self, reason);
        });
      } catch (ex) {
        if (done) return;
        done = true;
        reject(self, ex);
      }
    }

    Promise.prototype['catch'] = function (onRejected) {
      return this.then(null, onRejected);
    };

    Promise.prototype.then = function (onFulfilled, onRejected) {
      // @ts-ignore
      var prom = new this.constructor(noop);

      handle(this, new Handler(onFulfilled, onRejected, prom));
      return prom;
    };

    Promise.prototype['finally'] = __WEBPACK_IMPORTED_MODULE_0__finally__["a" /* default */];

    Promise.all = function (arr) {
      return new Promise(function (resolve, reject) {
        if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve([]);
        var remaining = args.length;

        function res(i, val) {
          try {
            if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }

        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };

    Promise.resolve = function (value) {
      if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
        return value;
      }

      return new Promise(function (resolve) {
        resolve(value);
      });
    };

    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };

    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };

    // Use polyfill for setImmediate for performance gains
    Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
      setImmediate(fn);
    } || function (fn) {
      setTimeoutFunc(fn, 0);
    };

    Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
      if (typeof console !== 'undefined' && console) {
        console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
      }
    };

    /* harmony default export */__webpack_exports__["a"] = Promise;

    /* WEBPACK VAR INJECTION */
  }).call(__webpack_exports__, __webpack_require__(22).setImmediate);

  /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function (global) {
    var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
    var apply = Function.prototype.apply;

    // DOM APIs, for completeness

    exports.setTimeout = function () {
      return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
    };
    exports.setInterval = function () {
      return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
    };
    exports.clearTimeout = exports.clearInterval = function (timeout) {
      if (timeout) {
        timeout.close();
      }
    };

    function Timeout(id, clearFn) {
      this._id = id;
      this._clearFn = clearFn;
    }
    Timeout.prototype.unref = Timeout.prototype.ref = function () {};
    Timeout.prototype.close = function () {
      this._clearFn.call(scope, this._id);
    };

    // Does not start the time, just sets up the members needed.
    exports.enroll = function (item, msecs) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = msecs;
    };

    exports.unenroll = function (item) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = -1;
    };

    exports._unrefActive = exports.active = function (item) {
      clearTimeout(item._idleTimeoutId);

      var msecs = item._idleTimeout;
      if (msecs >= 0) {
        item._idleTimeoutId = setTimeout(function onTimeout() {
          if (item._onTimeout) item._onTimeout();
        }, msecs);
      }
    };

    // setimmediate attaches itself to the global object
    __webpack_require__(23);
    // On some exotic environments, it's not clear which object `setimmediate` was
    // able to install onto.  Search each possibility in the same order as the
    // `setimmediate` library.
    exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
    exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;

    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(3));

  /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function (global, process) {
    (function (global, undefined) {
      "use strict";

      if (global.setImmediate) {
        return;
      }

      var nextHandle = 1; // Spec says greater than zero
      var tasksByHandle = {};
      var currentlyRunningATask = false;
      var doc = global.document;
      var registerImmediate;

      function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
          callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
      }

      function clearImmediate(handle) {
        delete tasksByHandle[handle];
      }

      function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
          case 0:
            callback();
            break;
          case 1:
            callback(args[0]);
            break;
          case 2:
            callback(args[0], args[1]);
            break;
          case 3:
            callback(args[0], args[1], args[2]);
            break;
          default:
            callback.apply(undefined, args);
            break;
        }
      }

      function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
          // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
          // "too much recursion" error.
          setTimeout(runIfPresent, 0, handle);
        } else {
          var task = tasksByHandle[handle];
          if (task) {
            currentlyRunningATask = true;
            try {
              run(task);
            } finally {
              clearImmediate(handle);
              currentlyRunningATask = false;
            }
          }
        }
      }

      function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
          process.nextTick(function () {
            runIfPresent(handle);
          });
        };
      }

      function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
          var postMessageIsAsynchronous = true;
          var oldOnMessage = global.onmessage;
          global.onmessage = function () {
            postMessageIsAsynchronous = false;
          };
          global.postMessage("", "*");
          global.onmessage = oldOnMessage;
          return postMessageIsAsynchronous;
        }
      }

      function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
          if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
            runIfPresent(+event.data.slice(messagePrefix.length));
          }
        };

        if (global.addEventListener) {
          global.addEventListener("message", onGlobalMessage, false);
        } else {
          global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
          global.postMessage(messagePrefix + handle, "*");
        };
      }

      function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
          var handle = event.data;
          runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
          channel.port2.postMessage(handle);
        };
      }

      function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
          // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
          // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
          var script = doc.createElement("script");
          script.onreadystatechange = function () {
            runIfPresent(handle);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
          };
          html.appendChild(script);
        };
      }

      function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
          setTimeout(runIfPresent, 0, handle);
        };
      }

      // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
      var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
      attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

      // Don't get fooled by e.g. browserify environments.
      if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
      } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
      } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
      } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
      } else {
        // For older browsers
        installSetTimeoutImplementation();
      }

      attachTo.setImmediate = setImmediate;
      attachTo.clearImmediate = clearImmediate;
    })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);

    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(3), __webpack_require__(24));

  /***/
},
/* 24 */
/***/function (module, exports) {

  // shim for using process in browser
  var process = module.exports = {};

  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.

  var cachedSetTimeout;
  var cachedClearTimeout;

  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }
  (function () {
    try {
      if (typeof setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if (typeof clearTimeout === 'function') {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      //normal enviroments in sane situations
      return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      //normal enviroments in sane situations
      return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }

  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }

  process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  };

  // v8 likes predictible objects
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};

  function noop() {}

  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;

  process.listeners = function (name) {
    return [];
  };

  process.binding = function (name) {
    throw new Error('process.binding is not supported');
  };

  process.cwd = function () {
    return '/';
  };
  process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function () {
    return 0;
  };

  /***/
},
/* 25 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* unused harmony export Headers */
  /* unused harmony export Request */
  /* unused harmony export Response */
  /* unused harmony export DOMException */
  /* unused harmony export fetch */

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
  }

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  var DOMException = self.DOMException;
  try {
    new DOMException();
  } catch (err) {
    DOMException = function DOMException(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
  }

  function fetch(input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new DOMException('Aborted', 'AbortError'));
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function () {
        reject(new DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function () {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  /***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__; /*! picturefill - v3.0.2 - 2016-02-12
                                     * https://scottjehl.github.io/picturefill/
                                     * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
                                     */
  /*! Gecko-Picture - v1.0
   * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
   * Firefox's early picture implementation (prior to FF41) is static and does
   * not react to viewport changes. This tiny module fixes this.
   */
  (function (window) {
    /*jshint eqnull:true */
    var ua = navigator.userAgent;

    if (window.HTMLPictureElement && /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) {
      addEventListener("resize", function () {
        var timer;

        var dummySrc = document.createElement("source");

        var fixRespimg = function fixRespimg(img) {
          var source, sizes;
          var picture = img.parentNode;

          if (picture.nodeName.toUpperCase() === "PICTURE") {
            source = dummySrc.cloneNode();

            picture.insertBefore(source, picture.firstElementChild);
            setTimeout(function () {
              picture.removeChild(source);
            });
          } else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
            img._pfLastSize = img.offsetWidth;
            sizes = img.sizes;
            img.sizes += ",100vw";
            setTimeout(function () {
              img.sizes = sizes;
            });
          }
        };

        var findPictureImgs = function findPictureImgs() {
          var i;
          var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
          for (i = 0; i < imgs.length; i++) {
            fixRespimg(imgs[i]);
          }
        };
        var onResize = function onResize() {
          clearTimeout(timer);
          timer = setTimeout(findPictureImgs, 99);
        };
        var mq = window.matchMedia && matchMedia("(orientation: landscape)");
        var init = function init() {
          onResize();

          if (mq && mq.addListener) {
            mq.addListener(onResize);
          }
        };

        dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

        if (/^[c|i]|d$/.test(document.readyState || "")) {
          init();
        } else {
          document.addEventListener("DOMContentLoaded", init);
        }

        return onResize;
      }());
    }
  })(window);

  /*! Picturefill - v3.0.2
   * http://scottjehl.github.io/picturefill
   * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
   *  License: MIT
   */

  (function (window, document, undefined) {
    // Enable strict mode
    "use strict";

    // HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)

    document.createElement("picture");

    var warn, eminpx, alwaysCheckWDescriptor, evalId;
    // local object for method references and testing exposure
    var pf = {};
    var isSupportTestReady = false;
    var noop = function noop() {};
    var image = document.createElement("img");
    var getImgAttr = image.getAttribute;
    var setImgAttr = image.setAttribute;
    var removeImgAttr = image.removeAttribute;
    var docElem = document.documentElement;
    var types = {};
    var cfg = {
      //resource selection:
      algorithm: ""
    };
    var srcAttr = "data-pfsrc";
    var srcsetAttr = srcAttr + "set";
    // ua sniffing is done for undetectable img loading features,
    // to do some non crucial perf optimizations
    var ua = navigator.userAgent;
    var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35;
    var curSrcProp = "currentSrc";
    var regWDesc = /\s+\+?\d+(e\d+)?w/;
    var regSize = /(\([^)]+\))?\s*(.+)/;
    var setOptions = window.picturefillCFG;
    /**
     * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
     */
    // baseStyle also used by getEmValue (i.e.: width: 1em is important)
    var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
    var fsCss = "font-size:100%!important;";
    var isVwDirty = true;

    var cssCache = {};
    var sizeLengthCache = {};
    var DPR = window.devicePixelRatio;
    var units = {
      px: 1,
      "in": 96
    };
    var anchor = document.createElement("a");
    /**
     * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
     * @type {boolean}
     */
    var alreadyRun = false;

    // Reusable, non-"g" Regexes

    // (Don't use \s, to avoid matching non-breaking space.)
    var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
        regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
        regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
        regexTrailingCommas = /[,]+$/,
        regexNonNegativeInteger = /^\d+$/,


    // ( Positive or negative or unsigned integers or decimals, without or without exponents.
    // Must include at least one digit.
    // According to spec tests any decimal point must be followed by a digit.
    // No leading plus sign is allowed.)
    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

    var on = function on(obj, evt, fn, capture) {
      if (obj.addEventListener) {
        obj.addEventListener(evt, fn, capture || false);
      } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
      }
    };

    /**
     * simple memoize function:
     */

    var memoize = function memoize(fn) {
      var cache = {};
      return function (input) {
        if (!(input in cache)) {
          cache[input] = fn(input);
        }
        return cache[input];
      };
    };

    // UTILITY FUNCTIONS

    // Manual is faster than RegEx
    // http://jsperf.com/whitespace-character/5
    function isSpace(c) {
      return c === ' ' || // space
      c === '\t' || // horizontal tab
      c === '\n' || // new line
      c === '\f' || // form feed
      c === '\r'; // carriage return
    }

    /**
     * gets a mediaquery and returns a boolean or gets a css length and returns a number
     * @param css mediaqueries or css length
     * @returns {boolean|number}
     *
     * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
     */
    var evalCSS = function () {

      var regLength = /^([\d\.]+)(em|vw|px)$/;
      var replace = function replace() {
        var args = arguments,
            index = 0,
            string = args[0];
        while (++index in args) {
          string = string.replace(args[index], args[++index]);
        }
        return string;
      };

      var buildStr = memoize(function (css) {

        return "return " + replace((css || "").toLowerCase(),
        // interpret `and`
        /\band\b/g, "&&",

        // interpret `,`
        /,/g, "||",

        // interpret `min-` as >=
        /min-([a-z-\s]+):/g, "e.$1>=",

        // interpret `max-` as <=
        /max-([a-z-\s]+):/g, "e.$1<=",

        //calc value
        /calc([^)]+)/g, "($1)",

        // interpret css values
        /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
        //make eval less evil
        /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
      });

      return function (css, length) {
        var parsedLength;
        if (!(css in cssCache)) {
          cssCache[css] = false;
          if (length && (parsedLength = css.match(regLength))) {
            cssCache[css] = parsedLength[1] * units[parsedLength[2]];
          } else {
            /*jshint evil:true */
            try {
              cssCache[css] = new Function("e", buildStr(css))(units);
            } catch (e) {}
            /*jshint evil:false */
          }
        }
        return cssCache[css];
      };
    }();

    var setResolution = function setResolution(candidate, sizesattr) {
      if (candidate.w) {
        // h = means height: || descriptor.type === 'h' do not handle yet...
        candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
        candidate.res = candidate.w / candidate.cWidth;
      } else {
        candidate.res = candidate.d;
      }
      return candidate;
    };

    /**
     *
     * @param opt
     */
    var picturefill = function picturefill(opt) {

      if (!isSupportTestReady) {
        return;
      }

      var elements, i, plen;

      var options = opt || {};

      if (options.elements && options.elements.nodeType === 1) {
        if (options.elements.nodeName.toUpperCase() === "IMG") {
          options.elements = [options.elements];
        } else {
          options.context = options.elements;
          options.elements = null;
        }
      }

      elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);

      if (plen = elements.length) {

        pf.setupRun(options);
        alreadyRun = true;

        // Loop through all elements
        for (i = 0; i < plen; i++) {
          pf.fillImg(elements[i], options);
        }

        pf.teardownRun(options);
      }
    };

    /**
     * outputs a warning for the developer
     * @param {message}
     * @type {Function}
     */
    warn = window.console && console.warn ? function (message) {
      console.warn(message);
    } : noop;

    if (!(curSrcProp in image)) {
      curSrcProp = "src";
    }

    // Add support for standard mime types.
    types["image/jpeg"] = true;
    types["image/gif"] = true;
    types["image/png"] = true;

    function detectTypeSupport(type, typeUri) {
      // based on Modernizr's lossless img-webp test
      // note: asynchronous
      var image = new window.Image();
      image.onerror = function () {
        types[type] = false;
        picturefill();
      };
      image.onload = function () {
        types[type] = image.width === 1;
        picturefill();
      };
      image.src = typeUri;
      return "pending";
    }

    // test svg support
    types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

    /**
     * updates the internal vW property with the current viewport width in px
     */
    function updateMetrics() {

      isVwDirty = false;
      DPR = window.devicePixelRatio;
      cssCache = {};
      sizeLengthCache = {};

      pf.DPR = DPR || 1;

      units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
      units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

      units.vw = units.width / 100;
      units.vh = units.height / 100;

      evalId = [units.height, units.width, DPR].join("-");

      units.em = pf.getEmValue();
      units.rem = units.em;
    }

    function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
      var bonusFactor, tooMuch, bonus, meanDensity;

      //experimental
      if (cfg.algorithm === "saveData") {
        if (lowerValue > 2.7) {
          meanDensity = dprValue + 1;
        } else {
          tooMuch = higherValue - dprValue;
          bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

          bonus = tooMuch * bonusFactor;

          if (isCached) {
            bonus += 0.1 * bonusFactor;
          }

          meanDensity = lowerValue + bonus;
        }
      } else {
        meanDensity = dprValue > 1 ? Math.sqrt(lowerValue * higherValue) : lowerValue;
      }

      return meanDensity > dprValue;
    }

    function applyBestCandidate(img) {
      var srcSetCandidates;
      var matchingSet = pf.getSet(img);
      var evaluated = false;
      if (matchingSet !== "pending") {
        evaluated = evalId;
        if (matchingSet) {
          srcSetCandidates = pf.setRes(matchingSet);
          pf.applySetCandidate(srcSetCandidates, img);
        }
      }
      img[pf.ns].evaled = evaluated;
    }

    function ascendingSort(a, b) {
      return a.res - b.res;
    }

    function setSrcToCur(img, src, set) {
      var candidate;
      if (!set && src) {
        set = img[pf.ns].sets;
        set = set && set[set.length - 1];
      }

      candidate = getCandidateForSrc(src, set);

      if (candidate) {
        src = pf.makeUrl(src);
        img[pf.ns].curSrc = src;
        img[pf.ns].curCan = candidate;

        if (!candidate.res) {
          setResolution(candidate, candidate.set.sizes);
        }
      }
      return candidate;
    }

    function getCandidateForSrc(src, set) {
      var i, candidate, candidates;
      if (src && set) {
        candidates = pf.parseSet(set);
        src = pf.makeUrl(src);
        for (i = 0; i < candidates.length; i++) {
          if (src === pf.makeUrl(candidates[i].url)) {
            candidate = candidates[i];
            break;
          }
        }
      }
      return candidate;
    }

    function getAllSourceElements(picture, candidates) {
      var i, len, source, srcset;

      // SPEC mismatch intended for size and perf:
      // actually only source elements preceding the img should be used
      // also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
      var sources = picture.getElementsByTagName("source");

      for (i = 0, len = sources.length; i < len; i++) {
        source = sources[i];
        source[pf.ns] = true;
        srcset = source.getAttribute("srcset");

        // if source does not have a srcset attribute, skip
        if (srcset) {
          candidates.push({
            srcset: srcset,
            media: source.getAttribute("media"),
            type: source.getAttribute("type"),
            sizes: source.getAttribute("sizes")
          });
        }
      }
    }

    /**
     * Srcset Parser
     * By Alex Bell |  MIT License
     *
     * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
     *
     * Based super duper closely on the reference algorithm at:
     * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
     */

    // 1. Let input be the value passed to this algorithm.
    // (TO-DO : Explain what "set" argument is here. Maybe choose a more
    // descriptive & more searchable name.  Since passing the "set" in really has
    // nothing to do with parsing proper, I would prefer this assignment eventually
    // go in an external fn.)
    function parseSrcset(input, set) {

      function collectCharacters(regEx) {
        var chars,
            match = regEx.exec(input.substring(pos));
        if (match) {
          chars = match[0];
          pos += chars.length;
          return chars;
        }
      }

      var inputLength = input.length,
          url,
          descriptors,
          currentDescriptor,
          state,
          c,


      // 2. Let position be a pointer into input, initially pointing at the start
      //    of the string.
      pos = 0,


      // 3. Let candidates be an initially empty source set.
      candidates = [];

      /**
      * Adds descriptor properties to a candidate, pushes to the candidates array
      * @return undefined
      */
      // (Declared outside of the while loop so that it's only created once.
      // (This fn is defined before it is used, in order to pass JSHINT.
      // Unfortunately this breaks the sequencing of the spec comments. :/ )
      function parseDescriptors() {

        // 9. Descriptor parser: Let error be no.
        var pError = false,


        // 10. Let width be absent.
        // 11. Let density be absent.
        // 12. Let future-compat-h be absent. (We're implementing it now as h)
        w,
            d,
            h,
            i,
            candidate = {},
            desc,
            lastChar,
            value,
            intVal,
            floatVal;

        // 13. For each descriptor in descriptors, run the appropriate set of steps
        // from the following list:
        for (i = 0; i < descriptors.length; i++) {
          desc = descriptors[i];

          lastChar = desc[desc.length - 1];
          value = desc.substring(0, desc.length - 1);
          intVal = parseInt(value, 10);
          floatVal = parseFloat(value);

          // If the descriptor consists of a valid non-negative integer followed by
          // a U+0077 LATIN SMALL LETTER W character
          if (regexNonNegativeInteger.test(value) && lastChar === "w") {

            // If width and density are not both absent, then let error be yes.
            if (w || d) {
              pError = true;
            }

            // Apply the rules for parsing non-negative integers to the descriptor.
            // If the result is zero, let error be yes.
            // Otherwise, let width be the result.
            if (intVal === 0) {
              pError = true;
            } else {
              w = intVal;
            }

            // If the descriptor consists of a valid floating-point number followed by
            // a U+0078 LATIN SMALL LETTER X character
          } else if (regexFloatingPoint.test(value) && lastChar === "x") {

            // If width, density and future-compat-h are not all absent, then let error
            // be yes.
            if (w || d || h) {
              pError = true;
            }

            // Apply the rules for parsing floating-point number values to the descriptor.
            // If the result is less than zero, let error be yes. Otherwise, let density
            // be the result.
            if (floatVal < 0) {
              pError = true;
            } else {
              d = floatVal;
            }

            // If the descriptor consists of a valid non-negative integer followed by
            // a U+0068 LATIN SMALL LETTER H character
          } else if (regexNonNegativeInteger.test(value) && lastChar === "h") {

            // If height and density are not both absent, then let error be yes.
            if (h || d) {
              pError = true;
            }

            // Apply the rules for parsing non-negative integers to the descriptor.
            // If the result is zero, let error be yes. Otherwise, let future-compat-h
            // be the result.
            if (intVal === 0) {
              pError = true;
            } else {
              h = intVal;
            }

            // Anything else, Let error be yes.
          } else {
            pError = true;
          }
        } // (close step 13 for loop)

        // 15. If error is still no, then append a new image source to candidates whose
        // URL is url, associated with a width width if not absent and a pixel
        // density density if not absent. Otherwise, there is a parse error.
        if (!pError) {
          candidate.url = url;

          if (w) {
            candidate.w = w;
          }
          if (d) {
            candidate.d = d;
          }
          if (h) {
            candidate.h = h;
          }
          if (!h && !d && !w) {
            candidate.d = 1;
          }
          if (candidate.d === 1) {
            set.has1x = true;
          }
          candidate.set = set;

          candidates.push(candidate);
        }
      } // (close parseDescriptors fn)

      /**
      * Tokenizes descriptor properties prior to parsing
      * Returns undefined.
      * (Again, this fn is defined before it is used, in order to pass JSHINT.
      * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
      */
      function tokenize() {

        // 8.1. Descriptor tokeniser: Skip whitespace
        collectCharacters(regexLeadingSpaces);

        // 8.2. Let current descriptor be the empty string.
        currentDescriptor = "";

        // 8.3. Let state be in descriptor.
        state = "in descriptor";

        while (true) {

          // 8.4. Let c be the character at position.
          c = input.charAt(pos);

          //  Do the following depending on the value of state.
          //  For the purpose of this step, "EOF" is a special character representing
          //  that position is past the end of input.

          // In descriptor
          if (state === "in descriptor") {
            // Do the following, depending on the value of c:

            // Space character
            // If current descriptor is not empty, append current descriptor to
            // descriptors and let current descriptor be the empty string.
            // Set state to after descriptor.
            if (isSpace(c)) {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
                currentDescriptor = "";
                state = "after descriptor";
              }

              // U+002C COMMA (,)
              // Advance position to the next character in input. If current descriptor
              // is not empty, append current descriptor to descriptors. Jump to the step
              // labeled descriptor parser.
            } else if (c === ",") {
              pos += 1;
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }
              parseDescriptors();
              return;

              // U+0028 LEFT PARENTHESIS (()
              // Append c to current descriptor. Set state to in parens.
            } else if (c === '(') {
              currentDescriptor = currentDescriptor + c;
              state = "in parens";

              // EOF
              // If current descriptor is not empty, append current descriptor to
              // descriptors. Jump to the step labeled descriptor parser.
            } else if (c === "") {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }
              parseDescriptors();
              return;

              // Anything else
              // Append c to current descriptor.
            } else {
              currentDescriptor = currentDescriptor + c;
            }
            // (end "in descriptor"

            // In parens
          } else if (state === "in parens") {

            // U+0029 RIGHT PARENTHESIS ())
            // Append c to current descriptor. Set state to in descriptor.
            if (c === ")") {
              currentDescriptor = currentDescriptor + c;
              state = "in descriptor";

              // EOF
              // Append current descriptor to descriptors. Jump to the step labeled
              // descriptor parser.
            } else if (c === "") {
              descriptors.push(currentDescriptor);
              parseDescriptors();
              return;

              // Anything else
              // Append c to current descriptor.
            } else {
              currentDescriptor = currentDescriptor + c;
            }

            // After descriptor
          } else if (state === "after descriptor") {

            // Do the following, depending on the value of c:
            // Space character: Stay in this state.
            if (isSpace(c)) {

              // EOF: Jump to the step labeled descriptor parser.
            } else if (c === "") {
              parseDescriptors();
              return;

              // Anything else
              // Set state to in descriptor. Set position to the previous character in input.
            } else {
              state = "in descriptor";
              pos -= 1;
            }
          }

          // Advance position to the next character in input.
          pos += 1;

          // Repeat this step.
        } // (close while true loop)
      }

      // 4. Splitting loop: Collect a sequence of characters that are space
      //    characters or U+002C COMMA characters. If any U+002C COMMA characters
      //    were collected, that is a parse error.
      while (true) {
        collectCharacters(regexLeadingCommasOrSpaces);

        // 5. If position is past the end of input, return candidates and abort these steps.
        if (pos >= inputLength) {
          return candidates; // (we're done, this is the sole return path)
        }

        // 6. Collect a sequence of characters that are not space characters,
        //    and let that be url.
        url = collectCharacters(regexLeadingNotSpaces);

        // 7. Let descriptors be a new empty list.
        descriptors = [];

        // 8. If url ends with a U+002C COMMA character (,), follow these substeps:
        //		(1). Remove all trailing U+002C COMMA characters from url. If this removed
        //         more than one character, that is a parse error.
        if (url.slice(-1) === ",") {
          url = url.replace(regexTrailingCommas, "");
          // (Jump ahead to step 9 to skip tokenization and just push the candidate).
          parseDescriptors();

          //	Otherwise, follow these substeps:
        } else {
          tokenize();
        } // (close else of step 8)

        // 16. Return to the step labeled splitting loop.
      } // (Close of big while loop.)
    }

    /*
     * Sizes Parser
     *
     * By Alex Bell |  MIT License
     *
     * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
     *
     * Reference algorithm at:
     * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
     *
     * Most comments are copied in directly from the spec
     * (except for comments in parens).
     *
     * Grammar is:
     * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
     * <source-size> = <media-condition> <source-size-value>
     * <source-size-value> = <length>
     * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
     *
     * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
     * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
     *
     * Returns the first valid <css-length> with a media condition that evaluates to true,
     * or "100vw" if all valid media conditions evaluate to false.
     *
     */

    function parseSizes(strValue) {

      // (Percentage CSS lengths are not allowed in this case, to avoid confusion:
      // https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
      // CSS allows a single optional plus or minus sign:
      // http://www.w3.org/TR/CSS2/syndata.html#numbers
      // CSS is ASCII case-insensitive:
      // http://www.w3.org/TR/CSS2/syndata.html#characters )
      // Spec allows exponential notation for <number> type:
      // http://dev.w3.org/csswg/css-values/#numbers
      var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

      // (This is a quick and lenient test. Because of optional unlimited-depth internal
      // grouping parens and strict spacing rules, this could get very complicated.)
      var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

      var i;
      var unparsedSizesList;
      var unparsedSizesListLength;
      var unparsedSize;
      var lastComponentValue;
      var size;

      // UTILITY FUNCTIONS

      //  (Toy CSS parser. The goals here are:
      //  1) expansive test coverage without the weight of a full CSS parser.
      //  2) Avoiding regex wherever convenient.
      //  Quick tests: http://jsfiddle.net/gtntL4gr/3/
      //  Returns an array of arrays.)
      function parseComponentValues(str) {
        var chrctr;
        var component = "";
        var componentArray = [];
        var listArray = [];
        var parenDepth = 0;
        var pos = 0;
        var inComment = false;

        function pushComponent() {
          if (component) {
            componentArray.push(component);
            component = "";
          }
        }

        function pushComponentArray() {
          if (componentArray[0]) {
            listArray.push(componentArray);
            componentArray = [];
          }
        }

        // (Loop forwards from the beginning of the string.)
        while (true) {
          chrctr = str.charAt(pos);

          if (chrctr === "") {
            // ( End of string reached.)
            pushComponent();
            pushComponentArray();
            return listArray;
          } else if (inComment) {
            if (chrctr === "*" && str[pos + 1] === "/") {
              // (At end of a comment.)
              inComment = false;
              pos += 2;
              pushComponent();
              continue;
            } else {
              pos += 1; // (Skip all characters inside comments.)
              continue;
            }
          } else if (isSpace(chrctr)) {
            // (If previous character in loop was also a space, or if
            // at the beginning of the string, do not add space char to
            // component.)
            if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
              pos += 1;
              continue;
            } else if (parenDepth === 0) {
              pushComponent();
              pos += 1;
              continue;
            } else {
              // (Replace any space character with a plain space for legibility.)
              chrctr = " ";
            }
          } else if (chrctr === "(") {
            parenDepth += 1;
          } else if (chrctr === ")") {
            parenDepth -= 1;
          } else if (chrctr === ",") {
            pushComponent();
            pushComponentArray();
            pos += 1;
            continue;
          } else if (chrctr === "/" && str.charAt(pos + 1) === "*") {
            inComment = true;
            pos += 2;
            continue;
          }

          component = component + chrctr;
          pos += 1;
        }
      }

      function isValidNonNegativeSourceSizeValue(s) {
        if (regexCssLengthWithUnits.test(s) && parseFloat(s) >= 0) {
          return true;
        }
        if (regexCssCalc.test(s)) {
          return true;
        }
        // ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
        // "-0 is equivalent to 0 and is not a negative number." which means that
        // unitless zero and unitless negative zero must be accepted as special cases.)
        if (s === "0" || s === "-0" || s === "+0") {
          return true;
        }
        return false;
      }

      // When asked to parse a sizes attribute from an element, parse a
      // comma-separated list of component values from the value of the element's
      // sizes attribute (or the empty string, if the attribute is absent), and let
      // unparsed sizes list be the result.
      // http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

      unparsedSizesList = parseComponentValues(strValue);
      unparsedSizesListLength = unparsedSizesList.length;

      // For each unparsed size in unparsed sizes list:
      for (i = 0; i < unparsedSizesListLength; i++) {
        unparsedSize = unparsedSizesList[i];

        // 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
        // ( parseComponentValues() already omits spaces outside of parens. )

        // If unparsed size is now empty, that is a parse error; continue to the next
        // iteration of this algorithm.
        // ( parseComponentValues() won't push an empty array. )

        // 2. If the last component value in unparsed size is a valid non-negative
        // <source-size-value>, let size be its value and remove the component value
        // from unparsed size. Any CSS function other than the calc() function is
        // invalid. Otherwise, there is a parse error; continue to the next iteration
        // of this algorithm.
        // http://dev.w3.org/csswg/css-syntax/#parse-component-value
        lastComponentValue = unparsedSize[unparsedSize.length - 1];

        if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
          size = lastComponentValue;
          unparsedSize.pop();
        } else {
          continue;
        }

        // 3. Remove all consecutive <whitespace-token>s from the end of unparsed
        // size. If unparsed size is now empty, return size and exit this algorithm.
        // If this was not the last item in unparsed sizes list, that is a parse error.
        if (unparsedSize.length === 0) {
          return size;
        }

        // 4. Parse the remaining component values in unparsed size as a
        // <media-condition>. If it does not parse correctly, or it does parse
        // correctly but the <media-condition> evaluates to false, continue to the
        // next iteration of this algorithm.
        // (Parsing all possible compound media conditions in JS is heavy, complicated,
        // and the payoff is unclear. Is there ever an situation where the
        // media condition parses incorrectly but still somehow evaluates to true?
        // Can we just rely on the browser/polyfill to do it?)
        unparsedSize = unparsedSize.join(" ");
        if (!pf.matchesMedia(unparsedSize)) {
          continue;
        }

        // 5. Return size and exit this algorithm.
        return size;
      }

      // If the above algorithm exhausts unparsed sizes list without returning a
      // size value, return 100vw.
      return "100vw";
    }

    // namespace
    pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

    // srcset support test
    pf.supSrcset = "srcset" in image;
    pf.supSizes = "sizes" in image;
    pf.supPicture = !!window.HTMLPictureElement;

    // UC browser does claim to support srcset and picture, but not sizes,
    // this extended test reveals the browser does support nothing
    if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
      (function (image2) {
        image.srcset = "data:,a";
        image2.src = "data:,a";
        pf.supSrcset = image.complete === image2.complete;
        pf.supPicture = pf.supSrcset && pf.supPicture;
      })(document.createElement("img"));
    }

    // Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
    if (pf.supSrcset && !pf.supSizes) {

      (function () {
        var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
        var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        var img = document.createElement("img");
        var test = function test() {
          var width = img.width;

          if (width === 2) {
            pf.supSizes = true;
          }

          alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

          isSupportTestReady = true;
          // force async
          setTimeout(picturefill);
        };

        img.onload = test;
        img.onerror = test;
        img.setAttribute("sizes", "9px");

        img.srcset = width1 + " 1w," + width2 + " 9w";
        img.src = width1;
      })();
    } else {
      isSupportTestReady = true;
    }

    // using pf.qsa instead of dom traversing does scale much better,
    // especially on sites mixing responsive and non-responsive images
    pf.selShort = "picture>img,img[srcset]";
    pf.sel = pf.selShort;
    pf.cfg = cfg;

    /**
     * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
     */
    pf.DPR = DPR || 1;
    pf.u = units;

    // container of supported mime types that one might need to qualify before using
    pf.types = types;

    pf.setSize = noop;

    /**
     * Gets a string and returns the absolute URL
     * @param src
     * @returns {String} absolute URL
     */

    pf.makeUrl = memoize(function (src) {
      anchor.href = src;
      return anchor.href;
    });

    /**
     * Gets a DOM element or document and a selctor and returns the found matches
     * Can be extended with jQuery/Sizzle for IE7 support
     * @param context
     * @param sel
     * @returns {NodeList|Array}
     */
    pf.qsa = function (context, sel) {
      return "querySelector" in context ? context.querySelectorAll(sel) : [];
    };

    /**
     * Shortcut method for matchMedia ( for easy overriding in tests )
     * wether native or pf.mMQ is used will be decided lazy on first call
     * @returns {boolean}
     */
    pf.matchesMedia = function () {
      if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
        pf.matchesMedia = function (media) {
          return !media || matchMedia(media).matches;
        };
      } else {
        pf.matchesMedia = pf.mMQ;
      }

      return pf.matchesMedia.apply(this, arguments);
    };

    /**
     * A simplified matchMedia implementation for IE8 and IE9
     * handles only min-width/max-width with px or em values
     * @param media
     * @returns {boolean}
     */
    pf.mMQ = function (media) {
      return media ? evalCSS(media) : true;
    };

    /**
     * Returns the calculated length in css pixel from the given sourceSizeValue
     * http://dev.w3.org/csswg/css-values-3/#length-value
     * intended Spec mismatches:
     * * Does not check for invalid use of CSS functions
     * * Does handle a computed length of 0 the same as a negative and therefore invalid value
     * @param sourceSizeValue
     * @returns {Number}
     */
    pf.calcLength = function (sourceSizeValue) {

      var value = evalCSS(sourceSizeValue, true) || false;
      if (value < 0) {
        value = false;
      }

      return value;
    };

    /**
     * Takes a type string and checks if its supported
     */

    pf.supportsType = function (type) {
      return type ? types[type] : true;
    };

    /**
     * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
     * @param sourceSizeStr
     * @returns {*}
     */
    pf.parseSize = memoize(function (sourceSizeStr) {
      var match = (sourceSizeStr || "").match(regSize);
      return {
        media: match && match[1],
        length: match && match[2]
      };
    });

    pf.parseSet = function (set) {
      if (!set.cands) {
        set.cands = parseSrcset(set.srcset, set);
      }
      return set.cands;
    };

    /**
     * returns 1em in css px for html/body default size
     * function taken from respondjs
     * @returns {*|number}
     */
    pf.getEmValue = function () {
      var body;
      if (!eminpx && (body = document.body)) {
        var div = document.createElement("div"),
            originalHTMLCSS = docElem.style.cssText,
            originalBodyCSS = body.style.cssText;

        div.style.cssText = baseStyle;

        // 1em in a media query is the value of the default font size of the browser
        // reset docElem and body to ensure the correct value is returned
        docElem.style.cssText = fsCss;
        body.style.cssText = fsCss;

        body.appendChild(div);
        eminpx = div.offsetWidth;
        body.removeChild(div);

        //also update eminpx before returning
        eminpx = parseFloat(eminpx, 10);

        // restore the original values
        docElem.style.cssText = originalHTMLCSS;
        body.style.cssText = originalBodyCSS;
      }
      return eminpx || 16;
    };

    /**
     * Takes a string of sizes and returns the width in pixels as a number
     */
    pf.calcListLength = function (sourceSizeListStr) {
      // Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
      //
      //                           or (min-width:30em) calc(30% - 15px)
      if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
        var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));

        sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
      }

      return sizeLengthCache[sourceSizeListStr];
    };

    /**
     * Takes a candidate object with a srcset property in the form of url/
     * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
     *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
     *     "images/pic-small.png"
     * Get an array of image candidates in the form of
     *      {url: "/foo/bar.png", resolution: 1}
     * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
     * If sizes is specified, res is calculated
     */
    pf.setRes = function (set) {
      var candidates;
      if (set) {

        candidates = pf.parseSet(set);

        for (var i = 0, len = candidates.length; i < len; i++) {
          setResolution(candidates[i], set.sizes);
        }
      }
      return candidates;
    };

    pf.setRes.res = setResolution;

    pf.applySetCandidate = function (candidates, img) {
      if (!candidates.length) {
        return;
      }
      var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;

      var imageData = img[pf.ns];
      var dpr = pf.DPR;

      curSrc = imageData.curSrc || img[curSrcProp];

      curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

      // if we have a current source, we might either become lazy or give this source some advantage
      if (curCan && curCan.set === candidates[0].set) {

        // if browser can abort image request and the image has a higher pixel density than needed
        // and this image isn't downloaded yet, we skip next part and try to save bandwidth
        abortCurSrc = supportAbort && !img.complete && curCan.res - 0.1 > dpr;

        if (!abortCurSrc) {
          curCan.cached = true;

          // if current candidate is "best", "better" or "okay",
          // set it to bestCandidate
          if (curCan.res >= dpr) {
            bestCandidate = curCan;
          }
        }
      }

      if (!bestCandidate) {

        candidates.sort(ascendingSort);

        length = candidates.length;
        bestCandidate = candidates[length - 1];

        for (i = 0; i < length; i++) {
          candidate = candidates[i];
          if (candidate.res >= dpr) {
            j = i - 1;

            // we have found the perfect candidate,
            // but let's improve this a little bit with some assumptions ;-)
            if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {

              bestCandidate = candidates[j];
            } else {
              bestCandidate = candidate;
            }
            break;
          }
        }
      }

      if (bestCandidate) {

        candidateSrc = pf.makeUrl(bestCandidate.url);

        imageData.curSrc = candidateSrc;
        imageData.curCan = bestCandidate;

        if (candidateSrc !== curSrc) {
          pf.setSrc(img, bestCandidate);
        }
        pf.setSize(img);
      }
    };

    pf.setSrc = function (img, bestCandidate) {
      var origWidth;
      img.src = bestCandidate.url;

      // although this is a specific Safari issue, we don't want to take too much different code paths
      if (bestCandidate.set.type === "image/svg+xml") {
        origWidth = img.style.width;
        img.style.width = img.offsetWidth + 1 + "px";

        // next line only should trigger a repaint
        // if... is only done to trick dead code removal
        if (img.offsetWidth + 1) {
          img.style.width = origWidth;
        }
      }
    };

    pf.getSet = function (img) {
      var i, set, supportsType;
      var match = false;
      var sets = img[pf.ns].sets;

      for (i = 0; i < sets.length && !match; i++) {
        set = sets[i];

        if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
          continue;
        }

        if (supportsType === "pending") {
          set = supportsType;
        }

        match = set;
        break;
      }

      return match;
    };

    pf.parseSets = function (element, parent, options) {
      var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

      var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
      var imageData = element[pf.ns];

      if (imageData.src === undefined || options.src) {
        imageData.src = getImgAttr.call(element, "src");
        if (imageData.src) {
          setImgAttr.call(element, srcAttr, imageData.src);
        } else {
          removeImgAttr.call(element, srcAttr);
        }
      }

      if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
        srcsetAttribute = getImgAttr.call(element, "srcset");
        imageData.srcset = srcsetAttribute;
        srcsetParsed = true;
      }

      imageData.sets = [];

      if (hasPicture) {
        imageData.pic = true;
        getAllSourceElements(parent, imageData.sets);
      }

      if (imageData.srcset) {
        imageSet = {
          srcset: imageData.srcset,
          sizes: getImgAttr.call(element, "sizes")
        };

        imageData.sets.push(imageSet);

        isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

        // add normal src as candidate, if source has no w descriptor
        if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
          imageSet.srcset += ", " + imageData.src;
          imageSet.cands.push({
            url: imageData.src,
            d: 1,
            set: imageSet
          });
        }
      } else if (imageData.src) {
        imageData.sets.push({
          srcset: imageData.src,
          sizes: null
        });
      }

      imageData.curCan = null;
      imageData.curSrc = undefined;

      // if img has picture or the srcset was removed or has a srcset and does not support srcset at all
      // or has a w descriptor (and does not support sizes) set support to false to evaluate
      imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);

      if (srcsetParsed && pf.supSrcset && !imageData.supported) {
        if (srcsetAttribute) {
          setImgAttr.call(element, srcsetAttr, srcsetAttribute);
          element.srcset = "";
        } else {
          removeImgAttr.call(element, srcsetAttr);
        }
      }

      if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
        if (imageData.src === null) {
          element.removeAttribute("src");
        } else {
          element.src = imageData.src;
        }
      }

      imageData.parsed = true;
    };

    pf.fillImg = function (element, options) {
      var imageData;
      var extreme = options.reselect || options.reevaluate;

      // expando for caching data on the img
      if (!element[pf.ns]) {
        element[pf.ns] = {};
      }

      imageData = element[pf.ns];

      // if the element has already been evaluated, skip it
      // unless `options.reevaluate` is set to true ( this, for example,
      // is set to true when running `picturefill` on `resize` ).
      if (!extreme && imageData.evaled === evalId) {
        return;
      }

      if (!imageData.parsed || options.reevaluate) {
        pf.parseSets(element, element.parentNode, options);
      }

      if (!imageData.supported) {
        applyBestCandidate(element);
      } else {
        imageData.evaled = evalId;
      }
    };

    pf.setupRun = function () {
      if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
        updateMetrics();
      }
    };

    // If picture is supported, well, that's awesome.
    if (pf.supPicture) {
      picturefill = noop;
      pf.fillImg = noop;
    } else {

      // Set up picture polyfill by polling the document
      (function () {
        var isDomReady;
        var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

        var run = function run() {
          var readyState = document.readyState || "";

          timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
          if (document.body) {
            pf.fillImgs();
            isDomReady = isDomReady || regReady.test(readyState);
            if (isDomReady) {
              clearTimeout(timerId);
            }
          }
        };

        var timerId = setTimeout(run, document.body ? 9 : 99);

        // Also attach picturefill on resize and readystatechange
        // http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
        var debounce = function debounce(func, wait) {
          var timeout, timestamp;
          var later = function later() {
            var last = new Date() - timestamp;

            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              func();
            }
          };

          return function () {
            timestamp = new Date();

            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
          };
        };
        var lastClientWidth = docElem.clientHeight;
        var onResize = function onResize() {
          isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
          lastClientWidth = docElem.clientHeight;
          if (isVwDirty) {
            pf.fillImgs();
          }
        };

        on(window, "resize", debounce(onResize, 99));
        on(document, "readystatechange", run);
      })();
    }

    pf.picturefill = picturefill;
    //use this internally for easy monkey patching/performance testing
    pf.fillImgs = picturefill;
    pf.teardownRun = noop;

    /* expose methods for testing */
    picturefill._ = pf;

    window.picturefillCFG = {
      pf: pf,
      push: function push(args) {
        var name = args.shift();
        if (typeof pf[name] === "function") {
          pf[name].apply(pf, args);
        } else {
          cfg[name] = args[0];
          if (alreadyRun) {
            pf.fillImgs({ reselect: true });
          }
        }
      }
    };

    while (setOptions && setOptions.length) {
      window.picturefillCFG.push(setOptions.shift());
    }

    /* expose picturefill */
    window.picturefill = picturefill;

    /* expose picturefill */
    if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
      // CommonJS, just export
      module.exports = picturefill;
    } else if (true) {
      // AMD support
      !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return picturefill;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }

    // IE8 evals this sync, so it must be the last thing we do
    if (!pf.supPicture) {
      types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
    }
  })(window, document);

  /***/
},
/* 27 */
/***/function (module, exports) {

  var headerEl = document.querySelector('.page-header');
  var buttonEl = document.querySelector('.menu-button');

  var TABLET_WIDTH = 768;

  function isOpen() {
    return headerEl.classList.contains('menu-open');
  }

  buttonEl.onclick = function () {
    if (!isOpen()) {
      headerEl.classList.add('menu-open');
      headerEl.classList.remove('search-open');
    } else {
      headerEl.classList.remove('menu-open');
    }
  };

  var menuEl = document.querySelector('.page-header .main-navigation');
  menuEl.addEventListener('click', function (evt) {
    if (document.documentElement.clientWidth >= TABLET_WIDTH) return;

    var target = evt.target.classList.contains('main-navigation__link--dropdown') ? evt.target : evt.target.closest('.main-navigation__link--dropdown');

    if (!target) return;

    evt.preventDefault();
    target.classList.toggle('main-navigation__link--open');
  });

  /***/
},
/* 28 */
/***/function (module, exports) {

  var headerEl = document.querySelector('.page-header');
  var buttonEl = document.querySelector('.search-button');
  var textEl = buttonEl.querySelector('span');
  var inputEl = document.querySelector('.search-form__input');

  function isOpen() {
    return headerEl.classList.contains('search-open');
  }

  buttonEl.onclick = function () {
    if (!isOpen()) {
      headerEl.classList.add('search-open');
      inputEl.focus();
      textEl.textContent = '\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0438\u0441\u043A';
      headerEl.classList.remove('menu-open');
    } else {
      headerEl.classList.remove('search-open');
      textEl.textContent = '\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0438\u0441\u043A';
    }
  };

  /***/
},
/* 29 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__ = __webpack_require__(4);
  // import { tns } from "tiny-slider/src/tiny-slider.module";


  (function () {
    var block = document.querySelector('.special-offers');
    if (!block) return;

    var list = block.querySelector('.special-offers__list');
    var controls = block.querySelector('.slider-controls');

    block.classList.remove('no-js');

    Object(__WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__["a" /* tns */])({
      container: list,
      items: 1,
      slideBy: 1,
      autoplay: false,
      mouseDrag: false,
      controls: true,
      controlsContainer: controls,
      nav: false,
      speed: 300,
      loop: false,
      gutter: 0,
      responsive: {
        768: {
          items: 3,
          slideBy: 3
        },
        999: {
          items: 4,
          slideBy: 4
        }
      }
    });
  })();

  /***/
},
/* 30 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return caf;
  });
  var win = window;

  var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function (id) {
    clearTimeout(id);
  };

  /***/
},
/* 31 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = extend;
  function extend() {
    var obj,
        name,
        copy,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length;

    for (; i < length; i++) {
      if ((obj = arguments[i]) !== null) {
        for (name in obj) {
          copy = obj[name];

          if (target === copy) {
            continue;
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  }

  /***/
},
/* 32 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = checkStorageValue;
  function checkStorageValue(value) {
    return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
  }

  /***/
},
/* 33 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = setLocalStorage;
  function setLocalStorage(storage, key, value, access) {
    if (access) {
      storage.setItem(key, value);
    }
    return value;
  }

  /***/
},
/* 34 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = getSlideId;
  function getSlideId() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;

    return 'tns' + window.tnsId;
  }

  /***/
},
/* 35 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = calc;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);
  // get css-calc 
  // @return - false | calc | -webkit-calc | -moz-calc
  // @usage - var calc = getCalc(); 


  function calc() {
    var doc = document,
        body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
        docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
        div = doc.createElement('div'),
        result = false;

    body.appendChild(div);
    try {
      var str = '(10px * 10)',
          vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
          val;
      for (var i = 0; i < 3; i++) {
        val = vals[i];
        div.style.width = val;
        if (div.offsetWidth === 100) {
          result = val.replace(str, '');
          break;
        }
      }
    } catch (e) {}

    body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

    return result;
  }

  /***/
},
/* 36 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = percentageLayout;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);
  // get subpixel support value
  // @return - boolean


  function percentageLayout() {
    // check subpixel layout supporting
    var doc = document,
        body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
        docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
        wrapper = doc.createElement('div'),
        outer = doc.createElement('div'),
        str = '',
        count = 70,
        perPage = 3,
        supported = false;

    wrapper.className = "tns-t-subp2";
    outer.className = "tns-t-ct";

    for (var i = 0; i < count; i++) {
      str += '<div></div>';
    }

    outer.innerHTML = str;
    wrapper.appendChild(outer);
    body.appendChild(wrapper);

    supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

    body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : wrapper.remove();

    return supported;
  }

  /***/
},
/* 37 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = mediaquerySupport;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);

  function mediaquerySupport() {
    var doc = document,
        body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
        docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
        div = doc.createElement('div'),
        style = doc.createElement('style'),
        rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
        position;

    style.type = 'text/css';
    div.className = 'tns-mq-test';

    body.appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(doc.createTextNode(rule));
    }

    position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

    body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

    return position === "absolute";
  }

  /***/
},
/* 38 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = createStyleSheet;
  // create and append style sheet
  function createStyleSheet(media) {
    // Create the <style> tag
    var style = document.createElement("style");
    // style.setAttribute("type", "text/css");

    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")
    if (media) {
      style.setAttribute("media", media);
    }

    // WebKit hack :(
    // style.appendChild(document.createTextNode(""));

    // Add the <style> element to the page
    document.querySelector('head').appendChild(style);

    return style.sheet ? style.sheet : style.styleSheet;
  };

  /***/
},
/* 39 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = addCSSRule;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__raf_js__ = __webpack_require__(5);
  // cross browsers addRule method

  function addCSSRule(sheet, selector, rules, index) {
    // return raf(function() {
    'insertRule' in sheet ? sheet.insertRule(selector + '{' + rules + '}', index) : sheet.addRule(selector, rules, index);
    // });
  }

  /***/
},
/* 40 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = removeCSSRule;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__raf_js__ = __webpack_require__(5);
  // cross browsers addRule method

  function removeCSSRule(sheet, index) {
    // return raf(function() {
    'deleteRule' in sheet ? sheet.deleteRule(index) : sheet.removeRule(index);
    // });
  }

  /***/
},
/* 41 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = getCssRulesLength;
  function getCssRulesLength(sheet) {
    var rule = 'insertRule' in sheet ? sheet.cssRules : sheet.rules;
    return rule.length;
  }

  /***/
},
/* 42 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = toDegree;
  function toDegree(y, x) {
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  /***/
},
/* 43 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = getTouchDirection;
  function getTouchDirection(angle, range) {
    var direction = false,
        gap = Math.abs(90 - Math.abs(angle));

    if (gap >= 90 - range) {
      direction = 'horizontal';
    } else if (gap <= range) {
      direction = 'vertical';
    }

    return direction;
  }

  /***/
},
/* 44 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = forEachNodeList;
  // https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
  function forEachNodeList(arr, callback, scope) {
    for (var i = 0, l = arr.length; i < l; i++) {
      callback.call(scope, arr[i], i);
    }
  }

  /***/
},
/* 45 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return classListSupport;
  });
  var classListSupport = 'classList' in document.createElement('_');

  /***/
},
/* 46 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return addClass;
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__hasClass_js__ = __webpack_require__(6);

  var addClass = __WEBPACK_IMPORTED_MODULE_0__hasClass_js__["a" /* classListSupport */] ? function (el, str) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el, str)) {
      el.classList.add(str);
    }
  } : function (el, str) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el, str)) {
      el.className += ' ' + str;
    }
  };

  /***/
},
/* 47 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return removeClass;
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__hasClass_js__ = __webpack_require__(6);

  var removeClass = __WEBPACK_IMPORTED_MODULE_0__hasClass_js__["a" /* classListSupport */] ? function (el, str) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el, str)) {
      el.classList.remove(str);
    }
  } : function (el, str) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el, str)) {
      el.className = el.className.replace(str, '');
    }
  };

  /***/
},
/* 48 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = getAttr;
  function getAttr(el, attr) {
    return el.getAttribute(attr);
  }

  /***/
},
/* 49 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = removeElementStyles;
  function removeElementStyles(el) {
    el.style.cssText = '';
  }

  /***/
},
/* 50 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = arrayFromNodeList;
  function arrayFromNodeList(nl) {
    var arr = [];
    for (var i = 0, l = nl.length; i < l; i++) {
      arr.push(nl[i]);
    }
    return arr;
  }

  /***/
},
/* 51 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = hideElement;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__hasAttr_js__ = __webpack_require__(7);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__setAttrs_js__ = __webpack_require__(11);

  function hideElement(el) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasAttr_js__["a" /* hasAttr */])(el, 'hidden')) {
      Object(__WEBPACK_IMPORTED_MODULE_1__setAttrs_js__["a" /* setAttrs */])(el, { 'hidden': '' });
    }
  }

  /***/
},
/* 52 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = showElement;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__hasAttr_js__ = __webpack_require__(7);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__removeAttrs_js__ = __webpack_require__(13);

  function showElement(el) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__hasAttr_js__["a" /* hasAttr */])(el, 'hidden')) {
      Object(__WEBPACK_IMPORTED_MODULE_1__removeAttrs_js__["a" /* removeAttrs */])(el, 'hidden');
    }
  }

  /***/
},
/* 53 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = isVisible;
  function isVisible(el) {
    return el.offsetWidth > 0 && el.offsetHeight > 0;
  }

  /***/
},
/* 54 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = whichProperty;
  function whichProperty(props) {
    if (typeof props === 'string') {
      var arr = [props],
          Props = props.charAt(0).toUpperCase() + props.substr(1),
          prefixes = ['Webkit', 'Moz', 'ms', 'O'];

      prefixes.forEach(function (prefix) {
        if (prefix !== 'ms' || props === 'transform') {
          arr.push(prefix + Props);
        }
      });

      props = arr;
    }

    var el = document.createElement('fakeelement'),
        len = props.length;
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      if (el.style[prop] !== undefined) {
        return prop;
      }
    }

    return false; // explicit for ie9-
  }

  /***/
},
/* 55 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = has3DTransforms;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);

  function has3DTransforms(tf) {
    if (!tf) {
      return false;
    }
    if (!window.getComputedStyle) {
      return false;
    }

    var doc = document,
        body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
        docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
        el = doc.createElement('p'),
        has3d,
        cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

    cssTF += 'transform';

    // Add it to the body to get the computed style
    body.insertBefore(el, null);

    el.style[tf] = 'translate3d(1px,1px,1px)';
    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

    body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : el.remove();

    return has3d !== undefined && has3d.length > 0 && has3d !== "none";
  }

  /***/
},
/* 56 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = getEndProperty;
  // get transitionend, animationend based on transitionDuration
  // @propin: string
  // @propOut: string, first-letter uppercase
  // Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
  function getEndProperty(propIn, propOut) {
    var endProp = false;
    if (/^Webkit/.test(propIn)) {
      endProp = 'webkit' + propOut + 'End';
    } else if (/^O/.test(propIn)) {
      endProp = 'o' + propOut + 'End';
    } else if (propIn) {
      endProp = propOut.toLowerCase() + 'end';
    }
    return endProp;
  }

  /***/
},
/* 57 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = addEvents;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__ = __webpack_require__(14);

  function addEvents(el, obj) {
    for (var prop in obj) {
      var option = prop === 'touchstart' || prop === 'touchmove' ? __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__["a" /* passiveOption */] : false;
      el.addEventListener(prop, obj[prop], option);
    }
  }

  /***/
},
/* 58 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = removeEvents;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__ = __webpack_require__(14);

  function removeEvents(el, obj) {
    for (var prop in obj) {
      var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__["a" /* passiveOption */] : false;
      el.removeEventListener(prop, obj[prop], option);
    }
  }

  /***/
},
/* 59 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = Events;
  function Events() {
    return {
      topics: {},
      on: function on(eventName, fn) {
        this.topics[eventName] = this.topics[eventName] || [];
        this.topics[eventName].push(fn);
      },
      off: function off(eventName, fn) {
        if (this.topics[eventName]) {
          for (var i = 0; i < this.topics[eventName].length; i++) {
            if (this.topics[eventName][i] === fn) {
              this.topics[eventName].splice(i, 1);
              break;
            }
          }
        }
      },
      emit: function emit(eventName, data) {
        if (this.topics[eventName]) {
          this.topics[eventName].forEach(function (fn) {
            fn(data);
          });
        }
      }
    };
  };

  /***/
},
/* 60 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = jsTransform;
  function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
    var tick = Math.min(duration, 10),
        unit = to.indexOf('%') >= 0 ? '%' : 'px',
        to = to.replace(unit, ''),
        from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
        positionTick = (to - from) / duration * tick,
        running;

    setTimeout(moveElement, tick);
    function moveElement() {
      duration -= tick;
      from += positionTick;
      element.style[attr] = prefix + from + unit + postfix;
      if (duration > 0) {
        setTimeout(moveElement, tick);
      } else {
        callback();
      }
    }
  }

  /***/
},
/* 61 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__ = __webpack_require__(4);
  // import { tns } from "tiny-slider/src/tiny-slider.module";


  (function () {
    var block = document.querySelector('.partners');
    if (!block) return;

    var list = block.querySelector('.partners__list');
    var controls = block.querySelector('.slider-controls');

    Object(__WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__["a" /* tns */])({
      container: list,
      items: 2,
      slideBy: 1,
      autoplay: false,
      mouseDrag: false,
      controls: true,
      controlsContainer: controls,
      nav: false,
      speed: 300,
      loop: false,
      gutter: 0,
      responsive: {
        768: {
          items: 3
        },
        999: {
          items: 5
        }
      }
    });
  })();

  /***/
},
/* 62 */
/***/function (module, exports) {

  // import {clickInsideElement} from "./common";

  (function () {
    var stock = document.querySelector('.stock');
    if (!stock) return;

    stock.classList.remove('no-js');

    var list = stock.querySelector('.stock__list');
    list.addEventListener('click', function (e) {
      var target = e.target.classList.contains('stock__link') ? e.target : e.target.closest('.stock__link');

      if (!target) return;

      e.preventDefault();
      target.classList.toggle('stock__link--open');
    });
  })();

  /***/
},
/* 63 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__components_ajax__ = __webpack_require__(15);

  (function () {
    var news = document.querySelector('.news');
    if (!news) return;
    var button = news.querySelector('.news__more-link');
    if (!button) return;

    var counter = news.querySelectorAll('.news-card').length;

    var newsList = news.querySelector('.news__list');
    var url = button.href;

    var templateNews = createTemplate();

    button.addEventListener('click', function (e) {
      e.preventDefault();
      Object(__WEBPACK_IMPORTED_MODULE_0__components_ajax__["a" /* ajaxGet */])(url + '?page=' + counter, initResponse, console.log);
    });

    function createTemplate() {
      var li = document.createElement('li');
      li.classList.add('news__item');

      var a = document.createElement('a');
      a.classList.add('news-card');

      var imgWrapper = document.createElement('div');
      imgWrapper.classList.add('news-card__img-wrapper');

      var img = document.createElement('img');
      img.classList.add('news-card__img');
      imgWrapper.appendChild(img);
      a.appendChild(imgWrapper);

      var info = document.createElement('div');
      info.classList.add('news-card__info');

      var time = document.createElement('time');
      time.classList.add('news-card__date');

      var text = document.createElement('p');
      text.classList.add('news-card__header');
      info.appendChild(time);
      info.appendChild(text);
      a.appendChild(info);
      li.appendChild(a);

      return li;
    }
    function initResponse(response) {
      var news = response.data;
      if (!response.more) {
        button.parentNode.parentNode.removeChild(button.parentNode);
      }
      counter += news.length;

      news.forEach(function (item) {
        return newsList.appendChild(addNews(item));
      });
    }
    function addNews(item) {
      var template = templateNews.cloneNode(true);
      var link = template.querySelector('.news-card');
      var img = template.querySelector('.news-card__img');
      var time = template.querySelector('.news-card__date');
      var text = template.querySelector('.news-card__header');

      link.href = item.url || '#';
      img.src = item.img || '';
      img.alt = item.text || '';
      time.textContent = item.time;
      text.textContent = item.text;

      return template;
    }
  })();

  /***/
},
/* 64 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__ = __webpack_require__(4);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_common__ = __webpack_require__(8);

  (function () {
    var block = document.querySelector('.carousel');
    if (!block) return;

    var list = block.querySelector('.carousel__previews-list');
    var controls = block.querySelector('.slider-controls');

    Object(__WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__["a" /* tns */])({
      container: list,
      items: 3,
      slideBy: 1,
      autoplay: false,
      mouseDrag: false,
      controls: true,
      controlsContainer: controls,
      nav: false,
      speed: 300,
      loop: false,
      gutter: 0,
      responsive: {
        768: {
          items: 8
        },
        999: {
          items: 10
        }
      }
    });

    var imgEl = block.querySelector('.carousel__img');
    var descriptionEl = block.querySelector('.carousel__img-description');
    var counterEl = block.querySelector('.carousel__current');
    var previewWrapperEl = block.querySelector('.carousel__previews-wrapper');
    var previewsEls = previewWrapperEl.querySelectorAll('.carousel__previews-item');
    var activePreview = block.querySelector('.carousel__previews-link--active');

    Object(__WEBPACK_IMPORTED_MODULE_1__components_common__["a" /* setNewImg */])({
      imgEl: imgEl,
      descriptionEl: descriptionEl,
      link: activePreview.href,
      description: activePreview.getAttribute('data-alt')
    });

    previewWrapperEl.addEventListener('click', function (evt) {
      var target = evt.target.classList.contains('carousel__previews-link') ? evt.target : evt.target.closest('.carousel__previews-link');

      if (!target) return;

      evt.preventDefault();
      if (target === activePreview) return;

      activePreview.classList.remove('carousel__previews-link--active');
      activePreview = target;
      activePreview.classList.add('carousel__previews-link--active');

      // const coords = imgEl.getBoundingClientRect();
      // window.scrollBy(0, coords.top);

      Object(__WEBPACK_IMPORTED_MODULE_1__components_common__["a" /* setNewImg */])({
        imgEl: imgEl,
        descriptionEl: descriptionEl,
        link: target.href,
        description: target.getAttribute('data-alt')
      });

      var previewItemNumber = target.parentNode.id.slice('tns1-item'.length);
      counterEl.textContent = +previewItemNumber + 1;
    });
  })();

  /***/
},
/* 65 */
/***/function (module, exports) {

  (function () {
    var block = document.querySelector('.tabs');
    if (!block) return;

    var linkActiveClass = 'tabs__link--active';
    var contentActiveClass = 'tabs__content-item--active';

    var linksListEl = block.querySelector('.tabs__list');
    var linksEls = Array.from(linksListEl.querySelectorAll('.tabs__link'));
    var itemsEls = Array.from(block.querySelectorAll('.tabs__content-item'));
    var active = 0;

    linksListEl.addEventListener('click', function (evt) {
      var target = evt.target;

      if (!target.classList.contains('tabs__link')) return;

      evt.preventDefault();
      var targetNumber = linksEls.indexOf(target);
      if (targetNumber === active) return;

      linksEls[active].classList.remove(linkActiveClass);
      itemsEls[active].classList.remove(contentActiveClass);

      active = targetNumber;

      linksEls[active].classList.add(linkActiveClass);
      itemsEls[active].classList.add(contentActiveClass);
    });
  })();

  /***/
},
/* 66 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__components_popup__ = __webpack_require__(16);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_ajax__ = __webpack_require__(15);

  (function () {
    var buttonEl = document.querySelector('.product__ask-link');
    var popupEl = document.querySelector('.popup-ask');
    if (!buttonEl || !popupEl) return;

    var inputsEls = Array.from(popupEl.querySelectorAll('.popup-ask__input'));
    inputsEls.forEach(function (input) {
      var ls = localStorage ? localStorage.getItem(input.name) : null;
      if (ls) input.value = ls;
    });
    var textareaEl = popupEl.querySelector('.popup-ask__textarea');

    buttonEl.onclick = function (e) {
      e.preventDefault();
      __WEBPACK_IMPORTED_MODULE_0__components_popup__["a" /* popupActions */].open(popupEl, closePopup);
    };

    function closePopup() {
      form.classList.remove('popup-ask__form--loading');
      form.classList.remove('popup-ask__form--success');
      textareaEl.value = '';
    }

    var form = popupEl.querySelector('.popup-ask__form');
    form.onsubmit = function (e) {
      e.preventDefault();
      form.classList.add('popup-ask__form--loading');
      Object(__WEBPACK_IMPORTED_MODULE_1__components_ajax__["b" /* ajaxPost */])(form.action, sendSuccess, sendFailed, new FormData(form));
    };

    function sendSuccess(response) {
      inputsEls.forEach(function (input) {
        localStorage.setItem(input.name, input.value);
      });
      form.classList.remove('popup-ask__form--loading');
      form.classList.add('popup-ask__form--success');
    }
    function sendFailed(response) {
      alert(response);
      form.classList.remove('popup-ask__form--loading');
    }
  })();

  /***/
},
/* 67 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__components_common__ = __webpack_require__(8);

  (function () {
    var imgWrapperEl = document.querySelector('.product__large-img');

    if (!imgWrapperEl) return;

    var imgEl = imgWrapperEl.querySelector('.product__img');
    var descriptionEl = imgWrapperEl.querySelector('.product__img-description');
    var galleryEl = document.querySelector('.gallery--photo');
    var activeEl = galleryEl.querySelector('.gallery__link--active');

    galleryEl.addEventListener('click', function (evt) {
      var target = evt.target.classList.contains('gallery__link') ? evt.target : evt.target.closest('.gallery__link');

      if (!target) return;

      evt.preventDefault();
      if (target === activeEl) return;

      if (activeEl) {
        activeEl.classList.remove('gallery__link--active');
      }
      activeEl = target;
      activeEl.classList.add('gallery__link--active');

      Object(__WEBPACK_IMPORTED_MODULE_0__components_common__["a" /* setNewImg */])({
        imgEl: imgEl,
        descriptionEl: descriptionEl,
        link: target.href,
        description: target.getAttribute('data-alt') || ''
      });
    });
  })();

  /***/
},
/* 68 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__components_popup__ = __webpack_require__(16);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_common__ = __webpack_require__(8);

  (function () {
    var previewBlock = document.querySelector('.producer__additional-block--photo .gallery__list');
    var popupEl = document.querySelector('.popup-img');
    if (!previewBlock || !popupEl) return;

    var previewEls = Array.from(previewBlock.querySelectorAll('.gallery__link'));
    var imgEl = popupEl.querySelector('.popup-img__img');
    var descriptionEl = popupEl.querySelector('.popup-img__description');

    previewBlock.addEventListener('click', function (evt) {
      var target = evt.target.classList.contains('gallery__link') ? evt.target : evt.target.closest('.gallery__link');

      if (!target) return;
      evt.preventDefault();

      Object(__WEBPACK_IMPORTED_MODULE_1__components_common__["a" /* setNewImg */])({
        imgEl: imgEl,
        descriptionEl: descriptionEl,
        link: target.href,
        description: target.getAttribute('data-alt') || '1111'
      });

      __WEBPACK_IMPORTED_MODULE_0__components_popup__["a" /* popupActions */].open(popupEl, closePopup);
    });

    function closePopup() {
      imgEl.src = '';
      descriptionEl.textContent = '';
    }
  })();

  /***/
},
/* 69 */
/***/function (module, exports) {

  (function () {
    var mapEl = document.querySelector('.contacts__map');
    if (!mapEl) return;

    var myLatlng = new google.maps.LatLng(56.8682298, 53.2736103);

    var myOptions = {
      zoom: 16,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapEl, myOptions);

    var markerImage = new google.maps.MarkerImage('/img/marker.png', new google.maps.Size(33, 33));
    var marker = new google.maps.Marker({
      icon: markerImage,
      position: myLatlng,
      map: map,
      title: "Станким"
    });
  })();

  /***/
}]
/******/);