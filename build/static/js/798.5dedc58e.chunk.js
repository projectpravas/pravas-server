"use strict";(self.webpackChunkpravas_client=self.webpackChunkpravas_client||[]).push([[798],{29798:function(e,t,n){n.r(t);var o=n(29439),l=n(97639),i=n(64554),r=n(90977),c=n(89078),a=n(72791),u=n(57689),s=n(15238),d=n(41286),f=n(4583),v=n(27247),h=n(21830),p=n.n(h),g=n(80184);t.default=function(e){var t=(0,a.useState)([]),n=(0,o.Z)(t,2),h=n[0],b=n[1],m=(0,u.TH)().pathname,x=(0,u.s0)(),Z=function(){s.Z.fetchAllBlogs().then((function(e){var t;return b(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data)})).catch((function(e){console.error(e)}))};(0,a.useEffect)((function(){Z()}),[]);var j="Blogs",B=[{label:"Sr No",name:"blogId",options:{filter:!1,sort:!0,customBodyRenderLite:function(e){return e+1}}},{label:"Title",name:"title",options:{filter:!0,sort:!0}},{label:"Categories",name:"categories",options:{filter:!0,sort:!0}},{label:"Actions",name:"actions",options:{filter:!0,sort:!0,customBodyRenderLite:function(e){var t=h[e];return(0,g.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,g.jsx)(r.Z,{onClick:function(){return e=null===t||void 0===t?void 0:t._id,void x("".concat(m,"/add-edit/").concat(e,"/edit/admin"));var e},children:(0,g.jsx)(d.Z,{style:{color:"#444"}})}),(0,g.jsx)(r.Z,{onClick:function(){return e=null===t||void 0===t?void 0:t._id,void p().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){null!==t&&void 0!==t&&t.isConfirmed&&s.Z.deleteBlog(e).then((function(e){p().fire("Deleted!","Deleted successfully...","success"),Z()})).catch((function(e){var t,n;console.error(e),null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n||n.message,p().fire("Coudn't Deleted!","Couldn't Deleted successfully...","error")}))}));var e},children:(0,g.jsx)(v.default,{color:"error"})})]})}}}],y={filterType:"dropdown",responsive:"standard",enableNestedDataAccess:".",customToolbar:function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(l.Z,{title:"Add ".concat(j.split(" ")[0]),placement:"top",children:(0,g.jsx)(r.Z,{onClick:function(){x("".concat(m,"/add-edit/0/add/admin"))},children:(0,g.jsx)(f.Z,{sx:{color:"#ff9800"},fontSize:"large"})})})})}};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.ZP,{title:j,columns:B,data:h,options:y}),(0,g.jsx)(u.j3,{})]})}},15238:function(e,t,n){var o=n(15671),l=n(43144),i=n(54110),r=function(){function e(){(0,o.Z)(this,e)}return(0,l.Z)(e,null,[{key:"createBlog",value:function(e){return i.b.post(i.z.api.blog.create,e)}},{key:"updateBlog",value:function(e,t){return i.b.put(i.z.api.blog.update+e,t)}},{key:"deleteBlog",value:function(e){return i.b.delete(i.z.api.blog.delete+e)}},{key:"fetchOneBlog",value:function(e){return i.b.get(i.z.api.blog.getOne+e)}},{key:"fetchAllBlogs",value:function(){return i.b.get(i.z.api.blog.getAll)}}]),e}();t.Z=r},4583:function(e,t,n){var o=n(64836);t.Z=void 0;var l=o(n(45649)),i=n(80184),r=(0,l.default)((0,i.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1zm-4-6c0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2V8c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1z"}),"AddToQueueRounded");t.Z=r},41286:function(e,t,n){var o=n(64836);t.Z=void 0;var l=o(n(45649)),i=n(80184),r=(0,l.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=r}}]);
//# sourceMappingURL=798.5dedc58e.chunk.js.map