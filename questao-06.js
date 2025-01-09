function numeroFatorial(numero){
    if (numero == 0){
        return 1;
    } else {
        if (numero < 0){
            return -1;
        } else {
            return (numero * numeroFatorial(numero - 1));
        }
    }
}
console.log(numeroFatorial(12));

