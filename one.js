// 定义匹配规则
const urlPattern = /^https?:\/\/akmaivideo\.cdchuangao\.com.*\.m3u8/;

// 监听请求
$done({
    response: {
        body: ""
    }
});

// 检查请求的URL是否匹配
if (urlPattern.test($request.url)) {
    // 弹出对话框
    $notification.post("匹配到m3u8链接", "点击打开链接", $request.url, {
        "url": $request.url
    });
}
