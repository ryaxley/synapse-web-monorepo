import{j as t,a as d,F as W}from"./jsx-runtime-670450c2.js";import{r as s,R as Le}from"./index-f1f749bf.js";import{a9 as oe,aM as Ae,d6 as ke,aF as se,d7 as Ve,d8 as Oe,d9 as Me,da as qe,db as Be,dc as Fe}from"./SynapseContext-604d883b.js";import{a as Ue,C as me}from"./CreatedOnByUserDiv-7ef329bb.js";import{W as we}from"./WarningModal-41e2410a.js";import{I as le}from"./IconSvg-42e5a302.js";import{R as S}from"./Row-36b4b687.js";import{C as f}from"./Col-053aba76.js";import{F as v}from"./Form-08917b8a.js";import{A as de}from"./Alert-4bfa1ee7.js";import{B as C}from"./Button-a16e56e5.js";import{D as g}from"./Dropdown-9ada1c97.js";import{u as Ne,C as pe}from"./CalendarWithIconFormGroup-97c69881.js";import{d as y}from"./dayjs.min-e0adaab4.js";import{F as $}from"./FormGroup-763a7e3b.js";import{b as Y}from"./FormLabel-d48b7c13.js";import{g as Pe,c as Ge}from"./_commonjsHelpers-042e6b4d.js";import{u as je}from"./utc-8a3e1a17.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-df5bc5e3.js";import"./extends-9cd95192.js";import"./styled-1b6f4d44.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-b2c92aa4.js";import"./Clear-b4ccb838.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./useIsFocusVisible-83eed526.js";import"./Transition-955f7fb7.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./SvgIcon-36e6768e.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./Box-5df43b07.js";import"./extendSxProp-c6163236.js";import"./Button-41488909.js";import"./ButtonBase-4feee6fc.js";import"./emotion-react.browser.esm-0771b2df.js";import"./assertThisInitialized-4a7b3b26.js";import"./createWithBsPrefix-d1384812.js";import"./divWithClassName-f0cd5fab.js";import"./index-4d501b15.js";import"./UserCard-0fbed750.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-ef5f7370.js";import"./times-f9e44d32.js";import"./toInteger-5eff1fb5.js";import"./isSymbol-7c514724.js";import"./Skeleton-1377209b.js";import"./ToastMessage-37d46070.js";import"./FullWidthAlert-89ce8092.js";import"./Typography-0df81c96.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Overlay-907d5d0f.js";import"./contains-33365353.js";import"./usePopperMarginModifiers-5c87d941.js";import"./useWaitForDOMRef-c561e186.js";import"./Modal-269ceb3c.js";import"./useWillUnmount-7fb15b8a.js";import"./usePrevious-9f30f8c7.js";import"./hook-3d9ea2b9.js";import"./isRequiredForA11y-0a29da5f.js";import"./localizedFormat-6fbb2ddb.js";import"./IconButton-f192840c.js";import"./Paper-0c480ce9.js";import"./DialogContent-ca6561f6.js";import"./Modal-bc9185fb.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-12ded16b.js";import"./FormControl-036171c8.js";import"./index-1aacdabe.js";import"./TextField-9ea22bba.js";import"./MenuList-5015ea13.js";import"./List-0743bc98.js";const H=({evaluationId:e,entityId:a,onDeleteSuccess:i,onSaveSuccess:n})=>{if(e&&a)throw new Error("please use either evaluationId or entityId but not both");const{accessToken:r}=oe(),[o,l]=s.useState(),[u,h]=s.useState(!1);s.useEffect(()=>{o&&h(!1)},[o]);const[p,b]=s.useState(""),[D,x]=s.useState(""),[A,R]=s.useState(""),[T,I]=s.useState(""),[m,k]=s.useState({contentSource:a});s.useEffect(()=>{b(m.name??""),x(m.description??""),R(m.submissionInstructionsMessage??""),I(m.submissionReceiptMessage??"")},[m]),s.useEffect(()=>{e&&(l(void 0),Ae(e,r).then(c=>{k(c)}).catch(c=>l(c)))},[e,r]);const V=()=>{l(void 0),h(!1);const c={...m,name:p,description:D,submissionInstructionsMessage:A,submissionReceiptMessage:T};(c.id?Ve(c,r):Oe(c,r)).then(w=>{k(w),h(!0),n&&n(w.id)}).catch(w=>l(w))},P=m!=null&&m.id?()=>{l(void 0),ke(m.id,r).then(i).catch(c=>l(c))}:void 0;return t("div",{className:"bootstrap-4-backport",children:d("div",{className:"evaluation-editor",children:[d(S,{children:[t(f,{children:d("h4",{children:[m.id?"Edit":"Create"," Evaluation Queue"]})}),t(f,{children:t(We,{onClick:V,onDelete:P})})]}),d(v,{children:[d(v.Group,{children:[t(v.Label,{htmlFor:"evaluation-name",children:"Name"}),t(v.Control,{id:"evaluation-name",type:"text",value:p,onChange:c=>b(c.target.value)})]}),d(v.Group,{children:[t(v.Label,{htmlFor:"evaluation-description",children:"Description"}),t(v.Control,{id:"evaluation-description",as:"textarea",value:D,rows:2,onChange:c=>x(c.target.value)})]}),d(v.Group,{children:[t(v.Label,{htmlFor:"evaluation-submissioninstructions",children:"Submission Instructions"}),t(v.Control,{as:"textarea",id:"evaluation-submissioninstructions",value:A,rows:2,onChange:c=>R(c.target.value)})]}),d(v.Group,{children:[t(v.Label,{htmlFor:"evaluation-receiptmessage",children:"Submission Receipt Message"}),t(v.Control,{id:"evaluation-receiptmessage",type:"text",value:T,onChange:c=>I(c.target.value)})]}),(m==null?void 0:m.createdOn)&&t(Ue,{userId:m.ownerId,date:new Date(m.createdOn)}),o&&t(se,{error:o}),u&&t(de,{className:"save-success-alert",dismissible:!0,variant:"success",transition:!1,onClose:()=>h(!1),children:"Successfully saved."}),t("div",{className:"d-flex justify-content-end",children:t(C,{className:"save-button",onClick:V,children:"Save"})})]})]})})},We=({onClick:e,onDelete:a})=>{const[i,n]=s.useState(!1);return d(W,{children:[a&&t(we,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete this Evaluation Queue?",show:i,confirmButtonText:"Delete",onConfirm:()=>{a(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),d(g,{className:"float-right",children:[t(g.Toggle,{variant:"link",className:"dropdown-no-caret",children:t(le,{icon:"verticalEllipsis"})}),d(g.Menu,{alignRight:!0,children:[t(g.Item,{role:"menuitem",onClick:e,children:"Save"}),a&&d(W,{children:[t(g.Divider,{}),t(g.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})]})]})]})]})};try{H.displayName="EvaluationEditor",H.__docgenInfo={description:"Edits basic properties of an Evaluation",displayName:"EvaluationEditor",props:{evaluationId:{defaultValue:null,description:"Use if UPDATING an existing Evaluation. Id of the evaluation to edit",name:"evaluationId",required:!1,type:{name:"string"}},entityId:{defaultValue:null,description:"Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation",name:"entityId",required:!1,type:{name:"string"}},onDeleteSuccess:{defaultValue:null,description:"Callback after successful deletion of the Evaluation",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}},onSaveSuccess:{defaultValue:null,description:"Callback after successful save of the Evaluation",name:"onSaveSuccess",required:!1,type:{name:"((evaluationId: string) => void)"}}}}}catch{}const $e=e=>s.createElement("svg",{width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("rect",{width:26,height:26}),s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.1996 11.8004V7H11.7996V11.8004H7V14.2004H11.7996V19H14.1996V14.2004H19V11.8004H14.1996Z",fill:"white"})),Ye=e=>s.createElement("svg",{width:27,height:26,viewBox:"0 0 27 26",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M18.7729 8.10786L17.6651 7L13.2729 11.3921L8.88081 7L7.77295 8.10786L12.1651 12.5L7.77295 16.8921L8.88081 18L13.2729 13.6079L17.6651 18L18.7729 16.8921L14.3808 12.5L18.7729 8.10786Z",fill:"inherit"})),Ce={DAILY:"Daily Limit",WEEKLY:"Weekly Limit",MONTHLY:"Monthly Limit"},K=({limitInput:e,allSelectedTypes:a,onChange:i})=>d(Le.Fragment,{children:[d($,{className:"limit-type",children:[t("label",{children:"Limit Type"}),t(Y,{as:"select",custom:!0,value:e.type,onChange:n=>{i({type:n.target.value,maxSubmissionString:e.maxSubmissionString})},children:Object.entries(Ce).map(([n,r])=>t("option",{value:n,disabled:a.has(n)&&n!==e.type,children:r},n))})]}),d($,{className:"limit-input",children:[t("label",{children:"Maximum Submissions"}),t(Y,{type:"text",pattern:"[0-9]*",value:e.maxSubmissionString,onChange:n=>{i({type:e.type,maxSubmissionString:n.target.value})}})]})]});try{K.displayName="EvaluationRoundLimitOptions",K.__docgenInfo={description:"",displayName:"EvaluationRoundLimitOptions",props:{limitInput:{defaultValue:null,description:"",name:"limitInput",required:!0,type:{name:"EvaluationRoundLimitInput"}},allSelectedTypes:{defaultValue:null,description:"",name:"allSelectedTypes",required:!0,type:{name:"Set<EvaluationRoundLimitType>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(limitInput: EvaluationRoundLimitInput) => void"}}}}}catch{}const Ie=Object.keys(Ce),He=e=>Ie.find(a=>!e.has(a)),Q=({limitInputs:e,handleChange:a,handleDeleteLimit:i,onAddNewLimit:n})=>{const r=new Set(e.map(l=>l.type)),o=s.useCallback(()=>{n({type:He(r),maxSubmissionString:""})},[n,r]);return s.useEffect(()=>{e.length===0&&o()},[e,o]),t("div",{"data-testid":"EvaluationRoundLimitOptionsList",className:"advanced-limits-grid",children:e.map((l,u)=>d(Le.Fragment,{children:[t(K,{limitInput:l,allSelectedTypes:r,onChange:a(u)}),t(C,{variant:"","aria-label":"Remove",className:"remove-button",onClick:i(u),children:t(Ye,{className:"SRC-icon-fill"})}),u===e.length-1&&e.length<Ie.length&&t(C,{variant:"","aria-label":"Add",onClick:o,className:"add-button",children:t($e,{className:"SRC-icon-fill"})})]},l.type))})};try{Q.displayName="EvaluationRoundLimitOptionsList",Q.__docgenInfo={description:"",displayName:"EvaluationRoundLimitOptionsList",props:{limitInputs:{defaultValue:null,description:"",name:"limitInputs",required:!0,type:{name:"EvaluationRoundLimitInput[]"}},handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(index: number) => (limitInput: EvaluationRoundLimitInput) => void"}},handleDeleteLimit:{defaultValue:null,description:"",name:"handleDeleteLimit",required:!0,type:{name:"(index: number) => () => void"}},onAddNewLimit:{defaultValue:null,description:"",name:"onAddNewLimit",required:!0,type:{name:"(limit: EvaluationRoundLimitInput) => void"}}}}}catch{}var J={},Ke={get exports(){return J},set exports(e){J=e}},Z={},Qe={get exports(){return Z},set exports(e){Z=e}},U=1;function Je(){return U=(U*9301+49297)%233280,U/233280}function Ze(e){U=e}var Xe={nextValue:Je,seed:Ze},X=Xe,N="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",L,he,_;function z(){_=!1}function xe(e){if(!e){L!==N&&(L=N,z());return}if(e!==L){if(e.length!==N.length)throw new Error("Custom alphabet for shortid must be "+N.length+" unique characters. You submitted "+e.length+" characters: "+e);var a=e.split("").filter(function(i,n,r){return n!==r.lastIndexOf(i)});if(a.length)throw new Error("Custom alphabet for shortid must be "+N.length+" unique characters. These characters were not unique: "+a.join(", "));L=e,z()}}function ze(e){return xe(e),L}function et(e){X.seed(e),he!==e&&(z(),he=e)}function tt(){L||xe(N);for(var e=L.split(""),a=[],i=X.nextValue(),n;e.length>0;)i=X.nextValue(),n=Math.floor(i*e.length),a.push(e.splice(n,1)[0]);return a.join("")}function Re(){return _||(_=tt(),_)}function at(e){var a=Re();return a[e]}function nt(){return L||N}var ue={get:nt,characters:ze,seed:et,lookup:at,shuffled:Re},j=typeof window=="object"&&(window.crypto||window.msCrypto),ee;!j||!j.getRandomValues?ee=function(e){for(var a=[],i=0;i<e;i++)a.push(Math.floor(Math.random()*256));return a}:ee=function(e){return j.getRandomValues(new Uint8Array(e))};var it=ee,rt=function(e,a,i){for(var n=(2<<Math.log(a.length-1)/Math.LN2)-1,r=-~(1.6*n*i/a.length),o="";;)for(var l=e(r),u=r;u--;)if(o+=a[l[u]&n]||"",o.length===+i)return o},ot=ue,st=it,lt=rt;function dt(e){for(var a=0,i,n="";!i;)n=n+lt(st,ot.get(),1),i=e<Math.pow(16,a+1),a++;return n}var ut=dt,M=ut,ct=1567752802062,mt=7,q,ve;function pt(e){var a="",i=Math.floor((Date.now()-ct)*.001);return i===ve?q++:(q=0,ve=i),a=a+M(mt),a=a+M(e),q>0&&(a=a+M(q)),a=a+M(i),a}var ht=pt,vt=ue;function ft(e){if(!e||typeof e!="string"||e.length<6)return!1;var a=new RegExp("[^"+vt.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!a.test(e)}var gt=ft;(function(e){var a=ue,i=ht,n=gt,r=0;function o(p){return a.seed(p),e.exports}function l(p){return r=p,e.exports}function u(p){return p!==void 0&&a.characters(p),a.shuffled()}function h(){return i(r)}e.exports=h,e.exports.generate=h,e.exports.seed=o,e.exports.worker=l,e.exports.characters=u,e.exports.isValid=n})(Qe);(function(e){e.exports=Z})(Ke);const Te=Pe(J),_e=(e,a)=>({reactListKey:a??Te.generate(),evaluationId:e.evaluationId,id:e.id,etag:e.etag,roundStart:e.roundStart,roundEnd:e.roundEnd,totalSubmissionLimit:Et(e.limits),otherLimits:St(e.limits)}),Et=e=>(e||[]).filter(a=>a.limitType==="TOTAL").reduce((a,i)=>i.maximumSubmissions.toString(),""),St=e=>(e||[]).filter(a=>a.limitType!=="TOTAL").reduce((a,i)=>(a.push({type:i.limitType,maxSubmissionString:i.maximumSubmissions.toString()}),a),[]),te=({onSave:e,onDelete:a})=>{const[i,n]=s.useState(!1);return d(W,{children:[t(we,{title:"Delete Evaluation Round",modalBody:"Are you sure you want to delete this Evaluation Round?",show:i,confirmButtonText:"Delete",onConfirm:()=>{a(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),d(g,{className:"float-right",children:[t(g.Toggle,{"aria-label":"Round Options",variant:"link",className:"dropdown-no-caret evaluation-round-editor-dropdown",children:t(le,{icon:"verticalEllipsis"})}),d(g.Menu,{alignRight:!0,children:[t(g.Item,{onClick:e,children:"Save"}),t(g.Divider,{}),t(g.Item,{onClick:()=>n(!0),children:"Delete"})]})]})]})};try{te.displayName="EvaluationRoundEditorDropdown",te.__docgenInfo={description:"",displayName:"EvaluationRoundEditorDropdown",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"() => void"}}}}}catch{}var ae={},yt={get exports(){return ae},set exports(e){ae=e}};(function(e,a){(function(i,n){e.exports=n()})(Ge,function(){return function(i,n){n.prototype.isSameOrAfter=function(r,o){return this.isSame(r,o)||this.isAfter(r,o)}}})})(yt);const bt=ae;y.extend(je);y.extend(bt);const Lt=e=>{const a=e.startOf("day");return i=>i.isSameOrAfter(a)},wt=(e,a)=>{let i,n,r;const o=y();return o.isSameOrAfter(e)?o.isBefore(a)?(i="status-in-progress",n={icon:"sync"},r="IN PROGRESS"):(i="status-completed",n={icon:"clipboardCheck"},r="COMPLETED"):(i="status-not-yet-started",n=void 0,r="NOT YET STARTED"),t("div",{className:i,children:d("div",{className:"status",children:[n&&t(le,{...n}),t("span",{children:r})]})})},Nt=(e,a,i,n,r)=>{const o=[];if(n){const l=Number(n);if(Number.isNaN(l))throw TypeError("Total Submission is not an integer");o.push({limitType:"TOTAL",maximumSubmissions:l})}return r.forEach(l=>{if(l.maxSubmissionString){const u=Number(l.maxSubmissionString);if(Number.isNaN(u))throw TypeError(l.type+" Limit is not an integer");o.push({limitType:l.type,maximumSubmissions:u})}}),{id:e.id,etag:e.etag,evaluationId:e.evaluationId,roundStart:y.utc(a).toJSON(),roundEnd:y.utc(i).toJSON(),limits:o}},ne=({evaluationRoundInput:e,onSave:a,onDelete:i})=>{const{accessToken:n}=oe(),[r,o]=s.useState(),[l,u]=s.useState(!1);s.useEffect(()=>{r&&u(!1)},[r]);const[h,p]=s.useState(y(e.roundStart)),[b,D]=s.useState(y(e.roundEnd)),[x,A]=s.useState(e.totalSubmissionLimit),[R,T]=s.useState(!1),{list:I,handleListRemove:m,handleListChange:k,appendToList:V}=Ne(e.otherLimits),P=E=>{const O=m(E);return()=>{O(),I.length===1&&T(!1)}},c=()=>{u(!1);let E;try{E=Nt(e,h,b,x,I)}catch(O){o(O)}E&&(E.id?Me(E,n):qe(E,n)).then(G=>{const De=_e(G,e.reactListKey);o(void 0),u(!0),a(De)}).catch(G=>o(G))},ce=()=>{e.id?Be(e.evaluationId,e.id,n).then(()=>i()).catch(E=>o(E)):i()},w=Lt(y());return t("div",{className:"evaluation-round-editor",children:t(me,{children:t(me.Body,{children:d(v,{role:"form",children:[d(S,{children:[t(f,{children:d("h5",{children:["ROUND STATUS",e.id&&" ("+e.id+")"]})}),t(f,{children:t(te,{onDelete:ce,onSave:c})})]}),t(S,{className:"mb-3",children:t(f,{children:t("div",{className:"round-status",children:wt(e.roundStart,e.roundEnd)})})}),t(S,{children:t(f,{children:t("h5",{children:"DURATION"})})}),d(S,{children:[t(f,{children:t(pe,{value:h,setterCallback:p,label:"Round Start",isValidDate:w,disabled:y().isSameOrAfter(e.roundStart)})}),t(f,{children:t(pe,{value:b,label:"Round End",setterCallback:D,isValidDate:w})})]}),t(S,{children:t(f,{children:t("h5",{children:"SUBMISSION LIMITS"})})}),t(S,{children:t(f,{children:d($,{children:[t("label",{children:"Total Submissions / Round"}),t(Y,{value:x,type:"text",pattern:"[0-9]*",onChange:E=>A(E.target.value),autoComplete:"new-password"})]})})}),t(S,{className:"mb-3",children:t(f,{children:t(C,{variant:"link",className:"advanced-limits-link font-weight-bold",onClick:()=>T(!R),children:"Advanced Limits"})})}),R&&t(Q,{limitInputs:I,handleChange:k,handleDeleteLimit:P,onAddNewLimit:V}),r&&t(S,{className:"my-3",children:t(f,{children:t(se,{error:r})})}),l&&t(S,{className:"my-3",children:t(f,{children:t(de,{className:"save-success-alert",dismissible:!0,variant:"success",transition:!1,onClose:()=>u(!1),children:"Successfully saved."})})}),t(S,{className:"mt-3",children:t(f,{children:t(C,{className:"save-button float-right border-0",onClick:c,children:"Save"})})})]})})})})};try{ne.displayName="EvaluationRoundEditor",ne.__docgenInfo={description:"",displayName:"EvaluationRoundEditor",props:{evaluationRoundInput:{defaultValue:null,description:"",name:"evaluationRoundInput",required:!0,type:{name:"EvaluationRoundInput"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(evaluationRound: EvaluationRoundInput) => void"}}}}}catch{}const Ct=(e,a,i,n)=>{const r=[],o=l=>{Fe(e,{nextPageToken:l},a).then(u=>{const h=u.page.map(p=>_e(p));r.push(...h),n(void 0),u.nextPageToken?o(u.nextPageToken):i(r)}).catch(u=>{n(u)})};o(void 0)},ie=({evaluationId:e})=>{const{accessToken:a}=oe(),[i,n]=s.useState(),{list:r,appendToList:o,handleListChange:l,handleListRemove:u,setList:h}=Ne([]);return s.useEffect(()=>{Ct(e,a,h,n)},[a,e]),i?t(se,{error:i}):d("div",{className:"evaluation-round-editor-list bootstrap-4-backport",children:[t("div",{className:"evaluation-rounds",children:r.map((p,b)=>t(ne,{evaluationRoundInput:p,onSave:l(b),onDelete:u(b)},p.reactListKey))}),t("div",{children:t(C,{className:"add-round-button",variant:"primary",onClick:()=>{o({reactListKey:Te(),evaluationId:e,roundStart:"",roundEnd:"",totalSubmissionLimit:"",otherLimits:[]})},children:"Add Round"})})]})};try{ie.displayName="EvaluationRoundEditorList",ie.__docgenInfo={description:"Edits EvaluationsRounds for an Evaluation.",displayName:"EvaluationRoundEditorList",props:{evaluationId:{defaultValue:null,description:"id of the Evaluation containing EvaluationRounds to edit",name:"evaluationId",required:!0,type:{name:"string"}}}}}catch{}const re=({evaluationId:e,entityId:a,onDeleteSuccess:i})=>{const[n,r]=s.useState(e);return d("div",{className:"bootstrap-4-backport",children:[t(H,{evaluationId:n,entityId:n?void 0:a,onDeleteSuccess:i,onSaveSuccess:r}),t("div",{className:"mt-4",children:n?t(ie,{evaluationId:n}):t(It,{})})]})},It=()=>{const[e,a]=s.useState(!1);return t("div",{"data-testid":"FakeEvaluationRoundEditorList",children:e?t(de,{dismissible:!1,show:!0,variant:"info",transition:!1,children:"Evaluation Rounds can be edited once the Evaluation has been created."}):t(C,{className:"add-round-button",variant:"primary",onClick:()=>{a(!0)},children:"Add Round"})})};try{re.displayName="EvaluationEditorPage",re.__docgenInfo={description:"Combined editor that allows editing an Evaluation's data and also it's associated rounds (once the Evaluation exists on Synapse)",displayName:"EvaluationEditorPage",props:{evaluationId:{defaultValue:null,description:"Use if UPDATING an existing Evaluation. Id of the evaluation to edit",name:"evaluationId",required:!1,type:{name:"string"}},entityId:{defaultValue:null,description:"Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation",name:"entityId",required:!1,type:{name:"string"}},onDeleteSuccess:{defaultValue:null,description:"Callback after successful deletion of the Evaluation",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}}}catch{}const an={title:"Synapse/Challenge/EvaluationEditorPage",component:re},B={args:{entityId:"syn5585645"}},F={args:{evaluationId:"9614712"}};var fe,ge,Ee;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    entityId: 'syn5585645'
  }
}`,...(Ee=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:Ee.source}}};var Se,ye,be;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    evaluationId: '9614712'
  }
}`,...(be=(ye=F.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const nn=["Entity","Evaluation"];export{B as Entity,F as Evaluation,nn as __namedExportsOrder,an as default};
//# sourceMappingURL=EvaluationEditorPage.stories-9a784186.js.map
