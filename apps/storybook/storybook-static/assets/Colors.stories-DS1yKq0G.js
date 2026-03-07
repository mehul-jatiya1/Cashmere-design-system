import{j as e}from"./jsx-runtime-DFAAy_2V.js";import"./index-Bc2G9s8g.js";const h={title:"Foundations/Colors",parameters:{layout:"padded"}},l=n=>e.jsx("h3",{style:{fontFamily:"DM Sans, sans-serif",fontSize:11,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"#767676",margin:"24px 0 8px"},children:n}),a=({name:n,value:t,light:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,width:80},children:[e.jsx("div",{style:{width:80,height:48,borderRadius:6,background:t,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:10,fontWeight:600,color:"#1b1b1b",lineHeight:1.4},children:n}),e.jsx("span",{style:{fontFamily:"DM Sans, sans-serif",fontSize:10,color:"#767676",lineHeight:1.4},children:t})]}),f=({children:n})=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:n}),s={render:()=>e.jsxs("div",{style:{padding:8},children:[l("Neutral"),e.jsx(f,{children:[["0","#000000"],["50","#1b1b1b"],["100","#323232"],["200","#494949"],["300","#5f5f5f"],["400","#767676"],["500","#8d8d8d"],["600","#a4a4a4"],["700","#bbbbbb"],["800","#d1d1d1"],["900","#e8e8e8"],["950","#f2f2f2"],["1000","#fffffc"]].map(([n,t])=>e.jsx(a,{name:`neutral-${n}`,value:t},n))}),l("Accent (Brand Blue)"),e.jsx(f,{children:[["50","#e5edff"],["100","#ccdaff"],["200","#9eb9ff"],["300","#6b95ff"],["400","#3870ff"],["500","#094eff"],["600","#003bd1"],["700","#002c9e"],["800","#001e6b"],["900","#000e33"],["950","#00071a"]].map(([n,t])=>e.jsx(a,{name:`accent-${n}`,value:t},n))}),l("Positive (Success)"),e.jsx(f,{children:[["50","#dcffe9"],["100","#89f2af"],["200","#6adc96"],["300","#4ac77f"],["400","#04ab61"],["500","#009b54"],["600","#008641"],["700","#007030"],["800","#005b21"],["900","#004614"],["950","#00280b"]].map(([n,t])=>e.jsx(a,{name:`positive-${n}`,value:t},n))}),l("Negative (Error)"),e.jsx(f,{children:[["50","#ffe0e0"],["100","#ffbdbd"],["200","#ff7a7a"],["300","#ff3d3d"],["400","#fa0000"],["500","#b80000"],["600","#940000"],["700","#700000"],["800","#470000"],["900","#240000"],["950","#140000"]].map(([n,t])=>e.jsx(a,{name:`negative-${n}`,value:t},n))}),l("Warning"),e.jsx(f,{children:[["50","#fff7e6"],["100","#fef0d2"],["200","#fddfa0"],["300","#fdcf73"],["400","#fcc045"],["500","#fbb016"],["600","#d89204"],["700","#a06d03"],["800","#694702"],["900","#372501"],["950","#191100"]].map(([n,t])=>e.jsx(a,{name:`warning-${n}`,value:t},n))})]})},d={render:()=>e.jsxs("div",{style:{padding:8},children:[l("Neutral — Text"),e.jsxs(f,{children:[e.jsx(a,{name:"text-primary",value:"#1b1b1b"}),e.jsx(a,{name:"text-secondary",value:"#494949"}),e.jsx(a,{name:"text-muted",value:"#767676"}),e.jsx(a,{name:"text-disabled",value:"#8d8d8d"}),e.jsx(a,{name:"text-inverse",value:"#fffffc"})]}),l("Neutral — Background"),e.jsxs(f,{children:[e.jsx(a,{name:"bg-default",value:"#fffffc"}),e.jsx(a,{name:"bg-hover",value:"#f2f2f2"}),e.jsx(a,{name:"bg-subtle",value:"#f2f2f2"}),e.jsx(a,{name:"bg-muted",value:"#d1d1d1"}),e.jsx(a,{name:"bg-disabled",value:"#e8e8e8"}),e.jsx(a,{name:"bg-inverse",value:"#1b1b1b"}),e.jsx(a,{name:"bg-inv-subtle",value:"#494949"}),e.jsx(a,{name:"bg-inv-hover",value:"#5f5f5f"})]}),l("Neutral — Border"),e.jsxs(f,{children:[e.jsx(a,{name:"border-default",value:"#1b1b1b"}),e.jsx(a,{name:"border-subtle",value:"#a4a4a4"}),e.jsx(a,{name:"border-strong",value:"#5f5f5f"}),e.jsx(a,{name:"border-muted",value:"#bbbbbb"}),e.jsx(a,{name:"border-light",value:"#e8e8e8"}),e.jsx(a,{name:"border-disabled",value:"#d1d1d1"}),e.jsx(a,{name:"border-inverse",value:"#fffffc"})]}),l("Accent"),e.jsxs(f,{children:[e.jsx(a,{name:"accent-default",value:"#094eff"}),e.jsx(a,{name:"accent-hover",value:"#3870ff"}),e.jsx(a,{name:"accent-pressed",value:"#003bd1"}),e.jsx(a,{name:"accent-subtle",value:"#e5edff"}),e.jsx(a,{name:"accent-disabled",value:"#e8e8e8"})]}),l("Positive"),e.jsxs(f,{children:[e.jsx(a,{name:"positive-default",value:"#009b54"}),e.jsx(a,{name:"positive-hover",value:"#04ab61"}),e.jsx(a,{name:"positive-subtle",value:"#dcffe9"})]}),l("Negative"),e.jsxs(f,{children:[e.jsx(a,{name:"negative-default",value:"#b80000"}),e.jsx(a,{name:"negative-hover",value:"#fa0000"}),e.jsx(a,{name:"negative-subtle",value:"#ffe0e0"})]}),l("Warning"),e.jsxs(f,{children:[e.jsx(a,{name:"warning-default",value:"#d89204"}),e.jsx(a,{name:"warning-hover",value:"#fbb016"}),e.jsx(a,{name:"warning-subtle",value:"#fff7e6"})]}),l("Focus"),e.jsxs(f,{children:[e.jsx(a,{name:"focus-default",value:"#094eff"}),e.jsx(a,{name:"focus-error",value:"#b80000"}),e.jsx(a,{name:"focus-inverse",value:"#5f5f5f"}),e.jsx(a,{name:"focus-subtle",value:"#e8e8e8"})]}),l("Overlay"),e.jsxs(f,{children:[e.jsx(a,{name:"overlay-default",value:"#15151580"}),e.jsx(a,{name:"overlay-elevated",value:"#1515151a"})]})]})};var r,c,u;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 8
  }}>
      {label('Neutral')}
      <Row>
        {[['0', '#000000'], ['50', '#1b1b1b'], ['100', '#323232'], ['200', '#494949'], ['300', '#5f5f5f'], ['400', '#767676'], ['500', '#8d8d8d'], ['600', '#a4a4a4'], ['700', '#bbbbbb'], ['800', '#d1d1d1'], ['900', '#e8e8e8'], ['950', '#f2f2f2'], ['1000', '#fffffc']].map(([n, v]) => <Swatch key={n} name={\`neutral-\${n}\`} value={v} />)}
      </Row>

      {label('Accent (Brand Blue)')}
      <Row>
        {[['50', '#e5edff'], ['100', '#ccdaff'], ['200', '#9eb9ff'], ['300', '#6b95ff'], ['400', '#3870ff'], ['500', '#094eff'], ['600', '#003bd1'], ['700', '#002c9e'], ['800', '#001e6b'], ['900', '#000e33'], ['950', '#00071a']].map(([n, v]) => <Swatch key={n} name={\`accent-\${n}\`} value={v} />)}
      </Row>

      {label('Positive (Success)')}
      <Row>
        {[['50', '#dcffe9'], ['100', '#89f2af'], ['200', '#6adc96'], ['300', '#4ac77f'], ['400', '#04ab61'], ['500', '#009b54'], ['600', '#008641'], ['700', '#007030'], ['800', '#005b21'], ['900', '#004614'], ['950', '#00280b']].map(([n, v]) => <Swatch key={n} name={\`positive-\${n}\`} value={v} />)}
      </Row>

      {label('Negative (Error)')}
      <Row>
        {[['50', '#ffe0e0'], ['100', '#ffbdbd'], ['200', '#ff7a7a'], ['300', '#ff3d3d'], ['400', '#fa0000'], ['500', '#b80000'], ['600', '#940000'], ['700', '#700000'], ['800', '#470000'], ['900', '#240000'], ['950', '#140000']].map(([n, v]) => <Swatch key={n} name={\`negative-\${n}\`} value={v} />)}
      </Row>

      {label('Warning')}
      <Row>
        {[['50', '#fff7e6'], ['100', '#fef0d2'], ['200', '#fddfa0'], ['300', '#fdcf73'], ['400', '#fcc045'], ['500', '#fbb016'], ['600', '#d89204'], ['700', '#a06d03'], ['800', '#694702'], ['900', '#372501'], ['950', '#191100']].map(([n, v]) => <Swatch key={n} name={\`warning-\${n}\`} value={v} />)}
      </Row>
    </div>
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var v,b,o;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 8
  }}>
      {label('Neutral — Text')}
      <Row>
        <Swatch name="text-primary" value="#1b1b1b" />
        <Swatch name="text-secondary" value="#494949" />
        <Swatch name="text-muted" value="#767676" />
        <Swatch name="text-disabled" value="#8d8d8d" />
        <Swatch name="text-inverse" value="#fffffc" />
      </Row>

      {label('Neutral — Background')}
      <Row>
        <Swatch name="bg-default" value="#fffffc" />
        <Swatch name="bg-hover" value="#f2f2f2" />
        <Swatch name="bg-subtle" value="#f2f2f2" />
        <Swatch name="bg-muted" value="#d1d1d1" />
        <Swatch name="bg-disabled" value="#e8e8e8" />
        <Swatch name="bg-inverse" value="#1b1b1b" />
        <Swatch name="bg-inv-subtle" value="#494949" />
        <Swatch name="bg-inv-hover" value="#5f5f5f" />
      </Row>

      {label('Neutral — Border')}
      <Row>
        <Swatch name="border-default" value="#1b1b1b" />
        <Swatch name="border-subtle" value="#a4a4a4" />
        <Swatch name="border-strong" value="#5f5f5f" />
        <Swatch name="border-muted" value="#bbbbbb" />
        <Swatch name="border-light" value="#e8e8e8" />
        <Swatch name="border-disabled" value="#d1d1d1" />
        <Swatch name="border-inverse" value="#fffffc" />
      </Row>

      {label('Accent')}
      <Row>
        <Swatch name="accent-default" value="#094eff" />
        <Swatch name="accent-hover" value="#3870ff" />
        <Swatch name="accent-pressed" value="#003bd1" />
        <Swatch name="accent-subtle" value="#e5edff" />
        <Swatch name="accent-disabled" value="#e8e8e8" />
      </Row>

      {label('Positive')}
      <Row>
        <Swatch name="positive-default" value="#009b54" />
        <Swatch name="positive-hover" value="#04ab61" />
        <Swatch name="positive-subtle" value="#dcffe9" />
      </Row>

      {label('Negative')}
      <Row>
        <Swatch name="negative-default" value="#b80000" />
        <Swatch name="negative-hover" value="#fa0000" />
        <Swatch name="negative-subtle" value="#ffe0e0" />
      </Row>

      {label('Warning')}
      <Row>
        <Swatch name="warning-default" value="#d89204" />
        <Swatch name="warning-hover" value="#fbb016" />
        <Swatch name="warning-subtle" value="#fff7e6" />
      </Row>

      {label('Focus')}
      <Row>
        <Swatch name="focus-default" value="#094eff" />
        <Swatch name="focus-error" value="#b80000" />
        <Swatch name="focus-inverse" value="#5f5f5f" />
        <Swatch name="focus-subtle" value="#e8e8e8" />
      </Row>

      {label('Overlay')}
      <Row>
        <Swatch name="overlay-default" value="#15151580" />
        <Swatch name="overlay-elevated" value="#1515151a" />
      </Row>
    </div>
}`,...(o=(b=d.parameters)==null?void 0:b.docs)==null?void 0:o.source}}};const w=["Primitives","SemanticColors"];export{s as Primitives,d as SemanticColors,w as __namedExportsOrder,h as default};
