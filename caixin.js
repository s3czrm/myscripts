/***********************************

> ScriptName        财新通VIP[墨鱼版]
> Author            @ddgksf2013
> download          https://apps.apple.com/us/app/id356023612
> WechatID          墨鱼手记
> TgChannel         https://t.me/ddgksf2021
> Contribute        https://t.me/ddgksf2013_bot
> Feedback          📮 ddgksf2013@163.com 📮
> UpdateTime        2023-12-10
> Suitable          自行观看“# > ”注释内容，解锁是暂时的，购买也不是永久的[订阅、跑路]
> Attention         还是不要引用的，谢谢合作！
> ScriptURL         https://gist.githubusercontent.com/ddgksf2013/c9263b025fc1dc20fccfca660da9a35d/raw/caixin.seluse.js


在官方没有动手之前，财新通脚本免费分享给大家使用




[rewrite_local]

# ～ 财新@ddgksf2013
^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth|groupImageValidate) url script-request-header https://gist.githubusercontent.com/ddgksf2013/c9263b025fc1dc20fccfca660da9a35d/raw/caixin.seluse.js
^https?:\/\/gateway\.caixin\.com\/api\/(1ucenter\/appapi|app-api\/userAuth\/getUserPowerCard) url script-response-body https://gist.githubusercontent.com/ddgksf2013/c9263b025fc1dc20fccfca660da9a35d/raw/caixin.seluse.js
^https?:\/\/gg\.caixin\.com\/s\?z=caixin&op=1&c=3362 url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/caixinads.js
^https?:\/\/gg\.caixin\.com\/\?z=caixin&slot url reject-200
^https?:\/\/gg\.caixin\.com\/s\?z=caixin&slot url reject-200
^https?:\/\/mapp.*\.caixin\.com\/(\/)?index_page url script-response-body https://gist.githubusercontent.com/ddgksf2013/c9263b025fc1dc20fccfca660da9a35d/raw/caixin.seluse.js
^https?:\/\/(msgapi|mappsv5|gateway|entities)\.caixin\.com\/(msg_api\/annmsg\/annlist|channelv5\/article_ad_ios_info\.json) url reject-200
^https?:\/\/(msgapi|mappsv5|gateway|entities)\.caixin\.com\/(api\/app-api\/cxAdInfo\/selectIndexAdInfo|api\/app-api\/search\/getkeyword|api\/public\/recommendNews|api\/public\/push\/appIndex|api\/app-api\/caixinminiapp\/appinfo) url echo-response text/json echo-response https://raw.githubusercontent.com/ddgksf2013/Scripts/master/response.json
^https?:\/\/mappsv5\.caixin\.com\/channelv5\/list_ url script-response-body https://gist.githubusercontent.com/ddgksf2013/c9263b025fc1dc20fccfca660da9a35d/raw/caixin.seluse.js

[mitm]

hostname=gateway.caixin.com, gg.caixin.com, mappsv5.caixin.com, mapp*.caixin.com


***********************************/







var modifiedHeaders=$request.headers,url=$request.url;if(-1!=$request.url.indexOf("getUserPowerCard"))$done({body:JSON.stringify({msg:"success",code:0,data:[{authDescriptionColor:"#000000",openAuth:1,authCode:"MINI",backgroundImg:"https://file.caixin.com/appfile/img/vip/card_mini.png",isEnterpriseAuth:0,defaultTag:0,openAuthImg:"https://file.caixin.com/appfile/img/vip/ture.png",bgBackgroundImg:"https://file.caixin.com/appfile/img/vip/bgimg_mini.png",authDescription:"当前高于该等级",authImg:"https://file.caixin.com/appfile/img/vip/name_mini.png"},{authDescriptionColor:"#000000",openAuth:1,authCode:"QZSF",backgroundImg:"https://file.caixin.com/appfile/img/vip/card_qzsf.png",isEnterpriseAuth:0,defaultTag:1,openAuthImg:"https://file.caixin.com/appfile/img/vip/ture.png",bgBackgroundImg:"https://file.caixin.com/appfile/img/vip/bgimg_qzsf.png",authDescription:"财新脚本已免费使用！",authImg:"https://file.caixin.com/appfile/img/vip/name_qzsf.png"},{authDescriptionColor:"#000000",openAuth:0,authCode:"PRO_LITE",backgroundImg:"https://file.caixin.com/appfile/img/vip/card_pro_lite.png",isEnterpriseAuth:0,defaultTag:0,openAuthImg:"https://file.caixin.com/appfile/img/vip/false.png",bgBackgroundImg:"https://file.caixin.com/appfile/img/vip/bgimg_pro_lite.png",buttonList:[{buttonBackgroundColor:"#181818",buttonText:"开通会员",buttonToAuthType:"showDataPlusRights",buttonTextColor:"#FFFFFF"}],authDescription:"您当前未开通数据通Lite会员",authImg:"https://file.caixin.com/appfile/img/vip/name_pro_lite.png"},{authDescriptionColor:"#FFFFFF",openAuth:0,authCode:"PRO",backgroundImg:"https://file.caixin.com/appfile/img/vip/card_pro.png",isEnterpriseAuth:0,defaultTag:0,openAuthImg:"https://file.caixin.com/appfile/img/vip/false_pro.png",bgBackgroundImg:"https://file.caixin.com/appfile/img/vip/bgimg_pro.png",buttonList:[{buttonBackgroundColor:"#FFFFFF",buttonText:"开通会员",buttonToAuthType:"showDataPlusRights",buttonTextColor:"#181818"}],authDescription:"您当前未开通数据通Pro会员",authImg:"https://file.caixin.com/appfile/img/vip/name_pro.png"}]})});else if(-1!=$request.url.indexOf("validate?"))url=url.replace(/uid=\d+/g,"uid=12983287").replace(/code=\w+/g,"code=C4CE1DC9446504809B719B97D4DAA5FF").replace(/device=\w+/g,"device=4877567e479337d1c4b5d7e327883b3677c2b16e").replace(/deviceType=\d+/g,"deviceType=1").replace(/&_t=\d+/g,""),delete modifiedHeaders["User-Agent"],delete modifiedHeaders["Accept-Language"],delete modifiedHeaders.Connection,delete modifiedHeaders.Accept,delete modifiedHeaders["Accept-Encoding"],delete modifiedHeaders.Referer,delete modifiedHeaders.Cookie,$done({url:url,headers:modifiedHeaders});else if(-1!=$request.url.indexOf("index_page_v5")){var e=JSON.parse($response.body);for(delete e.data.ios_ad_513,delete e.data.android_ad_513,i=0;i<e.data.list.length;i++)e.data.list[i].ui_type="2";e.data.list=e.data.list.filter(e=>!(e.channel_name&&e.channel_name.includes("数据通"))),e.data.list.sort((e,t)=>e.time<t.time?1:-1),$done({body:JSON.stringify(e)})}else if(-1!=$request.url.indexOf("channelv5/list")){var e=JSON.parse($response.body);delete e.data.ios_ad_513,delete e.data.android_ad_513,$done({body:JSON.stringify(e)})}else $done();