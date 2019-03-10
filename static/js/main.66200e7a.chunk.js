(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n(284)},104:function(e,t,n){e.exports=n(339)},111:function(e,t,n){e.exports=n(424)},116:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var a=n(30),r=n(0),o=n.n(r),c=n(107),i=(n(338),50);function l(){var e=Object(r.useState)(i),t=Object(a.a)(e,2),n=t[0],l=t[1];return o.a.createElement("div",null,o.a.createElement("h3",null,"Slider value: ",n),o.a.createElement(c.a,{onChange:l,defaultValue:i,handleStyle:[{height:"24px",width:"24px",marginTop:"-11px",marginLeft:"-11px"}]}))}},339:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(39),o=n(0),c=n.n(o),i=n(105),l=n.n(i),u=n(7),s=n(15),f=n(73),h=n.n(f);function d(){var e=Object(r.a)(["\n  border: 1px solid ",";\n  padding: 12px;\n"]);return d=function(){return e},e}var m=Object(u.default)(s.a)(d(),function(e){return e.theme.colors.borderGray}),v=100,b=10;t.default=Object(o.memo)(function(){var e=Object(o.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(!1),u=Object(a.a)(i,2),f=u[0],d=u[1],p=Object(o.useState)(5),g=Object(a.a)(p,2),w=g[0],y=g[1],E=Object(o.useState)(5),O=Object(a.a)(E,2),j=O[0],x=O[1];function k(){f&&(clearInterval(n),r(null),r(function(){var e=100*(b-j+1);return console.log("Worker now set to ".concat(e,"ms")),setInterval(function(){console.log("Starting work...");for(var e=0;e++<w*v;)l.a.iterate(e);console.log("Finished!")},e)}()))}return Object(o.useEffect)(function(){return f&&k(),function(){return clearInterval(n)}},[f,j,w]),c.a.createElement(m,null,c.a.createElement(h.a,{onChange:function(e){y(parseInt(e.target.value))},value:w,label:"Intensity"}),c.a.createElement(h.a,{onChange:function(e){x(parseInt(e.target.value))},value:j,label:"Frequency",max:b}),c.a.createElement(s.c,null,c.a.createElement(s.e,{m:2},"Worker status:"),c.a.createElement(s.b,{onClick:function(){clearInterval(n),r(null),d(!f)}},f?"ON":"OFF")))})},342:function(e,t){},344:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(0),r=n.n(a),o=n(15);function c(e){var t=e.max,n=e.onChange,a=e.value,c=e.label,i=e.min;return r.a.createElement(o.c,{align:"center",m:2},r.a.createElement(o.a,null,r.a.createElement(o.e,{mr:2},c," (",i," - ",t,")")),r.a.createElement(o.a,null,r.a.createElement(o.d,{type:"number",onChange:n,value:a,max:t})))}c.defaultProps={max:10,min:1,value:5}},424:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=(n(116),n(95)),l=n(96),u=n(108),s=n(97),f=n(109),h=n(39),d=n(7),m=n(15),v=n(100),b=n.n(v),p=n(104),g=n.n(p),w=n(106),y=n.n(w),E="\n# Affect of Background JS Processes on UX Performance with React\n_Craig Palermo - March 10, 2019_\n\n## Problem\nUI components built with React that depend on continually updating\nstate during user interaction are prone to fluctuations of activity\non the JS main thread that might delay these updates. This can result\nin a temporarily unresponsive UI and confusing experience.\n\nWhile any number of sources could cause this background activity, I've observed scripts such as\nGoogle Tag Manager and various fraud protection tools attach various event listeners\nthat can cause this type of delay. You can observe this on your own site by profiling\nJS activity while the sit is idle, as well as when triggering user events, such as `mouseover`,\n `click`, `mouseenter`, etc.\n\n## Demo\nThe frequency of activity that blocks the main thread, as well as the duration that\nthe browser spends on that work, can both affect the degree to which the UX is noticeably\naffected. Try adjusting each of these values, then interacting with the slider. Notice\nhow different combinations result in various degrees of degradation in the user experience.\n\nTry this on a mobile device as well to see how difficult this\nlag can make interactions for mobile users, especially those with older devices.\n";function O(){return r.a.createElement(y.a,{source:E})}function j(){var e=Object(h.a)(["\n  border-radius: 10px;\n  margin-top: 24px;\n  padding: 24px;\n"]);return j=function(){return e},e}function x(){var e=Object(h.a)(["\n  max-width: 680px;\n"]);return x=function(){return e},e}var k=Object(d.default)(m.c)(x()),I=Object(d.default)(m.a)(j()),S=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.f,null,r.a.createElement(k,{flexDirection:"column",m:4},r.a.createElement(O,null),r.a.createElement(I,{bg:"lightGray"},r.a.createElement(g.a,null),r.a.createElement(b.a,null)))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,n){e.exports=n(344)}},[[111,1,2]]]);
//# sourceMappingURL=main.66200e7a.chunk.js.map