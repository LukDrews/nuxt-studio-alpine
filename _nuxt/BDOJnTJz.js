import g from"./CY0wbc8q.js";import B from"./DQHH2Dbv.js";import C from"./DJk32-Mo.js";import V from"./D52E7f_s.js";import b from"./CkIavGRK.js";import N from"./x9X3zWIj.js";import R from"./BKNpM840.js";import{u as F}from"./CJWyG-bS.js";import{l as S,d as I,ad as j,I as m,b as o,X as l,w as e,g as s,j as d,f as r,c as A,F as E,Z as J,t as c}from"./2zoqpNIn.js";const L=I({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const k=`/api/component-meta/${j(t.of)}`,{data:h}=await F(t.of,()=>$fetch(k),"$oSoCJtWFoC"),i=m(()=>h.value.props.filter(a=>{var n;return!((n=a.tags)!=null&&n.ignore.includes(a))})),w=m(()=>{var a;return t.required!==void 0?t.required:(a=i.value)==null?void 0:a.find(n=>n.required!==void 0)}),q=m(()=>{var a;return t.values!==void 0?t.values:(a=i.value)==null?void 0:a.find(n=>n.values)}),f=m(()=>{var a;return t.description!==void 0?t.description:(a=i.value)==null?void 0:a.find(n=>n.description)}),y=m(()=>{var a;return t.default!==void 0?t.default:(a=i.value)==null?void 0:a.find(n=>n.default)});return{meta:h,properties:i,showRequired:w,showValues:q,showDescription:f,showDefault:y}}});function W(t,k,h,i,w,q){var v,D,P;const f=g,y=B,a=C,n=V,_=b,T=N,$=R;return t.meta&&((v=t.meta)!=null&&v.props)&&((P=(D=t.meta)==null?void 0:D.props)!=null&&P.length)?(o(),l($,{key:0},{default:e(()=>[s(a,null,{default:e(()=>[s(y,null,{default:e(()=>[s(f,null,{default:e(()=>[d("Prop")]),_:1}),s(f,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(o(),l(f,{key:0},{default:e(()=>[d(" Required ")]),_:1})):r("",!0),t.showDefault?(o(),l(f,{key:1},{default:e(()=>[d(" Default ")]),_:1})):r("",!0),t.showValues?(o(),l(f,{key:2},{default:e(()=>[d(" Values ")]),_:1})):r("",!0),t.showDescription?(o(),l(f,{key:3},{default:e(()=>[d(" Description ")]),_:1})):r("",!0)]),_:1})]),_:1}),s(T,null,{default:e(()=>[(o(!0),A(E,null,J(t.properties,u=>(o(),l(y,{key:u.name},{default:e(()=>[s(_,null,{default:e(()=>[s(n,null,{default:e(()=>[d(c((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),s(_,null,{default:e(()=>[s(n,null,{default:e(()=>[d(c((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(o(),l(_,{key:0},{default:e(()=>[s(n,null,{default:e(()=>[d(c(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):r("",!0),t.showDefault?(o(),l(_,{key:1},{default:e(()=>[u.default?(o(),l(n,{key:0},{default:e(()=>[d(c((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):r("",!0)]),_:2},1024)):r("",!0),t.showValues?(o(),l(_,{key:2},{default:e(()=>[u.values?(o(),l(n,{key:0},{default:e(()=>[d(c((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(o(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):r("",!0),t.showDescription?(o(),l(_,{key:3},{default:e(()=>[s(n,null,{default:e(()=>[d(c(u.description),1)]),_:2},1024)]),_:2},1024)):r("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):r("",!0)}const O=S(L,[["render",W]]);export{O as default};
