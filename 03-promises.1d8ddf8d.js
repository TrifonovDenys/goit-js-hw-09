!function(){var o,n,t;(o=2,n=1e3,t=Math.random()>.3,new Promise((function(i,e){setInterval((function(){t?i({position:o,delay:n}):e({position:o,delay:n})}),n)}))).then((function(o){var n=o.position,t=o.delay;setTimeout((function(){console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}),t)})).catch((function(o){var n=o.position,t=o.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}();
//# sourceMappingURL=03-promises.1d8ddf8d.js.map