/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

*/
    // Limpeza do console, antes da execução.
    console.clear();

    // Declaração de variáveis.
    imc = 0;
    peso = 996;
    altura = 1.65;
    resultado = "";

    // Definição do cálculo do IMC.
    imc = peso / (altura * altura);

    // Definição da regra de IMC.
    if (imc < 18.5){
        resultado = "abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25){
        resultado = "no peso normal.";
    } else if (imc >= 25 && imc < 30){
        resultado = "com sobrepeso.";
    } else if (imc >= 30 && imc < 40){
        resultado = "com obesidade do tipo I.";
    } else {
        resultado = "com obesidade mórbida.";
    };

    // Apresentação do resultado da regra.
    console.log("De acordo com o cálculo do seu IMC, o resultado é " + imc.toFixed(1) + " que, pela classificação da OMS indica que você está " + resultado);