
/*
[rewrite_local]
https:\/\/[^\/]+\.cloudfront\.net\/api\/m3u8\/decode\/authPath url script-response-header https://raw.githubusercontent.com/s3czrm/myscripts/main/UU.js

[mitm]
hostname = *.cloudfront.net
*/

// 目标 URL 匹配规则
const TARGET_URL_REGEX = /^https:\/\/d11rd8m1pg017m\.cloudfront\.net\/api\/m3u8\/decode\/authPath/;

// 获取 ak 的 API
const AK_API = "https://vpn5.lovebabyforever.workers.dev/";

// 主函数
(async () => {
    // 如果不是目标 URL，直接放行
    if (!TARGET_URL_REGEX.test($request.url)) {
        console.log("未匹配目标 URL，直接放行");
        $done($request);
        return;
    }

    // 尝试从缓存读取 ak
    let ak = $persistentStore.read("ak_value");
    console.log(`当前存储的 ak: ${ak || "无"}`);

    // 如果 ak 不存在，先获取
    if (!ak) {
        console.log("未找到 ak，开始获取...");
        ak = await fetchAK();
        
        // 如果获取失败，直接放行
        if (!ak) {
            console.log("获取 ak 失败，返回原请求");
            $done($request);
            return;
        }
        
        // 存储 ak
        $persistentStore.write(ak, "ak_value");
        console.log(`已存储新 ak: ${ak}`);
    }

    // 替换 auth_key
    const newUrl = $request.url.replace(/auth_key=[^&]+/, `auth_key=${ak}`);
    console.log(`原始 URL: ${$request.url}`);
    console.log(`修改后 URL: ${newUrl}`);

    // 返回修改后的请求
    $done({ url: newUrl });
})();

// 获取 ak 的函数
function fetchAK() {
    return new Promise((resolve) => {
        $httpClient.get(AK_API, (error, response, data) => {
            if (error || !data) {
                console.log(`获取 ak 失败: ${error || "无返回数据"}`);
                resolve(null);
            } else {
                const ak = data.trim();
                console.log(`成功获取 ak: ${ak}`);
                resolve(ak);
            }
        });
    });
}
