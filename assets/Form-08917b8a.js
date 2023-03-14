import{_ as P}from"./extends-98964cd2.js";import{_ as N,u as $,c as y}from"./Button-a16e56e5.js";import{R as a,r as I}from"./index-f1f749bf.js";import{F as h,a as U,b as le,c as oe}from"./FormLabel-d48b7c13.js";import{F as re}from"./FormGroup-763a7e3b.js";import{c as ne}from"./createWithBsPrefix-d1384812.js";var de=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],X=a.forwardRef(function(e,o){var s=e.id,t=e.bsPrefix,d=e.bsCustomPrefix,r=e.className,l=e.type,i=l===void 0?"checkbox":l,c=e.isValid,m=c===void 0?!1:c,n=e.isInvalid,u=n===void 0?!1:n,f=e.isStatic,x=e.as,k=x===void 0?"input":x,w=N(e,de),v=I.useContext(h),C=v.controlId,b=v.custom,V=b?[d,"custom-control-input"]:[t,"form-check-input"],L=V[0],F=V[1];return t=$(L,F),a.createElement(k,P({},w,{ref:o,type:i,id:s||C,className:y(r,t,m&&"is-valid",u&&"is-invalid",f&&"position-static")}))});X.displayName="FormCheckInput";const Y=X;var ce=["bsPrefix","bsCustomPrefix","className","htmlFor"],Z=a.forwardRef(function(e,o){var s=e.bsPrefix,t=e.bsCustomPrefix,d=e.className,r=e.htmlFor,l=N(e,ce),i=I.useContext(h),c=i.controlId,m=i.custom,n=m?[t,"custom-control-label"]:[s,"form-check-label"],u=n[0],f=n[1];return s=$(u,f),a.createElement("label",P({},l,{ref:o,htmlFor:r||c,className:y(d,s)}))});Z.displayName="FormCheckLabel";const _=Z;var me=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],W=a.forwardRef(function(e,o){var s=e.id,t=e.bsPrefix,d=e.bsCustomPrefix,r=e.inline,l=r===void 0?!1:r,i=e.disabled,c=i===void 0?!1:i,m=e.isValid,n=m===void 0?!1:m,u=e.isInvalid,f=u===void 0?!1:u,x=e.feedbackTooltip,k=x===void 0?!1:x,w=e.feedback,v=e.className,C=e.style,b=e.title,V=b===void 0?"":b,L=e.type,F=L===void 0?"checkbox":L,R=e.label,g=e.children,D=e.custom,S=e.as,A=S===void 0?"input":S,H=N(e,me),E=F==="switch"?!0:D,B=E?[d,"custom-control"]:[t,"form-check"],J=B[0],G=B[1];t=$(J,G);var K=I.useContext(h),T=K.controlId,M=I.useMemo(function(){return{controlId:s||T,custom:E}},[T,E,s]),Q=E||R!=null&&R!==!1&&!g,ie=a.createElement(Y,P({},H,{type:F==="switch"?"checkbox":F,ref:o,isValid:n,isInvalid:f,isStatic:!Q,disabled:c,as:A}));return a.createElement(h.Provider,{value:M},a.createElement("div",{style:C,className:y(v,t,E&&"custom-"+F,l&&t+"-inline")},g||a.createElement(a.Fragment,null,ie,Q&&a.createElement(_,{title:V},R),(n||f)&&a.createElement(U,{type:n?"valid":"invalid",tooltip:k},w))))});W.displayName="FormCheck";W.Input=Y;W.Label=_;const j=W;var ue=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],ee=a.forwardRef(function(e,o){var s=e.id,t=e.bsPrefix,d=e.bsCustomPrefix,r=e.className,l=e.isValid,i=e.isInvalid,c=e.lang,m=e.as,n=m===void 0?"input":m,u=N(e,ue),f=I.useContext(h),x=f.controlId,k=f.custom,w="file",v=k?[d,"custom-file-input"]:[t,"form-control-file"],C=v[0],b=v[1];return t=$(C,b),a.createElement(n,P({},u,{ref:o,id:s||x,type:w,lang:c,className:y(r,t,l&&"is-valid",i&&"is-invalid")}))});ee.displayName="FormFileInput";const ae=ee;var fe=["bsPrefix","bsCustomPrefix","className","htmlFor"],se=a.forwardRef(function(e,o){var s=e.bsPrefix,t=e.bsCustomPrefix,d=e.className,r=e.htmlFor,l=N(e,fe),i=I.useContext(h),c=i.controlId,m=i.custom,n=m?[t,"custom-file-label"]:[s,"form-file-label"],u=n[0],f=n[1];return s=$(u,f),a.createElement("label",P({},l,{ref:o,htmlFor:r||c,className:y(d,s),"data-browse":l["data-browse"]}))});se.displayName="FormFileLabel";const O=se;var ve=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],q=a.forwardRef(function(e,o){var s=e.id,t=e.bsPrefix,d=e.bsCustomPrefix,r=e.disabled,l=r===void 0?!1:r,i=e.isValid,c=i===void 0?!1:i,m=e.isInvalid,n=m===void 0?!1:m,u=e.feedbackTooltip,f=u===void 0?!1:u,x=e.feedback,k=e.className,w=e.style,v=e.label,C=e.children,b=e.custom,V=e.lang,L=e["data-browse"],F=e.as,R=F===void 0?"div":F,g=e.inputAs,D=g===void 0?"input":g,S=N(e,ve),A=b?[d,"custom"]:[t,"form-file"],H=A[0],E=A[1];t=$(H,E);var B="file",J=I.useContext(h),G=J.controlId,K=I.useMemo(function(){return{controlId:s||G,custom:b}},[G,b,s]),T=v!=null&&v!==!1&&!C,M=a.createElement(ae,P({},S,{ref:o,isValid:c,isInvalid:n,disabled:l,as:D,lang:V}));return a.createElement(h.Provider,{value:K},a.createElement(R,{style:w,className:y(k,t,b&&"custom-"+B)},C||a.createElement(a.Fragment,null,b?a.createElement(a.Fragment,null,M,T&&a.createElement(O,{"data-browse":L},v)):a.createElement(a.Fragment,null,T&&a.createElement(O,null,v),M),(c||n)&&a.createElement(U,{type:c?"valid":"invalid",tooltip:f},x))))});q.displayName="FormFile";q.Input=ae;q.Label=O;const be=q;var pe=["bsPrefix","className","as","muted"],te=a.forwardRef(function(e,o){var s=e.bsPrefix,t=e.className,d=e.as,r=d===void 0?"small":d,l=e.muted,i=N(e,pe);return s=$(s,"form-text"),a.createElement(r,P({},i,{ref:o,className:y(t,s,l&&"text-muted")}))});te.displayName="FormText";const xe=te;var z=a.forwardRef(function(e,o){return a.createElement(j,P({},e,{ref:o,type:"switch"}))});z.displayName="Switch";z.Input=j.Input;z.Label=j.Label;const Fe=z;var Pe=["bsPrefix","inline","className","validated","as"],Ce=ne("form-row"),Ie={inline:!1},p=a.forwardRef(function(e,o){var s=e.bsPrefix,t=e.inline,d=e.className,r=e.validated,l=e.as,i=l===void 0?"form":l,c=N(e,Pe);return s=$(s,"form"),a.createElement(i,P({},c,{ref:o,className:y(d,r&&"was-validated",t&&s+"-inline")}))});p.displayName="Form";p.defaultProps=Ie;p.Row=Ce;p.Group=re;p.Control=le;p.Check=j;p.File=be;p.Switch=Fe;p.Label=oe;p.Text=xe;const Ee=p;export{Ee as F};
//# sourceMappingURL=Form-08917b8a.js.map
