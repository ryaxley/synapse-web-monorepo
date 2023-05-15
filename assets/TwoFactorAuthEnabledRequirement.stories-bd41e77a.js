import{j as m}from"./jsx-runtime-095bf462.js";import{a as E}from"./index-654f195a.js";import{M as A}from"./getEndpoint-ac94413e.js";import{T as i}from"./TwoFactorAuthEnabledRequirement-fa8888ab.js";import{m as F}from"./EntityTypeUtils-3a924f0d.js";import{F as b}from"./FullContextProvider-3fa55249.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./util-441245ad.js";import"./TwoFactorEnrollmentForm-c03a7a1a.js";import"./LeftRightPanel-909d1919.js";import"./Box-13f1aabd.js";import"./styled-f64e11ba.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./extendSxProp-29a14132.js";import"./Paper-2b624eab.js";import"./TextField-1acfe50c.js";import"./InputLabel-2be762b1.js";import"./inputBaseClasses-2e8dfab0.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./emotion-react.browser.esm-4b1ddfee.js";import"./isMuiElement-08f54e3c.js";import"./LoadingScreen-f2cda167.js";import"./Backdrop-31335125.js";import"./Fade-f7811978.js";import"./useTheme-14d0ce71.js";import"./utils-724ac38b.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-0df7f063.js";import"./Typography-0933b2f6.js";import"./Button-891a522f.js";import"./ButtonBase-4f599170.js";import"./assertThisInitialized-081f9914.js";import"./LinearProgress-c62c2bf1.js";import"./FullWidthAlert-93fbddb4.js";import"./Alert-fbdd8ab9.js";import"./Button-5637ed55.js";import"./createWithBsPrefix-f259edae.js";import"./index-58d3fd43.js";import"./Clear-72bafe95.js";import"./SvgIcon-4c933a0b.js";import"./Tooltip-72c76487.js";import"./useMutation-3d0a417c.js";import"./mutation-48645ff7.js";import"./IconSvg-d63801e0.js";import"./Typography-fd50ec33.js";import"./Dialog-f99dbb4e.js";import"./DialogTitle-b2b86bbe.js";import"./Modal-b99e76f4.js";import"./getScrollbarSize-ac846fe6.js";import"./createChainedFunction-0bab83cf.js";import"./Stack-98e16f53.js";import"./IconButton-74239a2b.js";import"./Link-2921f78c.js";import"./Divider-0430dee5.js";import"./RequirementItem-476964f5.js";import"./ConditionalWrapper-51b8d1ed.js";import"./Avatar-c25dcc6a.js";import"./Skeleton-3aad52b9.js";import"./isArray-5e3f9107.js";import"./SynapseConstants-a1d83293.js";import"./queryClient-307ee6b3.js";import"./infiniteQueryBehavior-d81f8726.js";const Hr={title:"Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement",component:i,render:o=>m(F,{children:e=>m(b,{synapseContext:{...e,accessToken:"fake token"},children:m(i,{...o})})})};function d(o){return[E.rest.get(`${A}/auth/v1/2fa`,async(e,f,p)=>{let h=200,w={status:o?"ENABLED":"DISABLED"};return f(p.status(h),p.json(w))})]}const r={parameters:{msw:{handlers:[d(!0)]}}},t={parameters:{msw:{handlers:[d(!1)]}}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)]
    }
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,u,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)]
    }
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const Ir=["Enabled","Disabled"];export{t as Disabled,r as Enabled,Ir as __namedExportsOrder,Hr as default};
//# sourceMappingURL=TwoFactorAuthEnabledRequirement.stories-bd41e77a.js.map
