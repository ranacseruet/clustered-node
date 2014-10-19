/**
 * Created by Rana on 2014-09-21.
 */

var clustered_node = require("./../lib");
var config = require("./config");

clustered_node.start(config, function(req, res){
    res.end("Hello World");
});
