tinees = require('./end');
fetch = require('node-fetch');

class LewdClient {
	constructor(options = {}) {
		if(!options.KEY) throw new Error("No key found for Lewds API");
		this.KEY = options.KEY;
	};
    /**
     * @param {String} img endpoint to search
     * @returns {String} url of image
     */

    async nsfw(img) {
        return fetch(`${tinees.base}${img}`, {
              method: 'GET',
              headers: { "Authorization": this.KEY }
	})
        .then(res => res.json())
        .then(json =>  {
            if(json == undefined) throw Error(`[LEWDS]: ${img} is not a valid endpoint!`)
            return json.result
        })
    };
    
    async chat(msg, userID) {
	const body = { msg: msg, uid: userID };
    const fetch = require("node-fetch");

    return fetch('https://lewds.fun/api/v1/fun/chat', {
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { "authorization": this.KEY, 'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(json =>{
            if(json == undefined) throw Error(`[LEWDS]: ${"chat"} is not a valid endpoint!`)
            return json.response
        })
    }
}
module.exports = LewdClient
