## MinUnitJS, inspired by MinUnit
assert = (value, msg) -> if not value then throw msg
assertAlmostEqual = (a, e, msg) -> assert Math.abs(a - e) < 0.00000001, msg
tests = []
testThat = (msg, f) -> tests.push
      test: f
      msg: msg
runTests = ->
  i = 0
  for t in tests
    i += 1
    try t.test() catch e
      throw "INFO: testing that #{t.msg}:\n#{e}"
  console.log 'INFO: ALL TESTS PASSED'
  console.log "INFO: tests run: #{i}"
## end MinUnitJS


## Your tests:

testThat '1 is 1', ->
  assert 1 is 1, 'ERROR: ONE IS NOT ONE'

runTests()


