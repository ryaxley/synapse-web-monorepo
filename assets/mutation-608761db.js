import{_ as o}from"./extends-98964cd2.js";import{I as c,T as l,R as h,V as d}from"./SynapseContext-3e3caab0.js";var y=function(){function s(r){this.options=o({},r.defaultOptions,r.options),this.mutationId=r.mutationId,this.mutationCache=r.mutationCache,this.observers=[],this.state=r.state||f(),this.meta=r.meta}var e=s.prototype;return e.setState=function(t){this.dispatch({type:"setState",state:t})},e.addObserver=function(t){this.observers.indexOf(t)===-1&&this.observers.push(t)},e.removeObserver=function(t){this.observers=this.observers.filter(function(n){return n!==t})},e.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(c).catch(c)):Promise.resolve()},e.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},e.execute=function(){var t=this,n,a=this.state.status==="loading",u=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),u=u.then(function(){t.mutationCache.config.onMutate==null||t.mutationCache.config.onMutate(t.state.variables,t)}).then(function(){return t.options.onMutate==null?void 0:t.options.onMutate(t.state.variables)}).then(function(i){i!==t.state.context&&t.dispatch({type:"loading",context:i,variables:t.state.variables})})),u.then(function(){return t.executeMutation()}).then(function(i){n=i,t.mutationCache.config.onSuccess==null||t.mutationCache.config.onSuccess(n,t.state.variables,t.state.context,t)}).then(function(){return t.options.onSuccess==null?void 0:t.options.onSuccess(n,t.state.variables,t.state.context)}).then(function(){return t.options.onSettled==null?void 0:t.options.onSettled(n,null,t.state.variables,t.state.context)}).then(function(){return t.dispatch({type:"success",data:n}),n}).catch(function(i){return t.mutationCache.config.onError==null||t.mutationCache.config.onError(i,t.state.variables,t.state.context,t),l().error(i),Promise.resolve().then(function(){return t.options.onError==null?void 0:t.options.onError(i,t.state.variables,t.state.context)}).then(function(){return t.options.onSettled==null?void 0:t.options.onSettled(void 0,i,t.state.variables,t.state.context)}).then(function(){throw t.dispatch({type:"error",error:i}),i})})},e.executeMutation=function(){var t=this,n;return this.retryer=new h({fn:function(){return t.options.mutationFn?t.options.mutationFn(t.state.variables):Promise.reject("No mutationFn found")},onFail:function(){t.dispatch({type:"failed"})},onPause:function(){t.dispatch({type:"pause"})},onContinue:function(){t.dispatch({type:"continue"})},retry:(n=this.options.retry)!=null?n:0,retryDelay:this.options.retryDelay}),this.retryer.promise},e.dispatch=function(t){var n=this;this.state=p(this.state,t),d.batch(function(){n.observers.forEach(function(a){a.onMutationUpdate(t)}),n.mutationCache.notify(n)})},s}();function f(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function p(s,e){switch(e.type){case"failed":return o({},s,{failureCount:s.failureCount+1});case"pause":return o({},s,{isPaused:!0});case"continue":return o({},s,{isPaused:!1});case"loading":return o({},s,{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return o({},s,{data:e.data,error:null,status:"success",isPaused:!1});case"error":return o({},s,{data:void 0,error:e.error,failureCount:s.failureCount+1,isPaused:!1,status:"error"});case"setState":return o({},s,e.state);default:return s}}export{y as M,f as g};
//# sourceMappingURL=mutation-608761db.js.map
