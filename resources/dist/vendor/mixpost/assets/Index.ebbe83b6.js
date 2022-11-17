import{r as B,p as D,o,d as n,i as S,n as I,u as h,_ as j,a,q as R,ab as re,ac as T,b as t,X as W,j as $,w as s,t as V,F as w,e as P,f as m,B as U,c as y,L as Y,y as N,g as O,h as E,v as de,T as ue,x as X,E as me,l as fe,m as _e,k as G,H as pe}from"./app.eb1ffdd5.js";import{u as Z,_ as he}from"./PageHeader.cee3bfe8.js";import{p as ve,e as H,f as ee,o as te,w as ge,r as J,j as $e,v as xe,g as ye,l as q,T as be,_ as A}from"./PostStatus.98376767.js";import{_ as ke}from"./PrimaryButton.1f4d84d3.js";import{h as we,e as z,c as M,d as se,b as F,g as oe,a as le,f as K,i as Ce}from"./Trash.71ada3b5.js";import{_ as Ve}from"./CircleLoading.261a4cb1.js";import{E as Se}from"./EllipsisVertical.6f73e21e.js";const De=()=>{const e=B([]),l=B([]),i=D({get(){return p(e.value)},set(){const c=e.value;if(p(c)){f(c);return}u(c)}}),d=c=>{e.value=c},u=c=>{for(const r of c)v(r)||l.value.push(r)},_=c=>{let r=l.value.indexOf(c);r!==-1&&l.value.splice(r,1)},f=c=>{for(const r of c)_(r)},C=()=>{l.value=[]},v=c=>l.value.includes(c),p=c=>c.length?c.every(r=>v(r)):!1;return{selectedRecords:l,toggleSelectRecordsOnPage:i,putPageRecords:d,deselectRecord:_,deselectAllRecords:C}},ne={__name:"Badge",props:{variant:{type:String,default:"neutral"}},setup(e){const l=e,i=D(()=>({neutral:"bg-gray-100 text-gray-800",dark:"bg-gray-800 text-gray-100",info:"bg-cyan-100 text-cyan-800",success:"bg-lime-100 text-lime-600",warning:"bg-orange-100 text-orange-600",error:"bg-red-100 text-red-600"})[l.variant]);return(d,u)=>(o(),n("span",{class:I([h(i),"px-2 inline-flex items-center rounded-md"])},[S(d.$slots,"default")],2))}},Ie={},Pe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Be=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"},null,-1),Re=[Be];function je(e,l){return o(),n("svg",Pe,Re)}const Ae=j(Ie,[["render",je]]),Oe={},Le={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Ne=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"},null,-1),qe=[Ne];function Te(e,l){return o(),n("svg",Le,qe)}const Ue=j(Oe,[["render",Te]]),Ee=["value"],L={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(e,{emit:l}){const i=e,d=D({get(){return i.checked},set(u){l("update:checked",u)}});return(u,_)=>R((o(),n("input",{type:"checkbox",value:e.value,"onUpdate:modelValue":_[0]||(_[0]=f=>T(d)?d.value=f:null),class:"rounded-md w-5 h-5 border-gray-200 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:border-gray-100 disabled:cursor-not-allowed"},null,8,Ee)),[[re,h(d)]])}},Me={class:"flex items-center"},He={class:"relative mx-2"},ze={for:"keyword",class:"absolute top-0 left-0 ml-sm mt-xs"},Fe={class:"ml-xs hidden sm:inline-block"},Xe=m("Filters "),Ge={key:0,class:"px-2 py-1 rounded-md bg-white text-black font-bold"},Je=m("Clear filter"),Ke={class:"p-sm"},Qe=a("div",{class:"font-semibold"},"Labels",-1),We={class:"mt-sm flex flex-wrap items-center gap-xs"},Ye={class:"p-sm mt-sm"},Ze=a("div",{class:"font-semibold"},"Accounts",-1),et={class:"mt-sm flex flex-wrap items-center gap-xs"},tt={__name:"PostsFilter",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const i=e,d=D(()=>U().props.value.accounts),u=D(()=>U().props.value.tags),_=D(()=>i.modelValue.tags.length+i.modelValue.accounts.length),f=()=>{l("update:modelValue",Object.assign(i.modelValue,{keyword:"",tags:[],accounts:[]}))};return(C,v)=>(o(),n("div",Me,[a("div",He,[t(ve,{type:"text",modelValue:e.modelValue.keyword,"onUpdate:modelValue":v[0]||(v[0]=p=>e.modelValue.keyword=p),id:"keyword",placeholder:"Search by keyword",class:"w-full pl-11 pr-11"},null,8,["modelValue"]),a("label",ze,[t(Ue,{class:"text-stone-600"})]),e.modelValue.keyword?(o(),n("div",{key:0,onClick:v[1]||(v[1]=p=>e.modelValue.keyword=""),tabindex:"0",role:"button",class:"absolute top-0 right-0 mr-xs mt-2.5"},[t(W,{class:"!w-5 !h-5 text-stone-600 hover:text-stone-800 transition-colors ease-in-out duration-200"})])):$("",!0)]),t(z,{"width-classes":"w-72",placement:"bottom-end","closeable-on-content":!1},{trigger:s(()=>[t(ke,{size:"md"},{default:s(()=>[t(Ae),a("span",Fe,[Xe,h(_)?(o(),n("span",Ge,V(h(_)),1)):$("",!0)])]),_:1})]),header:s(()=>[t(H,{onClick:f},{default:s(()=>[Je]),_:1})]),content:s(()=>[t(ee,null,{default:s(()=>[a("div",Ke,[Qe,a("div",We,[(o(!0),n(w,null,P(h(u),p=>(o(),n("label",{key:p.id,class:"flex items-center cursor-pointer"},[t(L,{checked:e.modelValue.tags,"onUpdate:checked":v[2]||(v[2]=c=>e.modelValue.tags=c),value:p.id,number:"",class:"mr-1"},null,8,["checked","value"]),t(te,{item:p,removable:!1,editable:!1},null,8,["item"])]))),128))])]),a("div",Ye,[Ze,a("div",et,[(o(!0),n(w,null,P(h(d),p=>(o(),n("label",{key:p.id,class:"flex items-center cursor-pointer"},[t(L,{checked:e.modelValue.accounts,"onUpdate:checked":v[3]||(v[3]=c=>e.modelValue.accounts=c),value:p.id,number:"",class:"mr-1"},null,8,["checked","value"]),t(ne,{class:"inline-flex items-center"},{default:s(()=>[t(we,{provider:p.provider,class:"!w-4 !h-4 mr-xs"},null,8,["provider"]),m(" "+V(p.name),1)]),_:2},1024)]))),128))])])]),_:1})]),_:1})]))}},st={},ot={class:"flex flex-col overflow-x-hidden overflow-y-hidden"},lt={class:"-m-1.5 overflow-x-auto"},nt={class:"p-1.5 min-w-full inline-block align-middle overflow-hidden"},at={class:"min-w-full divide-y divide-gray-200 border-collapse"},it={class:"divide-y divide-gray-100"};function ct(e,l){return o(),n("div",ot,[a("div",lt,[a("div",nt,[a("table",at,[a("thead",null,[S(e.$slots,"head")]),a("tbody",it,[S(e.$slots,"body")])])])])])}const rt=j(st,[["render",ct]]),ae={__name:"TableRow",props:{hoverable:{type:Boolean,default:!1}},setup(e){return(l,i)=>(o(),n("tr",{class:I({"bg-white hover:bg-gray-50 transition-colors ease-in-out duration-200":e.hoverable})},[S(l.$slots,"default")],2))}},dt=["scope"],ut=["role"],k={__name:"TableCell",props:{component:{type:String,default:"td"},scope:{type:String},class:{type:String},align:{type:String,default:"left"},clickable:{type:Boolean,default:!1}},emits:["click"],setup(e){const l=e,i="px-lg py-sm",d=D(()=>({left:"text-left",right:"text-right"})[l.align]);return(u,_)=>(o(),n(w,null,[e.component==="th"?(o(),n("th",{key:0,scope:e.scope,class:I([[l.class,h(d),i],"font-semibold"])},[S(u.$slots,"default")],10,dt)):$("",!0),e.component==="td"?(o(),n("td",{key:1,class:I([l.class,h(d),i]),onClick:_[0]||(_[0]=()=>{e.clickable&&u.$emit("click")}),role:e.clickable?"button":"cell"},[S(u.$slots,"default")],10,ut)):$("",!0)],64))}},mt=["type"],ft={__name:"PureDangerButton",props:{type:{type:String,default:"button"}},setup(e){return(l,i)=>(o(),n("button",{type:e.type,class:"relative inline-flex items-center text-red-400 hover:text-red-500 transition-colors ease-in-out duration-200"},[S(l.$slots,"default")],8,mt))}},_t={__name:"PureButtonLink",props:{href:{type:String,required:!0},method:{type:String,default:"get"},as:{type:String,default:"a"},type:{type:String,default:null}},setup(e){return(l,i)=>(o(),y(h(Y),{href:e.href,methods:e.method,as:e.as,type:e.type,class:"relative inline-flex items-center text-gray-400 hover:text-indigo-500 transition-colors ease-in-out duration-200"},{default:s(()=>[S(l.$slots,"default")]),_:3},8,["href","methods","as","type"]))}},pt={},ht={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},vt=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"},null,-1),gt=[vt];function $t(e,l){return o(),n("svg",ht,gt)}const xt=j(pt,[["render",$t]]),yt={class:"flex flex-row items-center gap-xs"},bt=m(" Duplicate "),kt=m(" Delete "),wt=m(" Delete post "),Ct=m(" Are you sure you want to delete this post? "),Vt=m("Cancel"),St=m("Delete"),Q={__name:"PostItemActions",props:{itemId:{type:Number,required:!0}},emits:["onDelete"],setup(e,{emit:l}){const i=e,d=B(!1),u=D(()=>U().props.value.filter.status),{notify:_}=Z(),f=()=>{O.Inertia.delete(route("mixpost.posts.delete",{post:i.itemId,status:u.value}),{onSuccess(){d.value=!1,_("success","Post deleted"),l("onDelete"),E.emit("postDelete",i.itemId)}})},C=()=>{O.Inertia.post(route("mixpost.posts.duplicate",{post:i.itemId}),{},{onSuccess(){_("success","Post duplicated")}})};return(v,p)=>{const c=N("tooltip");return o(),n("div",null,[a("div",yt,[R((o(),y(_t,{href:v.route("mixpost.posts.edit",{post:e.itemId})},{default:s(()=>[t(ge)]),_:1},8,["href"])),[[c,"Edit"]]),t(z,{"width-classes":"w-32",placement:"bottom-end"},{trigger:s(()=>[t(H,{class:"mt-1"},{default:s(()=>[t(Se)]),_:1})]),content:s(()=>[t(M,{onClick:C,as:"button"},{default:s(()=>[t(xt,{class:"!w-5 !h-5 mr-1"}),bt]),_:1}),t(M,{onClick:p[0]||(p[0]=r=>d.value=!0),as:"button"},{default:s(()=>[t(se,{class:"!w-5 !h-5 mr-1 text-red-500"}),kt]),_:1})]),_:1})]),t(le,{show:d.value,variant:"danger",onClose:p[2]||(p[2]=r=>d.value=!1)},{header:s(()=>[wt]),body:s(()=>[Ct]),footer:s(()=>[t(F,{onClick:p[1]||(p[1]=r=>d.value=!1),class:"mr-xs"},{default:s(()=>[Vt]),_:1}),t(oe,{onClick:f},{default:s(()=>[St]),_:1})]),_:1},8,["show"])])}}},Dt={class:"w-44"},It={key:0,class:"text-sm mt-xs text-gray-500"},Pt={key:1,class:"text-sm mt-xs text-gray-500"},Bt={class:"w-96 text-left"},Rt={key:0,class:"w-48 flex relative"},jt={key:0,class:"absolute top-0 -right-5 z-10"},At={class:"flex flex-wrap gap-xs"},Ot={class:"flex gap-xs"},Lt={class:"mr-xs"},Nt={class:"text-left"},qt={class:"mr-xs"},Tt=m("Close"),Ut={__name:"PostItem",props:{item:{type:Object,required:!0},filter:{type:Object,default:{accounts:[]}}},setup(e){const l=e,{getOriginalVersion:i,getAccountVersion:d}=ye(),u=D(()=>{if(!l.item.versions.length)return{excerpt:"",media:null,media_count:0};let v=l.item.accounts;l.filter.accounts.length&&(v=v.filter(r=>l.filter.accounts.includes(r.id)));const p=v.map(r=>{const b=d(l.item.versions,r.id);return b?b.content[0]:i(l.item.versions).content[0]}),c=p.length?p[0]:l.item.versions[0].content[0];return{excerpt:c.excerpt,media:c.media.length?c.media[0]:null,media_count:c.media.length}}),_=B(!1),f=()=>{_.value=!0},C=()=>{_.value=!1};return(v,p)=>{const c=N("tooltip");return o(),y(ae,{hoverable:!0},{default:s(()=>[t(k,{class:"w-10"},{default:s(()=>[S(v.$slots,"checkbox")]),_:3}),t(k,{clickable:!0,onClick:f},{default:s(()=>[a("div",Dt,[t(J,{value:e.item.status},null,8,["value"]),e.item.status==="SCHEDULED"?(o(),n("div",It,V(e.item.scheduled_at.human),1)):$("",!0),e.item.status==="PUBLISHED"?(o(),n("div",Pt,V(e.item.published_at.human),1)):$("",!0)])]),_:1}),t(k,{clickable:!0,onClick:f,class:"!pl-0"},{default:s(()=>[a("div",Bt,V(h(u).excerpt),1)]),_:1}),t(k,{clickable:!0,onClick:f},{default:s(()=>[h(u).media?(o(),n("div",Rt,[h(u).media?(o(),y($e,{key:0,media:h(u).media,"img-height":"sm"},{default:s(()=>[h(u).media_count>1?(o(),n("div",jt,[t(ne,null,{default:s(()=>[m("+"+V(h(u).media_count-1),1)]),_:1})])):$("",!0)]),_:1},8,["media"])):$("",!0)])):$("",!0)]),_:1}),t(k,{clickable:!0,onClick:f},{default:s(()=>[a("div",At,[(o(!0),n(w,null,P(e.item.tags,r=>(o(),y(te,{key:r.id,item:r,removable:!1,editable:!1},null,8,["item"]))),128))])]),_:1}),t(k,null,{default:s(()=>[a("div",Ot,[(o(!0),n(w,null,P(e.item.accounts.slice(0,3),(r,b)=>(o(),n("div",{key:r.id,class:I({"-ml-6":b>0})},[R(t(K,{provider:r.provider,"img-url":r.image,active:!0},null,8,["provider","img-url"]),[[c,r.name]])],2))),128)),e.item.accounts.length>3?(o(),y(z,{key:0,"width-classes":"w-64",placement:"bottom-end"},{trigger:s(()=>[t(H,{class:"mt-4 font-semibold"},{default:s(()=>[m("+"+V(e.item.accounts.slice(3).length),1)]),_:1})]),content:s(()=>[t(ee,null,{default:s(()=>[(o(!0),n(w,null,P(e.item.accounts.slice(3),r=>(o(),y(M,{as:"div"},{default:s(()=>[a("span",Lt,[t(K,{provider:r.provider,"img-url":r.image,active:!0},null,8,["provider","img-url"])]),a("span",Nt,V(r.name),1)]),_:2},1024))),256))]),_:1})]),_:1})):$("",!0)])]),_:1}),t(k,null,{default:s(()=>[t(Q,{"item-id":e.item.id},null,8,["item-id"])]),_:1}),t(Ce,{show:_.value,scrollableBody:!0,onClose:C},{body:s(()=>[t(J,{value:e.item.status,class:"mb-lg"},null,8,["value"]),_.value?(o(),y(xe,{key:0,accounts:e.item.accounts,"selected-accounts":e.item.accounts.map(r=>r.id),versions:e.item.versions},null,8,["accounts","selected-accounts","versions"])):$("",!0)]),footer:s(()=>[_.value?(o(),n(w,{key:0},[a("div",qt,[t(Q,{"item-id":e.item.id},null,8,["item-id"])]),t(F,{onClick:C},{default:s(()=>[Tt]),_:1})],64)):$("",!0)]),_:1},8,["show"])]),_:3})}}},Et={class:"fixed bottom-0 mb-sm px-lg py-md px-sm flex items-center bg-indigo-800 text-white rounded-md mt-1 z-10"},Mt={class:"flex w-full items-center"},Ht={class:"flex items-center"},zt={class:"text-white-base"},Ft={class:"btn-black mr-xs"},Xt=a("span",{class:"hidden sm:inline-block"},"items selected",-1),Gt=a("span",{class:"inline-block sm:hidden"},"selected",-1),Jt={__name:"SelectableBar",props:{count:{type:Number,required:!0}},setup(e){return(l,i)=>{const d=N("tooltip");return o(),y(ue,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:s(()=>[R(a("div",Et,[a("div",Mt,[a("div",Ht,[R((o(),n("button",{onClick:i[0]||(i[0]=u=>l.$emit("close")),class:"mr-sm hover:text-red-500 transition-colors ease-in-out duration-200"},[t(W)])),[[d,"Dismiss",void 0,{top:!0}]]),a("div",zt,[a("span",Ft,V(e.count),1),Xt,Gt])]),a("div",{class:I([{"ml-sm":l.$slots},"flex items-center"])},[S(l.$slots,"default")],2)])],512),[[de,e.count]])]),_:3})}}},Kt={},Qt={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Wt=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1),Yt=[Wt];function Zt(e,l){return o(),n("svg",Qt,Yt)}const es=j(Kt,[["render",Zt]]),ts={},ss={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},os=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"},null,-1),ls=[os];function ns(e,l){return o(),n("svg",ss,ls)}const as=j(ts,[["render",ns]]),is={class:"bg-white border border-gray-100 rounded-lg p-sm w-fit"},cs={class:"flex flex-wrap items-center space-x-1"},rs={__name:"Pagination",props:{meta:{type:Object,default:{current_page:1,from:1,last_page:1,per_page:2,to:1,total:0,links:[]}},links:{type:Object,default:{first:null,last:null,next:null,prev:null}}},setup(e){const l=e,i="px-sm py-xs rounded-md leading-4",d=D(()=>l.meta.links.map(u=>{const _=u.label.replace("&laquo; ","").replace(" &raquo;","");return{active:u.active,url:u.url,label:_,component:isNaN(parseInt(u.label))?{Next:es,Previous:as}[_]:null}}));return(u,_)=>(o(),n("div",is,[a("div",cs,[(o(!0),n(w,null,P(h(d),(f,C)=>(o(),n(w,null,[f.url===null?(o(),n("div",{key:C,class:I([[i,{"!px-0":f.label==="...","!px-xs":f.component}],"text-gray-400"])},[f.component?(o(),y(X(f.component),{key:0})):(o(),n(w,{key:1},[m(V(f.label),1)],64))],2)):(o(),y(h(Y),{key:`link-${C}`,disabled:"",class:I(["transition-colors ease-in-out duration-200",[i,{"bg-indigo-500 text-white":f.active,"hover:text-indigo-500 focus:text-indigo-500":!f.active,"!px-xs":f.component}]]),href:f.url},{default:s(()=>[f.component?(o(),y(X(f.component),{key:0})):(o(),n(w,{key:1},[m(V(f.label),1)],64))]),_:2},1032,["class","href"]))],64))),256))])]))}},ds={class:"flex items-center py-md px-md"},us={class:"w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-xs"},ms=m("There are no results."),fs={__name:"NoResult",setup(e){return(l,i)=>(o(),n("div",ds,[a("div",us,[t(me)]),a("div",null,[l.$slots.default?S(l.$slots,"default",{key:0}):$("",!0),l.$slots.default?$("",!0):(o(),n(w,{key:1},[ms],64))])]))}},_s={class:"row-py mb-2xl"},ps={class:"w-full row-px"},hs=m("All"),vs=m("Drafts"),gs=m("Scheduled"),$s=m("Published"),xs=m("Failed"),ys={class:"w-full row-px mt-lg"},bs=m("Status"),ks=m("Content"),ws=m("Media"),Cs=m("Labels"),Vs=m("Accounts"),Ss=m("No posts found."),Ds={key:0,class:"mt-lg"},Is=m(" Delete posts "),Ps=m(" Are you sure you want to delete selected posts? "),Bs=m("Cancel"),Rs=m("Delete"),Us={__name:"Index",props:{filter:{type:Object,default:{}},posts:{type:Object},has_failed_posts:{type:Boolean,default:!1}},setup(e){const l=e,i=B({keyword:l.filter.keyword,status:l.filter.status,tags:l.filter.tags,accounts:l.filter.accounts}),{selectedRecords:d,putPageRecords:u,toggleSelectRecordsOnPage:_,deselectRecord:f,deselectAllRecords:C}=De(),v=()=>l.posts.data.map(b=>b.id);fe(()=>{u(v()),E.on("postDelete",b=>{f(b)})}),_e(()=>{E.off("postDelete")}),G(()=>q.exports.cloneDeep(i.value),q.exports.throttle(()=>{O.Inertia.get(route("mixpost.posts.index"),q.exports.pickBy(i.value),{preserveState:!0,only:["posts","filter"]})},300)),G(()=>l.posts.data,()=>{u(v())});const{notify:p}=Z(),c=B(!1),r=()=>{O.Inertia.delete(route("mixpost.posts.multipleDelete"),{data:{posts:d.value,status:i.value.status},onSuccess(){C(),p("success","Selected posts deleted")},onFinish(){c.value=!1}})};return(b,g)=>{const ie=N("tooltip");return o(),n(w,null,[t(h(pe),{title:"Posts"}),a("div",_s,[t(he,{title:"Posts"},{default:s(()=>[t(tt,{modelValue:i.value,"onUpdate:modelValue":g[0]||(g[0]=x=>i.value=x)},null,8,["modelValue"])]),_:1}),a("div",ps,[t(be,null,{default:s(()=>[t(A,{onClick:g[1]||(g[1]=x=>i.value.status=null),active:!b.$page.props.filter.status},{default:s(()=>[hs]),_:1},8,["active"]),t(A,{onClick:g[2]||(g[2]=x=>i.value.status="draft"),active:b.$page.props.filter.status==="draft"},{default:s(()=>[vs]),_:1},8,["active"]),t(A,{onClick:g[3]||(g[3]=x=>i.value.status="scheduled"),active:b.$page.props.filter.status==="scheduled"},{default:s(()=>[gs]),_:1},8,["active"]),t(A,{onClick:g[4]||(g[4]=x=>i.value.status="published"),active:b.$page.props.filter.status==="published"},{default:s(()=>[$s]),_:1},8,["active"]),e.has_failed_posts?(o(),y(A,{key:0,onClick:g[5]||(g[5]=x=>i.value.status="failed"),active:b.$page.props.filter.status==="failed",class:"text-red-500"},{default:s(()=>[xs]),_:1},8,["active"])):$("",!0)]),_:1})]),a("div",ys,[t(Jt,{count:h(d).length,onClose:h(C)},{default:s(()=>[R((o(),y(ft,{onClick:g[6]||(g[6]=x=>c.value=!0)},{default:s(()=>[t(se)]),_:1})),[[ie,"Delete"]])]),_:1},8,["count","onClose"]),t(Ve,{"with-padding":!1},{default:s(()=>[t(rt,null,{head:s(()=>[t(ae,null,{default:s(()=>[t(k,{component:"th",scope:"col",class:"w-10"},{default:s(()=>[t(L,{checked:h(_),"onUpdate:checked":g[7]||(g[7]=x=>T(_)?_.value=x:null),disabled:!e.posts.meta.total},null,8,["checked","disabled"])]),_:1}),t(k,{component:"th",scope:"col",class:"w-44"},{default:s(()=>[bs]),_:1}),t(k,{component:"th",scope:"col",class:"!pl-0 text-left"},{default:s(()=>[ks]),_:1}),t(k,{component:"th",scope:"col",class:"w-48"},{default:s(()=>[ws]),_:1}),t(k,{component:"th",scope:"col"},{default:s(()=>[Cs]),_:1}),t(k,{component:"th",scope:"col"},{default:s(()=>[Vs]),_:1}),t(k,{component:"th",scope:"col"})]),_:1})]),body:s(()=>[(o(!0),n(w,null,P(e.posts.data,x=>(o(),y(Ut,{key:x.id,item:x,filter:e.posts.filter,onOnDelete:()=>{h(f)(x.id)}},{checkbox:s(()=>[t(L,{checked:h(d),"onUpdate:checked":g[8]||(g[8]=ce=>T(d)?d.value=ce:null),value:x.id,number:""},null,8,["checked","value"])]),_:2},1032,["item","filter","onOnDelete"]))),128))]),_:1}),e.posts.meta.total?$("",!0):(o(),y(fs,{key:0},{default:s(()=>[Ss]),_:1}))]),_:1}),e.posts.meta.links.length>3?(o(),n("div",Ds,[t(rs,{meta:e.posts.meta,links:e.posts.links},null,8,["meta","links"])])):$("",!0)])]),t(le,{show:c.value,variant:"danger",onClose:g[10]||(g[10]=x=>c.value=!1)},{header:s(()=>[Is]),body:s(()=>[Ps]),footer:s(()=>[t(F,{onClick:g[9]||(g[9]=x=>c.value=!1),class:"mr-xs"},{default:s(()=>[Bs]),_:1}),t(oe,{onClick:r},{default:s(()=>[Rs]),_:1})]),_:1},8,["show"])],64)}}};export{Us as default};
