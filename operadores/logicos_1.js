let temDinheiro = true;
let estaEnolarado = true;
let carroNaGaragem = true;


let resultadoE = '#1 (AND)Vai ao shopping?';
resultadoE += temDinheiro && estaEnolarado;
console.log(resultadoE);

let resultadoOu = '#2 (OR)Vai ao shopping?';
resultadoOu += estaEnolarado || carroNaGaragem ;
console.log(resultadoOu);

console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false != false);

console.log('Nao verdadeiro ' + !true);
console.log('Nao falso ' + !false);