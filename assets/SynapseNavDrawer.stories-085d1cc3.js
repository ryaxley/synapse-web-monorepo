import{a as h,j as o,F as Y}from"./jsx-runtime-670450c2.js";import{r as g}from"./index-f1f749bf.js";import{a9 as ke,dX as je,dD as He,i as Ve,k as ze}from"./SynapseContext-72a7c167.js";import{a as Ge}from"./useDataAccessSubmission-5359c0ff.js";import{u as We}from"./useDownloadList-54f83d5b.js";import{S as Ue}from"./ManagedACTAccessRequirementStatus-9671fe8d.js";import{D as Ze}from"./EntityChildren-7cd71d6e.js";import{S as qe}from"./AccessSubmission-8298a5cd.js";import{F as Ye}from"./FullWidthAlert-8227c0a5.js";import{M as X}from"./Modal-bade2577.js";import{F as K}from"./Form-4a4de212.js";import{A as Xe}from"./Alert-e95775eb.js";import{B as ve}from"./Button-7d415009.js";import{I as oe}from"./IconSvg-a1f5b5d5.js";import{U as Ke}from"./UserCard-e13d1f05.js";import{_ as W}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as f}from"./extends-98964cd2.js";import{d as J,g as ne,s as z,p as $,e as ae,h as j,i as ie,r as Je,q as Q}from"./styled-ad116ea3.js";import{u as Re}from"./useTheme-0c1c5adc.js";import{M as Qe}from"./Modal-6fddec09.js";import{P as et}from"./Paper-08bd066e.js";import{e as ye,r as tt,g as be,T as $e}from"./Clear-91cd1db3.js";import{d as ot,o as Le,i as rt}from"./ownerWindow-12ded16b.js";import{T as nt}from"./Transition-be94c839.js";import{u as Ae,a as at}from"./useForkRef-dd8a6e5c.js";import{a as re,L as xe}from"./List-a5f5ee89.js";import{B as it}from"./ButtonBase-c3619648.js";import{i as Se}from"./isHostComponent-fa76b8d9.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./isArray-035e79ba.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-c19d944e.js";import"./inheritsLoose-c82a83d4.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./SvgIcon-5d261848.js";import"./Box-f1921dc6.js";import"./extendSxProp-094a0213.js";import"./Button-52793ab0.js";import"./useMutation-77ae379b.js";import"./useInfiniteQuery-dc19e18f.js";import"./Typography-11c3a983.js";import"./createWithBsPrefix-e09f51dd.js";import"./contains-33365353.js";import"./useWillUnmount-7fb15b8a.js";import"./divWithClassName-3470f280.js";import"./index-4d501b15.js";import"./usePrevious-9f30f8c7.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./useWaitForDOMRef-54076dc2.js";import"./FormLabel-897d2462.js";import"./Col-1f1afacc.js";import"./FormGroup-08e5002f.js";import"./hook-c05d8d9f.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-be34b0dd.js";import"./times-880aa0a3.js";import"./toInteger-e1f6ac73.js";import"./isSymbol-8e91c81d.js";import"./Skeleton-1dacd4a8.js";import"./emotion-react.browser.esm-54ef836f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./ToastMessage-200a60a9.js";import"./assertThisInitialized-3be3daa4.js";import"./uniqueId-1138dcf4.js";import"./toString-5a82e5cc.js";import"./Overlay-727e7006.js";import"./usePopperMarginModifiers-2a31c4ba.js";import"./getScrollbarSize-ac846fe6.js";import"./useIsFocusVisible-83eed526.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./assertThisInitialized-081f9914.js";const st=t=>{const e=g.useRef({});return g.useEffect(()=>{e.current=t}),e.current},Me=st;function lt(t){const{badgeContent:e,invisible:r=!1,max:n=99,showZero:a=!1}=t,u=Me({badgeContent:e,max:n});let c=r;r===!1&&e===0&&!a&&(c=!0);const{badgeContent:d,max:p=n}=c?u:t,s=d&&Number(d)>p?`${p}+`:d;return{badgeContent:d,invisible:c,max:p,displayValue:s}}function ct(t){return ne("MuiBadge",t)}const dt=J("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),V=dt,pt=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],ce=10,de=4,mt=t=>{const{color:e,anchorOrigin:r,invisible:n,overlap:a,variant:u,classes:c={}}=t,d={root:["root"],badge:["badge",u,n&&"invisible",`anchorOrigin${$(r.vertical)}${$(r.horizontal)}`,`anchorOrigin${$(r.vertical)}${$(r.horizontal)}${$(a)}`,`overlap${$(a)}`,e!=="default"&&`color${$(e)}`]};return ie(d,ct,c)},ut=z("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),ft=z("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.badge,e[r.variant],e[`anchorOrigin${$(r.anchorOrigin.vertical)}${$(r.anchorOrigin.horizontal)}${$(r.overlap)}`],r.color!=="default"&&e[`color${$(r.color)}`],r.invisible&&e.invisible]}})(({theme:t,ownerState:e})=>f({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:ce*2,lineHeight:1,padding:"0 6px",height:ce*2,borderRadius:ce,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},e.color!=="default"&&{backgroundColor:(t.vars||t).palette[e.color].main,color:(t.vars||t).palette[e.color].contrastText},e.variant==="dot"&&{borderRadius:de,height:de*2,minWidth:de*2,padding:0},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${V.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${V.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${V.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${V.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${V.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${V.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${V.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${V.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})),ht=g.forwardRef(function(e,r){var n,a,u,c,d,p;const s=ae({props:e,name:"MuiBadge"}),{anchorOrigin:C={vertical:"top",horizontal:"right"},className:y,component:w,components:O={},componentsProps:x={},children:i,overlap:I="rectangular",color:M="default",invisible:k=!1,max:P=99,badgeContent:L,slots:v,slotProps:m,showZero:N=!1,variant:b="standard"}=s,T=W(s,pt),{badgeContent:R,invisible:_,max:B,displayValue:E}=lt({max:P,invisible:k,badgeContent:L,showZero:N}),U=Me({anchorOrigin:C,color:M,overlap:I,variant:b,badgeContent:L}),H=_||R==null&&b!=="dot",{color:Z=M,overlap:G=I,anchorOrigin:l=C,variant:S=b}=H?U:s,A=S!=="dot"?E:void 0,F=f({},s,{badgeContent:R,invisible:H,max:B,displayValue:A,showZero:N,anchorOrigin:l,color:Z,overlap:G,variant:S}),he=mt(F),ge=(n=(a=v==null?void 0:v.root)!=null?a:O.Root)!=null?n:ut,Ce=(u=(c=v==null?void 0:v.badge)!=null?c:O.Badge)!=null?u:ft,se=(d=m==null?void 0:m.root)!=null?d:x.root,le=(p=m==null?void 0:m.badge)!=null?p:x.badge,Be=ye({elementType:ge,externalSlotProps:se,externalForwardedProps:T,additionalProps:{ref:r,as:w},ownerState:F,className:j(se==null?void 0:se.className,he.root,y)}),Ee=ye({elementType:Ce,externalSlotProps:le,ownerState:F,className:j(he.badge,le==null?void 0:le.className)});return h(ge,f({},Be,{children:[i,o(Ce,f({},Ee,{children:A}))]}))}),gt=ht,Ct=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function vt(t,e,r){const n=e.getBoundingClientRect(),a=r&&r.getBoundingClientRect(),u=Le(e);let c;if(e.fakeTransform)c=e.fakeTransform;else{const s=u.getComputedStyle(e);c=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let d=0,p=0;if(c&&c!=="none"&&typeof c=="string"){const s=c.split("(")[1].split(")")[0].split(",");d=parseInt(s[4],10),p=parseInt(s[5],10)}return t==="left"?a?`translateX(${a.right+d-n.left}px)`:`translateX(${u.innerWidth+d-n.left}px)`:t==="right"?a?`translateX(-${n.right-a.left-d}px)`:`translateX(-${n.left+n.width-d}px)`:t==="up"?a?`translateY(${a.bottom+p-n.top}px)`:`translateY(${u.innerHeight+p-n.top}px)`:a?`translateY(-${n.top-a.top+n.height-p}px)`:`translateY(-${n.top+n.height-p}px)`}function yt(t){return typeof t=="function"?t():t}function ee(t,e,r){const n=yt(r),a=vt(t,e,n);a&&(e.style.webkitTransform=a,e.style.transform=a)}const bt=g.forwardRef(function(e,r){const n=Re(),a={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},u={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:c,appear:d=!0,children:p,container:s,direction:C="down",easing:y=a,in:w,onEnter:O,onEntered:x,onEntering:i,onExit:I,onExited:M,onExiting:k,style:P,timeout:L=u,TransitionComponent:v=nt}=e,m=W(e,Ct),N=g.useRef(null),b=Ae(p.ref,N,r),T=l=>S=>{l&&(S===void 0?l(N.current):l(N.current,S))},R=T((l,S)=>{ee(C,l,s),tt(l),O&&O(l,S)}),_=T((l,S)=>{const A=be({timeout:L,style:P,easing:y},{mode:"enter"});l.style.webkitTransition=n.transitions.create("-webkit-transform",f({},A)),l.style.transition=n.transitions.create("transform",f({},A)),l.style.webkitTransform="none",l.style.transform="none",i&&i(l,S)}),B=T(x),E=T(k),U=T(l=>{const S=be({timeout:L,style:P,easing:y},{mode:"exit"});l.style.webkitTransition=n.transitions.create("-webkit-transform",S),l.style.transition=n.transitions.create("transform",S),ee(C,l,s),I&&I(l)}),H=T(l=>{l.style.webkitTransition="",l.style.transition="",M&&M(l)}),Z=l=>{c&&c(N.current,l)},G=g.useCallback(()=>{N.current&&ee(C,N.current,s)},[C,s]);return g.useEffect(()=>{if(w||C==="down"||C==="right")return;const l=ot(()=>{N.current&&ee(C,N.current,s)}),S=Le(N.current);return S.addEventListener("resize",l),()=>{l.clear(),S.removeEventListener("resize",l)}},[C,w,s]),g.useEffect(()=>{w||G()},[w,G]),o(v,f({nodeRef:N,onEnter:R,onEntered:B,onEntering:_,onExit:U,onExited:H,onExiting:E,addEndListener:Z,appear:d,in:w,timeout:L},m,{children:(l,S)=>g.cloneElement(p,f({ref:b,style:f({visibility:l==="exited"&&!w?"hidden":void 0},P,p.props.style)},S))}))}),xt=bt;function St(t){return ne("MuiDrawer",t)}J("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Nt=["BackdropProps"],wt=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Fe=(t,e)=>{const{ownerState:r}=t;return[e.root,(r.variant==="permanent"||r.variant==="persistent")&&e.docked,e.modal]},Pt=t=>{const{classes:e,anchor:r,variant:n}=t,a={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${$(r)}`,n!=="temporary"&&`paperAnchorDocked${$(r)}`]};return ie(a,St,e)},Tt=z(Qe,{name:"MuiDrawer",slot:"Root",overridesResolver:Fe})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),Ne=z("div",{shouldForwardProp:Je,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Fe})({flex:"0 0 auto"}),Ot=z(et,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.paper,e[`paperAnchor${$(r.anchor)}`],r.variant!=="temporary"&&e[`paperAnchorDocked${$(r.anchor)}`]]}})(({theme:t,ownerState:e})=>f({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),De={left:"right",right:"left",top:"down",bottom:"up"};function It(t){return["left","right"].indexOf(t)!==-1}function kt(t,e){return t.direction==="rtl"&&It(e)?De[e]:e}const Rt=g.forwardRef(function(e,r){const n=ae({props:e,name:"MuiDrawer"}),a=Re(),u={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:c="left",BackdropProps:d,children:p,className:s,elevation:C=16,hideBackdrop:y=!1,ModalProps:{BackdropProps:w}={},onClose:O,open:x=!1,PaperProps:i={},SlideProps:I,TransitionComponent:M=xt,transitionDuration:k=u,variant:P="temporary"}=n,L=W(n.ModalProps,Nt),v=W(n,wt),m=g.useRef(!1);g.useEffect(()=>{m.current=!0},[]);const N=kt(a,c),T=f({},n,{anchor:c,elevation:C,open:x,variant:P},v),R=Pt(T),_=o(Ot,f({elevation:P==="temporary"?C:0,square:!0},i,{className:j(R.paper,i.className),ownerState:T,children:p}));if(P==="permanent")return o(Ne,f({className:j(R.root,R.docked,s),ownerState:T,ref:r},v,{children:_}));const B=o(M,f({in:x,direction:De[N],timeout:k,appear:m.current},I,{children:_}));return P==="persistent"?o(Ne,f({className:j(R.root,R.docked,s),ownerState:T,ref:r},v,{children:B})):o(Tt,f({BackdropProps:f({},d,w,{transitionDuration:k}),className:j(R.root,R.modal,s),open:x,ownerState:T,onClose:O,hideBackdrop:y,ref:r},v,L,{children:B}))}),we=Rt;function $t(t){return ne("MuiListItem",t)}const Lt=J("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),q=Lt,At=J("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Mt=At;function Ft(t){return ne("MuiListItemSecondaryAction",t)}J("MuiListItemSecondaryAction",["root","disableGutters"]);const Dt=["className"],_t=t=>{const{disableGutters:e,classes:r}=t;return ie({root:["root",e&&"disableGutters"]},Ft,r)},Bt=z("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.disableGutters&&e.disableGutters]}})(({ownerState:t})=>f({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),_e=g.forwardRef(function(e,r){const n=ae({props:e,name:"MuiListItemSecondaryAction"}),{className:a}=n,u=W(n,Dt),c=g.useContext(re),d=f({},n,{disableGutters:c.disableGutters}),p=_t(d);return o(Bt,f({className:j(p.root,a),ownerState:d,ref:r},u))});_e.muiName="ListItemSecondaryAction";const Et=_e,jt=["className"],Ht=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Vt=(t,e)=>{const{ownerState:r}=t;return[e.root,r.dense&&e.dense,r.alignItems==="flex-start"&&e.alignItemsFlexStart,r.divider&&e.divider,!r.disableGutters&&e.gutters,!r.disablePadding&&e.padding,r.button&&e.button,r.hasSecondaryAction&&e.secondaryAction]},zt=t=>{const{alignItems:e,button:r,classes:n,dense:a,disabled:u,disableGutters:c,disablePadding:d,divider:p,hasSecondaryAction:s,selected:C}=t;return ie({root:["root",a&&"dense",!c&&"gutters",!d&&"padding",p&&"divider",u&&"disabled",r&&"button",e==="flex-start"&&"alignItemsFlexStart",s&&"secondaryAction",C&&"selected"],container:["container"]},$t,n)},Gt=z("div",{name:"MuiListItem",slot:"Root",overridesResolver:Vt})(({theme:t,ownerState:e})=>f({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&f({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${Mt.root}`]:{paddingRight:48}},{[`&.${q.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${q.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Q(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${q.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:Q(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${q.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${q.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:Q(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Q(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Wt=z("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ut=g.forwardRef(function(e,r){const n=ae({props:e,name:"MuiListItem"}),{alignItems:a="center",autoFocus:u=!1,button:c=!1,children:d,className:p,component:s,components:C={},componentsProps:y={},ContainerComponent:w="li",ContainerProps:{className:O}={},dense:x=!1,disabled:i=!1,disableGutters:I=!1,disablePadding:M=!1,divider:k=!1,focusVisibleClassName:P,secondaryAction:L,selected:v=!1,slotProps:m={},slots:N={}}=n,b=W(n.ContainerProps,jt),T=W(n,Ht),R=g.useContext(re),_=g.useMemo(()=>({dense:x||R.dense||!1,alignItems:a,disableGutters:I}),[a,R.dense,x,I]),B=g.useRef(null);at(()=>{u&&B.current&&B.current.focus()},[u]);const E=g.Children.toArray(d),U=E.length&&rt(E[E.length-1],["ListItemSecondaryAction"]),H=f({},n,{alignItems:a,autoFocus:u,button:c,dense:_.dense,disabled:i,disableGutters:I,disablePadding:M,divider:k,hasSecondaryAction:U,selected:v}),Z=zt(H),G=Ae(B,r),l=N.root||C.Root||Gt,S=m.root||y.root||{},A=f({className:j(Z.root,S.className,p),disabled:i},T);let F=s||"li";return c&&(A.component=s||"div",A.focusVisibleClassName=j(q.focusVisible,P),F=it),U?(F=!A.component&&!s?"div":F,w==="li"&&(F==="li"?F="div":A.component==="li"&&(A.component="div")),o(re.Provider,{value:_,children:h(Wt,f({as:w,className:j(Z.container,O),ref:G,ownerState:H},b,{children:[o(l,f({},S,!Se(l)&&{as:F,ownerState:f({},H,S.ownerState)},A,{children:E})),E.pop()]}))})):o(re.Provider,{value:_,children:h(l,f({},S,{as:F,ref:G},!Se(l)&&{ownerState:f({},H,S.ownerState)},A,{children:[E,L&&o(Et,{children:L})]}))})}),Zt=Ut,pe=t=>h("svg",{...t,width:"30",height:"33",viewBox:"0 0 30 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o("path",{d:"M7.80432 14.0604L20.8862 6.64159",stroke:"#F8F9FA"}),o("path",{d:"M25.2369 8.80366L25.2369 23.9155",stroke:"#F8F9FA"}),o("path",{d:"M7.62979 19.3677L20.5417 26.9974",stroke:"#F8F9FA"}),o("circle",{cx:"24.65",cy:"4.69524",r:"4.19524",stroke:"#F8F9FA"}),o("circle",{cx:"24.65",cy:"28.1713",r:"4.19524",stroke:"#F8F9FA"}),o("circle",{cx:"4.69524",cy:"16.4335",r:"4.19524",stroke:"#F8F9FA"})]});try{pe.displayName="SynapseIconWhite",pe.__docgenInfo={description:"",displayName:"SynapseIconWhite",props:{}}}catch{}const me=t=>h("svg",{width:"109",height:"15",viewBox:"0 0 109 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o("path",{d:"M9.31503 2.91881C9.25595 3.01716 9.19032 3.09255 9.11809 3.145C9.05246 3.19089 8.97039 3.21384 8.87192 3.21384C8.76031 3.21384 8.62906 3.15812 8.47806 3.04666C8.32706 2.9352 8.13672 2.81392 7.90695 2.68279C7.68377 2.54511 7.41131 2.42055 7.08967 2.30909C6.77457 2.19763 6.39055 2.14191 5.9376 2.14191C5.51091 2.14191 5.13346 2.20091 4.80523 2.31892C4.48357 2.43038 4.21114 2.58445 3.98795 2.78113C3.77132 2.97782 3.60721 3.21056 3.49561 3.47937C3.38402 3.74161 3.32822 4.0268 3.32822 4.33495C3.32822 4.72832 3.42341 5.05613 3.61378 5.31837C3.81071 5.57406 4.06673 5.79371 4.38182 5.97727C4.70348 6.16082 5.06453 6.32146 5.46496 6.45914C5.87197 6.59028 6.28554 6.72796 6.70565 6.87218C7.13236 7.0164 7.54592 7.18034 7.94633 7.36389C8.35335 7.54091 8.71438 7.7671 9.02948 8.04246C9.35112 8.31782 9.60713 8.65548 9.79752 9.05539C9.99445 9.4553 10.0929 9.94701 10.0929 10.5305C10.0929 11.1468 9.98791 11.727 9.77783 12.2712C9.56775 12.8088 9.25925 13.2776 8.85223 13.6775C8.45182 14.0774 7.95618 14.3921 7.36538 14.6216C6.78112 14.8511 6.11484 14.9658 5.36649 14.9658C4.44746 14.9658 3.61378 14.8019 2.86542 14.4741C2.11707 14.1397 1.47704 13.6906 0.945312 13.1268L1.49673 12.222C1.54925 12.1499 1.61161 12.0909 1.68382 12.045C1.76259 11.9925 1.84793 11.9663 1.93983 11.9663C2.02517 11.9663 2.12036 12.0024 2.22539 12.0745C2.33698 12.14 2.46171 12.2253 2.59956 12.3302C2.73742 12.4351 2.89496 12.5498 3.0722 12.6744C3.24945 12.7989 3.44966 12.9137 3.67286 13.0186C3.90261 13.1235 4.16191 13.212 4.45075 13.2841C4.73959 13.3497 5.06453 13.3825 5.42557 13.3825C5.87852 13.3825 6.28224 13.3202 6.63672 13.1956C6.9912 13.0711 7.2899 12.8973 7.53277 12.6744C7.78224 12.4449 7.97258 12.1728 8.10388 11.8581C8.23519 11.5435 8.30082 11.1927 8.30082 10.8059C8.30082 10.3797 8.20235 10.0323 8.00542 9.76345C7.81503 9.48809 7.56231 9.25861 7.24722 9.07505C6.93212 8.8915 6.57109 8.7374 6.16408 8.61284C5.75708 8.4817 5.34352 8.35061 4.92339 8.21947C4.50326 8.0818 4.0897 7.92445 3.6827 7.74743C3.2757 7.57041 2.91466 7.34093 2.59956 7.05903C2.28447 6.77713 2.02845 6.42635 1.83152 6.00677C1.64115 5.5806 1.54596 5.05613 1.54596 4.43329C1.54596 3.93502 1.64115 3.45314 1.83152 2.98765C2.02845 2.52216 2.31073 2.10913 2.67834 1.74854C3.05251 1.38795 3.50875 1.09948 4.04703 0.883124C4.59189 0.66677 5.21551 0.558594 5.91791 0.558594C6.70565 0.558594 7.42116 0.68316 8.06449 0.932294C8.71438 1.18143 9.28549 1.54202 9.77783 2.01406L9.31503 2.91881Z",fill:"#F8F9FA"}),o("path",{d:"M21.9847 9.19294V14.8083H20.0745V9.19294L14.9049 0.71582H16.5789C16.7496 0.71582 16.8841 0.758435 16.9826 0.843666C17.0811 0.922339 17.1664 1.02724 17.2386 1.15836L20.4683 6.63604C20.5865 6.86552 20.6948 7.08187 20.7933 7.2851C20.8917 7.48178 20.9771 7.68176 21.0493 7.88499C21.1215 7.68176 21.2035 7.48178 21.2955 7.2851C21.3874 7.08187 21.4891 6.86552 21.6007 6.63604L24.8206 1.15836C24.8797 1.04691 24.9617 0.945286 25.0668 0.853499C25.1718 0.761713 25.3064 0.71582 25.4705 0.71582H27.1543L21.9847 9.19294Z",fill:"#F8F9FA"}),o("path",{d:"M43.6078 0.71582V14.8083H42.6527C42.5017 14.8083 42.3737 14.7821 42.2687 14.7296C42.1702 14.6772 42.0717 14.5886 41.9733 14.4641L33.8104 3.84311C33.8235 4.00701 33.8333 4.16764 33.8399 4.32499C33.8465 4.48234 33.8497 4.62985 33.8497 4.76753V14.8083H32.1758V0.71582H33.1605C33.2458 0.71582 33.318 0.722376 33.3771 0.735489C33.4361 0.742045 33.4887 0.758435 33.5346 0.784659C33.5806 0.804328 33.6265 0.83711 33.6725 0.883003C33.7184 0.92234 33.7677 0.974788 33.8202 1.04035L41.9831 11.6515C41.97 11.481 41.9569 11.3171 41.9438 11.1598C41.9372 10.9959 41.9339 10.8418 41.9339 10.6976V0.71582H43.6078Z",fill:"#F8F9FA"}),o("path",{d:"M58.4023 9.57648L56.1868 3.84311C56.1208 3.67265 56.0519 3.47596 55.98 3.25306C55.9076 3.02359 55.8387 2.78101 55.7732 2.52532C55.6354 3.05637 55.4941 3.49891 55.3498 3.85295L53.1343 9.57648H58.4023ZM62.3804 14.8083H60.9034C60.7325 14.8083 60.5947 14.7657 60.4898 14.6805C60.3844 14.5952 60.3057 14.4871 60.2535 14.3559L58.934 10.9533H52.6026L51.2831 14.3559C51.2437 14.4739 51.1679 14.5788 51.0566 14.6706C50.9449 14.7624 50.807 14.8083 50.6431 14.8083H49.1661L54.8083 0.71582H56.7382L62.3804 14.8083Z",fill:"#F8F9FA"}),o("path",{d:"M72.5866 8.02267C73.1317 8.02267 73.6107 7.95053 74.0243 7.80631C74.4442 7.66209 74.7958 7.46212 75.0779 7.20642C75.3669 6.94419 75.5835 6.63274 75.7277 6.27217C75.872 5.9116 75.9444 5.51493 75.9444 5.08223C75.9444 4.18403 75.6652 3.48252 75.1074 2.9777C74.556 2.47287 73.7156 2.22046 72.5866 2.22046H70.3219V8.02267H72.5866ZM72.5866 0.71582C73.4793 0.71582 74.2542 0.820719 74.9105 1.03052C75.5736 1.23376 76.1216 1.52551 76.5549 1.90576C76.9881 2.28602 77.3096 2.74495 77.5198 3.28256C77.7365 3.82016 77.8448 4.42005 77.8448 5.08223C77.8448 5.73783 77.7301 6.33772 77.5002 6.88189C77.2702 7.42607 76.9325 7.89482 76.4859 8.28819C76.0463 8.68156 75.4978 8.98972 74.8415 9.21261C74.1917 9.42896 73.4399 9.53714 72.5866 9.53714H70.3219V14.8083H68.4215V0.71582H72.5866Z",fill:"#F8F9FA"}),o("path",{d:"M92.1441 2.91881C92.085 3.01716 92.0195 3.09255 91.9472 3.145C91.8817 3.19089 91.7995 3.21384 91.701 3.21384C91.5897 3.21384 91.4583 3.15812 91.3071 3.04666C91.1565 2.9352 90.9659 2.81392 90.736 2.68279C90.513 2.54511 90.2407 2.42055 89.9187 2.30909C89.6036 2.19763 89.2196 2.14191 88.7667 2.14191C88.3403 2.14191 87.9627 2.20091 87.6343 2.31892C87.3128 2.43038 87.0405 2.58445 86.817 2.78113C86.6004 2.97782 86.4364 3.21056 86.3247 3.47937C86.2134 3.74161 86.1573 4.0268 86.1573 4.33495C86.1573 4.72832 86.2528 5.05613 86.4428 5.31837C86.6398 5.57406 86.8958 5.79371 87.2109 5.97727C87.5329 6.16082 87.8938 6.32146 88.294 6.45914C88.7012 6.59028 89.1148 6.72796 89.5347 6.87218C89.9616 7.0164 90.3751 7.18034 90.7754 7.36389C91.1826 7.54091 91.5434 7.7671 91.8585 8.04246C92.1805 8.31782 92.4365 8.65548 92.6266 9.05539C92.8235 9.4553 92.922 9.94701 92.922 10.5305C92.922 11.1468 92.8171 11.727 92.6069 12.2712C92.3972 12.8088 92.0885 13.2776 91.6813 13.6775C91.281 14.0774 90.7852 14.3921 90.1944 14.6216C89.6105 14.8511 88.9439 14.9658 88.1956 14.9658C87.2769 14.9658 86.4428 14.8019 85.6945 14.4741C84.9461 14.1397 84.3061 13.6906 83.7744 13.1268L84.3258 12.222C84.3785 12.1499 84.441 12.0909 84.5129 12.045C84.5917 11.9925 84.6773 11.9663 84.7689 11.9663C84.8546 11.9663 84.9496 12.0024 85.0545 12.0745C85.1662 12.14 85.2908 12.2253 85.4286 12.3302C85.5665 12.4351 85.724 12.5498 85.9013 12.6744C86.0785 12.7989 86.2789 12.9137 86.5019 13.0186C86.7319 13.1235 86.9913 13.212 87.2798 13.2841C87.5688 13.3497 87.8938 13.3825 88.2546 13.3825C88.7076 13.3825 89.1113 13.3202 89.4658 13.1956C89.8203 13.0711 90.1191 12.8973 90.3618 12.6744C90.6115 12.4449 90.802 12.1728 90.9329 11.8581C91.0644 11.5435 91.1299 11.1927 91.1299 10.8059C91.1299 10.3797 91.0314 10.0323 90.8345 9.76345C90.6444 9.48809 90.3914 9.25861 90.0763 9.07505C89.7612 8.8915 89.4003 8.7374 88.9931 8.61284C88.5865 8.4817 88.1729 8.35061 87.7525 8.21947C87.3325 8.0818 86.9189 7.92445 86.5118 7.74743C86.1051 7.57041 85.7437 7.34093 85.4286 7.05903C85.1135 6.77713 84.8575 6.42635 84.6606 6.00677C84.4705 5.5806 84.375 5.05613 84.375 4.43329C84.375 3.93502 84.4705 3.45314 84.6606 2.98765C84.8575 2.52216 85.1401 2.10913 85.5074 1.74854C85.8816 1.38795 86.338 1.09948 86.8761 0.883124C87.4211 0.66677 88.0449 0.558594 88.747 0.558594C89.5347 0.558594 90.2506 0.68316 90.8936 0.932294C91.5435 1.18143 92.1146 1.54202 92.6069 2.01406L92.1441 2.91881Z",fill:"#F8F9FA"}),o("path",{d:"M108.999 13.2545L108.989 14.8083H100.295V0.71582H108.989V2.26963H102.205V6.95073H107.699V8.44554H102.205V13.2545H108.999Z",fill:"#F8F9FA"})]});try{me.displayName="SynapseLogoName",me.__docgenInfo={description:"",displayName:"SynapseLogoName",props:{}}}catch{}const ue=({isShowingModal:t=!1,onClose:e})=>{const{accessToken:r}=ke(),[n,a]=g.useState(""),[u,c]=g.useState(!1),[d,p]=g.useState(),s=()=>{a(""),p(void 0),e()},C=async()=>{try{const y=await je(n,r);c(!0),s(),window.location.href=`/#!Synapse:${y.id}`}catch(y){y.reason?p(y.reason):p(y.toString())}};return h(Y,{children:[h(X,{className:"CreateProjectModal bootstrap-4-backport",show:t,animation:!1,onHide:s,backdrop:"static",children:[o(X.Header,{closeButton:!0,children:o(X.Title,{children:"Create a new Project"})}),h(X.Body,{children:[h(K.Group,{children:[o(K.Label,{htmlFor:"projectInput",children:"Project Name"}),o(K.Control,{id:"projectInput","data-testid":"projectInput",value:n,onChange:y=>{a(y.target.value)},onKeyDown:y=>{y.key==="Enter"&&n!==""&&C()}})]}),d&&o(Xe,{variant:"danger",children:d})]}),o(X.Footer,{children:h("div",{className:"ButtonContainer",children:[o(ve,{variant:"default",onClick:e,children:"Cancel"}),o(ve,{variant:"primary",onClick:()=>{C()},children:"Save"})]})})]}),o(Ye,{show:u,variant:"info",title:"Project created",description:"",autoCloseAfterDelayInSeconds:10,onClose:()=>{c(!1)}})]})};try{ue.displayName="CreateProjectModal",ue.__docgenInfo={description:"",displayName:"CreateProjectModal",props:{isShowingModal:{defaultValue:{value:"false"},description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const Pe={queryTerm:[],booleanQuery:[{key:"node_type",value:"project"}],facetOptions:[{name:"EntityType",maxResultCount:300,sortType:"COUNT"},{name:"Consortium",maxResultCount:300,sortType:"COUNT"},{name:"ModifiedOn",maxResultCount:300,sortType:"COUNT"},{name:"ModifiedBy",maxResultCount:300,sortType:"COUNT"},{name:"CreatedOn",maxResultCount:300,sortType:"COUNT"},{name:"Tissue",maxResultCount:300,sortType:"COUNT"},{name:"CreatedBy",maxResultCount:300,sortType:"COUNT"}],start:0,size:30},D=t=>{const{tooltip:e,iconName:r,onClickOpenNavMenu:n,onClickGoToUrl:a,additionalChildren:u,badgeContent:c,isCurrentlySelectedItem:d=!1,handleDrawerClose:p,handleDrawerOpen:s}=t,C=d||a?p:()=>{s(n)},y=r?h(Y,{children:[o(oe,{icon:r})," ",u," "]}):u,w=o($e,{title:e,placement:"right",children:o(Zt,{button:!0,"data-testid":`${e}`,onClick:C,className:"SRC-whiteText",selected:d,children:o(gt,{badgeContent:c,color:"secondary",children:y})},r)});return a?o("a",{href:a,rel:"noopener noreferrer",className:"SRC-whiteText",children:w}):w},fe=({initIsOpen:t=!1,signoutCallback:e})=>{const[r,n]=g.useState(t),[a,u]=g.useState(),[c,d]=g.useState(""),[p,s]=g.useState(""),[C,y]=g.useState(!1),{accessToken:w}=ke(),O=!!w,{data:x}=He(),i=O&&x?x.userProfile:void 0,{data:I}=We({enabled:O}),M=I==null?void 0:I.totalNumberOfFiles,{data:k}=Ge({submissionState:Ue.SUBMITTED,sort:[{field:qe.CREATED_ON,direction:Ze.DESC}]},{enabled:(x==null?void 0:x.isACTMember)||(x==null?void 0:x.isARReviewer)});let P=(k==null?void 0:k.pages[0].results.length)??0;k!=null&&k.pages[0].nextPageToken&&(P=`${P}+`);const L=async()=>{e?e():(await ze(),window.location.reload())},v=b=>{n(!0),u(b)},m=()=>{n(!1),u(void 0)},N=b=>{Pe.queryTerm=b.split(/[ ,]+/),window.location.href=`/#!Search:${encodeURI(JSON.stringify(Pe))}`};return h("div",{className:"SynapseNavDrawer",children:[h(we,{variant:"permanent",className:`SynapseNavDrawerMenu ${r?"tempDrawerOpen":""}`,children:[o("div",{onClick:m,children:o("a",{className:"synapseIcon",rel:"noopener noreferrer",href:"/#!Home:0",children:o(pe,{})})}),h(xe,{children:[O&&i&&h(Y,{children:[o(D,{tooltip:"Projects",iconName:"dashboard",onClickOpenNavMenu:0,isCurrentlySelectedItem:a==0,handleDrawerClose:m,handleDrawerOpen:v}),o(D,{tooltip:"Favorites",iconName:"favTwoTone",onClickGoToUrl:`/#!Profile:${i.ownerId}/favorites`,handleDrawerClose:m,handleDrawerOpen:v}),o(D,{tooltip:"Teams",iconName:"peopleTwoTone",onClickGoToUrl:`/#!Profile:${i.ownerId}/teams`,handleDrawerClose:m,handleDrawerOpen:v}),o(D,{tooltip:"Challenges",iconName:"challengesTwoTone",onClickGoToUrl:`/#!Profile:${i.ownerId}/challenges`,handleDrawerClose:m,handleDrawerOpen:v}),o(D,{tooltip:"Download Cart",iconName:"download",onClickGoToUrl:"/#!DownloadCart:0",badgeContent:M,handleDrawerClose:m,handleDrawerOpen:v}),o(D,{tooltip:"Trash Can",iconName:"delete",onClickGoToUrl:"/#!Trash:0",handleDrawerClose:m,handleDrawerOpen:v}),Ve()&&(x==null?void 0:x.isARReviewer)&&o(D,{tooltip:"Data Access Management",iconName:"accessManagement",onClickGoToUrl:"/#!DataAccessManagement:default/Submissions",badgeContent:P,handleDrawerClose:m,handleDrawerOpen:v})]}),o(D,{tooltip:"Search",iconName:"search",onClickGoToUrl:"/#!Search:",handleDrawerClose:m,handleDrawerOpen:v})]}),o("div",{className:"filler"}),h(xe,{children:[O&&i&&o(D,{tooltip:"Your Account",onClickOpenNavMenu:6,additionalChildren:o(Ke,{userProfile:i,size:"AVATAR",avatarSize:"SMALL"}),isCurrentlySelectedItem:a==6,handleDrawerClose:m,handleDrawerOpen:v}),!O&&o(D,{tooltip:"Sign in",iconName:"login",onClickGoToUrl:"/#!LoginPlace:0",handleDrawerClose:m,handleDrawerOpen:v}),o(D,{tooltip:"Help",iconName:"helpOutlined",onClickOpenNavMenu:7,isCurrentlySelectedItem:a==7,handleDrawerClose:m,handleDrawerOpen:v})]})]}),h(we,{variant:"temporary",open:r,className:"SynapseNavContentDrawer",onClose:m,children:[o("div",{className:"synapseLogoNameContainer",children:o(me,{})}),h("div",{className:"navContentContainer",children:[a==0&&h(Y,{children:[o("div",{className:"header projectHeader",children:"Projects"}),o($e,{title:"Create a New Project",placement:"right",children:o("a",{className:"createProjectLink",onClick:()=>{y(!0),m()},children:o(oe,{icon:"addCircleOutline"})})}),h("div",{className:"searchInputWithIcon",children:[o(oe,{icon:"searchOutlined"}),o(K.Control,{type:"search",placeholder:"Search All Projects",value:c,onChange:b=>{d(b.target.value)},onKeyDown:b=>{b.key==="Enter"&&b.target.value!==""&&(d(""),m(),N(b.target.value))}})]}),h("div",{className:"linkList",onClick:m,children:[o("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/all`,rel:"noopener noreferrer",children:"All"}),o("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/created_by_me`,rel:"noopener noreferrer",children:"Created By Me"}),o("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/favorites`,rel:"noopener noreferrer",children:"Favorite Projects"}),o("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/shared_directly_with_me`,rel:"noopener noreferrer",children:"Shared With Me"}),o("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/all_my_team_projects`,rel:"noopener noreferrer",children:"Team Projects"})]})]}),a==6&&h(Y,{children:[h("div",{className:"header",children:["Welcome Back,",o("br",{}),i==null?void 0:i.userName,"!"]}),h("div",{className:"linkList",onClick:m,children:[o("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/profile`,rel:"noopener noreferrer",children:"View Profile"}),o("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/settings`,rel:"noopener noreferrer",children:"Account Settings"}),o("a",{className:"SRC-whiteText",onClick:()=>{L()},rel:"noopener noreferrer",children:"Sign Out"})]})]}),a==7&&h(Y,{children:[o("div",{className:"header",children:"Help"}),h("div",{className:"searchInputWithIcon",children:[o(oe,{icon:"searchOutlined"}),o(K.Control,{type:"search",placeholder:"Search Synapse Documentation",value:p,onChange:b=>{s(b.target.value)},onKeyDown:b=>{b.key==="Enter"&&b.target.value!==""&&(window.open(`https://help.synapse.org/search.html?max=10&s=docs&q=${encodeURI(b.target.value)}`),s(""),m())}})]}),h("div",{className:"linkList",onClick:m,children:[o("a",{className:"SRC-whiteText",href:"https://help.synapse.org/docs/Getting-Started.2055471150.html",rel:"noopener noreferrer",target:"_blank",children:"Getting Started"}),o("a",{className:"SRC-whiteText",href:"https://help.synapse.org/docs/",rel:"noopener noreferrer",target:"_blank",children:"Synapse Documentation"}),o("a",{className:"SRC-whiteText",href:"#!SynapseForum:default",rel:"noopener noreferrer",children:"Help Forum"}),o("a",{className:"SRC-whiteText",href:"https://sagebionetworks.jira.com/servicedesk/customer/portal/9",rel:"noopener noreferrer",target:"_blank",children:"Contact Us"})]})]})]})]}),o(ue,{onClose:()=>y(!1),isShowingModal:C})]})};try{fe.displayName="SynapseNavDrawer",fe.__docgenInfo={description:"Displays the Synapse navigational drawer on the left side of the page.  Has links to various areas if logged in.",displayName:"SynapseNavDrawer",props:{initIsOpen:{defaultValue:{value:"false"},description:"",name:"initIsOpen",required:!1,type:{name:"boolean"}},signoutCallback:{defaultValue:null,description:"",name:"signoutCallback",required:!1,type:{name:"(() => void)"}}}}}catch{}const hr={title:"Synapse/SynapseNavDrawer",component:fe},te={args:{initIsOpen:!1}};var Te,Oe,Ie;te.parameters={...te.parameters,docs:{...(Te=te.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    initIsOpen: false
  }
}`,...(Ie=(Oe=te.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};const gr=["Demo"];export{te as Demo,gr as __namedExportsOrder,hr as default};
//# sourceMappingURL=SynapseNavDrawer.stories-085d1cc3.js.map
