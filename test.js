var main = require('../index');
var asset = require('assert');

describe('First two terms', function() {
    it('should return 1 for both 0 and 1', function() {
        asset.strictEqual(main.factNum(0), 1);
        asset.strictEqual(main.factNum(1), 1);
    });
});
