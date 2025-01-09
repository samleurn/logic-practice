let dataDehoje = new Date();
let dataDeNascimento = new Date('2005-04-25');

let idadeDaPessoaEmMilissegundos = dataDehoje - dataDeNascimento;
let idadeDaPessoa = parseInt(idadeDaPessoaEmMilissegundos / (1000 * 60 * 60 * 24 * 365));
console.log(idadeDaPessoa);