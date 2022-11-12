/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, 
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Classificação:
    1) Menor que 5, reprovado;
    2) Entre 5 e 7, recuperação;
    3) Maior que 7, aprovado.
*/

    // Limpar o console antes da execução do programa.
    console.clear();

    // Declaração de variáveis.
    media = 0;
    n1 = 1;
    n2 = 3;
    n3 = 10;

    // Cálculo da média.
    media = (n1 + n2 + n3) / 3;

    // Definição das condicionais.
    if (media > 7){
        console.log("Sua média foi " + media.toFixed(1) + "! De acordo com o critério, você está aprovado(a).")
    } else if (media > 5 && media < 7){
        console.log("Sua média foi " + media.toFixed(1) + "! De acordo com o critério, você está de recuperação.")
    } else {
        console.log("Sua média foi " + media.toFixed(1) + "! De acordo com o critério, você está reprovado.")
    };
