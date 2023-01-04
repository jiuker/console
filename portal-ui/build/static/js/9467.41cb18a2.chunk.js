"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9467],{23804:function(e,t,n){n(72791);var i=n(11135),a=n(25787),s=n(45953),r=n(80184);t.Z=(0,a.Z)((function(e){return(0,i.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,n=e.iconComponent,i=e.title,a=e.help;return(0,r.jsx)("div",{className:t.root,children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,className:t.leftItems,children:[n,i]}),(0,r.jsx)(s.ZP,{item:!0,xs:12,className:t.helpText,children:a})]})})}))},89467:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var i=n(93433),a=n(29439),s=n(1413),r=n(72791),c=n(57689),o=n(75952),l=n(11135),d=n(25787),u=n(89594),h=n(45953),m=n(56096),x=n(23814),f=n(81207),p=n(32291),g=n(4942),Z=n(26181),j=n.n(Z),v=n(4565),b=n(96015),k=n(45248),C=n(34866),y=n(11087),S=n(56087),N=n(38442),P=n(28182),T=n(72455),_=n(80184),w=(0,T.Z)((function(e){return(0,l.Z)({root:{marginBottom:30,padding:20,color:e.palette.primary.main,border:"#E5E5E5 1px solid",borderRadius:2,textDecoration:"none","&:hover":{backgroundColor:"#fafafa"},"& .min-icon":{height:14,width:14},"& .MuiTypography-body2":{fontSize:14},"& .MuiCardHeader-content":{wordWrap:"break-word",overflowWrap:"break-word",wordBreak:"break-all",font:"normal normal bold 24px/27px Lato",color:e.palette.primary.main,"& .MuiTypography-root":{fontSize:19,fontWeight:"bold","& .min-icon":{position:"relative",top:4,marginRight:4,height:"24px !important"}}},"& .MuiCardHeader-root":{background:"transparent linear-gradient(0deg, #EEF1F44E 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box"}},checkBoxElement:{width:32,height:32,float:"left",overflow:"hidden","& div":{position:"absolute"}},manageButton:{borderRadius:4,width:111,color:e.palette.grey[700],textTransform:"unset",fontSize:12,fontWeight:"normal","& .MuiButton-endIcon":{"& .min-icon":{fontSize:18}}},metric:{"& .min-icon":{color:"#000000",width:13,marginRight:5}},metricLabel:{fontSize:14,fontWeight:"bold",color:"#000000"},metricText:{fontSize:24,fontWeight:"bold"},unit:{fontSize:12,fontWeight:"normal"},bucketName:{padding:0,margin:0,fontSize:22},bucketIcon:{"& .min-icon":{height:48,width:48,color:e.palette.primary.main}},bucketInfo:{display:"flex","@media (max-width: 900px)":{flexFlow:"column-reverse"}},bucketStats:{marginTop:15,borderTop:"1px solid rgb(234,234,234, .7)",paddingTop:14},bucketActionButtons:{display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginLeft:8},"@media (max-width: 900px)":{marginTop:"-33px"}},disabled:{backgroundColor:"red"}})})),B=function(e){var t=e.bucket,n=e.onSelect,i=e.selected,a=e.bulkSelect,s=(e.noManage,w()),o=(0,c.s0)(),l=(0,k.ae)("".concat(t.size)||"0"),d=l.split(" ")[0],u=l.split(" ")[1],x=j()(t,"details.quota.quota","0"),f=(0,k.Am)(x,!0,!1),p=(0,N.F)(t.name,S.D[S.EI.BUCKET_ADMIN])&&!1;return(0,_.jsxs)(h.ZP,{container:!0,className:(0,P.Z)(s.root,"bucket-item",(0,g.Z)({},s.disabled,p)),onClick:function(){o("/buckets/".concat(t.name,"/admin"))},sx:{cursor:"pointer"},id:"manageBucket-".concat(t.name),children:[(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsxs)(h.ZP,{container:!0,justifyContent:"space-between",children:[(0,_.jsx)(h.ZP,{item:!0,xs:12,sm:7,children:(0,_.jsxs)(h.ZP,{container:!0,children:[(0,_.jsxs)(h.ZP,{item:!0,xs:12,children:[a&&(0,_.jsx)("div",{className:s.checkBoxElement,onClick:function(e){e.stopPropagation()},children:(0,_.jsx)(C.Z,{checked:i,id:"select-".concat(t.name),label:"",name:"select-".concat(t.name),onChange:function(e){n(e)},value:t.name})}),(0,_.jsxs)("h1",{className:s.bucketName,children:[t.name," ",p]})]}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsxs)(h.ZP,{container:!0,className:s.bucketInfo,children:[(0,_.jsx)(h.ZP,{item:!0,xs:12,sm:!0,paddingRight:5,children:(0,_.jsxs)(v.Z,{variant:"body2",children:["Created: ",new Date(t.creation_date).toString()]})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,sm:!0,children:(0,_.jsxs)(v.Z,{variant:"body2",children:["Access: ",function(e){var t,n,i,a,s,r;return null===(t=e.rw_access)||void 0===t||!t.read||null!==(n=e.rw_access)&&void 0!==n&&n.write?null!==(i=e.rw_access)&&void 0!==i&&i.read||null===(a=e.rw_access)||void 0===a||!a.write?null!==(s=e.rw_access)&&void 0!==s&&s.read&&null!==(r=e.rw_access)&&void 0!==r&&r.write?"R/W":"":"W":"R"}(t)]})})]})})]})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,sm:5,className:s.bucketActionButtons,children:(0,_.jsx)(b.Z,{display:{xs:"none",sm:"block"},children:(0,_.jsx)("div",{style:{marginBottom:10}})})})]})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,className:s.bucketStats,children:(0,_.jsxs)(h.ZP,{container:!0,justifyContent:"flex-start",spacing:4,children:[(0,_.jsx)(h.ZP,{item:!0,className:s.bucketIcon,children:(0,_.jsx)(y.rU,{to:"/buckets/".concat(t.name,"/browse"),children:(0,_.jsx)(m.wNb,{})})}),(0,_.jsxs)(h.ZP,{item:!0,textAlign:"left",className:s.metric,children:[(0,_.jsx)(m.rHZ,{}),(0,_.jsx)("span",{className:s.metricLabel,children:"Usage"}),(0,_.jsxs)("div",{className:s.metricText,children:[d,(0,_.jsx)("span",{className:s.unit,children:u}),"0"!==x&&(0,_.jsxs)(r.Fragment,{children:[" ","/ ",f.total,(0,_.jsx)("span",{className:s.unit,children:f.unit})]})]})]}),(0,_.jsxs)(h.ZP,{item:!0,textAlign:"left",className:s.metric,children:[(0,_.jsx)(m.xpX,{}),(0,_.jsx)("span",{className:s.metricLabel,children:"Objects"}),(0,_.jsx)("div",{className:s.metricText,children:t.objects?(0,k.CE)(t.objects):0})]})]})})]})},E=n(75814),R=n(15146),I=n(98946),F=n(21435),L=n(56028),M=n(64163),z=n(28371),A=n(4819),K=n(90673),D=n(56578),U=n(87995),W=n(25469),O=(0,d.Z)((function(e){return(0,l.Z)((0,s.Z)((0,s.Z)({remoteBucketList:{display:"grid",gridTemplateColumns:"auto auto 45px",alignItems:"center",justifyContent:"stretch"},errorIcon:{color:"#C72C48"},successIcon:{color:"#42C91A"},hide:{opacity:0,transitionDuration:"0.3s"}},x.oO),x.AK))}))((function(e){var t=e.open,n=e.closeModalAndRefresh,s=e.classes,c=e.buckets,o=(0,W.TL)(),l=(0,r.useState)([]),d=(0,a.Z)(l,2),u=d[0],m=d[1],x=(0,r.useState)(!1),p=(0,a.Z)(x,2),g=p[0],Z=p[1],v=(0,r.useState)(!1),b=(0,a.Z)(v,2),C=b[0],y=b[1],S=(0,r.useState)(""),N=(0,a.Z)(S,2),P=N[0],T=N[1],w=(0,r.useState)(""),B=(0,a.Z)(w,2),O=B[0],q=B[1],H=(0,r.useState)(""),G=(0,a.Z)(H,2),Q=G[0],Y=G[1],V=(0,r.useState)(""),X=(0,a.Z)(V,2),$=X[0],J=X[1],ee=(0,r.useState)(!0),te=(0,a.Z)(ee,2),ne=te[0],ie=te[1],ae=(0,r.useState)("async"),se=(0,a.Z)(ae,2),re=se[0],ce=se[1],oe=(0,r.useState)("100"),le=(0,a.Z)(oe,2),de=le[0],ue=le[1],he=(0,r.useState)("Gi"),me=(0,a.Z)(he,2),xe=me[0],fe=me[1],pe=(0,r.useState)("60"),ge=(0,a.Z)(pe,2),Ze=ge[0],je=ge[1],ve=(0,r.useState)([]),be=(0,a.Z)(ve,2),ke=be[0],Ce=be[1],ye=(0,r.useState)([]),Se=(0,a.Z)(ye,2),Ne=Se[0],Pe=Se[1],Te=(0,r.useState)([]),_e=(0,a.Z)(Te,2),we=_e[0],Be=_e[1],Ee=Ne.map((function(e){return{label:e,value:e}}));(0,r.useEffect)((function(){if(0===ke.length){var e=[],t=[];c.forEach((function(n){e.push(n),t.push("")})),Ce(t),m(e)}}),[c,ke.length]);var Re=function(e){var t=e.errString;switch(t){case"":return(0,_.jsx)("div",{className:s.successIcon,children:(0,_.jsx)(I.Z,{})});case"n/a":return null;default:if(t)return(0,_.jsx)("div",{className:s.errorIcon,children:(0,_.jsx)(E.Z,{title:t,placement:"top-start",children:(0,_.jsx)(R.Z,{})})})}return null},Ie=function(e,t){var n=(0,i.Z)(ke);n[e]=t,Ce(n)},Fe=function(e){var t=(0,i.Z)(u),n=(0,i.Z)(ke);e.forEach((function(e){var i=j()(e,"errorString","");if(!i||""===i){var a=t.indexOf(e.originBucket);t.splice(a,1),n.splice(a,1)}})),m(t),Ce(n)};return(0,_.jsx)(L.Z,{modalOpen:t,onClose:function(){n(!1)},title:"Set Multiple Bucket Replication",children:(0,_.jsx)(z.Z,{loadingStep:g||C,wizardSteps:[{label:"Remote Configuration",componentRender:(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(M.Z,{label:"Local Buckets to replicate",content:u.join(", ")})}),(0,_.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,_.jsx)("span",{className:s.descriptionText,children:"Please avoid the use of root credentials for this feature"}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(F.Z,{id:"accessKey",name:"accessKey",onChange:function(e){T(e.target.value)},label:"Access Key",value:P})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(F.Z,{id:"secretKey",name:"secretKey",onChange:function(e){q(e.target.value)},label:"Secret Key",value:O})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(F.Z,{id:"targetURL",name:"targetURL",onChange:function(e){Y(e.target.value)},placeholder:"play.min.io:9000",label:"Target URL",value:Q})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(A.Z,{checked:ne,id:"useTLS",name:"useTLS",label:"Use TLS",onChange:function(e){ie(e.target.checked)},value:"yes"})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(F.Z,{id:"region",name:"region",onChange:function(e){J(e.target.value)},label:"Region",value:$})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(K.Z,{id:"replication_mode",name:"replication_mode",onChange:function(e){ce(e.target.value)},label:"Replication Mode",value:re,options:[{label:"Asynchronous",value:"async"},{label:"Synchronous",value:"sync"}]})}),"async"===re&&(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(F.Z,{type:"number",id:"bandwidth_scalar",name:"bandwidth_scalar",onChange:function(e){e.target.validity.valid&&ue(e.target.value)},label:"Bandwidth",value:de,min:"0",pattern:"[0-9]*",overlayObject:(0,_.jsx)(D.Z,{id:"quota_unit",onUnitChange:function(e){fe(e)},unitSelected:xe,unitsList:(0,k.zQ)(["Ki"]),disabled:!1})})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(F.Z,{id:"healthCheck",name:"healthCheck",onChange:function(e){je(e.target.value)},label:"Health Check Duration",value:Ze})})]}),buttons:[{type:"custom",label:"Next",enabled:!C,action:function(e){var t={accessKey:P,secretKey:O,targetURL:Q,useTLS:ne};y(!0),f.Z.invoke("POST","/api/v1/list-external-buckets",t).then((function(t){var n=j()(t,"buckets",[]);if(n&&n.length>0){var i=n.map((function(e){return e.name}));Pe(i)}e("++"),y(!1)})).catch((function(e){y(!1),o((0,U.zb)(e))}))}}]},{label:"Bucket Assignments",componentRender:(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)("h3",{children:"Remote Bucket Assignments"}),(0,_.jsx)("span",{className:s.descriptionText,children:"Please select / type the desired remote bucket were you want the local data to be replicated."}),(0,_.jsx)("div",{className:s.remoteBucketList,children:u.map((function(e,t){var n,i=function(e){if(we.length>0){var t=we.find((function(t){return t.originBucket===e}));if(t)return j()(t,"errorString","")||""}return"n/a"}(e);return(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)("div",{className:""===i?s.hide:"",children:e}),(0,_.jsx)("div",{className:""===i?s.hide:"",children:(n=t,Ne.length>0?(0,_.jsx)(r.Fragment,{children:(0,_.jsx)(K.Z,{label:"",id:"assign-bucket-".concat(n),name:"assign-bucket-".concat(n),value:ke[n],onChange:function(e){Ie(n,e.target.value)},options:Ee,disabled:g})}):(0,_.jsx)(r.Fragment,{children:(0,_.jsx)(F.Z,{id:"assign-bucket-".concat(n),name:"assign-bucket-".concat(n),label:"",onChange:function(e){Ie(n,e.target.value)},value:ke[n],disabled:g})}))}),(0,_.jsx)("div",{className:""===i?s.hide:"",children:we.length>0&&(0,_.jsx)(Re,{errString:i})})]},"buckets-assignation-".concat(t.toString(),"-").concat(e))}))})]}),buttons:[{type:"back",label:"Back",enabled:!0},{type:"next",label:"Create",enabled:!g,action:function(){Z(!0);var e=u.map((function(e,t){return{originBucket:e,destinationBucket:ke[t]}})),t="".concat(ne?"https://":"http://").concat(Q),i=parseInt(Ze),a={accessKey:P,secretKey:O,targetURL:t,region:$,bucketsRelation:e,syncMode:re,bandwidth:"async"===re?parseInt((0,k.Pw)(de,xe,!0)):0,healthCheckPeriod:i};f.Z.invoke("POST","/api/v1/buckets-replication",a).then((function(e){Z(!1);var t=e.replicationState;Be(t),0===t.filter((function(e){return e.errorString&&""!==e.errorString})).length?n(!0):setTimeout((function(){Fe(t)}),500)})).catch((function(e){Z(!1),o((0,U.zb)(e))}))}}]}],forModal:!0})})})),q=n(23804),H=n(28789),G=n(49818),Q=n(2289),Y=n(74794),V=n(59114),X=n(98994),$=n(83679),J=n(17420),ee=(0,d.Z)((function(e){return(0,l.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({resultGrid:{display:"grid",gridTemplateColumns:"45px auto",alignItems:"center",justifyContent:"stretch"},errorIcon:{paddingTop:5,color:"#C72C48"},successIcon:{paddingTop:5,color:"#42C91A"}},x.bK),x.ID),x.DF),x.QV))}))((function(e){var t=e.open,n=e.closeModalAndRefresh,i=e.classes,c=e.buckets,o=(0,W.TL)(),l=(0,r.useState)(!1),d=(0,a.Z)(l,2),u=d[0],m=d[1],x=(0,r.useState)(!0),p=(0,a.Z)(x,2),g=p[0],Z=p[1],v=(0,r.useState)([]),b=(0,a.Z)(v,2),k=b[0],C=b[1],y=(0,r.useState)(""),S=(0,a.Z)(y,2),N=S[0],P=S[1],T=(0,r.useState)(""),w=(0,a.Z)(T,2),B=w[0],D=w[1],O=(0,r.useState)(""),q=(0,a.Z)(O,2),H=q[0],G=q[1],Q=(0,r.useState)(""),Y=(0,a.Z)(Q,2),V=Y[0],X=Y[1],ee=(0,r.useState)(!1),te=(0,a.Z)(ee,2),ne=te[0],ie=te[1],ae=(0,r.useState)("0"),se=(0,a.Z)(ae,2),re=se[0],ce=se[1],oe=(0,r.useState)("0"),le=(0,a.Z)(oe,2),de=le[0],ue=le[1],he=(0,r.useState)("expiry"),me=(0,a.Z)(he,2),xe=me[0],fe=me[1],pe=(0,r.useState)("0"),ge=(0,a.Z)(pe,2),Ze=ge[0],je=ge[1],ve=(0,r.useState)("0"),be=(0,a.Z)(ve,2),ke=be[0],Ce=be[1],ye=(0,r.useState)(!1),Se=(0,a.Z)(ye,2),Ne=Se[0],Pe=Se[1],Te=(0,r.useState)(null),_e=(0,a.Z)(Te,2),we=_e[0],Be=_e[1];(0,r.useEffect)((function(){g&&f.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){var t=j()(e,"items",[]);if(null!==t&&t.length>=1){var n=t.map((function(e){var t=e.type,n=j()(e,"".concat(t,".name"),"");return{label:n,value:n}}));C(n),n.length>0&&G(n[0].value)}Z(!1)})).catch((function(e){Z(!1),o((0,U.zb)(e))}))}),[g,o]),(0,r.useEffect)((function(){var e=!0;"expiry"!==xe&&""===H&&(e=!1),Pe(e)}),[xe,Ze,ke,H]);var Ee=function(e){var t=e.errString;switch(t){case"":return(0,_.jsx)("div",{className:i.successIcon,children:(0,_.jsx)(I.Z,{})});case"n/a":return null;default:if(t)return(0,_.jsx)("div",{className:i.errorIcon,children:(0,_.jsx)(E.Z,{title:t,placement:"top-start",children:(0,_.jsx)(R.Z,{})})})}return null};return(0,_.jsx)(L.Z,{modalOpen:t,onClose:function(){n(!1)},title:"Set Lifecycle to multiple buckets",children:(0,_.jsx)(z.Z,{loadingStep:u||g,wizardSteps:[{label:"Lifecycle Configuration",componentRender:(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(M.Z,{label:"Local Buckets to replicate",content:c.join(", ")})}),(0,_.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,_.jsx)(h.ZP,{container:!0,children:(0,_.jsxs)(h.ZP,{item:!0,xs:12,className:i.formScrollable,children:[(0,_.jsx)(h.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,_.jsxs)("fieldset",{className:i.fieldGroup,children:[(0,_.jsx)("legend",{className:i.descriptionText,children:"Lifecycle Configuration"}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)($.Z,{currentSelection:xe,id:"quota_type",name:"quota_type",label:"ILM Rule",onChange:function(e){fe(e.target.value)},selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}]})}),"expiry"===xe?(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)(h.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,_.jsx)(F.Z,{type:"number",id:"expiry_days",name:"expiry_days",onChange:function(e){je(e.target.value)},label:"Expiry Days",value:Ze,min:"0"})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,_.jsx)(F.Z,{type:"number",id:"noncurrentversion_expiration_days",name:"noncurrentversion_expiration_days",onChange:function(e){ce(e.target.value)},label:"Non-current Expiration Days",value:re,min:"0"})})]}):(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)(h.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,_.jsx)(F.Z,{type:"number",id:"transition_days",name:"transition_days",onChange:function(e){Ce(e.target.value)},label:"Transition Days",value:ke,min:"0"})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,_.jsx)(F.Z,{type:"number",id:"noncurrentversion_transition_days",name:"noncurrentversion_transition_days",onChange:function(e){ue(e.target.value)},label:"Non-current Transition Days",value:de,min:"0"})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,_.jsx)(F.Z,{id:"noncurrentversion_t_SC",name:"noncurrentversion_t_SC",onChange:function(e){X(e.target.value)},placeholder:"Set Non-current Version Transition Storage Class",label:"Non-current Version Transition Storage Class",value:V})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,_.jsx)(K.Z,{label:"Storage Class",id:"storage_class",name:"storage_class",value:H,onChange:function(e){G(e.target.value)},options:k})})]})]})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,_.jsxs)("fieldset",{className:i.fieldGroup,children:[(0,_.jsx)("legend",{className:i.descriptionText,children:"File Configuration"}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(F.Z,{id:"prefix",name:"prefix",onChange:function(e){P(e.target.value)},label:"Prefix",value:N})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(J.Z,{name:"tags",label:"Tags",elements:B,onChange:function(e){D(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})}),(0,_.jsx)(h.ZP,{item:!0,xs:12,children:(0,_.jsx)(A.Z,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:ne,onChange:function(e){ie(e.target.checked)},label:"Expired Object Delete Marker"})})]})})]})})]}),buttons:[{type:"custom",label:"Create Rules",enabled:!g&&!u&&Ne,action:function(e){var t={};if("expiry"===xe){var n={expiry_days:parseInt(Ze)};t=(0,s.Z)((0,s.Z)({},n),{},{noncurrentversion_expiration_days:parseInt(re)})}else{var i={transition_days:parseInt(ke)};t=(0,s.Z)((0,s.Z)({},i),{},{noncurrentversion_transition_days:parseInt(de),noncurrentversion_transition_storage_class:V,storage_class:H})}var a=(0,s.Z)({buckets:c,type:xe,prefix:N,tags:B,expired_object_delete_marker:ne},t);f.Z.invoke("POST","/api/v1/buckets/multi-lifecycle",a).then((function(t){m(!1),Be(t),e("++")})).catch((function(e){m(!1),o((0,U.zb)(e))}))}}]},{label:"Results",componentRender:(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)("h3",{children:"Multi Bucket lifecycle Assignments Results"}),(0,_.jsx)(h.ZP,{container:!0,children:(0,_.jsxs)(h.ZP,{item:!0,xs:12,className:i.formScrollable,children:[(0,_.jsx)("h4",{children:"Buckets Results"}),null===we||void 0===we?void 0:we.results.map((function(e){return(0,_.jsxs)("div",{className:i.resultGrid,children:[Ee({errString:e.error||""}),(0,_.jsx)("span",{children:e.bucketName})]})}))]})})]}),buttons:[{type:"custom",label:"Done",enabled:!u,action:function(){return n(!0)}}]}],forModal:!0})})})),te=n(49535),ne=n(92177),ie=n(46078),ae=n(73996),se=n(27454),re=n(81806),ce=n(54756),oe=(0,d.Z)((function(e){return(0,l.Z)((0,s.Z)({bulkSelect:{marginLeft:8,"&:hover":{backgroundColor:e.palette.primary.main},"&.MuiButton-contained":{backgroundColor:e.palette.primary.main}},bucketList:{marginTop:25,height:"calc(100vh - 211px)","&.isEmbedded":{height:"calc(100vh - 128px)"}},searchField:(0,s.Z)((0,s.Z)({},x.qg.searchField),{},{minWidth:380,"@media (max-width: 900px)":{minWidth:220}})},(0,x.Bz)(e.spacing(4))))}))((function(e){var t=e.classes,n=(0,W.TL)(),s=(0,c.s0)(),l=(0,r.useState)([]),d=(0,a.Z)(l,2),x=d[0],g=d[1],Z=(0,r.useState)(!0),j=(0,a.Z)(Z,2),v=j[0],b=j[1],k=(0,r.useState)(""),C=(0,a.Z)(k,2),y=C[0],P=C[1],T=(0,r.useState)([]),w=(0,a.Z)(T,2),E=w[0],R=w[1],I=(0,r.useState)(!1),F=(0,a.Z)(I,2),L=F[0],M=F[1],z=(0,r.useState)(!1),A=(0,a.Z)(z,2),K=A[0],D=A[1],$=(0,r.useState)(!1),J=(0,a.Z)($,2),oe=J[0],le=J[1],de=(0,r.useState)(!1),ue=(0,a.Z)(de,2),he=ue[0],me=ue[1],xe=(0,ne.v9)(ie.$4),fe=!(null===xe||void 0===xe||!xe.includes("object-browser-only"));(0,r.useEffect)((function(){if(v){b(!0),f.Z.invoke("GET","/api/v1/buckets").then((function(e){b(!1),g(e.buckets||[]),n((0,ce.Cn)(!0))})).catch((function(e){b(!1),n((0,U.Ih)(e))}))}}),[v,n]);var pe=x.filter((function(e){return""===y||e.name.indexOf(y)>=0})),ge=x.length>0,Ze=function(e){var t=e.target,n=t.value,a=t.checked,s=(0,i.Z)(E);return a?s.push(n):s=s.filter((function(e){return e!==n})),R(s),s};(0,r.useEffect)((function(){var e=!1;E.forEach((function(t){(0,te.Z)(t,S.D[S.EI.BUCKET_LIFECYCLE],!0)?le(!0):e=!0})),le(!e)}),[E]);var je=(0,te.Z)("*",[S.Ft.S3_CREATE_BUCKET]),ve=(0,te.Z)("*",[S.Ft.S3_LIST_BUCKET,S.Ft.S3_ALL_LIST_BUCKET]);return(0,_.jsxs)(r.Fragment,{children:[L&&(0,_.jsx)(O,{open:L,buckets:E,closeModalAndRefresh:function(e){M(!1),e&&R([])}}),K&&(0,_.jsx)(ee,{buckets:E,closeModalAndRefresh:function(e){D(!1),e&&R([])},open:K}),!fe&&(0,_.jsx)(p.Z,{label:"Buckets"}),(0,_.jsxs)(Y.Z,{children:[(0,_.jsxs)(h.ZP,{item:!0,xs:12,className:t.actionsTray,display:"flex",children:[fe&&(0,_.jsx)(h.ZP,{item:!0,xs:!0,children:(0,_.jsx)(ae.Z,{marginRight:15,marginTop:10})}),ge&&(0,_.jsx)(V.Z,{onChange:P,placeholder:"Search Buckets",overrideClass:t.searchField,value:y}),(0,_.jsxs)(h.ZP,{item:!0,xs:12,display:"flex",alignItems:"center",justifyContent:"flex-end",sx:{"& button":{marginLeft:"8px"}},children:[!fe&&(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)(se.Z,{tooltip:ge?he?"Unselect Buckets":"Select Multiple Buckets":"",children:(0,_.jsx)(o.zx,{id:"multiple-bucket-seection",onClick:function(){me(!he),R([])},icon:(0,_.jsx)(Q.Z,{}),variant:he?"callAction":"regular",disabled:!ge})}),he&&(0,_.jsx)(se.Z,{tooltip:ge?E.length===pe.length?"Unselect All Buckets":"Select All Buckets":"",children:(0,_.jsx)(o.zx,{id:"select-all-buckets",onClick:function(){if(E.length!==pe.length){var e=pe.map((function(e){return e.name}));R(e)}else R([])},icon:(0,_.jsx)(m.QQb,{}),variant:"regular"})}),(0,_.jsx)(se.Z,{tooltip:ge?oe?0===E.length?he?"Please select at least one bucket on which to configure Lifecycle":"Use the Select Multiple Buckets button to choose buckets on which to configure Lifecycle":"Set Lifecycle":(0,S.MK)(S.D[S.EI.BUCKET_LIFECYCLE],"configure lifecycle for the selected buckets"):"",children:(0,_.jsx)(o.zx,{id:"set-lifecycle",onClick:function(){D(!0)},icon:(0,_.jsx)(m.QIv,{}),variant:"regular",disabled:0===E.length||!oe})}),(0,_.jsx)(se.Z,{tooltip:ge?0===E.length?he?"Please select at least one bucket on which to configure Replication":"Use the Select Multiple Buckets button to choose buckets on which to configure Replication":"Set Replication":"",children:(0,_.jsx)(o.zx,{id:"set-replication",onClick:function(){M(!0)},icon:(0,_.jsx)(G.Z,{}),variant:"regular",disabled:0===E.length})})]}),(0,_.jsx)(se.Z,{tooltip:"Refresh",children:(0,_.jsx)(o.zx,{id:"refresh-buckets",onClick:function(){b(!0)},icon:(0,_.jsx)(H.default,{}),variant:"regular"})}),!fe&&(0,_.jsx)(se.Z,{tooltip:je?"":(0,S.MK)([S.Ft.S3_CREATE_BUCKET],"create a bucket"),children:(0,_.jsx)(o.zx,{id:"create-bucket",onClick:function(){s(S.gA.ADD_BUCKETS)},icon:(0,_.jsx)(m.dtP,{}),variant:"callAction",disabled:!je,label:"Create Bucket"})})]})]}),v&&(0,_.jsx)(u.Z,{}),!v&&(0,_.jsxs)(h.ZP,{item:!0,xs:12,className:"".concat(t.bucketList," ").concat(fe?"isEmbedded":""),children:[0!==pe.length&&(0,_.jsx)(X.Z,{rowRenderFunction:function(e){var t=pe[e]||null;return t?(0,_.jsx)(B,{bucket:t,onSelect:Ze,selected:E.includes(t.name),bulkSelect:he,noManage:fe}):null},totalItems:pe.length}),0===pe.length&&""!==y&&(0,_.jsx)(h.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,_.jsx)(h.ZP,{item:!0,xs:8,children:(0,_.jsx)(q.Z,{iconComponent:(0,_.jsx)(m.wNb,{}),title:"No Results",help:(0,_.jsx)(r.Fragment,{children:"No buckets match the filtering condition"})})})}),!ge&&(0,_.jsx)(h.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,_.jsx)(h.ZP,{item:!0,xs:8,children:(0,_.jsx)(q.Z,{iconComponent:(0,_.jsx)(m.wNb,{}),title:"Buckets",help:(0,_.jsxs)(r.Fragment,{children:["MinIO uses buckets to organize objects. A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.",(0,_.jsx)("br",{}),ve?"":(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)("br",{}),(0,S.MK)([S.Ft.S3_LIST_BUCKET,S.Ft.S3_ALL_LIST_BUCKET],"view the buckets on this server"),(0,_.jsx)("br",{})]}),(0,_.jsxs)(N.s,{scopes:[S.Ft.S3_CREATE_BUCKET],resource:S.C3,children:[(0,_.jsx)("br",{}),"To get started,\xa0",(0,_.jsx)(re.Z,{onClick:function(){s(S.gA.ADD_BUCKETS)},children:"Create a Bucket."})]})]})})})})]})]})]})}))},81806:function(e,t,n){var i=n(1413),a=n(45987),s=(n(72791),n(11135)),r=n(25787),c=n(80184),o=["classes","children"];t.Z=(0,r.Z)((function(e){return(0,s.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var t=e.classes,n=e.children,s=(0,a.Z)(e,o);return(0,c.jsx)("button",(0,i.Z)((0,i.Z)({},s),{},{className:t.root,children:n}))}))},73996:function(e,t,n){n(72791);var i=n(56096),a=n(92177),s=n(80184);t.Z=function(e){var t=e.marginRight,r=e.marginTop,c=n(47045),o=(0,a.v9)((function(e){return e.system.overrideStyles})),l=c((null===o||void 0===o?void 0:o.backgroundColor)||"#fff").getBrightness()<=128;return(0,s.jsx)(i.BHR,{style:{width:105,marginRight:t,marginTop:r,fill:l?"#fff":"#081C42"}})}},34866:function(e,t,n){var i=n(1413),a=n(72791),s=n(45953),r=n(45473),c=n(40508),o=n(75814),l=n(11135),d=n(25787),u=n(23814),h=n(84570),m=n(80184);t.Z=(0,d.Z)((function(e){return(0,l.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},u.YI),u.Hr),u.lM),{},{fieldContainer:(0,i.Z)((0,i.Z)({},u.YI.fieldContainer),{},{display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"15px 0",marginBottom:0,flexBasis:"initial",flexWrap:"nowrap"}),noTopMargin:{marginTop:0}}))}))((function(e){var t=e.label,n=e.onChange,i=e.value,l=e.id,d=e.name,u=e.checked,x=void 0!==u&&u,f=e.disabled,p=void 0!==f&&f,g=e.noTopMargin,Z=void 0!==g&&g,j=e.tooltip,v=void 0===j?"":j,b=e.overrideLabelClasses,k=void 0===b?"":b,C=e.overrideCheckboxStyles,y=e.classes,S=e.className;return(0,m.jsx)(a.Fragment,{children:(0,m.jsxs)(s.ZP,{item:!0,xs:12,className:"".concat(y.fieldContainer," ").concat(Z?y.noTopMargin:""," ").concat(S||""),children:[(0,m.jsx)("div",{children:(0,m.jsx)(r.Z,{name:d,id:l,value:i,color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:x,onChange:n,checkedIcon:(0,m.jsx)("span",{className:y.checkedIcon}),icon:(0,m.jsx)("span",{className:y.unCheckedIcon}),disabled:p,disableRipple:!0,disableFocusRipple:!0,focusRipple:!1,centerRipple:!1,disableTouchRipple:!0,style:C||{}})}),""!==t&&(0,m.jsxs)(c.Z,{htmlFor:l,className:"".concat(y.noMinWidthLabel," ").concat(k),children:[(0,m.jsx)("span",{children:t}),""!==v&&(0,m.jsx)("div",{className:y.tooltipContainer,children:(0,m.jsx)(o.Z,{title:v,placement:"top-start",children:(0,m.jsx)("div",{className:y.tooltip,children:(0,m.jsx)(h.Z,{})})})})]})]})})}))},64163:function(e,t,n){var i=n(1413),a=n(72791),s=n(45953),r=n(11135),c=n(25787),o=n(23814),l=n(80184);t.Z=(0,c.Z)((function(e){return(0,r.Z)((0,i.Z)({},o.xx))}))((function(e){var t=e.classes,n=e.label,i=void 0===n?"":n,r=e.content,c=e.multiLine,o=void 0!==c&&c,d=e.actionButton;return(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(s.ZP,{className:t.prefinedContainer,children:[""!==i&&(0,l.jsx)(s.ZP,{item:!0,xs:12,className:t.predefinedTitle,children:i}),(0,l.jsxs)(s.ZP,{item:!0,xs:12,className:"".concat(t.predefinedList," ").concat(d?t.includesActionButton:""),children:[(0,l.jsx)(s.ZP,{item:!0,xs:12,className:o?t.innerContentMultiline:t.innerContent,children:r}),d&&(0,l.jsx)("div",{className:t.overlayShareOption,children:d})]})]})})}))},17420:function(e,t,n){var i=n(93433),a=n(29439),s=n(1413),r=n(72791),c=n(26181),o=n.n(c),l=n(48573),d=n.n(l),u=n(11135),h=n(25787),m=n(45953),x=n(77961),f=n(40508),p=n(75814),g=n(23814),Z=n(21435),j=n(47919),v=n(80184);t.Z=(0,h.Z)((function(e){return(0,u.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},g.YI),g.Hr),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},lineInputBoxes:{display:"flex",marginBottom:10},queryDiv:{alignSelf:"center",margin:"0 4px",fontWeight:600}}))}))((function(e){var t=e.elements,n=e.name,s=e.label,c=e.tooltip,l=void 0===c?"":c,u=e.keyPlaceholder,h=void 0===u?"":u,g=e.valuePlaceholder,b=void 0===g?"":g,k=e.onChange,C=e.withBorder,y=void 0!==C&&C,S=e.classes,N=(0,r.useState)([""]),P=(0,a.Z)(N,2),T=P[0],_=P[1],w=(0,r.useState)([""]),B=(0,a.Z)(w,2),E=B[0],R=B[1],I=(0,r.createRef)();(0,r.useEffect)((function(){if(1===T.length&&""===T[0]&&1===E.length&&""===E[0]&&t&&""!==t){var e=t.split("&"),n=[],i=[];e.forEach((function(e){var t=e.split("=");2===t.length&&(n.push(t[0]),i.push(t[1]))})),n.push(""),i.push(""),_(n),R(i)}}),[T,E,t]),(0,r.useEffect)((function(){var e=I.current;e&&T.length>1&&e.scrollIntoView(!1)}),[T]);var F=(0,r.useRef)(!0);(0,r.useLayoutEffect)((function(){F.current?F.current=!1:z()}),[T,E]);var L=function(e){e.persist();var t=(0,i.Z)(T),n=o()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,_(t)},M=function(e){e.persist();var t=(0,i.Z)(E),n=o()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,R(t)},z=d()((function(){var e="";T.forEach((function(t,n){if(T[n]&&E[n]){var i="".concat(t,"=").concat(E[n]);0!==n&&(i="&".concat(i)),e="".concat(e).concat(i)}})),k(e)}),500),A=E.map((function(e,t){return(0,v.jsxs)(m.ZP,{item:!0,xs:12,className:S.lineInputBoxes,children:[(0,v.jsx)(Z.Z,{id:"".concat(n,"-key-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:T[t],onChange:L,index:t,placeholder:h}),(0,v.jsx)("span",{className:S.queryDiv,children:":"}),(0,v.jsx)(Z.Z,{id:"".concat(n,"-value-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:E[t],onChange:M,index:t,placeholder:b,overlayIcon:t===E.length-1?(0,v.jsx)(j.Z,{}):null,overlayAction:function(){!function(){if(""!==T[T.length-1].trim()&&""!==E[E.length-1].trim()){var e=(0,i.Z)(T),t=(0,i.Z)(E);e.push(""),t.push(""),_(e),R(t)}}()}})]},"query-pair-".concat(n,"-").concat(t.toString()))}));return(0,v.jsx)(r.Fragment,{children:(0,v.jsxs)(m.ZP,{item:!0,xs:12,className:S.fieldContainer,children:[(0,v.jsxs)(f.Z,{className:S.inputLabel,children:[(0,v.jsx)("span",{children:s}),""!==l&&(0,v.jsx)("div",{className:S.tooltipContainer,children:(0,v.jsx)(p.Z,{title:l,placement:"top-start",children:(0,v.jsx)(x.Z,{className:S.tooltip})})})]}),(0,v.jsxs)(m.ZP,{item:!0,xs:12,className:"".concat(y?S.inputWithBorder:""),children:[A,(0,v.jsx)("div",{ref:I})]})]})})}))},56028:function(e,t,n){var i=n(29439),a=n(1413),s=n(72791),r=n(92177),c=n(13811),o=n(11647),l=n(58195),d=n(40464),u=n(8440),h=n(11135),m=n(25787),x=n(23814),f=n(25469),p=n(29823),g=n(28057),Z=n(87995),j=n(80184);t.Z=(0,m.Z)((function(e){return(0,h.Z)((0,a.Z)((0,a.Z)({},x.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},x.sN))}))((function(e){var t=e.onClose,n=e.modalOpen,h=e.title,m=e.children,x=e.classes,v=e.wideLimit,b=void 0===v||v,k=e.noContentPadding,C=e.titleIcon,y=void 0===C?null:C,S=(0,f.TL)(),N=(0,s.useState)(!1),P=(0,i.Z)(N,2),T=P[0],_=P[1],w=(0,r.v9)((function(e){return e.system.modalSnackBar}));(0,s.useEffect)((function(){S((0,Z.MK)(""))}),[S]),(0,s.useEffect)((function(){if(w){if(""===w.message)return void _(!1);"error"!==w.type&&_(!0)}}),[w]);var B=b?{classes:{paper:x.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},E="";return w&&(E=w.detailedErrorMsg,(""===w.detailedErrorMsg||w.detailedErrorMsg.length<5)&&(E=w.message)),(0,j.jsxs)(l.Z,(0,a.Z)((0,a.Z)({open:n,classes:x},B),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:x.root,children:[(0,j.jsxs)(d.Z,{className:x.title,children:[(0,j.jsxs)("div",{className:x.titleText,children:[y," ",h]}),(0,j.jsx)("div",{className:x.closeContainer,children:(0,j.jsx)(c.Z,{"aria-label":"close",id:"close",className:x.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,j.jsx)(p.Z,{})})})]}),(0,j.jsx)(g.Z,{isModal:!0}),(0,j.jsx)(o.Z,{open:T,className:x.snackBarModal,onClose:function(){_(!1),S((0,Z.MK)(""))},message:E,ContentProps:{className:"".concat(x.snackBar," ").concat(w&&"error"===w.type?x.errorSnackBar:"")},autoHideDuration:w&&"error"===w.type?1e4:5e3}),(0,j.jsx)(u.Z,{className:k?"":x.content,children:m})]}))}))},59114:function(e,t,n){var i=n(4942),a=n(1413),s=(n(72791),n(38254)),r=n(74900),c=n(75017),o=n(25787),l=n(11135),d=n(23814),u=n(80184);t.Z=(0,o.Z)((function(e){return(0,l.Z)({searchField:(0,a.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var t=e.placeholder,n=void 0===t?"":t,a=e.classes,o=e.onChange,l=e.adornmentPosition,d=void 0===l?"end":l,h=e.overrideClass,m=e.value,x=(0,i.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,u.jsx)(s.Z,{position:d,className:a.adornment,children:(0,u.jsx)(r.Z,{})}));return(0,u.jsx)(c.Z,{placeholder:n,className:h||a.searchField,id:"search-resource",label:"",InputProps:x,onChange:function(e){o(e.target.value)},variant:"standard",value:m})}))},98994:function(e,t,n){var i=n(72791),a=n(22338),s=n(79762),r=n(5171),c=n(80184),o={};t.Z=function(e){var t=e.rowRenderFunction,n=e.totalItems,l=e.defaultHeight,d=function(e){var n=e.index,i=e.style;return(0,c.jsx)("div",{style:i,children:t(n)})};return(0,c.jsx)(i.Fragment,{children:(0,c.jsx)(s.Z,{isItemLoaded:function(e){return!!o[e]},loadMoreItems:function(e,t){for(var n=e;n<=t;n++)o[n]=1;for(var i=e;i<=t;i++)o[i]=2},itemCount:n,children:function(e){var t=e.onItemsRendered,i=e.ref;return(0,c.jsx)(r.qj,{children:function(e){var s=e.width,r=e.height;return(0,c.jsx)(a.t7,{itemSize:l||220,height:r,itemCount:n,width:s,ref:i,onItemsRendered:t,children:d})}})}})})}},98946:function(e,t,n){var i=n(91941);t.Z=void 0;var a=i(n(45649)),s=n(80184),r=(0,a.default)((0,s.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");t.Z=r},15146:function(e,t,n){var i=n(91941);t.Z=void 0;var a=i(n(45649)),s=n(80184),r=(0,a.default)((0,s.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");t.Z=r},77961:function(e,t,n){var i=n(91941);t.Z=void 0;var a=i(n(45649)),s=n(80184),r=(0,a.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");t.Z=r}}]);
//# sourceMappingURL=9467.41cb18a2.chunk.js.map