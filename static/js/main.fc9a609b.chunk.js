(this.webpackJsonpadventurenz=this.webpackJsonpadventurenz||[]).push([[0],{251:function(e,t,a){e.exports=a(466)},256:function(e,t,a){},257:function(e,t,a){},367:function(e,t,a){},464:function(e,t,a){},466:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),o=(a(256),a(82)),l=(a(257),a(471)),s=a(472),u=a(41),m=a(65);var d=Object(m.b)((function(e){return console.log(e),{daysInfo:e.selectDays.daysInfo,cityName:e.selectCity.cityName,dayInfo:e.selectDay.dayInfo}}),(function(e){return{selectDays:function(t){return e(function(e){return{type:"SELECT_DAYS",daysInfo:e}}(t))},selectCity:function(t){return e(function(e){return console.log(e),{type:"SELECT_CITY",cityName:e}}(t))},selectDay:function(t){return e(function(e){return{type:"SELECT_DAY",dayInfo:e}}(t))}}}))((function(e){console.log(e);var t=Object(n.useState)(),a=Object(o.a)(t,2),c=(a[0],a[1]),i=Object(n.useState)(),m=Object(o.a)(i,2),d=m[0],y=m[1],p=Object(n.useState)(),f=Object(o.a)(p,2),h=(f[0],f[1]),v=Object(n.useState)(""),g=Object(o.a)(v,2),b=g[0],E=g[1];Object(n.useEffect)((function(){}));var k=function(){fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=".concat(d,"&lat=0&lon=0&cnt=10&units=metric"),{method:"GET",headers:{"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com","x-rapidapi-key":"34092fd749mshf784e4a6a066a34p158e4cjsna61883e3c77d"}}).then((function(e){return e.json()})).then((function(t){c(t.list.map((function(e){return e}))),e.selectDays(t.list.map((function(e){return e}))),h(d),e.selectCity(d)})).then((function(){document.getElementsByClassName("cityName")[0].scrollIntoView()})).catch((function(e){}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-landing-container"}),r.a.createElement("div",{className:"home-landing-text"},r.a.createElement("h1",null,"Welcome to New Zealand"),r.a.createElement("div",{className:"home-inner"},r.a.createElement("div",{className:"home-text"},r.a.createElement("p",null,"  ",r.a.createElement("strong",null,"Hey there!")," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatibus incidunt enim natus reiciendis expedita veritatis impedit temporibus officiis odio maiores voluptas dolore cumque odit iure alias mollitia, velit, voluptates exercitationem corrupti. Atque voluptatem expedita cum iusto ipsam voluptatum quae architecto repudiandae mollitia officia provident quibusdam impedit, aspernatur tenetur enim."))),r.a.createElement("img",{className:"homeImage",src:"https://img.traveltriangle.com/blog/wp-content/uploads/2015/09/Auckland.jpg",alt:""}),r.a.createElement("img",{className:"homeImage",src:"https://www.firstlighttravel.com/sites/default/files/styles/article_800x/public/2018-11/abel-tasman-kayaking.jpg?itok=nKgEXN3D",alt:""}),r.a.createElement("img",{className:"homeImage",src:"https://mustdonewzealand.co.nz/wp-content/uploads/2016/12/hobbiton-movie-set-tours-matamata-from-Rotorua-nz-560x460.jpg",alt:""}),r.a.createElement("div",{className:"home-selection"},r.a.createElement("h2",null,"Get Weather and Find Activities"),r.a.createElement(l.a,{placeholder:"Select City",fluid:!0,selection:!0,options:[{key:"Auckland",text:"Auckland",value:"Auckland"},{key:"Wellington",text:"Wellington",value:"Wellington"},{key:"Christchurch",text:"Christchurch",value:"Christchurch"},{key:"Hamilton",text:"Hamilton",value:"Hamilton"},{key:"Tauranga",text:"Tauranga",value:"Tauranga"},{key:"Lower Hutt",text:"Lower Hutt",value:"Lower Hutt"},{key:"Dunedin",text:"Dunedin",value:"Dunedin"},{key:"Palmerston North",text:"Palmerston North",value:"Palmerston North"},{key:"Napier",text:"Napier",value:"Napier"},{key:"Porirua",text:"Porirua",value:"Porirua"},{key:"New Plymouth",text:"New Plymouth",value:"New Plymouth"},{key:"Rotorua",text:"Rotorua",value:"Rotorua"},{key:"Whangarei",text:"Whangarei",value:"Whangarei"},{key:"Hibiscus Coast",text:"Hibiscus Coast",value:"Hibiscus Coast"},{key:"Nelson",text:"Nelson",value:"Nelson"},{key:"Invercargill",text:"Invercargill",value:"Invercargill"},{key:"Hastings",text:"Hastings",value:"Hastings"},{key:"Upper Hutt",text:"Upper Hutt",value:"Upper Hutt"},{key:"Whanganui",text:"Whanganui",value:"Whanganui"},{key:"Gisborne",text:"Gisborne",value:"Gisborne"}],onChange:function(e){console.log(e.currentTarget.innerText),y(e.currentTarget.innerText)}}),r.a.createElement(s.a,{onClick:function(){return k()}},"Get Weather for Next 10 Days"),r.a.createElement("p",null,"Cant find your location? Try search for it below!"),r.a.createElement("input",{type:"text",placeholder:"Find your location!",onChange:function(e){E(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:function(){y(b,k())}},"Search"))),r.a.createElement("div",{className:"weather-main-container"},r.a.createElement("h3",{className:"cityName",style:{paddingTop:"10%",fontSize:"3rem",color:"white"}},e.cityName),r.a.createElement("div",{className:"all-forcasts"},e.daysInfo.length>0&&e.daysInfo.map((function(t){var a=new Date(1e3*t.dt);return a=function(e){var t=e.getDate(),a=e.getMonth(),n=e.getUTCDay();switch(n){case 0:n="Sunday";break;case 1:n="Monday";break;case 2:n="Tuesday";break;case 3:n="Wednesday";break;case 4:n="Thursday";break;case 5:n="Friday";break;case 6:n="Saturday"}switch(a){case 0:a="January";break;case 1:a="February";break;case 2:a="March";break;case 3:a="April";break;case 4:a="May";break;case 5:a="June";break;case 6:a="July";break;case 7:a="August";break;case 8:a="September";break;case 9:a="October";break;case 10:a="November";break;case 11:a="December"}return"".concat(n," ").concat(t," ").concat(a)}(a),r.a.createElement("div",{className:"single-forcast",onClick:function(){return e.selectDay(t)}},r.a.createElement("div",{className:"date info"},a,r.a.createElement(u.b,{to:"/activities/".concat(t.weather[0].main)},r.a.createElement(s.a,{color:"grey",y:!0},"Find Activities"))),r.a.createElement("div",{className:"day info"},r.a.createElement("strong",null,"Day:")," ",t.feels_like.day," \xb0C "),r.a.createElement("div",{className:"night info"},r.a.createElement("strong",null,"Night: ")," ",t.feels_like.night," \xb0C"),r.a.createElement("div",{className:"evening info"},r.a.createElement("strong",null," Evening:")," ",t.feels_like.eve," \xb0C"),r.a.createElement("div",{className:"morning info"}," ",r.a.createElement("strong",null,"Morning:")," ",t.feels_like.morn," \xb0C"),r.a.createElement("div",{className:"weather info"},r.a.createElement("strong",null,"Weather: "),t.weather[0].main,", ",t.weather[0].description))})))))})),y=a(64),p=a(110),f=a(67),h=a(66),v=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"About Page")}}]),a}(n.Component),g=(a(367),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={navbarToggle:!0},e.componentDidMount=function(){var t=window.pageYOffset;window.onscroll=function(){var a=window.pageYOffset;t>a?e.setState({navbarToggle:!0}):e.setState({navbarToggle:!1}),t=a}},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar ".concat(this.state.navbarToggle?"show":"hide")},r.a.createElement("div",{className:"navbar-left"},r.a.createElement("div",{className:"navbar-brand"},"Tourism NZ"),r.a.createElement(u.b,{className:"navbar-link",to:"/"},"Home"),r.a.createElement(u.b,{className:"navbar-link",to:"/about"},"About")),r.a.createElement("div",{className:"navbar-right"},r.a.createElement(s.a,{primary:!0},"Sign In"),r.a.createElement(s.a,{color:"purple"},"Sign Up")))}}]),a}(n.Component)),b=a(8),E=(a(368),a(464),function(e){var t=new Date(1e3*e),a=t.getDate(),n=t.getMonth(),r=t.getUTCDay();switch(r){case 0:r="Sunday";break;case 1:r="Monday";break;case 2:r="Tuesday";break;case 3:r="Wednesday";break;case 4:r="Thursday";break;case 5:r="Friday";break;case 6:r="Saturday"}switch(n){case 0:n="January";break;case 1:n="February";break;case 2:n="March";break;case 3:n="April";break;case 4:n="May";break;case 5:n="June";break;case 6:n="July";break;case 7:n="August";break;case 8:n="September";break;case 9:n="October";break;case 10:n="November";break;case 11:n="December"}return"".concat(r," ").concat(a," ").concat(n)}),k=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={activity:"tourism",searchQuery:""},e.componentDidMount=function(){document.documentElement.scrollTop=0,e.props.dayInfo.weather[0].main.includes("Rain")&&e.setState({activity:"indoors"})},e.render=function(){return console.log(e.props.dayInfo),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"activities-dayInfo"},r.a.createElement("p",null,E(e.props.dayInfo.dt)),r.a.createElement("p",null,e.props.cityName),r.a.createElement("p",{className:"day info"},r.a.createElement("strong",null,"Day:")," ",e.props.dayInfo.feels_like.day," \xb0C "),r.a.createElement("p",{className:"night info"},r.a.createElement("strong",null,"Night: ")," ",e.props.dayInfo.feels_like.night," \xb0C"),r.a.createElement("p",{className:"evening info"},r.a.createElement("strong",null," Evening:")," ",e.props.dayInfo.feels_like.eve," \xb0C"),r.a.createElement("p",{className:"morning info"}," ",r.a.createElement("strong",null,"Morning:")," ",e.props.dayInfo.feels_like.morn," \xb0C"),r.a.createElement("p",{className:"weather info"},r.a.createElement("strong",null,"Weather: "),e.props.dayInfo.weather[0].main,", ",e.props.dayInfo.weather[0].description)),r.a.createElement("div",{className:"activities-list"},r.a.createElement("h1",null,"Activities when ",e.props.dayInfo.weather[0].description),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},!e.props.dayInfo.weather[0].main.includes("Rain")&&r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Parks"})}},"Parks"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Cafes"})}},"Cafes"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Shopping"})}},"Shopping"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Tourism"})}},"General Tourism"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Indoors"})}},"Indoors"),r.a.createElement(s.a,{className:"activityButton",onClick:function(){e.setState({activity:"Restaurants"})}},"Restaurants"),r.a.createElement("div",{style:{position:"inline-block",marginBottom:"5px",display:"block",width:"100%"}},r.a.createElement("input",{onChange:function(t){e.setState({searchQuery:t.target.value})},className:"searchbar",type:"text",id:"fname",name:"fname",placeholder:"Find your place!"}),r.a.createElement("button",{onClick:function(){e.setState({activity:e.state.searchQuery})},className:"searchButton"},"Search"))),r.a.createElement("iframe",{width:"100%",height:"500px",frameBorder:"0",style:{border:"0"},src:"https://www.google.com/maps/embed/v1/search?key=".concat("AIzaSyDzkIpt4a9oMf7rbd4jpnssr6Q1wQLrYKw","&q=").concat(e.props.cityName,"+city+").concat(e.state.activity,"&zoom=8\n            "),allowFullScreen:!0})))},e}return a}(n.Component),N=Object(m.b)((function(e){return{dayInfo:e.selectDay.dayInfo,cityName:e.selectCity.cityName}}))(k);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(b.a,{exact:!0,path:"/",component:d}),r.a.createElement(b.a,{exact:!0,path:"/about",component:v}),r.a.createElement(b.a,{exact:!0,path:"/activities/:weather",component:N}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(465);var C=a(61),I=a(31),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{daysInfo:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_DAYS":return Object(I.a)(Object(I.a)({},e),{},{daysInfo:t.daysInfo});default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cityName:""},t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"SELECT_CITY":return Object(I.a)(Object(I.a)({},e),{},{cityName:t.cityName});default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dayInfo:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_DAY":return Object(I.a)(Object(I.a)({},e),{},{dayInfo:t.dayInfo});default:return e}},j=Object(C.b)({selectDays:S,selectCity:x,selectDay:O}),T=Object(C.c)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(m.a,{store:T},r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(w,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[251,1,2]]]);
//# sourceMappingURL=main.fc9a609b.chunk.js.map