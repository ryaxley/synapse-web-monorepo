import{_ as b}from"./setPrototypeOf-0bb37fbe.js";function A(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,b(t,e)}var g=typeof global=="object"&&global&&global.Object===Object&&global;const l=g;var s=typeof self=="object"&&self&&self.Object===Object&&self,y=l||s||Function("return this")();const j=y;var p=j.Symbol;const o=p;var a=Object.prototype,O=a.hasOwnProperty,S=a.toString,r=o?o.toStringTag:void 0;function d(t){var e=O.call(t,r),i=t[r];try{t[r]=void 0;var c=!0}catch{}var f=S.call(t);return c&&(e?t[r]=i:delete t[r]),f}var T=Object.prototype,u=T.toString;function v(t){return u.call(t)}var $="[object Null]",m="[object Undefined]",n=o?o.toStringTag:void 0;function _(t){return t==null?t===void 0?m:$:n&&n in Object(t)?d(t):v(t)}function G(t){return t!=null&&typeof t=="object"}var h=Array.isArray;const L=h;export{o as S,A as _,L as a,_ as b,l as f,G as i,j as r};
//# sourceMappingURL=isArray-035e79ba.js.map
