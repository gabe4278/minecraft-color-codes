const replaceAll = require("replaceall");

module.exports = function(text, includeAndChar) {
	var pre = "\u00A7";

	if (includeAndChar) pre = "&";

	text = replaceAll(`${pre}0`, "\x1B[30m", text);
	text = replaceAll(`${pre}1`, "\x1B[34m", text);
	text = replaceAll(`${pre}2`, "\x1B[32m", text);
	text = replaceAll(`${pre}3`, "\x1B[36m", text);
	text = replaceAll(`${pre}4`, "\x1B[31m", text);
	text = replaceAll(`${pre}5`, "\x1B[35m", text);
	text = replaceAll(`${pre}6`, "\x1B[33m", text);
	text = replaceAll(`${pre}7`, "\x1B[37m", text);
	text = replaceAll(`${pre}8`, "\x1B[90m", text);
	text = replaceAll(`${pre}9`, "\x1B[94m", text);
	text = replaceAll(`${pre}a`, "\x1B[92m", text);
	text = replaceAll(`${pre}b`, "\x1B[96m", text);
	text = replaceAll(`${pre}c`, "\x1B[91m", text);
	text = replaceAll(`${pre}d`, "\x1B[95m", text);
	text = replaceAll(`${pre}e`, "\x1B[93m", text);
	text = replaceAll(`${pre}f`, "\x1B[97m", text);
	text = replaceAll(`${pre}l`, "\x1B[1m", text);
	text = replaceAll(`${pre}m`, "\x1B[9m", text);
	text = replaceAll(`${pre}n`, "\x1B[4m", text);
	text = replaceAll(`${pre}o`, "\x1B[3m", text);
	text = replaceAll(`${pre}r`, "\x1B[0m", text);

	return text + "\x1B[0m";
}
