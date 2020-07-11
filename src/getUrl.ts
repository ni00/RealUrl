//const huya = require('./website/huya');
//const douyu = require('./website/douyu');
//const kugou = require('./website/kugou');
//const douyin = require('./website/douyin');
const bilibili = require('./website/bilibili')

export function getStreamUrl(url:string){
    const result:any = bilibili.main(url);

    result.then(function(value:any) {
        console.log('the stream url is:');
        console.log(value);
      }, function(error:any) {
          console.log('ERROR:');
        console.log(error);
      });

}