var main = require('../index.js');
var assert = require('assert');

describe('First two terms', function() {
    it('should return 1 for both 0 and 1', function() {
        assert.strictEqual(main.factNum(0), 1);
        assert.strictEqual(main.factNum(1), 1);
    });
});

describe('Regular factorial number', function() {
    it('should return 720 for 6! and 40320 for 8!', function() {
        assert.strictEqual(main.factNum(6), 720);
        assert.strictEqual(main.factNum(8), 40320);
    });
});

describe('Negative numbers', function() {
    it('should return undefined', function() {
        assert.strictEqual(main.factNum(-1), undefined);
    });
});