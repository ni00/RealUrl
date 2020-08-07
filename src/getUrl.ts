const regs: any = [
    [/www\.huya\.com/, require("./website/huya")],
    [/www\.douyu\.com/, require("./website/douyu")],
    [/fanxing\.kugou\.com/, require("./website/kugou")],
    [/v\.douyin\.com/, require("./website/douyin")],
    [/live\.bilibili\.com/, require("./website/bilibili")],
    [/live\.ixigua\.com/,require("./website/ixigua")],
    [/now\.qq\.com/,require("./website/now")],
    [/www\.zhanqi\.tv/,require("./website/zhanqi")],
    [/www\.yy\.com/,require("./website/yy")],
    [/cc\.163\.com/,require("./website/cc")],
    [/egame\.qq\.com/,require("./website/egame")],
    [/www\.huajiao\.com/,require("./website/huajiao")],
    [/live\.kuaishou\.com/,require("./website/kuaishou")],
    [/www\.twitch\.tv/,require("./website/twitch")]
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
