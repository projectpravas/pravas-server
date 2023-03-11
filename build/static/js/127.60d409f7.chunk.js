"use strict";(self.webpackChunkpravas_client=self.webpackChunkpravas_client||[]).push([[127],{7492:function(e,i,a){a.d(i,{y:function(){return n}});var n=[{id:1,jobTitle:"Tour Lead",jobLocation:"Pune",lowerSalary:"12K",higherSalary:"14K",tags:["Full Time","Design","Remote"],jobDesc:"UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components. To be successful in this role, you should have experience with design software and wireframe tools. If you also have a portfolio of professional design projects that includes work with web/mobile applications, we\u2019d like to meet you.",companyDesc:"Pravas has an enthusiastic, passionate team who are delivering \u2018out-of-the-world\u2019 travel experiences. They are playing a pivotal role in finding and managing tours at some of the most beautiful domestic as well as international locations.",benefits:"Our primary focus is on cherishing the small moments like \u2013 the haunting tunes of a local song, the enticing smells of a spice market, the sunset during a jungle safari or the brilliant light of a thousand diyas at a temple. We always find something new and different to offer in terms of heritage, architecture, and experience. We take you to the quiet place where you can breathe fresh, spend quality time, and revive your energy to grow further. We are focused to give all these treasures all in one tour."},{id:2,jobTitle:"WordPress Developer",jobLocation:"Pune",lowerSalary:"12K",higherSalary:"14K",tags:["FullTime","Design","Remote"],jobDesc:"UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components. To be successful in this role, you should have experience with design software and wireframe tools. If you also have a portfolio of professional design projects that includes work with web/mobile applications, we\u2019d like to meet you.",companyDesc:"Pravas has an enthusiastic, passionate team who are delivering \u2018out-of-the-world\u2019 travel experiences. They are playing a pivotal role in finding and managing tours at some of the most beautiful domestic as well as international locations.",benefits:"Our primary focus is on cherishing the small moments like \u2013 the haunting tunes of a local song, the enticing smells of a spice market, the sunset during a jungle safari or the brilliant light of a thousand diyas at a temple. We always find something new and different to offer in terms of heritage, architecture, and experience. We take you to the quiet place where you can breathe fresh, spend quality time, and revive your energy to grow further. We are focused to give all these treasures all in one tour."}]},21127:function(e,i,a){a.r(i);var n=a(29439),l=a(72791),o=a(4567),r=a(93006),t=a(81153),s=a(64554),u=a(5849),d=a(7492),m=a(65639),c=a(88970),h=a(25801),g=a(45363),x=a(17133),f=a(50225),p=a(55705),v=a(81724),b=a(57689),y=a(80184),j=(0,f.Z)(r.Z)({margin:"10px",width:"300px"}),w=v.Ry().shape({firstName:v.Z_().min(2,"Too Short!").max(50,"Too Long!").matches(/^[A-Za-z ]*$/,"enter  only Alphabates").required("First Name is required"),lastName:v.Z_().min(2,"Too Short!").max(50,"Too Long!").matches(/^[A-Za-z ]*$/,"enter the only Alphabates").required("LastName is required"),email:v.Z_().email("Invalid email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/,"Enter valid Email Address").required("Required"),mobile:v.Z_().min(10,"too short").max(10,"too long").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Enter Valid Mobile number").required("Required"),age:v.Rx().required("required"),gender:v.Z_().required("equired"),qualification:v.Z_().required("Enter valid Qualification"),experience:v.Rx().required("Experience in year")});i.default=function(){var e=l.useState([]),i=(0,n.Z)(e,2),a=(i[0],i[1],(0,b.UO)().id),r=d.y.find((function(e){return(null===e||void 0===e?void 0:e.id)==Number(a)})),f={firstName:"",lastName:"",mobile:"",email:"",qualification:"",experience:"",age:"",gender:""};return(0,y.jsxs)(t.ZP,{container:!0,sx:{d:"flex",flexDirection:"column",alignItems:"center",margin:"50px 0"},children:[(0,y.jsxs)(s.Z,{sx:{marginBottom:"30px"},children:[(0,y.jsx)(o.Z,{variant:"h5",sx:{color:"#27488D",fontFamily:"Sans-serif",fontSize:" 22px",fontWeight:"750",height:"30px",margin:"10px 0",textAlign:"center"},children:"Job Application Form"}),(0,y.jsxs)(o.Z,{variant:"h5",sx:{color:"#27488D",fontFamily:"Sans-serif",height:"30px",textAlign:"center",marginBottom:"20px"},children:[(0,y.jsx)("b",{children:" Job Title-"})," ",null===r||void 0===r?void 0:r.jobTitle]}),(0,y.jsx)(o.Z,{sx:{color:"#27488D",fontFamily:"Sans-serif",height:"30px"},children:"Please Fill Out the Form Below to Submit Your Job Application!"})]}),(0,y.jsx)(p.J9,{initialValues:f,validationSchema:w,onSubmit:function(e,i){var a=i.resetForm;console.log("values:",e),a({values:f})},children:function(e){var i=e.values,a=e.touched,n=e.errors,l=e.handleSubmit,o=e.handleChange,r=e.handleBlur;return(0,y.jsx)(p.l0,{onSubmit:l,children:(0,y.jsxs)(t.ZP,{sx:{margin:{xs:"auto"}},children:[(0,y.jsxs)(t.ZP,{item:!0,sx:{m:2},children:[(0,y.jsx)(j,{name:"firstName",id:"firstName",type:"text",label:"First Name",value:i.firstName,onChange:o,onBlur:r,error:!(null===a||void 0===a||!a.firstName||null===n||void 0===n||!n.firstName),helperText:null!==a&&void 0!==a&&a.firstName&&null!==n&&void 0!==n&&n.firstName?null===n||void 0===n?void 0:n.firstName:""}),(0,y.jsx)(j,{name:"lastName",id:"lastName",type:"text",label:"Last Name",value:i.lastName,onChange:o,onBlur:r,error:!(null===a||void 0===a||!a.lastName||null===n||void 0===n||!n.lastName),helperText:null!==a&&void 0!==a&&a.firstName&&null!==n&&void 0!==n&&n.firstName?null===n||void 0===n?void 0:n.firstName:""})]}),(0,y.jsxs)(t.ZP,{item:!0,sx:{m:2},children:[(0,y.jsx)(j,{name:"mobile",id:"mobile",type:"text",label:"Mobile Number",value:i.mobile,onChange:o,onBlur:r,error:!(null===a||void 0===a||!a.mobile||null===n||void 0===n||!n.mobile),helperText:null!==a&&void 0!==a&&a.mobile&&null!==n&&void 0!==n&&n.mobile?null===n||void 0===n?void 0:n.mobile:""}),(0,y.jsx)(j,{name:"email",id:"email",type:"email",label:"Email",value:i.email,onChange:o,onBlur:r,error:!(null===a||void 0===a||!a.email||null===n||void 0===n||!n.email),helperText:null!==a&&void 0!==a&&a.email&&null!==n&&void 0!==n&&n.email?null===n||void 0===n?void 0:n.email:""})]}),(0,y.jsxs)(t.ZP,{item:!0,sx:{m:2},children:[(0,y.jsx)(j,{name:"qualification",id:"qualification",type:"text",label:"Qualification",value:i.qualification,onChange:o,onBlur:r,error:!(null===a||void 0===a||!a.qualification||null===n||void 0===n||!n.qualification),helperText:null!==a&&void 0!==a&&a.qualification&&null!==n&&void 0!==n&&n.qualification?null===n||void 0===n?void 0:n.qualification:""}),(0,y.jsx)(j,{name:"experience",id:"experience",type:"experience",label:"Total Experience in year",value:i.experience,onChange:o,onBlur:r,error:!(null===a||void 0===a||!a.experience||null===n||void 0===n||!n.experience),helperText:null!==a&&void 0!==a&&a.experience&&null!==n&&void 0!==n&&n.experience?null===n||void 0===n?void 0:n.experience:""})]}),(0,y.jsxs)(t.ZP,{item:!0,sx:{m:2},children:[(0,y.jsx)(j,{name:"age",id:"age",type:"number",label:"Age",value:i.age,onChange:o,onBlur:r,error:!(null===a||void 0===a||!a.age||null===n||void 0===n||!n.age),helperText:null!==a&&void 0!==a&&a.age&&null!==n&&void 0!==n&&n.age?null===n||void 0===n?void 0:n.age:""}),(0,y.jsxs)(g.Z,{sx:{m:1.5,border:"1px solid #c4c4c4",paddingLeft:"2px",width:"295px",borderRadius:"5px"},children:[(0,y.jsx)(x.Z,{id:"gender",sx:{color:"#919191",m:1},children:"Gender"}),(0,y.jsxs)(c.Z,{row:!0,name:"gender",sx:{ml:1},onChange:o,onBlur:r,children:[(0,y.jsx)(h.Z,{sx:{color:"#919191"},value:"female",control:(0,y.jsx)(m.Z,{}),label:"Female"}),(0,y.jsx)(h.Z,{sx:{color:"#919191"},value:"male",control:(0,y.jsx)(m.Z,{}),label:"Male"}),(0,y.jsx)(h.Z,{sx:{color:"#919191"},value:"other",control:(0,y.jsx)(m.Z,{}),label:"Other"})]})]}),(0,y.jsx)(t.ZP,{container:!0,sx:{marginTop:"50px"},children:(0,y.jsx)(u.Z,{type:"submit",variant:"contained",sx:{margin:"auto",backgroundColor:"#27488D","&:hover":{backgroundColor:"#27488D"}},children:"Submit"})})]})]})})}})]})}}}]);
//# sourceMappingURL=127.60d409f7.chunk.js.map