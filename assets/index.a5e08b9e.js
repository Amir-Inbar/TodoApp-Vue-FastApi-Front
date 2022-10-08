import{r as m,o as a,c,a as e,b as h,w as $,d as p,e as v,v as g,f as b,t as _,n as S,F as E,g as A,h as k,i as w,j as T,k as C,l as B,m as F,p as L,q as V,s as O}from"./vendor.a9fb6f1a.js";const q=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const n of d)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(d){const n={};return d.integrity&&(n.integrity=d.integrity),d.referrerpolicy&&(n.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?n.credentials="include":d.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(d){if(d.ep)return;d.ep=!0;const n=s(d);fetch(d.href,n)}};q();var u=(t,o)=>{const s=t.__vccOpts||t;for(const[i,d]of o)s[i]=d;return s};const I={},R={class:"main-header flex items-center justify-between"},N=e("div",{class:"logo uppercase"},[e("h2",null,"todos")],-1),U={class:"flex gap-1"},H=p("Home"),j=p("todo");function M(t,o){const s=m("router-link");return a(),c("header",R,[N,e("nav",U,[h(s,{class:"link",to:"/"},{default:$(()=>[H]),_:1}),h(s,{class:"link",to:"/todo"},{default:$(()=>[j]),_:1})])])}var P=u(I,[["render",M]]);const J={name:"app",created(){this.$store.dispatch({type:"loadTodos"})},components:{appHeader:P}},z={class:"app-container container"};function G(t,o,s,i,d,n){const r=m("app-header"),l=m("router-view");return a(),c("section",z,[h(r),h(l)])}var K=u(J,[["render",G]]);const W={name:"todo-filter",data(){return{filterBy:{vendor:""}}},methods:{setFilter(){this.$emit("setFilter",this.filterBy)}}},Q={class:"todo-filter"};function X(t,o,s,i,d,n){return a(),c("section",Q,[v(e("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>d.filterBy.vendor=r),onInput:o[1]||(o[1]=(...r)=>n.setFilter&&n.setFilter(...r)),type:"text",class:"form-input",placeholder:"Search vendor..."},null,544),[[g,d.filterBy.vendor]])])}var Y=u(W,[["render",X]]);const Z={},oo={class:"custom-todod flex flex-col gap-1 items-center"};function to(t,o){return a(),c("article",oo,[e("header",null,[b(t.$slots,"header",{},void 0,!0)]),e("main",null,[b(t.$slots,"default",{},void 0,!0)]),e("footer",null,[b(t.$slots,"footer",{},void 0,!0)])])}var eo=u(Z,[["render",to],["__scopeId","data-v-17a41438"]]);const so={name:"todo-preview",props:{todo:Object},components:{CustomCard:eo},methods:{goToDetail(){this.$router.push(`/todo/${this.todo.id}`)},goToEdit(){this.$router.push(`/todo/edit/${this.todo.id}`)},removeTodo(t){this.$emit("removeTodo",t)},doneTodo(t){this.$emit("doneTodo",t)}},computed:{getCreatedAtDateFormat({todo:t}){return new Date(t.createdAt).toLocaleString()},getDoneAtDateFormat({todo:t}){return t.doneAt?new Date(t.doneAt).toLocaleString():""}}},no={class:"todo-preview"},ro=e("span",{class:"fw-bold"},"Title:",-1),io=e("span",{class:"fw-bold"},"Description:",-1),ao=e("span",{class:"fw-bold"},"Create At:",-1),lo=e("span",{class:"fw-bold"},"Done At:",-1),co=e("span",{class:"fw-bold"},"Status:",-1),uo={class:"btn-group"},po=["disabled"];function _o(t,o,s,i,d,n){const r=m("custom-card");return a(),c("li",no,[h(r,null,{header:$(()=>[e("p",null,[ro,p(" "+_(s.todo.title),1)]),e("p",null,[io,p(" "+_(s.todo.description),1)]),e("p",null,[ao,p(" "+_(n.getCreatedAtDateFormat),1)]),e("p",null,[lo,p(" "+_(n.getDoneAtDateFormat),1)]),e("p",null,[co,p(" "+_(s.todo.status),1)])]),footer:$(()=>[e("div",uo,[e("button",{onClick:o[0]||(o[0]=(...l)=>n.goToEdit&&n.goToEdit(...l)),class:"btn btn-primary"},"edit"),e("button",{onClick:o[1]||(o[1]=l=>n.removeTodo(s.todo.id)),class:"btn btn-danger btn"},"delete"),e("button",{onClick:o[2]||(o[2]=l=>n.doneTodo(s.todo)),class:S([s.todo.doneAt?"btn-secondary":"btn-info","btn"]),disabled:s.todo.doneAt},_(s.todo.doneAt?"Great job!":"Done?"),11,po)])]),_:1})])}var mo=u(so,[["render",_o]]);const fo={props:{todos:{type:Array,required:!0}},components:{todoPreview:mo},methods:{removeTodo(t){this.$emit("removeTodo",t)},doneTodo(t){this.$emit("doneTodo",t)}}},ho={class:"todo-list clean-list grid gap-1"};function vo(t,o,s,i,d,n){const r=m("todo-preview");return a(),c("ul",ho,[(a(!0),c(E,null,A(s.todos,l=>(a(),k(r,{onDoneTodo:n.doneTodo,onRemoveTodo:n.removeTodo,todo:l,key:l.id},null,8,["onDoneTodo","onRemoveTodo","todo"]))),128))])}var To=u(fo,[["render",vo]]);const yo={name:"todo-app",components:{todoList:To,todoFilter:Y},data(){return{filterBy:null}},methods:{setFilter(t){this.filterBy=t},goToEdit(){this.$router.push("/todo/edit")},removeTodo(t){this.$store.dispatch({type:"removeTodo",id:t})},doneTodo(t){this.$store.dispatch({type:"doneTodo",todo:t})}},computed:{getTodos(){return this.$store.getters.todos},todosToShow(){if(!this.filterBy)return this.getTodos;const t=new RegExp(this.filterBy.vendor,"i");return this.getTodos.filter(o=>t.test(o.vendor))}}},go={class:"todo-app container flex flex-col gap-1"};function $o(t,o,s,i,d,n){const r=m("todo-filter"),l=m("todo-list");return a(),c("section",go,[e("button",{onClick:o[0]||(o[0]=(...D)=>n.goToEdit&&n.goToEdit(...D)),class:"btn btn-secondary"},"Add a new todo"),h(r,{onSetFilter:n.setFilter},null,8,["onSetFilter"]),n.todosToShow?(a(),k(l,{key:0,onDoneTodo:n.doneTodo,onRemoveTodo:n.removeTodo,todos:n.todosToShow},null,8,["onDoneTodo","onRemoveTodo","todos"])):w("",!0)])}var bo=u(yo,[["render",$o]]);const y="https://todoapp-fastapi-backend.herokuapp.com/",f={query:wo,getById:xo,remove:Eo,save:Ao,getEmptyTodo:Do,update:ko};async function wo(){const{data:t}=await T.get(`${y}todo/`);return t}async function xo(t){const{data:o}=await T.get(`${y}todo/${t}/`);return o}async function Eo(t){const{data:o}=await T.delete(`${y}todo/${t}/`);return o}async function Ao(t){const{data:o}=await T.post(`${y}todo/`,t);return o}async function ko(t){const{data:o}=await T.put(`${y}todo/${t.id}`,t);return o}function Do(){return{title:null,description:null,doneAt:null,status:null,createdAt:Date.now()}}const So={name:"todo-edit",data(){return{todoToEdit:null}},async created(){const{id:t}=this.$route.params,{getById:o,getEmptyTodo:s}=f;this.todoToEdit=t?await o(t):s()},methods:{goBack(){this.$router.push("/todo")},async saveTodo(){console.log(this.todoToEdit),await this.$store.dispatch({type:"saveTodo",todo:this.todoToEdit}),await this.$router.push("/todo")}}},Co={key:0,class:"todo-edit py-2"},Bo={class:"form-control"},Fo=e("label",{for:"title"},"Title",-1),Lo={class:"form-control"},Vo=e("label",{for:"desc"},"Description",-1),Oo=e("div",null,"Status",-1),qo={class:"form-control flex"},Io=["for"],Ro=["id","value"],No={key:0,class:"form-control"},Uo=e("label",{for:"done"},"Description",-1),Ho={class:"form-control"},jo=e("label",null,"Created At",-1),Mo=["value"],Po={class:"btn-group"},Jo=e("button",{class:"btn btn-info",type:"submit"},"save",-1);function zo(t,o,s,i,d,n){return d.todoToEdit?(a(),c("section",Co,[e("form",{onSubmit:o[5]||(o[5]=C((...r)=>n.saveTodo&&n.saveTodo(...r),["prevent"])),class:"form"},[e("div",Bo,[Fo,v(e("input",{required:"","onUpdate:modelValue":o[0]||(o[0]=r=>d.todoToEdit.title=r),id:"title",type:"text",class:"form-input",placeholder:"Enter your todo Title here..."},null,512),[[g,d.todoToEdit.title]])]),e("div",Lo,[Vo,v(e("input",{required:"","onUpdate:modelValue":o[1]||(o[1]=r=>d.todoToEdit.description=r),id:"desc",type:"text",class:"form-input",placeholder:"Enter your todo description here..."},null,512),[[g,d.todoToEdit.description]])]),Oo,e("div",qo,[(a(),c(E,null,A(["open","in progress","done"],r=>e("label",{for:r,class:"form-input"},[p(_(r)+" ",1),v(e("input",{id:r,type:"radio",name:"status","onUpdate:modelValue":o[2]||(o[2]=l=>d.todoToEdit.status=l),value:r},null,8,Ro),[[B,d.todoToEdit.status]])],8,Io)),64))]),d.todoToEdit.doneAt?(a(),c("div",No,[Uo,v(e("input",{disabled:"",type:"text",id:"done",class:"form-input","onUpdate:modelValue":o[3]||(o[3]=r=>d.todoToEdit.doneAt=r),placeholder:"Enter your todo description here..."},null,512),[[g,d.todoToEdit.doneAt]])])):w("",!0),e("div",Ho,[jo,e("input",{disabled:"",type:"text",class:"form-input",value:new Date(d.todoToEdit.createdAt).toLocaleString()},null,8,Mo)]),e("div",Po,[Jo,e("button",{onClick:o[4]||(o[4]=(...r)=>n.goBack&&n.goBack(...r)),class:"btn btn-danger-text"},"go back")])],32)])):w("",!0)}var Go=u(So,[["render",zo]]);const Ko={name:"homepage"};function Wo(t,o,s,i,d,n){return a(),c("section",null," Homepage ")}var Qo=u(Ko,[["render",Wo]]);const Xo=F({history:L(),linkActiveClass:"active",routes:[{path:"/",name:"home",component:Qo},{path:"/todo",name:"todo-app",component:bo},{path:"/todo/edit/:id?",name:"todo-edit",component:Go}]});var Yo={state:{todos:null},getters:{todos(t){return t.todos}},mutations:{setTodos(t,{todos:o}){t.todos=o},removeTodo(t,{id:o}){const s=t.todos.findIndex(i=>i.id===o);t.todos.splice(s,1)},saveTodo(t,{todo:o}){const s=t.todos.findIndex(i=>i.id===o.id);s!==-1?t.todos.splice(s,1,o):t.todos.unshift(o)}},actions:{async loadTodos({commit:t}){try{const o=await f.query();t({type:"setTodos",todos:o})}catch{console.log("can't load todos")}},async removeTodo({commit:t},{id:o}){try{await f.remove(o),t({type:"removeTodo",id:o})}catch(s){console.log(s)}},async saveTodo({commit:t},{todo:o}){try{o.id?await f.update(o):await f.save(o)}catch(s){console.log(s)}finally{t({type:"saveTodo",todo:o})}},async doneTodo({commit:t},{todo:o}){const s=JSON.parse(JSON.stringify(o));s.doneAt=Date.now(),s.status="done";try{await f.update(s)}catch(i){console.log(i)}finally{t({type:"saveTodo",todo:s})}}}};const Zo=V({strict:!0,state:{},getters:{},mutations:{},actions:{},modules:{todoStore:Yo}});const x=O(K);x.use(Xo);x.use(Zo);x.mount("#app");
