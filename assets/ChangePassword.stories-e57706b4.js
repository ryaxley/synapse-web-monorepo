import{j as o,a}from"./jsx-runtime-670450c2.js";import{r as e}from"./index-f1f749bf.js";import{d as i}from"./ToastMessage-200a60a9.js";import{a9 as b,h as x,ct as F}from"./SynapseContext-72a7c167.js";import{F as d}from"./FormGroup-08e5002f.js";import{c,b as l}from"./FormLabel-897d2462.js";import{B as I}from"./Button-7d415009.js";import"./_commonjsHelpers-042e6b4d.js";import"./FullWidthAlert-8227c0a5.js";import"./Alert-e95775eb.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-3470f280.js";import"./Transition-be94c839.js";import"./inheritsLoose-c82a83d4.js";import"./index-96c5f47c.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./index-4d501b15.js";import"./Typography-11c3a983.js";import"./styled-ad116ea3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./extendSxProp-094a0213.js";import"./Clear-91cd1db3.js";import"./useTheme-0c1c5adc.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./useIsFocusVisible-83eed526.js";import"./SvgIcon-5d261848.js";import"./assertThisInitialized-3be3daa4.js";import"./isArray-035e79ba.js";import"./setPrototypeOf-0bb37fbe.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-1138dcf4.js";import"./toString-5a82e5cc.js";import"./isSymbol-8e91c81d.js";import"./Fade-c19d944e.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./IconSvg-a1f5b5d5.js";import"./Box-f1921dc6.js";import"./Button-52793ab0.js";import"./ButtonBase-c3619648.js";import"./emotion-react.browser.esm-54ef836f.js";import"./assertThisInitialized-081f9914.js";import"./Col-1f1afacc.js";const w=()=>{const{accessToken:s}=b(),[h,_]=e.useState(""),[m,v]=e.useState(""),[u,S]=e.useState(""),[p,g]=e.useState();e.useEffect(()=>{async function r(){const t=await x(s);g(t)}s?r():g(void 0)},[s]);const P=async r=>{r.preventDefault();try{if(m!==u)i("New password and confirm password does not match.","danger");else if(s){const t={newPassword:m,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:p==null?void 0:p.userName,currentPassword:h};await F(t,s).then(()=>i("Successfully changed","success")).catch(N=>i(N.reason,"danger"))}}catch(t){i(t.reason,"danger")}};return o("div",{className:"changePassword",children:a("form",{onSubmit:r=>{P(r)},children:[a(d,{controlId:"oldPassword",children:[o(c,{children:"Current Password"}),o(l,{type:"password",onChange:r=>_(r.target.value),value:h})]}),a(d,{controlId:"newPassword",children:[o(c,{children:"New Password"}),o(l,{type:"password",onChange:r=>v(r.target.value),value:m})]}),a(d,{controlId:"confirmPassword",children:[o(c,{children:"Confirm Password"}),o(l,{type:"password",onChange:r=>S(r.target.value),value:u})]}),o(I,{type:"submit",onSubmit:r=>{P(r)},children:"Change Password"})]})})};try{w.displayName="ChangePassword",w.__docgenInfo={description:"",displayName:"ChangePassword",props:{}}}catch{}const Sr={title:"Authentication/ChangePassword",component:w},n={};var f,C,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(C=n.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const Nr=["ChangePasswordDemo"];export{n as ChangePasswordDemo,Nr as __namedExportsOrder,Sr as default};
//# sourceMappingURL=ChangePassword.stories-e57706b4.js.map
