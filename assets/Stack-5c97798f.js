import{A as V,B as T,D as b,E as h,F as p,G as R,H as B,I as D,h as M,i as _,g as $,J as E,s as F,e as N}from"./styled-ad116ea3.js";import{_ as A}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as v}from"./extends-98964cd2.js";import{r as m}from"./index-f1f749bf.js";import{j as O}from"./jsx-runtime-670450c2.js";import{e as U}from"./extendSxProp-094a0213.js";const G=V(),I=G,L=["component","direction","spacing","divider","children","className"],H=T(),J=I("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function W(e){return b({props:e,name:"MuiStack",defaultTheme:H})}function q(e,o){const n=m.Children.toArray(e).filter(Boolean);return n.reduce((c,a,s)=>(c.push(a),s<n.length-1&&c.push(m.cloneElement(o,{key:`separator-${s}`})),c),[])}const z=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],K=({ownerState:e,theme:o})=>{let n=v({display:"flex",flexDirection:"column"},h({theme:o},p({values:e.direction,breakpoints:o.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=R(o),a=Object.keys(o.breakpoints.values).reduce((t,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(t[r]=!0),t),{}),s=p({values:e.direction,base:a}),d=p({values:e.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((t,r,i)=>{if(!s[t]){const u=r>0?s[i[r-1]]:"column";s[t]=u}}),n=B(n,h({theme:o},d,(t,r)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${z(r?s[r]:e.direction)}`]:E(c,t)}})))}return n=D(o.breakpoints,n),n};function Q(e={}){const{createStyledComponent:o=J,useThemeProps:n=W,componentName:c="MuiStack"}=e,a=()=>_({root:["root"]},t=>$(c,t),{}),s=o(K);return m.forwardRef(function(t,r){const i=n(t),l=U(i),{component:u="div",direction:k="column",spacing:S=0,divider:y,children:g,className:P}=l,j=A(l,L),x={direction:k,spacing:S},C=a();return O(s,v({as:u,ownerState:x,ref:r,className:M(C.root,P)},j,{children:y?q(g,y):g}))})}const X=Q({createStyledComponent:F("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>N({props:e,name:"MuiStack"})}),te=X;export{te as S};
//# sourceMappingURL=Stack-5c97798f.js.map
