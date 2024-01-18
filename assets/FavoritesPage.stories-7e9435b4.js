import{j as r,a as i}from"./jsx-runtime-9dc53467.js";import{r as a}from"./index-76fb7be0.js";import{S as L}from"./Sort-f9010d36.js";import{D as f}from"./index-3619b06a.js";import{v as O,E as P,G as b,a2 as k}from"./SynapseClient-1dd62219.js";import{S as A}from"./LoadingScreen-d62555af.js";import{c as R,b as _}from"./useFavorites-37f7a014.js";import{I as E}from"./IconSvg-3c89f0af.js";import{P as j}from"./getEndpoint-ac94413e.js";import{E as G}from"./EntityIcon-d12f4e2b.js";import{F as $}from"./Form-afa944a6.js";import{T as z}from"./Tooltip-3e2f7ab3.js";import{T as H}from"./Table-9e7fc977.js";import"./_commonjsHelpers-de833af9.js";import"./SynapseConstants-567f6998.js";import"./OrientationBanner-1c6f5b11.js";import"./FullWidthAlert-88a09c3d.js";import"./Alert-34cc4490.js";import"./styled-01bfb76d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-af041161.js";import"./Paper-b990f44f.js";import"./IconButton-e4815158.js";import"./ButtonBase-f3be4fb1.js";import"./emotion-react.browser.esm-04dee135.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useForkRef-8feb2ebf.js";import"./useIsFocusVisible-e5f6c995.js";import"./Stack-b0292d83.js";import"./extendSxProp-e91f91cb.js";import"./Box-ddce9904.js";import"./AlertTitle-1d33b140.js";import"./Typography-10432b83.js";import"./useTheme-541c21f5.js";import"./Grow-5b2ac6ed.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-7ba61cee.js";import"./ClickAwayListener-3907f9d7.js";import"./Button-6cf38875.js";import"./InfoTwoTone-1a20b6d6.js";import"./CheckCircleTwoTone-5c97bb6f.js";import"./inputBaseClasses-9710a733.js";import"./Fade-7e0b73d6.js";import"./Link-980677d0.js";import"./_getTag-a0ec24ca.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";import"./Backdrop-acbc2ec5.js";import"./LinearProgress-8d1ab3ac.js";import"./useMutation-fb195a91.js";import"./useInfiniteQuery-c210f1e8.js";import"./InfiniteQueryUtils-54ae7e6b.js";import"./ErrorOutlined-6b31cdea.js";import"./GetAppTwoTone-8acfb280.js";import"./InfoOutlined-1c91e984.js";import"./ThemeProvider-ab8de9d2.js";import"./Col-6a713b25.js";import"./createWithBsPrefix-6bc11d95.js";function U(){const{accessToken:h}=O(),[t,u]=a.useState(void 0),[s,g]=a.useState(""),[p,N]=a.useState(void 0),[v,c]=a.useState(),{data:l,isFetching:x,isError:C,error:d}=R();a.useEffect(()=>{C&&d&&c(d)},[C,d]),a.useEffect(()=>{c(h?void 0:new Error("Please sign in to access your favorites."))},[h]);const F=(e,o)=>{const n=e.toLowerCase();return o.filter(I=>I.name.toLowerCase().indexOf(n)>=0)};a.useEffect(()=>{if(l){let e=[...l.results];t&&e.sort((o,n)=>t.direction=="DESC"?o[t.field].toLowerCase()>n[t.field].toLowerCase()?1:-1:o[t.field].toLowerCase()<n[t.field].toLowerCase()?1:-1),s&&(e=F(s,e)),N(e)}},[l,s,t]);const{mutate:w}=_(),S=e=>u&&r(L,{role:"button",style:{height:"20px"},active:(t==null?void 0:t.field)===e,direction:(t==null?void 0:t.field)===e?t.direction==="DESC"?f.DESC:f.ASC:f.DESC,onClick:()=>{const o=e===(t==null?void 0:t.field)?t.direction==="ASC"?"DESC":"ASC":"DESC";u({field:e,direction:o})}});return v?r(P,{error:v}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[r(E,{icon:"searchOutlined"}),r($.Control,{type:"search",placeholder:"Favorite Name",value:s,onChange:e=>{g(e.target.value)}})]}),p&&p.length>0&&r("div",{className:"bootstrap-4-backport",children:i(H,{striped:!0,responsive:!0,className:"FavoritesTable",children:[r("thead",{children:i("tr",{children:[r("th",{}),i("th",{children:["Name",r("span",{children:S("name")})]}),i("th",{children:["Type",r("span",{children:S("type")})]})]})}),r("tbody",{children:p.map(e=>{if(e){const o=b(e.type);return i("tr",{children:[r("td",{children:r(z,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:r("a",{onClick:()=>{w(e.id)},className:"ignoreLink",children:r(E,{icon:"fav",sx:{color:"#EDC766"}})})})}),r("td",{children:r("a",{rel:"noopener noreferrer",href:`${j.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[r(G,{type:o,style:{marginRight:"5px"}}),k(o)]})]},e.id)}else return!1})})]})}),x&&r("div",{className:"placeholder",children:r(A,{size:30})})]})}const Be={title:"Synapse/FavoritesPage",component:U},m={};var y,T,D;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const er=["Demo"];export{m as Demo,er as __namedExportsOrder,Be as default};
//# sourceMappingURL=FavoritesPage.stories-7e9435b4.js.map
