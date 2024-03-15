"use strict";var De=Object.defineProperty,Me=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var be=(n,t,o)=>t in n?De(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,l=(n,t)=>{for(var o in t||(t={}))$e.call(t,o)&&be(n,o,t[o]);if(_e)for(var o of _e(t))ze.call(t,o)&&be(n,o,t[o]);return n},f=(n,t)=>Me(n,Be(t));Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("$:/plugins/oeyoews/neotw-vue3/vue.global.prod.js"),w="Notivue__",Ve=6e3,m={SUCCESS:"success",ERROR:"error",WARNING:"warning",INFO:"info",PROMISE:"promise",PROMISE_RESOLVE:"promise-resolve",PROMISE_REJECT:"promise-reject"},X={title:"",message:"",duration:Ve,ariaLive:"polite",ariaRole:"status"},de=f(l({},X),{ariaLive:"assertive",ariaRole:"alert"}),Ue=f(l({},X),{duration:1/0}),je=f(l({},de),{ariaLive:"polite"}),Ke=l({},X),Ze={[m.SUCCESS]:X,[m.ERROR]:de,[m.WARNING]:je,[m.INFO]:Ke,[m.PROMISE]:Ue,[m.PROMISE_RESOLVE]:X,[m.PROMISE_REJECT]:de},fe={pauseOnHover:!0,pauseOnTouch:!0,pauseOnTabChange:!0,enqueue:!1,position:"top-center",teleportTo:"body",notifications:Ze,limit:1/0,animations:{enter:w+"enter",leave:w+"leave",clearAll:w+"clearAll"}},D=We();function qe(n){Object.assign(D,n)}function we(n){let t=0;function o(s,i,r=`${t++}`){return typeof s=="string"&&(s={message:s}),n.push(f(l({},s),{id:r,type:i})),{id:r,clear:()=>n.clear(r),destroy:()=>n.clear(r,{isDestroy:!0})}}return{success:s=>o(s,m.SUCCESS),error:s=>o(s,m.ERROR),warning:s=>o(s,m.WARNING),info:s=>o(s,m.INFO),promise:s=>{const{id:i,clear:r,destroy:u}=o(s,m.PROMISE);return{resolve:d=>o(d,m.PROMISE_RESOLVE,i),reject:d=>o(d,m.PROMISE_REJECT,i),success:d=>o(d,m.PROMISE_RESOLVE,i),error:d=>o(d,m.PROMISE_REJECT,i),clear:r,destroy:u}},load(s){return this.promise(s)},clearAll:()=>n.clearAll(),destroyAll:()=>n.destroyAll()}}function We(){const n=new Proxy({},{get:()=>()=>{}});return we(n)}function Xe(n){e.watch(n.config.isTopAlign,()=>{n.animations.updatePositions({isImmediate:!0})},{flush:"post"}),e.watch(()=>n.items.length,()=>{n.animations.updatePositions()},{flush:"post"}),e.watch(()=>n.items.length===0&&n.queue.length===0,t=>{t&&(n.timeouts.reset(),n.elements.setRootAttrs({}))},{flush:"post"}),e.watch(()=>n.config.animations.value.enter,(t,o)=>{t!==o&&n.animations.resetTransitionData()})}const me=typeof window=="undefined";function L(n){return n.pointerType==="mouse"}function pe(n,t){const o=l({},n);for(const s in t)t.hasOwnProperty(s)&&(Ge(t[s])?o[s]=pe(n[s],t[s]):o[s]=t[s]);return o}function He(n,t){return t.props||(t.props={}),l(l(l(l({},n[t.type]),n.global),t),t.type==="promise"?{duration:1/0}:{})}function Ge(n){if(Object.prototype.toString.call(n)!=="[object Object]")return!1;const t=Object.getPrototypeOf(n);return t===null||Object.getPrototypeOf(t)===null}function Je(n,t){return e.toRefs(e.reactive(pe(n,t)))}function Qe(n){return Object.entries(n).reduce((t,[o,{value:s}])=>f(l({},t),{[o]:e.toRaw(s)}),{})}const Ye=["timeout","resumedAt","remaining","animationAttrs","positionStyles"];function te(n){return Object.fromEntries(Object.entries(n).filter(([t])=>!Ye.includes(t)))}function Te(n){return`${n.title?`${n.title}: `:""}${n.message}`}exports.updateConfig=()=>{};function et(n){const t=Je(fe,n),o=e.computed(()=>t.position.value.startsWith("top"));function s(i){typeof i=="function"&&(i=i(Qe(t)));for(const r of Object.keys(i))typeof t[r].value=="object"?t[r].value=pe(t[r].value,i[r]):t[r].value=i[r]}return exports.updateConfig=s,f(l({},t),{isTopAlign:o,update:s})}function tt(){return{entries:e.shallowRef([]),get length(){return this.entries.value.length},add(n){this.entries.value.push(n),this.triggerRef()},get(n){return this.entries.value.find(t=>t.id===n)},update(n,t){var o;Object.assign((o=this.get(n))!=null?o:{},t)},triggerRef(){e.triggerRef(this.entries)},remove(n){this.entries.value=this.entries.value.filter(t=>t.id!==n)},clear(){this.entries.value=[]}}}function nt(n,t){return{entries:e.shallowRef([]),get length(){return this.entries.value.length},add(o){this.entries.value.unshift(o),this.triggerRef()},addFromQueue(){const o=f(l({},t.entries.value[0]),{timeout:t.entries.value[0].timeout(),createdAt:Date.now()});t.remove(o.id),this.add(o)},get(o){return this.entries.value.find(s=>s.id===o)},update(o,s){var i;Object.assign((i=this.get(o))!=null?i:{},s)},triggerRef(){e.triggerRef(this.entries)},updateAll(o){this.entries.value=this.entries.value.map(o)},remove(o){this.entries.value=this.entries.value.filter(i=>i.id!==o),t.length>0&&this.length<n.limit.value&&e.nextTick(()=>this.addFromQueue())},clear(){this.entries.value=[],t.clear()}}}function ot(){return{root:e.ref(null),rootAttrs:e.shallowRef({}),setRootAttrs(n){this.rootAttrs.value=n},items:e.ref([]),getSortedItems(){return this.items.value.sort((n,t)=>+t.dataset.notivueId-+n.dataset.notivueId)},containers:e.ref([])}}function st(n,t,o){return{isReducedMotion:e.ref(!1),transitionData:null,setReducedMotion(s){this.isReducedMotion.value=s},getTransitionData(){return this.transitionData||this.setTransitionData(),this.transitionData},resetTransitionData(){this.transitionData=null},setTransitionData(){var r;const s=n.animations.value.enter,i=s?(r=o.root.value)==null?void 0:r.querySelector(`.${s}`):null;if(!i)this.transitionData={duration:"0s",easing:"ease"};else{const u=window.getComputedStyle(i);this.transitionData={duration:u.animationDuration,easing:u.animationTimingFunction}}},playLeave(s,{isDestroy:i=!1,isUserTriggered:r=!1}={}){const u=t.get(s);window.clearTimeout(u==null?void 0:u.timeout);function d(){var y;t.remove(s),(y=u==null?void 0:u[r?"onManualClear":"onAutoClear"])==null||y.call(u,te(u))}const{leave:v=""}=n.animations.value;if(!u||!v||i||this.isReducedMotion.value)return d();t.update(s,{positionStyles:f(l({},u.positionStyles),{zIndex:-1}),animationAttrs:{class:v,onAnimationend:d}}),this.updatePositions()},playClearAll(){const{clearAll:s=""}=n.animations.value;if(t.entries.value.forEach(i=>window.clearTimeout(i.timeout)),!s||this.isReducedMotion.value)return t.clear();o.setRootAttrs({class:s,onAnimationend:()=>t.clear()})},updatePositions({isImmediate:s=!1}={}){const i=this.isReducedMotion.value||s,r=n.animations.value.leave;let u=0;for(const d of o.getSortedItems()){const v=d.dataset.notivueId,y=t.get(v);if(!d||!y||y.animationAttrs.class===r)continue;const{duration:R,easing:g}=this.getTransitionData();t.update(v,{positionStyles:l({willChange:"transform",transform:`translate3d(0, ${u}px, 0)`},i?{transition:"none"}:{transitionDuration:R,transitionTimingFunction:g})}),u+=(n.isTopAlign.value?1:-1)*d.clientHeight}t.triggerRef()}}}function it(n,t){return{isStreamPaused:e.ref(!1),isStreamFocused:e.ref(!1),debounceTimeout:void 0,setStreamPause(o=!0){this.isStreamPaused.value=o},setStreamFocus(o=!0){this.isStreamFocused.value=o},clearDebounceTimeout(){window.clearTimeout(this.debounceTimeout)},reset(){this.clearDebounceTimeout(),this.setStreamPause(!1),this.setStreamFocus(!1)},create(o,s){if(Number.isFinite(s)&&s>0)return window.setTimeout(()=>t.playLeave(o),s)},pause(){n.length===0||this.isStreamPaused.value||(n.updateAll(o=>{if(window.clearTimeout(o.timeout),!o.timeout)return o;let s=0;return o.remaining==null?s=o.duration-(Date.now()-o.createdAt):s=o.remaining-(Date.now()-o.resumedAt),f(l({},o),{remaining:s})}),this.setStreamPause())},resume(){n.length===0||!this.isStreamPaused.value||(n.updateAll(o=>{var s;return window.clearTimeout(o.timeout),o.timeout?f(l({},o),{timeout:this.create(o.id,(s=o.remaining)!=null?s:o.duration),resumedAt:Date.now()}):o}),this.setStreamPause(!1))},resumeWithDebounce(o){this.debounceTimeout=window.setTimeout(()=>{this.resume()},o)}}}function at({config:n,items:t,queue:o,animations:s,timeouts:i}){return{destroyAll(){t.clear()},clearAll(){s.playClearAll()},clear(r,{isDestroy:u=!1}={}){var v;((v=t.entries.value[t.entries.value.length-1])==null?void 0:v.id)===r&&i.resume(),s.playLeave(r,{isUserTriggered:!0,isDestroy:u})},push(r){const u=Date.now(),d=He(n.notifications.value,r),v=()=>i.create(d.id,d.duration);if([m.PROMISE_RESOLVE,m.PROMISE_REJECT].includes(r.type))o.get(d.id)?(o.update(d.id,f(l({},d),{createdAt:u,timeout:v})),o.triggerRef()):(t.update(d.id,f(l({},d),{createdAt:u,timeout:v()})),t.triggerRef());else{const R=n.enqueue.value,g=t.length>=n.limit.value;!R&&g&&t.entries.value.slice(n.limit.value-1).forEach(({id:_})=>i.create(_,1));const k=R&&!r.skipQueue&&g,E=f(l({},d),{createdAt:u,animationAttrs:{class:s.isReducedMotion.value?"":n.animations.value.enter,onAnimationend(){t.update(d.id,{animationAttrs:{class:"",onAnimationend:void 0}})}},timeout:k?v:v(),clear:()=>this.clear(d.id),destroy:()=>this.clear(d.id,{isDestroy:!0})});k?o.add(E):t.add(E)}}}}const ke=Symbol("");function rt(n={}){const t=et(n),o=tt(),s=nt(t,o),i=ot(),r=st(t,s,i),u=it(s,r),d={config:t,queue:o,items:s,elements:i,animations:r,timeouts:u},v=at(d),y=Object.freeze(we(v));return qe(y),Xe(d),{install(g){g.config.globalProperties.$push=y,g.provide(ke,d)}}}function T(){return e.inject(ke)}function ve(){return me?f(l({},e.toRefs(e.reactive(fe))),{isTopAlign:e.computed(()=>!0),update:()=>{}}):T().config}function ct(){return D}function lt(){if(me)return{entries:e.computed(()=>[]),queue:e.computed(()=>[])};const n=T();return{entries:e.computed(()=>n.items.entries.value.map(te)),queue:e.computed(()=>n.queue.entries.value.map(te))}}const he={listAriaLabel:"Notifications"},ge=e.defineComponent({setup(n,{slots:t,attrs:o}){const s=e.ref(!1);return e.onMounted(()=>s.value=!0),()=>{var i;return s.value?(i=t.default)==null?void 0:i.call(t):e.createElementBlock("span",o,"")}}}),ut=["role","aria-live"],dt=e.defineComponent({__name:"AriaLive",props:{item:{}},setup(n){const t=n,o={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:"0"};return(s,i)=>(e.openBlock(),e.createElementBlock("div",{style:o,role:t.item.ariaRole,"aria-live":t.item.ariaLive,key:`${s.item.id}_${s.item.type}`},e.toDisplayString(e.unref(Te)(t.item)),9,ut))}});function ft(){const{timeouts:n,config:t}=T();function o(i){L(i)&&n.pause()}function s(i){L(i)&&n.resume()}return e.computed(()=>t.pauseOnHover.value&&!n.isStreamFocused.value?{onPointerenter:o,onPointerleave:s}:{})}function mt(){const{timeouts:n,config:t}=T();function o(s){L(s)||(n.clearDebounceTimeout(),n.pause(),n.resumeWithDebounce(2e3))}return e.onBeforeUnmount(()=>{n.clearDebounceTimeout()}),e.computed(()=>t.pauseOnTouch.value&&!n.isStreamFocused.value?{onPointerdown:o}:{})}const ae={boxSizing:"border-box"},re={list:f(l({},ae),{display:"flex",justifyContent:"center",listStyle:"none",margin:"0 auto",maxWidth:"var(--nv-root-width, 100%)",padding:"0",pointerEvents:"none",position:"fixed",zIndex:"var(--nv-z, 500)"}),listItem:f(l({},ae),{display:"flex",margin:"0",position:"absolute",transitionProperty:"transform",width:"100%"}),itemContainer:f(l({},ae),{maxWidth:"100%",padding:"0 0 var(--nv-gap, 0.75rem) 0",pointerEvents:"auto"})};function pt(){const{isTopAlign:n,position:t}=ve(),o=e.computed(()=>{const i=n.value,r=[`var(--nv-root-top, ${i?"1.25rem":"0px"})`,"var(--nv-root-right, 1.25rem)",`var(--nv-root-bottom, ${i?"0px":"1.25rem"})`,"var(--nv-root-left, 1.25rem)"],u=r.map(d=>`calc(-1 * ${d})`);return i?u.splice(2,1,"0px"):u.splice(0,1,"0px"),{inset:r.join(" "),clipPath:`inset(${u.join(" ")})`}}),s=e.computed(()=>({[n.value?"top":"bottom"]:"0",justifyContent:`var(--nv-root-x-align, ${t.value.endsWith("left")?"flex-start":t.value.endsWith("right")?"flex-end":"center"})`}));return e.computed(()=>({list:l(l({},re.list),o.value),listItem:l(l({},re.listItem),s.value),itemContainer:re.itemContainer}))}function vt(n){function t(){window.matchMedia("(max-width: 1100px)").matches&&n()}e.onMounted(()=>{window.addEventListener("resize",t)}),e.onBeforeUnmount(()=>{window.removeEventListener("resize",t)})}function ht(n,t){let o;const s=new Set;e.onMounted(()=>{o=new ResizeObserver((i,r)=>{i.forEach(u=>{s.has(u.target)?(t(),s.delete(u.target),r.unobserve(u.target)):s.add(u.target)})})}),e.watch(n,i=>{i.length>0&&i.forEach(r=>o==null?void 0:o.observe(r))},{flush:"post"}),e.onBeforeUnmount(()=>{o==null||o.disconnect()})}function gt(){const{elements:n,animations:t}=T();vt(()=>t.updatePositions({isImmediate:!0})),ht(n.items.value,()=>t.updatePositions())}function Et(){const{items:n,config:t,timeouts:o}=T();function s(){o.isStreamFocused.value||(document.visibilityState==="visible"?t.pauseOnTabChange.value&&o.resume():t.pauseOnTabChange.value?o.pause():n.clear())}e.onMounted(()=>{document.addEventListener("visibilitychange",s)}),e.onBeforeUnmount(()=>{document.removeEventListener("visibilitychange",s)})}function yt(){const{animations:n}=T(),t=window.matchMedia("(prefers-reduced-motion: reduce)"),o=()=>n.setReducedMotion(t.matches);e.onMounted(()=>{var s;o(),(s=t.addEventListener)==null||s.call(t,"change",o)}),e.onBeforeUnmount(()=>{var s;(s=t.removeEventListener)==null||s.call(t,"change",o)})}const _t=["data-notivue-align","aria-label"],bt=["data-notivue-id","aria-setsize","aria-posinset"],Ct=["aria-label","tabindex","data-notivue-container"],Pe=e.defineComponent({__name:"NotivueImpl",props:e.mergeDefaults({class:{},containersTabIndex:{},listAriaLabel:{},styles:{}},he),setup(n){const t=n,{config:o,items:s,elements:i}=T(),r=pt(),u=ft(),d=mt();return yt(),Et(),gt(),(v,y)=>{var R;return e.openBlock(),e.createBlock(e.Teleport,{to:e.unref(o).teleportTo.value===!1?void 0:e.unref(o).teleportTo.value,disabled:e.unref(o).teleportTo.value===!1},[e.unref(s).length>0?(e.openBlock(),e.createElementBlock("ol",e.mergeProps({key:0},l(l(l({},e.unref(u)),e.unref(d)),e.unref(i).rootAttrs.value),{"data-notivue-align":e.unref(o).isTopAlign.value?"top":"bottom","aria-label":t.listAriaLabel,ref:e.unref(i).root,class:t.class,style:l(l({},e.unref(r).list),(R=t.styles)==null?void 0:R.list)}),[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s).entries.value,(g,p)=>{var k,E,P,_;return e.openBlock(),e.createElementBlock("li",{tabindex:"-1",key:g.id,"data-notivue-id":g.id,"aria-setsize":e.unref(s).length,"aria-posinset":p+1,ref_for:!0,ref:e.unref(i).items,style:e.normalizeStyle(l(l(l({},e.unref(r).listItem),g.positionStyles),(k=t.styles)==null?void 0:k.listItem))},[g.ariaLiveOnly?(e.openBlock(),e.createBlock(dt,{key:0,item:g},null,8,["item"])):(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:1},g.animationAttrs,{"aria-label":e.unref(Te)(g),tabindex:(P=(E=v.containersTabIndex)==null?void 0:E[g.id])!=null?P:-1,"data-notivue-container":g.id,ref_for:!0,ref:e.unref(i).containers,style:l(l({},e.unref(r).itemContainer),(_=t.styles)==null?void 0:_.itemContainer)}),[e.renderSlot(v.$slots,"default",e.normalizeProps(e.guardReactiveProps(e.unref(te)(g))))],16,Ct))],12,bt)}),128))],16,_t)):e.createCommentVNode("",!0)],8,["to","disabled"])}}}),Rt=e.defineComponent({__name:"Notivue",props:e.mergeDefaults({class:{},containersTabIndex:{},listAriaLabel:{},styles:{}},he),setup(n){const t=n;return(o,s)=>(e.openBlock(),e.createBlock(e.unref(ge),null,{default:e.withCtx(()=>[e.createVNode(Pe,e.normalizeProps(e.guardReactiveProps(t)),{default:e.withCtx(i=>[e.renderSlot(o.$slots,"default",e.normalizeProps(e.guardReactiveProps(i)))]),_:3},16)]),_:3}))}}),St=e.defineComponent({__name:"Notivue",props:e.mergeDefaults({class:{},containersTabIndex:{},listAriaLabel:{},styles:{}},he),setup(n){const t=n;function o(u){const d=D[u.detail.type](u.detail);window.dispatchEvent(new CustomEvent(u.detail.resultEventName,{detail:d}))}const r=[["notivue:push",o],["notivue:clear-all",()=>D.clearAll()],["notivue:destroy-all",()=>D.destroyAll()]];return e.onMounted(()=>{r.forEach(([u,d])=>window.addEventListener(u,d))}),e.onBeforeUnmount(()=>{r.forEach(([u,d])=>window.removeEventListener(u,d))}),(u,d)=>(e.openBlock(),e.createBlock(e.unref(ge),null,{default:e.withCtx(()=>[e.createVNode(Pe,e.normalizeProps(e.guardReactiveProps(t)),{default:e.withCtx(v=>[e.renderSlot(u.$slots,"default",e.normalizeProps(e.guardReactiveProps(v)))]),_:3},16)]),_:3}))}}),wt={touchOnly:!1,exclude:"a, button",disabled:!1,threshold:.5},Tt=300,ce={Mouse:200,Touch:1e3,TouchExternal:1400},kt=e.defineComponent({__name:"NotivueSwipe",props:e.mergeDefaults({item:{},touchOnly:{type:Boolean},exclude:{},disabled:{type:Boolean},threshold:{},destroy:{type:Boolean}},wt),setup(n){const{items:t,timeouts:o,elements:s,animations:i}=T(),r=n,u=e.toRef(r,"touchOnly"),d=e.toRef(r,"exclude"),v=e.toRef(r,"disabled"),y=e.toRef(r,"threshold"),R=e.computed(()=>r.item.type===m.PROMISE),g=e.computed(()=>!o.isStreamFocused.value&&!v.value&&!R.value&&r.item.duration<1/0),p=e.ref(null),k={isPressed:!1,isClearing:!1,startX:0,currentX:0},E=e.shallowReactive(k),P=e.shallowRef({});function _(c){Object.assign(E,c)}function M(c){P.value=l(l({},P.value),c)}function S(){P.value={}}e.watch(()=>t.length,(c,a)=>{c!==a&&E.isPressed&&(U(),_(k))},{flush:"post"});function G(){p.value&&(M({touchAction:"none",userSelect:"none",cursor:"grab"}),p.value.querySelectorAll("*").forEach(c=>{c instanceof HTMLElement&&(c.style.userSelect="none",c.style.touchAction="none")}))}function B(){p.value&&(S(),p.value.querySelectorAll("*").forEach(c=>{c instanceof HTMLElement&&(c.style.userSelect="auto",c.style.touchAction="auto")}))}function O(c){return!(u.value&&c.pointerType!=="touch")}function U(){M({transition:i.isReducedMotion.value?"none":`${Tt}ms cubic-bezier(0.76, 0, 0.24, 1)`,transform:"translate3d(0px, 0px, 0px)",opacity:"1"})}function j(c){if(!s.root.value||!p.value)return!1;const{clientWidth:a,offsetLeft:h}=p.value,A=h+s.root.value.offsetLeft,C=A+a;return c.clientX>A&&c.clientX<C}function K(c){return L(c)?ce.Mouse:ce.Touch}function $(){o.clearDebounceTimeout(),o.pause()}function z(c){o.clearDebounceTimeout(),o.resumeWithDebounce(c)}function I(c){O(c)||B()}function ne(c){if(O(c)&&(c.stopPropagation(),!!p.value&&c.button===0&&!(E.isPressed||E.isClearing))){if(d.value&&Array.from(p.value.querySelectorAll(d.value)).includes(c.target)){L(c)||($(),z(ce.TouchExternal));return}L(c)||$(),_({startX:c.clientX,isPressed:!0})}}function J(c){if(!O(c)||(c.stopPropagation(),!E.isPressed||E.isClearing))return;const{clientWidth:a}=p.value;M({transition:"none",transform:`translate3d(${E.currentX}px, 0px, 0px)`,opacity:`${1-Math.abs(E.currentX)/a*(1/y.value)}`}),_({currentX:c.clientX-E.startX}),Math.abs(E.currentX)>a*y.value&&(E.isClearing=!0,oe(c))}function oe(c){if(r.item.destroy(),L(c)&&j(c)){const a=s.getSortedItems();a[a.length-1].contains(p.value)||$()}else z(K(c));_({isClearing:!1})}function W(c){O(c)&&(c.stopPropagation(),!(!E.isPressed||E.isClearing)&&(L(c)&&j(c)?$():z(K(c)),U(),_({startX:0,currentX:0,isPressed:!1})))}function V(c){O(c)&&(c.stopPropagation(),!(!E.isPressed||E.isClearing)&&(U(),_({startX:0,currentX:0,isPressed:!1}),z(K(c))))}const Q=[["pointerenter",I],["pointerdown",ne],["pointermove",J],["pointerup",W],["pointerleave",V]];function se(){p.value&&Q.forEach(([c,a])=>{p.value.addEventListener(c,a)})}function Y(){p.value&&Q.forEach(([c,a])=>{p.value.removeEventListener(c,a)})}return e.watch(g,(c,a,h)=>{e.nextTick(()=>{c&&(G(),e.nextTick(se))}),h(()=>{Y(),B()})},{immediate:!0,flush:"post"}),e.onBeforeUnmount(Y),(c,a)=>v.value?e.renderSlot(c.$slots,"default",{key:1}):(e.openBlock(),e.createElementBlock("div",{key:0,ref_key:"itemRef",ref:p,style:e.normalizeStyle(P.value)},[e.renderSlot(c.$slots,"default")],4))}});let Ce=0;function Z(n){Ce++;let t={};const o=`notivue:id:${Ce}`;window.addEventListener(o,s,{once:!0});function s(i){t=i.detail}return window.dispatchEvent(new CustomEvent("notivue:push",{detail:f(l({},n),{type:n.type,resultEventName:o})})),t}const Pt={success:n=>Z(f(l({},n),{type:"success"})),info:n=>Z(f(l({},n),{type:"info"})),error:n=>Z(f(l({},n),{type:"error"})),warning:n=>Z(f(l({},n),{type:"warning"})),promise:n=>Z(f(l({},n),{type:"promise"})),load:n=>Z(f(l({},n),{type:"promise"})),clearAll(){window.dispatchEvent(new CustomEvent("notivue:clear-all"))},destroyAll(){window.dispatchEvent(new CustomEvent("notivue:destroy-all"))}},Ae=Symbol(""),At='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',Ie={comboKey:"n",handleClicks:!0,leaveMessage:"You're leaving the notifications stream. Press Control + N to navigate it again.",emptyMessage:"No notifications to navigate",renderAnnouncement:!0,maxAnnouncements:2};function It(){const n=e.ref(!1),t=()=>n.value=!0,o=()=>n.value=!1,s=[["keydown",t],["mousedown",o],["touchstart",o]];return e.onMounted(()=>{s.forEach(([i,r])=>document.addEventListener(i,r))}),e.onBeforeUnmount(()=>{s.forEach(([i,r])=>document.removeEventListener(i,r))}),{isKeyboardFocus:n}}function Nt(){const{root:n}=T().elements,t=e.ref(null);function o(i){var u;const r=i.target instanceof HTMLElement;r&&((u=n.value)!=null&&u.contains(i.target))||r&&(t.value=i.target)}function s(){t.value?t.value.focus():(document.activeElement instanceof HTMLElement&&document.activeElement.blur(),document.body.focus())}return e.onMounted(()=>{document.addEventListener("focus",o,!0)}),e.onBeforeUnmount(()=>{document.removeEventListener("focus",o,!0)}),{focusLastElement:s}}const Ft=e.defineComponent({__name:"NotivueKeyboardImpl",props:e.mergeDefaults({comboKey:{},handleClicks:{type:Boolean},leaveMessage:{},emptyMessage:{},renderAnnouncement:{type:Boolean},maxAnnouncements:{}},Ie),setup(n){const t=n,{comboKey:o,handleClicks:s,leaveMessage:i,emptyMessage:r,renderAnnouncement:u,maxAnnouncements:d}=e.toRefs(t),v={ariaRole:"alert",ariaLive:"assertive",skipQueue:!0,ariaLiveOnly:!u.value,props:{isNotivueKeyboard:!0}},y=e.computed(()=>l({message:i.value},v)),R=e.computed(()=>l({message:r.value},v)),{elements:g,timeouts:p,queue:k}=T(),E=ve(),{focusLastElement:P}=Nt(),{isKeyboardFocus:_}=It(),M=e.ref({qualified:[],unqualified:[]}),S=e.ref([]),G=e.ref([]),B=e.ref(-1);function O(a){B.value=a}let U=0,j=!0,K=[];const $=e.computed(()=>{const a={};return M.value.qualified.forEach(h=>a[h]=B.value),M.value.unqualified.forEach(h=>a[h]=-1),a});function z(){S.value.length!==0&&(O(0),p.setStreamFocus(),p.pause(),e.nextTick(()=>{S.value[0].focus()}))}function I({announce:a=!0}={}){P(),O(-1),p.setStreamFocus(!1),p.resume(),a&&U<d.value&&(U++,D.info(y.value))}e.provide(Ae,{containersTabIndex:$,elementsTabIndex:e.readonly(B)}),e.watch(g.containers,ne,{deep:!0});function ne(a){const h={qualified:[],unqualified:[]};let A=[],C=[],b=[];a.map(N=>({id:N.dataset.notivueContainer,container:N})).sort((N,x)=>+x.id-+N.id).forEach(({id:N,container:x})=>{const ee=Array.from(x.querySelectorAll(At)).filter(ie=>ie instanceof HTMLElement);b.push(...ee),ee.length>1?(h.qualified.push(N),A.push(x)):(h.unqualified.push(N),C.push(x))}),M.value=h,S.value=A,G.value=C,K=b}e.watch(S,(a,h,A)=>{if(a.length===0)return;const C=a.length>0,b=a.some(ee=>!h.some(ie=>ie===ee)),N=b&&p.isStreamFocused.value,x=b&&!p.isStreamFocused.value||C&&j;N?a[0].focus():x&&oe(),A(()=>{x&&W()})},{flush:"post"});function J(a){!a.shiftKey&&a.key==="Tab"&&S.value.length>0&&(a.preventDefault(),j&&(j=!1),z(),e.nextTick(W))}function oe(){W(),document.addEventListener("keydown",J)}function W(){document.removeEventListener("keydown",J)}e.watch(G,a=>{!E.enqueue.value||!p.isStreamFocused.value||a.length>0&&(S.value.length>0?S.value[0].focus():I({announce:!1}))},{flush:"post"});let V=!1;e.watch(g.root,(a,h,A)=>{function C(b){if(b.preventDefault(),b.stopPropagation(),!!p.isStreamFocused.value&&_.value){if(V)return V=!1;a!=null&&a.contains(b.relatedTarget)||I()}}a&&a.addEventListener("focusout",C),A(()=>{a&&a.removeEventListener("focusout",C)})},{immediate:!0,flush:"post"});function Q(a){let h=0;if(S.value.some((C,b)=>{if(C.contains(a.target)||C===a.target)return h=b,!0})){if(a.key==="Escape")return a.preventDefault(),V=!0,I();if(!s.value)return;if((a.target instanceof HTMLButtonElement||a.target instanceof HTMLAnchorElement)&&(a.key===" "||a.key===" "||a.key==="Enter")){if(a.preventDefault(),V=!0,a.target.click(),k.length>0)return;const b=S.value[h+1];b?b.focus():I()}}}function se(a){if(a.ctrlKey&&(a.key===o.value.toLowerCase()||a.key===o.value.toUpperCase())){if(a.preventDefault(),p.isStreamFocused.value)return V=!0,I();S.value.length>0?z():D.info(R.value)}}function Y(a){var h;p.isStreamFocused.value&&!_.value&&((h=g.root.value)!=null&&h.contains(a.target)||I(),K.includes(a.target)&&I())}const c=[["click",Y],["keydown",Q],["keydown",se]];return e.onMounted(()=>{c.forEach(([a,h])=>document.addEventListener(a,h))}),e.onBeforeUnmount(()=>{c.forEach(([a,h])=>{document.removeEventListener(a,h)})}),(a,h)=>e.renderSlot(a.$slots,"default",e.normalizeProps(e.guardReactiveProps({containersTabIndex:$.value,elementsTabIndex:B.value})))}}),Ot=e.defineComponent({__name:"NotivueKeyboard",props:e.mergeDefaults({comboKey:{},handleClicks:{type:Boolean},leaveMessage:{},emptyMessage:{},renderAnnouncement:{type:Boolean},maxAnnouncements:{}},Ie),setup(n){const t=n;return(o,s)=>(e.openBlock(),e.createBlock(e.unref(ge),null,{default:e.withCtx(()=>[e.createVNode(Ft,e.normalizeProps(e.guardReactiveProps(t)),{default:e.withCtx(({containersTabIndex:i,elementsTabIndex:r})=>[e.renderSlot(o.$slots,"default",e.normalizeProps(e.guardReactiveProps({containersTabIndex:i,elementsTabIndex:r})))]),_:3},16)]),_:3}))}});function xt(){return me?{elementsTabIndex:e.ref(-1),containersTabIndex:e.computed(()=>({}))}:e.inject(Ae)}const Lt=e.createElementVNode("path",{d:"M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z"},null,-1),Dt=[Lt],Re=e.defineComponent({__name:"SuccessIcon",setup(n){return(t,o)=>(e.openBlock(),e.createElementBlock("svg",e.normalizeProps(e.guardReactiveProps(e.unref(q))),Dt,16))}}),Mt=e.createElementVNode("path",{d:"M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z"},null,-1),Bt=[Mt],le=e.defineComponent({__name:"ErrorIcon",setup(n){return(t,o)=>(e.openBlock(),e.createElementBlock("svg",e.normalizeProps(e.guardReactiveProps(e.unref(q))),Bt,16))}}),$t=e.createElementVNode("path",{d:"M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z"},null,-1),zt=[$t],Vt=e.defineComponent({__name:"InfoIcon",setup(n){return(t,o)=>(e.openBlock(),e.createElementBlock("svg",e.normalizeProps(e.guardReactiveProps(e.unref(q))),zt,16))}}),Ut=e.createElementVNode("path",{d:"M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z"},null,-1),jt=e.createElementVNode("path",{d:"M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z"},null,-1),Kt=[Ut,jt],Se=e.defineComponent({__name:"SuccessOutlineIcon",setup(n){return(t,o)=>(e.openBlock(),e.createElementBlock("svg",e.normalizeProps(e.guardReactiveProps(e.unref(q))),Kt,16))}}),Zt=e.createElementVNode("path",{d:"M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z"},null,-1),qt=e.createElementVNode("path",{d:"M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z"},null,-1),Wt=e.createElementVNode("path",{d:"M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z"},null,-1),Xt=[Zt,qt,Wt],ue=e.defineComponent({__name:"ErrorOutlineIcon",setup(n){return(t,o)=>(e.openBlock(),e.createElementBlock("svg",e.normalizeProps(e.guardReactiveProps(e.unref(q))),Xt,16))}}),Ht=e.createElementVNode("path",{d:"M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z"},null,-1),Gt=e.createElementVNode("path",{d:"M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z"},null,-1),Jt=e.createElementVNode("path",{d:"M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z"},null,-1),Qt=[Ht,Gt,Jt],Yt=e.defineComponent({__name:"InfoOutlineIcon",setup(n){return(t,o)=>(e.openBlock(),e.createElementBlock("svg",e.normalizeProps(e.guardReactiveProps(e.unref(q))),Qt,16))}}),en=e.createElementVNode("path",{d:"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",opacity:".25"},null,-1),tn=e.createElementVNode("path",{d:"M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",class:"Notivue__spinner"},null,-1),nn=[en,tn],Ne=e.defineComponent({__name:"PromiseIcon",setup(n){return(t,o)=>(e.openBlock(),e.createElementBlock("svg",e.normalizeProps(e.guardReactiveProps(f(l({},e.unref(Ee)),{width:28,height:28,fill:"currentColor"}))),nn,16))}}),on=e.createElementVNode("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),sn=e.createElementVNode("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1),an=[on,sn],Fe=e.defineComponent({__name:"CloseIcon",setup(n){return(t,o)=>(e.openBlock(),e.createElementBlock("svg",e.normalizeProps(e.guardReactiveProps(e.unref(rn))),an,16))}}),Ee={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},q=f(l({},Ee),{fill:"currentColor",viewBox:"0 0 12 12"}),rn=f(l({},Ee),{stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}),Oe={[m.SUCCESS]:e.markRaw(Re),[m.ERROR]:e.markRaw(le),[m.INFO]:e.markRaw(Vt),[m.WARNING]:e.markRaw(le),[m.PROMISE]:e.markRaw(Ne),[m.PROMISE_RESOLVE]:e.markRaw(Re),[m.PROMISE_REJECT]:e.markRaw(le),close:e.markRaw(Fe)},cn={[m.SUCCESS]:e.markRaw(Se),[m.ERROR]:e.markRaw(ue),[m.INFO]:e.markRaw(Yt),[m.WARNING]:e.markRaw(ue),[m.PROMISE]:e.markRaw(Ne),[m.PROMISE_RESOLVE]:e.markRaw(Se),[m.PROMISE_REJECT]:e.markRaw(ue),close:e.markRaw(Fe)},H={"--nv-width":"350px","--nv-spacing":"0.625rem","--nv-radius":"0.625rem","--nv-icon-size":"1.25rem","--nv-title-size":"0.925rem","--nv-message-size":"0.925rem","--nv-tip-width":"0px","--nv-y-align":"center"},ye={"--nv-shadow":"rgba(0, 0, 0, 0.06) 0px 4px 6px -1px, rgba(0, 0, 0, 0.03) 0px 2px 4px -1px"},xe=f(l(l({},H),ye),{"--nv-global-bg":"#FFF","--nv-global-fg":"#171717","--nv-success-accent":"#28B780","--nv-error-accent":"#E74C3C","--nv-warning-accent":"#F59E0B","--nv-info-accent":"#3E8EFF","--nv-promise-accent":"#171717"}),ln=f(l(l({},H),ye),{"--nv-success-bg":"#E9FAEF","--nv-success-accent":"#059669","--nv-success-fg":"#057452","--nv-error-bg":"#FEEFEF","--nv-error-accent":"#E6523C","--nv-error-fg":"#C5412C","--nv-warning-bg":"#FFF0D8","--nv-warning-accent":"#F48533","--nv-warning-fg":"#81471D","--nv-info-bg":"#DEF0FA","--nv-info-accent":"#1F70AC","--nv-info-fg":"#1F70AC","--nv-promise-bg":"#FFF","--nv-promise-accent":"#334155","--nv-promise-fg":"#334155"}),un=f(l(l({},H),ye),{"--nv-global-accent":"#FFF","--nv-global-fg":"#FFF","--nv-success-bg":"#178570","--nv-error-bg":"#C94430","--nv-info-bg":"#117AAE","--nv-warning-bg":"#FFE556","--nv-warning-fg":"#4F5358","--nv-warning-accent":"#4F5358","--nv-promise-bg":"#FFF","--nv-promise-fg":"#334155","--nv-promise-accent":"#64748B"}),dn=f(l({},H),{"--nv-border-width":"1px","--nv-global-bg":"#1F1F1F","--nv-global-border":"#414141","--nv-global-fg":"#D0D0D0","--nv-success-accent":"#8EF997","--nv-error-accent":"#FF7777","--nv-warning-accent":"#FFE554","--nv-info-accent":"#5FD4FF","--nv-promise-accent":"#D0D0D0"}),fn=f(l({},H),{"--nv-border-width":"1px","--nv-global-bg":"#20252E","--nv-global-border":"#353b45","--nv-global-fg":"#dfdfdf","--nv-success-accent":"#34D399","--nv-error-accent":"#FF7777","--nv-warning-accent":"#FFE554","--nv-info-accent":"#5FD4FF","--nv-promise-accent":"#D0D0D0"}),F={NOTIFICATION:w+"notification",ICON:w+"icon",CONTENT:w+"content",TITLE:w+"content-title",MESSAGE:w+"content-message",CLOSE:w+"close",CLOSE_ICON:w+"close-icon",TRANSITION:w+"transition"},mn={icons:()=>Oe,theme:()=>xe,hideClose:!1,closeAriaLabel:"Close"},pn=["data-notivue","data-notivue-has-title"],vn=["aria-live","role"],hn=["textContent"],gn=["textContent"],En=["aria-label"],yn=["textContent"],Le=e.defineComponent({__name:"Notifications",props:e.mergeDefaults({item:{},icons:{},theme:{},closeAriaLabel:{},hideClose:{type:Boolean}},mn),setup(n){const t=n,o=e.shallowRef(t.icons[t.item.type]),s=t.icons.close;return e.watch(()=>t.item.type,i=>o.value=t.icons[i],{flush:"sync"}),(i,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(F).NOTIFICATION),"data-notivue":i.item.type,"data-notivue-has-title":!!i.item.title,style:e.normalizeStyle(i.theme)},[o.value?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[typeof o.value=="object"?(e.openBlock(),e.createBlock(e.Transition,{key:0,name:e.unref(F).TRANSITION,mode:"out-in"},{default:e.withCtx(()=>[typeof o.value=="object"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.value),{key:0,class:e.normalizeClass(e.unref(F).ICON),"aria-hidden":"true"},null,8,["class"])):e.createCommentVNode("",!0)]),_:1},8,["name"])):typeof o.value=="string"?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(F).ICON),"aria-hidden":"true"},e.toDisplayString(o.value),3)):e.createCommentVNode("",!0)],64)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(e.unref(F).CONTENT),"aria-live":i.item.ariaLive,role:i.item.ariaRole,"aria-atomic":"true"},[i.item.title?(e.openBlock(),e.createElementBlock("h3",{key:0,class:e.normalizeClass(e.unref(F).TITLE),textContent:e.toDisplayString(e.unref(i.item.title))},null,10,hn)):e.createCommentVNode("",!0),e.createElementVNode("p",{class:e.normalizeClass(e.unref(F).MESSAGE),textContent:e.toDisplayString(e.unref(i.item.message))},null,10,gn)],10,vn),!t.hideClose&&e.unref(s)&&i.item.type!=="promise"?(e.openBlock(),e.createElementBlock("button",{key:1,class:e.normalizeClass(e.unref(F).CLOSE),"aria-label":i.closeAriaLabel,type:"button",tabindex:"-1",onClick:r[0]||(r[0]=(...u)=>i.item.clear&&i.item.clear(...u))},[typeof e.unref(s)=="object"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(s)),{key:0,class:e.normalizeClass(e.unref(F).CLOSE_ICON)},null,8,["class"])):typeof e.unref(s)=="string"?(e.openBlock(),e.createElementBlock("div",{key:1,"aria-hidden":"true",textContent:e.toDisplayString(e.unref(s))},null,8,yn)):e.createCommentVNode("",!0)],10,En)):e.createCommentVNode("",!0)],14,pn))}});exports.DEFAULT_CONFIG=fe;exports.Notification=Le;exports.Notifications=Le;exports.Notivue=Rt;exports.NotivueAstro=St;exports.NotivueKeyboard=Ot;exports.NotivueSwipe=kt;exports.createNotivue=rt;exports.darkTheme=dn;exports.filledIcons=Oe;exports.lightTheme=xe;exports.materialTheme=un;exports.outlinedIcons=cn;exports.pastelTheme=ln;exports.push=D;exports.pushAstro=Pt;exports.slateTheme=fn;exports.useNotifications=lt;exports.useNotivue=ve;exports.useNotivueKeyboard=xt;exports.usePush=ct;