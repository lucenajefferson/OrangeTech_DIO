// Testando tipos de variáveis.
// Desafio: Verificar se um determinado número é par ou ímpar.

    // Valor que vamos descobrir se é par ou ímpar.
    valor = 2;

    // Número será verdadeiro ou falso a depender do resto da divisão do valor pelo módulo de 2.
    numero = (valor % 2) === 0;

    // Se o número for verdadeiro, ele é par. Senão é ímpar.
    if (numero == true){
        console.log("O "+valor+" é PAR.");
    }else{
        console.log("O "+valor+" é ÍMPAR.");
    };