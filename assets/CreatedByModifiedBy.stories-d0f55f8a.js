import{j as t,a as r,F as k}from"./jsx-runtime-670450c2.js";import{r as V,h as w}from"./SynapseConstants-41b9b1f3.js";import{aS as h,cj as z,an as G,aE as P}from"./SynapseContext-72a7c167.js";import{u as K}from"./useEntity-1beda5bd.js";import{b as Q}from"./useGetQueryResultBundle-0ef2ee49.js";import{U as C}from"./UserCard-e13d1f05.js";import{f as y}from"./DateFormatter-ab8f20db.js";import{C as M}from"./ConditionalWrapper-1e5f9ce7.js";import{d as u}from"./dayjs.min-e0adaab4.js";import{B as H}from"./Box-f1921dc6.js";import{B as J}from"./Breadcrumbs-5c1ba87a.js";import{S as N}from"./Skeleton-1dacd4a8.js";import{T as d}from"./Typography-11c3a983.js";import{T as f}from"./Clear-91cd1db3.js";import{I as b}from"./FullWidthAlert-8227c0a5.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./isArray-035e79ba.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-c19d944e.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-0c1c5adc.js";import"./styled-ad116ea3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Transition-be94c839.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useForkRef-dd8a6e5c.js";import"./getEndpoint-5374ab4d.js";import"./SvgIcon-5d261848.js";import"./IconSvg-a1f5b5d5.js";import"./Button-52793ab0.js";import"./ButtonBase-c3619648.js";import"./emotion-react.browser.esm-54ef836f.js";import"./assertThisInitialized-081f9914.js";import"./useIsFocusVisible-83eed526.js";import"./Button-7d415009.js";import"./Alert-e95775eb.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-3470f280.js";import"./index-4d501b15.js";import"./useMutation-77ae379b.js";import"./useInfiniteQuery-dc19e18f.js";import"./pick-7c3eda8a.js";import"./toString-5a82e5cc.js";import"./isSymbol-8e91c81d.js";import"./_baseClone-1e7dda47.js";import"./_baseSlice-cf92e063.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-be34b0dd.js";import"./times-880aa0a3.js";import"./toInteger-e1f6ac73.js";import"./ToastMessage-200a60a9.js";import"./assertThisInitialized-3be3daa4.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-1138dcf4.js";import"./Overlay-727e7006.js";import"./contains-33365353.js";import"./usePopperMarginModifiers-2a31c4ba.js";import"./useWaitForDOMRef-54076dc2.js";import"./utc-8a3e1a17.js";import"./extendSxProp-094a0213.js";import"./index-1aacdabe.js";import"./isHostComponent-fa76b8d9.js";function X(){return t(d,{variant:"breadcrumb1",sx:{color:"grey.700"},children:"/"})}function g(T){var _;const{entityId:p,versionNumber:m}=T,i=`${p}${m?`.${m}`:""}`,{data:e}=K(p,m),{data:c}=Q({entityId:p,query:{sql:`SELECT * FROM ${i} LIMIT 0`},partMask:V,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!(e&&h(e))}),x=(_=c==null?void 0:c.responseBody)==null?void 0:_.lastUpdatedOn,o=e?z(G(e.concreteType)):"",F="This is the user who created this Dataset. This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.",q=r(k,{children:[r("p",{children:["This is when the configuration of this ",o," was last changed."]}),t("p",{children:"Configuration changes may be triggered by (for example):"}),r("ul",{children:[r("li",{children:["Editing the name of the ",o]}),r("li",{children:["Updating the schema used by the ",o]})]}),r("p",{children:["This does NOT reflect changes to the data displayed in the the"," ",o,"."]})]}),R=`This is when the configuration of this ${o} was last changed.`,W=`When data changes, the ${o} is rebuilt to reflect those changes. This is the last time changes were made to the data.`,B=`${i}-createdByTooltip`,I=`${i}-modifiedByTooltip`,S=`${i}-lastUpdatedTooltip`,l={width:"16px",height:"16px",ml:"4px",verticalAlign:"text-bottom"};return t(H,{sx:{bgcolor:"grey.100",py:"10px"},children:r(J,{separator:t(X,{}),sx:{"& .MuiBreadcrumbs-ol":{justifyContent:"center"}},children:[t(M,{condition:!e,wrapper:N,children:r(d,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":B,children:[o," created by"," ",t(C,{ownerId:e==null?void 0:e.createdBy,size:w})," on"," ",y(u(e==null?void 0:e.createdOn)),e&&P(e)&&t(f,{id:B,title:F,children:t(b,{sx:l})})]})}),t(M,{condition:!e,wrapper:N,children:r(d,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":I,children:[e&&h(e)?"Configuration":o," last modified by"," ",t(C,{ownerId:e==null?void 0:e.modifiedBy,size:w})," on"," ",y(u(e==null?void 0:e.modifiedOn)),e&&h(e)&&t(f,{id:I,title:q,"aria-label":R,children:t(b,{sx:l})})]})}),x&&r(d,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":S,children:[o," last rebuilt on ",y(u(x)),t(f,{title:W,id:S,children:t(b,{sx:l})})]})]})})}try{g.displayName="CreatedByModifiedBy",g.__docgenInfo={description:"",displayName:"CreatedByModifiedBy",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const lt={title:"Synapse/EntityPage/CreatedByModifiedBy",component:g},a={args:{entityId:"syn36695878",versionNumber:1}},s={args:{entityId:"syn35197546"}},n={args:{entityId:"syn26302617"}};var v,E,D;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    entityId: 'syn36695878',
    versionNumber: 1
  }
}`,...(D=(E=a.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var U,L,O;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    entityId: 'syn35197546'
  }
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var $,A,j;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    entityId: 'syn26302617'
  }
}`,...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const ht=["File","Table","Dataset"];export{n as Dataset,a as File,s as Table,ht as __namedExportsOrder,lt as default};
//# sourceMappingURL=CreatedByModifiedBy.stories-d0f55f8a.js.map
