var request = require("request")


exports.search = function(query, callback) {

	request("http://domai.nr/api/json/search?q=" + query, function(err, response, body) {
		if (callback) {
			callback( JSON.parse(body) )
		} else {
			return JSON.parse(body);
		}
	})

}

exports.info = function(query, callback) {
	
	request("http://domai.nr/api/json/info?q=" + query, function(err, response, body) {

		// console.log( JSON.stringify(response) )

		if (response.statusCode === 200) {
			if (callback) {
				callback( JSON.parse(body) )
			} else {
				return JSON.parse(body);
			}
		} else if (response.statusCode === 500) {
			throw new Error("Sorry, there was an error. Make sure " + query + " is a valid domain to look up. If it's not, and this keeps happening, post on github issues: https://github.com/connormontgomery/Domainr-Node/issues. There are some notes below you should post:\n" + JSON.stringify(response) )
		}
	})

}