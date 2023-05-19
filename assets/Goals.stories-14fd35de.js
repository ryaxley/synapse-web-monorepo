import{j as t,a as o}from"./jsx-runtime-095bf462.js";import{r as h}from"./index-8db94870.js";import{u as F,E as A,b9 as O,bf as Q}from"./EntityTypeUtils-475267f8.js";import{t as j,k as B}from"./SynapseConstants-667d004c.js";import"./getEndpoint-ac94413e.js";import{u as P}from"./useShowDesktop-4eaeb2a6.js";import{a as $}from"./useGetQueryResultBundle-cbe728e3.js";import{E as K}from"./ExpandableContent-d08fad45.js";import{Q as R}from"./QueryCount-f4d1598a.js";import{B as L}from"./Button-999a9bbd.js";import{g as c}from"./queryUtils-d5bb7a28.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-c82a83d4.js";import"./isArray-5e3f9107.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./SvgIcon-2fc096fa.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-ec547c4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./IconSvg-999128b5.js";import"./Tooltip-bd620372.js";import"./useTheme-b607537b.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./TransitionGroupContext-0df7f063.js";import"./utils-724ac38b.js";import"./Clear-64952050.js";import"./Box-45d8e94e.js";import"./extendSxProp-cb9d3182.js";import"./Link-76c266e8.js";import"./Typography-26751034.js";import"./Button-5637ed55.js";import"./Alert-dfa7a661.js";import"./createWithBsPrefix-0fdadc7a.js";import"./index-58d3fd43.js";import"./useInfiniteQuery-142c1fd1.js";import"./infiniteQueryBehavior-8091558b.js";import"./merge-56dfad99.js";import"./_Uint8Array-d89264d0.js";import"./_MapCache-b4175f27.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./_baseClone-ba7f8ca2.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-f574086f.js";import"./_baseRest-ea8abda5.js";import"./_isIterateeCall-aea44a8b.js";import"./sqlFunctions-6a18b613.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-fbe3eeca.js";import"./ButtonBase-aaf12687.js";import"./emotion-react.browser.esm-722d93a9.js";import"./assertThisInitialized-081f9914.js";import"./cloneDeep-b78cfe6d.js";function q({link:a,summary:n,countSql:l,title:i}){return t(K,{title:o("div",{className:"Goals__Mobile__Header",children:[l&&t("span",{className:"Goals__Mobile__Header__Count",children:t(R,{parens:!1,query:{sql:l}})}),o("span",{className:"Goals__Mobile__Header__Title",children:[" ",i," "]})]}),content:o("div",{className:"Goals__Mobile__Content",children:[t("p",{children:n}),t(L,{variant:"contained",color:"secondary",className:"Goals__Mobile__Content__Link",href:a,children:"Explore"})]})})}try{q.displayName="GoalsMobile",q.__docgenInfo={description:"",displayName:"GoalsMobile",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}function E({asset:a,link:n,summary:l,countSql:i,title:d}){return o("div",{className:"Goals__Card",children:[t("div",{className:"Goals__Card__header",style:{background:`url('${a}')`},children:o("p",{children:[o("span",{className:"Goals__Card__header__title",children:[" ",d," "]}),i&&t("span",{className:"Goals__Card__header__count",children:t(R,{parens:!1,query:{sql:i}})})]})}),o("div",{className:"Goals__Card__summary",children:[o("p",{children:[" ",l," "]}),t(L,{className:"Goals__Card__summary__link",variant:"contained",color:"secondary",href:n,children:"Explore"})]})]})}try{E.displayName="GoalsDesktop",E.__docgenInfo={description:"",displayName:"GoalsDesktop",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}const G=a=>{const{entityId:n}=a,{accessToken:l}=F(),[i,d]=h.useState(),[_,b]=h.useState(),C=P(),w={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:n,partMask:j|B,query:{sql:`select * from ${n} order by ItemOrder`}},{data:e}=$(w);h.useEffect(()=>{(async()=>{try{const m=c("Asset",e),r=(e==null?void 0:e.queryResult.queryResults.rows.map(s=>s.values[m]))??[];if(r.some(s=>s===null)&&console.warn("Row has null value(s) when no nulls expected"),r.length===0)return;const p={includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:r.map(s=>({associateObjectId:n,associateObjectType:O.TableEntity,fileHandleId:s}))},g=await Q(p,l);b(void 0),d(g.requestedFiles.filter(s=>s.preSignedURL!==void 0).map(s=>s.preSignedURL))}catch(m){console.error("Error on get data",m),b(m)}})()},[n,l,e]);const S=c("TableId",e),y=c("CountSql",e),D=c("Title",e),M=c("Summary",e),T=c("Link",e);return o("div",{className:`Goals${C?"__Desktop":""}`,children:[_&&t(A,{error:_}),e==null?void 0:e.queryResult.queryResults.rows.map((I,m)=>{const r=I.values;r.some(H=>H===null)&&console.warn("Row has null value(s) when no nulls expected");const f=S>-1?r[S]:void 0;let p;y>-1&&r[y]?p=r[y]:f&&(p=`SELECT * FROM ${f}`);const g=r[D],s=r[M],V=r[T],U=(i==null?void 0:i[m])??"",N={countSql:p,title:g,summary:s,link:V,asset:U};return C?t(E,{...N}):t(q,{...N})})]})};try{G.displayName="Goals",G.__docgenInfo={description:"",displayName:"Goals",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}const ze={title:"Home Page/Goals",component:G},u={args:{entityId:"syn22315959"}};var k,x,v;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    entityId: 'syn22315959'
  }
}`,...(v=(x=u.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const Je=["Demo"];export{u as Demo,Je as __namedExportsOrder,ze as default};
//# sourceMappingURL=Goals.stories-14fd35de.js.map
