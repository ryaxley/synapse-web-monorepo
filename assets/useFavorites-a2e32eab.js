import{a9 as u,bO as i,cC as F,ab as d,cD as f,cE as o}from"./SynapseContext-57d40dc1.js";import{u as v}from"./useMutation-db4c1cb0.js";import{u as I}from"./useInfiniteQuery-12d50096.js";const c="favorites";function E(e){var r;const{data:a,isLoading:t}=y();return{isFavorite:(r=a==null?void 0:a.results)==null?void 0:r.some(n=>n.id===e),isLoading:t}}function g(e){const{accessToken:a}=u(),t=i();return v({...e,mutationFn:s=>f(s,a),mutationKey:["addFavorite"],onSuccess:async(s,r,n)=>{if(await t.invalidateQueries([c]),e!=null&&e.onSuccess)return e.onSuccess(s,r,n)}})}function C(e){const{accessToken:a}=u(),t=i();return v({...e,mutationFn:s=>F(s,a),mutationKey:["removeFavorite"],onSuccess:async(s,r,n)=>{if(await t.invalidateQueries([c]),e!=null&&e.onSuccess)return e.onSuccess(s,r,n)}})}function y(e="FAVORITED_ON",a="DESC",t){const{accessToken:s}=u();return d([c,e,a,s],()=>o(s,void 0,void 0,e,a),t)}function O(e="FAVORITED_ON",a="DESC",t){const{accessToken:r}=u();return I([c,"infinite",e,a],async n=>o(r,n.pageParam,10,e,a),{...t,getNextPageParam:(n,m)=>{if(n.results.length>0)return m.length*10}})}export{y as a,E as b,g as c,C as d,O as u};
//# sourceMappingURL=useFavorites-a2e32eab.js.map
