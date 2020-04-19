(this.webpackJsonpfrontloops=this.webpackJsonpfrontloops||[]).push([[0],{25:function(n,e,t){n.exports=t.p+"static/media/device.a6e91886.svg"},26:function(n,e,t){n.exports=t.p+"static/media/laptop.54863705.svg"},27:function(n,e,t){n.exports=t.p+"static/media/monitor.ef7c9e48.svg"},28:function(n,e,t){n.exports=t.p+"static/media/check.f611c051.svg"},29:function(n,e,t){n.exports=t.p+"static/media/visa.1453b285.svg"},30:function(n,e,t){n.exports=t.p+"static/media/mastercard.8372b944.svg"},31:function(n,e,t){n.exports=t.p+"static/media/maestro.10658eed.svg"},32:function(n,e,t){n.exports=t.p+"static/media/arrow.380aa4fc.svg"},33:function(n,e,t){n.exports=t.p+"static/media/account.346bbfda.svg"},34:function(n,e,t){n.exports=t.p+"static/media/bicycle.cdbf3542.png"},35:function(n,e,t){n.exports=t.p+"static/media/close.7b66831c.svg"},36:function(n,e,t){n.exports=t.p+"static/media/twitter.89eaa742.svg"},37:function(n,e,t){n.exports=t.p+"static/media/github.c1356d39.svg"},38:function(n,e,t){n.exports=t.p+"static/media/linkedin.f7b18d21.svg"},42:function(n,e,t){n.exports=t(54)},47:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(21),o=t.n(i),c=(t(47),t(14)),l=t(2),u=t(15),d=t(7),s=t(1);function p(){var n=Object(l.a)(["\n    font-size: 1em;\n    vertical-align: bottom;\n"]);return p=function(){return n},n}function f(){var n=Object(l.a)(["\n    font-size: 2em;\n    font-weight: 600;\n"]);return f=function(){return n},n}function m(){var n=Object(l.a)(["\n    font-size: 1em;\n    vertical-align: 0.7em;\n    font-weight: 700;\n"]);return m=function(){return n},n}var v=s.default.span(m()),g=s.default.span(f());g.displayName="PriceValue";var b=s.default.span(p());b.displayName="PricePeriod";var x=function(n){var e=n.currency,t=n.value,a=n.period;return r.a.createElement("div",{style:{color:"#4e63d2"}},r.a.createElement(v,null,e),r.a.createElement(g,null,t),r.a.createElement(b,null," / ",a))};function h(){var n=Object(l.a)(["\n    text-align: center;\n    color: #666;\n    font-size: 0.8em;\n    height: calc(1.2 * 4em)\n"]);return h=function(){return n},n}function y(){var n=Object(l.a)(["\n    font-size: 1.2em\n    color: purple;\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 0.2em;\n    font-weight: 800;\n    color: #4e63d2;\n    margin: 2em 0 0 0;\n"]);return y=function(){return n},n}function E(){var n=Object(l.a)(["\n    background: #f3f3f3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    height: ",";\n    padding: 1em 2em;\n    justify-self: center;\n    border-radius: 4px;\n    cursor: pointer;\n\n    > img {\n        width: auto;\n        height: 80px;\n    }\n\n    :hover {\n        transition: 0.3s;\n        background: #dfdfdf;\n    }\n"]);return E=function(){return n},n}var w=s.default.div(E(),(function(n){return n.height}));w.displayName="TileContainer";var j=s.default.h1(y());j.displayName="TileTitle";var O=s.default.p(h());O.displayName="TileDescription";var N=function(n){var e=n.icon,t=n.title,a=n.description,i=n.currency,o=n.value,c=n.period,l=n.height;return r.a.createElement(w,{height:l},r.a.createElement("img",{src:e,alt:"Tile icon"}),r.a.createElement(j,null,t),r.a.createElement(O,null,a),r.a.createElement(x,{currency:i,value:o,period:c}))},k=t(25),C=t.n(k),z=t(26),M=t.n(z),P=t(27),S=t.n(P);function T(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  border-radius: 4px;\n  padding: 1em;\n  background: #f3f3f3;\n  box-shadow: 0 22px 50px rgba(14,21,47, .2), 0 8px 20px rgba(14,21,47, .2);\n"]);return T=function(){return n},n}function I(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  width: 100vw;\n  height: 100vh;\n  padding: 10vmax;\n"]);return I=function(){return n},n}var L=s.default.div(I());L.displayName="AppContainer";var A=s.default.div(T());A.displayName="TileContainer";var B={routeProps:{path:"/loop1",component:function(){return r.a.createElement(L,null,r.a.createElement(A,null,r.a.createElement(N,{icon:C.a,title:"mobile",description:"Get notifications about new releases in our new mobile app.",currency:"$",value:"10",period:"month",height:"45vh"}),r.a.createElement(N,{icon:M.a,title:"desktop",description:"Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms.",currency:"$",value:"10",period:"month",height:"45vh"}),r.a.createElement(N,{icon:S.a,title:"tv",description:"Watch your favorite series at home on large screen with our TV application.",currency:"$",value:"10",period:"month",height:"45vh"})))}},name:"Loop 1"},H=t(41);function V(){var n=Object(l.a)(['\n    font-size: 1.6em;\n    font-weight: 800;\n    margin: 2px;\n    \n    ::after {\n        content: "\u2022";\n    }\n']);return V=function(){return n},n}function G(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 1.4em;\n    color: #dedede;\n\n    > .active {\n        color: #aaa; \n    }\n"]);return G=function(){return n},n}var $=s.default.div(G());$.displayName="StepCounterContainer";var W=s.default.span(V()),Y=function(n){var e=n.steps,t=n.activeStep;return r.a.createElement($,null,Object(H.a)(Array(e).keys()).map((function(n){return r.a.createElement(W,{key:n,className:t-1===n?"active":""})})))},D=t(28),F=t.n(D);function J(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: space-between;\n    border-top: 1px solid #ddd;\n    flex: 1 1 auto;\n    padding: 10px 15px;\n    cursor: pointer;\n\n    :focus {\n        outline: 0;\n        background-color: #ddd;\n    }\n\n    :hover {\n        background-color: #eee;\n    }\n\n    :active {\n        background-color: #d9d9d9;\n    }\n\n    ",'\n    > input[type="radio"] {\n        position: absolute;\n        top: auto;\n        overflow: hidden;\n        clip: rect(1px, 1px, 1px, 1px);\n        width: 1px;\n        height: 1px;\n        white-space: nowrap;\n    }\n\n    > span {\n        flex: 1 1 auto;\n        text-transform: uppercase;\n        font-weight: 600;\n        letter-spacing: 1.1;\n        color: #888;\n    }\n\n    > img {\n        width: 50px;\n        flex: 0 0 auto;\n        margin: 0 15px;\n    }\n\n    > input[type="radio"]:checked + span {\n        background: url(',") no-repeat calc(100% - 5px);\n        color: #000;\n    }\n"]);return J=function(){return n},n}function R(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n"]);return R=function(){return n},n}var _=s.default.div(R());_.displayName="RadioContainer";var U=s.default.label.attrs((function(n){return{tabIndex:0}}))(J(),void 0,F.a);U.displayName="RadioOption";var Z=t(29),q=t.n(Z),K=t(30),Q=t.n(K),X=t(31),nn=t.n(X),en=function(){return r.a.createElement(_,null,r.a.createElement(U,null,r.a.createElement("input",{type:"radio",id:"optionVisa",name:"radio-".concat(0),value:"Visa"}),r.a.createElement("span",null,"Visa"),r.a.createElement("img",{src:q.a,alt:"Visa brand logo"})),r.a.createElement(U,null,r.a.createElement("input",{type:"radio",id:"optionMastercard",name:"radio-".concat(0),value:"MasterCard"}),r.a.createElement("span",null,"MasterCard"),r.a.createElement("img",{src:Q.a,alt:"MasterCard brand logo"})),r.a.createElement(U,null,r.a.createElement("input",{type:"radio",id:"optionMaestro",name:"radio-".concat(0),value:"Maestro"}),r.a.createElement("span",null,"Maestro"),r.a.createElement("img",{src:nn.a,alt:"Maestro brand logo"})))};function tn(){var n=Object(l.a)(["\n    background: #598bdd;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 0.8em;\n    color: #fff;\n    border: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 50px;\n    border-radius: 0 0 4px 4px;\n    outline: 0;\n\n    :active {\n        background: #3161ad;\n        transform: translateY(4px);\n    }\n\n    :hover, :focus {\n        background: #4075ca;\n    }\n\n    > img {\n        width: 14px;\n        margin-left: 3px;\n    }\n"]);return tn=function(){return n},n}function an(){var n=Object(l.a)(["\n    text-transform: uppercase;\n    font-weight: 600;\n    letter-spacing: 0.1em;\n    font-size: 1.3em;\n    color: #333;\n    text-align: center;\n    margin-top: 10px;\n"]);return an=function(){return n},n}function rn(){var n=Object(l.a)(["\n    height: 100px;\n    padding: 1em;\n"]);return rn=function(){return n},n}function on(){var n=Object(l.a)(["\n  background: #f3f3f3;\n  border-radius: 4px;\n  box-shadow: 0 22px 50px rgba(14,21,47, .2), 0 8px 20px rgba(14,21,47, .2);\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: space-between;\n  width: 400px;\n  height: 350px;\n  overflow-y: hidden;\n"]);return on=function(){return n},n}var cn=s.default.div(on());cn.displayName="PaymentContainer";var ln=s.default.div(rn());ln.displayName="PaymentHeader";var un=s.default.h1(an());un.displayName="PaymentTitle";var dn=s.default.button(tn());dn.displayName="PaymentButton";var sn=t(32),pn=t.n(sn);function fn(){var n=Object(l.a)(["\n    flex: 1 1 auto;\n"]);return fn=function(){return n},n}var mn=Object(s.default)(en)(fn()),vn=function(){return r.a.createElement(cn,null,r.a.createElement(ln,null,r.a.createElement(Y,{steps:3,activeStep:1}),r.a.createElement(un,null,"Payment Method")),r.a.createElement(mn,null),r.a.createElement(dn,null,"Next Step ",r.a.createElement("img",{src:pn.a,alt:"Payment button icon"})))};function gn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  width: 100vw;\n  height: 100vh;\n  padding: 10vmax;\n"]);return gn=function(){return n},n}var bn=s.default.div(gn());bn.displayName="AppContainer";var xn={routeProps:{path:"/loop2",component:function(){return r.a.createElement(bn,null,r.a.createElement(vn,null))}},name:"Loop 2"};function hn(){var n=Object(l.a)(["\n    width: 100%;\n    color: #aaa;\n    font-size: 0.9em;\n    font-weight: 400;\n    margin-top: 10px;\n"]);return hn=function(){return n},n}function yn(){var n=Object(l.a)(["\n    border: 1px solid #ddd;\n    border-radius: 100%;\n    padding: 7px;\n    transition: 0.3s ease-in-out;\n\n    :hover {\n        box-shadow: 0 0 0 3px #eee;\n        transition: 0.3s ease-in-out;\n        cursor: pointer;\n    }\n"]);return yn=function(){return n},n}function En(){var n=Object(l.a)(["\n    color: #000;\n    font-weight: 600;\n    letter-spacing: 0.9;\n    font-size: 1.5em;\n    flex: 1 1 auto;\n"]);return En=function(){return n},n}function wn(){var n=Object(l.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n"]);return wn=function(){return n},n}var jn=s.default.div(wn());jn.displayName="HeaderContainer";var On=s.default.h1(En());On.displayName="HeaderTitle";var Nn=s.default.img(yn());Nn.displayName="HeaderIcon";var kn=s.default.p(hn());kn.displayName="HeaderDescription";var Cn=t(33),zn=t.n(Cn),Mn=function(){return r.a.createElement(jn,null,r.a.createElement(On,null,"SimpleWheels"),r.a.createElement(Nn,{src:zn.a,alt:"User account icon"}),r.a.createElement(kn,null,"Thanks for you order #2357654, your package will be on its way shortly."))};function Pn(){var n=Object(l.a)(["\n    grid-column-end: span 2;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n\n    > span {\n        text-transform: uppercase;\n        color: #666;\n    }\n"]);return Pn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n    justify-self: end;\n    color: #000;\n    font-weight: 600;\n    font-size: 1.2em;\n"]);return Sn=function(){return n},n}function Tn(){var n=Object(l.a)(["\n    justify-self: start;\n    color: #666;\n"]);return Tn=function(){return n},n}function In(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr 100px;\n    grid-auto-flow: row;\n    gap: 30px 0;\n    margin: 50px 0;\n    overflow-y: auto;\n"]);return In=function(){return n},n}var Ln=s.default.div(In());Ln.displayName="OrderListContainer";var An=s.default.span(Tn());An.displayName="OrderListItem";var Bn=s.default.span(Sn());Bn.displayName="OrderListItemPrice";var Hn=Object(s.default)(Bn)(Pn());Hn.displayName="OrderListTotal";var Vn=function(n){var e=n.orders,t=Object(a.useState)(0),i=Object(c.a)(t,2),o=i[0],l=i[1];Object(a.useEffect)((function(){if(console.log("running OrderList effect"),e){var n=e.reduce((function(n,e){return n+e.price}),0);l(n)}}),[e]);return r.a.createElement(Ln,null,e.map((function(n){})),r.a.createElement(Hn,null,r.a.createElement("span",null,"Total"),"$",o))},Gn=t(34),$n=t.n(Gn);function Wn(){var n=Object(l.a)(["\n    width: 600px;\n    height: 500px;\n    border-radius: 4px;\n    padding: 40px 60px;\n    background-image: url(",");\n    background-position: center bottom -150px;\n    background-color: #fff;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    box-shadow: 0 22px 50px rgba(14,21,47, .2), 0 8px 20px rgba(14,21,47, .2);\n"]);return Wn=function(){return n},n}var Yn=s.default.div(Wn(),$n.a);Yn.displayName="OrderContainer";var Dn=[{product:"Chapelli Vintage Single Speed",price:317},{product:"Castelli Arenberg Gel Gloves",price:39}],Fn=function(){return r.a.createElement(Yn,null,r.a.createElement(Mn,null),r.a.createElement(Vn,{orders:Dn}))};function Jn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  padding: 10vmax;\n"]);return Jn=function(){return n},n}var Rn=s.default.div(Jn());Rn.displayName="AppContainer";var _n={routeProps:{path:"/loop3",component:function(){return r.a.createElement(Rn,null,r.a.createElement(Fn,null))}},name:"Loop 3"};function Un(){var n=Object(l.a)(["\n    width: 60px;\n    background-color: transparent;\n    border: 0;\n    outline: 0;\n    cursor: pointer;\n    font-size: 0.8em;\n    font-weight: 800;\n    color: #6895da;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n"]);return Un=function(){return n},n}function Zn(){var n=Object(l.a)(["\n    flex: 1 1 auto;\n    border: 0;\n    outline: 0;\n"]);return Zn=function(){return n},n}function qn(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    height: 45px;\n    border-top: 1px solid #ddd;\n    padding: 0 6px;\n"]);return qn=function(){return n},n}var Kn=s.default.div(qn());Kn.displayName="InputContainer";var Qn=s.default.input(Zn());Qn.displayName="InputField";var Xn=s.default.button(Un());Xn.displayName="InputButton";var ne=function(){return r.a.createElement(Kn,null,r.a.createElement(Qn,{type:"text",placeholder:"Enter your message"}),r.a.createElement(Xn,null,"Send"))};function ee(){var n=Object(l.a)(["\n    font-size: 0.8em;\n    max-width: 70%;\n    border-radius: 2px;\n    padding: 8px;\n    margin: 5px 0;\n    position: relative;\n    align-self: inherit;\n\n    ","\n"]);return ee=function(){return n},n}function te(){var n=Object(l.a)(["\n    color: #aaa;\n    font-size: 0.7em;\n    align-self: inherit;\n"]);return te=function(){return n},n}function ae(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-self: ",";\n    width: 100%;\n"]);return ae=function(){return n},n}var re=s.default.div(ae(),(function(n){return"sent"===n.type?"flex-start":"flex-end"}));re.displayName="MessageBubbleContainer";var ie=s.default.div(te());ie.displayName="MessageBubbleTime";var oe=function(n,e){return'\n        ::before {\n            content: "";\n            width: 0px;\n            height: 0px;\n            position: absolute;\n            border-left: 3px solid '.concat("right"===n?e:"transparent",";\n            border-right: 3px solid ").concat("left"===n?e:"transparent",";\n            border-top: 3px solid ").concat(e,";\n            border-bottom: 3px solid transparent;\n            left: ").concat("left"===n?"-5px":"calc(100% - 1px)",";\n            top: 0px;\n        }\n    ")},ce=s.default.div(ee(),(function(n){return function(n){switch(n){case"sent":return"\n                background: ".concat("#e6edf6",";\n                ").concat(oe("left","#e6edf6"),"\n            ");case"received":return"\n                background: ".concat("#f2f2f2",";\n                ").concat(oe("right","#f2f2f2"),"\n            ");case"system":return"\n                background: ".concat("#ffc2c0",";\n            ");default:return"\n                background: #ccc;\n            "}}(n.type)}));ce.displayName="MessageBubbleText";var le=function(n){var e=n.type,t=n.time,a=n.children;return r.a.createElement(re,{type:e},r.a.createElement(ie,null,t),r.a.createElement(ce,{type:e},a))};function ue(){var n=Object(l.a)(['\n    display: flex;\n    flex-flow: nowrap;\n    justify-content: space-between;\n    align-items: center;\n    \n    span {\n        padding: 1em;\n        text-transform: uppercase;\n        color: #ddd;\n        font-size: 0.7em;\n        font-weight: 700;\n    }\n  \n    &::before, \n    &::after {\n        flex: 1 1 auto;\n        content: "";\n        height: 0px;\n        border-bottom: 1px solid #ddd;\n    }\n']);return ue=function(){return n},n}var de=s.default.p(ue()),se=function(n){var e=n.date;return r.a.createElement(de,null,r.a.createElement("span",null,e))};function pe(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return pe=function(){return n},n}var fe=s.default.div(pe());fe.displayName="MessagesContainer";var me=function(){return r.a.createElement(fe,null,r.a.createElement(se,{date:"today"}),r.a.createElement(le,{type:"sent",time:"10:53"},"Hi, Mark! I made a new design for Messenger App."),r.a.createElement(le,{type:"received",time:"10:53"},"Yo! Send it to my assistant and we'll review it during the year."),r.a.createElement(le,{type:"sent",time:"10:53"},"But Mark..."),r.a.createElement(le,{type:"system",time:"10:53"},"You were blocked by the user."))};function ve(){var n=Object(l.a)(["\n    flex: 1 1 auto;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n\n    > div:nth-child(1) {\n        flex: 1 1 auto;\n    }\n"]);return ve=function(){return n},n}function ge(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 60px;\n    background: #6895da;\n    padding: 0 16px;\n\n    > span {\n        font-size: 0.9em;\n        font-weight: 600;\n        letter-spacing: 1px;\n        text-transform: uppercase;\n        color: #fff;\n        text-align: center;\n\n        ::before {\n            content: '\u2022';\n            margin-right: 6px;\n            font-size: 1em;\n            text-align: center;\n        }\n    }\n\n    > img {\n        width: 20px;\n        filter: opacity(50%);\n        transition: 0.3s;\n        cursor: pointer;\n\n        :hover {\n            filter: opacity(100%);\n        }\n    }\n"]);return ge=function(){return n},n}function be(){var n=Object(l.a)(["\n    width: 400px;\n    height: 500px;\n    background: #fff;\n    display: flex;\n    flex-direction: column;\n"]);return be=function(){return n},n}var xe=s.default.div(be());xe.displayName="ChatContainer";var he=s.default.div(ge());he.displayName="ChatHeader";var ye=s.default.div(ve());ye.displayName="ChatBody";var Ee=t(35),we=t.n(Ee),je=function(){return r.a.createElement(xe,null,r.a.createElement(he,null,r.a.createElement("span",null,"Mark Zuckerberg"),r.a.createElement("img",{src:we.a,alt:"Close chat"})),r.a.createElement(ye,null,r.a.createElement(me,null),r.a.createElement(ne,null)))};function Oe(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  width: 100vw;\n  height: 100vh;\n  padding: 10vmax;\n"]);return Oe=function(){return n},n}var Ne=s.default.div(Oe());Ne.displayName="AppContainer";var ke=[B,xn,_n,{routeProps:{path:"/loop4",component:function(){return r.a.createElement(Ne,null,r.a.createElement(je,null))}},name:"Loop 4"}],Ce=t(36),ze=t.n(Ce),Me=t(37),Pe=t.n(Me),Se=t(38),Te=t.n(Se);function Ie(){var n=Object(l.a)(["\n  grid-area: contact;\n\n  > img {\n    width: 20px;\n  }\n"]);return Ie=function(){return n},n}function Le(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n"]);return Le=function(){return n},n}function Ae(){var n=Object(l.a)(["\n  margin: 0 6px;\n"]);return Ae=function(){return n},n}function Be(){var n=Object(l.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  grid-area: sections;\n  display: flex;\n"]);return Be=function(){return n},n}function He(){var n=Object(l.a)(["\n  color: #f0f0f0;\n  font-weight: 600;\n  grid-area: logo;\n  letter-spacing: 0.1em;\n  font-size: 1.2em;\n"]);return He=function(){return n},n}function Ve(){var n=Object(l.a)(['\n  height: 40px;\n  background-color: rgba(30, 30, 30, 0.7);\n  color: #f0f0f0;\n  backdrop-filter: blur(4px);\n  display: grid;\n  grid: [row1-start] "logo sections contact" 1fr [row1-end] \n        / 200px 1fr 200px;\n  place-items: center center;\n']);return Ve=function(){return n},n}var Ge=s.default.nav(Ve());Ge.displayName="Navbar";var $e=s.default.div(He());$e.displayName="NavbarTitle";var We=s.default.ul(Be());We.displayName="NavbarLinks";var Ye=s.default.li(Ae());Ye.displayName="NavbarLink";var De=s.default.div(Le());De.displayName="NavbarSocial";var Fe=s.default.a.attrs((function(n){return{target:"_blank",tabIndex:0}}))(Ie());Fe.displayName="NavbarSocialIcon";var Je=function(){var n=Object(a.useState)(""),e=Object(c.a)(n,2),t=e[0],i=e[1];return r.a.createElement(u.a,null,r.a.createElement(Ge,{className:"App-header"},r.a.createElement($e,null,r.a.createElement(u.b,{to:"/",onClick:function(){return i("/")}},"Frontloops")),r.a.createElement(We,{className:"App-nav"},ke.map((function(n){return r.a.createElement(Ye,{key:n.name,className:t===n.name?"active":""},r.a.createElement(u.b,{to:n.routeProps.path,onClick:function(){return i(n.name)}},n.name))}))),r.a.createElement(De,null,r.a.createElement(Fe,{href:"https://twitter.com/_uaite"},r.a.createElement("img",{src:ze.a,alt:"Twitter"})),r.a.createElement(Fe,{href:"https://github.com/uaite"},r.a.createElement("img",{src:Pe.a,alt:"GitHub"})),r.a.createElement(Fe,{href:"https://linkedin.com/in/eduardotimmers"},r.a.createElement("img",{src:Te.a,alt:"LinkedIn"})))),r.a.createElement("div",null,ke.map((function(n){return r.a.createElement(d.a,Object.assign({},n.routeProps,{key:n.name}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=t(40),_e=t.n(Re);function Ue(){var n=Object(l.a)(["\n  ","\n\n  :root {\n    height: 100vh;\n    width: 100vw;\n    font-family: 'Open Sans', sans-serif;\n    background-color: #789ad0;\n\n    p {\n      line-height: 1.2;\n    }\n\n    a {\n      text-decoration: none;\n      color: #f0f0f0;\n      transition: 0.3s;\n\n      :hover {\n        color: #aaa;\n      }\n\n      :focus {\n        outline: 0;\n      }\n    }\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"]);return Ue=function(){return n},n}var Ze=Object(s.createGlobalStyle)(Ue(),_e.a);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ze,null),r.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.4ce38ec4.chunk.js.map