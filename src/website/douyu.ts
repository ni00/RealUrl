const axios = require("axios");

export function main(url: string) {
    return new Promise(function (resolve, reject) {
        //默认房间id都是数字
       const rid:any = url.match(/[0-9]+/g);
       if(!url){
            reject('the url is error!');
       }

       axios.get(`https://www.douyu.com/${rid}`)
       .then(function (response: any) {
        const html:string = response.data;
        const reg:RegExp = RegExp(`live\\/(${rid}[\\d\\w]*?)_`,'g');
        const strs:any = html.match(reg);
        if(strs&&strs.length>=1){
            const real_url = "http://tx2play1.douyucdn.cn/live/" + strs[0] + ".flv?uuid=";
            resolve(real_url);
        }else{
            //这种获取方式并不适合所有斗鱼直播房间
            reject("DOUYU=>No match results:Maybe the roomid is error,or this room is not open!");
        }
        
    })
    .catch(function (error: any) {
        reject(error);
    });


      
    });
}

