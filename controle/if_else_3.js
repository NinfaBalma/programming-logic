const hora = 20;
let saudacao;

if (hora < 12){
    saudacao = 'Bom Dia!';
} else {
    if (hora < 18){
        saudacao = 'Boa tarde!';
    } else {
        saudacao = 'Boa Noite!';
    }
}
    console.log(saudacao);