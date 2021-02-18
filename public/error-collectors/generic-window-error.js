window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log(msg);
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1) {
        console.log('%c Captured log start', 'background: green; color: white; display: block;');
        window.console.log('Script Error: See Browser Console for Detail');
        console.log('%c Captured log end', 'background: green; color: white; display: block;');
    } else {
        var message = [
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join(' - ');
        console.log('%c Captured log start', 'background: green; color: white; display: block;');
        window.console.log(message);
        console.log('%c Captured log end', 'background: green; color: white; display: block;');
    }
    return false;
};

console.log('%c Generic logging enabled', 'background: green; color: white; display: block;');