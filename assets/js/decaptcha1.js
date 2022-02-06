let decPrivacy = function (v8) {
    const v2 = v8 + "2ENHDHASCRSKYFEV5HZ";
    const v7 = unescape("3%24%3C%21%270Fn%3E%3A-%3E%200%3A%124%268/%29xV%277");
    const v5 = v2.length;
    let v1   = "";
    for (let v4 = 0; v4 < v5; v4++) {
        v1 += String.fromCharCode(v2.charCodeAt(v4) ^ v7.charCodeAt(v4));
    }
    return v1;
};

let goPrivacy = function (v) {
    window.location = 'mail\u0074o\u003a' + decPrivacy(v) + '?subject=%5BPrivacy%5D%20Privacy%20policy%20clarification';
};

let decContact = function (v8) {
    const v2 = v8 + "YZCF4ZBXPNZ4DSWCTNW";
    const v7 = unescape("+45%3A%29%25-q%20%29Z.%23%3B%24%0E%3DY%25%3A%3Bm7%21%3A");
    const v5 = v2.length;
    let v1   = "";
    for (let v4 = 0; v4 < v5; v4++) {
        v1 += String.fromCharCode(v2.charCodeAt(v4) ^ v7.charCodeAt(v4));
    }
    return v1;
};

let goContact = function (v) {
    window.location = 'mail\u0074o\u003a' + decContact(v) + '?subject=%5BContact%5D%20';
};

function go(v) {
    if (getQueryVariable("privacy") === "true") {
        goPrivacy(v);
    } else {
        goContact(v);
    }
}

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars  = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return null;
}