'use strict';

var http       = require('http');

function Child(serverConfig) {

    if (!(this instanceof Child)) {
        return new Child(config);
    }

    this.config = serverConfig;
}

//create HTTP server
Child.prototype.createHTTPServer = function(callback) {
    var server = http.createServer(callback)
                    .listen(this.config.port, this.config.host);
    console.log('Server running at http://'+this.config.host+':'+this.config.port+'/');
};

module.exports = Child;