// Definindo a data inicial: 15 de junho de 2024
const startDate = new Date('2024-06-15T00:00:00');

// Função para calcular e atualizar o cronômetro
function updateTimer() {
  const now = new Date(); // Data e hora atuais

  // Cálculo das diferenças entre as datas
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  // Ajustar os meses se a data do mês atual ainda não completou um mês completo
  if (days < 0) {
    months -= 1;
    // Calcula o número de dias no mês anterior ao mês atual
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }

  // Ajustar os meses negativos e contabilizar no ano
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Ajustar as horas, minutos e segundos
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  // Atualizar a exibição do cronômetro
  document.getElementById('timer').innerHTML =
    `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualizar o cronômetro a cada segundo
setInterval(updateTimer, 1000);
