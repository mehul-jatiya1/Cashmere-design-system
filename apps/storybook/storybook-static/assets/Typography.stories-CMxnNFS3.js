import{j as n}from"./jsx-runtime-DFAAy_2V.js";import"./index-Bc2G9s8g.js";const S={title:"Foundations/Typography",parameters:{layout:"padded"}},o=e=>n.jsx("h3",{style:{fontFamily:"DM Sans, sans-serif",fontSize:11,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"#767676",margin:"32px 0 12px"},children:e}),d=()=>n.jsx("hr",{style:{border:"none",borderTop:"1px solid #e8e8e8",margin:"4px 0"}}),l={render:()=>n.jsxs("div",{style:{padding:8},children:[o("Headings"),[{name:"H1 · 48px · Semibold",size:48,weight:600,lh:1.1},{name:"H2 · 40px · Semibold",size:40,weight:600,lh:1.2},{name:"H3 · 32px · Semibold",size:32,weight:600,lh:1.25},{name:"H4 · 28px · Semibold",size:28,weight:600,lh:1.3},{name:"H5 · 24px · Semibold",size:24,weight:600,lh:1.33},{name:"H6 · 20px · Bold",size:20,weight:700,lh:1.4},{name:"H7 · 16px · Bold",size:16,weight:700,lh:1.5}].map(({name:e,size:i,weight:s,lh:a})=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:24,padding:"12px 0"},children:[n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:i,fontWeight:s,lineHeight:a,color:"#1b1b1b",flex:1},children:"The quick brown fox"}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:11,color:"#a4a4a4",whiteSpace:"nowrap",flexShrink:0},children:e})]}),d()]},e)),o("Body"),[{name:"Body Large · 16px · Medium",size:16,weight:500,lh:1.5},{name:"Body Large · 16px · Semibold",size:16,weight:600,lh:1.5},{name:"Body Large · 16px · Bold",size:16,weight:700,lh:1.5},{name:"Body Small · 14px · Medium",size:14,weight:500,lh:1.43},{name:"Body Small · 14px · Semibold",size:14,weight:600,lh:1.43},{name:"Body Small · 14px · Bold",size:14,weight:700,lh:1.43},{name:"Body XS · 12px · Medium",size:12,weight:500,lh:1.5},{name:"Body XS · 12px · Semibold",size:12,weight:600,lh:1.5},{name:"Body XS · 12px · Bold",size:12,weight:700,lh:1.5}].map(({name:e,size:i,weight:s,lh:a})=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:24,padding:"10px 0"},children:[n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:i,fontWeight:s,lineHeight:a,color:"#1b1b1b",flex:1},children:"The quick brown fox jumps over the lazy dog"}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:11,color:"#a4a4a4",whiteSpace:"nowrap",flexShrink:0},children:e})]}),d()]},e)),o("Overline"),[{name:"Overline · 12px · Semibold · Uppercase",size:12,weight:600,upper:!0},{name:"Overline · 12px · Bold · Uppercase",size:12,weight:700,upper:!0}].map(({name:e,size:i,weight:s,upper:a})=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:24,padding:"10px 0"},children:[n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:i,fontWeight:s,lineHeight:1.33,letterSpacing:"0.06em",textTransform:a?"uppercase":void 0,color:"#1b1b1b",flex:1},children:"Section Label"}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:11,color:"#a4a4a4",whiteSpace:"nowrap",flexShrink:0},children:e})]}),d()]},e))]})},t={render:()=>n.jsx("div",{style:{padding:8,display:"flex",gap:48},children:[{label:"Regular",weight:400,token:"--sds-weight-regular"},{label:"Medium",weight:500,token:"--sds-weight-medium"},{label:"Semibold",weight:600,token:"--sds-weight-semibold"},{label:"Bold",weight:700,token:"--sds-weight-bold"}].map(({label:e,weight:i,token:s})=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:24,fontWeight:i,color:"#1b1b1b"},children:"Aa"}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:13,fontWeight:600,color:"#1b1b1b"},children:e}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:11,color:"#767676"},children:i}),n.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:10,color:"#a4a4a4"},children:s})]},i))})};var r,p,h;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 8
  }}>
      {label('Headings')}
      {[{
      name: 'H1 · 48px · Semibold',
      size: 48,
      weight: 600,
      lh: 1.1
    }, {
      name: 'H2 · 40px · Semibold',
      size: 40,
      weight: 600,
      lh: 1.2
    }, {
      name: 'H3 · 32px · Semibold',
      size: 32,
      weight: 600,
      lh: 1.25
    }, {
      name: 'H4 · 28px · Semibold',
      size: 28,
      weight: 600,
      lh: 1.3
    }, {
      name: 'H5 · 24px · Semibold',
      size: 24,
      weight: 600,
      lh: 1.33
    }, {
      name: 'H6 · 20px · Bold',
      size: 20,
      weight: 700,
      lh: 1.4
    }, {
      name: 'H7 · 16px · Bold',
      size: 16,
      weight: 700,
      lh: 1.5
    }].map(({
      name,
      size,
      weight,
      lh
    }) => <div key={name}>
          <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 24,
        padding: '12px 0'
      }}>
            <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: size,
          fontWeight: weight,
          lineHeight: lh,
          color: '#1b1b1b',
          flex: 1
        }}>
              The quick brown fox
            </span>
            <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11,
          color: '#a4a4a4',
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}>{name}</span>
          </div>
          {divider()}
        </div>)}

      {label('Body')}
      {[{
      name: 'Body Large · 16px · Medium',
      size: 16,
      weight: 500,
      lh: 1.5
    }, {
      name: 'Body Large · 16px · Semibold',
      size: 16,
      weight: 600,
      lh: 1.5
    }, {
      name: 'Body Large · 16px · Bold',
      size: 16,
      weight: 700,
      lh: 1.5
    }, {
      name: 'Body Small · 14px · Medium',
      size: 14,
      weight: 500,
      lh: 1.43
    }, {
      name: 'Body Small · 14px · Semibold',
      size: 14,
      weight: 600,
      lh: 1.43
    }, {
      name: 'Body Small · 14px · Bold',
      size: 14,
      weight: 700,
      lh: 1.43
    }, {
      name: 'Body XS · 12px · Medium',
      size: 12,
      weight: 500,
      lh: 1.5
    }, {
      name: 'Body XS · 12px · Semibold',
      size: 12,
      weight: 600,
      lh: 1.5
    }, {
      name: 'Body XS · 12px · Bold',
      size: 12,
      weight: 700,
      lh: 1.5
    }].map(({
      name,
      size,
      weight,
      lh
    }) => <div key={name}>
          <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 24,
        padding: '10px 0'
      }}>
            <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: size,
          fontWeight: weight,
          lineHeight: lh,
          color: '#1b1b1b',
          flex: 1
        }}>
              The quick brown fox jumps over the lazy dog
            </span>
            <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11,
          color: '#a4a4a4',
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}>{name}</span>
          </div>
          {divider()}
        </div>)}

      {label('Overline')}
      {[{
      name: 'Overline · 12px · Semibold · Uppercase',
      size: 12,
      weight: 600,
      upper: true
    }, {
      name: 'Overline · 12px · Bold · Uppercase',
      size: 12,
      weight: 700,
      upper: true
    }].map(({
      name,
      size,
      weight,
      upper
    }) => <div key={name}>
          <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 24,
        padding: '10px 0'
      }}>
            <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: size,
          fontWeight: weight,
          lineHeight: 1.33,
          letterSpacing: '0.06em',
          textTransform: upper ? 'uppercase' : undefined,
          color: '#1b1b1b',
          flex: 1
        }}>
              Section Label
            </span>
            <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11,
          color: '#a4a4a4',
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}>{name}</span>
          </div>
          {divider()}
        </div>)}
    </div>
}`,...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,g,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 8,
    display: 'flex',
    gap: 48
  }}>
      {[{
      label: 'Regular',
      weight: 400,
      token: '--sds-weight-regular'
    }, {
      label: 'Medium',
      weight: 500,
      token: '--sds-weight-medium'
    }, {
      label: 'Semibold',
      weight: 600,
      token: '--sds-weight-semibold'
    }, {
      label: 'Bold',
      weight: 700,
      token: '--sds-weight-bold'
    }].map(({
      label: l,
      weight,
      token
    }) => <div key={weight} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
          <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 24,
        fontWeight: weight,
        color: '#1b1b1b'
      }}>Aa</span>
          <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 13,
        fontWeight: 600,
        color: '#1b1b1b'
      }}>{l}</span>
          <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        color: '#767676'
      }}>{weight}</span>
          <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 10,
        color: '#a4a4a4'
      }}>{token}</span>
        </div>)}
    </div>
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const c=["TypeScale","FontWeights"];export{t as FontWeights,l as TypeScale,c as __namedExportsOrder,S as default};
