'use strict';

var http       = require('http');

function Child(serverConfig, server) {

    if (!(this instanceof Child)) {
        return new Child(config, server);
    }

    this.config = serverConfig;

    if(!this.config.hasOwnProperty("port")) {
        return new Error("Port number required");
    }

    if(!this.config.hasOwnProperty("host")) {
        this.config.host = "127.0.0.1";
    }

    server.listen(this.config.port, this.config.host);
}

module.exports = Child;