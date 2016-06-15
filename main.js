//Load the request module
var request = require('request');

var postData = {   
    wlLogin:  "society",
    wlPass:   "123456",
    language: "en",
    version:  "1.9",
    walletIp: "1.1.1.1",
    walletUa: "ua",
    wallet:   "testSDD",
    email:    ""
};

var method = "GetWalletDetails";

//Configure and request
request({
    url: 'https://ws.lemonway.fr/mb/dat/dev/directkitjson/service.asmx/' + method,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    json: postData
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        if (!body.d.E) {
          console.log(body.d.WALLET);
        } else {
          console.log(body.d.E)
        }
    }
});