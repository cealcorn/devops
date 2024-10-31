var main = require('../index.js');
var assert = require('assert');

describe('First two terms', function() {
    it('should return 1 for both 0 and 1', function() {
        assert.strictEqual(main.factNum(0), 1);
        assert.strictEqual(main.factNum(1), 1);
    });
});
