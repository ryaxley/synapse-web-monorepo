import{j as e,a as u,F as I}from"./jsx-runtime-670450c2.js";import{r as o,R as H}from"./index-f1f749bf.js";import{a9 as Z,ab as B,at as te,av as ne,bi as se,aN as ie,bj as Q,bk as le,am as oe}from"./SynapseContext-e2a1e11c.js";import{g as de,B as ue,P as J}from"./getEndpoint-5374ab4d.js";import{I as ce}from"./IconCopy-9a72c17a.js";import{S as me}from"./SkeletonTable-46700549.js";import{I as k}from"./IconSvg-5d6274db.js";import{T as fe}from"./ToastMessage-45d6abdb.js";import{C as pe,a as Ce,c as he,d as Le,L as ge,u as Re,i as ye,H as ve}from"./SynapseConstants-9273577d.js";import{T as Se}from"./Clear-4868d5d0.js";import{S as X}from"./Skeleton-444b9e51.js";import{O as we}from"./Overlay-8c20c2f5.js";function _e(a){a&&clearTimeout(a)}const be=250,Ne=500;function ee(a,r,t=be,n=Ne,l="top-start"){const i=o.useRef(!1),f=o.useRef(null),[d,C]=o.useState(!1);o.useEffect(()=>(i.current=!0,()=>{i.current=!1}),[]);const c=o.useCallback((s=d,g=!0)=>{_e(f.current),g?f.current=setTimeout(()=>{i.current&&C(s)},s?t:n):C(s)},[n,t,d]),R=o.useCallback((s=!0)=>{c(!0,s)},[c]),p=o.useCallback((s=!0)=>{c(!1,s)},[c]);return{OverlayComponent:o.useCallback(()=>e(we,{target:r.current,show:d,placement:l,children:({placement:s,arrowProps:g,show:L,popper:y,...v})=>e("div",{className:"bootstrap-4-backport",onMouseEnter:()=>{c(!0,!1)},onMouseLeave:()=>{p(!0)},...v,style:{...v.style,width:"max-content",minWidth:"300px"},children:a})}),[a,d,l,r,c,p]),isShowing:d,toggleShow:R,toggleHide:p,toggle:c}}async function Ue(a){return await(await fetch(a)).blob()}function Ee(a){URL.revokeObjectURL(a)}function Ae(a){const[r,t]=o.useState(void 0),n=ae(r);return o.useEffect(()=>{let l=!0;return a&&(async f=>{try{const d=await Ue(f);l&&t(d)}catch{console.error(`Failed to fetch object with presigned URL ${f}. See network log for details`)}})(a),()=>{l=!1}},[a]),n}function ae(a){const[r,t]=o.useState(void 0);return o.useEffect(()=>{if(a){const n=URL.createObjectURL(a);t(n)}else t(void 0)},[a]),o.useEffect(()=>()=>{r&&Ee(r)},[r]),r}function Qe(a,r,t,n){r.requestedFiles.length!==1&&console.warn("useGetPresignedUrlContent only supports one file at a time");const{accessToken:l,keyFactory:i}=Z(),f=async()=>{const d=await te(r,l);return await ne(a,d.requestedFiles[0].preSignedURL,t)};return B(i.getPresignedUrlContentQueryKey(a,r,t),f,{staleTime:1/0,...n})}function Ie(a,r){const{keyFactory:t}=Z(),n=async()=>{const l=await se(a);return l?await(await fetch(l,{method:"GET",mode:"cors",cache:"no-cache"})).blob():null};return B(t.getProfileImageQueryKey(a),n,{staleTime:1/0,...r})}async function Je(a){return{list:(await ie(a)).list.map(n=>n.profilePicureFileHandleId?{...n,clientPreSignedURL:`${de(ue.REPO_ENDPOINT)}/repo/v1/userProfile/${n.ownerId}/image/preview?redirect=true`}:n)}}const z=["chocolate","black","firebrick","maroon","olive","green","forestgreen","darkturquoise","teal","blue","navy","darkmagenta","purple","blue","orangered","blueviolet"],Me=a=>{const r=a.split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0);return Math.abs(r)},Pe=a=>{const r=Me(a);return z[r%z.length]},ke=e("span",{className:"SRC-validatedProfileIcon",children:e("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M1.21612 12.9284C1.00431 13.5978 1.46323 14.3024 2.16925 14.4081L2.62816 14.4786C3.12238 14.5491 3.51069 14.9366 3.61659 15.4299L3.68719 15.8879C3.7931 16.5925 4.49912 17.0153 5.20514 16.8039L5.66405 16.663C6.15827 16.5221 6.68778 16.6982 6.97019 17.121L7.2526 17.5086C7.67621 18.0723 8.48813 18.178 9.01765 17.6847L9.37066 17.3676C9.75897 17.0153 10.2885 16.9448 10.7474 17.1915L11.171 17.4029C11.8064 17.7552 12.5831 17.4733 12.8302 16.8039L13.0067 16.3811C13.1832 15.9231 13.6774 15.606 14.1716 15.6413L14.6305 15.6765C15.3365 15.7117 15.9367 15.1128 15.8661 14.4081L15.8307 13.9501C15.7954 13.4569 16.0779 12.9636 16.5721 12.7875L16.9957 12.6113C17.6664 12.3294 17.9135 11.5543 17.5605 10.9554L17.2428 10.5678C16.9957 10.145 17.0663 9.58133 17.384 9.19378L17.7017 8.84145C18.1606 8.31297 18.09 7.50264 17.4899 7.07985L17.1016 6.83322C16.678 6.55137 16.5015 6.02289 16.6427 5.52964L16.7839 5.07162C16.9957 4.40221 16.5368 3.69757 15.8307 3.59187L15.3718 3.52141C14.8776 3.45094 14.4893 3.06339 14.3834 2.57014L14.3128 2.11212C14.2069 1.40748 13.5009 0.984696 12.7949 1.19609L12.3359 1.33702C11.8417 1.47795 11.3122 1.30179 11.0298 0.879L10.7474 0.491447C10.3238 -0.072267 9.51186 -0.177963 8.98235 0.315286L8.62934 0.632375C8.24103 0.984696 7.71151 1.05516 7.2526 0.808536L6.82899 0.597143C6.19357 0.244822 5.41694 0.526679 5.16984 1.19609L4.99333 1.61887C4.81683 2.07689 4.32261 2.39398 3.8284 2.35875L3.44009 2.28828C2.73407 2.25305 2.13395 2.852 2.20455 3.55664L2.23985 4.01466C2.27515 4.50791 1.99274 5.00116 1.49853 5.17732L1.07492 5.35348C0.404196 5.63533 0.15709 6.41044 0.5101 7.00939L0.757207 7.39694C1.00431 7.81972 0.933712 8.38344 0.616003 8.77099L0.298294 9.12331C-0.16062 9.65179 -0.0900176 10.4621 0.5101 10.8849L0.898411 11.1315C1.32202 11.4134 1.49853 11.9419 1.35732 12.4351L1.21612 12.9284ZM6.37007 7.6788L7.92332 9.26424L11.6652 5.56487L13.2891 7.18555L9.54716 10.8497L7.92332 12.4704L6.29947 10.8497L4.74622 9.29947L6.37007 7.6788Z",fill:"#28A745"})})}),q=a=>{const{menuActions:r=[],userProfile:t}=a;return e("div",{className:"dropdown open",children:e("ul",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenu1",children:r.map((n,l)=>{const i=()=>n.callback(t);return n.field===pe?e("hr",{className:"SRC-break"},`${n.field}_${l}`):e("li",{role:"menuitem",style:{listStyle:"none"},className:"SRC-menu-item SRC-table-dropdown-list SRC-primary-background-color-hover",onClick:i,onKeyPress:i,children:e("button",{className:"SRC-menuAction",children:n.field})},n.field)})})})};try{q.displayName="UserCardContextMenu",q.__docgenInfo={description:"",displayName:"UserCardContextMenu",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},menuActions:{defaultValue:null,description:"",name:"menuActions",required:!0,type:{name:"MenuAction[]"}}}}}catch{}const Ve=e("span",{className:"SRC-certified-user-icon",children:u("svg",{width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.63578 14.1759C5.53042 14.0916 5.40399 14.0284 5.27756 14.0284L4.39256 13.9652C3.48648 13.902 2.68576 13.4384 2.15897 12.7641L0.0518096 17.2523C-0.137835 17.6738 0.220382 18.1584 0.683957 18.0741L2.5804 17.7159C2.81219 17.6738 3.06505 17.7791 3.19148 18.0109L4.11862 19.6966C4.35041 20.1181 4.94042 20.097 5.13006 19.6545L7.174 15.2927C6.85793 15.1663 6.584 14.9977 6.31007 14.7659L5.63578 14.1759Z",fill:"#58A158"}),e("path",{d:"M16.6564 17.2523L14.5492 12.7641C14.0224 13.4384 13.2217 13.8809 12.3156 13.9652L11.4306 14.0284C11.2831 14.0495 11.1778 14.0916 11.0724 14.1759L10.3981 14.7448C10.1453 14.9555 9.85025 15.1452 9.53418 15.2716L11.5781 19.6334C11.7678 20.0549 12.3788 20.0759 12.5896 19.6756L13.5167 17.9899C13.6431 17.7791 13.8749 17.6527 14.1278 17.6948L16.0242 18.0531C16.4878 18.1374 16.8671 17.6738 16.6564 17.2523Z",fill:"#58A158"}),e("path",{d:"M10.2503 13.2277C10.5453 12.9748 10.9246 12.8063 11.3249 12.7852L12.2099 12.722C13.1371 12.6588 13.8746 11.9212 13.9378 10.9941L14.001 10.1091C14.0221 9.70873 14.1906 9.32944 14.4435 9.03444L15.0335 8.36015C15.6446 7.64372 15.6446 6.61121 15.0335 5.91585L14.4435 5.24156C14.1906 4.94655 14.0221 4.56727 14.001 4.16691L13.9378 3.2819C13.8746 2.35475 13.1371 1.61724 12.2099 1.55403L11.3249 1.49081C10.9246 1.46974 10.5453 1.30117 10.2503 1.04831L9.57597 0.458307C8.85954 -0.152769 7.82703 -0.152769 7.13167 0.458307L6.45738 0.985097C6.16237 1.23796 5.78309 1.40653 5.38273 1.4276L4.49772 1.49081C3.57057 1.55403 2.83306 2.29153 2.76985 3.21868L2.70664 4.10369C2.68556 4.50405 2.51699 4.88334 2.26413 5.17834L1.67413 5.85263C1.06305 6.56907 1.06305 7.60157 1.67413 8.29694L2.26413 8.97123C2.51699 9.26623 2.68556 9.64552 2.70664 10.0459L2.76985 10.9309C2.83306 11.858 3.57057 12.5955 4.49772 12.6588L5.38273 12.722C5.78309 12.743 6.16237 12.9116 6.45738 13.1645L7.13167 13.7545C7.8481 14.3656 8.88061 14.3656 9.57597 13.7545L10.2503 13.2277ZM4.39236 7.11693C4.39236 4.92548 6.16237 3.15547 8.35382 3.15547C10.5453 3.15547 12.3153 4.92548 12.3153 7.11693C12.3153 9.30837 10.5453 11.0784 8.35382 11.0784C6.16237 11.0784 4.39236 9.2873 4.39236 7.11693Z",fill:"#58A158"}),e("path",{d:"M10.5875 6.0844L9.49182 5.87368C9.38646 5.85261 9.28111 5.7894 9.23896 5.68404L8.6911 4.69367C8.5436 4.44081 8.16431 4.44081 8.03788 4.69367L7.49002 5.68404C7.42681 5.7894 7.34252 5.85261 7.23716 5.87368L6.14144 6.0844C5.84644 6.14761 5.74108 6.50583 5.93072 6.71654L6.6893 7.53834C6.77359 7.62262 6.79466 7.72798 6.79466 7.83334L6.66823 8.95013C6.62609 9.24513 6.94216 9.45585 7.19502 9.32942L8.20646 8.84477C8.31181 8.80263 8.41717 8.80263 8.52253 8.84477L9.53396 9.32942C9.8079 9.45585 10.1029 9.24513 10.0608 8.95013L9.93433 7.83334C9.91325 7.72798 9.9554 7.60155 10.0397 7.53834L10.7983 6.71654C10.9879 6.48476 10.8825 6.14761 10.5875 6.0844Z",fill:"#C94281"})]})});function D({userProfile:a,isCertified:r}){const{summary:t,industry:n,location:l,url:i}=a;return e("div",{className:"SRC-cardMetaData",children:u("div",{className:"SRC-cardMetaData-scroll",children:[t&&u("div",{children:[e("p",{className:"SRC-card-metadata-title",children:" Bio "}),e("p",{children:t})]}),i&&u("div",{children:[e("p",{className:"SRC-card-metadata-title",children:" More Info "}),e("p",{children:i})]}),n&&u("div",{children:[e("p",{className:"SRC-card-metadata-title",children:" Industry "}),e("p",{children:n})]}),l&&u("div",{children:[e("p",{className:"SRC-card-metadata-title",children:" Location "}),e("p",{children:l})]}),r&&u("div",{children:[e("p",{className:"SRC-card-metadata-title",children:" Access "}),u("p",{children:[Ve," Certified Account"]})]})]})})}try{D.displayName="UserCardLarge",D.__docgenInfo={description:"UserCardLarge wraps around UserCardMedium",displayName:"UserCardLarge",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}}}}}catch{}const W=(a,r,t)=>n=>{n.preventDefault(),navigator.clipboard.writeText(r).then(()=>{t()})},U=({userProfile:a,menuActions:r,isLarge:t=!1,imageURL:n,hideEmail:l=!1,disableLink:i=!1,link:f,openLinkInNewTab:d=!1,isValidated:C,isCertified:c,isLoadingAvatar:R})=>{const[p,h]=o.useState(!1),[s,g]=o.useState(!1),L=o.useRef(null),y=()=>{h(!0),setTimeout(()=>{h(!1)},4e3)},{displayName:v,userName:m,firstName:S,lastName:_,position:E,company:P}=a;o.useEffect(()=>{const V=G=>{s&&setTimeout(()=>{s&&b()},10)};return window.addEventListener("mouseup",V,!1),()=>{window.removeEventListener("mouseup",V,!1)}},[]);const{data:A}=Q(a.ownerId,Ce),N=A==null?void 0:A.ORCID,b=V=>{g(G=>!G)};let w="";const x=f||`${J.PORTAL}#!Profile:${a.ownerId}`,O=`${m}@synapse.org`;v?w=v:S&&_?w=`${S} ${_}`:m&&(w=m);const F=e(M,{userProfile:a,imageURL:n,avatarSize:"LARGE",isLoadingAvatar:R}),$=u(H.Fragment,{children:[!l&&e(fe,{show:p,text:"Email address copied to clipboard",autohide:!0}),i&&F,!i&&e("a",{href:x,target:d?"_blank":"",rel:d?"noreferrer":"",className:`SRC-no-border-bottom-imp ${t?"SRC-isLargeCard":""}`,children:F}),u("div",{className:"SRC-cardContent",children:[u("p",{className:"SRC-eqHeightRow SRC-userCardName",children:[t||i?e("span",{className:t?"SRC-whiteText":"SRC-blackText",children:w}):e("a",{href:x,target:d?"_blank":"",rel:d?"noreferrer":"",tabIndex:0,className:"SRC-hand-cursor",children:w}),C&&e(Se,{title:"This user profile has been validated.",placement:"bottom",enterNextDelay:300,children:e("span",{children:ke})})]}),(E||P)&&u("p",{className:`${t?"SRC-whiteText":""}`,children:[E," ",E?" / ":""," ",P]}),!l&&u("p",{ref:L,className:`${t?"SRC-whiteText":""}
              SRC-hand-cursor SRC-eqHeightRow SRC-inlineFlex SRC-emailText SRC-cardSvg`,onClick:W(L,O,y),onKeyPress:W(L,O,y),tabIndex:0,children:[e("span",{style:{paddingRight:"5px",paddingBottom:"2px"},children:e("a",{className:`link ${t?"SRC-whiteText":""}`,children:`${m}@synapse.org`})}),e(ce,{})]}),N&&e("a",{href:N,target:"_blank",rel:"noopener noreferrer",style:{width:"fit-content"},tabIndex:0,className:t?"SRC-whiteText":"",children:"View ORCID"})]}),r&&u(H.Fragment,{children:[e("span",{role:"menu",className:`SRC-extraPadding SRC-hand-cursor SRC-primary-background-color-hover SRC-inlineBlock
              SRC-cardMenuButton ${s?"SRC-primary-background-color":""}`,style:{outline:"none"},tabIndex:0,onClick:b,onKeyPress:b,children:e("span",{className:s||t?"SRC-whiteText":"SRC-primary-text-color",children:e(k,{icon:"verticalEllipsis"})})}),s&&e(q,{menuActions:r,userProfile:a})]}),!r&&e("span",{style:{padding:"0px 0px 0px 35px"}})]});return t?u("div",{className:s?"SRC-hand-cursor cardContainer":"cardContainer",onClick:s?b:void 0,children:[e("div",{className:`SRC-primary-background-color SRC-userCard SRC-userCardMediumUp ${s?"SRC-hand-cursor":""}`,children:$}),t?e(D,{userProfile:a,isCertified:c}):!1]}):e("div",{style:{border:"1px solid #DDDDDF",backgroundColor:"white"},className:`cardContainer SRC-userCard SRC-userCardMediumUp ${s?"SRC-hand-cursor":""}`,onClick:s?b:void 0,children:$})},K=()=>u("div",{className:"cardContainer SRC-userCard SRC-userCardMediumUp",style:{width:"380px"},children:[e(X,{variant:"circular",width:"80px",height:"80px"}),e("div",{style:{width:"250px"},children:e(me,{numCols:1,numRows:2})})]});try{U.displayName="UserCardMedium",U.__docgenInfo={description:"",displayName:"UserCardMedium",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},menuActions:{defaultValue:null,description:"",name:"menuActions",required:!1,type:{name:"MenuAction[]"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},hideEmail:{defaultValue:{value:"false"},description:"",name:"hideEmail",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},openLinkInNewTab:{defaultValue:{value:"false"},description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:{value:"false"},description:"",name:"disableLink",required:!1,type:{name:"boolean"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},isLoadingAvatar:{defaultValue:null,description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}}}}}catch{}try{K.displayName="LoadingUserCardMedium",K.__docgenInfo={description:"",displayName:"LoadingUserCardMedium",props:{}}}catch{}const qe=250,De=500,M=({userProfile:a,avatarSize:r="LARGE",imageURL:t,showCardOnHover:n=!1,isLoadingAvatar:l=!1})=>{const i=o.useRef(null),f=e(U,{userProfile:a,imageURL:t}),{OverlayComponent:d,isShowing:C,toggleShow:c,toggleHide:R}=ee(f,i,qe,De);let p;switch(r){case"SMALL":p="SRC-userImgSmall";break;case"MEDIUM":p="SRC-userImgMedium";break;case"LARGE":p="SRC-userImg";break}const h=n?"pointer":"unset",s=!!t,g=s?{backgroundImage:`url(${t})`}:{background:Pe(a.userName)};if(l)return e(X,{className:p,variant:"circular"});let L=e(I,{});return s||(L=a.firstName?a.firstName[0]:a.userName[0]),u(I,{children:[n&&e(d,{}),e("div",{ref:i,role:"img",onMouseEnter:()=>c(),onMouseLeave:()=>R(),onClick:y=>{n&&y.stopPropagation(),C?R(!1):c(!1)},className:`${p} SRC-centerContentInline`,style:{cursor:h,...g},children:L})]})};try{M.displayName="Avatar",M.__docgenInfo={description:"",displayName:"Avatar",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},avatarSize:{defaultValue:{value:"LARGE"},description:"",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},showCardOnHover:{defaultValue:{value:"false"},description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}},isLoadingAvatar:{defaultValue:{value:"false"},description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}}}}}catch{}const Te=250,xe=500,Y=" ",T=a=>{const{userProfile:r,showCardOnHover:t=!0,disableLink:n,showAccountLevelIcon:l=!1,openLinkInNewTab:i,withAvatar:f=!1,avatarSize:d="SMALL",imageURL:C,className:c,showFullName:R=!1,isLoadingAvatar:p,...h}=a;let{link:s}=a;const[g,L]=o.useState(e(k,{icon:"accountRegistered"})),y=o.useRef(null),v=he|Le,{data:m}=Q(r.ownerId,v);o.useEffect(()=>{m!=null&&m.isCertified&&L(e(k,{icon:"accountCertified"})),m!=null&&m.isVerified&&L(e(k,{icon:"accountValidated"}))},[l,m==null?void 0:m.isCertified,m==null?void 0:m.isVerified]);const S=o.useMemo(()=>e(U,{userProfile:r,imageURL:C,...h}),[C,h,r]);s==null&&(s=`${J.PORTAL}#!Profile:${r.ownerId}`);const{OverlayComponent:_,toggleShow:E,toggleHide:P}=ee(S,y,Te,xe),A=f?e("span",{className:"SRC-inline-avatar",children:e(M,{userProfile:r,avatarSize:d,imageURL:C,isLoadingAvatar:p})}):e(I,{}),N=R&&(r.firstName||r.lastName)?u("span",{className:"user-fullname",children:[`${r.firstName??""}`,r.firstName&&r.lastName?Y:"",`${r.lastName??""}`]}):null,b=t||!n?"a":"span";let w={};return t?w={whiteSpace:"nowrap"}:n&&(w={cursor:"unset"}),u(I,{children:[t&&e(_,{}),u(b,{className:`SRC-userCard UserCardSmall SRC-boldText ${c??""}`,style:w,href:n?void 0:s,target:i?"_blank":"",rel:i?"noreferrer":"",ref:y,onMouseEnter:()=>E(),onMouseLeave:()=>P(),children:[A,N,N?`${Y}(`:"",`@${r.userName}`,N?")":"",l&&e("span",{className:"account-level-icon",children:g})]})]})};try{T.displayName="UserCardSmall",T.__docgenInfo={description:"",displayName:"UserCardSmall",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},showCardOnHover:{defaultValue:null,description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"",name:"disableLink",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},showAccountLevelIcon:{defaultValue:null,description:"",name:"showAccountLevelIcon",required:!1,type:{name:"boolean"}},openLinkInNewTab:{defaultValue:null,description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},withAvatar:{defaultValue:null,description:"",name:"withAvatar",required:!1,type:{name:"boolean"}},avatarSize:{defaultValue:null,description:"",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},isLoadingAvatar:{defaultValue:null,description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showFullName:{defaultValue:null,description:"",name:"showFullName",required:!1,type:{name:"boolean"}}}}}catch{}var re=(a=>(a.USER_NAME="USER_NAME",a.TEAM_NAME="TEAM_NAME",a.USER_EMAIL="USER_EMAIL",a.USER_OPEN_ID="USER_OPEN_ID",a.USER_ORCID="USER_ORCID",a))(re||{});const j=a=>{var _;const{userProfile:r,preSignedURL:t,size:n,ownerId:l,alias:i,...f}=a,{data:d,isLoading:C}=le({alias:i,type:re.USER_NAME},{enabled:!!i}),c=(_=l??(r==null?void 0:r.ownerId)??d)==null?void 0:_.toString(),{data:R,isLoading:p}=oe(c,{enabled:!!c&&!r}),h=r??R,{data:s,isLoading:g}=Ie(c,{enabled:!!(!t&&c)}),L=Ae(t),y=ae(s),v=L??y,m=C||p,S=o.useMemo(()=>({userProfile:h,imageURL:v,isLoadingAvatar:g,...f}),[v,g,f,h]);if(m||h==null)return e(I,{});switch(n){case ve:return e(M,{...S});case ye:return e(T,{...S});case Re:return e(U,{...S});case ge:return e(U,{isLarge:!0,...S});default:return console.warn("No size specified for UserCard"),e("span",{})}};try{j.displayName="UserCard",j.__docgenInfo={description:"",displayName:"UserCard",props:{userProfile:{defaultValue:null,description:"A UserProfile may be used for data for the card. You must supply one of `userProfile`, `alias`, `ownerId`",name:"userProfile",required:!1,type:{name:"UserProfile"}},alias:{defaultValue:null,description:"An alias that resolves the ownerId for the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId`",name:"alias",required:!1,type:{name:"string"}},ownerId:{defaultValue:null,description:"The unique ownerId of the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId`",name:"ownerId",required:!1,type:{name:"string"}},hideEmail:{defaultValue:null,description:"Whether to hide the user's Synapse email address",name:"hideEmail",required:!1,type:{name:"boolean"}},preSignedURL:{defaultValue:null,description:"If set, the corresponding image will be shown for the user.",name:"preSignedURL",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Specifies the card size",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},showCardOnHover:{defaultValue:null,description:"For the small user card or avatar, shows the medium user card on mouseover",name:"showCardOnHover",required:!1,type:{name:"boolean"}},hideTooltip:{defaultValue:null,description:"For the small user card, hides the tooltip observed when hovering over the profile image.",name:"hideTooltip",required:!1,type:{name:"boolean"}},menuActions:{defaultValue:null,description:"Specifies the dropdown menu functionality for the ellipsis on medium/large cards. If field === 'SEPERATOR' then a break will occur in the menu. If left undefined, the menu will not render to the screen.",name:"menuActions",required:!1,type:{name:"MenuAction[]"}},link:{defaultValue:null,description:"The link to point to on the username, defaults to https://www.synapse.org/#!Profile:${userProfile.ownerId}",name:"link",required:!1,type:{name:"string"}},openLinkInNewTab:{defaultValue:null,description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"Disables the `@username` link for the small user card (if `showCardOnHover` is false). For the medium user card, disables linking the user's name to their profile (or other specified destination)",name:"disableLink",required:!1,type:{name:"boolean"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},avatarSize:{defaultValue:null,description:"Determines the size of the avatar when size === 'AVATAR' or (size === 'SMALL' and withAvatar is true)",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},withAvatar:{defaultValue:null,description:"Whether to show the avatar with the name for the small user card",name:"withAvatar",required:!1,type:{name:"boolean"}},showFullName:{defaultValue:null,description:"Whether to show the full name in the small user card",name:"showFullName",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{K as L,j as U,T as a,Je as g,Qe as u};
//# sourceMappingURL=UserCard-dbfb0f87.js.map
