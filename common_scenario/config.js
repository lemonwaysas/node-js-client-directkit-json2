const urlDirectkit = "https://sandbox-api.lemonway.fr/mb/dat/dev/directkitjson/Service.asmx/"

// Load the request module
const request = require('request');
exports.Promise = require('promise');

exports.wlLogin 	= "society";
exports.wlPass 		= "123456";
exports.language 	= "en";
exports.walletIp 	= "1.1.1.1";
exports.walletUa 	= "Node.js Tutorial";

exports.sendRequest = function(methodName, postData) {
	// Configure
	var options = {
		url: urlDirectkit + methodName,
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8"
		},
		json: postData
	};

	// Use promise to avoid callback hell
	var promise = new Promise(function (resolve, reject) {
		// Request
		request(options, function (error, response, body) {
		  if(error) {
		    // Handle request error
		    console.log(error);
		  } else if (response.statusCode != 200) {
		    // Handle HTTP error
		    console.log("Error " + response.statusCode + ": " + body.Message);
		  } else {
		    if (body.d.E) {
		      // Handle API error
		      console.log(body.d.E);
		    } else {
		      resolve(body.d);
		    }
		  }
		});
	});

	return promise;
}
