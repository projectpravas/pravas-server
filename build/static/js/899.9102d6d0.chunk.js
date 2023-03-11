"use strict";(self.webpackChunkpravas_client=self.webpackChunkpravas_client||[]).push([[899],{73899:function(e,r,i){i.r(r);var a=i(29439),n=i(72791),s=i(60220),t=i(5849),o=i(4708),d=i(93006),l=i(25801),u=i(13034),c=i(64554),m=i(88588),h=i(33553),v=i(4567),Z=i(10266),f=i(36395),x=i(57012),q=i(11087),p=i(57689),b=i(66934),w=i(87711),g=i(19773),j=i(55705),y=i(43725),_=i(80184),C=(0,y.Z)({hasEmail:!0}),S={email:""},D=((0,b.ZP)(q.OL)({textDecoration:"none"}),(0,f.Z)());r.default=function(e){var r=(0,n.useState)(!1),i=(0,a.Z)(r,2),f=i[0],q=i[1],b=(0,p.s0)();return(0,_.jsx)(x.Z,{theme:D,children:(0,_.jsxs)(Z.Z,{component:"main",maxWidth:"xs",children:[(0,_.jsx)(o.ZP,{}),(0,_.jsx)(j.J9,{initialValues:S,validationSchema:C,onSubmit:function(e,r){var i=r.resetForm;(0,g.HT)(w.Z.sendPasswordResetLink(e.email).then((function(r){var a=r.data.message||"Check your ".concat(e.email," address.. ");(0,g.Qm)(a,8e3),i({values:S}),q(!1),b("/login")})).catch((function(e){console.error("err :",e),q(!1);var r=e.response.data.message||"Invalid email address";(0,g.Jc)(r,5e3)})),{pending:"Please wait...."})},children:function(e){var r=e.values,i=e.errors,a=e.isValid,n=e.touched,o=e.handleBlur,Z=e.handleChange,x=e.handleSubmit;return(0,_.jsx)("form",{onSubmit:x,children:(0,_.jsx)(m.Z,{variant:"elevation",sx:{p:3,pt:0},children:(0,_.jsxs)(c.Z,{sx:{marginTop:6,marginBottom:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,_.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,_.jsx)(h.Z,{})}),(0,_.jsx)(v.Z,{component:"h1",variant:"h5",children:"Change Password"}),(0,_.jsx)("br",{}),(0,_.jsxs)(v.Z,{component:"p",variant:"caption",children:["Enter your registered ",(0,_.jsx)("b",{children:"Email Address"})," and click on button"]}),(0,_.jsxs)(c.Z,{sx:{mt:1},children:[(0,_.jsx)(d.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:null===r||void 0===r?void 0:r.email,autoComplete:"email",autoFocus:!0,onBlur:o,onChange:Z,error:!(null===n||void 0===n||!n.email||null===i||void 0===i||!i.email),helperText:null!==n&&void 0!==n&&n.email&&null!==i&&void 0!==i&&i.email?null===i||void 0===i?void 0:i.email:"",disabled:f&&!i.email}),(0,_.jsx)(l.Z,{control:(0,_.jsx)(u.Z,{value:"remember",color:"primary",onChange:function(){return q(!f)},checked:!(null===r||void 0===r||!r.email)&&f}),label:"Allow us to send mail.."}),(0,_.jsx)(t.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!a||!f,children:"Send Link"})]})]})})})}})]})})}},43725:function(e,r,i){var a=i(81724);r.Z=function(e){var r=e.hasFirst,i=void 0!==r&&r,n=e.hasLast,s=void 0!==n&&n,t=e.hasMobile,o=void 0!==t&&t,d=e.hasEmail,l=void 0!==d&&d,u=e.hasStreet,c=void 0!==u&&u,m=e.hasCity,h=void 0!==m&&m,v=e.hasState,Z=void 0!==v&&v,f=e.hasCountry,x=void 0!==f&&f,q=e.hasPincode,p=void 0!==q&&q,b=e.hasPassword,w=void 0!==b&&b,g=e.hasRole,j=void 0!==g&&g,y=e.hasDob,_=void 0!==y&&y,C=e.hasGender,S=void 0!==C&&C,D=e.hasAvatar,k=void 0!==D&&D,P=e.hasStatus,R=void 0!==P&&P,A=e.hasDesignation,E=void 0!==A&&A,M={},L={},N={};return i&&(L.first=a.Z_().required("First Name is required")),s&&(L.last=a.Z_().required("Last Name is required")),(i||s)&&(M.name=a.Ry(L)),o&&(M.mobile=a.Z_().required().matches(/^[0-9]{10}$/,"Mobile Must be 10 Digit")),l&&(M.email=a.Z_().required().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/,"Enter valid Email Address")),c&&(N.street=a.Z_().required("Street is required")),h&&(N.city=a.Z_().required("Address is required")),Z&&(N.state=a.Z_().required("State is required")),x&&(N.country=a.Z_().required("Country is required")),p&&(N.pincode=a.Z_().required("Pincode is required")),(c||h||Z||x||p)&&(M.address=a.Ry(N)),w&&(M.password=a.Z_().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Password must have min 8 characters and 1 cap & small letter, Symbol")),j&&(M.role=a.Z_().required("Role is required")),_&&(M.dob=a.hT().required("Birth date is required").min(new Date(Date.now()-3784e9),"Date is too old, must be within 120 year back than now").max(new Date(Date.now()),"Date is greater than todays Date")),S&&(M.gender=a.Z_().required("Gender is required")),k&&(M.avatar=a.Z_().required("Avatar is required")),R&&(M.status=a.Z_().required("Status is required")),E&&(M.designation=a.Z_().required("Designation is required")),a.Ry().shape(M)}},88588:function(e,r,i){var a=i(87462),n=i(63366),s=i(72791),t=i(28182),o=i(94419),d=i(66934),l=i(31402),u=i(4841),c=i(56211),m=i(80184),h=["className","raised"],v=(0,d.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),Z=s.forwardRef((function(e,r){var i=(0,l.Z)({props:e,name:"MuiCard"}),s=i.className,d=i.raised,u=void 0!==d&&d,Z=(0,n.Z)(i,h),f=(0,a.Z)({},i,{raised:u}),x=function(e){var r=e.classes;return(0,o.Z)({root:["root"]},c.y,r)}(f);return(0,m.jsx)(v,(0,a.Z)({className:(0,t.default)(x.root,s),elevation:u?8:void 0,ref:r,ownerState:f},Z))}));r.Z=Z},56211:function(e,r,i){i.d(r,{y:function(){return s}});var a=i(75878),n=i(21217);function s(e){return(0,n.Z)("MuiCard",e)}var t=(0,a.Z)("MuiCard",["root"]);r.Z=t}}]);
//# sourceMappingURL=899.9102d6d0.chunk.js.map