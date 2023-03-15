import{j as e,F as s,a as o}from"./jsx-runtime-670450c2.js";import{L as S}from"./LeftRightPanel-37211140.js";import{u as T}from"./useShowDesktop-5e97065b.js";import{u as L,L as g,a as k}from"./LoginFlowBackButton-cad41006.js";import{T as i}from"./Typography-11c3a983.js";import{B as a}from"./Box-f1921dc6.js";import{L as R}from"./Link-27c9d5da.js";import{S as u}from"./Stack-5c97798f.js";import{s as w}from"./styled-ad116ea3.js";import{u as D}from"./useTheme-0c1c5adc.js";import{s as N}from"./StorybookComponentWrapper-747a2a83.js";import{d as A}from"./ToastMessage-200a60a9.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Paper-08bd066e.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./SynapseContext-72a7c167.js";import"./index-96c5f47c.js";import"./isArray-035e79ba.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-c19d944e.js";import"./Clear-91cd1db3.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./useIsFocusVisible-83eed526.js";import"./Transition-be94c839.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./SvgIcon-5d261848.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./IconSvg-a1f5b5d5.js";import"./Button-52793ab0.js";import"./ButtonBase-c3619648.js";import"./emotion-react.browser.esm-54ef836f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./assertThisInitialized-081f9914.js";import"./Button-7d415009.js";import"./Alert-e95775eb.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-3470f280.js";import"./index-4d501b15.js";import"./useMutation-77ae379b.js";import"./FullWidthAlert-8227c0a5.js";import"./TextField-af90f78c.js";import"./FormControl-01ae291b.js";import"./ownerWindow-12ded16b.js";import"./index-1aacdabe.js";import"./Modal-6fddec09.js";import"./getScrollbarSize-ac846fe6.js";import"./MenuList-597ab095.js";import"./List-a5f5ee89.js";import"./TextField-67e32c5b.js";import"./IconButton-9e6f3dcb.js";import"./extendSxProp-094a0213.js";import"./dayjs.min-e0adaab4.js";import"./react-router-25172baf.js";import"./assertThisInitialized-3be3daa4.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-1138dcf4.js";import"./toString-5a82e5cc.js";import"./isSymbol-8e91c81d.js";const U=encodeURIComponent("Lost access to my Synapse account"),V=encodeURIComponent("<Please provide your username and/or email address associated with your account.>"),F=`https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/16/create/85?summary=${U}&description=${V}`,c=w(i,{label:"Tagline"})(({theme:t})=>({marginBottom:t.spacing(2),font:"300 24px/34px Lato, sans-serif"}));function x(t){return o(s,{children:[e(i,{...t,children:"Your backup code is a 16 digit code, with groups of 4 letters or numbers separated by hyphens, like this:"}),e(i,{...t,component:"div",variant:"monospace",sx:{my:1,fontSize:"18px"},children:"xxxx-xxxx-xxxx-xxxx"}),o(i,{...t,children:["Each code can only be used once. If you don’t have access to these codes, please"," ",e(R,{href:F,children:"contact us"}),"."]})]})}function l(t){const{ssoRedirectUrl:b,sessionCallback:E}=t,n=T(910),d=D(),{step:r,onStepChange:m,submitUsernameAndPassword:_,submitOneTimePassword:v,errorMessage:I,isLoading:O}=L(E),h=o(u,{alignItems:"stretch",sx:{height:"100%",width:"325px",mx:"auto"},children:[!n&&e(u,{flexDirection:"row",children:e(g,{step:r,onStepChange:m})}),o(a,{sx:{mb:4,textAlign:"center",maxWidth:"90vw"},children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),!n&&e(i,{variant:"body1",align:"center",sx:{my:1},children:"Organize. Get credit. Collaborate."})]}),!n&&r==="VERIFICATION_CODE"&&e(i,{variant:"body1",align:"center",sx:{my:1},children:"Enter the 6-digit, time-based verification code provided by your authenticator app."}),!n&&r==="RECOVERY_CODE"&&e(x,{variant:"body1",align:"center",sx:{my:1}}),e(k,{ssoRedirectUrl:b,step:r,onStepChange:m,submitUsernameAndPassword:_,submitOneTimePassword:v,errorMessage:I,isLoading:O})]});return n?e(S,{leftContent:e(s,{children:o(a,{sx:{py:15,px:8,height:"100%",position:"relative"},children:[e(g,{step:r,onStepChange:m,sx:{position:"absolute",top:d.spacing(2),left:d.spacing(2)}}),h]})}),rightContent:e(a,{sx:{py:15,height:"100%",background:"url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 5px"},children:o(a,{sx:{px:9,color:"#1e4964"},children:[r==="VERIFICATION_CODE"&&o(s,{children:[e(i,{variant:"headline1",sx:{mb:4},children:"Enter your verification code"}),e(i,{variant:"headline2",sx:{lineHeight:"30px"},children:"Enter the 6-digit, time-based verification code provided by your authenticator app."})]}),r==="RECOVERY_CODE"&&o(s,{children:[e(i,{variant:"headline1",sx:{mb:4},children:"Enter your backup code"}),e(x,{variant:"body1",sx:{fontSize:"18px",lineHeight:"30px"}})]}),r!=="VERIFICATION_CODE"&&r!=="RECOVERY_CODE"&&o(s,{children:[o(c,{variant:"headline2",children:[e("strong",{children:"Organize"})," your digital research assets."]}),o(c,{variant:"headline2",children:[e("strong",{children:"Get credit"})," for your research."]}),o(c,{variant:"headline2",children:[e("strong",{children:"Collaborate"})," with your colleagues and the public."]})]})]})})}):e(a,{sx:{px:0,py:12,height:"95vh",background:"#fff url('https://s3.amazonaws.com/static.synapse.org/images/SynapseMobileLogInFull.svg') 50% 50%",backgroundSize:"contain"},children:h})}try{l.displayName="LoginPage",l.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}}}catch{}const We={title:"Authentication/LoginPage",component:l},p={args:{sessionCallback:()=>{N().then(({profile:t})=>{A(`You are currently logged in as ${t.userName}`,"info",{autoCloseInMs:5e3})})}}};var y,f,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      sessionChangeHandler().then(({
        profile
      }) => {
        displayToast(\`You are currently logged in as \${profile.userName}\`, 'info', {
          autoCloseInMs: 5000
        });
      });
    }
  }
}`,...(C=(f=p.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const Je=["Demo"];export{p as Demo,Je as __namedExportsOrder,We as default};
//# sourceMappingURL=LoginPage.stories-50a4bd7e.js.map
