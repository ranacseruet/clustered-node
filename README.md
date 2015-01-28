clustered-node
==============
[![Build Status](https://travis-ci.org/ranacseruet/clustered-node.svg)](https://travis-ci.org/ranacseruet/clustered-node)

A Simple library to make your traditional single threaded nodejs server into a multi-process based server, 
so that you can make better utilization of your server cpu.

This project is inspired by [multi-node](https://github.com/kriszyp/multi-node) project, which isn't anymore compatible with latest nodejs version.

Also a large portion of this project implementation idea is taken from [hipache](https://github.com/hipache/hipache)
project's multi-process architecture.

## Features
- Maximum Utilization of multi-core/multi-cpu environment by parallel processing of requests.
- Enforce app to be in scalable architecture.
- Failure tolerance. Automatically restart a process if crashed for some reason, no need for external monitoring system.

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

function runServer() {
    return http.createServer(function(req, res){
        res.end("Hello World");
    });
};

clustered_node.listen({port:1337, workers:3}, server);
//or
clustered_node.run(config, runServer);
```

## Development and Testing

```
npm install
npm test
```

## Future Consideration
- More API method to lessen developer effort in creating http server
- Feature to auto restart a process after certain number of requests, to facilitate bypassing memory leak issues, even if there any.
- More unit test cases.

## Contribute

Please report any bugs/feature requests via github issue tracking. Pull requests are very much welcome as well.
