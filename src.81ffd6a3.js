parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
"use strict";var e=document.getElementById("generate"),t=document.getElementById("url"),n=document.getElementById("discount_code"),o=document.getElementById("generated_link");null==o||o.addEventListener("click",function(){var e=o.innerHTML,t=document.getElementById("notification");e&&navigator.clipboard.writeText(e).then(function(){t.classList.add("show"),setTimeout(function(){t.classList.remove("show")},3e3)},function(){alert("Failed to copy to clipboard")})}),null==e||e.addEventListener("click",function(){if(t&&n){if(!(!o instanceof HTMLElement)&&t instanceof HTMLInputElement&&n instanceof HTMLInputElement){var e=t.value,c=n.value;e&&c?(localStorage.setItem("link",e),localStorage.setItem("code",c),o.innerHTML=a(e,c)):alert("Please enter link and discount code")}}else alert("Please enter link and discount code")});var a=function(e,t){var n=new URL(e),o="discount/".concat(t),a=n.hostname,c=n.pathname,l=n.protocol,i=n.searchParams,r=i.size>0?"&"+i.toString():"";return"".concat(l,"//").concat(a,"/").concat(o,"/?redirect=").concat(c).concat(r)};window.onload=function(){var e=localStorage.getItem("link"),c=localStorage.getItem("code");e&&c&&(t instanceof HTMLInputElement&&n instanceof HTMLInputElement&&(t.value=e,n.value=c),o&&(o.innerHTML=a(e,c)))};
},{}]},{},["QCba"], null)
//# sourceMappingURL=src.81ffd6a3.js.map