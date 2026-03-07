import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{r as j}from"./index-Bc2G9s8g.js";import{S as b}from"./Switch-Cgs1i_RY.js";const E={title:"Components/Switch",component:b,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{checked:!1}},s={args:{checked:!0}},r={render:()=>{const[o,D]=j.useState(!1);return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,fontFamily:"DM Sans, sans-serif"},children:[t.jsx(b,{checked:o,onChange:D}),t.jsx("span",{style:{fontSize:14},children:o?"On":"Off"})]})}},a={args:{checked:!1,disabled:!0}},n={args:{checked:!0,disabled:!0}};var c,d,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,f,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = useState(false);
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'DM Sans, sans-serif'
    }}>
        <Switch checked={on} onChange={setOn} />
        <span style={{
        fontSize: 14
      }}>{on ? 'On' : 'Off'}</span>
      </div>;
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,S,O;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...(O=(S=a.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var k,x,y;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const z=["Off","On","Controlled","Disabled","DisabledOn"];export{r as Controlled,a as Disabled,n as DisabledOn,e as Off,s as On,z as __namedExportsOrder,E as default};
