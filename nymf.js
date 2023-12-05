/*
* nymf解锁会员图片视频
[riwrute_local]
^https:\/\/nymfapp.com\/api.* url script-response-body https://raw.githubusercontent.com/hanshaoUi/QX/main/pojie/nyfm.js
[mitm]
hostname = nymfapp.com
**********************

*/


let Premium = $response.body;
var modified = JSON.parse(Premium);

function recursiveReplace(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      recursiveReplace(obj[key]); // 递归处理对象或数组
    } else if (key === 'pro' && obj[key] === true) {
      obj[key] = false; // 替换匹配到的值
    }
  }
}

recursiveReplace(modified);

$done({ body: JSON.stringify(modified) });