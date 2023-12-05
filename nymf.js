/*
* nymf解锁会员图片视频
[riwrute_local]
^https:\/\/nymfapp.com\/api.* url script-response-body https://raw.githubusercontent.com/s3czrm/myscripts/main/nymf.js
[mitm]
hostname = nymfapp.com
**********************

*/

let string = $response.body;
string = string.replace(/"pro":true/g, '"pro":false');
$done({body: string});

