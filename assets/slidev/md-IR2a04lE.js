import{m as b,n as g,o as x}from"../modules/unplugin-icons-6eUxMnl7.js";import{d as h,z as k,o as p,b as $,e as o,f as y,h as C,c as w,k as P,K as i,I as S,l,q as B,s as z}from"../modules/vue-Bhmac2Xt.js";import{u,f as E}from"./context-Bsy-WxOT.js";import"../index-BTICaZvT.js";import"../monaco/bundled-types-DbQaa6Xr.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-CjyxYVqR.js";function d(e){return e.startsWith("/")?"/cdc-talk/"+e.slice(1):e}function I(e,n=!1){const r=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),s={background:r?e:void 0,color:e&&!r?"white":void 0,backgroundImage:r?void 0:e?n?`linear-gradient(#0005, #0008), url(${d(e)})`:`url("${d(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const N={class:"my-auto w-full"},O=h({__name:"cover",props:{background:{default:""}},setup(e){u();const n=e,r=k(()=>I(n.background,!0));return(s,a)=>(p(),$("div",{class:"slidev-layout cover",style:C(r.value)},[o("div",N,[y(s.$slots,"default")])],4))}}),V={class:"pt-12"},G={class:"abs-br m-6 flex gap-2"},H={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},J={__name:"slides.md__slidev_1",setup(e){const{$slidev:n,$nav:r,$clicksContext:s,$clicks:a,$page:R,$renderContext:T,$frontmatter:_}=u();return s.setup(),(W,t)=>{const m=b,v=g,f=x;return p(),w(O,B(z(i(E)(i(_),0))),{default:P(()=>[t[3]||(t[3]=o("h1",null,"Welcome to Slidev",-1)),t[4]||(t[4]=o("p",null,"Presentation slides for developers",-1)),o("div",V,[o("span",{onClick:t[0]||(t[0]=(...c)=>i(n).nav.next&&i(n).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[t[2]||(t[2]=S(" Press Space for next page ")),l(m,{class:"inline"})])]),o("div",G,[o("button",{onClick:t[1]||(t[1]=c=>i(n).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[l(v)]),o("a",H,[l(f)])])]),_:1},16)}}};export{J as default};
