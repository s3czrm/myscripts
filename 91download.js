/*
91下载

[rewrite_local]

https:\/\/\S+\.m3u8\?token=* url script-request-header https://raw.githubusercontent.com/s3czrm/myscripts/main/m3u8.js

[mitm]
hostname = *
*/