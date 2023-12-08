import{a as d,j as a}from"./jsx-runtime-095bf462.js";import{R as E,r}from"./index-8db94870.js";import{w as N,x as _,C as w}from"./SynapseTableCell-f01c8968.js";import{g as b,M as D,A as J,a as q,b as F,c as I,B as O,E as P,T as B,D as M,d as R}from"./ErrorListTemplate-be878763.js";import"./isPlainObject-a5fcaf03.js";import"./mapValues-12c386f6.js";import"./index.modern-bdabb7b6.js";import"./index-953d39fd.js";import{p as W}from"./papaparse.min-84949987.js";import{B as C}from"./Box-f664662a.js";import{B as g}from"./Button-f56bbd3a.js";import{C as j}from"./_getTag-ed9314eb.js";import{T as k}from"./TextField-b415d66b.js";import{A as L,a as H}from"./AlertTitle-ce329963.js";import{T as $}from"./Typography-214fd772.js";function K(o={type:"string"}){return{$schema:"http://json-schema.org/draft-07/schema#",type:"array",items:o}}const S=E.forwardRef(function(c,f){const{value:l=[],onChange:s,onSubmit:n,arrayItemDefinition:u}=c,[p,i]=r.useState(!1),[t,m]=r.useState(""),[y,h]=r.useState([]),V=r.useCallback(()=>{t?W.parse(t,{complete:e=>{e.errors.length>0?h(e.errors):(s([...l,...e.data[0]]),h([]),m(""),i(!1))}}):(h([]),m(""),i(!1))},[s,t,l]),v=r.useMemo(()=>K(u),[u]),A=r.useMemo(()=>b(),[]);return d(C,{className:"JsonSchemaFormContainer",sx:{".JsonSchemaForm .LabelContainer":{display:"none",visibility:"hidden"}},children:[a(D,{ref:f,schema:v,className:"JsonSchemaForm",noHtml5Validate:!0,uiSchema:{"ui:submitButtonOptions":{norender:!0}},validator:N,formData:l,formContext:{allowRemovingLastItemInArray:!0},onChange:({formData:e})=>s(e),onSubmit:({formData:e})=>n(e),templates:{ArrayFieldDescriptionTemplate:J,ArrayFieldItemTemplate:q,ArrayFieldTemplate:F,ArrayFieldTitleTemplate:I,ButtonTemplates:O,ErrorListTemplate:P},transformErrors:A,widgets:{TextWidget:B,DateTimeWidget:M,SelectWidget:_,CheckboxWidget:R}}),a(g,{onClick:()=>i(!0),children:"Paste new values"}),d(j,{sx:{mt:2},in:p,children:[a(k,{multiline:!0,InputProps:{inputProps:{"aria-label":"CSV or TSV to Append"}},rows:5,placeholder:"Place comma or tab delimited values here",value:t,onChange:e=>m(e.target.value)}),d(C,{my:1,display:"flex",justifyContent:"flex-end",children:[a(g,{onClick:()=>i(!1),children:"Cancel"}),a(g,{onClick:V,children:"Add"})]}),y&&y.length>0&&d(L,{severity:"error",sx:{my:2},children:[a(H,{children:"Parsing errors encountered:"}),a("ul",{children:y.map((e,x)=>d($,{component:"li",lineHeight:1.5,variant:"smallText1",children:[e.row?`At ${e.row}: `:"",e.message]},x))})]})]})]})});try{S.displayName="JSONArrayEditor",S.__docgenInfo={description:"",displayName:"JSONArrayEditor",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},arrayItemDefinition:{defaultValue:null,description:"",name:"arrayItemDefinition",required:!1,type:{name:"JSONSchema7Definition"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: string[]) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(formData: string[]) => void"}}}}}catch{}function T(o){const{isShowingModal:c,onConfirm:f,onCancel:l,dialogTitle:s="Edit Values",value:n,...u}=o,p=r.useRef(null),[i,t]=r.useState(n??[]);return r.useEffect(()=>{n&&t(n)},[n]),a(w,{open:c,title:s,confirmButtonText:"OK",onCancel:l,maxWidth:"md",content:a(S,{ref:p,value:i,onChange:m=>t(m),onSubmit:f,...u}),onConfirm:()=>{p.current.formElement.current.requestSubmit()}})}try{T.displayName="JSONArrayEditorModal",T.__docgenInfo={description:"",displayName:"JSONArrayEditorModal",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},arrayItemDefinition:{defaultValue:null,description:"",name:"arrayItemDefinition",required:!1,type:{name:"JSONSchema7Definition"}},dialogTitle:{defaultValue:null,description:"",name:"dialogTitle",required:!1,type:{name:"ReactNode"}},isShowingModal:{defaultValue:null,description:"",name:"isShowingModal",required:!0,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"(value: string[]) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}}}}}catch{}export{T as J};
//# sourceMappingURL=JSONArrayEditorModal-99a78d98.js.map
