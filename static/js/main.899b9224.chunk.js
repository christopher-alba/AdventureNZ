(this.webpackJsonpadventurenz=this.webpackJsonpadventurenz||[]).push([[0],{251:function(e,a,t){e.exports=t(466)},256:function(e,a,t){},257:function(e,a,t){},367:function(e,a,t){},464:function(e,a,t){},466:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),i=t.n(c),l=(t(256),t(83)),o=(t(257),t(471)),s=t(472),m=t(72),u=t(30),d=t(66);var y=Object(d.b)((function(e){return console.log(e),{daysInfo:e.selectDays.daysInfo,cityName:e.selectCity.cityName,dayInfo:e.selectDay.dayInfo}}),(function(e){return{selectDays:function(a){return e(function(e){return{type:"SELECT_DAYS",daysInfo:e}}(a))},selectCity:function(a){return e(function(e){return console.log(e),{type:"SELECT_CITY",cityName:e}}(a))},selectDay:function(a){return e(function(e){return{type:"SELECT_DAY",dayInfo:e}}(a))}}}))((function(e){console.log(e);var a=Object(n.useState)(),t=Object(l.a)(a,2),c=(t[0],t[1]),i=Object(n.useState)(),d=Object(l.a)(i,2),y=d[0],p=d[1],v=Object(n.useState)(),h=Object(l.a)(v,2),f=(h[0],h[1]),b=Object(n.useState)(""),g=Object(l.a)(b,2),E=g[0],k=g[1],N=function(a){fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=".concat(a||y,"&lat=0&lon=0&cnt=10&units=metric"),{method:"GET",headers:{"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com","x-rapidapi-key":"34092fd749mshf784e4a6a066a34p158e4cjsna61883e3c77d"}}).then((function(e){return e.json()})).then((function(t){c(t.list.map((function(e){return e}))),e.selectDays(t.list.map((function(e){return e}))),f(a||y),e.selectCity(a||y)})).then((function(){document.getElementsByClassName("cityName")[0].scrollIntoView()})).catch((function(e){console.log(e)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-landing-container"}),r.a.createElement("div",{className:"home-landing-text"},r.a.createElement("h1",null,"Welcome to New Zealand"),r.a.createElement("div",{className:"home-inner"},r.a.createElement("div",{className:"home-text"},r.a.createElement("p",null,"  ",r.a.createElement("strong",null,"Hey there!")," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatibus incidunt enim natus reiciendis expedita veritatis impedit temporibus officiis odio maiores voluptas dolore cumque odit iure alias mollitia, velit, voluptates exercitationem corrupti. Atque voluptatem expedita cum iusto ipsam voluptatum quae architecto repudiandae mollitia officia provident quibusdam impedit, aspernatur tenetur enim."))),r.a.createElement("img",{className:"homeImage",src:"https://img.traveltriangle.com/blog/wp-content/uploads/2015/09/Auckland.jpg",alt:""}),r.a.createElement("img",{className:"homeImage",src:"https://www.firstlighttravel.com/sites/default/files/styles/article_800x/public/2018-11/abel-tasman-kayaking.jpg?itok=nKgEXN3D",alt:""}),r.a.createElement("img",{className:"homeImage",src:"https://mustdonewzealand.co.nz/wp-content/uploads/2016/12/hobbiton-movie-set-tours-matamata-from-Rotorua-nz-560x460.jpg",alt:""}),r.a.createElement("div",{className:"home-selection"},r.a.createElement("h2",null,"Get Weather and Find Activities"),r.a.createElement("div",{className:"selectCity"},r.a.createElement(o.a,{placeholder:"Select City",fluid:!0,selection:!0,options:[{key:"Auckland",text:"Auckland",value:"Auckland"},{key:"Wellington",text:"Wellington",value:"Wellington"},{key:"Christchurch",text:"Christchurch",value:"Christchurch"},{key:"Hamilton",text:"Hamilton",value:"Hamilton"},{key:"Tauranga",text:"Tauranga",value:"Tauranga"},{key:"Lower Hutt",text:"Lower Hutt",value:"Lower Hutt"},{key:"Dunedin",text:"Dunedin",value:"Dunedin"},{key:"Palmerston North",text:"Palmerston North",value:"Palmerston North"},{key:"Napier",text:"Napier",value:"Napier"},{key:"Porirua",text:"Porirua",value:"Porirua"},{key:"New Plymouth",text:"New Plymouth",value:"New Plymouth"},{key:"Rotorua",text:"Rotorua",value:"Rotorua"},{key:"Whangarei",text:"Whangarei",value:"Whangarei"},{key:"Hibiscus Coast",text:"Hibiscus Coast",value:"Hibiscus Coast"},{key:"Nelson",text:"Nelson",value:"Nelson"},{key:"Invercargill",text:"Invercargill",value:"Invercargill"},{key:"Hastings",text:"Hastings",value:"Hastings"},{key:"Upper Hutt",text:"Upper Hutt",value:"Upper Hutt"},{key:"Whanganui",text:"Whanganui",value:"Whanganui"},{key:"Gisborne",text:"Gisborne",value:"Gisborne"}],onChange:function(e){console.log(e.currentTarget.innerText),p(e.currentTarget.innerText)}}),r.a.createElement(s.a,{className:"dropdownSubmit",onClick:function(){return N()}},r.a.createElement(m.a,{name:"sun"}))),r.a.createElement("p",null,"Cant find your location? Try search for it below!"),r.a.createElement("form",{className:"searchBar",action:""},r.a.createElement("input",{type:"text",placeholder:"Find your location!",onChange:function(e){console.log(e.target.value),k(e.target.value),p(E)}}),r.a.createElement("button",{className:"searchbarSubmit",type:"submit",onClick:function(){N(E)}},r.a.createElement(m.a,{name:"sun"}))))),r.a.createElement("div",{className:"weather-main-container"},r.a.createElement("h3",{className:"cityName",style:{paddingTop:"10%",fontSize:"3rem",color:"white"}},e.cityName),r.a.createElement("div",{className:"all-forcasts"},e.daysInfo.length>0&&e.daysInfo.map((function(a){var t=new Date(1e3*a.dt);return t=function(e){var a=e.getDate(),t=e.getMonth(),n=e.getUTCDay();switch(n){case 0:n="Sunday";break;case 1:n="Monday";break;case 2:n="Tuesday";break;case 3:n="Wednesday";break;case 4:n="Thursday";break;case 5:n="Friday";break;case 6:n="Saturday"}switch(t){case 0:t="January";break;case 1:t="February";break;case 2:t="March";break;case 3:t="April";break;case 4:t="May";break;case 5:t="June";break;case 6:t="July";break;case 7:t="August";break;case 8:t="September";break;case 9:t="October";break;case 10:t="November";break;case 11:t="December"}return"".concat(n," ").concat(a," ").concat(t)}(t),r.a.createElement("div",{className:"single-forcast",onClick:function(){return e.selectDay(a)}},r.a.createElement("div",{className:"date info"},t,r.a.createElement(u.b,{to:"/activities/".concat(a.weather[0].main)},r.a.createElement(s.a,{color:"grey",y:!0},"Find Activities"))),r.a.createElement("div",{className:"day info"},r.a.createElement("strong",null,"Day:")," ",a.feels_like.day," \xb0C "),r.a.createElement("div",{className:"night info"},r.a.createElement("strong",null,"Night: ")," ",a.feels_like.night," \xb0C"),r.a.createElement("div",{className:"evening info"},r.a.createElement("strong",null," Evening:")," ",a.feels_like.eve," \xb0C"),r.a.createElement("div",{className:"morning info"}," ",r.a.createElement("strong",null,"Morning:")," ",a.feels_like.morn," \xb0C"),r.a.createElement("div",{className:"weather info"},r.a.createElement("strong",null,"Weather: "),a.weather[0].main,", ",a.weather[0].description))})))))})),p=t(65),v=t(110),h=t(68),f=t(67),b=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"About Page")}}]),t}(n.Component),g=(t(367),t(474)),E=t(475),k=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={navbarToggle:!0,navbarMenu:!0},e.componentDidMount=function(){var a=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;a>t?e.setState({navbarToggle:!0}):e.setState({navbarToggle:!1}),a=t}},e}return Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a.Group,null,r.a.createElement(E.a,{as:g.a,minWidth:1e3},r.a.createElement("div",{className:"navbar ".concat(this.state.navbarToggle?"show":"hide")},r.a.createElement("div",{className:"navbar-inner"},r.a.createElement("div",{className:"navbar-left"},r.a.createElement("div",{className:"navbar-brand"},"Tourism NZ"),r.a.createElement(u.b,{className:"navbar-link",to:"/"},"Home"),r.a.createElement(u.b,{className:"navbar-link",to:"/about"},"About")),r.a.createElement("div",{className:"navbar-right"},r.a.createElement(s.a,{primary:!0},"Sign In"),r.a.createElement(s.a,{color:"purple"},"Sign Up"))))),r.a.createElement(E.a,{as:g.a,minWidth:0,maxWidth:1e3},r.a.createElement("div",{className:"navbar ".concat(this.state.navbarToggle?"show":"hide")},r.a.createElement("div",{className:"navbar-inner"},r.a.createElement("div",{className:"navbar-left"},r.a.createElement("div",{className:"navbar-brand"},"Tourism NZ")),r.a.createElement("div",{className:"navbar-right"},r.a.createElement(m.a,{onClick:function(){e.setState({navbarMenu:!e.state.navbarMenu})},name:"".concat(this.state.navbarMenu?"chevron up":"chevron down")}))),this.state.navbarMenu&&r.a.createElement("div",{style:{display:"block"}},r.a.createElement("div",null,r.a.createElement(u.b,{className:"navbar-link",to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(u.b,{className:"navbar-link",to:"/about"},"About")),r.a.createElement("div",null,r.a.createElement(s.a,{primary:!0},"Sign In")),r.a.createElement("div",null,r.a.createElement(s.a,{color:"purple"},"Sign Up"))))))}}]),t}(n.Component),N=t(8),w=(t(368),t(464),function(e){var a=new Date(1e3*e),t=a.getDate(),n=a.getMonth(),r=a.getUTCDay();switch(r){case 0:r="Sunday";break;case 1:r="Monday";break;case 2:r="Tuesday";break;case 3:r="Wednesday";break;case 4:r="Thursday";break;case 5:r="Friday";break;case 6:r="Saturday"}switch(n){case 0:n="January";break;case 1:n="February";break;case 2:n="March";break;case 3:n="April";break;case 4:n="May";break;case 5:n="June";break;case 6:n="July";break;case 7:n="August";break;case 8:n="September";break;case 9:n="October";break;case 10:n="November";break;case 11:n="December"}return"".concat(r," ").concat(t," ").concat(n)}),C=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={activity:"tourism",searchQuery:""},e.componentDidMount=function(){document.documentElement.scrollTop=0,e.props.dayInfo.weather[0].main.includes("Rain")&&e.setState({activity:"indoors"})},e.render=function(){return console.log(e.props.dayInfo),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"activities-dayInfo"},r.a.createElement("p",null,w(e.props.dayInfo.dt)),r.a.createElement("p",null,e.props.cityName),r.a.createElement("p",{className:"day info"},r.a.createElement("strong",null,"Day:")," ",e.props.dayInfo.feels_like.day," \xb0C "),r.a.createElement("p",{className:"night info"},r.a.createElement("strong",null,"Night: ")," ",e.props.dayInfo.feels_like.night," \xb0C"),r.a.createElement("p",{className:"evening info"},r.a.createElement("strong",null," Evening:")," ",e.props.dayInfo.feels_like.eve," \xb0C"),r.a.createElement("p",{className:"morning info"}," ",r.a.createElement("strong",null,"Morning:")," ",e.props.dayInfo.feels_like.morn," \xb0C"),r.a.createElement("p",{className:"weather info"},r.a.createElement("strong",null,"Weather: "),e.props.dayInfo.weather[0].main,", ",e.props.dayInfo.weather[0].description)),r.a.createElement("div",{className:"activities-list"},r.a.createElement("h1",null,"Activities when ",e.props.dayInfo.weather[0].description),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},!e.props.dayInfo.weather[0].main.includes("Rain")&&r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Parks"})}},"Parks"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Cafes"})}},"Cafes"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Shopping"})}},"Shopping"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Tourism"})}},"General Tourism"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Indoors"})}},"Indoors"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Restaurants"})}},"Restaurants"),r.a.createElement("div",{style:{position:"inline-block",marginBottom:"5px",display:"block",width:"100%"}},r.a.createElement("input",{onChange:function(a){e.setState({searchQuery:a.target.value})},className:"searchbar",type:"text",id:"fname",name:"fname",placeholder:"Find your place!"}),r.a.createElement("button",{onClick:function(){e.setState({activity:e.state.searchQuery})},className:"searchButton"},"Search"))),r.a.createElement("iframe",{width:"100%",height:"500px",frameBorder:"0",style:{border:"0"},src:"https://www.google.com/maps/embed/v1/search?key=".concat("AIzaSyDzkIpt4a9oMf7rbd4jpnssr6Q1wQLrYKw","&q=").concat(e.props.cityName,"+city+").concat(e.state.activity,"&zoom=8\n            "),allowFullScreen:!0})))},e}return t}(n.Component),S=Object(d.b)((function(e){return{dayInfo:e.selectDay.dayInfo,cityName:e.selectCity.cityName}}))(C);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(N.a,{exact:!0,path:"/",component:y}),r.a.createElement(N.a,{exact:!0,path:"/about",component:b}),r.a.createElement(N.a,{exact:!0,path:"/activities/:weather",component:S}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(465);var x=t(62),O=t(32),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{daysInfo:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SELECT_DAYS":return Object(O.a)(Object(O.a)({},e),{},{daysInfo:a.daysInfo});default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cityName:""},a=arguments.length>1?arguments[1]:void 0;switch(console.log(a),a.type){case"SELECT_CITY":return Object(O.a)(Object(O.a)({},e),{},{cityName:a.cityName});default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dayInfo:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SELECT_DAY":return Object(O.a)(Object(O.a)({},e),{},{dayInfo:a.dayInfo});default:return e}},_=Object(x.b)({selectDays:T,selectCity:j,selectDay:D}),A=Object(x.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(d.a,{store:A},r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(I,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[251,1,2]]]);
//# sourceMappingURL=main.899b9224.chunk.js.map