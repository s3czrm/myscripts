// 脚本名称: M3U8 弹窗跳转
// 描述: 当匹配到指定 M3U8 链接时，弹出提示框，点击后跳转到该链接
// 作者: YourName
// 版本: 1.0

const url = $request.url;

if (/^https?:\/\/akmaivideo\.cdchuangao\.com.*\.m3u8/.test(url)) {
    $notification.post("M3U8 链接匹配", "点击跳转到 M3U8 链接", url);
    $done({
        response: {
            status: 200,
            body: `<script>alert("点击确定跳转到 M3U8 链接"); window.location.href = "${url}";</script>`
        }
    });
} else {
    $done({});
}
