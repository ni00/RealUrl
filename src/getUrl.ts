const huya = require("./website/huya");
const douyu = require("./website/douyu");
const kugou = require("./website/kugou");
const douyin = require("./website/douyin");
const bilibili = require("./website/bilibili");

const regs: any = [
    [/www\.huya\.com/g, huya],
    [/www\.douyu\.com/g, douyu],
    [/fanxing\.kugou\.com/g, kugou],
    [/v\.douyin\.com/g, douyin],
    [/live\.bilibili\.com/g, bilibili],
];

export function getStreamUrl(url: string) {
    let website: any = null;
    regs.forEach((item: any) => {
        if (item[0].test(url)) {
            website = item[1];
        }
    });

    if (website) {
        const result: any = website.main(url);

        result.then(
            function (value: any) {
                console.log("the stream link is:");
                console.log(value);
            },
            function (error: any) {
                console.log("ERROR:");
                console.log(error);
            }
        );
    } else {
        console.log(`This link is not supported`);
    }
}
