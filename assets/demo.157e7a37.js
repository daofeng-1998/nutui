import{c as a}from"./mobile.cb7c22aa.js";import{z as l,A as o,r as e,o as t,c as n,f as s,y as c,j as i}from"./vendor.ed841bd5.js";import"./index.6aaff52e.js";const{createDemo:m}=a("avatar");var u=m({props:{},setup:()=>({handleClick:()=>{console.log("触发点击头像")}})});const f=c();l("data-v-6504f754");const d={class:"demo full"},r=s("h2",null,'默认用法 (内置"small","normal","large"三种尺寸规格)',-1),g=s("h2",null,"修改形状",-1),p=s("h2",null,"修改背景色",-1),h=s("h2",null,"修改背景图片",-1),b=s("h2",null,"可以修改头像的内容",-1),v=i("N"),y=s("h2",null,"点击头像触发事件",-1);o();const _=f(((a,l,o,c,i,m)=>{const u=e("nut-avatar"),_=e("nut-cell");return t(),n("div",d,[r,s(_,null,{default:f((()=>[s(u,{size:"large",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(u,{size:"normal",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(u,{size:"small",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"})])),_:1}),g,s(_,null,{default:f((()=>[s(u,{icon:"my",shape:"square"}),s(u,{icon:"my",shape:"round"})])),_:1}),p,s(_,null,{default:f((()=>[s(u,{class:"demo-avatar",icon:"my","bg-color":"#FA2C19"})])),_:1}),h,s(_,null,{default:f((()=>[s(u,{icon:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"})])),_:1}),b,s(_,null,{default:f((()=>[s(u,null,{default:f((()=>[v])),_:1})])),_:1}),y,s(_,null,{default:f((()=>[s(u,{icon:"my",onActiveAvatar:a.handleClick},null,8,["onActiveAvatar"])])),_:1})])}));u.render=_,u.__scopeId="data-v-6504f754";export default u;