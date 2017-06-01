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
 *
 * The first and only file loaded by the launcher itself.
 */

var global = this;

(function() {
	/**
	 * Called from the launcher itself.
	 *
	 *    _load() must be implemented in a JavaScript interface in the launcher.
	 *    _eval() must be implemented in a JavaScript interface in the launcher.
	 *
	 * @param scriptManager
	 * @param logger
	 * @param directory
	 */
	__init = function(scriptManager, logger, directory) {
		global.__dirname = directory;

		var requireSetup = _load(__dirname + '/core/require.js');

		global.require = requireSetup(
			function(code) {
				return _eval(code);
			}
		);
	}
})();