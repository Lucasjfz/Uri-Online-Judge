var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var pi = 3.14159
var r = parseFloat(lines.shift())
r = r.toFixed(2)

console.log('A=' + (pi*(Math.pow(r,2))).toFixed(4))