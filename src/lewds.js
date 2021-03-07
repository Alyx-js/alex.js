tinees = require('./end');
fetch = require('node-fetch');

class LewdClient {
	constructor(options = {}) {
		if(!options.KEY) throw new Error("No key found for Lewds.GA");
		this.KEY = options.KEY;
	};
    /**
     * @param {String} img endpoint to search
     * @returns {String} url of image
     */

    async nsfw(img) {
        return fetch(`${tinees.base}${img}?key=${this.KEY}`)
        .then(res => res.json())
        .then(json =>  {
            if(json == undefined) throw Error(`[LEWDS]: ${img} is not a valid endpoint!`)
            return json.result
        })
    }

    async sfw(img) {
        return fetch(`${tinees.baseSafe}${img}?key=${this.KEY}`)
        .then(res => res.json())
        .then(json =>  {
            if(json.url == undefined) throw Error(`[LEWDS]: ${img} is not a valid endpoint!`)
            return json.result
        })
    },
    async fun(img) {
        return fetch(`${tinees.baseFun}${img}?key=${this.KEY}`)
        .then(res => res.json())
        .then(json.result =>  {
            if(json.result == undefined) throw Error(`[LEWDS]: ${img} is not a valid endpoint!`)
            return json.result
        })
    }
}
module.exports = LewdClient
