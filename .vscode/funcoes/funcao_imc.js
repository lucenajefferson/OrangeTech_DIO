// Premissa: Transformar o cálculo de IMC em uma funcão.

    // Limpar o console antes da execução.
    console.clear();

    // Criando a função para cálculo de IMC.
    function calcularIMC (peso, altura){
        return peso / (altura * altura);
    };

    // Função para a definição da regra de classificação de IMC.
    function regraIMC(imc){
        if (imc < 18.5){
            return "abaixo do peso.";
        } else if (imc >= 18.5 && imc < 25){
            return "no peso normal.";
        } else if (imc >= 25 && imc < 30){
            return "com sobrepeso.";
        } else if (imc >= 30 && imc < 40){
            return "com obesidade do tipo I.";
        } else {
            return "com obesidade mórbida.";
        };
    }

    // Função main passando o peso e altura.
    function main(){
    peso = 120;
    altura = 1.29;

    // Chamada da função de cálculo passando como parâmetro peso e altura.
    imc = calcularIMC(peso, altura);
    // O resultado do cálculo, é passado na função regraIMC para definir a classificação de massa corpórea.
    console.log("Seu IMC é: " + imc.toFixed(2) + " você está " + regraIMC(imc));
    }

    // Chamando a função main com os parâmetros e funções.
    main();