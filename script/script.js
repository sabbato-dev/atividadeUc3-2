function main() {
    let vendedor;
    let salarioBase, valorVendas, salarioFinal;

    console.log('Inicio do programa');

    vendedor = prompt('Vamos calcular seu salário, qual é o seu nome?');
    salarioBase = Number(prompt('Qual o seu salário base?'));
    valorVendas = Number(prompt('Quanto vendeu esse mês?'));

    console.log('Salário base: ' + salarioBase);
    console.log('Valor de vendas: ' + valorVendas);

    if (valorVendas >= 3000) {
        salarioFinal = salarioBase + valorVendas * 0.15;
        console.log('Salário final: ' + salarioFinal);
        alert("Olá " + vendedor + ", seu salário é R$ " + salarioFinal);
    } else {
        if (valorVendas >= 1500) {
            salarioFinal = salarioBase + valorVendas * 0.1;
            console.log('Salário final: ' + salarioFinal);
            alert("Olá " + vendedor + ", seu salário é R$ " + salarioFinal);
        } else {
            salarioFinal = salarioBase + valorVendas * 0.05;
            console.log('Salário final: ' + salarioFinal);
            alert("Olá " + vendedor + ", seu salário é R$ " + salarioFinal);
        }
    }

    console.log('Fim do programa');
}

main();
