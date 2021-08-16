const e={};function t(t){e.context=t}let n=b;const o={},l={owned:null,cleanups:null,context:null,owner:null};var r=null;let s=null,u=null,i=null,f=null,c=0;function a(e,t,n){g(v(e,t,!1,1))}function d(e){let t,n=s;return s=null,t=e(),s=n,t}function p(e){!function(e,t,o){n=w;const l=v(e,t,!1,1);l.user=!0,f&&f.push(l)}((()=>d(e)))}function h(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(u)return e.pending===o&&u.push(e),e.pending=t,t;return e.value=t,!e.observers||i&&!e.observers.length||x((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];false,n.observers&&2!==n.state&&C(n),n.state=1,n.pure?i.push(n):f.push(n)}if(i.length>1e6)throw i=[],new Error}),!1),t}function g(e){if(!e.fn)return;m(e);const t=r,n=s,o=c;s=r=e,function(e,t,n){let o;try{o=e.fn(t)}catch(l){S(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?h(e,o):e.value=o,e.updatedAt=n)}(e,e.value,o),s=n,r=t}function v(e,t,n,o=1,s){const u={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:r,context:null,pure:n};return null===r||r!==l&&(r.owned?r.owned.push(u):r.owned=[u]),u}function y(e){if(1!==e.state)return;if(e.suspense&&d(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<c);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)g(e);else if(2===e.state){const t=i;i=null,A(e),i=t}}function x(e,t){if(i)return e();let l=!1;t||(i=[]),f?l=!0:f=[],c++;try{e()}catch(r){S(r)}finally{!function(e){i&&(b(i),i=null);if(e)return;f.length?function(e){if(u)return e();let t;const n=u=[];try{t=e()}finally{u=null}x((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==o){const e=t.pending;t.pending=o,h(t,e)}}}),!1)}((()=>{n(f),f=null})):f=null}(l)}}function b(e){for(let t=0;t<e.length;t++)y(e[t])}function w(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:y(o)}const o=e.length;for(t=0;t<n;t++)y(e[t]);for(t=o;t<e.length;t++)y(e[t])}function A(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?y(n):2===n.state&&A(n))}}function C(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.observers&&C(n))}}function m(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const e=o.pop(),l=t.observerSlots.pop();n<o.length&&(e.sourceSlots[l]=n,o[n]=e,t.observerSlots[n]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)m(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function S(e){throw e}function N(n,o){if(e.context){const l=e.context;t({...e.context,id:`${e.context.id}${e.context.count++}.`,count:0});const r=d((()=>n(o)));return t(l),r}return d((()=>n(o)))}function B(e,t,n){let o=n.length,l=t.length,r=o,s=0,u=0,i=t[l-1].nextSibling,f=null;for(;s<l||u<r;)if(t[s]!==n[u]){for(;t[l-1]===n[r-1];)l--,r--;if(l===s){const t=r<o?u?n[u-1].nextSibling:n[r-u]:i;for(;u<r;)e.insertBefore(n[u++],t)}else if(r===u)for(;s<l;)f&&f.has(t[s])||e.removeChild(t[s]),s++;else if(t[s]===n[r-1]&&n[u]===t[l-1]){const o=t[--l].nextSibling;e.insertBefore(n[u++],t[s++].nextSibling),e.insertBefore(n[--r],o),t[l]=n[r]}else{if(!f){f=new Map;let e=u;for(;e<r;)f.set(n[e],e++)}const o=f.get(t[s]);if(null!=o)if(u<o&&o<r){let i,c=s,a=1;for(;++c<l&&c<r&&null!=(i=f.get(t[c]))&&i===o+a;)a++;if(a>o-u){const l=t[s];for(;u<o;)e.insertBefore(n[u++],l)}else e.replaceChild(n[u++],t[s++])}else s++;else e.removeChild(t[s++])}}else s++,u++}function T(e,t,n){let o;return function(e,t){t&&(r=t);const n=s,o=r,u=0===e.length?l:{owned:null,cleanups:null,context:null,owner:o};let i;r=u,s=null;try{x((()=>i=e((()=>m(u)))),!0)}finally{s=n,r=o}}((l=>{o=l,$(t,e(),t.firstChild?null:void 0,n)})),()=>{o(),t.textContent=""}}function E(e,t,n){const o=document.createElement("template");o.innerHTML=e;let l=o.content.firstChild;return n&&(l=l.firstChild),l}function M(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function $(e,t,n,o){if(void 0===n||o||(o=[]),"function"!=typeof t)return k(e,t,o,n);a((o=>k(e,t(),o,n)),o)}function k(t,n,o,l,r){for(;"function"==typeof o;)o=o();if(n===o)return o;const s=typeof n,u=void 0!==l;if(t=u&&o[0]&&o[0].parentNode||t,"string"===s||"number"===s)if("number"===s&&(n=n.toString()),u){let e=o[0];e&&3===e.nodeType?e.data=n:e=document.createTextNode(n),o=L(t,o,l,e)}else o=""!==o&&"string"==typeof o?t.firstChild.data=n:t.textContent=n;else if(null==n||"boolean"===s){if(e.context)return o;o=L(t,o,l)}else{if("function"===s)return a((()=>{let e=n();for(;"function"==typeof e;)e=e();o=k(t,e,o,l)})),()=>o;if(Array.isArray(n)){const s=[];if(F(s,n,r))return a((()=>o=k(t,s,o,l,!0))),()=>o;if(e.context&&o&&o.length)return o;if(0===s.length){if(o=L(t,o,l),u)return o}else Array.isArray(o)?0===o.length?H(t,s,l):B(t,o,s):null==o||""===o?H(t,s):B(t,u&&o||[t.firstChild],s);o=s}else if(n instanceof Node){if(Array.isArray(o)){if(u)return o=L(t,o,l,n);L(t,o,null,n)}else null!=o&&""!==o&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);o=n}}return o}function F(e,t,n){let o=!1;for(let l=0,r=t.length;l<r;l++){let r,s=t[l];if(s instanceof Node)e.push(s);else if(null==s||!0===s||!1===s);else if(Array.isArray(s))o=F(e,s)||o;else if("string"==(r=typeof s))e.push(document.createTextNode(s));else if("function"===r)if(n){for(;"function"==typeof s;)s=s();o=F(e,Array.isArray(s)?s:[s])||o}else e.push(s),o=!0;else e.push(document.createTextNode(s.toString()))}return o}function H(e,t,n){for(let o=0,l=t.length;o<l;o++)e.insertBefore(t[o],n)}function L(e,t,n,o){if(void 0===n)return e.textContent="";const l=o||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const s=t[r];if(l!==s){const t=s.parentNode===e;o||r?t&&e.removeChild(s):t?e.replaceChild(l,s):e.insertBefore(l,n)}else o=!0}}else e.insertBefore(l,n);return[l]}export{a,N as c,$ as i,p as o,T as r,M as s,E as t};