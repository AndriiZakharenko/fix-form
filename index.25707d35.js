var e;function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}((function(e){if(Array.isArray(e))return t(e)})(e=document.querySelectorAll("input.field-text"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(e){var t=document.createElement("label"),r=e.name.split("").findIndex(function(e){return e===e.toUpperCase()}),n=r>0?e.name[0].toUpperCase()+e.name.slice(1,r)+" "+e.name.slice(r):e.name[0].toUpperCase()+e.name.slice(1);t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=n,e.setAttribute("placeholder",n),e.before(t)});
//# sourceMappingURL=index.25707d35.js.map