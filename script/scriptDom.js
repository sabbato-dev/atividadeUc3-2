// function calcularMedia() {
//     try {
//         if (document.getElementById("nome").value === "") {
//             alert("O campo nome não pode ser vazio");
//             return;
//         }
//         const nomeAluno = document.getElementById("nome").value;
//         const nota1 = parseFloat(document.getElementById("nota1").value);
//         const nota2 = parseFloat(document.getElementById("nota2").value);
//         const nota3 = parseFloat(document.getElementById("nota3").value);
//         const nota4 = parseFloat(document.getElementById("nota4").value);
        
//         if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
//             alert("As notas precisam ser números");
//             return;
//         }
        
//         let media = (nota1 + nota2 + nota3 + nota4) / 4;
//         document.getElementById("mediaAluno").value = media;
        
//         if (media >= 7) {
//             document.getElementById("resultado").value = "Aprovado";
//         } else if (media >= 5) {
//             document.getElementById("resultado").value = "Recuperacao";
//         } else {
//             document.getElementById("resultado").value = "Reprovado";
//         }
//     } catch (error) {
//         alert("Erro ao calcular a média");
//     }
// }



// function calcularMedia() {
    
    
//     const nomeAluno = document.getElementById("nome").value;
//     const nota1 = parseFloat(document.getElementById("nota1").value);
//     const nota2 = parseFloat(document.getElementById("nota2").value);
//     const nota3 = parseFloat(document.getElementById("nota3").value);
//     const nota4 = parseFloat(document.getElementById("nota4").value);
    
//     let media= (nota1 + nota2 + nota3 + nota4) / 4;
//     document.getElementById("mediaAluno").value = media;
    
//     if (media >= 7) {
//         document.getElementById("resultado").value = "Aprovado";
//     } else if (media >= 5) {
//         document.getElementById("resultado").value = "Recuperacao";
//     } else {
//         document.getElementById("resultado").value = "Reprovado";
//     }
    
// }
function executarTestes() {
    
    // pegar conteudo de um elemento de um formulário utilizando ID
    let conteudoInput = document.getElementById("nome").value;
    // pegar um elemento de um formulário utilizando NAME (sem value)
    let input = document.getElementsByName("nome");
    // pegar um conteúdo de um elemento utilizando class
    let nota4 = document.getElementsByClassName("form__textbox")[4].value;
    // pegar um conteudo de um elemento utilizando tag - a nota 2
    let nota2 = document.getElementsByTagName("input")[2].value;
    // pegar um conteudo de um elemento tag <p> - "result-box__text"
    let conteudop = document.getElementsByTagName("p")[0].innerHTML;
    // mudar o valor de um elemento de formulário - nome- colocar "Mariazinha"
    let conteudoInput2 = document.getElementById("nome").value = "Mariazinha";
    // mudar o valor de uma tag <p> - trocar para: "Avaliação final do aluno"
    let conteudop2 = document.getElementsByTagName("p")[0].innerHTML = "Avaliação final do aluno";
// inserindo <li> em uma <ul> preexistente
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.innerHTML = "Item adicionado dinamicamente";
    list.appendChild(item);
    // mudando a cor do elemento <p> - utilizando a propriedade style
    let conteudop3 = document.getElementsByTagName("p")[0].style.color = "red";
    // mudando a cor de fundo do formulário - utilizando a propriedade style
    let form = document.getElementsByTagName("form")[0].style.backgroundColor = "lightgreen";
    
}









































// function main() {
//     let notabim1, notabim2, notabim3, notabim4, notabimsomada, mediafinal, notabimrecuperacao; //declarando variaveis em JS
 
//     notabim1=0; //atribuindo variável em JS
//     let numero = Number("2"); //declarando
//     notabim1 = Number(prompt('Entre com o valor da primeira nota'));
//     notabim2 = Number(prompt('Entre com o valor da segunda nota'));
//     notabim3 = Number(prompt('Entre com o valor da terceira nota'));
//     notabim4 = Number(prompt('Entre com o valor da quarta nota'));
//     notabimsomada =(notabim1 + notabim2 + notabim3 + notabim4);
//     mediafinal = notabimsomada / 4;
//     alert("A media final é");
//     alert(mediafinal);
 
//     if (mediafinal >= 7) {
//         alert("Aprovado");
       
//     } else {
//         if (mediafinal >= 5) {
//             alert("O aluno está de recuperação");
//             alert("Digite a nota da recuperação");
//             notabimrecuperacao = Number(prompt('Enter a value for nota de recuperacao'));
//             if (notabimrecuperacao >= 7) {
//                 alert("Aprovado");
//             } else {
//                 alert("Reprovado");
//             }
//         } else {
//             alert("Reprovado");
//         }
//     }
// }
// main();