/******************************************
 * @name 阵风指南
 * @description 调试脚本: 去除广告, 顺带解锁视频次数
 * @channel https://t.me/yqc_123
 * @version 1.0.0
******************************************
脚本声明:
1. 本脚本仅用于学习研究，禁止用于商业用途
2. 本脚本不保证准确性、可靠性、完整性和及时性
3. 任何个人或组织均可无需经过通知而自由使用
4. 作者对任何脚本问题概不负责，包括由此产生的任何损失
5. 如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明、所有权证明，我将在收到认证文件确认后删除
6. 请勿将本脚本用于商业用途，由此引起的问题与作者无关
7. 本脚本及其更新版权归作者所有
******************************************
hostname = dp16dx.lgmufoix8f2.net

https?:\/\/dp16dx\.lgmufoix8f2\.net(\/|)$ url script-response-body https://raw.githubusercontent.com/s3czrm/myscripts/main/zhenfengzhinan.js
https?:\/\/dp16dx\.lgmufoix8f2\.net\/java\/(index\/game|show\/\d+|user\/my) url script-response-body https://raw.githubusercontent.com/s3czrm/myscripts/main/zhenfengzhinan.js
******************************************/
var x,e,t=["bG9n","cmVwbGFjZQ==","aWRhdGE9Jw==","Y29uY2F0","dXJs","ZWt0T2I=","Z2FtZQ==","R2JyR2c=","b2JqZWN0","c3RyaW5naWZ5","c3BsaXQ=","bWFw","Y2hhckNvZGVBdA==","dG9TdHJpbmc=","cGFkU3RhcnQ=","am9pbg==","cmV2ZXJzZQ==","cG9wdXA=","dG9kYXlfbWF4","dG9kYXlfbGVmdA==","ZnVsbHZpZGVv","dmlw","c3ZpcA==","V29JRms=","TVVybWs=","cGFyc2U=","YXNzaWdu","eEVSZm0=","TUdDUEs=","WnRidGw=","dEJMUHA=","eXl5eU1N","X25vdGlmaWVk","5pys6ISa5pys5LuF55So5LqO5oqA5pyv5a2m5Lmg77yM56aB5q2i6Z2e5rOV5L2/55So44CC","5LiN5b6X5bCG5pys6ISa5pys55So5LqO5Lu75L2V5ZWG5Lia5oiW6L+d5rOV55So6YCU77yM6L+d6ICF5ZCO5p6c6Ieq6LSf44CC","5Zyo5Lit5Zu95aSn6ZmG5Zyw5Yy677yM5Lil56aB5Lyg5pKt5pys6ISa5pys44CC","5byA5Y+R6ICF5LiN5a+56ISa5pys55qE5rul55So5om/5ouF5Lu75L2V6LSj5Lu744CC","6L+d6KeE5L2/55So5a+86Ie055qE5ZCO5p6c55Sx5L2/55So6ICF6Ieq6KGM5om/5ouF44CC","5aaC5pyJ6L+d5Y+N55u45YWz5rOV6KeE77yM5bCG56uL5Y2z5Yig6Zmk5pys6ISa5pys44CC","5L2/55So6ICF6Iul6L+d5Y+N5aOw5piO6KeE5a6a77yM5bCG6Ieq5Yqo6KeG5Li65pS+5byD5L2/55So5p2D44CC","5pys5aOw5piO55qE5pyA57uI6Kej6YeK5p2D5b2S5byA5Y+R6ICF5omA5pyJ44CC","dHJ1ZQ==","c2V0TW9udGg=","Z2V0TW9udGg=","6ISa5pys5aOw5piO","aHR0cHM6Ly90Lm1lL3lxY18xMjMv","dmFsdWVGb3JLZXk=","RlV1Y3c=","bGVuZ3Ro","Z2V0RGF0ZQ==","Z2V0SG91cnM=","Z2V0TWludXRlcw==","Z2V0U2Vjb25kcw==","Zmxvb3I=","Z2V0TWlsbGlzZWNvbmRz","dGVzdA==","Z2V0RnVsbFllYXI=","c3Vic3Ry","c2V0VmFsdWVGb3JLZXk=","d3JpdGU=","cmVhZA==","c3RyaW5n","JG9wZW4=","JGNvcHk=","SGFPbUU=","REZjSGo=","YlBFcVE=","ZU5NWXk=","cG9zdA==","QGJhYmVsL2hlbHBlcnMgLSB0eXBlb2Y=","ZnVuY3Rpb24=","c3ltYm9s","aXRlcmF0b3I=","Y29uc3RydWN0b3I=","cHJvdG90eXBl","6Zi16aOO5oyH5Y2X","MS4wLjA=","dW5kZWZpbmVk","emZ6bg==","Ym9keQ==","bWF0Y2g=","ZGF0YQ==","YmFubmVy"];x=t,e=484,function(e){for(;--e;)x.push(x.shift())}(++e);var n=function(x,e){x-=0;var o,r=t[x];void 0===n.wHTpjQ&&(o=function(){var x;try{x=Function('return (function() {}.constructor("return this")( ));')()}catch(e){x=window}return x}(),o.atob||(o.atob=function(x){for(var e,t,n=String(x).replace(/=+$/,""),o=0,r=0,a="";t=n.charAt(r++);~t&&(e=o%4?64*e+t:t,o++%4)?a+=String.fromCharCode(255&e>>(-2*o&6)):0)t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(t);return a}),n.XnpbpD=function(x){for(var e=atob(x),t=[],n=0,o=e.length;n<o;n++)t+="%"+("00"+e.charCodeAt(n).toString(16)).slice(-2);return decodeURIComponent(t)},n.eCDUrZ={},n.wHTpjQ=!0);var a=n.eCDUrZ[x];return void 0===a?(r=n.XnpbpD(r),n.eCDUrZ[x]=r):r=a,r};(()=>{function x(e){return n("0x0"),x=n("0x1")==typeof Symbol&&n("0x2")==typeof Symbol[n("0x3")]?function(x){return typeof x}:function(x){return x&&n("0x1")==typeof Symbol&&x[n("0x4")]===Symbol&&x!==Symbol[n("0x5")]?n("0x2"):typeof x},x(e)}var e=n("0x6"),t=(n("0x7"),typeof $task!==n("0x8"));!function(x){if(n("0x2b")===n("0x2c"))return $prefs[n("0x3c")](key);var r=""[n("0x11")](x,"_")[n("0x11")](f(n("0x2d")),n("0x2e"));if(function(x){if(t)return $prefs[n("0x3c")](x);return $persistentStore[n("0x4a")](x)}(r)===n("0x37"));else{var a=function(){var e=[n("0x2f"),n("0x30"),n("0x31"),n("0x32"),n("0x33"),n("0x34"),n("0x35"),n("0x36")];b(n("0x37"),r);var t=f(n("0x2d"),new Date((new Date)[n("0x38")]((new Date)[n("0x39")]()-1)));return b(null,""[n("0x11")](x,"_")[n("0x11")](t,n("0x2e"))),e[n("0x1d")]("\n")}();!function(x,e,r){var a=arguments[n("0x3e")]>3&&void 0!==arguments[3]?arguments[3]:{};a&&typeof a===n("0x4b")&&(a={$open:a});var c=a,p=c[n("0x4c")],u=void 0===p?"":p,i=c[n("0x4d")],d={};if(t)return n("0x4e")===n("0x4f")?t?$prefs[n("0x48")](val,key):$persistentStore[n("0x49")](val,key):(u&&Object[n("0x28")](d,{"open-url":u}),i&&Object[n("0x28")](d,{"update-pasteboard":i}),$notify(x,e,r,d));if(n("0x8")!==typeof $loon)return n("0x50")!==n("0x51")?(u&&Object[n("0x28")](d,{openUrl:u}),$notification[n("0x52")](x,e,r,d)):typeof o;u&&Object[n("0x28")](d,{url:u});$notification[n("0x52")](x,e,r,d)}(e,n("0x3a"),a,n("0x3b"))}}(n("0x9"));var r=$response[n("0xa")];if($response[n("0xa")][n("0xb")](/idata=/)){var a=$response[n("0xa")][n("0xb")](/idata=\'(.*?)\'/)[1],c=i(a);c[n("0xc")][n("0xd")]=[];var p=d(c);r=r[n("0xf")](/idata='.*?'/g,n("0x10")[n("0x11")](p,"'"))}var u=i(r);if($request[n("0x12")][n("0xb")](/index\/game$/)&&(n("0x13"),n("0x13"),u[n("0xc")][n("0x14")]=[]),$request[n("0x12")][n("0xb")](/show\/\d+$/)){if(n("0x15")!=n("0x15"))return x(data)===n("0x16")&&(data=JSON[n("0x17")](data)),btoa(data[n("0x18")]("")[n("0x19")]((function(x){var e=x[n("0x1a")](0);return e>127?"\\u"+e[n("0x1b")](16)[n("0x1c")](4,"0"):x}))[n("0x1d")](""))[n("0x18")]("")[n("0x1e")]()[n("0x1d")]("");u[n("0xc")][n("0x1f")]=null,u[n("0xc")][n("0xd")]=[],u[n("0xc")][n("0x20")]=999,u[n("0xc")][n("0x21")]=999,u[n("0xc")][n("0x22")]=!0}function i(x){return n("0x25")!==n("0x26")?JSON[n("0x27")](atob(x[n("0x18")]("")[n("0x1e")]()[n("0x1d")](""))):($open&&Object[n("0x28")](rawopts,{"open-url":$open}),$copy&&Object[n("0x28")](rawopts,{"update-pasteboard":$copy}),$notify(title,subTitle,content,rawopts))}function d(e){if(x(e)===n("0x16")){if(n("0x29")===n("0x2a"))return n("0x0"),x=n("0x1")==typeof Symbol&&n("0x2")==typeof Symbol[n("0x3")]?function(x){return typeof x}:function(x){return x&&n("0x1")==typeof Symbol&&x[n("0x4")]===Symbol&&x!==Symbol[n("0x5")]?n("0x2"):typeof x},x(o);e=JSON[n("0x17")](e)}return btoa(e[n("0x18")]("")[n("0x19")]((function(x){var e=x[n("0x1a")](0);return e>127?"\\u"+e[n("0x1b")](16)[n("0x1c")](4,"0"):x}))[n("0x1d")](""))[n("0x18")]("")[n("0x1e")]()[n("0x1d")]("")}function f(x){if(n("0x3d")==n("0x3d")){var e=arguments[n("0x3e")]>1&&void 0!==arguments[1]?arguments[1]:null,t=e?new Date(e):new Date,o={"M+":t[n("0x39")]()+1,"d+":t[n("0x3f")](),"H+":t[n("0x40")](),"m+":t[n("0x41")](),"s+":t[n("0x42")](),"q+":Math[n("0x43")]((t[n("0x39")]()+3)/3),S:t[n("0x44")]()};for(var r in/(y+)/[n("0x45")](x)&&(x=x[n("0xf")](RegExp.$1,(t[n("0x46")]()+"")[n("0x47")](4-RegExp.$1[n("0x3e")]))),o)new RegExp("("+r+")")[n("0x45")](x)&&(x=x[n("0xf")](RegExp.$1,1==RegExp.$1[n("0x3e")]?o[r]:("00"+o[r])[n("0x47")]((""+o[r])[n("0x3e")])));return x}var a=arguments[n("0x3e")]>1&&void 0!==arguments[1]?arguments[1]:null,c=a?new Date(a):new Date,p={"M+":c[n("0x39")]()+1,"d+":c[n("0x3f")](),"H+":c[n("0x40")](),"m+":c[n("0x41")](),"s+":c[n("0x42")](),"q+":Math[n("0x43")]((c[n("0x39")]()+3)/3),S:c[n("0x44")]()};for(var u in/(y+)/[n("0x45")](x)&&(x=x[n("0xf")](RegExp.$1,(c[n("0x46")]()+"")[n("0x47")](4-RegExp.$1[n("0x3e")]))),p)new RegExp("("+u+")")[n("0x45")](x)&&(x=x[n("0xf")](RegExp.$1,1==RegExp.$1[n("0x3e")]?p[u]:("00"+p[u])[n("0x47")]((""+p[u])[n("0x3e")])));return x}function b(x,e){return t?$prefs[n("0x48")](x,e):$persistentStore[n("0x49")](x,e)}$request[n("0x12")][n("0xb")](/user\/my/)&&(u[n("0xc")][n("0x23")]=1,u[n("0xc")][n("0x24")]=1,u[n("0xc")][n("0x20")]=999,u[n("0xc")][n("0x21")]=999),r=d(u),$done({body:r})})();
