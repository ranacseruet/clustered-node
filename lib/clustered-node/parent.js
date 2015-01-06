'use strict';

var cluster = require('cluster'),
    events = require('events');

function Parent(config) {
    if (!(this instanceof Parent)) {
        return new Parent(config);
    }

    if(!config || !config.workers || config.workers <=0){
        return new Error("number of workers must be given and need to be positive integer");
    }

    this.config = config;
}

Parent.prototype = new events.EventEmitter();

Parent.prototype.run = function () {
    this.spawnWorkers(this.config.workers);
};

//Create child processes 
Parent.prototype.spawnWorkers = function (number) {
    var spawnWorker = function () {
        var worker = cluster.fork();
        worker.on('message', function (message) {
            // Gather the logs from the workers
            if (message.type === 1) {
                // normal log
                console.log('(worker #' + message.from + ') ' + message.data);
            }
        }.bind(this));
    }.bind(this);

    // Spawn all workers
    for (var n = 0; n < number; n += 1) {
        console.log('Spawning worker #' + n);
        spawnWorker();
    }

    // When one worker is dead, let's respawn one
    cluster.on('exit', function (worker, code, signal) {
        var m = 'Child died (pid: ' + worker.process.pid + ', suicide: ' +
            (worker.suicide === undefined ? 'false' : worker.suicide.toString());
        if (worker.suicide === false) {
            if (code !== null) {
                m += ', exitcode: ' + code;
            }
            if (signal !== null) {
                m += ', signal: ' + signal;
            }
        }
        m += '). Spawning a new one.';
        //console.log(m);
        spawnWorker();
    });

    // Set an exit handler
    var onExit = function () {
        this.emit('exit');
        //console.log('Exiting, killing the workers');
        for (var id in cluster.workers) {
            var worker = cluster.workers[id];
            console.log('Killing worker #' + worker.process.pid);
            worker.destroy();
        }
        process.exit(0);
    }.bind(this);
    process.on('SIGINT', onExit);
    process.on('SIGTERM', onExit);
};

module.exports = Parent;