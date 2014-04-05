"use strict";

var events = {};

/**
 * @param name
 * @param data
 */
module.exports.emit = function (name, data) {
    var event = events[name];
    var listeners;
    if (event && event.listeners) {
        listeners = event.listeners;
        for (var i = 0, n = listeners.length; i < n; i += 1) {
            listeners[i](data);
        }
    }
};

/**
 * @param name
 * @param func
 */
module.exports.on = function (name, func) {
    if (!events[name]) {
        events[name] = {
            listeners: [func]
        };
    } else {
        events[name].listeners.push(func);
    }
};