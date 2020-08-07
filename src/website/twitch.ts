const axios = require("axios");

export function main(url: string) {
    return new Promise(function (resolve, reject) {
        const rid: any = url.match(/(?<=(\.tv\/))(.+)/g);
        if (!rid) {
            reject(
                "TWITCH=>No match results:Maybe the roomid is error,or this room is not open!"
            );
        }
        console.log(rid[0]);
        const link = `https://api.twitch.tv/api/channels/${rid[0]}/access_token?oauth_token=g2ggcq6ndbuc6ewsm3iehn9m3tewoh&need_https=true&platform=_&player_type=site&player_backend=mediaplayer`;
        console.log(link);
        const config = {
            method: "get",
            url: link,
            headers: {
                "Client-ID": "15ss9u1dmrhxouwhcbb9g68j2ex2sp",
                Accept: "application/vnd.twitchtv.v5+json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
                    Connection:"keep-alive",
                    "accept-encoding": "gzip, deflate, br",
                    "Content-Type":"application/x-www-form-urlencoded"
            },
        };

        axios(config)
            .then(function (response: any) {
                //console.log(JSON.stringify(response.data));
                resolve(JSON.stringify(response.data))
            })
            .catch(function (error: any) {
                reject(error);
            });
    });
}
