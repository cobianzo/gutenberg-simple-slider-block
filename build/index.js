/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _useEscKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useEscKey */ "./src/useEscKey.js");








function Edit(props) {
  var _props$attributes$sli;

  const [editingSlide, setEditingSlide] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_useEscKey__WEBPACK_IMPORTED_MODULE_6__["default"])(() => setEditingSlide(null)); // to close the editing overlay with ESC

  function addSlide() {
    const oldSlides = props.attributes.slides ? [...props.attributes.slides] : [];
    oldSlides.push({
      bgImageUrl: null,
      bgImageID: null,
      badge: "Politics",
      title: props.attributes.slides.length + " El perro de San Roque",
      linkUrl: "#",
      linkText: "Read more",
      linkTarget: "_blank"
    });
    props.setAttributes({
      slides: oldSlides
    });
    setEditingSlide(oldSlides.length - 1);
  }

  function updateSlideField(slideIndex, field, value) {
    const slideAttrs = { ...props.attributes.slides[slideIndex]
    };
    slideAttrs[field] = value;
    const newSlides = props.attributes.slides.map((sl, i) => i === slideIndex ? slideAttrs : sl);
    props.setAttributes({
      slides: newSlides
    });
  }

  function moveSlide(sourceIndex, targetIndex) {
    if (sourceIndex < 0 || sourceIndex >= props.attributes.slides.length || targetIndex < 0 || targetIndex >= props.attributes.slides.length) return;
    const slidesOriginal = [...props.attributes.slides];
    slidesOriginal.splice(targetIndex, 0, slidesOriginal.splice(sourceIndex, 1)[0]);
    props.setAttributes({
      slides: slidesOriginal
    });
    if (editingSlide === sourceIndex) setEditingSlide(targetIndex);
  }

  function deleteSlide(indexSlide) {
    if (indexSlide < 0 || indexSlide >= props.attributes.slides.length) return;
    const newSlides = [...props.attributes.slides]; // 2nd parameter means remove one item only

    newSlides.splice(indexSlide, 1);
    props.setAttributes({
      slides: newSlides
    });
    setEditingSlide(null);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
    label: "Options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: "arrow-left-alt2",
    isDisabled: editingSlide === 0 || editingSlide === null,
    label: "move left",
    onClick: () => moveSlide(editingSlide, editingSlide - 1)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: "arrow-right-alt2",
    isDisabled: editingSlide >= props.attributes.slides.length || editingSlide === null,
    label: "move right",
    onClick: () => moveSlide(editingSlide, editingSlide + 1)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: "plus",
    label: "Add Slide",
    onClick: addSlide
  }), editingSlide !== null && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: "trash",
    label: "delete",
    onClick: () => deleteSlide(editingSlide)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (_props$attributes$sli = props.attributes.slides) === null || _props$attributes$sli === void 0 ? void 0 : _props$attributes$sli.map((slide, indexSlide) => {
    return indexSlide === editingSlide ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EditSlideComponent, {
      attrs: slide,
      allSlides: props.attributes.slides,
      indexSlide: indexSlide,
      setEditingSlide: setEditingSlide,
      updateSlideField: updateSlideField,
      setAttributes: props.setAttributes
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_save__WEBPACK_IMPORTED_MODULE_5__.SaveSlideComponent, {
      attrs: slide,
      indexSlide: indexSlide,
      onClick: e => setEditingSlide(indexSlide),
      extraClasses: "wp-block-coco-blocks-simple-slider__slide--noneditableslidewrapper"
    });
  }))));
}

function EditSlideComponent(_ref) {
  let {
    attrs,
    indexSlide,
    allSlides,
    setEditingSlide,
    updateSlideField,
    setAttributes
  } = _ref;
  console.log("%ctodelete EditSlide render. Attrs", "font-size:1.2rem;color:orange;", attrs);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wp-block-coco-blocks-simple-slider__slide selected",
    style: {
      backgroundImage: _save__WEBPACK_IMPORTED_MODULE_5__.overlayStyle + (attrs.bgImageUrl ? `, url(${attrs.bgImageUrl}) ` : "")
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-coco-blocks-simple-slider__clickablewrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      //  console.log("toelete", media);
      const newAttrs = { ...attrs
      };
      newAttrs.bgImageUrl = media.sizes.medium.url;
      newAttrs.bgImageID = media.id;
      const newSlides = allSlides.map((sl, i) => i === indexSlide ? newAttrs : sl);
      setAttributes({
        slides: newSlides
      });
    },
    multiple: false,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        onClick: open,
        className: "upload-btn"
      }, attrs.bgImageUrl === null ? "Upload" : "Replace bg image"), !attrs.bgImageUrl ? null : null);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "wp-block-coco-blocks-simple-slider__badge",
    value: attrs.badge,
    onChange: newVal => updateSlideField(indexSlide, "badge", newVal),
    placeholder: "Subheading Goes Here"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h3",
    className: "wp-block-coco-blocks-simple-slider__title",
    value: attrs.title,
    onChange: newVal => updateSlideField(indexSlide, "title", newVal),
    placeholder: "Category badge"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-coco-blocks-simple-slider__linkwrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "wp-block-coco-blocks-simple-slider__button",
    placeholder: "Click me...",
    value: attrs.linkText,
    onChange: newVal => updateSlideField(indexSlide, "linkText", newVal)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-coco-blocks-simple-slider__linkoneline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Url",
    className: "wp-block-coco-blocks-simple-slider__linkurl",
    placeholder: "https://...",
    value: attrs.linkUrl,
    onChange: newVal => updateSlideField(indexSlide, "linkUrl", newVal)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "target",
    className: "wp-block-coco-blocks-simple-slider__linktarget",
    value: attrs.linkTarget,
    options: [{
      label: "_blank",
      value: "blank"
    }, {
      label: "_self",
      value: "_self"
    }, {
      label: "_parent",
      value: "_parent"
    }, {
      label: "_top",
      value: "_top"
    }],
    onChange: newVal => updateSlideField(indexSlide, "linkTarget", newVal)
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "secondary",
    onClick: e => setEditingSlide(null),
    className: "save-btn"
  }, "Save"));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveSlideComponent": () => (/* binding */ SaveSlideComponent),
