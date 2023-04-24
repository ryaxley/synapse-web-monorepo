import{j as t,a as o}from"./jsx-runtime-ad672792.js";import{r as h}from"./index-f1f749bf.js";import{ah as F,aN as A,at as B,aB as O}from"./SynapseContext-59cad26b.js";import{u as Q}from"./useGetQueryResultBundle-2091355d.js";import{u as j}from"./useShowDesktop-5e97065b.js";import{E as P}from"./ExpandableContent-83b76b33.js";import{Q as R}from"./QueryCount-819ee507.js";import{B as L}from"./Button-7d415009.js";import{g as p}from"./queryUtils-465b834e.js";import{o as $,i as K}from"./SynapseConstants-9d1f6e44.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./isArray-5e3f9107.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./getEndpoint-5374ab4d.js";import"./SvgIcon-93d86b25.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-8837a0b3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./IconSvg-ec267953.js";import"./Clear-3aa4a8c0.js";import"./useTheme-c4678cf9.js";import"./utils-ef816bd8.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./Box-2e3c1244.js";import"./extendSxProp-a6801df0.js";import"./Button-e0234af7.js";import"./ButtonBase-26873d31.js";import"./emotion-react.browser.esm-a8a50fc7.js";import"./assertThisInitialized-081f9914.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./useInfiniteQuery-d6f5aa1a.js";import"./infiniteQueryBehavior-3c2c4d58.js";import"./merge-7b951fcd.js";import"./_baseClone-9175f029.js";import"./_MapCache-a2118789.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-9be81105.js";import"./_isIterateeCall-bb23c655.js";import"./sqlFunctions-c9ab7ea9.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-48d2af16.js";import"./cloneDeep-ec538173.js";function q({link:a,summary:n,countSql:l,title:i}){return t(P,{title:o("div",{className:"Goals__Mobile__Header",children:[l&&t("span",{className:"Goals__Mobile__Header__Count",children:t(R,{parens:!1,query:{sql:l}})}),o("span",{className:"Goals__Mobile__Header__Title",children:[" ",i," "]})]}),content:o("div",{className:"Goals__Mobile__Content bootstrap-4-backport",children:[t("p",{children:n}),t(L,{variant:"secondary",className:"Goals__Mobile__Content__Link",href:a,children:"Explore"})]})})}try{q.displayName="GoalsMobile",q.__docgenInfo={description:"",displayName:"GoalsMobile",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}function b({asset:a,link:n,summary:l,countSql:i,title:d}){return o("div",{className:"Goals__Card bootstrap-4-backport",children:[t("div",{className:"Goals__Card__header",style:{background:`url('${a}')`},children:o("p",{children:[o("span",{className:"Goals__Card__header__title",children:[" ",d," "]}),i&&t("span",{className:"Goals__Card__header__count",children:t(R,{parens:!1,query:{sql:i}})})]})}),o("div",{className:"Goals__Card__summary",children:[o("p",{children:[" ",l," "]}),t(L,{className:"Goals__Card__summary__link",variant:"secondary",href:n,children:"Explore"})]})]})}try{b.displayName="GoalsDesktop",b.__docgenInfo={description:"",displayName:"GoalsDesktop",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}const G=a=>{const{entityId:n}=a,{accessToken:l}=F(),[i,d]=h.useState(),[_,C]=h.useState(),E=j(),w={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:n,partMask:$|K,query:{sql:`select * from ${n} order by ItemOrder`}},{data:e}=Q(w);h.useEffect(()=>{(async()=>{try{const m=p("Asset",e),r=(e==null?void 0:e.queryResult.queryResults.rows.map(s=>s.values[m]))??[];if(r.some(s=>s===null)&&console.warn("Row has null value(s) when no nulls expected"),r.length===0)return;const c={includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:r.map(s=>({associateObjectId:n,associateObjectType:B.TableEntity,fileHandleId:s}))},g=await O(c,l);C(void 0),d(g.requestedFiles.filter(s=>s.preSignedURL!==void 0).map(s=>s.preSignedURL))}catch(m){console.error("Error on get data",m),C(m)}})()},[n,l,e]);const N=p("TableId",e),y=p("CountSql",e),D=p("Title",e),M=p("Summary",e),T=p("Link",e);return o("div",{className:`Goals${E?"__Desktop":""}`,children:[_&&t(A,{error:_}),e==null?void 0:e.queryResult.queryResults.rows.map((S,m)=>{const r=S.values;r.some(H=>H===null)&&console.warn("Row has null value(s) when no nulls expected");const f=N>-1?r[N]:void 0;let c;y>-1&&r[y]?c=r[y]:f&&(c=`SELECT * FROM ${f}`);const g=r[D],s=r[M],V=r[T],U=(i==null?void 0:i[m])??"",k={countSql:c,title:g,summary:s,link:V,asset:U};return E?t(b,{...k}):t(q,{...k})})]})};try{G.displayName="Goals",G.__docgenInfo={description:"",displayName:"Goals",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}const Ke={title:"Home Page/Goals",component:G},u={args:{entityId:"syn22315959"}};var I,x,v;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    entityId: 'syn22315959'
  }
}`,...(v=(x=u.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const Ye=["Demo"];export{u as Demo,Ye as __namedExportsOrder,Ke as default};
//# sourceMappingURL=Goals.stories-6105ca0a.js.map
