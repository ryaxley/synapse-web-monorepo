import{a as o}from"./index-bb72858b.js";import{at as n,au as E}from"./EntityTypeUtils-1230d941.js";import{a as R}from"./MockResearchProject-5cc08654.js";function p(e){return[o.rest.post(`${e}${n}`,async(t,r,s)=>{const a=await t.json();return r(s.status(201),s.json(a))}),o.rest.get(`${e}${E(":id")}`,async(t,r,s)=>{const a={...R,accessRequirementId:t.params.id.toString()};return r(s.status(200),s.json(a))})]}export{p as g};
//# sourceMappingURL=researchProjectHandlers-41b0efe3.js.map
