!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.tUtils=e():t.tUtils=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=r(1),o=n(a),i=8;t.exports={addSpaceAtIntervals:function(t,e){for(var r=Math.ceil(t.length/e),n=[],a=0;a<r;a++)n.push(t.substring(a*e,(a+1)*e));return n.join(" ")},getDefaultModalStyle:function(){return{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 51, 0.6)"},content:{position:"absolute",top:"42%",left:"50%",width:"360px",height:"280px",boxShadow:"0 20px 100px 0 rgba(24, 24, 40, 0.25), 0 12px 20px 0 rgba(24, 24, 40, 0.04)",background:"#fff",borderRadius:"3px",border:"none",outline:"none",padding:0,transform:"translate3d(-50%, -50%, 0)",boxSizing:"content-box"}}},getDictKeys:function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e},isValidCardNumber:function(t){var e=/^\d{16}$/;return t.match(e)},isValidCreditCardMonth:function(t){var e=/^\d{2}$/;if(t.match(e)){var r=parseInt(t);return r>0&&r<13}return!1},isValidCreditCardYear:function(t){var e=/^\d{2}$/;if(t.match(e)){var r=parseInt(t);return r>=0&&r<100}return!1},isValidCvc:function(t){var e=/^\d{3}$/;return t.match(e)},isValidEmail:function(t){var e=/^\w+.*@\w+\.\w+.*$/;return t.match(e)},isValidName:function(t){return t&&t.length>0},isValidPassword:function(t){return t.length>=i},isValidSkypeId:function(t){return t&&t.length>0},isEqualStrings:function(t,e){return!(!t||!e)&&0===t.localeCompare(e)},isValidTwitterHandle:function(t){return t&&t.length>0},isValidUrl:function(t){return t&&t.length>0},isValidUsername:function(t){var e=/^[a-zA-Z0-9\-]{3,256}$/;return t.match(e)},MIN_PASSWORD_LENGTH:i,nrToMonthString:function(t){switch(parseInt(t)){case 0:return"JANUARY";case 1:return"FEBRUARY";case 2:return"MARCH";case 3:return"APRIL";case 4:return"MAY";case 5:return"JUNE";case 6:return"JULY";case 7:return"AUGUST";case 8:return"SEPTEMBER";case 9:return"OCTOBER";case 10:return"NOVEMBER";case 11:return"DECEMBER";default:return"Invalid month"}},passwordDescription:"Your password must be at least "+i+" characters long",relativeDateString:function(t){var e=new Date(t),r=new Date,n=r-e,a=Math.floor(n/6e4),i=Math.floor(n/36e5),s=Math.floor(n/864e5);return a<60?a+"m ago":i<24?i+"h ago":s<14?s+"d ago":(0,o.default)(e,"mmmm dd, yyyy")},removeWhitespace:function(t){return t.replace(/\s+/g,"")},dotSeparator:"•",toDigitalTimeString:function(t){var e=Math.floor(t),r=Math.floor(e/60),n=e%60,a=null;a=n<10?"0"+n:n;var o=null;return o=r<10?"0"+r:r,o+":"+a},toSeconds:function(t){var e=0;if(t.indexOf(":")>=0)for(var r=t.split(":"),n=1,a=r.length-1;a>=0;a--)e+=n*parseInt(r[a]),n*=60;else e=parseInt(t);return e},toMinutesString:function(t){if(t<60)return Math.floor(t)+" sec";var e=Math.floor(t/60);return e+" min"},toMinutesLeftString:function(t,e){var r=e-t,n=Math.floor(r/60);return n+" min left"},usernameDescription:"Your username can only include letters, numbers and hyphens. It must also contain 3 or more characters",scrollToY:function(t,e,r,n){var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),o=t.scrollTop;e=e||0,r=r||2e3,n=n||"easeOutSine";var i=0,s=Math.max(.1,Math.min(Math.abs(o-e)/r,.8)),u={easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}},d=function r(){i+=1/60;var d=i/s,l=u[n](d);d<1?(a(r),t.scrollTop=o+(e-o)*l):t.scrollTop=e};d()},shortUrl:function(t){return t.replace("https://","").replace("http://","").replace("www.","").split("/")[0]}}},function(t,e,r){var n;!function(a){"use strict";function o(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}function i(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var r=new Date(e.getFullYear(),0,4);r.setDate(r.getDate()-(r.getDay()+6)%7+3);var n=e.getTimezoneOffset()-r.getTimezoneOffset();e.setHours(e.getHours()-n);var a=(e-r)/6048e5;return 1+Math.floor(a)}function s(t){var e=t.getDay();return 0===e&&(e=7),e}function u(t){return null===t?"null":void 0===t?"undefined":"object"!=typeof t?typeof t:Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()}var d=function(){var t=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g,e=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,r=/[^-+\dA-Z]/g;return function(n,a,l,c){if(1!==arguments.length||"string"!==u(n)||/\d/.test(n)||(a=n,n=void 0),n=n||new Date,n instanceof Date||(n=new Date(n)),isNaN(n))throw TypeError("Invalid date");a=String(d.masks[a]||a||d.masks.default);var m=a.slice(0,4);"UTC:"!==m&&"GMT:"!==m||(a=a.slice(4),l=!0,"GMT:"===m&&(c=!0));var f=l?"getUTC":"get",y=n[f+"Date"](),h=n[f+"Day"](),p=n[f+"Month"](),M=n[f+"FullYear"](),g=n[f+"Hours"](),T=n[f+"Minutes"](),v=n[f+"Seconds"](),D=n[f+"Milliseconds"](),S=l?0:n.getTimezoneOffset(),w=i(n),b=s(n),x={d:y,dd:o(y),ddd:d.i18n.dayNames[h],dddd:d.i18n.dayNames[h+7],m:p+1,mm:o(p+1),mmm:d.i18n.monthNames[p],mmmm:d.i18n.monthNames[p+12],yy:String(M).slice(2),yyyy:M,h:g%12||12,hh:o(g%12||12),H:g,HH:o(g),M:T,MM:o(T),s:v,ss:o(v),l:o(D,3),L:o(Math.round(D/10)),t:g<12?"a":"p",tt:g<12?"am":"pm",T:g<12?"A":"P",TT:g<12?"AM":"PM",Z:c?"GMT":l?"UTC":(String(n).match(e)||[""]).pop().replace(r,""),o:(S>0?"-":"+")+o(100*Math.floor(Math.abs(S)/60)+Math.abs(S)%60,4),S:["th","st","nd","rd"][y%10>3?0:(y%100-y%10!=10)*y%10],W:w,N:b};return a.replace(t,function(t){return t in x?x[t]:t.slice(1,t.length-1)})}}();d.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},d.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},n=function(){return d}.call(e,r,e,t),!(void 0!==n&&(t.exports=n))}(this)}])});