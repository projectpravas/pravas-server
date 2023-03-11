"use strict";(self.webpackChunkpravas_client=self.webpackChunkpravas_client||[]).push([[378],{5649:function(e,t,n){var i,l=n(30168),r=(n(72791),n(64554)),o=n(94721),s=n(81153),a=n(4841),c=n(4567),d=n(42024),x=n(8261),u=n(93457),h=n(11087),p=n(57836),f=n(72426),g=n.n(f),v=n(80184),j=(0,u.Z)(s.ZP)({transition:"0.7s ease-in-out","&:hover":{transform:"translate(15px)"}}),Z=(0,u.Z)(c.Z)(i||(i=(0,l.Z)(["\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n"]))),m=(0,u.Z)(c.Z)({overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3}),b={display:"-webkit-box","-webkit-line-clamp":3,"-webkit-box-orient":"vertical",overflow:"hidden"};t.Z=function(e){var t=e.image,n=e.title,i=e.desc,l=e.id,u=e.category,f=e.date,y=f&&new Date(Number(f)),P=y&&y.getMonth()+1,k=y&&y.getDate();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(s.ZP,{container:!0,sx:{pt:2,px:2},children:(0,v.jsx)(a.Z,{elevation:1,sx:{borderRadius:5,backgroundColor:"white",transition:"0.8s ease-in-out","&:hover":{boxShadow:"0px 0px 20px -5px rgb(0 0 0 / 50%)",transform:"translateY(-5px)"}},children:(0,v.jsx)(h.OL,{to:"/blogs/details/".concat(l),style:{textDecoration:"none",color:"black"},children:(0,v.jsx)(s.ZP,{container:!0,sx:{p:2,pb:1.2},xs:12,children:(0,v.jsxs)(s.ZP,{item:!0,xs:12,sx:{flexDirection:"column",alignItems:"center",flexWrap:"wrap"},children:[(0,v.jsx)(s.ZP,{children:(0,v.jsxs)(r.Z,{position:"relative",children:[(0,v.jsx)("img",{style:{width:"100%",height:230,borderRadius:10,objectFit:"cover"},onError:function(e){var t=e.currentTarget;t.onerror=null,t.src="placeholder-blogs.png"},src:"".concat(null===p.Z||void 0===p.Z?void 0:p.Z.serverBaseURL,"/").concat(t)?"".concat(null===p.Z||void 0===p.Z?void 0:p.Z.serverBaseURL,"/").concat(t):"./placeholder-blogs.png",alt:""}),(0,v.jsx)(r.Z,{position:"absolute",bottom:15,right:8,bgcolor:"#005d9d",p:1,borderRadius:5,width:70,textAlign:"center",color:"#fff",fontSize:15,children:(0,v.jsxs)("span",{children:[k," ",g()(P).format("MMM")]})})]})}),(0,v.jsxs)(s.ZP,{container:!0,sx:{justifyContent:"space-between",p:1},children:[(0,v.jsx)(s.ZP,{item:!0,children:(0,v.jsxs)(s.ZP,{container:!0,sx:{color:"#54595f",display:"flex",alignItems:"center"},children:[(0,v.jsx)(r.Z,{pr:1,children:(0,v.jsx)(d.Z,{fontSize:"small",sx:{fontSize:"0.8rem"}})}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(c.Z,{sx:{fontSize:"0.9rem"},children:"Admin"})})]})}),(0,v.jsx)(s.ZP,{item:!0,children:(0,v.jsx)(s.ZP,{container:!0,sx:{color:"#54595f",display:"flex",alignItems:"center"},children:(0,v.jsx)(r.Z,{children:(0,v.jsx)(c.Z,{sx:{fontSize:"0.9rem",textTransform:"capitalize"},children:u[0]})})})})]}),(0,v.jsxs)(s.ZP,{sx:{p:1,display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:168},children:[(0,v.jsx)(Z,{sx:{color:"#005d9d",fontSize:19,fontWeight:600,pb:1},children:n}),(0,v.jsx)(m,{sx:{color:"#7a7a7a",fontSize:16,fontWeight:400,fontFamily:"inherit"},style:b,dangerouslySetInnerHTML:{__html:i.slice(i.indexOf("<p"),i.indexOf("</p>"))}})]}),(0,v.jsx)(o.Z,{}),(0,v.jsxs)(j,{sx:{display:"flex",alignItems:"center",color:"#005d9d",pt:1,cursor:"pointer"},children:[(0,v.jsx)(c.Z,{sx:{p:1,fontSize:15,fontWeight:900},children:"Explore"}),(0,v.jsx)(x.Z,{})]})]})})})})})})}},17822:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(29439),l=n(81153),r=n(10266),o=n(72791),s=n(5649),a=n(11703),c=n(53767),d=n(80184),x=function(e){for(var t=e.totalPosts,n=e.postsPerPage,i=e.setCurrentPage,l=1,r=1;r<=Math.ceil(t/n);r++)l=r;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.Z,{children:(0,d.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center"},count:l,color:"primary",defaultPage:1,size:"large",onChange:function(e,t){i(t)}})})})},u=n(6907),h=n(15238),p=n(57689),f=function(e){var t=o.useState([]),n=(0,i.Z)(t,2),a=n[0],c=n[1],f=o.useState(1),g=(0,i.Z)(f,2),v=g[0],j=g[1],Z=o.useState(9),m=(0,i.Z)(Z,1)[0],b=v*m,y=b-m,P=null===a||void 0===a?void 0:a.slice(y,b);o.useEffect((function(){h.Z.fetchAllBlogs().then((function(e){var t;c(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data)})).catch((function(e){console.log(e)}))}),[]);var k=(0,p.TH)().pathname,w="blogs"==k.split("/")[k.split("/").length-1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.j3,{}),w&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(u.ql,{children:[(0,d.jsx)("title",{children:"Pravas Blogs"}),(0,d.jsx)("meta",{name:"description",content:"Pravas Tourism Blogs"}),(0,d.jsx)("meta",{name:"keywords",content:"Pravas Tourism Blogs"}),(0,d.jsx)("link",{rel:"canonical",href:"/blogs"})]}),(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(l.ZP,{item:!0,children:(0,d.jsx)(l.ZP,{padding:1,paddingY:6,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",justifyContent:"space-evenly",children:Array.isArray(a)&&P.map((function(e,t){return(0,d.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:4,sx:{pt:3},children:(0,d.jsx)(s.Z,{id:null===e||void 0===e?void 0:e._id,image:null===e||void 0===e?void 0:e.image,title:null===e||void 0===e?void 0:e.title,desc:null===e||void 0===e?void 0:e.richText,category:null===e||void 0===e?void 0:e.categories,date:null===e||void 0===e?void 0:e.creationDate})},(null===e||void 0===e?void 0:e.title)+t)}))})}),(0,d.jsx)(l.ZP,{item:!0,sx:{mb:3},children:(0,d.jsx)(x,{totalPosts:null===a||void 0===a?void 0:a.length,postsPerPage:m,setCurrentPage:j})})]})]})]})}},15238:function(e,t,n){var i=n(15671),l=n(43144),r=n(54110),o=function(){function e(){(0,i.Z)(this,e)}return(0,l.Z)(e,null,[{key:"createBlog",value:function(e){return r.b.post(r.z.api.blog.create,e)}},{key:"updateBlog",value:function(e,t){return r.b.put(r.z.api.blog.update+e,t)}},{key:"deleteBlog",value:function(e){return r.b.delete(r.z.api.blog.delete+e)}},{key:"fetchOneBlog",value:function(e){return r.b.get(r.z.api.blog.getOne+e)}},{key:"fetchAllBlogs",value:function(){return r.b.get(r.z.api.blog.getAll)}}]),e}();t.Z=o},42024:function(e,t,n){var i=n(64836);t.Z=void 0;var l=i(n(45649)),r=n(80184),o=(0,l.default)((0,r.jsx)("path",{d:"m16.81 8.94-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06.92.92L6.92 16H6zm13.71-9.96c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM2 20h20v4H2z"}),"BorderColorOutlined");t.Z=o},8261:function(e,t,n){var i=n(64836);t.Z=void 0;var l=i(n(45649)),r=n(80184),o=(0,l.default)((0,r.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"}),"East");t.Z=o}}]);
//# sourceMappingURL=378.024d4caf.chunk.js.map