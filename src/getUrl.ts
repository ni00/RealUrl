//const huya = require('./website/huya');
const douyu = require('./website/douyu');

export function getStreamUrl(url:string){
    const result:any = douyu.main(url);

    result.then(function(value:any) {
        console.log('the stream url is:');
        console.log(value);
      }, function(error:any) {
        console.log(error);
      });

}