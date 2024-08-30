import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{E as r}from"./editor-root-QTBgV_c_.js";import"./index-DJO9vBfz.js";import"./EditorRootContextProvider-B_5zPgiO.js";const a=()=>t.jsx("div",{style:{background:"#f0f0f0",padding:"10px"},children:"Toolbar"}),d=({content:o})=>t.jsx("div",{style:{border:"1px solid #ccc",padding:"10px",minHeight:"100px"},children:o}),f={title:"MKEditor/EditorRoot",component:r,argTypes:{initialContent:{control:"text"},className:{control:"text"},style:{control:"object"}},tags:["autodocs"]},e={render:o=>t.jsxs(r,{...o,children:[t.jsx(a,{}),t.jsx(d,{content:o.initialContent||"# Welcome to the Editor"})]}),args:{initialContent:"Default Editor"}},n={render:o=>t.jsxs(r,{...o,children:[t.jsx(a,{}),t.jsx(d,{content:o.initialContent||"## Styled Editor"})]}),args:{initialContent:"## Styled Editor",className:"custom-editor-class"}},s={render:o=>t.jsxs(r,{...o,children:[t.jsx(a,{}),t.jsx(d,{content:o.initialContent||"### Editor with Custom Style"})]}),args:{initialContent:"### Editor with Custom Style",style:{border:"2px solid blue",borderRadius:"8px",padding:"16px"}}},i={render:o=>t.jsxs(r,{...o,children:[t.jsx(a,{}),t.jsx(d,{content:"Start typing here..."})]}),args:{initialContent:""}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <EditorRoot {...args}>
      <DummyToolbar />
      <DummyContent content={args.initialContent || '# Welcome to the Editor'} />
    </EditorRoot>,
  args: {
    initialContent: 'Default Editor'
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <EditorRoot {...args}>
      <DummyToolbar />
      <DummyContent content={args.initialContent || '## Styled Editor'} />
    </EditorRoot>,
  args: {
    initialContent: '## Styled Editor',
    className: 'custom-editor-class'
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,y,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <EditorRoot {...args}>
      <DummyToolbar />
      <DummyContent content={args.initialContent || '### Editor with Custom Style'} />
    </EditorRoot>,
  args: {
    initialContent: '### Editor with Custom Style',
    style: {
      border: '2px solid blue',
      borderRadius: '8px',
      padding: '16px'
    }
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var E,h,j;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <EditorRoot {...args}>
      <DummyToolbar />
      <DummyContent content="Start typing here..." />
    </EditorRoot>,
  args: {
    initialContent: ''
  }
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const T=["Default","WithCustomClass","WithCustomStyle","EmptyEditor"];export{e as Default,i as EmptyEditor,n as WithCustomClass,s as WithCustomStyle,T as __namedExportsOrder,f as default};
