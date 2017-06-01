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


var console = {
	/**
	 * Logs a plain message to the console.
	 *
	 *     _log() must be implemented in a JavaScript interface in the launcher.
	 *
	 * @param string text
	 */
	log: function(text) {
		_log(text);
	},

	/**
	 * Logs a yellow coloured message to the console.
	 *
	 *     _log() must be implemented in a JavaScript interface in the launcher.
	 *
	 * @param string text
	 */
	warn: function(text) {
		_log(text);
	},

	/**
	 * Logs a red coloured message to the console.
	 *
	 *     _log() must be implemented in a JavaScript interface in the launcher.
	 *
	 * @param string text
	 */
	error: function(text) {
		_log(text);
	}
};