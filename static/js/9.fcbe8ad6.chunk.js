(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{29:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var o=l(l({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,n,a,r){return void 0===r&&(r=null),r&&clearTimeout(r),e.style.transition=t+" "+n+"ms "+a,setTimeout(function(){e.style.transition=""},n)}function c(e,t,n){return Math.min(Math.max(e,t),n)}var p=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,n){e.updateTilt(t,n),e.updateTiltManualInput(t,n),e.updateTiltReverse(n),e.updateTiltLimits(n)},this.updateTilt=function(t,n){var a=t.yPercentage,r=n.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*n.tiltMaxAngleX/100,e.tiltAngleY=a*r/100*-1},this.updateTiltManualInput=function(t,n){var a=n.tiltAngleXManual,r=n.tiltAngleYManual,i=n.tiltMaxAngleX,l=n.tiltMaxAngleY;null===a&&null===r||(e.tiltAngleX=null!==a?a:0,e.tiltAngleY=null!==r?r:0,t.xPercentage=100*e.tiltAngleX/i,t.yPercentage=100*e.tiltAngleY/l)},this.updateTiltReverse=function(t){var n=t.tiltReverse?-1:1;e.tiltAngleX=n*e.tiltAngleX,e.tiltAngleY=n*e.tiltAngleY},this.updateTiltLimits=function(t){var n=t.tiltAxis;e.tiltAngleX=c(e.tiltAngleX,-90,90),e.tiltAngleY=c(e.tiltAngleY,-90,90),n&&(e.tiltAngleX="x"===n?e.tiltAngleX:0,e.tiltAngleY="y"===n?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var n=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/n*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},u=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var n=t.calculateGlareSize(e);t.glareEl.style.width=n.width+"px",t.glareEl.style.height=n.height+"px"},this.update=function(e,n,a,r){t.updateAngle(e,n.glareReverse),t.updateOpacity(e,n,a,r)},this.updateAngle=function(e,n){var a=e.xPercentage,r=180/Math.PI,i=a?Math.atan2(e.yPercentage,-a)*r:0;t.glareAngle=i-(n?180:0)},this.updateOpacity=function(e,n,a,r){var i,l=e.xPercentage,o=e.yPercentage,s=n.glareReverse,p=n.glareMaxOpacity,u=a?-1:1,m=r?-1:1;switch(n.glarePosition){case"top":i=-l*u;break;case"right":i=o*m;break;case"bottom":i=l*u;break;case"left":i=-o*m;break;case"all":i=Math.hypot(l,o);break;default:i=l*u}var d=c(i=s?-i:i,0,100);t.glareOpacity=d*p/100},this.render=function(e){var n=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+n+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var n=this.calculateGlareSize(e),a={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:n.width+"px",height:n.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,a)},m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.addDeviceOrientationEventListener=function(){return function(e,t,n,a){return new(n||(n=Promise))(function(r,i){function l(e){try{s(a.next(e))}catch(e){i(e)}}function o(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(l,o)}s((a=a.apply(e,t||[])).next())})}(t,void 0,void 0,function(){var e;return function(e,t){var n,a,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,a=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((r=(r=l.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,function(t){switch(t.label){case 0:if(!window.DeviceOrientationEvent)return[2];if("function"!=typeof DeviceMotionEvent.requestPermission)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,DeviceOrientationEvent.requestPermission()];case 2:return"granted"===t.sent()&&window.addEventListener("deviceorientation",this.onMove),[2];case 3:return e=t.sent(),console.error(e),[2];case 4:return window.addEventListener("deviceorientation",this.onMove),[2]}})})},t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach(function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)}):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var n=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),n&&n(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var n=t.props.onLeave;if(t.setTransition(),n&&n(e.type),t.props.reset){var a=new CustomEvent("autoreset");t.onMove(a)}},t.processInput=function(e){var n=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=n;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=n;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=n;break;case"autoreset":var a=t.props,r=a.tiltAngleYInitial/a.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=c(a.tiltAngleXInitial/a.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=c(r,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var n=t.props,a=n.tiltMaxAngleY,r=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/n.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=r/a*100,t.wrapperEl.clientPosition.xPercentage=c(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=c(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var n=t.props,a=n.tiltEnable,r=n.flipVertically,i=n.flipHorizontally;t.updateClientInput(e),a&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,r,i)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var n,a;if(t.props.trackOnWindow){var r=t.wrapperEl.clientPosition,i=r.x;n=r.y/window.innerHeight*200-100,a=i/window.innerWidth*200-100}else{var l=t.wrapperEl,o=l.size,s=l.clientPosition;n=(s.y-o.top)/o.height*200-100,a=((i=s.x)-o.left)/o.width*200-100}t.wrapperEl.clientPosition.xPercentage=c(n,-100,100),t.wrapperEl.clientPosition.yPercentage=c(a,-100,100)}},t.updateFlip=function(){var e=t.props,n=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),n&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new p,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n&&this.addDeviceOrientationEventListener()},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new u(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var n=0,a=0;this.glare&&(n=this.glare.glareAngle,a=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,n,a,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,n=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,n,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,n,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return r.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=o,t}(a.PureComponent);t.a=m},31:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(30),i=n(0),l=n.n(i),o=n(11),s=n(28),c={width:"100%",background:"#eee"},p={position:"absolute",top:"0",left:"-65px",background:"var(--main-color)",color:"#fff",padding:"30px 25px"},u={margin:"20px 0",fontSize:"15px",color:"#555"},m={display:"flex",flexDirection:"column",marginBottom:"20px"},d={marginBottom:"10px",fontSize:"13px",color:"#444"},g={border:"none",borderBottom:"1px solid #000"},h={border:"1px solid #000",padding:"10px",height:"100px",overflowY:"auto"},v={background:"var(--main-color)",color:"#fff",padding:"10px 20px",margin:"10px 0 0",border:"none",textTransform:"uppercase"};t.a=function(){var e=Object(i.useRef)(),t=Object(i.useState)({name:"",email:"",message:""}),n=Object(r.a)(t,2),f=n[0],E=n[1],w=function(e){return E(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},f,a({},e.target.name,e.target.value)))};return l.a.createElement("div",{style:c},l.a.createElement("div",{className:"footer-welcome"},l.a.createElement("div",null,l.a.createElement("h1",null,"Let\u2019s work together to"),l.a.createElement("h1",null,"build something great."),l.a.createElement("div",{className:"goto_page",onClick:function(){var t=e.current.offsetTop-30;window.scrollTo({top:t,left:0,behavior:"smooth"})}},l.a.createElement("p",null,"Say Hello"),l.a.createElement("div",{className:"bg"})))),l.a.createElement("div",{id:"contact",ref:e,className:"footer_container"},l.a.createElement("div",{className:"msg-form-con"},l.a.createElement("div",{style:p},l.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"})),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{style:{textTransform:"uppercase"}},"Let's get in touch."),l.a.createElement("p",{style:u},"IF YOU ANY QUESTIONS, REQUESTS OR INQUIRIES FOR US, JUST ASK. WE WANT TO HEAR THEM"),l.a.createElement("div",{style:m},l.a.createElement("label",{style:d},"Name"),l.a.createElement("input",{name:"name",type:"text",style:g,autoComplete:"off",value:f.name,onChange:function(e){return w(e)}})),l.a.createElement("div",{style:m},l.a.createElement("label",{style:d},"Email"),l.a.createElement("input",{name:"email",type:"email",style:g,autoComplete:"off",value:f.email,onChange:function(e){return w(e)}})),l.a.createElement("div",{style:m},l.a.createElement("label",{style:d},"Your Message"),l.a.createElement("textarea",{name:"message",style:h,value:f.message,onChange:function(e){return w(e)}})),l.a.createElement("button",{style:v,onClick:function(){return console.log(f)}},"Send Message"))),l.a.createElement("div",{className:"social_link_con"},l.a.createElement(o.Link,{to:"/"},"Instagram"),l.a.createElement(o.Link,{to:"/"},"Facebook"),l.a.createElement(o.Link,{to:"/"},"LinkedIn"),l.a.createElement(o.Link,{to:"/"},"Twitter"))),l.a.createElement("div",{style:{background:"var(--main-color)",marginTop:"50px",minHeight:"calc(100vh - 55px)"}},l.a.createElement("h2",{className:"our-hub-head"},"OUR HUBS"),l.a.createElement("div",{className:"contact-info"},s.e.map(function(e){var t=e.place,n=e.address,a=e.email,r=(e.phone,e.webisite);return l.a.createElement("div",{className:"content",key:Math.random()},l.a.createElement("h1",{style:{textTransform:"uppercase"}},t),l.a.createElement("div",null,n.map(function(e){return l.a.createElement("p",{key:Math.random()},e)})),l.a.createElement("div",{className:"content-email"},l.a.createElement("a",{href:"mailto:".concat(s.a),className:"emailStyle"},l.a.createElement("span",null)," ",a),l.a.createElement("br",null),l.a.createElement("a",{href:s.c,target:"_blank",rel:"noopener noreferrer"},r)))})),l.a.createElement("div",{style:{width:"80%",margin:"0 auto",paddingBottom:"25px"}},l.a.createElement(o.Link,{to:"/legal/links",style:{textTransform:"uppercase",color:"#fff",fontWeight:"bold",fontSize:"14px",marginRight:"20px"}},"Legal links"))))}},33:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(32),l=n(28),o=n(11),s=n(31),c=n(29),p={initial:{opacity:0,y:20},final:{opacity:1,y:0,transition:{type:"tween",duration:1,delay:.5}}},u={"@media only screen (max-width:680px)":{marginTop:"10px"}};t.a=function(e){var t=e.product;return Object(a.useLayoutEffect)(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},[]),r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"products-page-primary-container"},r.a.createElement("div",{className:"product-main-content-container"},r.a.createElement("div",{className:"product-container"},r.a.createElement(i.b.div,{style:{position:"relative"},variants:p,initial:"initial",animate:"final"},r.a.createElement("h1",null,t),r.a.createElement(o.Link,{className:"back-link",to:"/"},r.a.createElement("svg",{viewBox:"0 0 100 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M98.5401 25.1213C99.7116 23.9497 99.7116 22.0503 98.5401 20.8787L79.4482 1.7868C78.2766 0.615224 76.3771 0.615224 75.2055 1.7868C74.034 2.95837 74.034 4.85786 75.2055 6.02944L92.1761 23L75.2055 39.9706C74.034 41.1421 74.034 43.0416 75.2055 44.2132C76.3771 45.3848 78.2766 45.3848 79.4482 44.2132L98.5401 25.1213ZM0.385681 26L96.4187 26V20L0.385681 20L0.385681 26Z",fill:"#fff"})))),r.a.createElement(i.b.div,{variants:p,initial:"initial",animate:"final"},l.i[t].contentIntro)),r.a.createElement(c.a,{perspective:"5000"},r.a.createElement("div",{className:"product-image"},r.a.createElement("img",{style:{width:"80%"},src:l.i[t].image,alt:l.i[t].image}))),r.a.createElement("div",{className:"content"},r.a.createElement("div",null,l.i[t].extra&&r.a.createElement("div",{className:"extra"},r.a.createElement("p",null,l.i[t].extra[0]),r.a.createElement("div",null,r.a.createElement("a",{style:{marginTop:"0.7em"}},l.i[t].extra[1],"\xa0"),r.a.createElement("a",{className:"extra",target:"_blank",style:{marginTop:"0.7em"},rel:"noopener noreferrer",href:l.i[t].extra[2]},l.i[t].extra[3])))),r.a.createElement("section",{style:u},l.i[t].content)))),r.a.createElement("div",{className:"products-bottom-container"},r.a.createElement("div",{className:"link_container"},r.a.createElement(o.Link,{className:"next-link",to:l.i[t].nextLink.link},l.i[t].nextLink.name," "," ",r.a.createElement("svg",{viewBox:"0 0 100 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M98.5401 25.1213C99.7116 23.9497 99.7116 22.0503 98.5401 20.8787L79.4482 1.7868C78.2766 0.615224 76.3771 0.615224 75.2055 1.7868C74.034 2.95837 74.034 4.85786 75.2055 6.02944L92.1761 23L75.2055 39.9706C74.034 41.1421 74.034 43.0416 75.2055 44.2132C76.3771 45.3848 78.2766 45.3848 79.4482 44.2132L98.5401 25.1213ZM0.385681 26L96.4187 26V20L0.385681 20L0.385681 26Z",fill:"#fff"}))))),r.a.createElement(s.a,null))}},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33);t.default=function(){return r.a.createElement(i.a,{product:"thoughtz"})}}}]);
//# sourceMappingURL=9.fcbe8ad6.chunk.js.map