//const huya = require('./website/huya');
//const douyu = require('./website/douyu');
const kugou = require('./website/kugou');

export function getStreamUrl(url:string){
    const result:any = kugou.main(url);

    result.then(function(value:any) {
        console.log('the stream url is:');
        console.log(value);
      }, function(error:any) {
        console.log(error);
      });

}