!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tUtils=t():e.tUtils=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(1),o=r(a),i=8;e.exports={addSpaceAtIntervals:function(e,t){for(var n=Math.ceil(e.length/t),r=[],a=0;a<n;a++)r.push(e.substring(a*t,(a+1)*t));return r.join(" ")},getDefaultModalStyle:function(){return{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 51, 0.6)"},content:{position:"absolute",top:"42%",left:"50%",width:"360px",height:"280px",boxShadow:"0 20px 100px 0 rgba(24, 24, 40, 0.25), 0 12px 20px 0 rgba(24, 24, 40, 0.04)",background:"#fff",borderRadius:"3px",border:"none",outline:"none",padding:0,transform:"translate3d(-50%, -50%, 0)",boxSizing:"content-box"}}},getDictKeys:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},isValidCardNumber:function(e){var t=/^\d{16}$/;return e.match(t)},isValidCreditCardMonth:function(e){var t=/^\d{2}$/;if(e.match(t)){var n=parseInt(e);return n>0&&n<13}return!1},isValidCreditCardYear:function(e){var t=/^\d{2}$/;if(e.match(t)){var n=parseInt(e);return n>=0&&n<100}return!1},isValidCvc:function(e){var t=/^\d{3}$/;return e.match(t)},isValidEmail:function(e){var t=/^\w+.*@\w+\.\w+.*$/;return e.match(t)},isValidName:function(e){return e&&e.length>0},isValidPassword:function(e){return e.length>=i},isValidSkypeId:function(e){return e&&e.length>0},isEqualStrings:function(e,t){return!(!e||!t)&&0===e.localeCompare(t)},isValidTwitterHandle:function(e){return e&&e.length>0},isValidUrl:function(e){return e&&e.length>0},isValidUsername:function(e){var t=/^[a-zA-Z0-9\-]{3,256}$/;return e.match(t)},MIN_PASSWORD_LENGTH:i,nrToMonthString:function(e){switch(parseInt(e)){case 0:return"JANUARY";case 1:return"FEBRUARY";case 2:return"MARCH";case 3:return"APRIL";case 4:return"MAY";case 5:return"JUNE";case 6:return"JULY";case 7:return"AUGUST";case 8:return"SEPTEMBER";case 9:return"OCTOBER";case 10:return"NOVEMBER";case 11:return"DECEMBER";default:return"Invalid month"}},passwordDescription:"Your password must be at least "+i+" characters long",relativeDateString:function(e){var t=new Date(e),n=new Date,r=n-t,a=Math.floor(r/6e4),i=Math.floor(r/36e5),s=Math.floor(r/864e5);return a<60?a+"m ago":i<24?i+"h ago":s<14?s+"d ago":(0,o.default)(t,"mmmm dd, yyyy")},removeWhitespace:function(e){return e.replace(/\s+/g,"")},dotSeparator:"•",toDigitalTimeString:function(e){var t=Math.floor(e),n=Math.floor(t/60),r=t%60,a=null;a=r<10?"0"+r:r;var o=null;return o=n<10?"0"+n:n,o+":"+a},toSeconds:function(e){var t=0;if(e.indexOf(":")>=0)for(var n=e.split(":"),r=1,a=n.length-1;a>=0;a--)t+=r*parseInt(n[a]),r*=60;else t=parseInt(e);return t},toMinutesString:function(e){if(e<60)return Math.floor(e)+" sec";var t=Math.floor(e/60);return t+" min"},toMinutesLeftString:function(e,t){var n=t-e,r=Math.floor(n/60);return r+" min left"},usernameDescription:"Your username can only include letters, numbers and hyphens. It must also contain 3 or more characters",scrollToY:function(e,t,n,r){var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),o=e.scrollTop;t=t||0,n=n||2e3,r=r||"easeOutSine";var i=0,s=Math.max(.1,Math.min(Math.abs(o-t)/n,.8)),u={easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}},d=function n(){i+=1/60;var d=i/s,l=u[r](d);d<1?(a(n),e.scrollTop=o+(t-o)*l):e.scrollTop=t};d()},shortUrl:function(e){return e.replace("https://","").replace("http://","").replace("www.","").split("/")[0]},copyToClipboard:function(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent";var n="textContent"in document.body?"textContent":"innerText";t.value=document.querySelector(".perk-modal .code-area h2")[n],document.body.appendChild(t),t.select();var r=!1;try{r=document.execCommand("copy")}catch(e){}return document.body.removeChild(t),r}}},function(e,t,n){var r;!function(a){"use strict";function o(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function i(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)}function s(e){var t=e.getDay();return 0===t&&(t=7),t}function u(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}var d=function(){var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(r,a,l,c){if(1!==arguments.length||"string"!==u(r)||/\d/.test(r)||(a=r,r=void 0),r=r||new Date,r instanceof Date||(r=new Date(r)),isNaN(r))throw TypeError("Invalid date");a=String(d.masks[a]||a||d.masks.default);var m=a.slice(0,4);"UTC:"!==m&&"GMT:"!==m||(a=a.slice(4),l=!0,"GMT:"===m&&(c=!0));var f=l?"getUTC":"get",y=r[f+"Date"](),h=r[f+"Day"](),p=r[f+"Month"](),M=r[f+"FullYear"](),g=r[f+"Hours"](),v=r[f+"Minutes"](),T=r[f+"Seconds"](),b=r[f+"Milliseconds"](),S=l?0:r.getTimezoneOffset(),D=i(r),w=s(r),x={d:y,dd:o(y),ddd:d.i18n.dayNames[h],dddd:d.i18n.dayNames[h+7],m:p+1,mm:o(p+1),mmm:d.i18n.monthNames[p],mmmm:d.i18n.monthNames[p+12],yy:String(M).slice(2),yyyy:M,h:g%12||12,hh:o(g%12||12),H:g,HH:o(g),M:v,MM:o(v),s:T,ss:o(T),l:o(b,3),L:o(Math.round(b/10)),t:g<12?"a":"p",tt:g<12?"am":"pm",T:g<12?"A":"P",TT:g<12?"AM":"PM",Z:c?"GMT":l?"UTC":(String(r).match(t)||[""]).pop().replace(n,""),o:(S>0?"-":"+")+o(100*Math.floor(Math.abs(S)/60)+Math.abs(S)%60,4),S:["th","st","nd","rd"][y%10>3?0:(y%100-y%10!=10)*y%10],W:D,N:w};return a.replace(e,function(e){return e in x?x[e]:e.slice(1,e.length-1)})}}();d.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},d.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},r=function(){return d}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}(this)}])});