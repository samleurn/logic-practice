let texto = 'LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY';

let quantidadeDeLetrasMaiusculas = texto.replace(/[^A-Z]/g, '').length;
console.log(quantidadeDeLetrasMaiusculas);
