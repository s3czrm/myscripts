/*************************************

项目名称：乐翻VPN

**************************************

[rewrite_local]
https:\/\/api\.lofunvpn\.com\/api\/v5\/user\/ url script-response-body https://raw.githubusercontent.com/s3czrm/myscripts/main/lefanvpn.js 

[mitm]
hostname = *.lofunvpn.com

*************************************/


var egol = JSON.parse($response.body);
    
    egol = {
  "code" : 200,
  "message" : "获取成功",
  "status" : "success",
  "data" : {
    "flowRemaining" : "200.0GB",
    "inviteBy" : "XCC047HJ",
    "status" : 0,
    "share_qq_count" : 0,
    "channel_qq_duration" : 1,
    "flowUsed" : "0.0KB",
    "channel_weixin_duration" : 0,
    "flowTotal" : "200.0GB",
    "channel" : "GW",
    "timeRemaining" : 12959,
    "subUrl" : "",
    "paidUser" : false,
    "id" : 835703,
    "inviteCode" : "XCC077RR",
    "share_weixin_count" : 0,
    "email" : "",
    "isTrial" : true,
    "share_count" : 0,
    "channel_weixin_count" : 0,
    "inviteUrl" : "https://www.lofun.lat/app.html?channel=GW&channel_code=&invite_code=XCC077RR",
    "totalTransfer" : 214748364800,
    "expiredDate" : "2999-09-09",
    "vip" : "1",
    "channel_qq_count" : 1,
    "cardActive" : true,
    "username" : "User_8638452083162834789"
  }
};


$done({body : JSON.stringify(egol)});