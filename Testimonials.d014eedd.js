import{p as l,e}from"./chunks/jsxRuntime.module.816efc8d.js";import"./chunks/preact.module.f099146f.js";const r="/cowboy/assets/profiles/profile1.png",d="/cowboy/assets/profiles/profile2.png",c="/cowboy/assets/profiles/profile3.png",u="/cowboy/assets/profiles/profile4.png",f=()=>{const o=[{name:"Jesse Walker",profission:"Professional rider",img:r,text:`Problems with my beltchain and I discovered a sound on my
    frontwheel\u2026the bolt on my frontwheel was almost loose so my frontwheel
    was loose and the disk of my brakes and the brake paddles Where making
    this nose\u2026very dangerous\u2026luckily I discovered the problem on time`},{name:"John Doe",profission:"Professional rider",img:d,text:`Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries.`},{name:"Alexander Green",profission:"Regular Sport",img:c,text:`It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here.`},{name:"Alice Brian",profission:"Professional writer",img:u,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      eu dolor in velit ullamcorper fringilla nec at nisl. Praesent
      vulputate bibendum ligula, a finibus metus vulputate vitae.
      Etiam a lectus turpis. Nam non ex quis dui vestibulum tincidunt
      id quis ligula. Ut lobortis mi in risus pulvinar, cursus eleifend
      augue placerat.`}],[i,n]=l(0);function a(s){const t=s.target.dataset.index;t?n(Number(t)):s.target.parentElement.click()}return e("div",{class:"mt-16 flex flex-col",children:[e("div",{class:"max-w-md mx-auto flex gap-4",children:[e("div",{class:"text-8xl font-serif -mt-2",children:"\u201C"}),e("p",{children:o[i].text})]}),e("div",{class:"flex gap-8 mt-8 mx-auto",children:o.map((s,t)=>e("div",{class:"relative h-24 w-24 py-4 px-8 rounded-full overflow-hidden flex gap-4 transition-all cursor-pointer"+(i===t?" !w-auto bg-black-gray":""),"data-index":t,onClick:a,children:[e("div",{class:i!==t?"absolute inset-4":"",children:e("img",{class:"rounded-full block h-[100%]",src:s.img,alt:s.name})}),e("div",{class:"info flex flex-col my-auto"+(i!==t?" opacity-0":""),children:[e("span",{class:"text-white",children:s.name}),e("span",{class:"text-secondary",children:s.profission})]})]},t.toString()))})]})};export{f as default};
