const axios = require("axios");

const err: string = "TWITCH=>No match results:Maybe the roomid is error,or this room is not open!";

export function main(url: string) {
    return new Promise(function (resolve, reject) {
        const rid: any = url.match(/(?<=(\.tv\/))(.+)/g);
        if (!rid) {
            reject(err);
        }

        const link = `https://service-ovya0w1a-1257334448.hk.apigw.tencentcs.com/release/twitch?rid=${rid[0]}`;

        axios
            .get(link)
            .then(function (response: any) {
                const m3u8_url: string = response.data;
                if (String(m3u8_url).indexOf("error") > -1) {
                    reject(err);
                } else {
                    resolve(m3u8_url);
                }
            })
            .catch(function (error:any) {
                reject(error);
            });
    });
}
