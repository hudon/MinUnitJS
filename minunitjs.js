/* MinUnitJS */
var assert, assertAlmostEqual, runTests, testThat, tests;
assert = function(value, msg) {
    if (!value) throw msg;
};
assertAlmostEqual = function(a, e, msg) {
    assert(Math.abs(a - e) < 0.00000001, msg);
};
tests = [];
testThat = function(msg, f) {
    tests.push({ test: f, msg: msg });
};
runTests = function() {
    var e, i, t, _i, _len;
    i = 0;
    for (_i = 0, _len = tests.length; _i < _len; _i++) {
        t = tests[_i];
        i += 1;
        try {
            t.test();
        } catch (_error) {
            e = _error;
            throw "INFO: testing that " + t.msg + ":\n" + e;
        }
    }
    console.log('INFO: ALL TESTS PASSED');
    console.log("INFO: tests run: " + i);
};
/* end MinUnitJS */


// Your tests:

testThat('1 is 1', function() {
    assert(1 === 1, 'ERROR: ONE IS NOT ONE');
});

runTests();

