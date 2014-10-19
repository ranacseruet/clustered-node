var cluster    = require('cluster');
var Parent     = require('./clustered-node/parent');
var Child     = require('./clustered-node/child');

var nodes = [];

exports.listen = function(config, server) {
    if (cluster.isMaster) {
        var master = new Parent(config);
        master.run();
    }
    else {
        nodes.push(new Child(config, server));
    }
    return nodes;
};