// n!=n*1(n-1)!

exports.factNum = function(n) {
    if (n < 0) {
        return undefined;
    }
    
    if (n == 0 || n == 1) {
        return 1;
    }
    return this.factNum( n * factNum(n-1) )
}