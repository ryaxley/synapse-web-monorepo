import{a as N,j as r,F as M}from"./jsx-runtime-095bf462.js";import{r as b}from"./index-8db94870.js";import{I as te}from"./SynapseClient-425fbe83.js";import"./getEndpoint-ac94413e.js";import{b as Q}from"./SynapseConstants-9336a6ec.js";import{a as I}from"./queryUtils-ce7bf6d9.js";import{p as j,g as se}from"./SqlFunctions-9cdead1d.js";import{a as D}from"./useGetQueryResultBundle-6da75c3f.js";import{c as oe,P as re}from"./factory-275e83af.js";import{d as A}from"./dayjs.min-59ef0ea6.js";import{O as ne,p as ae,N as ie}from"./ObservationCard-fc8b8268.js";import{D as le}from"./Dialog-2a91462e.js";import{g as B}from"./ColorGradient-3d3e1969.js";import{B as f}from"./Box-94283325.js";import{T as ue}from"./Typography-d5f8f357.js";import"./LeftRightPanel-5869c0a1.js";import{S as de}from"./StyledFormControl-3020fa6d.js";import"./WideButton-519d13bd.js";import"./InputSizedButton-74aa659b.js";import{I as ce}from"./InputLabel-f385112e.js";import{S as me}from"./Select-8309ba81.js";import{M as pe}from"./MenuItem-f42af346.js";import{S as R}from"./Skeleton-5d185628.js";const he="species",ve="observationphase",L={concreteType:"org.sagebionetworks.repo.model.table.QueryResultBundle",queryResult:{concreteType:"org.sagebionetworks.repo.model.table.QueryResult",queryResults:{concreteType:"org.sagebionetworks.repo.model.table.RowSet",tableId:"syn52408661",etag:"a3270cb2-4373-4e12-9981-e12326e54ad1",headers:[{name:"species",columnType:"STRING",id:"152514"},{name:"observationPhase",columnType:"STRING",id:"197976"},{name:"observationPhaseOrder",columnType:"INTEGER",id:"198102"},{name:"observationTimeMax",columnType:"INTEGER",id:"198103"},{name:"observationTimeUnits",columnType:"STRING",id:"198101"}],rows:[{rowId:9,versionNumber:4,values:["Danio rerio","embryo","1","7","days"]},{rowId:10,versionNumber:4,values:["Danio rerio","larval","2","3","months"]},{rowId:11,versionNumber:4,values:["Danio rerio","juvenile","3","6","months"]},{rowId:12,versionNumber:4,values:["Danio rerio","adult","4","12","months"]},{rowId:16,versionNumber:4,values:["Drosophila","embryo","1","24","hours"]},{rowId:17,versionNumber:4,values:["Drosophila","larval","2","5","days"]},{rowId:18,versionNumber:4,values:["Drosophila","pupal","3","12","days"]},{rowId:19,versionNumber:4,values:["Drosophila","adult","4","5","weeks"]},{rowId:1,versionNumber:4,values:["Mus musculus","prenatal","1","21","days"]},{rowId:2,versionNumber:4,values:["Mus musculus","postnatal","2","6","months"]},{rowId:20,versionNumber:4,values:["Rattus norvegicus","prenatal","1","23","days"]},{rowId:21,versionNumber:4,values:["Rattus norvegicus","neonatal","2","4","weeks"]},{rowId:22,versionNumber:4,values:["Rattus norvegicus","weanling","3","2","months"]},{rowId:23,versionNumber:4,values:["Rattus norvegicus","juvenile","4","3","months"]},{rowId:24,versionNumber:4,values:["Rattus norvegicus","adolescent","5","6","months"]},{rowId:25,versionNumber:4,values:["Rattus norvegicus","adult","6","12","months"]},{rowId:13,versionNumber:4,values:["Saccharomyces","log phase","1","7","days"]},{rowId:14,versionNumber:4,values:["Saccharomyces","stationary phase","2","2","weeks"]},{rowId:15,versionNumber:4,values:["Saccharomyces","death phase","3","3","weeks"]},{rowId:3,versionNumber:4,values:["Sus scrofa","prenatal","1","115","days"]},{rowId:4,versionNumber:4,values:["Sus scrofa","neonatal","2","3","months"]},{rowId:5,versionNumber:4,values:["Sus scrofa","weanling","3","6","months"]},{rowId:6,versionNumber:4,values:["Sus scrofa","juvenile","4","12","months"]},{rowId:7,versionNumber:4,values:["Sus scrofa","adolescent","5","2","years"]},{rowId:8,versionNumber:4,values:["Sus scrofa","adult","6","3","years"]}]}}};var k;const fe=(k=L.queryResult)==null?void 0:k.queryResults.headers.findIndex(e=>e.name.toLowerCase()===he);var H;const E=(H=L.queryResult)==null?void 0:H.queryResults.headers.findIndex(e=>e.name.toLowerCase()===ve),ye=oe(re),ge=(e,t,i,u)=>{let a=-1;return{timepoints:t.map((o,n)=>{const l=parseFloat(o.values[i.observationTime]),d=o.values[i.observationTimeUnits];return o.rowId==u&&(a=n),e.add(l,d)}),hoverOverIndex:a}},O=e=>e.length==0?A().add(1,"days"):e.reduce((t,i)=>!t||i.isAfter(t)?i:t),be=(e,t)=>{if(e.timepoints==null||e.timepoints.length==0)return[{x:[A().format()],y:[.5],mode:"lines",line:{color:"blue",width:2},customdata:[],hoverinfo:"none"}];const i=e.timepoints.reduce((a,s,o)=>{const n=a;return n[s.format()]||(n[s.format()]=[]),n[s.format()].push(t[o]),a},{});return e.timepoints.map((a,s)=>{const o=a.format(),n=s==e.hoverOverIndex,d=i[o].map(p=>p.rowId);return{x:[o,o,o],y:[0,.5,1],mode:"lines",line:{color:n?"black":"gray",width:2},customdata:[d,d,d],hoverinfo:"none"}})},Ie=(e,t,i,u,a,s)=>{const o=[{x:e.add(1,"day").format(),y:-1,text:"                             ",showarrow:!1,textangle:"270",height:15}];if(u&&a&&s){const n=s>1?`(${s})`:"",l=e.add(u,a);o.push({x:l.format(),y:-1,text:`${u} ${ae(a,u)} ${n}`,showarrow:!1,textangle:"270",height:15})}return{hovermode:"closest",dragmode:!1,showlegend:!1,xaxis:{showgrid:!1,showticklabels:!1,showline:!1,zeroline:!1},yaxis:{range:[-1,1],showgrid:!1,zeroline:!1,showline:!1,showticklabels:!1},annotations:o,shapes:[{type:"rect",x0:e.subtract(t.diff(e)/10).format(),x1:t.add(t.diff(e)/3).format(),y0:.25,y1:.75,fillcolor:i,opacity:.8,line:{width:0}}],margin:{l:0,r:0,t:60,b:60}}},q=({color:e,rowData:t,schema:i,widthPx:u})=>{const[a,s]=b.useState(),[o,n]=b.useState(),l=A(),d=b.useRef(null),p=a==null?void 0:a.points[0].customdata,y=t==null?void 0:t.filter(v=>p==null?void 0:p.includes(v.rowId)),c=o==null?void 0:o.points[0].customdata,m=t==null?void 0:t.filter(v=>c==null?void 0:c.includes(v.rowId)),x=m&&m.length>0?parseFloat(m[0].values[i.observationTime]):void 0,h=m&&m.length>0?m[0].values[i.observationTimeUnits]:void 0,T=ge(l,t,i,(c==null?void 0:c.length)>0?c[0]:void 0),S=O(T.timepoints);return N("div",{ref:d,style:{width:u},children:[r(ye,{style:{width:u,height:"220px"},data:be(T,t),layout:Ie(l,S,e,x,h,m.length),config:{displayModeBar:!1},useResizeHandler:!0,onClick:v=>{s(v),n(void 0)},onHover:v=>{n(v)},onUnhover:()=>{n(void 0)}}),y&&r(le,{onClose:()=>s(void 0),open:!!y&&y.length>0,children:y.map(v=>r(ne,{data:v.values,schema:i,includePortalCardClass:!1},v.rowId))})]})};try{O.displayName="getMaxDate",O.__docgenInfo={description:"",displayName:"getMaxDate",props:{}}}catch{}try{q.displayName="TimelinePhase",q.__docgenInfo={description:"",displayName:"TimelinePhase",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},rowData:{defaultValue:null,description:"",name:"rowData",required:!0,type:{name:"Row[]"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"ObservationCardSchema"}},widthPx:{defaultValue:null,description:"",name:"widthPx",required:!0,type:{name:"number"}}}}}catch{}const C=({color:e,phaseName:t})=>N(f,{sx:{display:"flex",alignItems:"center",gap:"7px"},children:[r(f,{sx:{backgroundColor:e,width:"20px",height:"20px"}}),r(ue,{variant:"body1",children:t==null?void 0:t.toUpperCase()})]});try{C.displayName="TimelineLegendItem",C.__docgenInfo={description:"",displayName:"TimelineLegendItem",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},phaseName:{defaultValue:null,description:"",name:"phaseName",required:!0,type:{name:"string | null"}}}}}catch{}const P=({sql:e,additionalFilters:t=[],species:i,setSpecies:u})=>{var p,y;const a=j(e),s=D({entityId:a,query:{sql:`SELECT distinct unnest(species) FROM ${a} WHERE species is not null GROUP BY species`,additionalFilters:t},partMask:Q,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"}),{data:o,isLoading:n}=s,l=(y=(p=o==null?void 0:o.queryResult)==null?void 0:p.queryResults)==null?void 0:y.rows,d=l&&l.length>0?l[0].values[0]:void 0;return i==null&&d!=null&&u(d),n||!l||l.length<2?r(M,{}):r(f,{children:N(de,{children:[r(ce,{children:"Species"}),r(me,{sx:{marginLeft:"2px",marginBottom:"2px"},value:i,defaultValue:d,label:"Species",onChange:c=>{u(c.target.value)},children:l==null?void 0:l.map(c=>{const m=c.values[0];return r(pe,{value:m,children:m},m)})})]})})};try{P.displayName="TimelinePlotSpeciesSelector",P.__docgenInfo={description:"",displayName:"TimelinePlotSpeciesSelector",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},additionalFilters:{defaultValue:{value:"[]"},description:"",name:"additionalFilters",required:!1,type:{name:"QueryFilter[]"}},species:{defaultValue:null,description:"",name:"species",required:!1,type:{name:"string | null"}},setSpecies:{defaultValue:null,description:"",name:"setSpecies",required:!0,type:{name:"Dispatch<SetStateAction<string | null | undefined>>"}}}}}catch{}const Ne=e=>{const[t,i]=b.useState({width:1,height:2});return b.useEffect(()=>{const u=()=>{if(e.current){const a=e.current.getBoundingClientRect(),{width:s,height:o}=a,n=Math.round(s),l=Math.round(o);(t.width!=n||t.height!=l)&&i({width:n,height:l})}};return u(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}},[t.height,t.width,e]),t},we="observationphase",_e="observationtime",Te="observationtimeunits",xe="observationsubmittername",Se="observationtext",Re="observationtype",Ee="synapseid",Me="doi",F=({sql:e,searchParams:t,sqlOperator:i,defaultSpecies:u})=>{const a=j(e),[s,o]=b.useState(u),[n,l]=b.useState([]),d=b.createRef(),p=Ne(d),y=se(a,t,i)??[],c=s?{columnName:"species",concreteType:"org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",values:[s],function:te.HAS}:void 0,m=[...y];c&&m.push(c);const x=D({entityId:a,query:{sql:`${e} WHERE observationTime IS NOT NULL`,sort:[{column:"observationTime",direction:"ASC"}],additionalFilters:m},partMask:Q,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!s}),{data:h,isLoading:T}=x;if(b.useEffect(()=>{var g;if(s){const w=(g=L.queryResult)==null?void 0:g.queryResults.rows.filter(_=>_.values[fe]==s);l(w)}},[s]),T)return r(Oe,{});const S=I(we,h),v=I(_e,h),z=I(Te,h),G=I(xe,h),$=I(Se,h),W=I(Me,h),K=I(Re,h),Y=I(Ee,h),X={observationSubmitterName:G,synapseId:Y,observationType:K,observationText:$,observationTime:v,observationTimeUnits:z,doi:W};if(s===null)return r(ie,{});if(!n)return r(M,{});const J=p.width?p.width/n.length:0,Z=n.map(()=>"auto").join(" ");return N(f,{children:[N(f,{sx:{display:"flex",justifyContent:"space-between"},children:[r(f,{children:!u&&r(P,{setSpecies:o,species:s,sql:e,additionalFilters:y})}),r(f,{sx:{display:"flex",justifyContent:"flex-end",gap:"25px"},children:n.map((g,w)=>{const{colorPalette:_}=B(w,1);return r(C,{color:_[0],phaseName:g.values[E]},g.rowId)})})]}),s&&r("div",{ref:d,children:r(f,{sx:{display:"inline-grid",gridTemplateColumns:Z,minWidth:p.width,maxWidth:p.width},className:"forcePlotlyDefaultCursor",children:n.map((g,w)=>{var V;const{colorPalette:_}=B(w,1),U=(V=h==null?void 0:h.queryResult)==null?void 0:V.queryResults.rows.filter(ee=>ee.values[S]==g.values[E]);return U?r(q,{name:g.values[E],color:_[0],rowData:U,schema:X,widthPx:J},g.rowId):r(M,{})})})})]})},Oe=()=>N(f,{children:[N(f,{sx:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[r(R,{height:"45px",width:"80px"}),r(R,{height:"45px",width:"80px"})]}),r(f,{sx:{display:"flex"},children:r(R,{height:"150px",width:"100%"})})]});try{F.displayName="TimelinePlot",F.__docgenInfo={description:"",displayName:"TimelinePlot",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"Record<string, string>"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"EQUAL"'},{value:'"IN"'},{value:'"HAS"'},{value:'"HAS_LIKE"'}]}},defaultSpecies:{defaultValue:null,description:"",name:"defaultSpecies",required:!1,type:{name:"string"}}}}}catch{}export{F as T};
//# sourceMappingURL=TimelinePlot-871ee740.js.map
