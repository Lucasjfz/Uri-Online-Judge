var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var entrada = lines.shift().split(' ')
var a = parseInt(entrada.shift())
var b = parseInt(entrada.shift())
var c = parseInt(entrada.shift())

maiorab = (a+b+((a*b*c)*(a-b)))/2

console.log(maiorab + ' eh o maior')