/**
 *
 *   _____                  _     _____           _       _   
 *  / ____|                | |   / ____|         (_)     | |  
 *  | (___  _ __   __ _ _ __| | _| (___   ___ _ __ _ _ __ | |_ 
 *  \___ \| '_ \ / _` | '__| |/ /\___ \ / __| '__| | '_ \| __|
 *  ____) | |_) | (_| | |  |   < ____) | (__| |  | | |_) | |_ 
 * |_____/| .__/ \__,_|_|  |_|\_\_____/ \___|_|  |_| .__/ \__|
 *        | |                                      | |        
 *        |_|                                      |_|        
 *
 *
 * This file is part of SparkScript by SparkDevs. 
 *
 * You may look at the code, you may change the code. But you MUST give us credit.
 * Please try and keep the API more or less the same so we can have a universal 
 * modding API for Minecraft: Pocket Edition. Happy coding :)
 *
 * Website: https://sparkdevs.net/
 * Twitter: https://twitter.com/SparkDevTeam/
 *
 * LICENSE: LGPL
 */
var global = this;
global.require = function(evaluate) {
	/**
	 * Resolves a JavaScript file.
	 *
	 * @param string id
	 */
	resolve = function(id) {
		var corePath = __dirname + '/core/';
		var apiPath = __dirname + '/api/';

		if(fs.exists(corePath + id)) {
			return corePath + id;
		} else if(fs.exists(corePath + id + ".js")) {
			return corePath + id + ".js";
		} else {
			throw "Canno't resolve module: " + id;
		}
	},

	/**
	 * Internal method for requiring a JavaScript file.
	 * Developers should call require('module') instead.
	 *
	 * @internal
	 *
	 * @param string id
	 */
	_require = function(id) {
		var moduleInfo,
			head = '(function(exports,module,require,__filename,__dirname){';,
			tail = '})',
			code = '',
			line = null;

		var file = resolve(id);

		while((line = fs.readFile(file)) !== null) {
			code += line + "\n";
		}

		code = head + code + tail;

		moduleInfo = {
			loaded: false,
			id: id,
			exports: {}
		};
	}
};
