import{a as o}from"./index-df1ee903.js";import{at as n,au as E}from"./EntityTypeUtils-5f3d9964.js";import{a as R}from"./MockResearchProject-7ce36dd8.js";function p(e){return[o.rest.post(`${e}${n}`,async(t,r,s)=>{const a=await t.json();return r(s.status(201),s.json(a))}),o.rest.get(`${e}${E(":id")}`,async(t,r,s)=>{const a={...R,accessRequirementId:t.params.id.toString()};return r(s.status(200),s.json(a))})]}export{p as g};
//# sourceMappingURL=researchProjectHandlers-18599c7d.js.map