/* harmony export */   "default": () => (/* binding */ save),
/* harmony export */   "overlayStyle": () => (/* binding */ overlayStyle)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save(props) {
  var _props$attributes$sli;

  console.log("%cSAVE", "font-size:1.2rem;color:pink;", props);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "splide simple-slider-frontend"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "splide__track"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "splide__list"
  }, (_props$attributes$sli = props.attributes.slides) === null || _props$attributes$sli === void 0 ? void 0 : _props$attributes$sli.map((slide, indexSlide) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SaveSlideComponent, {
      attrs: slide,
      indexSlide: -1,
      extraClasses: "splide__slide"
    });
  }))));
}
/** This is shown in the frontend. And SAVED in the code of the backend (but not shown as UI in the backend, eh?) */

const overlayStyle = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6))`; // helper

function SaveSlideComponent(_ref) {
  var _attrs$bgImageUrl, _attrs$bgImageID;

  let {
    attrs,
    indexSlide,
    extraClasses = "",
    onClick = e => false
  } = _ref;
  const isFrontend = indexSlide === -1;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: `wp-block-coco-blocks-simple-slider__slide ${extraClasses}`,
    onClick: onClick // we use it for the backend
    ,
    style: {
      backgroundImage: overlayStyle + (attrs.bgImageUrl ? `, url(${attrs.bgImageUrl}) ` : "")
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "div-data-overlay",
    "data-bgimageurl": (_attrs$bgImageUrl = attrs.bgImageUrl) !== null && _attrs$bgImageUrl !== void 0 ? _attrs$bgImageUrl : "https://via.placeholder.com/150",
    "data-bgimageid": (_attrs$bgImageID = attrs.bgImageID) !== null && _attrs$bgImageID !== void 0 ? _attrs$bgImageID : 0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: isFrontend ? attrs.linkUrl : "#",
    target: isFrontend ? attrs.linkTarget : "_self",
    onClick: e => e.preventDefault() // this executes only in backend.
    ,
    rel: "noopener noreferrer",
    className: "wp-block-coco-blocks-simple-slider__clickablewrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    value: attrs.badge,
    className: "wp-block-coco-blocks-simple-slider__badge"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h3",
    value: attrs.title,
    className: "wp-block-coco-blocks-simple-slider__title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    href: attrs.linkUrl,
    onClick: e => window.location = slide.linkUrl,
    target: attrs.linkTarget,
    className: "wp-block-coco-blocks-simple-slider__button"
  }, attrs.linkText)));
}

/***/ }),

/***/ "./src/useEscKey.js":
/*!**************************!*\
  !*** ./src/useEscKey.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEscKey)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function useEscKey(callbackfn) {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Escape') {
        event.preventDefault(); // 👇️ your logic here

        callbackfn();
      }
    };

    document.addEventListener('keydown', keyDownHandler); // 👇️ clean up event listener

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"coco-blocks/simple-slider","version":"0.1.0","title":"Simple Slider","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","supports":{"html":false},"attributes":{"slides":{"type":"array","source":"query","selector":"li.wp-block-coco-blocks-simple-slider__slide","query":{"bgImageUrl":{"type":"string","source":"attribute","attribute":"data-bgimageurl","selector":".div-data-overlay"},"bgImageID":{"type":"string","source":"attribute","attribute":"data-bgimageid","selector":".div-data-overlay"},"badge":{"type":"string","source":"text","selector":".wp-block-coco-blocks-simple-slider__clickablewrapper > .wp-block-coco-blocks-simple-slider__badge"},"title":{"type":"string","source":"text","selector":".wp-block-coco-blocks-simple-slider__clickablewrapper > .wp-block-coco-blocks-simple-slider__title"},"linkUrl":{"type":"string","source":"attribute","attribute":"href","selector":".wp-block-coco-blocks-simple-slider__clickablewrapper > .wp-block-coco-blocks-simple-slider__button"},"linkText":{"type":"string","source":"text","selector":".wp-block-coco-blocks-simple-slider__clickablewrapper > .wp-block-coco-blocks-simple-slider__button"},"linkTarget":{"type":"string","source":"attribute","attribute":"target","selector":".wp-block-coco-blocks-simple-slider__clickablewrapper > .wp-block-coco-blocks-simple-slider__button"}}}},"textdomain":"simple-slider","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksimple_slider"] = self["webpackChunksimple_slider"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map