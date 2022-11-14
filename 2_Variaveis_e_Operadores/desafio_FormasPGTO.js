/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

    // Limpeza do console antes da execução.
    console.clear();

    // Declaração de variáveis.
    valorProduto = 100;
    formaPagamento = 5;
    totalPagar = 0;

    // Definição da regra de negócio.
    if (formaPagamento == 1){
        totalPagar =  valorProduto - ((valorProduto * 10) / 100);
        console.log("Você decidiu pagar no débito, o valor final do produto com 10% de desconto é: R$ " + totalPagar.toFixed(2));
    }else if (formaPagamento == 2){
        totalPagar = valorProduto - ((valorProduto * 15) / 100);
        console.log("Você decidiu pagar no dinheiro ou PIX, o valor final do produto com 15% de desconto é: R$ " + totalPagar.toFixed(2));
    }else if (formaPagamento == 3){
        console.log("Você decidiu pagar em até duas vezes sem juros, o valor final do produto é: R$ " + valorProduto);
    }else if (formaPagamento == 4){
        totalPagar = valorProduto + ((valorProduto * 10) / 100);
        console.log("Você decidiu pagar em três ou mais vezes, o valor final do produto com o acréscimo de 10% de juros é: R$ " + totalPagar);
    }else {
        console.log("Opção inválida. Reexecute o sistema selecionando uma opção válida para prosseguir.");
    }