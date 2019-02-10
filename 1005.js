var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var a = parseFloat(lines.shift()).toFixed(1)
var b = parseFloat(lines.shift()).toFixed(1)

console.log('MEDIA = ' + ((a*35+b*75)/110).toFixed(5))