(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Rihanaa",image:"https://cosmopolitan.fetcha.co.za/wp-content/uploads/2018/03/Times-We-Got-A-Sneak-Peak-Into-The-Sex-Lives-Of-Celebrities.jpg",occupation:"Musician",location:"New York"},{id:2,name:"lionel Messi",image:"https://dj0j0ofql4htg.cloudfront.net/cms2/image_manager/uploads/News/279515/7/default.jpg",occupation:"Futbolista",location:"Barcelona"},{id:3,name:"Mariah Carey",image:"https://cosmopolitan.fetcha.co.za/wp-content/uploads/2017/08/Cosmo-fashion-Mariah-Carey-.jpg",occupation:"R&B Musician",location:"Huntington"},{id:4,name:"Selena Gomez",image:"http://ichef.bbci.co.uk/news/976/cpsprodpb/2D45/production/_92798511_afp_gomez.jpg",occupation:"R&B Musician",location:"Texas"},{id:5,name:"Drake",image:"https://media1.popsugar-assets.com/files/thumbor/YnYHozzjwsnVXvhEDuAZrmzRpA8/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/10/12/006/n/1922398/411bd8fc095aa43c_GettyImages-488419598/i/Drake-Aubrey-Drake-Graham.jpg",occupation:"Hip Hop Artist",location:"Toronto"},{id:6,name:"Tom Brady",image:"https://timedotcom.files.wordpress.com/2017/09/tom-brady-trump1.jpg",occupation:"footbal player",location:"Boston"},{id:7,name:"Taraji P Henson",image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/12/30.-Taraji-P.-Henson.jpg",occupation:"Actress, Singer, Author",location:"Washington"},{id:8,name:"Dirk Nowitzki",image:"http://www1.pictures.zimbio.com/gi/Dirk+Nowitzki+Kristaps+Porzingis+TNc9dPkCSWEm.jpg",occupation:"basketball players",location:"New York"},{id:9,name:"Nick Minaj",image:"https://media1.popsugar-assets.com/files/thumbor/qGvHqNquixQGpiMQeaphZQvPwtw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/07/12/795/n/44701584/799172783e67811b_GettyImages-959329962/i/Sexy-Nicki-Minaj-Pictures-2018.jpg",occupation:"hip hop Musician",location:"New york"},{id:10,name:"Stephen Curry",image:"https://media.gettyimages.com/photos/guard-stephen-curry-of-the-golden-state-warriors-enters-the-game-the-picture-id499787076",occupation:"Basketball",location:"California"},{id:11,name:"Salma Hayek",image:"https://media.gettyimages.com/photos/actress-salma-hayek-arrives-to-the-78th-annual-academy-awards-at-the-picture-id57006424",occupation:"Actress",location:"Boston"},{id:12,name:"Neymar",image:"https://cdn.forbesafrica.com/app/uploads/2017/08/04152335/Neymar.jpg",occupation:"Soccer Player",location:"London"}]},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(3),r=a.n(c),i=a(4),s=a(5),l=a(7),u=a(6),m=a(8);a(15);var p=function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.onClick(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})),n.a.createElement("div",{className:"content"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"Name:")," ",e.name),n.a.createElement("li",null,n.a.createElement("strong",null,"Occupation:")," ",e.occupation),n.a.createElement("li",null,n.a.createElement("strong",null,"Location:")," ",e.location))))};a(16);var d=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(17);var h=function(e){return n.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"darkblue"}},n.a.createElement("div",null,n.a.createElement("h1",{style:{color:"white"}},e.children)),n.a.createElement("div",null,n.a.createElement("p",{style:{color:"white"}},e.result)),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("p",{style:{marginRight:10,color:"white"}},"Score: ",e.score),n.a.createElement("p",{style:{color:"white"}},"Top Score: ",e.topScore)))},g=a(1),f=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),o=[e[a],e[t]];e[t]=o[0],e[a]=o[1]}return e},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={friends:g,currentScore:0,topScore:0,result:"",clicked:[],gameOver:!1},a.onClick=function(e){a.clickedPlayer(e);var t=f(g);a.setState({friends:t})},a.clickedPlayer=function(e){console.log("Picture clicked with id: ".concat(e)),a.state.clicked.includes(e)?a.resetGame():(a.pointIncrease(),a.state.clicked.push(e),a.setState({gameOver:!1}))},a.pointIncrease=function(){var e=a.state.currentScore+1;console.log("the score is ".concat(e)),e===a.state.friends.length?a.setState({result:"You win! Start clicking to play again!",topScore:e,currentScore:0,clicked:[],friends:g,gameOver:!1}):e>a.state.topScore?a.setState({topScore:e,currentScore:e,result:"Correct! New high score!"}):a.setState({currentScore:e,result:"Correct!"}),a.resetIconArray()},a.resetGame=function(){a.setState({points:0,currentScore:0,topScore:a.state.topScore,result:"You Loss!",clicked:[],friends:g,gameOver:!0}),a.resetIconArray()},a.resetIconArray=function(){var e=f(g);a.setState({friends:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({result:"Click on the picture to play"})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{score:this.state.currentScore,topScore:this.state.topScore,result:this.state.result},"Clicky Game"),n.a.createElement(d,null,this.state.friends.map(function(t){return n.a.createElement(p,{onClick:e.onClick,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location,shuffleArray:e.shuffleArray})})))}}]),t}(o.Component);a(18);r.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.98ee8e53.chunk.js.map