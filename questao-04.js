let numeroDeCampo = [23, 16, 11, 8, 19, 14, 5, 21];
let listaDeNumeroPrimo = [];

function numeroPrimo(numero){
    return numero != 0 && numero != 1 && numero % 2;
}

for(numeroDeCampo of numeroDeCampo){
    if(numeroPrimo(numeroDeCampo)){
        listaDeNumeroPrimo.push(numeroDeCampo);
    }
}
//Foi o maximo que eu consegui muito complexo.
console.log(listaDeNumeroPrimo);