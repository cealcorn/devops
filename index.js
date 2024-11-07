// n!=n*1(n-1)!

exports.factNum = function(n) {
// function factNum(n) {
    if (n < 0) {
        return undefined;
    }
    
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * this.factNum(n - 1);
}