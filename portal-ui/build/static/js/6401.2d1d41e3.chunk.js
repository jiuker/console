(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6401,2112],{59114:function(e,t,n){"use strict";var a=n(4942),o=n(1413),r=(n(72791),n(63466)),c=n(74900),i=n(27391),s=n(25787),l=n(11135),u=n(23814),d=n(80184);t.Z=(0,s.Z)((function(e){return(0,l.Z)({searchField:(0,o.Z)({},u.qg.searchField),adornment:{}})}))((function(e){var t=e.placeholder,n=void 0===t?"":t,o=e.classes,s=e.onChange,l=e.adornmentPosition,u=void 0===l?"end":l,p=e.overrideClass,m=e.value,v=(0,a.Z)({disableUnderline:!0},"".concat(u,"Adornment"),(0,d.jsx)(r.Z,{position:u,className:o.adornment,children:(0,d.jsx)(c.Z,{})}));return(0,d.jsx)(i.Z,{placeholder:n,className:p||o.searchField,id:"search-resource",label:"",InputProps:v,onChange:function(e){s(e.target.value)},variant:"standard",value:m})}))},54120:function(e,t,n){"use strict";n.r(t);var a=n(29439),o=n(1413),r=n(72791),c=n(26181),i=n.n(c),s=n(61889),l=n(11135),u=n(25787),d=n(23814),p=n(25469),m=n(87995),v=n(81207),h=n(92983),f=n(32112),Z=n(32291),x=n(74794),C=n(59114),b=n(80184);t.default=(0,u.Z)((function(e){return(0,l.Z)((0,o.Z)((0,o.Z)((0,o.Z)({tableWrapper:{height:"calc(100vh - 150px)"}},d.OR),d.qg),(0,d.Bz)(e.spacing(4))))}))((function(e){var t=e.classes,n=(0,p.TL)(),c=(0,r.useState)([]),l=(0,a.Z)(c,2),u=l[0],d=l[1],j=(0,r.useState)(""),g=(0,a.Z)(j,2),k=g[0],y=g[1],P=(0,r.useState)(!0),z=(0,a.Z)(P,2),S=z[0],V=z[1],w=(0,r.useState)(null),I=(0,a.Z)(w,2),M=I[0],F=I[1],H=(0,r.useState)(!1),L=(0,a.Z)(H,2),N=L[0],O=L[1];(0,r.useEffect)((function(){S&&v.Z.invoke("GET","/api/v1/list-pvcs").then((function(e){var t=i()(e,"pvcs",[]);d(t||[]),V(!1)})).catch((function(e){V(!1),n((0,m.Ih)(e))}))}),[S,n]);var D=u.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})),E=[{type:"delete",onClick:function(e){var t=(0,o.Z)((0,o.Z)({},e),{},{tenant:e.tenant,namespace:e.namespace});F(t),O(!0)}}];return(0,b.jsxs)(r.Fragment,{children:[N&&(0,b.jsx)(f.default,{deleteOpen:N,selectedPVC:M,closeDeleteModalAndRefresh:function(e){O(!1),V(!0)}}),(0,b.jsx)(Z.Z,{label:"Persistent Volumes Claims",middleComponent:(0,b.jsx)(C.Z,{placeholder:"Search Volumes (PVCs)",onChange:function(e){y(e)},value:k})}),(0,b.jsx)(x.Z,{children:(0,b.jsx)(s.ZP,{item:!0,xs:12,children:(0,b.jsx)(h.Z,{itemActions:E,columns:[{label:"Name",elementKey:"name"},{label:"Namespace",elementKey:"namespace",width:90},{label:"Status",elementKey:"status",width:120},{label:"Tenant",renderFullObject:!0,renderFunction:function(e){return"".concat(e.namespace,"/").concat(e.tenant)}},{label:"Capacity",elementKey:"capacity",width:90},{label:"Storage Class",elementKey:"storageClass"}],isLoading:S,records:D,entityName:"PVCs",idField:"name",customPaperHeight:t.tableWrapper})})})]})}))},32112:function(e,t,n){"use strict";n.r(t);var a=n(29439),o=n(72791),r=n(51691),c=n(21435),i=n(61889),s=n(9505),l=n(23508),u=n(56096),d=n(87995),p=n(25469),m=n(80184);t.default=function(e){var t=e.deleteOpen,n=e.selectedPVC,v=e.closeDeleteModalAndRefresh,h=(0,p.TL)(),f=(0,o.useState)(""),Z=(0,a.Z)(f,2),x=Z[0],C=Z[1],b=(0,s.Z)((function(){return v(!0)}),(function(e){return h((0,d.Ih)(e))})),j=(0,a.Z)(b,2),g=j[0],k=j[1];return(0,m.jsx)(l.Z,{title:"Delete PVC",confirmText:"Delete",isOpen:t,titleIcon:(0,m.jsx)(u.NvT,{}),isLoading:g,onConfirm:function(){x===n.name?k("DELETE","/api/v1/namespaces/".concat(n.namespace,"/tenants/").concat(n.tenant,"/pvc/").concat(n.name)):h((0,d.Ih)({errorMessage:"PVC name is incorrect",detailedError:""}))},onClose:function(){return v(!1)},confirmButtonProps:{disabled:x!==n.name||g},confirmationContent:(0,m.jsxs)(r.Z,{children:["To continue please type ",(0,m.jsx)("b",{children:n.name})," in the box.",(0,m.jsx)(i.ZP,{item:!0,xs:12,children:(0,m.jsx)(c.Z,{id:"retype-PVC",name:"retype-PVC",onChange:function(e){C(e.target.value)},label:"",value:x})})]})})}},26759:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var o=a(n(45649)),r=n(80184),c=(0,o.default)((0,r.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.Z=c},70366:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var o=a(n(45649)),r=n(80184),c=(0,o.default)((0,r.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");t.Z=c},97911:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var o=a(n(45649)),r=n(80184),c=(0,o.default)((0,r.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");t.Z=c},94454:function(e,t,n){"use strict";n.d(t,{Z:function(){return V}});var a=n(4942),o=n(63366),r=n(87462),c=n(72791),i=n(28182),s=n(94419),l=n(12065),u=n(97278),d=n(76189),p=n(80184),m=(0,d.Z)((0,p.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=n(14036),Z=n(31402),x=n(66934),C=n(75878),b=n(21217);function j(e){return(0,b.Z)("MuiCheckbox",e)}var g=(0,C.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=(0,x.ZP)(u.Z,{shouldForwardProp:function(e){return(0,x.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,f.Z)(n.color))]]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,r.Z)({color:(n.vars||n).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===o.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===o.color?n.palette.action.active:n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},(0,a.Z)(t,"&.".concat(g.checked,", &.").concat(g.indeterminate),{color:(n.vars||n).palette[o.color].main}),(0,a.Z)(t,"&.".concat(g.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),P=(0,p.jsx)(v,{}),z=(0,p.jsx)(m,{}),S=(0,p.jsx)(h,{}),V=c.forwardRef((function(e,t){var n,a,l=(0,Z.Z)({props:e,name:"MuiCheckbox"}),u=l.checkedIcon,d=void 0===u?P:u,m=l.color,v=void 0===m?"primary":m,h=l.icon,x=void 0===h?z:h,C=l.indeterminate,b=void 0!==C&&C,g=l.indeterminateIcon,V=void 0===g?S:g,w=l.inputProps,I=l.size,M=void 0===I?"medium":I,F=l.className,H=(0,o.Z)(l,k),L=b?V:x,N=b?V:d,O=(0,r.Z)({},l,{color:v,indeterminate:b,size:M}),D=function(e){var t=e.classes,n=e.indeterminate,a=e.color,o={root:["root",n&&"indeterminate","color".concat((0,f.Z)(a))]},c=(0,s.Z)(o,j,t);return(0,r.Z)({},t,c)}(O);return(0,p.jsx)(y,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":b},w),icon:c.cloneElement(L,{fontSize:null!=(n=L.props.fontSize)?n:M}),checkedIcon:c.cloneElement(N,{fontSize:null!=(a=N.props.fontSize)?a:M}),ownerState:O,ref:t,className:(0,i.Z)(D.root,F)},H,{classes:D}))}))},26769:function(e,t,n){var a=n(39066),o=n(93629),r=n(43141);e.exports=function(e){return"string"==typeof e||!o(e)&&r(e)&&"[object String]"==a(e)}}}]);
//# sourceMappingURL=6401.2d1d41e3.chunk.js.map