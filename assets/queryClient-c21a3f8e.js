import{_ as f}from"./extends-98964cd2.js";import{D as E,G as I,H as x,I as y,J as R,K as H,L as w,R as G,M as Q,T as B,V as l,W as U,X as g,Y as S,Z as T,_ as P,$ as D,a0 as F,a1 as _,a2 as b,a3 as K}from"./SynapseContext-3e3caab0.js";import{_ as $}from"./inheritsLoose-d541526f.js";import{M as j}from"./mutation-608761db.js";import{i as L}from"./infiniteQueryBehavior-47f31aa3.js";var V=function(){function v(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var r=v.prototype;return r.setOptions=function(t){var e;this.options=f({},this.defaultOptions,t),this.meta=t==null?void 0:t.meta,this.cacheTime=Math.max(this.cacheTime||0,(e=this.options.cacheTime)!=null?e:5*60*1e3)},r.setDefaultOptions=function(t){this.defaultOptions=t},r.scheduleGc=function(){var t=this;this.clearGcTimeout(),E(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){t.optionalRemove()},this.cacheTime))},r.clearGcTimeout=function(){clearTimeout(this.gcTimeout),this.gcTimeout=void 0},r.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},r.setData=function(t,e){var i,a,s=this.state.data,u=I(t,s);return(i=(a=this.options).isDataEqual)!=null&&i.call(a,s,u)?u=s:this.options.structuralSharing!==!1&&(u=x(s,u)),this.dispatch({data:u,type:"success",dataUpdatedAt:e==null?void 0:e.updatedAt}),u},r.setState=function(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})},r.cancel=function(t){var e,i=this.promise;return(e=this.retryer)==null||e.cancel(t),i?i.then(y).catch(y):Promise.resolve()},r.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},r.reset=function(){this.destroy(),this.setState(this.initialState)},r.isActive=function(){return this.observers.some(function(t){return t.options.enabled!==!1})},r.isFetching=function(){return this.state.isFetching},r.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(t){return t.getCurrentResult().isStale})},r.isStaleByTime=function(t){return t===void 0&&(t=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!R(this.state.dataUpdatedAt,t)},r.onFocus=function(){var t,e=this.observers.find(function(i){return i.shouldFetchOnWindowFocus()});e&&e.refetch(),(t=this.retryer)==null||t.continue()},r.onOnline=function(){var t,e=this.observers.find(function(i){return i.shouldFetchOnReconnect()});e&&e.refetch(),(t=this.retryer)==null||t.continue()},r.addObserver=function(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))},r.removeObserver=function(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(function(e){return e!==t}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:t}))},r.getObserversCount=function(){return this.observers.length},r.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},r.fetch=function(t,e){var i=this,a,s,u;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(e!=null&&e.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var c;return(c=this.retryer)==null||c.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){var o=this.observers.find(function(m){return m.options.queryFn});o&&this.setOptions(o.options)}var h=H(this.queryKey),d=w(),O={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(O,"signal",{enumerable:!0,get:function(){if(d)return i.abortSignalConsumed=!0,d.signal}});var C=function(){return i.options.queryFn?(i.abortSignalConsumed=!1,i.options.queryFn(O)):Promise.reject("Missing queryFn")},q={fetchOptions:e,options:this.options,queryKey:h,state:this.state,fetchFn:C,meta:this.meta};if((a=this.options.behavior)!=null&&a.onFetch){var A;(A=this.options.behavior)==null||A.onFetch(q)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((s=q.fetchOptions)==null?void 0:s.meta)){var M;this.dispatch({type:"fetch",meta:(M=q.fetchOptions)==null?void 0:M.meta})}return this.retryer=new G({fn:q.fetchFn,abort:d==null||(u=d.abort)==null?void 0:u.bind(d),onSuccess:function(p){i.setData(p),i.cache.config.onSuccess==null||i.cache.config.onSuccess(p,i),i.cacheTime===0&&i.optionalRemove()},onError:function(p){Q(p)&&p.silent||i.dispatch({type:"error",error:p}),Q(p)||(i.cache.config.onError==null||i.cache.config.onError(p,i),B().error(p)),i.cacheTime===0&&i.optionalRemove()},onFail:function(){i.dispatch({type:"failed"})},onPause:function(){i.dispatch({type:"pause"})},onContinue:function(){i.dispatch({type:"continue"})},retry:q.options.retry,retryDelay:q.options.retryDelay}),this.promise=this.retryer.promise,this.promise},r.dispatch=function(t){var e=this;this.state=this.reducer(this.state,t),l.batch(function(){e.observers.forEach(function(i){i.onQueryUpdate(t)}),e.cache.notify({query:e,type:"queryUpdated",action:t})})},r.getDefaultState=function(t){var e=typeof t.initialData=="function"?t.initialData():t.initialData,i=typeof t.initialData<"u",a=i?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0,s=typeof e<"u";return{data:e,dataUpdateCount:0,dataUpdatedAt:s?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:s?"success":"idle"}},r.reducer=function(t,e){var i,a;switch(e.type){case"failed":return f({},t,{fetchFailureCount:t.fetchFailureCount+1});case"pause":return f({},t,{isPaused:!0});case"continue":return f({},t,{isPaused:!1});case"fetch":return f({},t,{fetchFailureCount:0,fetchMeta:(i=e.meta)!=null?i:null,isFetching:!0,isPaused:!1},!t.dataUpdatedAt&&{error:null,status:"loading"});case"success":return f({},t,{data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:(a=e.dataUpdatedAt)!=null?a:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var s=e.error;return Q(s)&&s.revert&&this.revertState?f({},this.revertState):f({},t,{error:s,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return f({},t,{isInvalidated:!0});case"setState":return f({},t,e.state);default:return t}},v}(),W=function(v){$(r,v);function r(t){var e;return e=v.call(this)||this,e.config=t||{},e.queries=[],e.queriesMap={},e}var n=r.prototype;return n.build=function(e,i,a){var s,u=i.queryKey,c=(s=i.queryHash)!=null?s:U(u,i),o=this.get(c);return o||(o=new V({cache:this,queryKey:u,queryHash:c,options:e.defaultQueryOptions(i),state:a,defaultOptions:e.getQueryDefaults(u),meta:i.meta}),this.add(o)),o},n.add=function(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"queryAdded",query:e}))},n.remove=function(e){var i=this.queriesMap[e.queryHash];i&&(e.destroy(),this.queries=this.queries.filter(function(a){return a!==e}),i===e&&delete this.queriesMap[e.queryHash],this.notify({type:"queryRemoved",query:e}))},n.clear=function(){var e=this;l.batch(function(){e.queries.forEach(function(i){e.remove(i)})})},n.get=function(e){return this.queriesMap[e]},n.getAll=function(){return this.queries},n.find=function(e,i){var a=g(e,i),s=a[0];return typeof s.exact>"u"&&(s.exact=!0),this.queries.find(function(u){return S(s,u)})},n.findAll=function(e,i){var a=g(e,i),s=a[0];return Object.keys(s).length>0?this.queries.filter(function(u){return S(s,u)}):this.queries},n.notify=function(e){var i=this;l.batch(function(){i.listeners.forEach(function(a){a(e)})})},n.onFocus=function(){var e=this;l.batch(function(){e.queries.forEach(function(i){i.onFocus()})})},n.onOnline=function(){var e=this;l.batch(function(){e.queries.forEach(function(i){i.onOnline()})})},r}(T),k=function(v){$(r,v);function r(t){var e;return e=v.call(this)||this,e.config=t||{},e.mutations=[],e.mutationId=0,e}var n=r.prototype;return n.build=function(e,i,a){var s=new j({mutationCache:this,mutationId:++this.mutationId,options:e.defaultMutationOptions(i),state:a,defaultOptions:i.mutationKey?e.getMutationDefaults(i.mutationKey):void 0,meta:i.meta});return this.add(s),s},n.add=function(e){this.mutations.push(e),this.notify(e)},n.remove=function(e){this.mutations=this.mutations.filter(function(i){return i!==e}),e.cancel(),this.notify(e)},n.clear=function(){var e=this;l.batch(function(){e.mutations.forEach(function(i){e.remove(i)})})},n.getAll=function(){return this.mutations},n.find=function(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(function(i){return P(e,i)})},n.findAll=function(e){return this.mutations.filter(function(i){return P(e,i)})},n.notify=function(e){var i=this;l.batch(function(){i.listeners.forEach(function(a){a(e)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var e=this.mutations.filter(function(i){return i.state.isPaused});return l.batch(function(){return e.reduce(function(i,a){return i.then(function(){return a.continue().catch(y)})},Promise.resolve())})},r}(T),N=function(){function v(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new W,this.mutationCache=n.mutationCache||new k,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var r=v.prototype;return r.mount=function(){var t=this;this.unsubscribeFocus=D.subscribe(function(){D.isFocused()&&F.isOnline()&&(t.mutationCache.onFocus(),t.queryCache.onFocus())}),this.unsubscribeOnline=F.subscribe(function(){D.isFocused()&&F.isOnline()&&(t.mutationCache.onOnline(),t.queryCache.onOnline())})},r.unmount=function(){var t,e;(t=this.unsubscribeFocus)==null||t.call(this),(e=this.unsubscribeOnline)==null||e.call(this)},r.isFetching=function(t,e){var i=g(t,e),a=i[0];return a.fetching=!0,this.queryCache.findAll(a).length},r.isMutating=function(t){return this.mutationCache.findAll(f({},t,{fetching:!0})).length},r.getQueryData=function(t,e){var i;return(i=this.queryCache.find(t,e))==null?void 0:i.state.data},r.getQueriesData=function(t){return this.getQueryCache().findAll(t).map(function(e){var i=e.queryKey,a=e.state,s=a.data;return[i,s]})},r.setQueryData=function(t,e,i){var a=_(t),s=this.defaultQueryOptions(a);return this.queryCache.build(this,s).setData(e,i)},r.setQueriesData=function(t,e,i){var a=this;return l.batch(function(){return a.getQueryCache().findAll(t).map(function(s){var u=s.queryKey;return[u,a.setQueryData(u,e,i)]})})},r.getQueryState=function(t,e){var i;return(i=this.queryCache.find(t,e))==null?void 0:i.state},r.removeQueries=function(t,e){var i=g(t,e),a=i[0],s=this.queryCache;l.batch(function(){s.findAll(a).forEach(function(u){s.remove(u)})})},r.resetQueries=function(t,e,i){var a=this,s=g(t,e,i),u=s[0],c=s[1],o=this.queryCache,h=f({},u,{active:!0});return l.batch(function(){return o.findAll(u).forEach(function(d){d.reset()}),a.refetchQueries(h,c)})},r.cancelQueries=function(t,e,i){var a=this,s=g(t,e,i),u=s[0],c=s[1],o=c===void 0?{}:c;typeof o.revert>"u"&&(o.revert=!0);var h=l.batch(function(){return a.queryCache.findAll(u).map(function(d){return d.cancel(o)})});return Promise.all(h).then(y).catch(y)},r.invalidateQueries=function(t,e,i){var a,s,u,c=this,o=g(t,e,i),h=o[0],d=o[1],O=f({},h,{active:(a=(s=h.refetchActive)!=null?s:h.active)!=null?a:!0,inactive:(u=h.refetchInactive)!=null?u:!1});return l.batch(function(){return c.queryCache.findAll(h).forEach(function(C){C.invalidate()}),c.refetchQueries(O,d)})},r.refetchQueries=function(t,e,i){var a=this,s=g(t,e,i),u=s[0],c=s[1],o=l.batch(function(){return a.queryCache.findAll(u).map(function(d){return d.fetch(void 0,f({},c,{meta:{refetchPage:u==null?void 0:u.refetchPage}}))})}),h=Promise.all(o).then(y);return c!=null&&c.throwOnError||(h=h.catch(y)),h},r.fetchQuery=function(t,e,i){var a=_(t,e,i),s=this.defaultQueryOptions(a);typeof s.retry>"u"&&(s.retry=!1);var u=this.queryCache.build(this,s);return u.isStaleByTime(s.staleTime)?u.fetch(s):Promise.resolve(u.state.data)},r.prefetchQuery=function(t,e,i){return this.fetchQuery(t,e,i).then(y).catch(y)},r.fetchInfiniteQuery=function(t,e,i){var a=_(t,e,i);return a.behavior=L(),this.fetchQuery(a)},r.prefetchInfiniteQuery=function(t,e,i){return this.fetchInfiniteQuery(t,e,i).then(y).catch(y)},r.cancelMutations=function(){var t=this,e=l.batch(function(){return t.mutationCache.getAll().map(function(i){return i.cancel()})});return Promise.all(e).then(y).catch(y)},r.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},r.executeMutation=function(t){return this.mutationCache.build(this,t).execute()},r.getQueryCache=function(){return this.queryCache},r.getMutationCache=function(){return this.mutationCache},r.getDefaultOptions=function(){return this.defaultOptions},r.setDefaultOptions=function(t){this.defaultOptions=t},r.setQueryDefaults=function(t,e){var i=this.queryDefaults.find(function(a){return b(t)===b(a.queryKey)});i?i.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})},r.getQueryDefaults=function(t){var e;return t?(e=this.queryDefaults.find(function(i){return K(t,i.queryKey)}))==null?void 0:e.defaultOptions:void 0},r.setMutationDefaults=function(t,e){var i=this.mutationDefaults.find(function(a){return b(t)===b(a.mutationKey)});i?i.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})},r.getMutationDefaults=function(t){var e;return t?(e=this.mutationDefaults.find(function(i){return K(t,i.mutationKey)}))==null?void 0:e.defaultOptions:void 0},r.defaultQueryOptions=function(t){if(t!=null&&t._defaulted)return t;var e=f({},this.defaultOptions.queries,this.getQueryDefaults(t==null?void 0:t.queryKey),t,{_defaulted:!0});return!e.queryHash&&e.queryKey&&(e.queryHash=U(e.queryKey,e)),e},r.defaultQueryObserverOptions=function(t){return this.defaultQueryOptions(t)},r.defaultMutationOptions=function(t){return t!=null&&t._defaulted?t:f({},this.defaultOptions.mutations,this.getMutationDefaults(t==null?void 0:t.mutationKey),t,{_defaulted:!0})},r.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},v}();export{N as Q};
//# sourceMappingURL=queryClient-c21a3f8e.js.map
