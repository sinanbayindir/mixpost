import{r as u,o as _,k as f,w as s,b as t,a as e,d as l,O as d}from"./app.73670078.js";import{u as h}from"./useNotifications.176eb045.js";import{_ as v}from"./Panel.6a4a5560.js";import{_ as x}from"./Input.364a6085.js";import{U as k}from"./Services.6986407e.js";import{_ as g}from"./PrimaryButton.4cbfa5ca.js";import{_ as U}from"./HorizontalGroup.d87a56d0.js";import{_ as $}from"./Error.75ac2573.js";import{_ as y}from"./ReadDocHelp.8b5c0500.js";import"./PageHeader.27b8d4d4.js";import"./Tab.f4788dce.js";import"./Facebook.79ff0f35.js";const b={class:"flex items-center"},V={class:"mr-xs"},N=t("span",null,"Unsplash",-1),O=t("p",null,"With Unsplash you can use external stock photos directly in Mixpost.",-1),S=t("p",null,[t("a",{href:"https://unsplash.com/oauth/applications",class:"link",target:"_blank"},"Create an App on Unsplash"),l(". ")],-1),T={__name:"UnsplashServiceForm",props:{form:{required:!0,type:Object}},setup(a){const i=a,{notify:c}=h(),o=u({}),p=()=>{o.value={},d.put(route("mixpost.services.update",{service:"unsplash"}),i.form,{preserveScroll:!0,onSuccess(){c("success","Unsplash credentials have been saved")},onError:r=>{o.value=r}})};return(r,n)=>(_(),f(v,null,{title:s(()=>[t("div",b,[t("span",V,[e(k,{class:"text-black"})]),N])]),description:s(()=>[O,S,e(y,{href:`${r.$page.props.mixpost.docs_link}/books/services-configuration-mixpost/page/unsplash`,class:"mt-xs"},null,8,["href"])]),default:s(()=>[e(U,{class:"mt-lg"},{title:s(()=>[l("API Key")]),footer:s(()=>[e($,{message:o.value.client_id},null,8,["message"])]),default:s(()=>[e(x,{modelValue:a.form.client_id,"onUpdate:modelValue":n[0]||(n[0]=m=>a.form.client_id=m),error:o.value.hasOwnProperty("client_id"),type:"text",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),e(g,{onClick:p,class:"mt-lg"},{default:s(()=>[l("Save")]),_:1})]),_:1}))}};export{T as default};