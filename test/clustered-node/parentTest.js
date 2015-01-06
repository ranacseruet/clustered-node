/**
 * Created by Rana on 15-01-04.
 */
var expect   = require("chai").expect;
var http     = require("http");

var Parent = require("../../lib/clustered-node/parent");

describe("parent", function(){
    describe("construct", function() {
        it("create parent fail", function () {
            var master = new Parent();
            expect(master).instanceOf(Error);
        });
        it("create parent success", function(){
            var worker = new Parent({workers:1});
            expect(worker).instanceOf(Parent);
        });
    });
});