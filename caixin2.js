/******************************************
 * @Name 𝐶𝑎𝑖𝑥𝑖𝑛𝑊𝑒𝑒𝑘𝑙𝑦
 * @Description 𝑈𝑛𝑙𝑜𝑐𝑘 𝑃𝑟𝑒𝑚𝑖𝑢𝑚 𝐹𝑒𝑎𝑡𝑢𝑟𝑒𝑠
 * @Channel https://t.me/yqc_123
 * @Author 𝐻𝑎𝑢𝑠𝑑𝑜𝑟𝑓𝑓
 * @Update 20240807
 * @Link http://t.cn/A68FeFf9
 * @Version 4.0.6
 ******************************************
[rewrite_local]
# > 𝐶𝑎𝑖𝑥𝑖𝑛𝑊𝑒𝑒𝑘𝑙𝑦 𝐶𝑟𝑎𝑐𝑘 𝑃𝑟𝑒𝑚𝑖𝑢𝑚
^https?:\/\/ipadcms\.caixin\.com\/(api\/article\/getMagazineArticleList|tmp\/articles)\/\d+ url script-response-body https://gist.githubusercontent.com/yqc007/eadf2d5a7465fb759dc7dec436151a79/raw/CaixinWeekly.js
[mitm] 
hostname = ipadcms.caixin.com
******************************************/

var n,t=["YXBwbHk=","ZnVuY3Rpb24gKlwoICpcKQ==","XCtcKyAqKD86XzB4KD86W2EtZjAtOV0pezQsNn18KD86XGJ8XGQpW2EtejAtOV17MSw0fSg/OlxifFxkKSk=","aW5pdA==","dGVzdA==","Y2hhaW4=","aW5wdXQ=","cmV0dXJuIChmdW5jdGlvbigpIA==","e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk=","Y29uc29sZQ==","bG9n","d2Fybg==","aW5mbw==","ZXJyb3I=","ZXhjZXB0aW9u","ZGVidWc=","cGFyc2U=","Ym9keQ==","b2JqZWN0","c3RyaW5naWZ5","Y29uc3RydWN0b3I=","d2hpbGUgKHRydWUpIHt9","ZGVidQ==","Y2FsbA==","YWN0aW9u","Z2dlcg==","c3RhdGVPYmplY3Q="],r=function(n,o){n-=0;var c,e=t[n];void 0===r.zfburZ&&(c=function(){var n;try{n=Function('return (function() {}.constructor("return this")( ));')()}catch(t){n=window}return n}(),c.atob||(c.atob=function(n){for(var t,r,o=String(n).replace(/=+$/,""),c=0,e=0,u="";r=o.charAt(e++);~r&&(t=c%4?64*t+r:r,c++%4)?u+=String.fromCharCode(255&t>>(-2*c&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return u}),r.DyCvGQ=function(n){for(var t=atob(n),r=[],o=0,c=t.length;o<c;o++)r+="%"+("00"+t.charCodeAt(o).toString(16)).slice(-2);return decodeURIComponent(r)},r.QUohaC={},r.zfburZ=!0);var u=r.QUohaC[n];return void 0===u?(e=r.DyCvGQ(e),r.QUohaC[n]=e):e=u,e},o=(n=!0,function(t,o){var c=n?function(){if(o){var n=o[r("0x0")](t,arguments);return o=null,n}}:function(){};return n=!1,c});!function(){o(this,(function(){var n=new RegExp(r("0x1")),t=new RegExp(r("0x2"),"i"),o=i(r("0x3"));n[r("0x4")](o+r("0x5"))&&t[r("0x4")](o+r("0x6"))?i():o("0")}))()}(),setInterval((function(){i()}),4e3);var c,e=(c=!0,function(n,t){var o=c?function(){if(t){var o=t[r("0x0")](n,arguments);return t=null,o}}:function(){};return c=!1,o}),u=e(this,(function(){var n,t=function(){};try{var o=Function(r("0x7")+r("0x8")+");");n=o()}catch(t){n=window}n.console?(n[r("0x9")].log=t,n[r("0x9")][r("0xb")]=t,n[r("0x9")][r("0xf")]=t,n.console[r("0xc")]=t,n[r("0x9")][r("0xd")]=t,n[r("0x9")][r("0xe")]=t,n.console.trace=t):n[r("0x9")]=function(n){var t={};return t[r("0xa")]=n,t[r("0xb")]=n,t.debug=n,t[r("0xc")]=n,t[r("0xd")]=n,t[r("0xe")]=n,t.trace=n,t}(t)}));function i(n){function t(n){if("string"==typeof n)return function(n){}[r("0x14")](r("0x15")).apply("counter");1!==(""+n/n).length||n%20==0?function(){return!0}[r("0x14")](r("0x16")+"gger")[r("0x17")](r("0x18")):function(){return!1}[r("0x14")](r("0x16")+r("0x19"))[r("0x0")](r("0x1a")),t(++n)}try{if(n)return t;t(0)}catch(n){}}u(),(()=>{let n=JSON[r("0x10")]($response[r("0x11")]);const t=JSON[r("0x13")](function n(t){if(typeof t===r("0x12")&&null!==t)for(let o in t)"isfree"===o&&0===t[o]?t[o]=1:typeof t[o]===r("0x12")&&n(t[o]);return t}(n));$done({body:t})})();
