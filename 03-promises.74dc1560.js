!function(){var e=document.querySelector("form");function n(e,n){return new Promise((function(t,o){var a=Math.random()>.3,c={position:e,delay:n};setTimeout((function(){a?t(c):o(c)}),n)}))}e.addEventListener("submit",(function(t){t.preventDefault();for(var o=parseInt(e.elements.amount.value),a=parseInt(e.elements.step.value),c=parseInt(e.elements.delay.value),i=0;i<o;i+=1)n(i+1,c+i*a).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.74dc1560.js.map
