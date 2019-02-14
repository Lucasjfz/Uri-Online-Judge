var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

const pi = 3.14159
var r = parseFloat(lines.shift())   //retira o valor vendido da pilha
var total = (4/3)*pi*(Math.pow(r,3))        //calcula o total

console.log('VOLUME = ' + (total.toFixed(3)))  //exibe