import{j as $}from"./jsx-runtime-D_zvdyIk.js";const h=({label:x,onClick:O,variant:L="primary",size:P="medium",color:j,backgroundColor:E})=>{const _=`btn ${L} ${P}`;return $.jsx("button",{className:_,onClick:O,style:{color:j||void 0,backgroundColor:E||void 0},children:x})},R={title:"Components/Button",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"},color:{control:"color"},backgroundColor:{control:"color"},variant:{control:"radio",options:["primary","secondary","outline"]},size:{control:"radio",options:["small","medium","large"]}}},r={args:{label:"Primary Button",variant:"primary",size:"medium"}},a={args:{label:"Secondary Button",variant:"secondary",size:"medium"}},o={args:{label:"Outline Button",variant:"outline",size:"medium"}},e={args:{label:"Large Button",variant:"primary",size:"large"}},n={args:{label:"Small Button",variant:"primary",size:"small"}},s={args:{label:"Custom Color",variant:"primary",size:"medium",color:"#8e44ad",backgroundColor:"#f1c40f"}};var t,i,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium'
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Outline Button',
    variant: 'outline',
    size: 'medium'
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,b,v;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large'
  }
}`,...(v=(b=e.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,S,z;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small'
  }
}`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var B,f,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color',
    variant: 'primary',
    size: 'medium',
    color: '#8e44ad',
    backgroundColor: '#f1c40f'
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const T=["Primary","Secondary","Outline","Large","Small","CustomColor"];export{s as CustomColor,e as Large,o as Outline,r as Primary,a as Secondary,n as Small,T as __namedExportsOrder,R as default};
