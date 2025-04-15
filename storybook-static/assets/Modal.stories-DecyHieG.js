import{j as e}from"./jsx-runtime-D_zvdyIk.js";const t=({open:n,title:o,children:r,onClose:s,width:_="500px"})=>{if(!n)return null;const y=T=>{T.target.classList.contains("modal-backdrop")&&s()};return e.jsx("div",{className:"modal-backdrop",onClick:y,children:e.jsxs("div",{className:"modal-content",style:{width:_},children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h3",{children:o}),e.jsx("button",{className:"modal-close",onClick:s,children:"×"})]}),e.jsx("div",{className:"modal-body",children:r})]})})},{useArgs:i}=__STORYBOOK_MODULE_PREVIEW_API__,D={title:"Components/Modal",component:t,tags:["autodocs"],argTypes:{open:{control:"boolean"},title:{control:"text"},width:{control:"text"}}},a={args:{open:!0,title:"Default Modal",children:"This is a simple modal with some content."},render:n=>{const[o,r]=i(),s=()=>r({open:!1});return e.jsx(t,{...n,onClose:s,children:n.children})}},l={args:{open:!0,title:"Large Modal",width:"700px",children:"This modal has a custom larger width."},render:n=>{const[o,r]=i(),s=()=>r({open:!1});return e.jsx(t,{...n,onClose:s,children:n.children})}},d={args:{open:!0,title:"Modal with Form",children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("label",{children:["Name: ",e.jsx("input",{type:"text"})]}),e.jsxs("label",{children:["Email: ",e.jsx("input",{type:"email"})]}),e.jsx("button",{type:"submit",children:"Submit"})]})},render:n=>{const[o,r]=i(),s=()=>r({open:!1});return e.jsx(t,{...n,onClose:s,children:n.children})}},c={args:{open:!0,title:"",children:"This modal has no title."},render:n=>{const[o,r]=i(),s=()=>r({open:!1});return e.jsx(t,{...n,onClose:s,children:n.children})}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Default Modal',
    children: 'This is a simple modal with some content.'
  },
  render: args => {
    const [_, updateArgs] = useArgs();
    const handleClose = () => updateArgs({
      open: false
    });
    return <Modal {...args} onClose={handleClose}>
        {args.children}
      </Modal>;
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,g,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Large Modal',
    width: '700px',
    children: 'This modal has a custom larger width.'
  },
  render: args => {
    const [_, updateArgs] = useArgs();
    const handleClose = () => updateArgs({
      open: false
    });
    return <Modal {...args} onClose={handleClose}>
        {args.children}
      </Modal>;
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,f,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Modal with Form',
    children: <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <label>
          Name: <input type="text" />
        </label>
        <label>
          Email: <input type="email" />
        </label>
        <button type="submit">Submit</button>
      </form>
  },
  render: args => {
    const [_, updateArgs] = useArgs();
    const handleClose = () => updateArgs({
      open: false
    });
    return <Modal {...args} onClose={handleClose}>
        {args.children}
      </Modal>;
  }
}`,...(M=(f=d.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var b,j,A;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: true,
    title: '',
    children: 'This modal has no title.'
  },
  render: args => {
    const [_, updateArgs] = useArgs();
    const handleClose = () => updateArgs({
      open: false
    });
    return <Modal {...args} onClose={handleClose}>
        {args.children}
      </Modal>;
  }
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const E=["Default","LargeModal","CustomContent","WithoutTitle"];export{d as CustomContent,a as Default,l as LargeModal,c as WithoutTitle,E as __namedExportsOrder,D as default};
