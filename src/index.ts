const readline = require('readline-sync');
const getUrl = require('./getUrl')

let url:string = readline.question("input your website url:");
console.log(`your url is:${url}`);

getUrl.getStreamUrl(url);
