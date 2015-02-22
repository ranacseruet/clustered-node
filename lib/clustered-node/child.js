'use strict';

var http       = require('http');

function Child(serverConfig, server) {

    if (!(this instanceof Child)) {
        return new Child(serverConfig, server);
    }

    this.config = serverConfig;

    if(!this.config || !this.config.hasOwnProperty("port")) {
        return new Error("Port number required");
    }

    if(!this.config.hasOwnProperty("host")) {
        this.config.host = "127.0.0.1";
    }

    if(!server || !server.listen) {
        return new Error("server instance must need to be provided");
    }

    server.listen(this.config.port, this.config.host);
}

module.exports = Child;