var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var id = parseInt(lines.shift())
var hours = parseInt(lines.shift())
var ammount = parseFloat(lines.shift())

console.log('NUMBER = ' + id)
console.log('SALARY = U$ ' + (hours*ammount).toFixed(2))