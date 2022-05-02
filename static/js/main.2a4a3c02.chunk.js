(this["webpackJsonpfitts-law-input-task"]=this["webpackJsonpfitts-law-input-task"]||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"circlePathDiamater":300,"radius":20,"count":9,"repetitions":15,"direction":1}]')},45:function(e){e.exports=JSON.parse('[{"circlePathDiamater":600,"radius":40,"count":9,"repetitions":15,"direction":1},{"circlePathDiamater":300,"radius":20,"count":9,"repetitions":15,"direction":1}]')},57:function(e,t,n){e.exports=n(70)},62:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),s=n.n(i),c=(n(62),n(21)),l=n(6),o=(n(63),n(11)),u=n(12),m=n(14),h=n(13),d=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container py-5"},r.a.createElement("h1",null,"Fitt's Law Demo"),r.a.createElement("hr",null),r.a.createElement("p",{className:"text-justify"},"This application was created to test Fitt's law, by collecting data of user input in two dimensions. It does so by prompting the user to click or tap several sequences of circles as highlighted and logging the accuracy and time taken to select each circle. This data is then made available to the user at the end of the test via a CSV file. For more information, feel free to contact me via my social accounts."),r.a.createElement("hr",null),r.a.createElement("p",null,"Built with React, D3, and FileShare by Vishnu Gunapathi."),r.a.createElement("hr",null),r.a.createElement("div",{className:"icon-container"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/twinji"},r.a.createElement("img",{alt:"GitHub",src:"https://raw.githubusercontent.com/twinji/twinji/master/icons/github.svg"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/_twinji/"},r.a.createElement("img",{alt:"Instagram",src:"https://raw.githubusercontent.com/twinji/twinji/master/icons/instagram.svg"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/twinji/"},r.a.createElement("img",{alt:"LinkedIn",src:"https://raw.githubusercontent.com/twinji/twinji/master/icons/linkedin.svg"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/_twinji"},r.a.createElement("img",{alt:"Twitter",src:"https://raw.githubusercontent.com/twinji/twinji/master/icons/twitter.svg"}))))}}]),n}(a.Component),p=n(37),f=n(22),g=n(18),v=n(23),b=n(43),C=n(10),E=n(20),w=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChange=function(e){console.log("State:",a.state),a.setState(Object(b.a)({},e.target.name,e.target.value),(function(){a.props.onChange({username:a.state.username,device:a.state.device,fittsParams:a.state.fittsParams})}))},a.state={username:"",device:"",fittsParams:e.fittsParams},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(C.a,{onSubmit:this.onSubmit},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,{as:E.a,md:"6",controlId:"loginForm.ControlInputUsername"},r.a.createElement(C.a.Label,null,"Condition"),r.a.createElement(C.a.Control,{required:!0,type:"text",placeholder:"Condition",name:"username",defaultValue:"",onChange:this.onChange}),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please enter a condition"))),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,{as:E.a,md:"12",controlId:"loginForm.ControlFittsParams"},r.a.createElement(C.a.Label,null,"Fitts Parameters"),r.a.createElement(C.a.Control,{required:!0,as:"textarea",defaultValue:this.state.fittsParams,name:"fittsParams",onChange:this.onChange}))))}}]),n}(a.Component),y=n(44),k=n.n(y),x=n(27),P=(n(45),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).resetTest=function(){var e=x,t=Math.max.apply(Math,Object(p.a)(e.map((function(e){return e.circlePathDiamater+2*e.radius})))),n=Math.min(a.container.clientWidth,a.container.clientHeight),r=n>t?1:n/t;a.setState({isPractice:!1,sequences:e,scale:r,username:"",device:"",isActive:!1,isComplete:!1,generated:[],results:[],currentSequenceIndex:0,currentRepetition:1,currentCircleIndex:0,previousCircleIndex:null},(function(){a.generateCircleData()}))},a.getResults=function(){a.generateCsvFromResultLogs()},a.generateCsvFromResultLogs=function(){var e=Object.keys(a.state.results[0]).join(",")+"\n"+a.state.results.map((function(e){return Object.values(e).join(",")})).join("\n"),t=new Blob([e],{type:"text/csv;charset=utf-8;"});k.a.saveAs(t,a.state.username+"_"+a.state.device+"_fitts_law_results_"+Date.now().toString()+".csv")},a.resumeTest=function(){a.setState({isActive:!0,previousCircleIndex:null}),a.restartTimer()},a.pauseTest=function(){a.setState({isActive:!1})},a.completeTest=function(){a.setState({isActive:!1,isComplete:!0},(function(){a.state.isPractice||a.getResults()}))},a.restartTimer=function(){a.startTime=performance.now(),a.timeElapsed=null},a.stopTimer=function(){a.timeElapsed=performance.now()-a.startTime},a.generateNewSequences=function(e){return e.split("\n").filter((function(e){return e.trim()})).map((function(e){return e.split(",").filter((function(e){return e.trim()})).map(Number)})).filter((function(e){return e.length>1})).map((function(e){return{circlePathDiamater:e[0],radius:e[1],count:a.state.numCircles,repetitions:a.state.numClicks,direction:a.state.direction}}))},a.onLoginDetailsChange=function(e){a.setState({username:e.username,device:e.device,sequences:a.generateNewSequences(e.fittsParams)},(function(){a.generateCircleData()}))},a.skipPractice=function(){a.state.isPractice&&a.setState({isActive:!1,isPractice:!1,sequences:x},(function(){a.generateCircleData()}))},a.escPressed=function(e){27===e.keyCode&&a.skipPractice()},a.calculateDistance=function(e,t,n,a){var r=t-e,i=a-n;return Math.sqrt(r*r+i*i)},a.onClick=function(e,t){if(a.state.isActive){console.log("Circle click",e,t);var n=t===a.state.currentCircleIndex;n&&a.stopTimer();var r=a.state.currentSequenceIndex,i=null==e?{x:null,y:null}:{x:e.x,y:e.y},s=a.state.sequences[r];if(a.appendResultLog(a.state.username,a.state.device,a.state.currentSequenceIndex+1,a.state.currentRepetition,s.circlePathDiamater,null,s.radius,s.direction,n,a.timeElapsed,i.x,i.y),n){var c=a.state.currentSequenceIndex,l=a.state.sequences[c],o=a.state.currentCircleIndex,u=(a.state.currentCircleIndex+Math.round(l.count/2))%l.count,m=a.state.currentRepetition+1,h=!1;m>l.repetitions&&(m=1,u=0,++c>=a.state.sequences.length?(a.completeTest(),h=!0):a.pauseTest()),a.setState({currentCircleIndex:u,currentRepetition:m,currentSequenceIndex:c,previousCircleIndex:o},(function(){h||(a.renderCircles(),a.restartTimer())}))}}},a.appendResultLog=function(e,t,n,r,i,s,c,l,o,u,m,h){var d=!1,f=a.state.results.map((function(i){return i.username===e&&i.device===t&&i.sequence===n&&i.rep===r&&(d=!0,i.timestamp=Date.now(),o?(i.hit=o,i.time=a.timeElapsed):i.misses++),i}));d?a.setState({results:f}):a.setState((function(t){return{results:[].concat(Object(p.a)(t.results),[{condition:e,sequence:n,rep:r,circlePathDiameter:i,radius:c,hit:o,hitX:m,hitY:h,time:u,timestamp:Date.now()}])}}))},a.inSequence=function(){return a.state.currentSequenceIndex>0&&!a.state.isComplete},a.generateCircleData=function(){console.log("Sequences:",a.state.sequences),a.state.sequences.length>0&&a.setState({generated:a.state.sequences.map((function(e){var t=2*Math.PI,n=a.container.clientWidth/2,r=a.container.clientHeight/2;return{circles:Array(e.count).fill().map((function(i,s){var c=1.5*Math.PI;return{x:n+Math.cos(c+s*(t/e.count))*a.state.scale*e.circlePathDiamater/2,y:r+Math.sin(c+s*(t/e.count))*a.state.scale*e.circlePathDiamater/2,radius:e.radius*a.state.scale,color:"lightgray",activeColor:"crimson"}}))}}))},a.renderCircles)},a.renderCircles=function(){f.c("svg > *").remove(),f.b("#demoContainer > svg").attr("width",a.container.clientWidth).attr("height",a.container.clientHeight).on("click",(function(e){f.a.stopPropagation(),a.onClick(null,-1)})).selectAll("circle").data(a.state.generated[a.state.currentSequenceIndex].circles).enter().append("circle").attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})).attr("r",(function(e){return e.radius})).attr("fill",(function(e,t){return t===a.state.currentCircleIndex?e.activeColor:e.color})).on("click",(function(e,t){f.a.stopPropagation(),a.onClick(e,t)}))},a.state={isActive:!1,isComplete:!1,isPractice:!1,username:"",device:"",sequences:null,generated:[],results:[],currentSequenceIndex:0,currentRepetition:1,currentCircleIndex:0,previousCircleIndex:null,fittsParams:x.map((function(e){return[e.circlePathDiamater,2*e.radius]})),numCircles:9,numClicks:10,direction:1,lastCircleClick:{x:null,y:null}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escPressed,!1),this.resetTest()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escPressed,!1)}},{key:"render",value:function(){var e=this,t={width:"auto",height:"auto",position:"absolute",zIndex:-100,right:0,left:0,top:55,padding:6,fontWeight:"bold",margin:"auto",maxWidth:"100%",maxHeight:"100%",overflow:"visible",backgroundColor:this.state.isPractice?"orange":"lightblue",color:"white",fontSize:"20px"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{centered:!0,keyboard:!1,show:!this.state.isActive,onHide:this.resumeTest,backdrop:"static"},r.a.createElement(g.a.Header,null,(this.inSequence()||this.state.isComplete)&&r.a.createElement(g.a.Title,null,this.state.isPractice?"Practice sequence":"Sequence"," ",this.state.currentSequenceIndex," out of ",this.state.sequences.length," complete"),!this.inSequence()&&!this.state.isComplete&&r.a.createElement(g.a.Title,null,"Fitt's law demo")),r.a.createElement(g.a.Body,null,!this.inSequence()&&!this.state.isComplete&&r.a.createElement(w,{onChange:this.onLoginDetailsChange,fittsParams:this.state.fittsParams?this.state.fittsParams.map((function(e){return e.join(",")})).join("\n"):""}),this.inSequence()?"Take a break and proceed to the next sequence when you are ready.":this.state.isComplete?this.state.isPractice?"You have completed the practice run, click below to continue.":"You have completed this demo, click below to view results.":"Select the red circles as they appear as quickly as possible to the best of your ability."),r.a.createElement(g.a.Footer,null,!this.state.isComplete&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"primary",onClick:this.resumeTest,disabled:!this.state.username},this.inSequence()?"Proceed":this.state.isPractice?"Begin practice":"Begin test")),this.state.isComplete&&this.state.isPractice&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"secondary",onClick:this.resetTest},"Continue")),this.state.isComplete&&!this.state.isPractice&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"secondary",onClick:this.resetTest},"Retry demo"),r.a.createElement(v.a,{variant:"primary",onClick:this.getResults},"Get results")))),r.a.createElement("div",{id:"demoContainer",ref:function(t){return e.container=t},style:{width:"auto",height:"auto",position:"fixed",zIndex:-99,right:0,left:0,top:0,bottom:0,margin:"auto",maxWidth:"100%",maxHeight:"100%",overflow:"visible"}},null!==this.state.sequences&&r.a.createElement("span",{style:t},this.state.isPractice?"Practice sequence":"Sequence","\xa0",Math.min(this.state.currentSequenceIndex+1,this.state.sequences.length),"/",this.state.sequences.length),r.a.createElement("svg",null)))}}]),n}(a.Component)),q=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light rounded"},r.a.createElement("div",{className:"container py-0 my-0"},r.a.createElement(c.b,{className:"navbar-brand",to:"/"},"Fitts' Law Demo"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link text-dark",to:"/about"},"About")))))}}]),n}(a.Component);function S(){return r.a.createElement(c.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(q,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(P,null)),r.a.createElement(l.a,{path:"/about"},r.a.createElement(d,null)))))}n(69);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.2a4a3c02.chunk.js.map