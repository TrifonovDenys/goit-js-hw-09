(function(e,o){const i=Math.random()>.3;return new Promise(((n,t)=>{setInterval((()=>{i?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))})(2,1e3).then((({position:e,delay:o})=>{setTimeout((()=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)}),o)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.690ccc93.js.map
