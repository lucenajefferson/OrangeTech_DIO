/* Faça um programa para calcular o custo de uma viagem.
    Trabalhar com variáveis para viabilizar a possibilidade do cálculo:
        Viagem realizada na Gasolina ou no Etanol;
        Gasto médio de combustível do veículo;
        Distância em KM da viagem;
        Imprimir o custo total da viagem. */

    // Declaração de variáveis
    tipoCombustivel = 0;
    precoCombustível = 0;
    distanciaKM = 0;
    custoViagem = 0;

    // Informativo ao usuário.
    console.log("Olá, este sistema calcula o custo de uma viagem.");
    console.log("Qual o tipo de combustível do veículo:");
    console.log("1 - Gasolina");
    console.log("2 - Etanol");
    console.log("3 - Diesel");

    // Ler o tipo de combustível utilizado.
    tipoCombustivel = prompt("Por favor digite o tipo de combustível: ");

    

