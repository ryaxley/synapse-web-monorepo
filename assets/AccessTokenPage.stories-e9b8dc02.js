import{a as o,j as e,F as v}from"./jsx-runtime-ad672792.js";import{r as n}from"./index-f1f749bf.js";import{ar as x,c2 as Y,aI as K,c3 as D,aX as H,c4 as J,aH as Z}from"./SynapseContext-3e3caab0.js";import{u as $}from"./useInfiniteQuery-a9217104.js";import{l as V}from"./LoadingScreen-caed58a2.js";import{d as w}from"./dayjs.min-e0adaab4.js";import{I as B}from"./IconSvg-26203fb4.js";import{W as ee}from"./WarningModal-cab5ead1.js";import{r as oe}from"./relativeTime-93b00284.js";import{a as ae}from"./Clear-b8710472.js";import{B as k}from"./Button-7d415009.js";import{C as se}from"./CopyToClipboardInput-113585d1.js";import{C as S}from"./Checkbox-9c5dca81.js";import{M as T,a as re}from"./Modal-6ffa84ac.js";import{F as te}from"./Form-4a4de212.js";import{c as E,b as ne}from"./FormLabel-897d2462.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./isArray-5e3f9107.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-2132700c.js";import"./SvgIcon-df0486e2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-6c4f550e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Box-15541d3d.js";import"./extendSxProp-14561297.js";import"./Button-00c0a018.js";import"./ButtonBase-b1ee19a8.js";import"./emotion-react.browser.esm-4670931c.js";import"./assertThisInitialized-081f9914.js";import"./TransitionGroupContext-a2b6e27b.js";import"./useForkRef-dd8a6e5c.js";import"./useTheme-189ee79b.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./infiniteQueryBehavior-47f31aa3.js";import"./Typography-b949a6a2.js";import"./isHostComponent-fa76b8d9.js";import"./IconCopy-4d77a0f7.js";import"./ToastMessage-4759781b.js";import"./FullWidthAlert-2ec7a684.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./contains-33365353.js";import"./useWillUnmount-7fb15b8a.js";import"./usePrevious-9f30f8c7.js";import"./useWaitForDOMRef-54076dc2.js";import"./FormGroup-08e5002f.js";import"./Col-1f1afacc.js";function ie(a){const{accessToken:d,keyFactory:i}=x();return $(i.getPersonalAccessTokensQueryKey(),async r=>await Y(d,r.pageParam),{...a,getNextPageParam:r=>r.nextPageToken})}const u={openid:{displayName:"OpenID",description:"Access to your Synapse identity and certain user information"},view:{displayName:"View",description:"Permission to view the content which you can view"},modify:{displayName:"Modify",description:"Permission to modify the content which you can modify (create, change, delete)"},download:{displayName:"Download",description:"Permission to download the content which you can download"},authorize:{displayName:"Authorize",description:"Permission to authorize others to access the resources you control"},offline_access:{displayName:"Offline Access",description:"Permission to access the resources authorized here when you are not logged in, until you explicitly revoke access"}};w.extend(oe);const A=({accessToken:a,onDelete:d})=>{const{accessToken:i}=x(),[r,c]=n.useState(!1),t=K(),l=a.state==="EXPIRED";return o("div",{className:"cardContainer PersonalAccessTokenCard"+(l?" bg-warning":""),children:[e(ee,{title:"Confirm Deletion",modalBody:o(v,{children:[e("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),e("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]}),confirmButtonText:"Delete Token",onCancel:()=>c(!1),onConfirm:s=>{D(s,i).then(()=>{d(),c(!1)}).catch(g=>{t(g)})},confirmButtonVariant:"danger",show:r,onConfirmCallbackArgs:[a.id,i]}),o("div",{className:"SRC-cardContent",children:[o("div",{className:"SRC-eqHeightRow SRC-userCardName",children:[e("span",{className:"SRC-blackText",children:a.name}),l&&e(ae,{title:"This token has expired. It no longer works and can only be deleted.",enterNextDelay:100,children:e("span",{"aria-hidden":"true",children:e(B,{icon:"warning"})})})]}),o("div",{className:"SRC-eqHeightRow",children:[e("span",{children:"Permissions: "}),a.scopes.map(s=>e("span",{className:"PersonalAccessTokenCard__ScopeName SRC-primary-text-color SRC-primary-color-hover SRC-hand-cursor SRC-inlineFlex","data-tip":u[s].description,children:u[s].displayName},s))]}),o("div",{className:"SRC-eqHeightRow",children:[o("span",{children:["Last used ",w(a.lastUsed).fromNow()]}),e("span",{className:"SRC-deemphasized-text",children:" | "}),o("span",{children:["Created ",w(a.createdOn).fromNow()]})]})]}),e("div",{className:"PersonalAccessTokenCard__DeleteButton",children:e(k,{variant:"default","aria-label":"delete",onClick:()=>{l?D(a.id,i).then(()=>{d()}).catch(s=>{t(s)}):c(!0)},children:e(B,{icon:"delete","aria-hidden":"true"})})})]})};try{A.displayName="AccessTokenCard",A.__docgenInfo={description:"",displayName:"AccessTokenCard",props:{accessToken:{defaultValue:null,description:"Record referring to an access token, not a token itself",name:"accessToken",required:!0,type:{name:"AccessTokenRecord"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(...args: any[]) => void"}}}}}catch{}const ce="You must provide a token name and at least one permission.",P=({onClose:a,onCreate:d})=>{const{accessToken:i}=x(),[r,c]=n.useState(""),[t,l]=n.useState(!0),[s,g]=n.useState(!1),[y,C]=n.useState(!1),[f,m]=n.useState(!1),[M,z]=n.useState(!1),[j,O]=n.useState(""),[W,R]=n.useState(""),[G,I]=n.useState(!1),Q=h=>{c(h.target.value)},U=(h,p)=>!!h&&p.some(N=>N),X=async h=>{if(h.preventDefault(),U(r,[t,s,y]))try{const p={scope:[],name:r};t&&p.scope.push("view"),s&&p.scope.push("download"),y&&p.scope.push("modify"),m(!0);const N=await J(p,i);m(!1),O(N.token),z(!0),d()}catch(p){m(!1),R(p.reason),I(!0)}else R(ce),I(!0)};return e(T,{className:"bootstrap-4-backport AccessTokenModal",animation:!1,show:!0,onHide:a,backdrop:"static",children:o(te,{children:[e(T.Header,{closeButton:!0,children:e(T.Title,{children:"Create New Personal Access Token"})}),e(re,{children:f?V:M?o(v,{children:[e("span",{className:"SRC-boldText",children:"This token will not be able to be retrieved again."})," ",e("span",{children:"If needed, generate a new personal access token, and delete this one."}),e("div",{className:"AccessTokenModal__CopyToClipboardContainer",children:e(se,{value:j,inputWidth:"350px"})}),e("p",{children:"This token grants access to your account functions and should be treated like a password."})]}):o("div",{className:"SRC-marginFive",children:[o("div",{className:"SRC-marginBottomTen",children:[e(E,{className:"SRC-boldText",children:"Token Name"}),e(ne,{autoFocus:!0,className:"AccessTokenModal__TokenNameInput",value:r,onChange:Q,type:"text",placeholder:"e.g. Synapse command line access on my laptop"})]}),o("div",{className:"SRC-marginBottomTop",children:[e(E,{className:"SRC-boldText",children:"Token Permissions"}),e(S,{label:u.view.displayName,checked:t,onChange:()=>l(!t),children:o("div",{className:"AccessTokenModal__ScopeDescription",children:[u.view.description,". Required to use Synapse programmatic clients."]})}),e(S,{label:u.download.displayName,checked:s,onChange:()=>g(!s),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:u.download.description})}),e(S,{label:u.modify.displayName,checked:y,onChange:()=>C(!y),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:u.modify.description})})]}),e("div",{className:"SRC-center-text",children:G&&e(H,{error:W})})]})}),e(T.Footer,{children:M?e(k,{variant:"outline",onClick:a,children:"Close"}):o(v,{children:[e(k,{variant:"outline",onClick:a,children:"Cancel"}),e(k,{type:"submit",variant:"sds-primary",onClick:h=>{X(h)},children:"Create Token"})]})})]})})};try{P.displayName="CreateAccessTokenModal",P.__docgenInfo={description:"",displayName:"CreateAccessTokenModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(...args: any[]) => void"}},onCreate:{defaultValue:null,description:"",name:"onCreate",required:!0,type:{name:"(...args: any[]) => void"}}}}}catch{}const b=({title:a,body:d})=>{const[i,r]=n.useState(!1),{data:c,isLoading:t,error:l,refetch:s,fetchNextPage:g,hasNextPage:y}=ie(),C=()=>{s()},f=(c==null?void 0:c.pages.flatMap(m=>m.results))??[];return o("div",{className:"PersonalAccessTokenPage bootstrap-4-backport",children:[o("div",{className:"PersonalAccessTokenPage__Header",children:[o("div",{className:"PersonalAccessTokenPage__Header__CopyText",children:[e("h1",{children:a}),d]}),e("div",{className:"PersonalAccessTokenPage__Header__CreateButton",children:e(k,{variant:"sds-primary",onClick:()=>r(!0),children:"Create New Token"})})]}),o(Z,{children:[i&&e(P,{onClose:()=>r(!1),onCreate:C}),o("div",{children:[!t&&f.length===0&&e("div",{className:"PersonalAccessTokenPage__NoTokensMessage SRC-text-title",children:"You currently have no personal access tokens."}),o("div",{className:"PersonalAccessTokenPage__CardList",children:[f.map(m=>e(A,{accessToken:m,onDelete:C},m.id)),t&&V,!t&&y&&!l&&e("div",{className:"PersonalAccessTokenPage__CardList__LoadMore",children:e(k,{className:"PersonalAccessTokenPage__CardList__LoadMore__Button",variant:"sds-primary",onClick:()=>{g()},children:"Load More"})})]}),l&&e(H,{error:l})]})]})]})};try{b.displayName="AccessTokenPage",b.__docgenInfo={description:"",displayName:"AccessTokenPage",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string | Element"}}}}}catch{}const yo={title:"Synapse/AccessTokenPage",component:b},_={args:{title:"Personal Access Tokens",body:"Create and manage tokens that can be used to access your Synapse account programmatically."}};var L,q,F;_.parameters={..._.parameters,docs:{...(L=_.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Personal Access Tokens',
    body: 'Create and manage tokens that can be used to access your Synapse account programmatically.'
  }
}`,...(F=(q=_.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const ko=["Demo"];export{_ as Demo,ko as __namedExportsOrder,yo as default};
//# sourceMappingURL=AccessTokenPage.stories-e9b8dc02.js.map
