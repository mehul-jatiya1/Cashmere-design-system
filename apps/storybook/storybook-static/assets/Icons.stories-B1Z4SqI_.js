import{j as n}from"./jsx-runtime-DFAAy_2V.js";import{I as p,a as d,b as f,c as x,d as I,e as g,f as y,g as h,h as C,i as v,j as u,k as j}from"./icons-DT8TXCTb.js";import"./index-Bc2G9s8g.js";const k={title:"Foundations/Icons",parameters:{layout:"padded"}},D=[{name:"IconHome",Component:p},{name:"IconBargraph",Component:d},{name:"IconBookOpenText",Component:f},{name:"IconMoney",Component:x},{name:"IconDocument",Component:I},{name:"IconWaiting",Component:g},{name:"IconCode",Component:y},{name:"IconSettings",Component:h},{name:"IconChevronDown",Component:C},{name:"IconChevronUp",Component:v},{name:"IconChevronDown24",Component:u},{name:"IconChevronUp24",Component:j}],o={render:()=>n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24,padding:24,fontFamily:"DM Sans, sans-serif"},children:D.map(({name:e,Component:m})=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[n.jsx("div",{style:{width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",background:"#f4f6f9",borderRadius:8},children:n.jsx(m,{size:20})}),n.jsx("span",{style:{fontSize:11,color:"#5f5f5f",textAlign:"center",maxWidth:80},children:e})]},e))})},s={render:()=>n.jsx("div",{style:{display:"flex",alignItems:"center",gap:24,padding:24,fontFamily:"DM Sans, sans-serif"},children:[12,16,20,24,32].map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[n.jsx(p,{size:e}),n.jsxs("span",{style:{fontSize:11,color:"#5f5f5f"},children:[e,"px"]})]},e))})};var a,t,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
    padding: 24,
    fontFamily: 'DM Sans, sans-serif'
  }}>
      {icons.map(({
      name,
      Component
    }) => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <div style={{
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f4f6f9',
        borderRadius: 8
      }}>
            <Component size={20} />
          </div>
          <span style={{
        fontSize: 11,
        color: '#5f5f5f',
        textAlign: 'center',
        maxWidth: 80
      }}>{name}</span>
        </div>)}
    </div>
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var r,c,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    padding: 24,
    fontFamily: 'DM Sans, sans-serif'
  }}>
      {[12, 16, 20, 24, 32].map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <IconHome size={size} />
          <span style={{
        fontSize: 11,
        color: '#5f5f5f'
      }}>{size}px</span>
        </div>)}
    </div>
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const M=["AllIcons","Sizes"];export{o as AllIcons,s as Sizes,M as __namedExportsOrder,k as default};
