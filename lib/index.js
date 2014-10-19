var cluster    = require('cluster');
var Parent     = require('./clustered-node/parent');
var Child     = require('./clustered-node/child');

exports.start = function(config, callback) {
    if (cluster.isMaster) {
        var master = new Parent(config);
        master.run();
    }
    else {
        var worker = new Child(config);
        worker.createHTTPServer(callback);
    }
};