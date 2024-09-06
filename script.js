// Data e hora de início (substitua pelos seus valores)
const dataInicio = new Date(2024, 5, 15, 0, 0, 0);

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const anos = Math.floor(diferenca / 31536000000);
    const meses = Math.floor(diferenca / 2592000000);
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").textContent = 
        `${anos} anos,  ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chamar a função para iniciar o contador
atualizarContador();