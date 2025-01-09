let quantidadeDeVida = 100;
let ataque = 20;
let quantidadeDeAtaques = 0;

while(quantidadeDeAtaques != 3){
    quantidadeDeVida -= ataque;
    quantidadeDeAtaques++;
}
console.log(quantidadeDeVida);