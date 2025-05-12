// function main() {
//     let Fahrenheit, Celsius;
//     let opcao;

//     opcao = Number(prompt('Você deseja converter: \n1 - Celsius para Fahrenheit \n2 - Fahrenheit para Celsius'));
//     if (opcao === 1) {
//         Celsius = Number(prompt('Digite a temperatura em Celsius'));
//         Fahrenheit = Celsius * 1.8 + 32;
//         alert("Temperatura em Fahrenheit: " + Fahrenheit);
//     } else if (opcao === 2) {
//         Fahrenheit = Number(prompt('Digite a temperatura em Fahrenheit'));
//         Celsius = ((Fahrenheit - 32) * 5) / 9;
//         alert("Temperatura em Celsius: " + Celsius);
//     } else {
//         alert("Opção inválida");
//     }
// }

// main();




// REFATORADO 1


// let Fahrenheit, Celsius;
// function main() {
//     let opcao;
//     do {
//         opcao = Number(prompt('Você deseja converter: \n1 - Celsius para Fahrenheit  \n2 - Fahrenheit para Celsius \n3 - Sair'));
//         if (opcao === 1) {
//             celsiusFahrenheit();
//         } else if (opcao === 2) {
//             fahrenheitCelsius();
//         } else if (opcao !== 3) {
//             alert("Opção inválida");
//         }
//     } while (opcao !== 3);
//     alert("Até logo!");
// }


// function celsiusFahrenheit() {
//     Celsius = Number(prompt('Digite a temperatura em Celsius'));
//     Fahrenheit = Celsius * 1.8 + 32;
//     alert("Temperatura em Fahrenheit: " + Fahrenheit.toFixed(2));
// }

// function fahrenheitCelsius() {
//     Fahrenheit = Number(prompt('Digite a temperatura em Fahrenheit'));
//     Celsius = ((Fahrenheit - 32) * 5) / 9;
//     alert("Temperatura em Celsius: " + Celsius.toFixed(2));
// }

// main();



// REFATORADO 2

function main() {
    let opcao;
    do {
        opcao = Number(prompt('Você deseja converter: \n1 - Celsius para Fahrenheit  \n2 - Fahrenheit para Celsius \n3 - Sair'));
        if (opcao === 1) {
            celsiusFahrenheit();
        } else if (opcao === 2) {
            fahrenheitCelsius();
        } else if (opcao !== 3) {
            alert("Opção inválida");
        }
    } while (opcao !== 3);
    alert("Até logo!");
}
function celsiusFahrenheit() {
    let celsius = Number(prompt('Digite a temperatura em Celsius:'));
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C é igual a ${fahrenheit}°F`);
}

function fahrenheitCelsius() {
    let fahrenheit = Number(prompt('Digite a temperatura em Fahrenheit:'));
    let celsius = (fahrenheit - 32) * 5/9;
    alert(`${fahrenheit}°F é igual a ${celsius}°C`);
}


main();

