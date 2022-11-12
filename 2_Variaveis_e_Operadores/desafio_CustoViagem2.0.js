/* Faça um programa para calcular o custo de uma viagem.
    Trabalhar com variáveis para viabilizar a possibilidade do cálculo:
        Viagem realizada na Gasolina ou no Etanol;
        Gasto médio de combustível do veículo;
        Distância em KM da viagem;
        Imprimir o custo total da viagem. */

    // Declaração de variáveis
    precoEtanol = 3.99;
    precoGasolina = 4.99;
    distanciaKM = 180;
    consumoCombustível = 9;
    custoViagem = 0;
    tipoCombustivel = 'Gasolina';
    
    // Informativo ao usuário.
    console.log("Olá, este sistema calcula o custo de uma viagem.");

    // Se o tipo de combustível for Etanol, calcule.
    if (tipoCombustivel === 'Etanol'){
        custoViagem = (distanciaKM / consumoCombustível) * precoEtanol;
    }
    // Se não, calcule pelo preço da gasolina.
    else {
        custoViagem = (distanciaKM / consumoCombustível) * precoGasolina;
    }

    // Imprimir o resultado final.
    console.log("O custo da viagem usando " + tipoCombustivel + " será de R$" + custoViagem.toFixed(2));