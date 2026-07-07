// CAMINHOS
/*
É muito simples entender como os caminhos relativos funcionam, eles são úteis para acessar diretórios e arquivos a partir de um determinado local

Em resumo podemos descrever os caminhos relativos da seguinte forma:

./ Mesma pasta
../ Volta uma pasta
../../ Volta duas pasta
./folder/ Entra em uma pasta
../out/ Volta uma pasta e entra em outra
./file.js Acessa um arquivo
./folder/file.js Acessa um arquivo dentro de uma pasta
../folder/file.js Volta uma pasta, entra em outra pasta e acessa o arquivo
../../file.js Volta duas pasta e acessa o arquivo

*/

import {sub} from "./functions/math/sub.js";
import {sum} from "./functions/math/sum.js";
import {fixedSum} from "./functions/utils/fixed.js";
import {exec} from "./commands/exec.js"

console.log(sum(6.123, 4.236));
console.log(fixedSum(6.123, 4.236));
console.log(exec("Victor"))