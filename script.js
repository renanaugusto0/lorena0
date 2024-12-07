const startDate = new Date('2024-06-15T00:00:00');

function updateTimer() {
  const now = new Date(); 

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (days < 0) {
    months -= 1;

    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

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

  document.getElementById('timer').innerHTML =
    `${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}
particlesJS("particles-js", {
  particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } },
      color: { value: "#ffdd57" },
      shape: {
          type: "circle",
          stroke: { width: 0, color: "#000" },
      },
      opacity: { value: 0.7, random: true },
      size: { value: 4, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "out" },
  },
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
      },
      modes: { grab: { distance: 140 }, push: { particles_nb: 4 } },
  },
  retina_detect: true,
});


setInterval(updateTimer, 1000);
