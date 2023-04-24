import{j as o,a as s}from"./jsx-runtime-ad672792.js";import{r as _,R as ae}from"./index-f1f749bf.js";import{S as ie,L as se}from"./LeftRightPanel-2d0e4798.js";import{I as le}from"./IconSvg-ec267953.js";import{ah as ce,dA as de}from"./SynapseContext-59cad26b.js";import{u as pe}from"./useMutation-1627d004.js";import{d as ue}from"./ToastMessage-5be0af8d.js";import{S as me}from"./SvgIcon-93d86b25.js";import{P as U}from"./Paper-a43bd2f5.js";import{A as he}from"./Avatar-2d1b14f0.js";import{B as l}from"./Box-2e3c1244.js";import{T as c}from"./Typography-f5dd8748.js";import{B as v}from"./Button-e0234af7.js";import{u as j}from"./useTheme-c4678cf9.js";import{C as Ce}from"./ConditionalWrapper-2492e95a.js";import{S as fe}from"./Skeleton-cff63b1c.js";import{I as Y}from"./IconButton-404fc885.js";import{_ as ge}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as h}from"./extends-98964cd2.js";import{a as ve,g as ye,s as S,x as Z,R as $,Q as z,u as xe,c as we,b as be}from"./styled-8837a0b3.js";import{c as y}from"./utils-ef816bd8.js";import"./_commonjsHelpers-042e6b4d.js";import"./Clear-3aa4a8c0.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./isArray-5e3f9107.js";import"./index-96c5f47c.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-9d1f6e44.js";import"./Button-7d415009.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./mutation-3807b3b6.js";import"./FullWidthAlert-eaab6cf6.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./extendSxProp-a6801df0.js";import"./ButtonBase-26873d31.js";import"./emotion-react.browser.esm-a8a50fc7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";function _e(e){return ye("MuiAlert",e)}const Se=ve("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),L=Se,Ae=y(o("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Ve=y(o("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Re=y(o("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),ke=y(o("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Ie=y(o("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Be=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],Me=e=>{const{variant:t,color:r,severity:a,classes:n}=e,d={root:["root",`${t}${Z(r||a)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return be(d,_e,n)},Te=S(U,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${Z(r.color||r.severity)}`]]}})(({theme:e,ownerState:t})=>{const r=e.palette.mode==="light"?$:z,a=e.palette.mode==="light"?z:$,n=t.color||t.severity;return h({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},n&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:r(e.palette[n].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${n}StandardBg`]:a(e.palette[n].light,.9),[`& .${L.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:r(e.palette[n].light,.6),border:`1px solid ${(e.vars||e).palette[n].light}`,[`& .${L.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&t.variant==="filled"&&h({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${n}FilledColor`],backgroundColor:e.vars.palette.Alert[`${n}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[n].dark:e.palette[n].main,color:e.palette.getContrastText(e.palette[n].main)}))}),Oe=S("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ne=S("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),W=S("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),q={success:o(Ae,{fontSize:"inherit"}),warning:o(Ve,{fontSize:"inherit"}),error:o(Re,{fontSize:"inherit"}),info:o(ke,{fontSize:"inherit"})},Pe=_.forwardRef(function(t,r){var a,n,d,x,C,i;const p=xe({props:t,name:"MuiAlert"}),{action:f,children:u,className:A,closeText:w="Close",color:Q,components:M={},componentsProps:T={},icon:O,iconMapping:J=q,onClose:N,role:K="alert",severity:V="success",slotProps:P={},slots:E={},variant:X="standard"}=p,ee=ge(p,Be),m=h({},p,{color:Q,severity:V,variant:X}),g=Me(m),oe=(a=(n=E.closeButton)!=null?n:M.CloseButton)!=null?a:Y,te=(d=(x=E.closeIcon)!=null?x:M.CloseIcon)!=null?d:Ie,ne=(C=P.closeButton)!=null?C:T.closeButton,re=(i=P.closeIcon)!=null?i:T.closeIcon;return s(Te,h({role:K,elevation:0,ownerState:m,className:we(g.root,A),ref:r},ee,{children:[O!==!1?o(Oe,{ownerState:m,className:g.icon,children:O||J[V]||q[V]}):null,o(Ne,{ownerState:m,className:g.message,children:u}),f!=null?o(W,{ownerState:m,className:g.action,children:f}):null,f==null&&N?o(W,{ownerState:m,className:g.action,children:o(oe,h({size:"small","aria-label":w,title:w,color:"inherit",onClick:N},ne,{children:o(te,h({fontSize:"small"},re))}))}):null]}))}),D=Pe;function R(e){return s(me,{...e,width:55,height:55,viewBox:"0 0 55 55",children:[o("mask",{id:"mask0_1990_47824",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"55",height:"55",children:o("rect",{x:"0.0234375",y:"0.27832",width:"54",height:"54",fill:"#D9D9D9"})}),o("g",{mask:"url(#mask0_1990_47824)",children:o("path",{d:"M28.1484 54.2783C22.8234 54.2783 18.3047 52.4221 14.5922 48.7096C10.8797 44.9971 9.02344 40.4783 9.02344 35.1533V16.0283C9.02344 14.4533 9.56719 13.1221 10.6547 12.0346C11.7422 10.9471 13.0734 10.4033 14.6484 10.4033C14.8359 10.4033 15.0234 10.4123 15.2109 10.4303C15.3984 10.4498 15.5859 10.4783 15.7734 10.5158V9.27832C15.7734 7.70332 16.3172 6.37207 17.4047 5.28457C18.4922 4.19707 19.8234 3.65332 21.3984 3.65332C21.6609 3.65332 21.9144 3.67207 22.1589 3.70957C22.4019 3.74707 22.6547 3.80332 22.9172 3.87832C23.3297 2.79082 24.0047 1.91932 24.9422 1.26382C25.8797 0.60682 26.9484 0.27832 28.1484 0.27832C29.5359 0.27832 30.7457 0.71857 31.7777 1.59907C32.8082 2.48107 33.4359 3.57832 33.6609 4.89082C33.8484 4.85332 34.0457 4.82482 34.2527 4.80532C34.4582 4.78732 34.6734 4.77832 34.8984 4.77832C36.4734 4.77832 37.8047 5.32207 38.8922 6.40957C39.9797 7.49707 40.5234 8.82832 40.5234 10.4033V18.3908C40.7109 18.3533 40.8984 18.3248 41.0859 18.3053C41.2734 18.2873 41.4609 18.2783 41.6484 18.2783C43.2234 18.2783 44.5547 18.8221 45.6422 19.9096C46.7297 20.9971 47.2734 22.3283 47.2734 23.9033V35.1533C47.2734 40.4783 45.4172 44.9971 41.7047 48.7096C37.9922 52.4221 33.4734 54.2783 28.1484 54.2783ZM28.1484 49.7783C30.1734 49.7783 32.0769 49.3943 33.8589 48.6263C35.6394 47.8568 37.1859 46.8158 38.4984 45.5033C39.8109 44.1908 40.8519 42.6443 41.6214 40.8638C42.3894 39.0818 42.7734 37.1783 42.7734 35.1533V23.9033C42.7734 23.6033 42.6609 23.3408 42.4359 23.1158C42.2109 22.8908 41.9484 22.7783 41.6484 22.7783C41.3484 22.7783 41.0859 22.8908 40.8609 23.1158C40.6359 23.3408 40.5234 23.6033 40.5234 23.9033V34.0283L39.7359 34.0846C38.0484 34.2721 36.6332 35.0033 35.4902 36.2783C34.3457 37.5533 33.7734 39.0533 33.7734 40.7783H29.2734C29.2734 38.4533 29.8922 36.3721 31.1297 34.5346C32.3672 32.6971 33.9984 31.3471 36.0234 30.4846V10.4033C36.0234 10.1033 35.9109 9.84082 35.6859 9.61582C35.4609 9.39082 35.1984 9.27832 34.8984 9.27832C34.5984 9.27832 34.3359 9.39082 34.1109 9.61582C33.8859 9.84082 33.7734 10.1033 33.7734 10.4033V25.0283H29.2734V5.90332C29.2734 5.60332 29.1609 5.34082 28.9359 5.11582C28.7109 4.89082 28.4484 4.77832 28.1484 4.77832C27.8484 4.77832 27.5859 4.89082 27.3609 5.11582C27.1359 5.34082 27.0234 5.60332 27.0234 5.90332V25.0283H22.5234V9.27832C22.5234 8.97832 22.4109 8.71582 22.1859 8.49082C21.9609 8.26582 21.6984 8.15332 21.3984 8.15332C21.0984 8.15332 20.8359 8.26582 20.6109 8.49082C20.3859 8.71582 20.2734 8.97832 20.2734 9.27832V27.2783H15.7734V16.0283C15.7734 15.7283 15.6609 15.4658 15.4359 15.2408C15.2109 15.0158 14.9484 14.9033 14.6484 14.9033C14.3484 14.9033 14.0859 15.0158 13.8609 15.2408C13.6359 15.4658 13.5234 15.7283 13.5234 16.0283V35.1533C13.5234 37.1783 13.9082 39.0818 14.6777 40.8638C15.4457 42.6443 16.4859 44.1908 17.7984 45.5033C19.1109 46.8158 20.6582 47.8568 22.4402 48.6263C24.2207 49.3943 26.1234 49.7783 28.1484 49.7783Z",fill:"white"})})]})}try{R.displayName="FrontHand",R.__docgenInfo={description:"",displayName:"FrontHand",props:{children:{defaultValue:null,description:"Node passed into the SVG element.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<SvgIconClasses> & Partial<ClassNameMap<never>>)"}},color:{defaultValue:{value:"'inherit'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
You can use the \`htmlColor\` prop to apply a color attribute to the SVG element.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"action"'},{value:'"disabled"'},{value:'"inherit"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'},{value:'"primary"'},{value:'"secondary"'}]}},fontSize:{defaultValue:{value:"'medium'"},description:"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"inherit"'},{value:'"medium"'},{value:'"large"'}]}},htmlColor:{defaultValue:null,description:"Applies a color attribute to the SVG element.",name:"htmlColor",required:!1,type:{name:"string"}},inheritViewBox:{defaultValue:{value:"false"},description:"If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`\nprop will be ignored.\nUseful when you want to reference a custom `component` and have `SvgIcon` pass that\n`component`'s viewBox to the root node.",name:"inheritViewBox",required:!1,type:{name:"boolean"}},shapeRendering:{defaultValue:null,description:`The shape-rendering attribute. The behavior of the different options is described on the
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
If you are having issues with blurry icons you should investigate this prop.`,name:"shapeRendering",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},titleAccess:{defaultValue:null,description:`Provides a human-readable title for the element that contains it.
https://www.w3.org/TR/SVG-access/#Equivalent`,name:"titleAccess",required:!1,type:{name:"string"}},viewBox:{defaultValue:{value:"'0 0 24 24'"},description:`Allows you to redefine what the coordinates without units mean inside an SVG element.
For example, if the SVG element is 500 (width) by 200 (height),
and you pass viewBox="0 0 50 20",
this means that the coordinates inside the SVG will go from the top left corner (0,0)
to bottom right (50,20) and each unit will be worth 10px.`,name:"viewBox",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}}}}}catch{}function k(e){const{onConfirm:t,onCancel:r}=e,a=j();return s(U,{sx:{m:"auto",maxWidth:"500px",p:8},children:[o(he,{sx:{bgcolor:a.palette.primary[500],height:"100px",width:"100px"},children:o(R,{sx:{height:"54px",width:"54px"}})}),s(l,{sx:{my:5},children:[o(c,{variant:"headline1",sx:{mb:2},children:"Really regenerate backup codes?"}),o(c,{variant:"body1",sx:{my:1},children:"This will invalidate your old backup codes"}),o(c,{variant:"body1",sx:{my:1},children:"If you click “yes”, below, we will generate 10 new backup codes, replacing your old ones, which will no longer function."})]}),o(v,{fullWidth:!0,variant:"contained",onClick:t,sx:{height:"50px",my:1},children:"Yes, regenerate backup codes"}),o(v,{fullWidth:!0,variant:"text",onClick:r,sx:{height:"50px",my:1},children:"Nevermind"})]})}try{k.displayName="RegenerateBackupCodesWarning",k.__docgenInfo={description:"",displayName:"RegenerateBackupCodesWarning",props:{onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}}}}}catch{}const Ee=10,$e="1234-5678-9012-3456",ze=Array(Ee).fill($e);function I(e){const{recoveryCodes:t}=e;return o(l,{sx:{display:"grid",gridTemplateColumns:"47.5% 47.5%",columnGap:"5%",gridTemplateRows:"repeat(5, 1fr)",fontFamily:"Menlo, Courier New, Courier, monospace",my:2},children:((t==null?void 0:t.codes)??ze).map((r,a)=>o(Ce,{condition:!t,wrapper:fe,wrapperProps:{width:"100%",height:"100%"},children:o(l,{sx:{my:1,fontSize:"13px"},children:r})},a))})}try{I.displayName="RecoveryCodeGrid",I.__docgenInfo={description:"",displayName:"RecoveryCodeGrid",props:{recoveryCodes:{defaultValue:null,description:"",name:"recoveryCodes",required:!1,type:{name:"TwoFactorAuthRecoveryCodes"}}}}}catch{}function Le(){const e="printable",t="noPrint";return _.useEffect(()=>{const r=document.createElement("style");return r.innerHTML=`@media print {
    * {
        visibility: hidden;
    }

    .${e} {
        visibility: visible;
        position: absolute;
        top: 0;
        left: 0;
    }

    .${e} * {
        visibility: visible;
    }
    
    .${e} .${t} {
        display: none;
        visibility: hidden;
    }
    
    .${e} .${t} * {
        display: none;
        visibility: hidden;
    }
}`,document.head.append(r),()=>{r.remove()}},[]),{visibleOnPrintClassName:e,hiddenOnPrintClassName:t}}function B(e){const{showReplaceOldCodesWarning:t,onClose:r}=e,a=j(),[n,d]=_.useState(!t),{accessToken:x}=ce(),{mutate:C,data:i,error:p}=pe({mutationFn:()=>de(x),onMutate:()=>{d(!0)}});_.useEffect(()=>{t||C()},[]);const{visibleOnPrintClassName:f,hiddenOnPrintClassName:u}=Le(),A=ae.useCallback(()=>{const w=((i==null?void 0:i.codes)||[]).join(`
`);navigator.clipboard.writeText(w).then(()=>{ue("Recovery codes copied to clipboard","success")})},[i]);return t&&!n?o(ie,{sx:{display:"flex",flexDirection:"column"},children:o(k,{onConfirm:C,onCancel:r})}):o(se,{className:f,leftContent:s(l,{sx:{py:10,px:8,height:"100%",position:"relative"},children:[o(Y,{type:"button",onClick:r,className:u,sx:{position:"absolute",top:a.spacing(2),left:a.spacing(2)},children:o(le,{icon:"arrowBack",wrap:!1,sx:{height:"24px",width:"24px"}})}),o(c,{variant:"headline1",sx:{mt:7},children:"Backup codes"}),t&&s(D,{severity:"warning",className:u,sx:{my:2},icon:!1,children:[o("strong",{children:"These new codes have replaced your old codes."})," ","Please save these codes and use them from now on."]}),o(I,{recoveryCodes:i}),p&&o(D,{severity:"error",sx:{my:2},icon:!1,children:p.message}),s(l,{className:u,sx:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",mb:"10px"},children:[o(v,{variant:"outlined",onClick:A,disabled:!i,children:"Copy to Clipboard"}),o(v,{variant:"outlined",disabled:!i,onClick:window.print,children:"Print Codes"})]}),o(v,{variant:"contained",className:u,fullWidth:!0,disabled:!i,onClick:r,children:"Done"})]}),rightContent:o(l,{sx:{py:10,height:"100%",background:"url(https://s3.amazonaws.com/static.synapse.org/images/twofactor-graphic.svg) no-repeat right bottom",backgroundSize:"100%"},children:s(l,{sx:{mt:7,px:9},children:[o(c,{variant:"headline1",sx:{mb:2.5},children:"Save these codes"}),o(c,{variant:"body1",sx:{my:2},children:"You can use these 10 backup codes to access your account if you ever lose access to your authentication device."}),o(c,{variant:"body1",sx:{my:2},children:"Each code can only be used once."})]})})})}try{B.displayName="TwoFactorBackupCodes",B.__docgenInfo={description:"",displayName:"TwoFactorBackupCodes",props:{showReplaceOldCodesWarning:{defaultValue:null,description:"",name:"showReplaceOldCodesWarning",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const $o={title:"Authentication/TwoFactorBackupCodes",component:B,argTypes:{onClose:{action:"clicked"}}},b={args:{showReplaceOldCodesWarning:!0}};var G,H,F;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    showReplaceOldCodesWarning: true
  }
}`,...(F=(H=b.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};const zo=["Demo"];export{b as Demo,zo as __namedExportsOrder,$o as default};
//# sourceMappingURL=TwoFactorBackupCodes.stories-f3d82be8.js.map
