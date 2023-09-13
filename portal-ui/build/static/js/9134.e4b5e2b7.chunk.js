"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9134],{58400:function(e,n,t){var i=t(93433),l=t(29439),s=t(72791),c=t(29945),o=t(21639),r=t(59114),u=t(87995),a=t(81551),d=t(74616),f=t(78687),h=t(31776),v=t(80184);n.Z=function(e){var n=e.noTitle,t=void 0!==n&&n,x=(0,a.TL)(),p=(0,s.useState)([]),j=(0,l.Z)(p,2),m=j[0],g=j[1],b=(0,s.useState)(!1),Z=(0,l.Z)(b,2),y=Z[0],S=Z[1],k=(0,s.useState)(""),P=(0,l.Z)(k,2),C=P[0],w=P[1],z=(0,f.v9)((function(e){return e.createUser.selectedPolicies})),A=(0,s.useCallback)((function(){S(!0),h.h.policies.listPolicies().then((function(e){var n,t=null!==(n=e.data.policies)&&void 0!==n?n:[];S(!1),g(t.sort(o.g4))})).catch((function(e){S(!1),x((0,u.zb)(e))}))}),[x]);(0,s.useEffect)((function(){S(!0)}),[]),(0,s.useEffect)((function(){y&&A()}),[y,A]);var L=m.filter((function(e){return e.name.includes(C)}));return(0,v.jsxs)(c.rjZ,{item:!0,xs:12,className:"inputItem",children:[y&&(0,v.jsx)(c.kod,{}),m.length>0?(0,v.jsxs)(s.Fragment,{children:[(0,v.jsx)(c.rjZ,{item:!0,xs:12,className:"inputItem",children:(0,v.jsx)(r.Z,{placeholder:"Start typing to search for a Policy",onChange:function(e){w(e)},value:C,label:t?"":"Assign Policies"})}),(0,v.jsx)(c.wQF,{columns:[{label:"Policy",elementKey:"name"}],onSelect:function(e){var n=e.target,t=n.value,l=n.checked,s=(0,i.Z)(z);l?s.push(t):s=s.filter((function(e){return e!==t})),s=s.filter((function(e){return""!==e})),x((0,d.ue)(s))},selectedItems:z,isLoading:y,records:L,entityName:"Policies",idField:"name",customPaperHeight:"200px"})]}):(0,v.jsx)(c.xuv,{sx:{textAlign:"center",padding:"10px 0"},children:"No Policies Available"})]})}},39134:function(e,n,t){t.r(n);var i=t(29439),l=t(72791),s=t(26181),c=t.n(s),o=t(78687),r=t(29945),u=t(45248),a=t(87995),d=t(81551),f=t(23814),h=t(74616),v=t(56028),x=t(58400),p=t(81207),j=t(80184);n.default=function(e){var n=e.closeModalAndRefresh,t=e.selectedUser,s=e.selectedGroups,m=e.open,g=(0,d.TL)(),b=(0,l.useState)(!1),Z=(0,i.Z)(b,2),y=Z[0],S=Z[1],k=(0,l.useState)([]),P=(0,i.Z)(k,2),C=P[0],w=P[1],z=(0,l.useState)([]),A=(0,i.Z)(z,2),L=A[0],T=A[1],U=(0,o.v9)((function(e){return e.createUser.selectedPolicies}));(0,l.useEffect)((function(){if(m){if(1===(null===s||void 0===s?void 0:s.length))return void(1===(null===s||void 0===s?void 0:s.length)&&p.Z.invoke("GET","/api/v1/group/".concat((0,u.LL)(s[0]))).then((function(e){var n=c()(e,"policy","");w(n.split(",")),T(n.split(",")),g((0,h.ue)(n.split(",")))})).catch((function(e){g((0,a.zb)(e)),S(!1)})));var e=c()(t,"policy",[]);w(e),T(e),g((0,h.ue)(e))}}),[m,null===s||void 0===s?void 0:s.length,t]);var E=c()(t,"accessKey","");return(0,j.jsxs)(v.Z,{onClose:function(){n()},modalOpen:m,title:"Set Policies",children:[(0,j.jsxs)(r.ltY,{withBorders:!1,containerPadding:!1,children:[(1===(null===s||void 0===s?void 0:s.length)||null!=t)&&(0,j.jsxs)(l.Fragment,{children:[(0,j.jsx)(r.bSr,{label:"Selected ".concat(null!==s?"Group":"User"),sx:{width:"100%"},children:null!==s?s[0]:E}),(0,j.jsx)(r.bSr,{label:"Current Policy",sx:{width:"100%"},children:C.join(", ")})]}),s&&(null===s||void 0===s?void 0:s.length)>1&&(0,j.jsx)(r.bSr,{label:"Selected Groups",sx:{width:"100%"},children:s.join(", ")}),(0,j.jsx)(r.rjZ,{item:!0,xs:12,children:(0,j.jsx)(x.Z,{selectedPolicy:L})})]}),(0,j.jsxs)(r.rjZ,{item:!0,xs:12,sx:f.ID.modalButtonBar,children:[(0,j.jsx)(r.zxk,{id:"reset",type:"button",variant:"regular",onClick:function(){T(C),g((0,h.ue)(C))},label:"Reset"}),(0,j.jsx)(r.zxk,{id:"save",type:"button",variant:"callAction",color:"primary",disabled:y,onClick:function(){var e=null,i=null;null!==s?i=s:null!==t&&(e=[t.accessKey]||0),S(!0),p.Z.invoke("PUT","/api/v1/set-policy-multi",{name:U,groups:i,users:e}).then((function(){S(!1),n()})).catch((function(e){S(!1),g((0,a.zb)(e))}))},label:"Save"})]}),y&&(0,j.jsx)(r.rjZ,{item:!0,xs:12,children:(0,j.jsx)(r.kod,{})})]})}}}]);
//# sourceMappingURL=9134.e4b5e2b7.chunk.js.map