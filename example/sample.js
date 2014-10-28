/**
 * Created by Rana on 2014-09-21.
 */
var http    = require("http");
var clustered_node = require("./../lib");
var config = require("./config");

var server = http.createServer(function(req, res){
    res.end("Hello World");
});

function runServer() {
    return http.createServer(function(req, res){
        res.end("Hello World");
    });
};

//clustered_node.listen(config, server);
clustered_node.run(config, runServer);