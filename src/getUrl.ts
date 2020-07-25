const regs: any = [
    [/www\.huya\.com/g, require("./website/huya")],
    [/www\.douyu\.com/g, require("./website/douyu")],
    [/fanxing\.kugou\.com/g, require("./website/kugou")],
    [/v\.douyin\.com/g, require("./website/douyin")],
    [/live\.bilibili\.com/g, require("./website/bilibili")],
    [/live\.ixigua\.com/g,require("./website/ixigua")],
    [/now\.qq\.com/g,require("./website/now")],
    [/www\.zhanqi\.tv/g,require("./website/zhanqi")],
    [/www\.yy\.com/g,require("./website/yy")],
    [/cc\.163\.com/g,require("./website/cc")],
    [/egame\.qq\.com/g,require("./website/egame")],
    [/www\.huajiao\.com/g,require("./website/huajiao")],
    [/live\.kuaishou\.com/g,require("./website/kuaishou")]
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
