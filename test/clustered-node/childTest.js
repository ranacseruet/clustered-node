/**
 * Created by Rana on 15-01-04.
 */
var expect   = require("chai").expect;
var http     = require("http");

var Child = require("../../lib/clustered-node/child");

describe("child", function(){
    describe("construct", function() {
        it("create child fail", function () {
            var worker = new Child();
            expect(worker).instanceOf(Error);
        });
        it("create child success", function(){
            var server = http.createServer();
            var worker = new Child({port:1234}, server);
            expect(worker).instanceOf(Child);
        });
    });
});