import{u as E}from"./SynapseConstants-41b9b1f3.js";import{j as e,a as l,F as h}from"./jsx-runtime-670450c2.js";import{u as U}from"./useShowDesktop-5e97065b.js";import{U as S}from"./UserCardListRotate-86e73d37.js";import{E as V}from"./ExpandableContent-af171954.js";import{r as q}from"./index-f1f749bf.js";import{B as C}from"./Button-7d415009.js";import"./sqlFunctions-c4daad7d.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-5d9dd1e8.js";import"./SynapseContext-72a7c167.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./isArray-035e79ba.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-c19d944e.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-0c1c5adc.js";import"./styled-ad116ea3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Clear-91cd1db3.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./useIsFocusVisible-83eed526.js";import"./Transition-be94c839.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./SvgIcon-5d261848.js";import"./getEndpoint-5374ab4d.js";import"./IconSvg-a1f5b5d5.js";import"./Box-f1921dc6.js";import"./extendSxProp-094a0213.js";import"./Button-52793ab0.js";import"./ButtonBase-c3619648.js";import"./emotion-react.browser.esm-54ef836f.js";import"./assertThisInitialized-081f9914.js";import"./Alert-e95775eb.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-3470f280.js";import"./index-4d501b15.js";import"./ColumnType-5116adf5.js";import"./UserCardList-141f36a6.js";import"./UserCard-e13d1f05.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-be34b0dd.js";import"./times-880aa0a3.js";import"./toInteger-e1f6ac73.js";import"./isSymbol-8e91c81d.js";import"./Skeleton-1dacd4a8.js";import"./ToastMessage-200a60a9.js";import"./FullWidthAlert-8227c0a5.js";import"./Typography-11c3a983.js";import"./assertThisInitialized-3be3daa4.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-1138dcf4.js";import"./toString-5a82e5cc.js";import"./Overlay-727e7006.js";import"./contains-33365353.js";import"./usePopperMarginModifiers-2a31c4ba.js";import"./useWaitForDOMRef-54076dc2.js";import"./without-7494424a.js";import"./_cacheHas-31905564.js";import"./use-deep-compare-effect.esm-2b920fea.js";import"./index-5d0cf067.js";function p(t){const{columnName:a,facetValues:r,...s}=t;return e("div",{children:r==null?void 0:r.map((i,o)=>{const n=r[o],m=e(S,{...s,selectedFacets:[{columnName:a,facetValues:[n],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]});return e(V,{title:l(h,{children:[" ",n," "]}),content:m},`UserCardListGroup-Mobile-${o}`)})})}try{p.displayName="UserCardListGroupsMobile",p.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function d(t){const[a,r]=q.useState(0),{columnName:s,facetValues:i,...o}=t,n={columnName:s,facetValues:[i[a]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return l("div",{className:"control-container",children:[l("div",{className:"button-container",children:[i==null?void 0:i.map((c,m)=>e("button",{className:a===m?"isSelected":"",onClick:()=>r(m),children:c},c)),e("button",{className:"gap-fill"})]}),e("div",{className:"content-container",children:e(S,{...o,selectedFacets:[n]},`UserCardListGroup-${a}`)})]})}try{d.displayName="UserCardListGroupsDesktop",d.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function y(t){const{summaryLink:a,summaryLinkText:r,...s}=t,i=U();return e("div",{className:`bootstrap-4-backport UserCardListGroups${i?"__Desktop":""}`,children:l("div",{children:[i?e(d,{...s}):e(p,{...s}),a&&r&&e("div",{className:"UserCardListGroups__summary",children:e(C,{variant:"secondary",size:"lg",className:"pill",href:a,children:r})})]})})}try{y.displayName="UserCardListGroups",y.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}const Pe={title:"Home Page/UserCardListGroups",component:y},u={args:{sql:"SELECT * FROM syn21781196 WHERE isFeatured='true'",columnName:"Project Title",facetValues:["Somatic Mosaicism in the brain of Tourette syndrome","Somatic Mosaicism in Schizophrenia and Control Brains","1/3-Schizophrenia Genetics and Brain Somatic Mosaicism","2/3-Schizophrenia Genetics and Brain Somatic Mosaicism","Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder","Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease","1/2-Somatic mosaicism and autism spectrum disorder","2/2-Somatic mosaicism and autism spectrum disorder","3/3-Schizophrenia Genetics and Brain Somatic Mosaicism"],size:E,useQueryResultUserData:!1,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People",count:6}};var f,L,R;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sql: "SELECT * FROM syn21781196 WHERE isFeatured='true'",
    columnName: 'Project Title',
    facetValues: ['Somatic Mosaicism in the brain of Tourette syndrome', 'Somatic Mosaicism in Schizophrenia and Control Brains', '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism', '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism', 'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder', 'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease', '1/2-Somatic mosaicism and autism spectrum disorder', '2/2-Somatic mosaicism and autism spectrum disorder', '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism'],
    size: MEDIUM_USER_CARD,
    useQueryResultUserData: false,
    summaryLinkText: 'EXPLORE ALL PEOPLE',
    summaryLink: '/Explore/People',
    count: 6
  }
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const Be=["Demo"];export{u as Demo,Be as __namedExportsOrder,Pe as default};
//# sourceMappingURL=UserCardListGroups.stories-3a1117b6.js.map
