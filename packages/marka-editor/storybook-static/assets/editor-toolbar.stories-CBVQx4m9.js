import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as p,R as w}from"./index-DJO9vBfz.js";const H=(r,o)=>{const i=p.useRef(r);return p.useEffect(()=>{i.current!==r&&o&&o(r),i.current=r},[r,o]),{render:r}},a=({children:r,orientation:o="horizontal",visible:i=!0,onVisibleChange:R,...G})=>{const{render:S}=H(i,R);return S?e.jsx("div",{role:"toolbar","data-orientation":o,"aria-orientation":o,...G,children:r}):null};a.__docgenInfo={description:"",methods:[],displayName:"EditorToolbar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onVisibleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(visible: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"visible"}],return:{name:"void"}}},description:""}}};const q={title:"MKEditor/EditorToolbar",component:a,argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"Direction to which toolbar groups will be rendered"},visible:{control:"boolean",description:"Visibility of toolbar"},onVisibleChange:{action:"visibilityChanged",description:"Functions called when the toolbar's visibility state changes"}},tags:["autodocs"]},t=({label:r})=>e.jsx("button",{style:{margin:"0 2px",padding:"5px 10px"},children:r}),u=()=>e.jsxs("div",{style:{flexDirection:"column"},children:[e.jsx(t,{label:"Bold"}),e.jsx(t,{label:"Italic"}),e.jsx(t,{label:"Underline"})]}),z=()=>e.jsxs("div",{style:{flexDirection:"column"},children:[e.jsx(t,{label:"Left"}),e.jsx(t,{label:"Center"}),e.jsx(t,{label:"Right"})]}),s={render:r=>e.jsx(a,{...r,children:e.jsx(u,{})})},n={render:r=>e.jsxs(a,{...r,children:[e.jsx(u,{}),e.jsx(z,{})]}),args:{orientation:"vertical"}},l={render:r=>e.jsx(a,{...r,children:e.jsx(u,{})}),args:{visible:!1}},c={render:r=>e.jsxs(a,{...r,children:[e.jsxs("select",{style:{margin:"0 2px"},children:[e.jsx("option",{children:"Paragraph"}),e.jsx("option",{children:"H1"}),e.jsx("option",{children:"H2"})]}),e.jsx(t,{label:"Link"}),e.jsx(t,{label:"Image"})]})},d={render:r=>{const[o,i]=w.useState(!0);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>i(!o),style:{margin:"4px 2px"},children:"Toggle Toolbar Visibility"}),e.jsx(a,{...r,visible:o,onVisibleChange:i,children:e.jsx(u,{})})]})}};var m,b,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <EditorToolbar {...args}>
      <DummyToolbarTextGroup />
    </EditorToolbar>
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,T,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <EditorToolbar {...args}>
      <DummyToolbarTextGroup />
      <DummyToolbarLayoutGroup />
    </EditorToolbar>,
  args: {
    orientation: 'vertical'
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var h,j,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <EditorToolbar {...args}>
      <DummyToolbarTextGroup />
    </EditorToolbar>,
  args: {
    visible: false
  }
}`,...(f=(j=l.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var v,V,E;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <EditorToolbar {...args}>
      <select style={{
      margin: '0 2px'
    }}>
        <option>Paragraph</option>
        <option>H1</option>
        <option>H2</option>
      </select>
      <DummyToolbarItem label="Link" />
      <DummyToolbarItem label="Image" />
    </EditorToolbar>
}`,...(E=(V=c.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var D,C,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [isVisible, setIsVisible] = React.useState(true);
    return <div>
        <button onClick={() => setIsVisible(!isVisible)} style={{
        margin: '4px 2px'
      }}>
          Toggle Toolbar Visibility
        </button>
        <EditorToolbar {...args} visible={isVisible} onVisibleChange={setIsVisible}>
          <DummyToolbarTextGroup />
        </EditorToolbar>
      </div>;
  }
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const _=["Default","VerticalOrientation","Hidden","WithCustomContent","ToggleVisibility"];export{s as Default,l as Hidden,d as ToggleVisibility,n as VerticalOrientation,c as WithCustomContent,_ as __namedExportsOrder,q as default};
