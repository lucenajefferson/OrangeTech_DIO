// Faça um programa que calcule o custo total de uma viagem.

// Teremos de receber como variáveis, distância em KM, preço combustível e
// gasto de combustível por litro do veículo.
// Depois de receber as variáveis, calcular o custo e imprimir no console.

// Nessa V1.0 utilizaremos valores fixos para desenvolvermos a lógica.

    // Qual a distância a ser percorrida?
    distancia = 180;
    // Quantos KM por Litro o veículo faz?
    kmPorLitro = 10;
    // Qual o valor do combustível?
    precoCombustivel = 5.99;
    // Custo de viagem será definido após o cálculo.
    custoViagem = 0;

    // Custo de viagem é (distância / consumo) * preço do combustível.
    custoViagem = (distancia / kmPorLitro) * precoCombustivel

    // Imprimir o custo total da viagem.
    console.log(custoViagem);