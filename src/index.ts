import validator from 'validator'
import {somar, subtrair} from './Matematica'
import {filmes} from './filmes'

let nome: String = 'Vics'
let idade: number = 18

console.log(`meu nome é ${nome} e eu tenho ${idade} anos`)
//validando IP
let ip = '192.168.0.7'
console.log(validator.isIP(ip))
//validando Email
console.log(validator.isEmail('fulano@gmail.com'))
//validando matematica
console.log(`SOMA: ${somar(10,20)}`)
console.log(`SUBTRAÇAO: ${subtrair(10,10)}`)
//validando filmes
console.log(filmes)