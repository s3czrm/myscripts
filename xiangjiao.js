
var egol = $requests.headers.host
// 检测指定链接是否被点击，并弹出窗口
document.addEventListener('DOMContentLoaded', (event) => {
    // 检查页面上的所有链接
    const links = document.links;
    for (let i = 0; i < links.length; i++) {
        // 监听点击事件
        links[i].addEventListener('click', (e) => {
            let href = links[i].href;
            // 判断链接是否是特定的链接
            if (href === 'https://tm6dhs0i.fortuneculture.com/20240118/RaLckwDf/index.m3u8') {
                // 阻止默认行为
                e.preventDefault();
                // 弹出窗口
                alert('链接已被点击: ' + href);
                // 这里可以添加其他的逻辑处理，比如记录日志等
            }
        });
    }
});
