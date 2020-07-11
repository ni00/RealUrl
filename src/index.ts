const readline = require("readline-sync");
const getUrl = require("./getUrl");

let url: string = readline.question("input your live room link:");
console.log(`your link is:${url}`);

getUrl.getStreamUrl(url);
