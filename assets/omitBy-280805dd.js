import{b as a}from"./_baseMap-ffe75082.js";import{a as u}from"./toString-3056297c.js";import{c as e}from"./pick-5bde5811.js";import{g as i}from"./_baseClone-a6d31f02.js";var f="Expected a function";function l(n){if(typeof n!="function")throw new TypeError(f);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function c(n,r){if(n==null)return{};var s=u(i(n),function(t){return[t]});return r=a(r),e(n,s,function(t,o){return r(t,o[0])})}function g(n,r){return c(n,l(a(r)))}export{l as n,g as o,c as p};
//# sourceMappingURL=omitBy-280805dd.js.map
