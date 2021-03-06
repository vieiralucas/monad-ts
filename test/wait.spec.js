"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wait_1 = require("../src/services/wait");
describe('Function wait: ', function () {
    it('1) should produce value', function (done) {
        wait_1.wait(1, 300).then(function (v) {
            expect(v).toEqual(1);
            done();
        });
    });
    it('2) should produce Error', function (done) {
        wait_1.wait(1, -300).catch(function (v) {
            expect(v instanceof Error).toBeTruthy();
            done();
        });
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved. 
