"use strict";(self.webpackChunkpravas_client=self.webpackChunkpravas_client||[]).push([[134],{49134:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var o=t(1413),i=t(74165),l=t(15861),u=t(29439),a=t(72791),r=t(57689),d=t(50855),s=t(42477),m=t(89078),c=t(64554),v=t(90977),f=t(81153),p=t(93006),x=t(5849),y=t(93525),h=t(66934),Z=t(5574),b=t(65661),j=t(4899),D=t(94721),P=t(29823),g=t(19773),w=t(80184),C=(0,h.ZP)(Z.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}})),k=function(e){var n=e.handleRefundWindow,t=e.open,i=e.refundData,l=(0,a.useState)({refundAmount:!1}),r=(0,u.Z)(l,2),d=r[0],m=r[1],c=(0,a.useState)(""),y=(0,u.Z)(c,2),h=y[0],Z=y[1];return(0,w.jsx)("div",{style:{display:"flex",width:"100%",padding:"16px"},children:(0,w.jsxs)(C,{onClose:function(){return n(!1)},"aria-labelledby":"customized-dialog-title",open:t,fullWidth:!0,maxWidth:"sm",children:[(0,w.jsx)(f.ZP,{container:!0,justifyContent:"center",children:(0,w.jsx)(b.Z,{children:"Refund"})}),(0,w.jsx)(D.Z,{}),(0,w.jsxs)(j.Z,{children:[(0,w.jsx)(v.Z,{"aria-label":"close",onClick:function(){return n(!1)},sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,w.jsx)(P.default,{})}),(0,w.jsxs)(f.ZP,{container:!0,justifyContent:"space-evenly",my:2,children:[(0,w.jsx)(f.ZP,{item:!0,xs:10,justifyContent:"center",flexWrap:"nowrap",sx:{m:2},children:(0,w.jsxs)(f.ZP,{container:!0,justifyContent:"space-between",children:[(0,w.jsx)(f.ZP,{item:!0,xs:4,justifyContent:"left",children:"Tour Name:"}),(0,w.jsx)(f.ZP,{item:!0,xs:6,justifyContent:"left",children:null===i||void 0===i?void 0:i.tourTitle}),(0,w.jsx)(f.ZP,{item:!0,xs:4,justifyContent:"left",children:"Tour Date:"}),(0,w.jsx)(f.ZP,{item:!0,xs:6,justifyContent:"left",children:null!==i&&void 0!==i&&i.tourDate?new Intl.DateTimeFormat("en-IN").format(new Date(null===i||void 0===i?void 0:i.tourDate)):""}),(0,w.jsx)(f.ZP,{item:!0,xs:4,justifyContent:"left",children:"Payee Name:"}),(0,w.jsx)(f.ZP,{item:!0,xs:6,justifyContent:"left",children:null===i||void 0===i?void 0:i.name}),(0,w.jsx)(f.ZP,{item:!0,xs:4,justifyContent:"left",children:"Paid Amount:"}),(0,w.jsx)(f.ZP,{item:!0,xs:6,justifyContent:"left",children:null===i||void 0===i?void 0:i.amount})]})}),(0,w.jsx)(f.ZP,{item:!0,xs:6,sx:{mt:4},children:(0,w.jsx)(p.Z,{fullWidth:!0,type:"text",size:"small",id:"refund-amount",label:"Refund Amount",InputLabelProps:{shrink:!!h},onBlur:function(){return m((0,o.Z)((0,o.Z)({},d),{},{refundAmount:!0}))},onFocus:function(){return m((0,o.Z)((0,o.Z)({},d),{},{refundAmount:!0}))},onChange:function(e){var n;return Z(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value)},error:!(null===d||void 0===d||!d.refundAmount||!(0==Number(h)||""==h||Number(null===i||void 0===i?void 0:i.amount)<Number(h))),helperText:null!==d&&void 0!==d&&d.refundAmount&&(0==Number(h)||""==h||Number(null===i||void 0===i?void 0:i.amount)<Number(h))?"Please Check Refund Amount..":""})}),(0,w.jsx)(f.ZP,{item:!0,xs:2,sx:{mt:4},children:(0,w.jsx)(x.Z,{type:"button",variant:"contained",sx:{mb:2},disabled:!(null===d||void 0===d||!d.refundAmount||!(0==Number(h)||""==h||Number(null===i||void 0===i?void 0:i.amount)<Number(h))),onClick:function(){s.Z.refund({pId:null===i||void 0===i?void 0:i.pId,amount:h}).then((function(e){var n,t,o,i,l,u;"processed"==(null===e||void 0===e||null===(n=e.data)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.status)?(0,g.Qm)("Payment Refunded Successfully...",3e3):"pending"==(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.status)?(0,g.Qm)("Payment is in proccess... will be refunded Successfully...",3e3):"failed"==(null===e||void 0===e||null===(l=e.data)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.status)&&(0,g.Jc)("Payment Refund failed...",5e3)})).catch((function(e){console.error(e),(0,g.Jc)("Payment Refund failed...",5e3)}))},children:"Refund"})})]})]})]})})},T=function(e){var n=(0,a.useState)(!1),t=(0,u.Z)(n,2),h=t[0],Z=t[1],b=(0,a.useState)([]),j=(0,u.Z)(b,2),D=j[0],P=j[1],g=(0,a.useState)({from:"",to:"",mobile:""}),C=(0,u.Z)(g,2),T=C[0],N=C[1],I=(0,a.useState)({pId:"",amount:"",tourTitle:"",tourDate:"",name:""}),R=(0,u.Z)(I,2),A=R[0],S=R[1],z=function(e,n,t){!e&&(e=new Date(new Date((new Date).setDate(new Date(Date.now()).getDate()-Number(30))))),!n&&(n=new Date),!t&&(t="100");var o=new Intl.DateTimeFormat("en-US").format(new Date(e)),u=new Intl.DateTimeFormat("en-US").format(new Date(new Date("".concat(n)).setDate(new Date("".concat(n)).getDate()+Number("".concat(1)))));s.Z.getPaymentHistory({from:o,to:u,last:Number(t)}).then((function(e){var n,t=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data,o=[];t.forEach(function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n){var t,l,u,a,r,d,s,m,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(c={}).paymentId=null===n||void 0===n?void 0:n.id,c.tourTitle=null!==n&&void 0!==n&&null!==(t=n.notes)&&void 0!==t&&t.tourTitle?null===n||void 0===n||null===(l=n.notes)||void 0===l?void 0:l.tourTitle:"",c.tourDate=null!==n&&void 0!==n&&null!==(u=n.notes)&&void 0!==u&&u.tourDate?new Intl.DateTimeFormat("en-IN").format(new Date(null===n||void 0===n||null===(a=n.notes)||void 0===a?void 0:a.tourDate.toString())):"",c.mobile=null===n||void 0===n?void 0:n.contact,c.paymentDate=Number(null===n||void 0===n||null===(r=n.notes)||void 0===r?void 0:r.paymentTime)?new Intl.DateTimeFormat("en-IN").format(Number(null===n||void 0===n||null===(d=n.notes)||void 0===d?void 0:d.paymentTime)):"",c.name=null!==n&&void 0!==n&&null!==(s=n.notes)&&void 0!==s&&s.name?"".concat(null===n||void 0===n||null===(m=n.notes)||void 0===m?void 0:m.name):"",c.paidAmount=null===n||void 0===n?void 0:n.amount,c.status=null===n||void 0===n?void 0:n.status,o.push(c);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),P(o)})).catch((function(e){console.error(e)}))},F=[{label:"ID",name:"paymentId",options:{filter:!1,sort:!0,customBodyRenderLite:function(e,n){return e+1}}},{label:"Tour Title",name:"tourTitle",options:{filter:!0,sort:!0}},{label:"Tour Date",name:"tourDate",options:{filter:!0,sort:!0}},{label:"Payee Name",name:"name",options:{filter:!0,sort:!1}},{label:"Mobile",name:"mobile",options:{filter:!0,sort:!1}},{label:"Payment Date",name:"paymentDate",options:{filter:!0,sort:!1}},{label:"Amount",name:"paidAmount",options:{filter:!0,sort:!0,customBodyRender:function(e){return e/100}}},{label:"Status",name:"status",options:{filter:!0,sort:!0,customBodyRender:function(e){return e}}},{label:"Refund",name:"refund",options:{filter:!0,sort:!0,customBodyRender:function(e,n){var t=D[n.rowIndex];return(0,w.jsx)(c.Z,{sx:{display:"flex"},children:(0,w.jsx)(v.Z,{disabled:"refunded"==(null===t||void 0===t?void 0:t.status),onClick:function(){S({pId:null===t||void 0===t?void 0:t.paymentId,tourTitle:null===t||void 0===t?void 0:t.tourTitle,tourDate:null===t||void 0===t?void 0:t.tourDate,name:null===t||void 0===t?void 0:t.name,amount:String((null===t||void 0===t?void 0:t.paidAmount)/100)}),Z(!0)},children:(0,w.jsx)(y.Z,{style:{color:"refunded"==(null===t||void 0===t?void 0:t.status)?"#444":"red"}})})})}}}];return(0,a.useEffect)((function(){z("","","")}),[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d.Z,{title:"Bookings"}),(0,w.jsx)(k,{handleRefundWindow:Z,open:h,refundData:A}),(0,w.jsxs)(f.ZP,{container:!0,spacing:2,sx:{m:2,alignItems:"center"},children:[(0,w.jsx)(f.ZP,{item:!0,children:(0,w.jsx)(p.Z,{size:"small",type:"date",id:"from",label:"From",InputLabelProps:{shrink:!0},value:null===T||void 0===T?void 0:T.from,onChange:function(e){var n;return N((0,o.Z)((0,o.Z)({},T),{},{from:null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value}))}})}),(0,w.jsx)(f.ZP,{item:!0,children:(0,w.jsx)(p.Z,{size:"small",type:"date",id:"to",label:"To",InputLabelProps:{shrink:!0},value:null===T||void 0===T?void 0:T.to,onChange:function(e){var n;return N((0,o.Z)((0,o.Z)({},T),{},{to:null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value}))}})}),(0,w.jsx)(f.ZP,{pt:2,pl:2,children:(0,w.jsx)(x.Z,{type:"button",variant:"contained",id:"submit",onClick:function(){z(null===T||void 0===T?void 0:T.from,null===T||void 0===T?void 0:T.to,"50")},children:"Get History"})})]}),(0,w.jsx)(m.ZP,{title:"Payments",columns:F,data:D,options:{filterType:"dropDown",responsive:"standard",enableNestedDataAccess:"."}}),(0,w.jsx)(r.j3,{})]})}},42477:function(e,n,t){var o=t(15671),i=t(43144),l=t(54110),u=function(){function e(){(0,o.Z)(this,e)}return(0,i.Z)(e,null,[{key:"createOrder",value:function(e){return l.b.post(l.z.api.bookingOrders.bookNow,{amount:e})}},{key:"verifyOrder",value:function(e){return l.b.post(l.z.api.bookingOrders.verify,e)}},{key:"getPaymentHistory",value:function(e){return l.b.post(l.z.api.bookingOrders.getPaymentHistory,e)}},{key:"refund",value:function(e){return l.b.post(null===l.z||void 0===l.z?void 0:l.z.api.bookingOrders.refund,e)}}]),e}();n.Z=u},93525:function(e,n,t){var o=t(64836);n.Z=void 0;var i=o(t(45649)),l=t(80184),u=(0,i.default)((0,l.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"}),"RemoveCircleRounded");n.Z=u}}]);
//# sourceMappingURL=134.8019cec2.chunk.js.map