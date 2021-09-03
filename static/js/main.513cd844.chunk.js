(this["webpackJsonpmini-paint"]=this["webpackJsonpmini-paint"]||[]).push([[0],{105:function(e,t,a){},247:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n,r,c,A,o,i,s=a(0),u=a.n(s),d=a(21),l=a.n(d),b=a(15),j="SET_LINE_WEIGHT",p="SET_LINE_COLOR",_="SET_INSTRUMENT",g="SET_CANVAS_SIZE",m="SET_MOUSE_DOWN_POSITION",f="SET_MAIN_CTX",O="SET_SUB_CTX",h="SET_DATA_URL",w="UPLOAD_IMAGE_SUCCEEDED",x="UPLOAD_IMAGE_FAILED",v="OPEN_UPLOAD_WINDOW",E="CREATE_USER_WITH_E_MAIL",N="CREATE_USER_WITH_E_MAIL_SUCCEEDED",C="CREATE_USER_WITH_E_MAIL_FAILED",k="SIGN_IN_WITH_E_MAIL",U="SIGN_IN_WITH_E_MAIL_SUCCEEDED",I="SIGN_IN_WITH_E_MAIL_FAILED",y="SIGN_OUT",R="CHECK_USER_AFTORIZATION",B="RESET_ERROR_MESSAGE",D="SET_LOCAL_USER_ERROR_MESSAGE",S="GET_IMAGES_FROM_DB",Q="GET_IMAGES_FROM_DB_SUCCEEDED",Y="GET_IMAGES_FROM_DB_FAILED",P="SORT_IMAGES_DATA",L="GET_USER_NAME",M="GET_USER_ID",F="DEL_CLICKED",T="DEL_USER_IMAGE_FROM_DB",K="DEL_USER_IMAGE_FROM_DB_SUCCEEDED",H="DEL_USER_IMAGE_FROM_DB_FAILED",W=function(e){return{type:N,payload:e}},G=function(e){return{type:U,payload:e}},z=a(105),J=a.n(z),V=a(82),X=a(6),Z=a(57),q=a(290),$=a(294),ee=a(35),te=a.n(ee),ae=a(36),ne=a(37),re=a(295),ce=function(e){return e.forEach((function(e){return 0!==e.length}))},Ae=a(3),oe={fadeIn:{animation:"x 1s",animationName:ne.a.keyframes(ae.fadeIn,"fadeIn")}},ie=function(){var e=Object(s.useState)({email:"",password:"",confirmPassword:""}),t=Object(Z.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(!0),c=Object(Z.a)(r,2),A=c[0],o=c[1],i=Object(b.b)(),u=function(e){n(Object(X.a)(Object(X.a)({},a),{},Object(V.a)({},e.target.name,e.target.value)))},d=Object(b.c)((function(e){return e.authReducer.errorMessage})),l=function(e){i(function(e){return{type:k,payload:e}}(e))},j=function(e){i(function(e){return{type:E,payload:e}}(e))},p=function(){i({type:B})},_=function(e){i(function(e){return{type:D,error:e}}(e))},g=function(){return o(!A)};return Object(Ae.jsx)(ne.a.StyleRoot,{children:Object(Ae.jsxs)("div",{className:te.a.wrapper,style:oe.fadeIn,children:[Object(Ae.jsxs)("div",{className:te.a.form_wrapper,children:[d?Object(Ae.jsx)(re.a,{className:te.a.alert,severity:"error",children:d}):null,Object(Ae.jsx)("h3",{className:te.a.header,children:A?"Login":"Register"}),Object(Ae.jsxs)("form",{className:te.a.form,children:[Object(Ae.jsx)($.a,{onChange:u,onFocus:p,className:te.a.login,variant:"outlined",id:"email",label:"Email Address",name:"email",fullWidth:!0,margin:"dense",value:a.email}),Object(Ae.jsx)($.a,{onChange:u,onFocus:p,className:te.a.password,variant:"outlined",name:"password",label:"Password",type:"password",id:"password",fullWidth:!0,margin:"dense",value:a.password}),A?null:Object(Ae.jsx)($.a,{onChange:u,onFocus:p,className:te.a.password,variant:"outlined",name:"confirmPassword",label:"Confirm password",type:"password",id:"confirm_password",fullWidth:!0,margin:"dense",value:a.confirmPassword}),Object(Ae.jsx)(q.a,{onClick:function(e){switch(A){case!0:ce([a.email,a.password])||l(a);break;case!1:ce([a.email,a.password,a.confirmPassword])||a.password!==a.confirmPassword?_("Passwords must be at least 6 characters long and be the same"):j(a)}},className:te.a.button,variant:"contained",color:"primary",children:A?"Login":"Register"})]})]}),Object(Ae.jsx)("p",{className:te.a.text,children:A?Object(Ae.jsxs)("span",{children:["or you can ",Object(Ae.jsx)("span",{className:te.a.span_link,onClick:g,children:"Register"})," with account"]}):Object(Ae.jsxs)("span",{children:["or you can ",Object(Ae.jsx)("span",{className:te.a.span_link,onClick:g,children:"Login"})," with account"]})})]})})},se=a(26),ue=a(39),de=a.n(ue),le=function(e){return{type:Q,payload:e}},be=function(e){return{type:Y,payload:e}},je=a(298),pe=function(e){return 0===Object.keys(e).length},_e={fadeIn:{animation:"x 1s",animationName:ne.a.keyframes(ae.fadeIn,"fadeIn")}},ge=function(e){e.signOut;var t=Object(s.useState)(""),a=Object(Z.a)(t,2),n=a[0],r=a[1],c=Object(b.b)(),A=Object(b.c)((function(e){return e.homeReducer.imagesData})),o=Object(b.c)((function(e){return e.homeReducer.sortedImagesData}));return Object(s.useEffect)((function(){c({type:S})}),[c]),Object(Ae.jsx)(ne.a.StyleRoot,{children:Object(Ae.jsxs)("div",{className:de.a.wrapper,style:_e.fadeIn,children:[Object(Ae.jsxs)("div",{className:de.a.search_input_wrapper,children:[Object(Ae.jsx)("span",{className:de.a.search_input_head,children:"Find user"}),Object(Ae.jsx)($.a,{onChange:function(e){return r(e.target.value),c((t=e.target.value,{type:P,userName:t}));var t},className:de.a.search_input,variant:"outlined",id:"email",placeholder:"User name",name:"email",fullWidth:!0,margin:"dense",disabled:!Object.keys(A).length,value:n}),pe(o)&&n?Object(Ae.jsx)(re.a,{className:de.a.alert,severity:"warning",children:"No such users found"}):null]}),Object.keys(pe(o)?A:o).map((function(e,t){return Object(Ae.jsxs)("div",{className:de.a.user_container,children:[Object(Ae.jsxs)("div",{className:de.a.name_container,children:[Object(Ae.jsx)(je.a,{alt:"Remy Sharp",children:e.substr(0,1).toUpperCase()}),Object(Ae.jsx)("h3",{className:de.a.user_name,children:e})]}),Object(Ae.jsx)("div",{className:de.a.container,children:A[e].map((function(e,t){return Object(Ae.jsx)("div",{className:de.a.imgWrapper,children:Object(Ae.jsx)("img",{className:de.a.img,src:e,alt:e})},t)}))})]},t)}))]})})},me=a(47),fe=a(32),Oe=a.n(fe),he=a(56),we=a(291),xe=a(297),ve=a(11),Ee=a(292),Ne=a(48),Ce=Object(Ne.b)(n||(n=Object(me.a)(["",""])),ae.fadeInDown),ke=Ne.a.div(r||(r=Object(me.a)(["animation: 1s ",";"])),Ce),Ue=function(e){var t=Object(s.useState)(!1),a=Object(Z.a)(t,2),n=a[0],r=a[1],c=function(){return r(!n)},A=Object(b.b)(),o=Object(we.a)((function(e){return Object(xe.a)({toolBar:{background:"none",margin:"5px 0%",padding:"5px",display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:"10px"},nav__link:{background:"#878F93",margin:"0 1%",color:"#281D11"},nav__link_logOut:{background:"#0B1519",color:"#fff",gridColumn:"11/13"}})}))(),i=Object(ve.a)((function(e){return{root:{color:"#000",backgroundColor:"#878f93",height:"25px",margin:"0 1%",alignSelf:"center","&:hover":{backgroundColor:"#878f93"}}}}))(q.a),u=Object(ve.a)((function(e){return{root:{color:"#fff",backgroundColor:"#0b1519",height:"25px",margin:"0 1%",gridColumn:"11/13",alignSelf:"center","&:hover":{backgroundColor:"#0b1519"}}}}))(q.a);return Object(Ae.jsxs)("div",{className:Oe.a.wrapper,children:[Object(Ae.jsxs)(Ee.a,{position:"static",className:o.toolBar,children:[Object(Ae.jsx)("div",{className:Oe.a.logo_container,children:Object(Ae.jsx)("img",{className:Oe.a.logo,src:"data:image/jpeg;base64,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Z30KSrwl6Z3GPBWS6o/GhsNLUOj79uAkyQoAYmUCIGZnfQta6zpAlQ/hwdtVRudvOhSUGaCZ+HcY8AEACSoAIMmsfmd/GhcDtWOj79uNLe+w+dC1/lTpwlb5hwAJIADJooglVfdoQkAEmwhU3HuvrDigC+vwvnQuCEZDo+/biK2rFK76w+NCB4YEmgzDQy3d/paXCfBRHBK0ncwPn20LcowPyH4i0UxLc2EH0Ed0lOXNAfgxilrqLD2toQKcmDhtnKvLu8g8CAIQVBBSiAOYTAb6EprdyuxuYUhbguQUtcianJOEZzdnd5gYaUARJMRwfkHQavv0kQ7TbNzxUCOJbmwg4JWyRn76EQV+oiJUN/Q7cNCz/OE3oMBoz2WH4GhATMsQee3oLyK8JBkYAEAMBoMqPt5zCVD6JuY+ZaAc15gAlzEe0HgGB/1MD1BAID+DLjjj9ASLx1iRIkSJF4VixInEccccf7O44444+I0JwnGjwlCcMDLmQ5Bm0ZsGc6CQgJAo8BQFHghuI4444/2RRfpjssSJFyiZRMomUTKJFyi8C/pk4ov5A//aAAwDAQACAAMAAAAQgYYYYAc4c8gAAAAAEMMIAAAAAQ08Y8I0UYQk8kwUUgc4c4AAAAEc8888888IAAAA08Y8AkkkkwogkoU4c4AAAEc88888888888IAAA08YsQ4IYMQYYA8U8AAAE88888888888888MAAA0s0IUUUwkkgck8gAAE8888888888888888IAAA8o8Aoo8UcE8c4AAA8888888888888k8888IAAU80o0EAooUo8gAAc888888888888Y888888AAA848QYM0g8U8AAE8888888888880E888888oAAUs8Io8UA8coAAU888888888884888888888AAU8Uo0wcUo8oAA888888888888sU88888888IAA8coUMoUo8oAA88888888888wY888888888oAA848U8oUo8AAA888888888840U888888888oAA8o8U8oUo8AAA8888888888Es8888888888oAA8o8U8oUo8IAA888888888ock8888888888oAA8o8U80Uo8oAA888888884coc8888888888gAA80oU8UQs0oAA08888888oYM88888888888AAU8UoUMcI8U8AAQ888888084c888888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",alt:"LOGO"})}),Object(Ae.jsx)(i,{children:Object(Ae.jsx)(he.b,{to:"/ ",activeClassName:Oe.a.activeNav__link,className:Oe.a.nav__link,children:"Home"})}),Object(Ae.jsx)(i,{children:Object(Ae.jsx)(he.b,{to:"/editor",activeClassName:Oe.a.activeNav__link,className:Oe.a.nav__link,children:"Editor"})}),Object(Ae.jsx)(i,{children:Object(Ae.jsx)(he.b,{to:"/profile",activeClassName:Oe.a.activeNav__link,className:Oe.a.nav__link,children:"Profile"})}),Object(Ae.jsx)(u,{onClick:c,children:"Log out"})]}),n&&Object(Ae.jsx)("div",{className:Oe.a.modal_window_background,children:Object(Ae.jsx)(ke,{className:Oe.a.animation_wrapper,children:Object(Ae.jsxs)("div",{className:Oe.a.modal_window,children:[Object(Ae.jsx)("p",{className:Oe.a.modal_window__text,children:"Do you want to log out?"}),Object(Ae.jsxs)("div",{className:Oe.a.modal_window__buttonst_container,children:[Object(Ae.jsx)(q.a,{onClick:c,variant:"contained",children:"No"}),Object(Ae.jsx)(q.a,{onClick:function(){A({type:y})},variant:"contained",color:"secondary",children:"Yes"})]})]})})})]})},Ie=a(29),ye=a.n(Ie),Re=a(76),Be=a.n(Re),De=function(e){return{type:w,payload:e}},Se=function(e){return{type:x,payload:e}},Qe=a(293),Ye=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),a=Object(s.useRef)(null),n=Object(b.b)(),r=function(e){n(function(e){return{type:g,windowsSize:e}}(e))},c=function(e){n(function(e){return{type:m,mouseDownPosition:e}}(e))},A=function(e){n(function(e){return{type:f,context:e}}(e))},o=function(e){n(function(e){return{type:O,context:e}}(e))},i=Object(b.c)((function(e){return e.editorReducer.lineColor})),u=Object(b.c)((function(e){return e.editorReducer.lineWeight})),d=Object(b.c)((function(e){return e.editorReducer.instrumentName})),l=Object(b.c)((function(e){return e.editorReducer.canvasSize})),j=Object(b.c)((function(e){return e.editorReducer.mouseDownPosition})),p=Object(b.c)((function(e){return e.editorReducer.mainCtx})),_=Object(b.c)((function(e){return e.editorReducer.subCtx})),h=Object(b.c)((function(e){return e.editorReducer.loading}));Object(s.useEffect)((function(){var n;if(t.current&&a.current&&(null===(n=e.current)||void 0===n?void 0:n.clientWidth)){r({width:e.current.offsetWidth,height:e.current.offsetHeight});var c=t.current.getContext("2d"),i=a.current.getContext("2d");A(c),o(i)}}),[]),Object(s.useEffect)((function(){var n;t.current&&a.current&&(null===(n=e.current)||void 0===n?void 0:n.clientWidth)&&(t.current.width=a.current.width=l.width,t.current.height=a.current.height=l.height)}),[l,h]);return Object(Ae.jsxs)("div",{className:Be.a.wrapper,ref:e,children:[Object(Ae.jsx)("canvas",{ref:a,className:Be.a.canvas}),Object(Ae.jsx)("canvas",{onMouseDown:function(t){var a,n;d&&(null===(a=e.current)||void 0===a?void 0:a.offsetLeft)&&c({x:t.clientX-(null===(n=e.current)||void 0===n?void 0:n.offsetLeft),y:t.clientY-104})},onMouseMove:function(a){if(j.x&&j.y&&e.current&&t.current)switch(p.strokeStyle=i,p.lineWidth=u,p.clearRect(0,0,t.current.width,t.current.height),d){case"rectangle":p.strokeRect(j.x,j.y,a.clientX-j.x-e.current.offsetLeft,a.clientY-j.y-104),p.stroke();break;case"circle":p.beginPath(),p.arc(j.x,j.y,Math.sqrt(Math.pow(a.clientX-j.x-e.current.offsetLeft,2)+Math.pow(a.clientY-j.y-104,2)),0,2*Math.PI,!0),p.stroke();break;case"line":p.beginPath(),p.moveTo(j.x,j.y),p.lineTo(a.clientX-e.current.offsetLeft,a.clientY-104),p.stroke();break;case"pencil":p.lineTo(a.clientX-e.current.offsetLeft,a.clientY-104),p.stroke()}},onMouseUp:function(e){_.drawImage(t.current,0,0),p.beginPath(),c({})},ref:t,className:Be.a.canvas}),Object(Ae.jsx)("div",{className:Be.a.progress_wrapper,children:h?Object(Ae.jsx)(Qe.a,{color:"inherit"}):null})]})},Pe=a(141),Le=a.n(Pe),Me=a(142),Fe=a.n(Me),Te=a(143),Ke=a.n(Te),He=a(144),We=a.n(He),Ge=a(296),ze=function(e){for(var t="".concat(e,"="),a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""},Je=Object(Ne.b)(c||(c=Object(me.a)(["",""])),ae.fadeInDown),Ve=Ne.a.div(A||(A=Object(me.a)(["animation: 1s ",";"])),Je),Xe={fadeIn:{animation:"x 1s",animationName:ne.a.keyframes(ae.fadeIn,"fadeIn")}},Ze=Object(ve.a)({root:{margin:0,padding:0,color:"#0b1519"},thumb:{backgroundColor:"#878f93",border:"2px solid #0b1519","&:focus, &:hover, &$active":{boxShadow:"inherit"}},valueLabel:{left:"-12px"}})(Ge.a),qe=Object(ve.a)((function(e){return{root:{color:"#000",backgroundColor:"#878f93",height:"25px",position:"absolute",right:"1%","&:hover":{backgroundColor:"#0b1519",color:"#fff"}}}}))(q.a),$e=function(){var e=Object(b.b)(),t=function(t){e(function(e){return{type:p,lineColor:e}}(t))},a=function(t){e(function(e){return{type:j,lineWeight:e}}(t))},n=function(t){e(function(e){return{type:_,instrumentName:e}}(t))},r=function(t){var a=JSON.parse(ze("userID")),n=JSON.parse(ze("user")).split("@").slice(0,1).join();e(function(e,t,a){return{type:h,dataUrl:e,userID:t,userName:a}}(t,a,n))},c=function(){e({type:v})},A=Object(b.c)((function(e){return e.editorReducer.instrumentName})),o=Object(b.c)((function(e){return e.editorReducer.subCtx})),i=Object(b.c)((function(e){return e.editorReducer.uploadWindowsOpened})),s=function(e){return function(t){return n(e)}};return Object(Ae.jsxs)(ne.a.StyleRoot,{children:[Object(Ae.jsxs)("div",{className:ye.a.wrapper,style:Xe.fadeIn,children:[Object(Ae.jsxs)("div",{className:ye.a.buttons_navbar,children:[Object(Ae.jsx)("div",{className:"rectangle"===A?ye.a.button_checked:ye.a.button,onClick:s("rectangle"),children:Object(Ae.jsx)(Le.a,{})}),Object(Ae.jsx)("div",{className:"circle"===A?ye.a.button_checked:ye.a.button,onClick:s("circle"),children:Object(Ae.jsx)(Fe.a,{})}),Object(Ae.jsx)("div",{className:"line"===A?ye.a.button_checked:ye.a.button,onClick:s("line"),children:Object(Ae.jsx)(Ke.a,{})}),Object(Ae.jsx)("div",{className:"pencil"===A?ye.a.button_checked:ye.a.button,onClick:s("pencil"),children:Object(Ae.jsx)(We.a,{})}),Object(Ae.jsxs)("div",{className:ye.a.size_slider,children:[Object(Ae.jsx)("p",{className:ye.a.slider_text,children:"Line weight"}),Object(Ae.jsx)(Ze,{onChange:function(e){return a(e.target.getAttribute("aria-valuetext"))},defaultValue:0,getAriaValueText:function(e){return e},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,min:0,max:10})]}),Object(Ae.jsx)("input",{type:"color",onChange:function(e){return t(e.target.value)}}),Object(Ae.jsx)(qe,{onClick:c,variant:"contained",children:"Upload"})]}),Object(Ae.jsx)(Ye,{})]}),i&&Object(Ae.jsx)("div",{className:ye.a.modal_window_background,children:Object(Ae.jsx)(Ve,{className:ye.a.animation_wrapper,children:Object(Ae.jsxs)("div",{className:ye.a.modal_window,children:[Object(Ae.jsx)("p",{className:ye.a.modal_window__text,children:"Upload image?"}),Object(Ae.jsxs)("div",{className:ye.a.modal_window__buttonst_container,children:[Object(Ae.jsx)(q.a,{onClick:c,variant:"contained",children:"No"}),Object(Ae.jsx)(q.a,{onClick:function(){r(o.canvas.toDataURL()),c()},variant:"contained",color:"secondary",children:"Yes"})]})]})})})]})},et=a(31),tt=a.n(et),at=function(e){return{type:Q,payload:e}},nt=function(e){return{type:Y,payload:e}},rt=function(e){return{type:H,payload:e}},ct={fadeIn:{animation:"x 1s",animationName:ne.a.keyframes(ae.fadeIn,"fadeIn")}},At=Object(Ne.b)(o||(o=Object(me.a)(["",""])),ae.fadeInDown),ot=Ne.a.div(i||(i=Object(me.a)(["animation: 1s ",";"])),At),it=function(e){e.signOut;var t=Object(b.b)(),a=Object(b.c)((function(e){return e.profileReducer.userName})),n=Object(b.c)((function(e){return e.profileReducer.userID})),r=Object(b.c)((function(e){return e.profileReducer.imagesData})),c=Object(b.c)((function(e){return e.profileReducer.delCicked})),A=Object(b.c)((function(e){return e.profileReducer.idTodell})),o=Object(b.c)((function(e){return e.profileReducer.loading})),i=function(e){return t(function(e){return{type:F,id:e}}(e))},u=function(e){return function(t){return i(e)}};return Object(s.useEffect)((function(){t({type:L}),t({type:M}),t({type:S})}),[t]),Object(Ae.jsx)(ne.a.StyleRoot,{children:Object(Ae.jsxs)("div",{className:tt.a.wrapper,style:ct.fadeIn,children:[Object(Ae.jsxs)("div",{className:tt.a.user_info,children:[Object(Ae.jsx)(je.a,{children:a.substr(0,1).toUpperCase()}),Object(Ae.jsx)("h3",{className:tt.a.user_name,children:a})]}),Object(Ae.jsx)("div",{className:tt.a.images_container,children:r.map((function(e,t){return Object(Ae.jsxs)("div",{className:tt.a.image_wrapper,children:[Object(Ae.jsx)("div",{className:tt.a.img_container,children:Object(Ae.jsx)("img",{className:tt.a.img,src:e.imgUrl,alt:e.imgUrl})}),Object(Ae.jsx)("div",{className:tt.a.delete_button,children:Object(Ae.jsx)(q.a,{onClick:u(e.id),className:tt.a.button_icon,variant:"contained",color:"secondary",children:"Delete"})})]},t)}))}),c&&Object(Ae.jsx)("div",{className:tt.a.modal_window_background,children:Object(Ae.jsx)(ot,{className:tt.a.animation_wrapper,children:Object(Ae.jsxs)("div",{className:tt.a.modal_window,children:[Object(Ae.jsx)("p",{className:tt.a.modal_window__text,children:"Are you really want to delete this image?"}),Object(Ae.jsxs)("div",{className:tt.a.modal_window__buttonst_container,children:[Object(Ae.jsx)(q.a,{onClick:u(null),variant:"contained",children:"No"}),Object(Ae.jsx)(q.a,{onClick:function(){return t({type:T,id:A,userName:n})},variant:"contained",color:"secondary",children:"Yes"})]}),o&&Object(Ae.jsx)(Qe.a,{className:tt.a.progress,color:"inherit"})]})})})]})})},st=function(){Object(s.useEffect)((function(){t()}),[]);var e=Object(b.b)(),t=function(){e({type:R})},a=Object(b.c)((function(e){return e.authReducer.isLoged}));return Object(Ae.jsx)("div",{className:J.a.wrapper,children:a?Object(Ae.jsxs)("div",{children:[Object(Ae.jsx)(Ue,{}),Object(Ae.jsxs)(se.c,{children:[Object(Ae.jsx)(se.a,{path:"/editor",children:Object(Ae.jsx)($e,{})}),Object(Ae.jsx)(se.a,{path:"/profile",children:Object(Ae.jsx)(it,{})}),Object(Ae.jsx)(se.a,{path:"/",children:Object(Ae.jsx)(ge,{})})]})]}):Object(Ae.jsx)(se.a,{path:"/",children:Object(Ae.jsx)(ie,{})})})},ut=(a(247),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,299)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,A=t.getTTFB;a(e),n(e),r(e),c(e),A(e)}))}),dt=a(71),lt=function(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var r="expires=".concat(n.toUTCString());document.cookie="".concat(e,"=").concat(t,";").concat(r,";path=/")},bt=function(e){return lt(e,"",-1e3)},jt={loading:!1,error:!1,isLoged:!1,errorMessage:null},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(X.a)(Object(X.a)({},e),{},{loading:!0,error:!1});case N:return lt("user",JSON.stringify(t.payload.user.email),60),lt("userID",JSON.stringify(t.payload.user.uid),60),Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:!1,isLoged:!0});case C:return Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:!0,errorMessage:t.error.message});case k:return Object(X.a)(Object(X.a)({},e),{},{loading:!0,error:!1});case U:return lt("user",JSON.stringify(t.payload.user.email),60),lt("userID",JSON.stringify(t.payload.user.uid),60),Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:!1,isLoged:!0});case I:return Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:!0,errorMessage:t.error.message});case y:return bt("user"),bt("userID"),Object(X.a)(Object(X.a)({},e),{},{isLoged:!1});case R:return ze("userID")?Object(X.a)(Object(X.a)({},e),{},{isLoged:!0}):Object(X.a)(Object(X.a)({},e),{},{isLoged:!1});case B:return e.error?Object(X.a)(Object(X.a)({},e),{},{error:!1,errorMessage:null}):e;case D:return Object(X.a)(Object(X.a)({},e),{},{error:!0,errorMessage:t.error});default:return e}},_t={lineColor:"#000",lineWeight:"1",instrumentName:"",canvasSize:{width:0,height:0},mouseDownPosition:{},mainCtx:{},subCtx:{},subCtxDataUrl:"",imgName:"",loading:!1,error:!1,successed:!1,uploadWindowsOpened:!1},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return null!==t.lineWeight?Object(X.a)(Object(X.a)({},e),{},{lineWeight:t.lineWeight}):e;case p:return Object(X.a)(Object(X.a)({},e),{},{lineColor:t.lineColor});case _:return Object(X.a)(Object(X.a)({},e),{},{instrumentName:t.instrumentName});case g:return Object(X.a)(Object(X.a)({},e),{},{canvasSize:Object(X.a)(Object(X.a)({},e.canvasSize),{},{width:t.windowsSize.width,height:t.windowsSize.height})});case m:return Object(X.a)(Object(X.a)({},e),{},{mouseDownPosition:Object(X.a)(Object(X.a)({},e.mouseDownPosition),{},{x:t.mouseDownPosition.x,y:t.mouseDownPosition.y})});case f:return Object(X.a)(Object(X.a)({},e),{},{mainCtx:t.context});case O:return Object(X.a)(Object(X.a)({},e),{},{subCtx:t.context});case h:return Object(X.a)(Object(X.a)({},e),{},{subCtxDataUrl:t.dataUrl,loading:!0,error:!1,successed:!1});case v:return Object(X.a)(Object(X.a)({},e),{},{uploadWindowsOpened:!e.uploadWindowsOpened});case w:return Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:!1,successed:!0,lineColor:"#000",lineWeight:"1",instrumentName:""});case x:return Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:!0,successed:!1});default:return e}},mt={loading:!1,error:!1,successed:!1,imagesData:{},sortedImagesData:{}},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(X.a)(Object(X.a)({},e),{},{loading:!0,error:!1,successed:!1});case Q:var a={};return t.payload.forEach((function(e){a[e.userName]||(a[e.userName]=[]),a[e.userName].push(e.imgUrl)})),Object(X.a)(Object(X.a)({},e),{},{imagesData:a});case Y:return Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:!0,successed:!1});case P:var n=t.userName.length,r={};return Object.keys(e.imagesData).forEach((function(a){a.substr(0,n)===t.userName&&(r[a]=e.imagesData[a])})),Object(X.a)(Object(X.a)({},e),{},{sortedImagesData:r});default:return e}},Ot=a(145),ht=a(12),wt=a.n(ht),xt=a(58),vt=a(16),Et=a(77),Nt=(a(249),a(253),a(252),{apiKey:"".concat("AIzaSyApar0IRJfh8xAjc1HSiI03nLexS_awh6E"),authDomain:"".concat("tets-8be4b.firebaseapp.com"),projectId:"".concat("tets-8be4b"),storageBucket:"".concat("tets-8be4b.appspot.com"),messagingSenderId:"".concat("670959739286"),appId:"".concat("1:670959739286:web:a97fd22ce32d8dd702bdb7")}),Ct=(Et.a.initializeApp(Nt),Et.a.firestore()),kt=Et.a.storage(),Ut=kt.ref(),It=Et.a,yt=function(e){return It.auth().createUserWithEmailAndPassword(e.email,e.password)},Rt=function(e){return It.auth().signInWithEmailAndPassword(e.email,e.password)},Bt=wt.a.mark(Qt),Dt=wt.a.mark(Yt),St=wt.a.mark(Pt);function Qt(e){var t,a;return wt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,yt(t);case 4:return a=n.sent,n.next=7,Object(vt.c)(W(a));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object(vt.c)((r=n.t0,{type:C,error:r}));case 13:case"end":return n.stop()}var r}),Bt,null,[[1,9]])}function Yt(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(E,Qt);case 2:case"end":return e.stop()}}),Dt)}function Pt(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.a)([Object(vt.b)(Yt)]);case 2:case"end":return e.stop()}}),St)}var Lt=a(70),Mt=function(){var e=Object(Lt.a)(wt.a.mark((function e(){var t;return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Ct.collection("images").get();case 3:return e.sent.docs.map((function(e){return t.push(e.data())})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ft=function(){var e=Object(Lt.a)(wt.a.mark((function e(t,a){var n,r;return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ct.collection("images").doc("".concat(t)).delete();case 2:return n="library/".concat(a,"/photo:").concat(t),r=Ut.child(n),e.next=6,r.delete();case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Tt=function(){var e=Object(Lt.a)(wt.a.mark((function e(t,a,n,r){var c,A,o;return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="library/".concat(a,"/photo:").concat(r),A=Ut.child(c),e.next=4,A.putString(t,"data_url");case 4:return e.next=6,kt.refFromURL("gs://".concat("tets-8be4b.appspot.com","/").concat(c)).getDownloadURL();case 6:return o=e.sent,e.abrupt("return",Ct.collection("images").doc(r.toString()).set({imgUrl:o,userName:n,id:r}));case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),Kt=wt.a.mark(Gt),Ht=wt.a.mark(zt),Wt=wt.a.mark(Jt);function Gt(e){var t,a,n,r,c;return wt.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=e.dataUrl,a=e.userID,n=e.userName,r=Date.now(),A.prev=2,A.next=5,Tt(t,a,n,r);case 5:return c=A.sent,A.next=8,Object(vt.c)(De(c));case 8:A.next=14;break;case 10:return A.prev=10,A.t0=A.catch(2),A.next=14,Object(vt.c)(Se(A.t0));case 14:case"end":return A.stop()}}),Kt,null,[[2,10]])}function zt(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(h,Gt);case 2:case"end":return e.stop()}}),Ht)}function Jt(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.a)([Object(vt.b)(zt)]);case 2:case"end":return e.stop()}}),Wt)}var Vt=wt.a.mark(qt),Xt=wt.a.mark($t),Zt=wt.a.mark(ea);function qt(e){var t,a;return wt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Rt(t);case 4:return a=n.sent,n.next=7,Object(vt.c)(G(a));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object(vt.c)((r=n.t0,{type:I,error:r}));case 13:case"end":return n.stop()}var r}),Vt,null,[[1,9]])}function $t(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(k,qt);case 2:case"end":return e.stop()}}),Xt)}function ea(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.a)([Object(vt.b)($t)]);case 2:case"end":return e.stop()}}),Zt)}var ta=function(){var e=Object(Lt.a)(wt.a.mark((function e(){var t;return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Ct.collection("images").get();case 3:return e.sent.docs.map((function(e){return t.push(e.data())})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),aa=wt.a.mark(ca),na=wt.a.mark(Aa),ra=wt.a.mark(oa);function ca(e){var t;return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ta();case 3:return t=e.sent,e.next=6,Object(vt.c)(le(t));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(vt.c)(be(e.t0));case 12:case"end":return e.stop()}}),aa,null,[[0,8]])}function Aa(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(S,ca);case 2:case"end":return e.stop()}}),na)}function oa(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.a)([Object(vt.b)(Aa)]);case 2:case"end":return e.stop()}}),ra)}var ia=wt.a.mark(ba),sa=wt.a.mark(ja),ua=wt.a.mark(pa),da=wt.a.mark(_a),la=wt.a.mark(ga);function ba(e){var t;return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Mt();case 3:return t=e.sent,e.next=6,Object(vt.c)(at(t));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(vt.c)(nt(e.t0));case 12:case"end":return e.stop()}}),ia,null,[[0,8]])}function ja(e){var t,a;return wt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,a=e.userName,n.prev=1,n.next=4,Ft(t,a);case 4:return n.next=6,Object(vt.c)({type:K});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(1),n.next=12,Object(vt.c)(rt(n.t0));case 12:case"end":return n.stop()}}),sa,null,[[1,8]])}function pa(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(T,ja);case 2:case"end":return e.stop()}}),ua)}function _a(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)("GET_USER_IMAGES_FROM_DB",ba);case 2:case"end":return e.stop()}}),da)}function ga(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.a)([Object(vt.b)(_a),Object(vt.b)(pa)]);case 2:case"end":return e.stop()}}),la)}var ma=wt.a.mark(fa);function fa(){return wt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.b)(Pt),Object(xt.b)(ea),Object(xt.b)(Jt),Object(xt.b)(oa),Object(xt.b)(ga)]);case 2:case"end":return e.stop()}}),ma)}var Oa={userName:"",loading:!1,error:!1,successed:!1,delCicked:!1,delConfurm:!1,imagesData:[],idTodell:null},ha=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oa,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(X.a)(Object(X.a)({},e),{},{userName:JSON.parse(ze("user")).split("@").slice(0,1).join()});case M:return Object(X.a)(Object(X.a)({},e),{},{userID:JSON.parse(ze("userID"))});case S:return Object(X.a)(Object(X.a)({},e),{},{loading:!0,error:!1,successed:!1,delCicked:!1});case Q:return Object(X.a)(Object(X.a)({},e),{},{loading:!1,imagesData:t.payload.filter((function(t){return t.userName===e.userName}))});case Y:return Object(X.a)(Object(X.a)({},e),{},{loading:!1});case F:return Object(X.a)(Object(X.a)({},e),{},{delCicked:!e.delCicked,idTodell:t.id});case T:return Object(X.a)(Object(X.a)({},e),{},{loading:!0});case K:return Object(X.a)(Object(X.a)({},e),{},{imagesData:e.imagesData.filter((function(t){return t.id!==e.idTodell})),loading:!1,delCicked:!1,idToDel:null});case H:return Object(X.a)(Object(X.a)({},e),{},{loading:!1,delCicked:!1});default:return e}},wa=Object(Ot.a)(),xa=Object(dt.d)(Object(dt.b)({authReducer:pt,editorReducer:gt,homeReducer:ft,profileReducer:ha}),Object(dt.a)(wa));wa.run(fa);var va=xa;l.a.render(Object(Ae.jsx)(u.a.StrictMode,{children:Object(Ae.jsx)(b.a,{store:va,children:Object(Ae.jsx)(he.a,{children:Object(Ae.jsx)(st,{})})})}),document.getElementById("root")),ut()},29:function(e,t,a){e.exports={wrapper:"EditorPage_wrapper__1yNpf",buttons_navbar:"EditorPage_buttons_navbar__2qChk",button:"EditorPage_button__1ZA6_",button_checked:"EditorPage_button_checked__2doLv",size_slider:"EditorPage_size_slider__Noz_k",modal_window_background:"EditorPage_modal_window_background__17ZCN",animation_wrapper:"EditorPage_animation_wrapper__1ovBm",modal_window:"EditorPage_modal_window__36kvF",modal_window__text:"EditorPage_modal_window__text__4q_wL",modal_window__buttonst_container:"EditorPage_modal_window__buttonst_container__1jkug",slider_text:"EditorPage_slider_text__1-AjT"}},31:function(e,t,a){e.exports={wrapper:"ProfilePage_wrapper__3nKpc",user_info:"ProfilePage_user_info__14ASp",images_container:"ProfilePage_images_container__101EQ",image_wrapper:"ProfilePage_image_wrapper__iazDD",img_container:"ProfilePage_img_container__S0AVg",img:"ProfilePage_img__362HR",delete_button:"ProfilePage_delete_button__2pqi1",modal_window_background:"ProfilePage_modal_window_background__qeBZr",animation_wrapper:"ProfilePage_animation_wrapper__3BMeh",modal_window:"ProfilePage_modal_window__39Vro",modal_window__text:"ProfilePage_modal_window__text__1eoCA",modal_window__buttonst_container:"ProfilePage_modal_window__buttonst_container__oNYFY"}},32:function(e,t,a){e.exports={nav__link:"Navbar_nav__link__1k5yU",signOutButton:"Navbar_signOutButton__1CduN",logo_container:"Navbar_logo_container__V0Wk5",logo:"Navbar_logo__2sB6Y",modal_window_background:"Navbar_modal_window_background__1jfIC",modal_window:"Navbar_modal_window__2CqVH",modal_window__text:"Navbar_modal_window__text__3up_V",modal_window__buttonst_container:"Navbar_modal_window__buttonst_container__3vcPc",animation_wrapper:"Navbar_animation_wrapper__2nj4b"}},35:function(e,t,a){e.exports={wrapper:"LoginPage_wrapper__RGKyY",form_wrapper:"LoginPage_form_wrapper__2QNl6",header:"LoginPage_header__1EujA",form:"LoginPage_form__i5E3_",button:"LoginPage_button__yfzhX",text:"LoginPage_text__3Sj_m",button__link:"LoginPage_button__link__lI9l4",alert:"LoginPage_alert__1Aawq",span_link:"LoginPage_span_link__3z1gH"}},39:function(e,t,a){e.exports={wrapper:"HomePage_wrapper__1hPKd",user_name:"HomePage_user_name__3hRPX",container:"HomePage_container__1zSku",imgWrapper:"HomePage_imgWrapper__Y3AAN",img:"HomePage_img__2Prw0",name_container:"HomePage_name_container__1W1QX",search_input_wrapper:"HomePage_search_input_wrapper__iuIQo",search_input_head:"HomePage_search_input_head__2O2l9",search_input:"HomePage_search_input__1i2r4",alert:"HomePage_alert__1SiES"}},76:function(e,t,a){e.exports={wrapper:"Canvas_wrapper__MRKLV",canvas:"Canvas_canvas__34r0f",progress_wrapper:"Canvas_progress_wrapper__2q4rb"}}},[[251,1,2]]]);
//# sourceMappingURL=main.513cd844.chunk.js.map