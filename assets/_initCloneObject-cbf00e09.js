import{d as l,e as x,L as p,M as C}from"./_MapCache-4edfdfc9.js";import{b as T}from"./_baseTimes-8cccc40f.js";import{a9 as O,a8 as $,a6 as j,a7 as z,ab as b,ac as L,ad as S,ae as I}from"./SynapseContext-3e3caab0.js";import{a as U,i as B,b as E,r as y}from"./isArray-5e3f9107.js";import{i as M}from"./_isIndex-af14b756.js";var h=Object.create,G=function(){function t(){}return function(e){if(!O(e))return{};if(h)return h(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const K=G;function vt(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function P(t,e,r){e=="__proto__"&&l?l(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var R=Object.prototype,q=R.hasOwnProperty;function D(t,e,r){var n=t[e];(!(q.call(t,e)&&x(n,r))||r===void 0&&!(e in t))&&P(t,e,r)}function gt(t,e,r,n){var i=!r;r||(r={});for(var f=-1,c=e.length;++f<c;){var a=e[f],o=n?n(r[a],t[a],a,r,t):void 0;o===void 0&&(o=t[a]),i?P(r,a,o):D(r,a,o)}return r}var F=Object.prototype,H=F.hasOwnProperty;function N(t,e){var r=U(t),n=!r&&$(t),i=!r&&!n&&j(t),f=!r&&!n&&!i&&z(t),c=r||n||i||f,a=c?T(t.length,String):[],o=a.length;for(var s in t)(e||H.call(t,s))&&!(c&&(s=="length"||i&&(s=="offset"||s=="parent")||f&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||M(s,o)))&&a.push(s);return a}function Y(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Z=Object.prototype,J=Z.hasOwnProperty;function Q(t){if(!O(t))return Y(t);var e=b(t),r=[];for(var n in t)n=="constructor"&&(e||!J.call(t,n))||r.push(n);return r}function Ot(t){return L(t)?N(t,!0):Q(t)}var V=S(Object.getPrototypeOf,Object);const m=V;var W="[object Object]",X=Function.prototype,k=Object.prototype,w=X.toString,tt=k.hasOwnProperty,rt=w.call(Object);function bt(t){if(!B(t)||E(t)!=W)return!1;var e=m(t);if(e===null)return!0;var r=tt.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&w.call(r)==rt}function et(){this.__data__=new p,this.size=0}function nt(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function at(t){return this.__data__.get(t)}function st(t){return this.__data__.has(t)}var ot=200;function it(t,e){var r=this.__data__;if(r instanceof p){var n=r.__data__;if(!I||n.length<ot-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new C(n)}return r.set(t,e),this.size=r.size,this}function u(t){var e=this.__data__=new p(t);this.size=e.size}u.prototype.clear=et;u.prototype.delete=nt;u.prototype.get=at;u.prototype.has=st;u.prototype.set=it;var A=typeof exports=="object"&&exports&&!exports.nodeType&&exports,d=A&&typeof module=="object"&&module&&!module.nodeType&&module,ft=d&&d.exports===A,_=ft?y.Buffer:void 0,v=_?_.allocUnsafe:void 0;function yt(t,e){if(e)return t.slice();var r=t.length,n=v?v(r):new t.constructor(r);return t.copy(n),n}var ut=y.Uint8Array;const g=ut;function ct(t){var e=new t.constructor(t.byteLength);return new g(e).set(new g(t)),e}function Pt(t,e){var r=e?ct(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}function mt(t){return typeof t.constructor=="function"&&!b(t)?K(m(t)):{}}export{u as S,g as U,vt as a,P as b,gt as c,yt as d,Pt as e,mt as f,D as g,N as h,bt as i,m as j,Ot as k,ct as l,K as m};
//# sourceMappingURL=_initCloneObject-cbf00e09.js.map
