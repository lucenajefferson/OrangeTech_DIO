// Premissa: Transformar o cálculo de IMC em uma funcão.

    // Limpar o console antes da execução.
    console.clear();

    // Criando a função para cálculo.
    function calcularIMC (peso, altura){
        return peso / (altura * altura);
    };

    // Função para a definição da regra de IMC.
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

    // Função main 
    function main(){
    peso = 120;
    altura = 1.29;

    imc = calcularIMC(peso, altura);
    console.log("Seu IMC é: " + imc.toFixed(2) + " você está " + regraIMC(imc));
    }

    main();