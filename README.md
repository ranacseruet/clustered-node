clustered-node
==============

A Simple library to make your traditional single threaded nodejs server into a multi-process based server, 
so that you can make better utilization of your server cpu.

This project is inspired by [multi-node](https://github.com/kriszyp/multi-node) project, which isn't anymore compatible with latest nodejs version.

Also a large portion of this project implementation idea is taken from [hopache](https://github.com/hipache/hipache)
project's multi-process architecture.

## Install
```
npm install clustered-node
```

## Usage

```
var http    = require("http");
var clustered_node = require("clustered-node");

var server = http.createServer(function(req, res){
     res.end("Hello World");
});

clustered_node.listen({port:1337, workers:3}, server);
```
