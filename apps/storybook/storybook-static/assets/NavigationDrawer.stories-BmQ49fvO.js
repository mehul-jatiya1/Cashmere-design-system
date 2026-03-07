import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as N,r as p}from"./index-Bc2G9s8g.js";import{i as A,h as x,j as O,k as M,I as L,a as H,b as z,c as W,d as R,e as q,f as $,g as F}from"./icons-DT8TXCTb.js";import{S as E}from"./Switch-Cgs1i_RY.js";const B="_drawer_1pgtk_7",U="_logoArea_1pgtk_23",K="_productTrigger_1pgtk_33",G="_productTriggerOpen_1pgtk_53",J="_productTriggerLabel_1pgtk_58",Q="_productTriggerChevron_1pgtk_66",X="_productDropdown_1pgtk_77",Y="_productDropdownItem_1pgtk_94",Z="_productDropdownItemActive_1pgtk_114",V="_sectionsWrapper_1pgtk_123",ee="_itemsContainer_1pgtk_130",te="_itemWrapper_1pgtk_136",ne="_navItem_1pgtk_143",oe="_navItemActive_1pgtk_167",se="_navItemIconLabel_1pgtk_171",re="_navItemIcon_1pgtk_171",ae="_navItemLabel_1pgtk_191",ie="_navItemTrailing_1pgtk_200",ce="_navItemTrailingIcon_1pgtk_209",de="_divider_1pgtk_221",le="_sectionHeader_1pgtk_230",pe="_sectionHeaderCollapsible_1pgtk_240",ue="_sectionHeaderLabel_1pgtk_248",me="_sectionHeaderChevron_1pgtk_259",n={drawer:B,logoArea:U,productTrigger:K,productTriggerOpen:G,productTriggerLabel:J,productTriggerChevron:Q,productDropdown:X,productDropdownItem:Y,productDropdownItemActive:Z,sectionsWrapper:V,itemsContainer:ee,itemWrapper:te,navItem:ne,navItemActive:oe,navItemIconLabel:se,navItemIcon:re,navItemLabel:ae,navItemTrailing:ie,navItemTrailingIcon:ce,divider:de,sectionHeader:le,sectionHeaderCollapsible:pe,sectionHeaderLabel:ue,sectionHeaderChevron:me},ge=({item:t,isActive:a,onItemClick:c})=>e.jsx("div",{className:n.itemWrapper,children:e.jsxs("button",{type:"button",className:`${n.navItem} ${a?n.navItemActive:""}`,onClick:()=>{var o;(o=t.onClick)==null||o.call(t),c(t)},"aria-current":a?"page":void 0,children:[e.jsxs("span",{className:n.navItemIconLabel,children:[t.icon&&e.jsx("span",{className:n.navItemIcon,children:t.icon}),e.jsx("span",{className:n.navItemLabel,children:t.label})]}),t.trailing==="chevron"&&e.jsx("span",{className:n.navItemTrailingIcon,children:e.jsx(x,{size:20})}),t.trailing&&t.trailing!=="chevron"&&e.jsx("span",{className:n.navItemTrailing,children:t.trailing})]})}),ve=({section:t,activeItemId:a,onItemClick:c})=>{const[o,d]=p.useState(!1);return e.jsxs("div",{children:[t.title&&e.jsxs("div",{className:`${n.sectionHeader} ${t.collapsible?n.sectionHeaderCollapsible:""}`,onClick:t.collapsible?()=>d(s=>!s):void 0,role:t.collapsible?"button":void 0,tabIndex:t.collapsible?0:void 0,onKeyDown:t.collapsible?s=>{(s.key==="Enter"||s.key===" ")&&d(l=>!l)}:void 0,"aria-expanded":t.collapsible?!o:void 0,children:[e.jsx("span",{className:n.sectionHeaderLabel,children:t.title}),t.collapsible&&e.jsx("span",{className:n.sectionHeaderChevron,children:o?e.jsx(O,{size:24}):e.jsx(M,{size:24})})]}),!o&&e.jsx("div",{className:n.itemsContainer,children:t.items.map(s=>e.jsx(ge,{item:s,isActive:s.id===a,onItemClick:c},s.id))})]})},I=({sections:t,activeItemId:a,logo:c,productVerticals:o,activeProductId:d,productDropdownOpen:s=!1,onItemClick:l,onProductSelect:u,onProductDropdownToggle:m,className:r})=>{const h=(o==null?void 0:o.find(i=>i.id===d))??(o==null?void 0:o[0]),C=i=>l==null?void 0:l(i);return e.jsxs("nav",{className:`${n.drawer} ${r??""}`,"aria-label":"Main navigation",children:[c&&e.jsx("div",{className:n.logoArea,children:c}),o&&o.length>0&&e.jsxs("button",{type:"button",className:`${n.productTrigger} ${s?n.productTriggerOpen:""}`,onClick:m,"aria-expanded":s,"aria-haspopup":"listbox",children:[e.jsx("span",{className:n.productTriggerLabel,children:h==null?void 0:h.label}),e.jsx("span",{className:n.productTriggerChevron,children:s?e.jsx(A,{size:20}):e.jsx(x,{size:20})})]}),s&&o&&e.jsx("div",{className:n.productDropdown,role:"listbox","aria-label":"Select product vertical",children:o.map(i=>e.jsx("button",{type:"button",role:"option","aria-selected":i.id===d,className:`${n.productDropdownItem} ${i.id===d?n.productDropdownItemActive:""}`,onClick:()=>u==null?void 0:u(i),children:i.label},i.id))}),e.jsx("div",{className:n.sectionsWrapper,children:t.map((i,P)=>e.jsxs(N.Fragment,{children:[P>0&&e.jsx("div",{className:n.divider}),e.jsx(ve,{section:i,activeItemId:a,onItemClick:C})]},i.id))})]})};I.__docgenInfo={description:"",methods:[],displayName:"NavigationDrawer",props:{sections:{required:!0,tsType:{name:"Array",elements:[{name:"NavSection"}],raw:"NavSection[]"},description:"Navigation sections"},activeItemId:{required:!1,tsType:{name:"string"},description:"ID of the currently active nav item"},logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Logo rendered at top"},productVerticals:{required:!1,tsType:{name:"Array",elements:[{name:"ProductVertical"}],raw:"ProductVertical[]"},description:"Product verticals for the dropdown selector"},activeProductId:{required:!1,tsType:{name:"string"},description:"Currently selected product vertical ID"},productDropdownOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the product dropdown overlay is open",defaultValue:{value:"false",computed:!1}},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItem) => void",signature:{arguments:[{type:{name:"NavItem"},name:"item"}],return:{name:"void"}}},description:"Called when a nav item is clicked"},onProductSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(product: ProductVertical) => void",signature:{arguments:[{type:{name:"ProductVertical"},name:"product"}],return:{name:"void"}}},description:"Called when a product vertical is selected"},onProductDropdownToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the product dropdown toggle is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const be={title:"Components/NavigationDrawer",component:I,tags:["autodocs"],parameters:{layout:"fullscreen"}},T=[{id:"collect",label:"Collect"},{id:"secure",label:"Secure"},{id:"payouts",label:"Payouts"}],k=()=>e.jsxs("svg",{width:"120",height:"36",viewBox:"0 0 120 36",fill:"none",children:[e.jsx("rect",{width:"36",height:"36",rx:"8",fill:"#094eff"}),e.jsx("text",{x:"44",y:"15",fontFamily:"DM Sans, sans-serif",fontSize:"13",fontWeight:"700",fill:"#fffffc",children:"Cashfree"}),e.jsx("text",{x:"44",y:"30",fontFamily:"DM Sans, sans-serif",fontSize:"11",fontWeight:"400",fill:"#fffffc",opacity:"0.7",children:"Payments"})]}),g=()=>e.jsx(x,{size:20});function S(t,a){return[{id:"main",items:[{id:"home",label:"Home",icon:e.jsx(L,{size:20})},{id:"insights",label:"Insights",icon:e.jsx(H,{size:20})},{id:"tx-history",label:"Transactional History",icon:e.jsx(z,{size:20}),trailing:e.jsx(g,{})},{id:"settlements",label:"Settlements",icon:e.jsx(W,{size:20})},{id:"reports",label:"Reports",icon:e.jsx(R,{size:20})}]},{id:"products",title:"Products",items:[{id:"collection-methods",label:"Collection Methods",trailing:e.jsx(g,{})},{id:"one-click-checkout",label:"One Click Checkout",trailing:e.jsx(g,{})},{id:"recurring-payments",label:"Recurring Payments",trailing:e.jsx(g,{})},{id:"riskshield",label:"Riskshield",trailing:e.jsx(g,{})}]},{id:"more-products",title:"More Products",collapsible:!0,items:[{id:"riskshield-more",label:"Riskshield"},{id:"spos",label:"SPOS"},{id:"subscriptions",label:"Subscriptions"}]},{id:"settings",items:[{id:"test-mode",label:"Test Mode",icon:e.jsx(q,{size:20}),trailing:e.jsx(E,{checked:t,onChange:a})},{id:"developers",label:"Developers",icon:e.jsx($,{size:20})},{id:"settings",label:"Settings",icon:e.jsx(F,{size:20})}]}]}const v={render:()=>{const[t,a]=p.useState("home"),[c,o]=p.useState("collect"),[d,s]=p.useState(!1),[l,u]=p.useState(!1),m=S(l,u);return e.jsxs("div",{style:{display:"flex",height:"100vh",background:"#f4f6f9"},children:[e.jsx(I,{logo:e.jsx(k,{}),sections:m,activeItemId:t,productVerticals:T,activeProductId:c,productDropdownOpen:d,onItemClick:r=>{a(r.id),s(!1)},onProductSelect:r=>{o(r.id),s(!1)},onProductDropdownToggle:()=>s(r=>!r)}),e.jsxs("main",{style:{flex:1,padding:32,fontFamily:"DM Sans, sans-serif",overflow:"auto"},children:[e.jsx("h1",{style:{margin:0,fontSize:24,fontWeight:700,color:"#1b1b1b"},children:"NavigationDrawer"}),e.jsxs("p",{style:{color:"#5f5f5f",marginTop:8},children:["Active: ",e.jsx("strong",{children:t})," · Product: ",e.jsx("strong",{children:c})," · Test mode: ",e.jsx("strong",{children:l?"on":"off"})]})]})]})}},f={render:()=>{const[t,a]=p.useState("home"),[c,o]=p.useState("collect"),[d,s]=p.useState(!0),[l,u]=p.useState(!1),m=S(l,u);return e.jsxs("div",{style:{display:"flex",height:"100vh",background:"#f4f6f9"},children:[e.jsx(I,{logo:e.jsx(k,{}),sections:m,activeItemId:t,productVerticals:T,activeProductId:c,productDropdownOpen:d,onItemClick:r=>{a(r.id),s(!1)},onProductSelect:r=>{o(r.id),s(!1)},onProductDropdownToggle:()=>s(r=>!r)}),e.jsx("main",{style:{flex:1,padding:32,fontFamily:"DM Sans, sans-serif"}})]})}};var b,_,w;v.parameters={...v.parameters,docs:{...(b=v.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [activeItemId, setActiveItemId] = useState('home');
    const [activeProductId, setActiveProductId] = useState('collect');
    const [productDropdownOpen, setProductDropdownOpen] = useState(false);
    const [testMode, setTestMode] = useState(false);
    const sections = buildSections(testMode, setTestMode);
    return <div style={{
      display: 'flex',
      height: '100vh',
      background: '#f4f6f9'
    }}>
        <NavigationDrawer logo={<CashfreeLogo />} sections={sections} activeItemId={activeItemId} productVerticals={productVerticals} activeProductId={activeProductId} productDropdownOpen={productDropdownOpen} onItemClick={item => {
        setActiveItemId(item.id);
        setProductDropdownOpen(false);
      }} onProductSelect={p => {
        setActiveProductId(p.id);
        setProductDropdownOpen(false);
      }} onProductDropdownToggle={() => setProductDropdownOpen(o => !o)} />
        <main style={{
        flex: 1,
        padding: 32,
        fontFamily: 'DM Sans, sans-serif',
        overflow: 'auto'
      }}>
          <h1 style={{
          margin: 0,
          fontSize: 24,
          fontWeight: 700,
          color: '#1b1b1b'
        }}>NavigationDrawer</h1>
          <p style={{
          color: '#5f5f5f',
          marginTop: 8
        }}>
            Active: <strong>{activeItemId}</strong> · Product: <strong>{activeProductId}</strong> · Test mode: <strong>{testMode ? 'on' : 'off'}</strong>
          </p>
        </main>
      </div>;
  }
}`,...(w=(_=v.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var j,y,D;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [activeItemId, setActiveItemId] = useState('home');
    const [activeProductId, setActiveProductId] = useState('collect');
    const [productDropdownOpen, setProductDropdownOpen] = useState(true);
    const [testMode, setTestMode] = useState(false);
    const sections = buildSections(testMode, setTestMode);
    return <div style={{
      display: 'flex',
      height: '100vh',
      background: '#f4f6f9'
    }}>
        <NavigationDrawer logo={<CashfreeLogo />} sections={sections} activeItemId={activeItemId} productVerticals={productVerticals} activeProductId={activeProductId} productDropdownOpen={productDropdownOpen} onItemClick={item => {
        setActiveItemId(item.id);
        setProductDropdownOpen(false);
      }} onProductSelect={p => {
        setActiveProductId(p.id);
        setProductDropdownOpen(false);
      }} onProductDropdownToggle={() => setProductDropdownOpen(o => !o)} />
        <main style={{
        flex: 1,
        padding: 32,
        fontFamily: 'DM Sans, sans-serif'
      }} />
      </div>;
  }
}`,...(D=(y=f.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const _e=["Default","WithDropdownOpen"];export{v as Default,f as WithDropdownOpen,_e as __namedExportsOrder,be as default};
