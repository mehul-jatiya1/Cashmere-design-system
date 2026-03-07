import{j as n}from"./jsx-runtime-DFAAy_2V.js";import"./index-Bc2G9s8g.js";const h={title:"Foundations/Spacing",parameters:{layout:"padded"}},g=[{token:"--sds-spacing-0",value:"0px",px:0},{token:"--sds-spacing-2",value:"2px",px:2},{token:"--sds-spacing-4",value:"4px",px:4},{token:"--sds-spacing-8",value:"8px",px:8},{token:"--sds-spacing-10",value:"10px",px:10},{token:"--sds-spacing-12",value:"12px",px:12},{token:"--sds-spacing-16",value:"16px",px:16},{token:"--sds-spacing-20",value:"20px",px:20},{token:"--sds-spacing-24",value:"24px",px:24},{token:"--sds-spacing-32",value:"32px",px:32},{token:"--sds-spacing-40",value:"40px",px:40},{token:"--sds-spacing-48",value:"48px",px:48},{token:"--sds-spacing-64",value:"64px",px:64},{token:"--sds-spacing-96",value:"96px",px:96},{token:"--sds-spacing-160",value:"160px",px:160}],i={render:()=>n.jsx("div",{style:{padding:8,display:"flex",flexDirection:"column",gap:8},children:g.map(({token:e,value:s,px:a})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[n.jsx("div",{style:{width:Math.max(a,1),height:24,background:"#094eff",borderRadius:3,flexShrink:0}}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:12,fontWeight:600,color:"#1b1b1b",width:60},children:s}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:11,color:"#767676"},children:e})]},e))})},k=[{token:"--sds-radius-50",value:"0px",px:0},{token:"--sds-radius-100",value:"2px",px:2},{token:"--sds-radius-200",value:"4px",px:4},{token:"--sds-radius-300",value:"8px",px:8},{token:"--sds-radius-400",value:"12px",px:12},{token:"--sds-radius-500",value:"14px",px:14},{token:"--sds-radius-600",value:"16px",px:16},{token:"--sds-radius-700",value:"18px",px:18},{token:"--sds-radius-800",value:"20px",px:20},{token:"--sds-radius-900",value:"24px",px:24},{token:"--sds-radius-1000",value:"32px",px:32},{token:"--sds-radius-full",value:"9999px",px:9999}],l={render:()=>n.jsx("div",{style:{padding:8,display:"flex",flexWrap:"wrap",gap:24},children:k.map(({token:e,value:s,px:a})=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[n.jsx("div",{style:{width:64,height:64,background:"#e5edff",border:"2px solid #094eff",borderRadius:Math.min(a,32)}}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:11,fontWeight:600,color:"#1b1b1b"},children:s}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:10,color:"#767676",textAlign:"center",maxWidth:80},children:e})]},e))})},t={render:()=>n.jsx("div",{style:{padding:8,display:"flex",flexDirection:"column",gap:24},children:[{token:"--sds-stroke-border",value:"1px",label:"Border"},{token:"--sds-stroke-focus",value:"2px",label:"Focus"},{token:"--sds-stroke-focuslarge",value:"8px",label:"Focus Large"}].map(({token:e,value:s,label:a})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[n.jsx("div",{style:{width:120,height:40,borderRadius:6,border:`${s} solid #094eff`,background:"#f4f6f9",flexShrink:0}}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontFamily:"DM Sans, sans-serif",fontSize:13,fontWeight:600,color:"#1b1b1b"},children:[a," · ",s]}),n.jsx("div",{style:{fontFamily:"DM Sans, sans-serif",fontSize:11,color:"#767676",marginTop:2},children:e})]})]},e))})};var o,d,r;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      {spacingScale.map(({
      token,
      value,
      px
    }) => <div key={token} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <div style={{
        width: Math.max(px, 1),
        height: 24,
        background: '#094eff',
        borderRadius: 3,
        flexShrink: 0
      }} />
          <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 12,
        fontWeight: 600,
        color: '#1b1b1b',
        width: 60
      }}>{value}</span>
          <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        color: '#767676'
      }}>{token}</span>
        </div>)}
    </div>
}`,...(r=(d=i.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var p,x,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 8,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24
  }}>
      {radii.map(({
      token,
      value,
      px
    }) => <div key={token} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <div style={{
        width: 64,
        height: 64,
        background: '#e5edff',
        border: '2px solid #094eff',
        borderRadius: Math.min(px, 32)
      }} />
          <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        fontWeight: 600,
        color: '#1b1b1b'
      }}>{value}</span>
          <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 10,
        color: '#767676',
        textAlign: 'center',
        maxWidth: 80
      }}>{token}</span>
        </div>)}
    </div>
}`,...(c=(x=l.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var f,u,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {[{
      token: '--sds-stroke-border',
      value: '1px',
      label: 'Border'
    }, {
      token: '--sds-stroke-focus',
      value: '2px',
      label: 'Focus'
    }, {
      token: '--sds-stroke-focuslarge',
      value: '8px',
      label: 'Focus Large'
    }].map(({
      token,
      value,
      label
    }) => <div key={token} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
          <div style={{
        width: 120,
        height: 40,
        borderRadius: 6,
        border: \`\${value} solid #094eff\`,
        background: '#f4f6f9',
        flexShrink: 0
      }} />
          <div>
            <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 13,
          fontWeight: 600,
          color: '#1b1b1b'
        }}>{label} · {value}</div>
            <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11,
          color: '#767676',
          marginTop: 2
        }}>{token}</div>
          </div>
        </div>)}
    </div>
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const b=["Scale","BorderRadius","Strokes"];export{l as BorderRadius,i as Scale,t as Strokes,b as __namedExportsOrder,h as default};
