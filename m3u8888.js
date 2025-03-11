const $ = new Env("GOGOGOGO");
let url = $request.url;
// yuheng基础上更改保留auth_key

// X-Playback-Session-Id头部

    try {
        const notify = $.getdata("mp4");
        //console.log("Saved notify:", notify);
        if (!notify || notify != url) {
            $.setdata(url, "m3u8");
            $.msg("视频链接捕获成功", "点击此通知在线观看", "视频还没开始播放之前会通知1-4次", url);
        }
    } catch (e) {
        console.error("An error occurred:", e);
    }


$.done({});


