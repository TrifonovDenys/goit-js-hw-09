!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var u=i("6JpON");function r(e,t){var n=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){n?o({i:e,promiseDelay:t}):i({i:e,promiseDelay:t})}),t)}))}var a={buttn:document.querySelector("button"),inputFirstDelay:document.querySelector('[name="delay"]'),inputDelayStep:document.querySelector('[name="step"]'),inputAmount:document.querySelector('[name="amount"]')};a.buttn.addEventListener("click",(function(t){t.preventDefault();var n=a.inputFirstDelay.valueAsNumber,o=a.inputDelayStep.valueAsNumber,i=a.inputAmount.valueAsNumber,c=["Type First delay","Type Delay step","Type Amount"];""===a.inputFirstDelay.value&&e(u).Notify.info("".concat(c[0]));""===a.inputDelayStep.value&&e(u).Notify.info("".concat(c[1]));""===a.inputAmount.value&&e(u).Notify.info("".concat(c[2]));for(var l=1;l<=i;l++)r(l,n).then((function(t){var n=t.i,o=t.promiseDelay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")),e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.i,o=t.promiseDelay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms")),e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.2d7c0fc0.js.map