document.getElementById("novocalculo").style.display = "none";


function calcularMedia() {


    let nome = document.getElementById("nome").value;
    let disciplina = document.getElementById("disciplina").value;

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);

    let resultado = document.getElementById("resultado");

    // Verificar se todos os campos foram preenchidos

   if (nome == "" || disciplina == "" || nota1 == "" 
        || nota2 == "" || nota3 == "" || nota4 == "") {alert("Preencha todos os campos!");return;}

    // Calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Identificar a disciplina
    let nomeDisciplina = "";

    if (disciplina === "FDD") {
        nomeDisciplina = "Fundamentos do Design Digital";
    } else if (disciplina === "FDDI") {
        nomeDisciplina = "Fotografia Digital";
    } else if (disciplina === "PRAAI") {
        nomeDisciplina = "Projetos de Áudio e Vídeo I";
    }

    // Verificar situação do aluno
    if (media >= 7) {

       /*<strong> deixa o nome em negrito.*/

        /* InnerHTML= Indica que o JavaScript vai colocar um conteúdo HTML dentro do 
        elemento que foi identificado como resultado.*/

    resultado.innerHTML =
    "Aluno: " + nome + "<br>" +
    "Disciplina: " + nomeDisciplina + "<br>" +
    "Média: " + media.toFixed(1) + "<br>" +
    '<span class="aprovado">APROVADO</span>';

} else if (media >= 6) {

    resultado.innerHTML =
        "Aluno: " + nome + "<br>" +
        "Disciplina: " + nomeDisciplina + "<br>" +
        "Média: " + media.toFixed(1) + "<br>" +
        '<span class="recuperacao">RECUPERAÇÃO</span>';

    } else {

    resultado.innerHTML =
    "Aluno: " + nome + "<br>" +
    "Disciplina: " + nomeDisciplina + "<br>" +
    "Média: " + media.toFixed(1) + "<br>" +
    '<span class="reprovado">REPROVADO</span>';

    }
}


function calcularNovo() {

    // Limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("disciplina").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";

    // Voltar mensagem inicial
    document.getElementById("resultado").innerHTML = `
        <p>Preencha os dados acima e clique em calcular média</p>
    `;
}