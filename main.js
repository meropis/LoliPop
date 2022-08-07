exports.lp = function() {
    let logString = "";
    if (arguments.length === 1) { 
        arg = arguments[0];
        const type = typeof(arg);
        logString +=  `${arg}: ${type}`;
    } else {
        for (let i = 0; i < arguments.length; i++) {
            if (i < arguments.length - 1) {
                logString += formatArg(arguments[i], false)
            } else {
                logString += formatArg(arguments[i], true)
            };    
        };
    };
    console.log(logString);    
};

function isAString(argument) {
    if (typeof(argument) === 'string') {
        return true;
    } else return false;
};

function formatArg(arg, isEnd) {
    const type = typeof(arg);
    const isString = isAString(arg)
    const isArr = Array.isArray(arg);
    if (!isEnd) {
        if (`${arg}` === '[object Object]') {
            return `${arg}: ${JSON.stringify(arg)}\n`; 
        } else if (isArr) {
            return `array: [${arg}]\n`; 
        } else if (isString) {
            return `"${arg}": ${type}\n`;
        } else if (typeof(arg) === 'undefined') {
            return `${type}\n`;
        };
        return `${arg}: ${type}\n`;
    } else {
        if (`${arg}` === '[object Object]') {
            return `${arg}: ${JSON.stringify(arg)}`; 
        } else if (isArr) {
            return `array: [${arg}]`; 
        } else if (isString) {
            return `"${arg}": ${type}`;
        } else if (typeof(arg) === 'undefined') {
            return `${type}`;
        };
        return `${arg}: ${type}`;
    };
};