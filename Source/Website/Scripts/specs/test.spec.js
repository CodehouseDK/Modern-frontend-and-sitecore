﻿
describe('As a tester i need this to ', function () {
    beforeEach(module('codehouse.demo'));

    it('pass', inject(function (version) {
        expect(version).toEqual('0.1');
    }));

   
});