const url = $request.url;
const apiUrl = "https://vpn3.lovebabyforever.workers.dev/?videoId=300000";
const isQX = typeof $task !== "undefined";
//其他路径 自己改接口
if (url.includes('auth_key=')) {
    if (isQX) {
        $task.fetch({ url: apiUrl }).then(
            response => {
                let newAuthKey = response.body.replace(/"/g, '');
                let modifiedUrl = url.replace(/auth_key=[^&]+/, 'auth_key=' + newAuthKey);
                $done({ url: modifiedUrl });
            },
            error => {
                $done({}); 
            }
        );
    } else {
        $httpClient.get(apiUrl, (error, response, data) => {
            if (error) {
                $done({}); 
            } else {
                let newAuthKey = data.replace(/"/g, '');
                let modifiedUrl = url.replace(/auth_key=[^&]+/, 'auth_key=' + newAuthKey);
                $done({ url: modifiedUrl });
            }
        });
    }
} else {
    $done({});
}