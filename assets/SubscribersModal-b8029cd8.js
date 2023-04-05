import{a as S,j as u}from"./jsx-runtime-ad672792.js";import{ar as o,at as b,cB as I,bA as _,cC as D,cD as E,cE as T}from"./SynapseContext-3e3caab0.js";import{u as m}from"./useMutation-36a3f11c.js";import{D as f}from"./EntityChildren-7cd71d6e.js";import{r as g}from"./index-f1f749bf.js";import{U as B}from"./UserCard-6cd36790.js";import{h as M}from"./SynapseConstants-2132700c.js";import{M as c}from"./Modal-6ffa84ac.js";import{B as U}from"./Button-00c0a018.js";var O=(e=>(e.FORUM="FORUM",e.THREAD="THREAD",e.DATA_ACCESS_SUBMISSION="DATA_ACCESS_SUBMISSION",e.DATA_ACCESS_SUBMISSION_STATUS="DATA_ACCESS_SUBMISSION_STATUS",e))(O||{}),C=(e=>(e.SUBSCRIPTION_ID="SUBSCRIPTION_ID",e.SUBSCRIBER_ID="SUBSCRIBER_ID",e.OBJECT_ID="OBJECT_ID",e.OBJECT_TYPE="OBJECT_TYPE",e.CREATED_ON="CREATED_ON",e))(C||{});function R(e,s){const{accessToken:a,keyFactory:t}=o();return b(t.getSubscribersQueryKey(e.objectId,e.objectType),()=>I(a,e),s)}function h(e,s,a){const{accessToken:t,keyFactory:r}=o(),i=async()=>{const n={objectType:s,idList:[e],sortByType:C.OBJECT_ID,sortDirection:f.ASC};return(await T(t,n)).results[0]};return b(r.getSubscriptionQueryKey(e,s),i,a)}function w(e){const s=_(),{accessToken:a,keyFactory:t}=o();return m(r=>D(a,r),{...e,onSuccess:async(r,i,n)=>{await s.invalidateQueries(t.getAllSubscriptionsQueryKey()),await s.invalidateQueries(t.getSubscribersQueryKey(i.objectId,i.objectType)),e!=null&&e.onSuccess&&await e.onSuccess(r,i,n)}})}function N(e){const s=_(),{accessToken:a,keyFactory:t}=o();return m(r=>E(a,r),{...e,onSuccess:async(r,i,n)=>{await s.invalidateQueries(t.getAllSubscriptionsQueryKey()),await s.invalidateQueries(t.getAllSubscribersQueryKey()),e!=null&&e.onSuccess&&await e.onSuccess(r,i,n)}})}const k=(e,s)=>{const{data:a,isLoading:t}=h(e,s),{data:r}=R({objectId:e,objectType:s}),{mutate:i,isLoading:n}=w(),{mutate:l,isLoading:A}=N(),y=t||n||A,p=g.useCallback(()=>{a?l(a.subscriptionId):i({objectId:e,objectType:s})},[l,e,s,i,a]);return{isLoading:y,subscription:a,toggleSubscribed:p,subscribers:r}},d=({id:e,objectType:s,showModal:a,handleModal:t})=>{const{subscribers:r}=k(e,s);return S("div",{className:"SubscribersModal",children:[r&&r.subscribers.length>0&&u("a",{onClick:()=>t(!0),children:`Followers (${r.subscribers.length})`}),S(c,{className:"bootstrap-4-backport",show:a,onHide:()=>t(!1),animation:!1,children:[u(c.Header,{closeButton:!0,children:u(c.Title,{children:"Followers"})}),u(c.Body,{children:r&&r.subscribers.map(i=>u(B,{ownerId:i,size:M,showCardOnHover:!0},i))}),u(c.Footer,{children:u(U,{variant:"contained",onClick:()=>t(!1),children:"Ok"})})]})]})};try{d.displayName="SubscribersModal",d.__docgenInfo={description:"",displayName:"SubscribersModal",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},objectType:{defaultValue:null,description:"",name:"objectType",required:!0,type:{name:"enum",value:[{value:'"FORUM"'},{value:'"THREAD"'},{value:'"DATA_ACCESS_SUBMISSION"'},{value:'"DATA_ACCESS_SUBMISSION_STATUS"'}]}},showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},handleModal:{defaultValue:null,description:"",name:"handleModal",required:!0,type:{name:"(a: boolean) => void"}}}}}catch{}export{O as S,d as a,k as u};
//# sourceMappingURL=SubscribersModal-b8029cd8.js.map
