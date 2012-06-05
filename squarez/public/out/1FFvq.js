goog.provide('derp');
goog.require('cljs.core');
derp.greet = (function greet(n){
return cljs.core.str.call(null,"Hello ",n);
});
goog.exportSymbol('derp.greet', derp.greet);
