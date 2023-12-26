/*
[riwrute_local]
https:\/\/foxapi\.zduhxck\.com\/vpn\/user_info url script-response-body https://raw.githubusercontent.com/s3czrm/myscripts/main/yinhu.js
[mitm] 
hostname=foxapi.zduhxck.com

***********************************/
var body = $response.body; 
var obj = JSON.parse(body); 
// 修改数据字段
obj.data.vip_type = "3";
obj.data.type = "3";
obj.data.pay_switch = "3";

// 重写响应体
$done({ body: JSON.stringify(obj) });