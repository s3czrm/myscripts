/*******************
[rewrite_local]
https:\/\/tm6dhs0i\.fortuneculture\.com/*
[mitm]
hostname = tm6dhs0i.fortuneculture.com
*******************/
var egol = $request.headers;
// 检测指定链接是否被点击，并弹出窗口
document.addEventListener('DOMContentLoaded', (event) => {
    // 检查页面上的所有链接
    const links = document.links;
    for (let i = 0; i < links.length; i++) {
        // 监听点击事件
        links[i].addEventListener('click', (e) => {
            let href = links[i].href;
            // 判断链接是否是特定的链接
            if (egol.host == 'tm6dhs0i.fortuneculture.comj') {
                // 阻止默认行为
                $.msg("视频链接捕获成功", "点击此通知在线观看", "视频还没开始播放之前会通知1-4次", url);
            }
        });
    }
});

$.done({});
