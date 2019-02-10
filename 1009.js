var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var nome = lines.shift()                           //retira o nome da pilha
var salary = parseFloat(lines.shift())  //retira o salario fixo da pilha
var bonus = parseFloat(lines.shift())   //retira o valor vendido da pilha
var total = salary+(bonus*0.15)         //calcula o total

console.log('TOTAL = R$ ' + (total.toFixed(2)))  //exibe