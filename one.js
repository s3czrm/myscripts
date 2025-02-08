

const url = $request.url;

if (/^https?:\/\/akmaivideo\.cdchuangao\.com.*\.m3u8/.test(url)) {
    // 弹出提示框
    $notification.post("M3U8 链接匹配", "点击确认跳转到 M3U8 链接", url);

    // 构造一个 HTML 页面，包含弹窗和跳转逻辑
    const html = `
        <html>
            <head>
                <title>跳转提示</title>
                <script>
                    if (confirm("检测到 M3U8 链接，点击确认跳转")) {
                        window.location.href = "${url}";
                    }
                </script>
            </head>
            <body>
                <p>正在处理跳转...</p>
            </body>
        </html>
    `;

    // 返回构造的 HTML 页面
    $done({
        response: {
            status: 200,
            headers: {
                "Content-Type": "text/html"
            },
            body: html
        }
    });
} else {
    // 不匹配时直接放行
    $done({});
}