import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as b,R as L}from"./index-DJO9vBfz.js";const k=(r,o)=>{const t=b.useRef(r);return b.useEffect(()=>{t.current!==r&&o&&o(r),t.current=r},[r,o]),{render:r}},q=(r,o)=>{const{style:t,...p}=o;return{style:{...r,...t},otherProps:p}},s=({children:r,orientation:o="horizontal",visible:t=!0,onVisibleChange:p,...m})=>{const w={display:"flex",flexDirection:o==="horizontal"?"row":"column",gap:"2px"},{style:G,otherProps:z}=q(w,m),{render:H}=k(t,p);return H?e.jsx("div",{role:"toolbar","data-orientation":o,"aria-orientation":o,style:G,...z,children:r}):null};s.__docgenInfo={description:"",methods:[],displayName:"EditorToolbar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onVisibleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(visible: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"visible"}],return:{name:"void"}}},description:""}}};const O={title:"MKEditor/EditorToolbar",component:s,argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"Direction to which toolbar groups will be rendered"},visible:{control:"boolean",description:"Visibility of toolbar"},onVisibleChange:{action:"visibilityChanged",description:"Functions called when the toolbar's visibility state changes"}},tags:["autodocs"]},i=({label:r})=>e.jsx("button",{style:{margin:"0 2px",padding:"5px 10px"},children:r}),u=()=>e.jsxs("div",{style:{flexDirection:"column"},children:[e.jsx(i,{label:"Bold"}),e.jsx(i,{label:"Italic"}),e.jsx(i,{label:"Underline"})]}),P=()=>e.jsxs("div",{style:{flexDirection:"column"},children:[e.jsx(i,{label:"Left"}),e.jsx(i,{label:"Center"}),e.jsx(i,{label:"Right"})]}),a={render:r=>e.jsx(s,{...r,children:e.jsx(u,{})})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(u,{}),e.jsx(P,{})]}),args:{orientation:"vertical"}},l={render:r=>e.jsx(s,{...r,children:e.jsx(u,{})}),args:{visible:!1}},c={render:r=>e.jsxs(s,{...r,children:[e.jsxs("select",{style:{margin:"0 2px"},children:[e.jsx("option",{children:"Paragraph"}),e.jsx("option",{children:"H1"}),e.jsx("option",{children:"H2"})]}),e.jsx(i,{label:"Link"}),e.jsx(i,{label:"Image"})]})},d={render:r=>{const[o,t]=L.useState(!0);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>t(!o),style:{margin:"4px 2px"},children:"Toggle Toolbar Visibility"}),e.jsx(s,{...r,visible:o,onVisibleChange:t,children:e.jsx(u,{})})]})}};var g,x,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <EditorToolbar {...args}>
      <DummyToolbarTextGroup />
    </EditorToolbar>
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,h,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <EditorToolbar {...args}>
      <DummyToolbarTextGroup />
      <DummyToolbarLayoutGroup />
    </EditorToolbar>,
  args: {
    orientation: 'vertical'
  }
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,v,V;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <EditorToolbar {...args}>
      <DummyToolbarTextGroup />
    </EditorToolbar>,
  args: {
    visible: false
  }
}`,...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var E,D,C;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(D=c.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var I,R,S;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(R=d.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const W=["Default","VerticalOrientation","Hidden","WithCustomContent","ToggleVisibility"];export{a as Default,l as Hidden,d as ToggleVisibility,n as VerticalOrientation,c as WithCustomContent,W as __namedExportsOrder,O as default};
