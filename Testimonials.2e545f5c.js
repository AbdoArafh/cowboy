import{l as a}from"./chunks/preact.module.f099146f.js";typeof process=="object"&&Object.prototype.toString.call(process);new TextEncoder;var H,_,f,v,h=0,E=[],u=[],g=a.__b,y=a.__r,x=a.diffed,b=a.__c,k=a.unmount;function A(t,e){a.__h&&a.__h(_,t,h||e),h=0;var n=_.__H||(_.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:u}),n.__[t]}function P(t){return h=1,q(I,t)}function q(t,e,n){var o=A(H++,2);return o.t=t,o.__c||(o.__=[n?n(e):I(void 0,e),function(i){var r=o.t(o.__[0],i);o.__[0]!==r&&(o.__=[r,o.__[1]],o.__c.setState({}))}],o.__c=_),o.__}function T(){for(var t;t=E.shift();)if(t.__P)try{t.__H.__h.forEach(d),t.__H.__h.forEach(m),t.__H.__h=[]}catch(e){t.__H.__h=[],a.__e(e,t.__v)}}a.__b=function(t){_=null,g&&g(t)},a.__r=function(t){y&&y(t),H=0;var e=(_=t.__c).__H;e&&(f===_?(e.__h=[],_.__h=[],e.__.forEach(function(n){n.__V=u,n.u=void 0})):(e.__h.forEach(d),e.__h.forEach(m),e.__h=[])),f=_},a.diffed=function(t){x&&x(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(E.push(e)!==1&&v===a.requestAnimationFrame||((v=a.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(r),w&&cancelAnimationFrame(o),setTimeout(n)},r=setTimeout(i,100);w&&(o=requestAnimationFrame(i))})(T)),e.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.__V!==u&&(n.__=n.__V),n.u=void 0,n.__V=u})),f=_=null},a.__c=function(t,e){e.some(function(n){try{n.__h.forEach(d),n.__h=n.__h.filter(function(o){return!o.__||m(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],a.__e(o,n.__v)}}),b&&b(t,e)},a.unmount=function(t){k&&k(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{d(o)}catch(i){e=i}}),e&&a.__e(e,n.__v))};var w=typeof requestAnimationFrame=="function";function d(t){var e=_,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),_=e}function m(t){var e=_;t.__c=t.__(),_=e}function I(t,e){return typeof e=="function"?e(t):e}var C=0;function s(t,e,n,o,i){var r,l,c={};for(l in e)l=="ref"?r=e[l]:c[l]=e[l];var p={type:t,props:c,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--C,__source:i,__self:o};if(typeof t=="function"&&(r=t.defaultProps))for(l in r)c[l]===void 0&&(c[l]=r[l]);return a.vnode&&a.vnode(p),p}const S=()=>{const t=[{name:"Jesse Walker",profission:"Professional rider",img:"https://via.placeholder.com/64x64.png",text:`Problems with my beltchain and I discovered a sound on my
    frontwheel\u2026the bolt on my frontwheel was almost loose so my frontwheel
    was loose and the disk of my brakes and the brake paddles Where making
    this nose\u2026very dangerous\u2026luckily I discovered the problem on time`},{name:"John Doe",profission:"Professional rider",img:"https://via.placeholder.com/64x64.png",text:`Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries.`},{name:"Alexander Green",profission:"Regular Sport",img:"https://via.placeholder.com/64x64.png",text:`It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here.`},{name:"Alice Brian",profission:"Professional writer",img:"https://via.placeholder.com/64x64.png",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      eu dolor in velit ullamcorper fringilla nec at nisl. Praesent
      vulputate bibendum ligula, a finibus metus vulputate vitae.
      Etiam a lectus turpis. Nam non ex quis dui vestibulum tincidunt
      id quis ligula. Ut lobortis mi in risus pulvinar, cursus eleifend
      augue placerat.`}],[e,n]=P(0);function o(i){const r=i.target.dataset.index;r?n(Number(r)):i.target.parentElement.click()}return s("div",{class:"mt-16 flex flex-col",children:[s("div",{class:"max-w-md mx-auto flex gap-4",children:[s("div",{class:"text-8xl font-serif -mt-2",children:"\u201C"}),s("p",{children:t[e].text})]}),s("div",{class:"flex gap-8 mt-8 mx-auto",children:t.map((i,r)=>s("div",{class:"relative h-24 w-24 py-4 px-8 rounded-full overflow-hidden flex gap-4 transition-all cursor-pointer"+(e===r?" !w-auto bg-black-gray":""),"data-index":r,onClick:o,children:[s("div",{class:e!==r?"absolute inset-4":"",children:s("img",{class:"rounded-full block h-[100%]",src:i.img,alt:i.name})}),s("div",{class:"info flex flex-col my-auto"+(e!==r?" opacity-0":""),children:[s("span",{class:"text-white",children:i.name}),s("span",{class:"text-secondary",children:i.profission})]})]},r.toString()))})]})};export{S as default};