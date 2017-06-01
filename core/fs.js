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
(function() {
	/**
	 * Reads a file from the system.
	 *
	 *    _readFile() must be implemented in a JavaScript interface in the launcher. 
	 *
	 * @param string   file
	 * @param string   encoding
	 * @param function callback
	 */
	readFile = function(file, encoding, callback) {
		try {
			var text = _readFile(file, encoding);
			if(callback) callback(null, text);
		} catch (e) {
			if(callback) callback(e, null);
		}
	},

	/**
	 * Deletes a file from the system.
	 *
	 *    _unlink() must be implemented in a JavaScript interface in the launcher.
	 *
	 * @param string   file
	 * @param function callback
	 */
	unlink = function(file, callback) {
		try {
			_unlink(file);
		} catch (e) {
			if(callback) callback(e);
		}
	},

	/**
	 * Checks if a file is present on the system.
	 *
	 *    _exists() must be implemented in a JavaScript interface in the launcher.
	 *
	 * @param string   file
	 */
	exists = function(file) {
		return _exists(file);
	}
})(); 