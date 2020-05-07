import React from 'react'

export let uniqueId = (function () {
    let c = 0,
    st = new Date();
    return function (prefix) {
        var t = new Date() - st,
        r = Math.floor(Math.random() * 1000),
        str;
        prefix = String(prefix) || '';
        str = '-' + c + '-' + t + '-' + r;
        c += 1;
        return prefix + str;
    }
}());
