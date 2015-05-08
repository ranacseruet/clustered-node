'use strict';

var cluster    = require('cluster');
var Parent     = require('./clustered-node/parent');
var Child      = require('./clustered-node/child');

exports.listen = function(config, server) {
    if (cluster.isMaster) {
        var master = new Parent(config);
        master.run();
    }
    else {
        new Child(config, server);
    }
};

exports.run = function(config, callback) {
    if (cluster.isMaster) {
        var master = new Parent(config);
        master.run();
    }
    else {
        callback();
    }
};