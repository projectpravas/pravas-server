"use strict";(self.webpackChunkpravas_client=self.webpackChunkpravas_client||[]).push([[934],{93934:function(n,i,t){t.d(i,{Z:function(){return M}});var o=t(29439),e=t(72791),l=t(89078),d=t(64554),a=t(90977),r=t(41286),u=t(27247),c=t(21830),s=t.n(c),v=t(57689),f=t(85771),p=t(19773),m=t(62265),x=t(97639),h=t(10266),g=t(34729),b=t(93433),Z=t(1413),j=t(45987),y=t(5849),D=t(66934),w=t(5574),C=t(65661),k=t(4899),S=t(29823),P=t(81153),T=t(93006),A=t(42419),N=t(5130),z=t(99249),_=t(67236),B=t(80184),I=["children","onClose"],F=(0,D.ZP)(w.Z)((function(n){var i=n.theme;return{textAlign:"center","& .MuiDialogContent-root":{padding:i.spacing(2)},"& .MuiDialogActions-root":{padding:i.spacing(1)}}}));function L(n){var i=n.children,t=n.onClose,o=(0,j.Z)(n,I);return(0,B.jsxs)(C.Z,(0,Z.Z)((0,Z.Z)({sx:{m:0,p:2}},o),{},{children:[i,t?(0,B.jsx)(a.Z,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:function(n){return n.palette.grey[500]}},children:(0,B.jsx)(S.default,{})}):null]}))}var W=function(n){var i=n.values,t=n.handleDialogue,l=n.status,r=(0,e.useState)([]),u=(0,o.Z)(r,2),c=u[0],v=u[1],f=(0,e.useState)([]),m=(0,o.Z)(f,2),x=m[0],h=m[1],j=(0,e.useState)([]),D=(0,o.Z)(j,2),w=D[0],C=D[1],S=(0,e.useState)(0),I=(0,o.Z)(S,2),W=I[0],M=I[1],R=(0,e.useState)([]),V=(0,o.Z)(R,2),E=V[0],H=V[1],U=(0,e.useState)({mob:!1}),Y=(0,o.Z)(U,2),O=Y[0],J=Y[1],Q=(0,e.useState)(""),q=(0,o.Z)(Q,2),G=q[0],K=q[1],X=(0,e.useState)(!1),$=(0,o.Z)(X,2),nn=$[0],tn=$[1],on=(0,e.useState)(!1),en=(0,o.Z)(on,2),ln=en[0],dn=en[1],an=(0,e.useState)([]),rn=(0,o.Z)(an,2),un=rn[0],cn=rn[1],sn=(0,e.useState)(),vn=(0,o.Z)(sn,2),fn=vn[0],pn=vn[1],mn=function(){t((0,Z.Z)((0,Z.Z)({},i),{},{flag:!1}))},xn=function(n){z.Z.isValidIds(n).then((function(n){var i,t=null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.data;C(t)})).catch((function(n){console.error(n)}))},hn=function(){H([].concat((0,b.Z)(E),[{id:"/offline"}])),C([].concat((0,b.Z)(w),[""])),h([].concat((0,b.Z)(x),[""]))};return(0,e.useEffect)((function(){dn("upcoming"==l),g.Z.fetchOneTour(null===i||void 0===i?void 0:i.id).then((function(n){var i,t,o,e,l,d,a,r,u,c,s,v,f;pn(null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.data),M(Number(null===n||void 0===n||null===(t=n.data)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.maxPersons));var p=null===n||void 0===n||null===(e=n.data)||void 0===e||null===(l=e.data)||void 0===l?void 0:l.participants.map((function(n){return n.split("/")[0]})),m=Array.isArray(null===n||void 0===n||null===(d=n.data)||void 0===d||null===(a=d.data)||void 0===a?void 0:a.participants)&&(null===n||void 0===n||null===(r=n.data)||void 0===r||null===(u=r.data)||void 0===u||null===(c=u.participants)||void 0===c?void 0:c.length)>0?null===n||void 0===n||null===(s=n.data)||void 0===s||null===(v=s.data)||void 0===v||null===(f=v.participants)||void 0===f?void 0:f.map((function(n){return{id:n}})):[{id:""}];H(m),h(p),xn(p)})).catch((function(n){console.error(n)}))}),[]),(0,e.useEffect)((function(){0==(null===E||void 0===E?void 0:E.length)&&E.push({id:""});var n=Array.isArray(E)&&(null===E||void 0===E?void 0:E.length)>0?null===E||void 0===E?void 0:E.map((function(n){return null===n||void 0===n?void 0:n.id})):[""];v(n)}),[E]),(0,e.useEffect)((function(){if(!ln){var n=c.map((function(n){return n.split("/")[0]}));xn(n)}}),[ln]),(0,e.useEffect)((function(){H(E)}),[w]),(0,B.jsx)(d.Z,{children:(0,B.jsxs)(F,{maxWidth:"md",fullWidth:!0,id:"participant-modal-dialog",onClose:mn,"aria-labelledby":"participants-dialog-title",open:null===i||void 0===i?void 0:i.flag,children:[(0,B.jsx)(L,{id:"participants-dialog-title",onClose:mn,children:(0,B.jsxs)(P.ZP,{container:!0,justifyContent:"center",children:[(0,B.jsxs)(P.ZP,{item:!0,xs:12,sm:4,sx:{textAlign:{xs:"center",sm:"start"}},children:["Tour Name :",(0,B.jsx)("span",{style:{fontSize:"0.9em"},children:"  ".concat(null===fn||void 0===fn?void 0:fn.title)})]}),(0,B.jsx)(P.ZP,{item:!0,xs:12,sm:4,children:ln?"Add Participants":"Tour Participants"}),(0,B.jsxs)(P.ZP,{item:!0,xs:12,sm:4,children:["start Date :".concat(" "),(0,B.jsx)("span",{style:{fontSize:"0.9em"},children:new Intl.DateTimeFormat("en-IN").format(new Date("".concat(null!==fn&&void 0!==fn&&fn.tourDate?null===fn||void 0===fn?void 0:fn.tourDate:new Date)))})]})]})}),(0,B.jsxs)(k.Z,{sx:{position:"relative"},dividers:!0,className:"hideScrollbar",children:[(0,B.jsxs)(P.ZP,{container:!0,children:[!ln&&(0,B.jsx)(a.Z,{sx:{position:"absolute",top:1,right:2},color:"primary",onClick:function(){return window.print()},children:(0,B.jsx)(_.Z,{})}),ln?(0,B.jsx)(P.ZP,{item:!0,xs:12,sx:{mt:ln?0:2},children:(0,B.jsx)(T.Z,{size:"small",type:"text",name:"mobile",label:"Find Participant",placeholder:"Search By Mobile Number",value:G,disabled:!(W>(null===c||void 0===c?void 0:c.length)),inputProps:{min:0},onBlur:function(){return!(null!==O&&void 0!==O&&O.mob)&&J((0,Z.Z)((0,Z.Z)({},O),{},{mob:!0}))},onChange:function(n){var i,t=null===n||void 0===n?void 0:n.target,o=(t.name,t.value);(null===G||void 0===G?void 0:G.length)>1?(i=o)?z.Z.fetchAllUsers("?mobile=".concat(i)).then((function(n){var i,t,o,e=c,l=null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.data,d=null===n||void 0===n||null===(t=n.data)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.find((function(n,i){if(e.includes(null===n||void 0===n?void 0:n._id))return i}));l.splice(d,1),cn(l)})).catch((function(n){console.error(n)})):cn([]):o||cn([]),console.log(o),K(o)},error:!(!(null!==O&&void 0!==O&&O.mob&&(null===G||void 0===G?void 0:G.length)>10)||Number.isNaN(G)),helperText:null!==O&&void 0!==O&&O.mob&&(null===G||void 0===G?void 0:G.length)>10&&!Number.isNaN(G)?"Invalid Input":""})}):null,(ln?(null===un||void 0===un?void 0:un.length)>0&&(null===E||void 0===E?void 0:E.length)<W&&G:(null===w||void 0===w?void 0:w.length)>0)&&(0,B.jsx)(P.ZP,{item:!0,xs:12,children:(0,B.jsx)(d.Z,{className:"hideScrollbar",style:{maxHeight:ln?"200px":"none"},sx:{mt:{xs:1,sm:2},border:"1px solid #000"},children:(0,B.jsxs)("table",{style:{width:"100%",borderSpacing:"0px",margin:"0px"},children:[(0,B.jsxs)("tr",{style:{fontWeight:100},children:[(0,B.jsx)("th",{style:{border:"1px solid gray",padding:"4px 0",fontWeight:100},children:"Name"}),ln?null:(0,B.jsx)("th",{style:{border:"1px solid gray",padding:"4px 0",fontWeight:100},children:"Mobile"}),(0,B.jsx)("th",{style:{border:"1px solid gray",padding:"4px 0",width:"40%",fontWeight:100},children:"Email"}),(0,B.jsx)("th",{style:{border:"1px solid gray",padding:"4px 0",width:"20%",fontWeight:100},children:ln?"Add":"Booking Mode"})]}),Array.isArray(ln?un:w)&&(!ln||W>(null===c||void 0===c?void 0:c.length))&&(ln?un:w).map((function(n,t){var o,e,l;return(0,B.jsxs)("tr",{style:{border:"1px solid gray",padding:"5px"},children:[(0,B.jsx)("td",{style:{border:"1px solid gray",padding:"5px 15px",fontSize:"0.91em"},children:null!==n&&void 0!==n&&n._id?"".concat(null===(o=n.name)||void 0===o?void 0:o.first," ").concat(null===(e=n.name)||void 0===e?void 0:e.last):n}),ln?null:(0,B.jsx)("td",{style:{border:"1px solid gray",padding:"5px 15px",fontSize:"0.91em"},children:null!==n&&void 0!==n&&n._id?null===n||void 0===n?void 0:n.mobile:"-"}),(0,B.jsx)("td",{style:{border:"1px solid gray",padding:"5px 15px",fontSize:"0.91em"},children:null!==n&&void 0!==n&&n._id?null===n||void 0===n?void 0:n.email:"-"}),(0,B.jsx)("td",{style:{border:"1px solid gray",padding:"5px 15px",textTransform:ln?"none":"capitalize"},children:ln?(0,B.jsx)(a.Z,{color:"primary",onClick:function(){return function(n){var t;!(null===E||void 0===E||null===(t=E.find((function(i){var t;return(null===i||void 0===i||null===(t=i.id)||void 0===t?void 0:t.split("/")[0])==(null===n||void 0===n?void 0:n._id)})))||void 0===t?void 0:t.id)&&W>(null===c||void 0===c?void 0:c.length)&&z.Z.addRemoveTourId({userId:null===n||void 0===n?void 0:n._id,op:"add",tourId:null===i||void 0===i?void 0:i.id}).then((function(i){H([].concat((0,b.Z)(E),[{id:"".concat(null===n||void 0===n?void 0:n._id,"/offline/added")}]));var t=x;t.push(null===n||void 0===n?void 0:n._id),h(t),C([].concat((0,b.Z)(w),[n]))})).catch((function(n){console.error(n)}))}(n)},disabled:!(W>(null===c||void 0===c?void 0:c.length))||x.includes(null===n||void 0===n?void 0:n._id),children:(0,B.jsx)(A.Z,{})}):null===(l=c[t])||void 0===l?void 0:l.split("/")[1]})]},null!==n&&void 0!==n&&n._id?null===n||void 0===n?void 0:n._id:n+t)}))]})})})]}),ln?(0,B.jsx)(d.Z,{children:(0,B.jsxs)("form",{onSubmit:function(n){null===n||void 0===n||n.preventDefault(),dn(!1),g.Z.updateTour(null===i||void 0===i?void 0:i.id,{participants:c}).then((function(n){(0,p.Qm)("Participants added successfully",3e3)})).catch((function(n){console.error(n),(0,p.Jc)("Couldn't added participants",5e3)}))},children:[(0,B.jsx)(P.ZP,{sx:{p:2,display:{xs:"block",sm:"grid"},gridTemplateColumns:1==(null===E||void 0===E?void 0:E.length)?"1fr 100%":"1fr 50%"},children:(0,B.jsx)(B.Fragment,{children:Array.isArray(E)&&(null===E||void 0===E?void 0:E.map((function(n,t){var o,l,d,r,u,v,f,p;return(0,B.jsx)(e.Fragment,{children:(0,B.jsxs)(P.ZP,{justifyContent:"space-evenly",sx:{display:"flex",width:1==Number(null===E||void 0===E?void 0:E.length)?"300px":"auto"},children:[(0,B.jsx)(P.ZP,{item:!0,xs:9,sx:{width:{xs:"80%"},p:2},children:(0,B.jsx)(T.Z,{fullWidth:!0,required:!0,size:"small",name:"participant-".concat(t+1),id:"participants",label:"participant-".concat(t+1),InputLabelProps:{shrink:""!=c[t]||nn},onFocus:function(){return tn(!0)},onBlur:function(){return tn(!1)},disabled:"online"==(null===(o=c[t])||void 0===o?void 0:o.split("/")[1])||"added"==(null===(l=c[t])||void 0===l?void 0:l.split("/")[2]),value:"object"===typeof w[t]?"".concat(null===(d=w[t])||void 0===d||null===(r=d.name)||void 0===r?void 0:r.first," ").concat(null===(u=w[t])||void 0===u||null===(v=u.name)||void 0===v?void 0:v.last):null===n||void 0===n||null===(f=n.id)||void 0===f?void 0:f.split("/")[0],onChange:function(n){!function(n,i){var t,o,e=null===n||void 0===n?void 0:n.target,l=(e.name,e.value),d=(0,b.Z)(E);d.splice(i,1,{id:"".concat(l,"/").concat(null===(t=E[i])||void 0===t||null===(o=t.id)||void 0===o?void 0:o.split("/")[1])}),H(d)}(n,t)}},t)}),(0,B.jsx)(P.ZP,{item:!0,xs:3,sx:{py:2,maxWidth:"140px",width:{xs:"10%",md:"20%"}},children:(0,B.jsxs)(P.ZP,{container:!0,justifyContent:"start",flexWrap:"nowrap",children:[(0,B.jsx)(P.ZP,{item:!0,xs:12,md:5,sx:{textAlign:"start"},children:(0,B.jsx)(a.Z,{color:"warning",disabled:"online"==(null===(p=c[t])||void 0===p?void 0:p.split("/")[1])||1==(null===E||void 0===E?void 0:E.length),onClick:function(){return function(n){s().fire({target:document.getElementById("participant-modal-dialog"),title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,showLoaderOnConfirm:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){var o;t.isConfirmed&&("object"===typeof w[Number(n)]?z.Z.addRemoveTourId({userId:null===(o=w[Number(n)])||void 0===o?void 0:o._id,op:"remove",tourId:null===i||void 0===i?void 0:i.id}).then((function(i){H(E.filter((function(i,t){return t!=n}))),C(w.filter((function(i,t){return t!=n}))),h(x.filter((function(i,t){return t!=n})))})).catch((function(n){console.error(n)})):(H(E.filter((function(i,t){return t!=n}))),C(w.filter((function(i,t){return t!=n}))),h(x.filter((function(i,t){return t!=n})))))}))}(t)},children:(0,B.jsx)(N.default,{})})}),(null===E||void 0===E?void 0:E.length)==t+1&&(0,B.jsx)(P.ZP,{item:!0,xs:12,md:5,sx:{textAlign:"center"},children:(0,B.jsx)(a.Z,{disabled:W<=t+1,color:"primary",onClick:hn,children:(0,B.jsx)(A.Z,{})})})]})})]})},n+t)})))})}),(0,B.jsx)(P.ZP,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,B.jsx)(y.Z,{type:"submit",variant:"contained",children:"Submit Participants"})})]})}):null]})]})})},M=function(n){var i=n.data,t=n.loadTours,c=n.title,b=(0,e.useState)({flag:!1,id:"0"}),Z=(0,o.Z)(b,2),j=Z[0],y=Z[1],D=(0,e.useState)(""),w=(0,o.Z)(D,2),C=w[0],k=w[1],S=(0,v.s0)(),P=(0,v.TH)().pathname,T=null!==P&&void 0!==P&&P.split("/").includes("tours")?"tour":"package",A=[{label:"Sr No",name:"_id",options:{filter:!1,sort:!0,customBodyRenderLite:function(n){return n+1}}},{label:"Title",name:"title",options:{filter:!0,sort:!0}},{label:"Price",name:"price",options:{filter:!0,sort:!0}},{label:"Tour Date",name:"tourDate",options:{filter:!0,sort:!0,customBodyRenderLite:function(n,t){var o=i[n];return(0,B.jsx)(B.Fragment,{children:new Intl.DateTimeFormat("en-IN").format(null!==o&&void 0!==o&&o.tourDate?new Date("".concat(null===o||void 0===o?void 0:o.tourDate)):new Date)})}}},{label:"package"==T?"Max Persons":"Available Seat",name:"maxPersons",options:{filter:!0,sort:!1,customBodyRenderLite:function(n,t){var o,e,l,d=i[n];return(0,B.jsx)(B.Fragment,{children:"package"==T?(0,B.jsx)(f.Z,{sx:{p:1,backgroundColor:"#c9e9ff",color:"#005e9d",fontWeight:600},label:"".concat(null===d||void 0===d?void 0:d.maxPersons)}):(null===d||void 0===d?void 0:d.maxPersons)==(null===d||void 0===d||null===(o=d.participants)||void 0===o?void 0:o.length)?(0,B.jsx)(f.Z,{sx:{backgroundColor:"#9af499",p:1},label:"".concat(null===d||void 0===d||null===(e=d.participants)||void 0===e?void 0:e.length," full")}):(0,B.jsx)(f.Z,{sx:{backgroundColor:"#f4f458",p:1},label:"".concat(null===d||void 0===d||null===(l=d.participants)||void 0===l?void 0:l.length,"/").concat(null===d||void 0===d?void 0:d.maxPersons)})})}}},{label:"Duration",name:"duration",options:{filter:!1,sort:!1,customBodyRenderLite:function(n,t){var o,e,l=i[n];return(0,B.jsxs)(B.Fragment,{children:[null===l||void 0===l||null===(o=l.duration)||void 0===o?void 0:o.days,"D",null===l||void 0===l||null===(e=l.duration)||void 0===e?void 0:e.nights,"N"]})}}},{label:"Status",name:"package"==T?"packageStatus":"tourDate",options:{filter:!0,sort:!0,filterType:"dropdown",filterOptions:"tour"==T?{names:["completed","upcoming","ongoing"],logic:function(n,t,o){var e,l,d=i.find((function(n){return(null===n||void 0===n?void 0:n._id)==o[0]})),a=null!==d&&void 0!==d&&null!==(e=d.duration)&&void 0!==e&&e.days?null===d||void 0===d||null===(l=d.duration)||void 0===l?void 0:l.days:0,r=new Intl.DateTimeFormat("en-US").format(new Date(null===d||void 0===d?void 0:d.tourDate)),u=new Intl.DateTimeFormat("en-US").format(new Date(new Date(null===d||void 0===d?void 0:d.tourDate).setDate(new Date(null===d||void 0===d?void 0:d.tourDate).getDate()+Number(a)))),c=new Intl.DateTimeFormat("en-US").format(new Date(Date.now()));return t.includes("completed")&&u>c?i:!t.includes("ongoing")||r<=c&&c<=u?t.includes("upcoming")&&r<=c?i:void 0:i}}:{names:["active","inactive"],logic:function(n,i,t){return i.includes("active")&&"inactive"==n||i.includes("inactive")&&"active"==n?t:void 0}},customBodyRender:function(n,o){var e,l=i.find((function(n){return(null===n||void 0===n?void 0:n._id)==o.rowData[0]})),d=new Date(new Date("".concat(null===l||void 0===l?void 0:l.tourDate)).setDate(new Date("".concat(null===l||void 0===l?void 0:l.tourDate)).getDate()+Number("".concat(null===l||void 0===l||null===(e=l.duration)||void 0===e?void 0:e.days)))),a="tour"==(null===l||void 0===l?void 0:l.category)&&new Date("".concat(null===l||void 0===l?void 0:l.tourDate))>new Date?"upcoming":d<new Date?"completed":"ongoing";return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(f.Z,{style:{textTransform:"capitalize",fontSize:"tour"==T?"1em":"inherit",color:"package"==(null===l||void 0===l?void 0:l.category)?"#fff":"upcoming"==a?"#005e9d":"completed"==a?"#b32800":"#00a300",backgroundColor:"package"==(null===l||void 0===l?void 0:l.category)?"active"==n?"#00a300":"#b32800":"#fff"},label:"package"==(null===l||void 0===l?void 0:l.category)?"active"==n?"active":"inactive":a,onClick:function(){return"package"==(null===l||void 0===l?void 0:l.category)&&function(n,i,o){var e={packageStatus:"active"==i?"inactive":"active"};g.Z.updateTour(null===o||void 0===o?void 0:o._id,e).then((function(i){t(),(0,p.Qm)("".concat("status"==n?"Status":"Verification"," Changed.."),2e3)})).catch((function(i){console.error(i),(0,p.Jc)("".concat("status"==n?"Status":"Verification"," couldn't Changed.."),3e3)}))}("status",n,l)}})})}}},{label:"Add Tour",name:"addTour",options:{filter:!1,sort:!1,customBodyRender:function(n,t){var o=i[t.rowIndex];return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(f.Z,{sx:{backgroundColor:"#005e9d",transition:"0.4s ease-in-out",color:"#fff",textTransform:"capitalize","&:hover":{color:"#005e9d",backgroundColor:"#fff",border:"1px solid #005e9d"}},label:"Add Tour",variant:"outlined",onClick:function(){var n=P.split("/").reduce((function(n,i,t,o){return n+(t<o.length-1?"/".concat(i):"/tours")}));S("".concat(n,"/add-edit/").concat(null===o||void 0===o?void 0:o._id,"/add/admin"))}})})}}},{label:"Participants",name:"participants",options:{filter:!1,sort:!1,customBodyRenderLite:function(n,t){var o,e=i[n],l=new Date(new Date("".concat(null===e||void 0===e?void 0:e.tourDate)).setDate(new Date("".concat(null===e||void 0===e?void 0:e.tourDate)).getDate()+Number("".concat(null===e||void 0===e||null===(o=e.duration)||void 0===o?void 0:o.days)))),a="tour"==(null===e||void 0===e?void 0:e.category)&&new Date("".concat(null===e||void 0===e?void 0:e.tourDate))>new Date?"upcoming":l<new Date?"completed":"ongoing";return(0,B.jsx)(d.Z,{sx:{display:"flex"},children:(0,B.jsx)(f.Z,{sx:{backgroundColor:"#005e9d",color:"#fff",transition:"0.4s ease-in-out",textTransform:"capitalize","&:hover":{color:"#005e9d",backgroundColor:"#fff",border:"1px solid #005e9d"}},label:"participants",variant:"outlined",onClick:function(){y({flag:!0,id:null===e||void 0===e?void 0:e._id}),k(a)}})})}}},{label:"Actions",name:"actions",options:{filter:!0,sort:!0,customBodyRenderLite:function(n,o){var e=i[n];return(0,B.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,B.jsx)(a.Z,{onClick:function(){return n=null===e||void 0===e?void 0:e._id,null===e||void 0===e||e.category,void S("".concat(P,"/add-edit/").concat(n,"/edit/admin"));var n},children:(0,B.jsx)(r.Z,{style:{color:"#444"}})}),(0,B.jsx)(a.Z,{onClick:function(){return n=null===e||void 0===e?void 0:e._id,void s().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){null!==i&&void 0!==i&&i.isConfirmed&&g.Z.deleteTour(n).then((function(n){s().fire("Deleted!","Deleted successfully...","success"),t(),S("")})).catch((function(n){var i,t;console.error(n),null===n||void 0===n||null===(i=n.response)||void 0===i||null===(t=i.data)||void 0===t||t.message,s().fire("Coudn't Deleted!","Couldn't Deleted successfully...","error")}))}));var n},children:(0,B.jsx)(u.default,{color:"error"})})]})}}}],N={filterType:"dropdown",responsive:"standard",enableNestedDataAccess:".",customToolbar:function(){return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(x.Z,{title:"Add ".concat(c.split(" ")[0]),placement:"top",children:(0,B.jsx)(a.Z,{onClick:function(){S("".concat(P,"/add-edit/0/add/admin"))},children:(0,B.jsx)(m.Z,{sx:{color:"#ff9800"},fontSize:"large"})})})})}};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Z,{sx:{mt:2},disableGutters:!0,children:[(null===j||void 0===j?void 0:j.flag)&&(0,B.jsx)(W,{values:j,handleDialogue:y,status:C}),(0,B.jsx)(l.ZP,{title:(0,B.jsx)("h3",{children:c}),columns:"tour"==T?null===A||void 0===A?void 0:A.filter((function(n){return!["addTour","price"].includes(null===n||void 0===n?void 0:n.name)})):null===A||void 0===A?void 0:A.filter((function(n){return!["participants","tourDate"].includes(null===n||void 0===n?void 0:n.name)})),data:i,options:N})]}),(0,B.jsx)(v.j3,{})]})}},62265:function(n,i,t){var o=t(64836);i.Z=void 0;var e=o(t(45649)),l=t(80184),d=(0,e.default)((0,l.jsx)("path",{d:"M20 1v3h3v2h-3v3h-2V6h-3V4h3V1h2zm-8 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2-9.75V7h3v3h2.92c.05.39.08.79.08 1.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c.68 0 1.35.08 2 .25z"}),"AddLocationAlt");i.Z=d},41286:function(n,i,t){var o=t(64836);i.Z=void 0;var e=o(t(45649)),l=t(80184),d=(0,e.default)((0,l.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");i.Z=d},67236:function(n,i,t){var o=t(64836);i.Z=void 0;var e=o(t(45649)),l=t(80184),d=(0,e.default)((0,l.jsx)("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"LocalPrintshop");i.Z=d}}]);
//# sourceMappingURL=934.b54ed587.chunk.js.map