import{a as g}from"./hasIn-af6a371f.js";import{a as u}from"./toString-cc90cb98.js";import{a as c,c as f,d as i}from"./sortBy-db69fbf4.js";import{a as p}from"./isArray-5e3f9107.js";import{e as m}from"./_baseClone-84be55ba.js";function b(r,a,t,n){for(var o=-1,e=r==null?0:r.length;++o<e;){var s=r[o];a(n,s,t(s),r)}return n}function h(r,a,t,n){return c(r,function(o,e,s){a(n,o,t(o),s)}),n}function A(r,a){return function(t,n){var o=p(t)?b:h,e=a?a():{};return o(t,r,f(n),e)}}function v(r,a){var t=p(r)?u:i;return t(r,f(a))}function B(r,a){return g(v(r,a),1)}var y=Object.prototype,w=y.hasOwnProperty,M=A(function(r,a,t){w.call(r,t)?r[t].push(a):m(r,t,[a])});const E=M;export{A as c,B as f,E as g,v as m};
//# sourceMappingURL=groupBy-8afd9a9d.js.map
