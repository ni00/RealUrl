const axios = require("axios");
const urlencode = require("urlencode");

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
                Accept: "application/vnd.twitchtv.v5+json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
                Connection: "keep-alive",
                "accept-encoding": "gzip, deflate, br",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        axios(config)
            .then(function (response: any) {
                const jsons: any = response.data;
                let token: string = jsons.token;
                const sig: string = jsons.sig;
                const m3u8_url = `https://usher.ttvnw.net/api/channel/hls/${
                    rid[0]
                }.m3u8?allow_source=true&fast_bread=true&player_backend=mediaplayer&playlist_include_framerate=true&reassignments_supported=true&sig=${sig}&supported_codecs=vp09%2Cavc1&token=${urlencode(
                    token
                )}&cdm=wv&player_version=1.0.1`;

                resolve(m3u8_url);
            })
            .catch(function (error: any) {
                reject(error);
            });
    });
}
