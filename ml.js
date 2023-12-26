/*
[riwrute_local]
https:\/\/api\.mlinkapp\.cc\/v1\/user url script-response-body https://raw.githubusercontent.com/s3czrm/myscripts/main/ml.js
[mitm] 
hostname=*.mlinkapp.cc

***********************************/
var body = $response.body; 
var obj = JSON.parse(body); 
// 修改数据字段
obj.data.level = "3";
obj.data.agentNum = 1000;
// 重写响应体
$done({ body: JSON.stringify(obj) });