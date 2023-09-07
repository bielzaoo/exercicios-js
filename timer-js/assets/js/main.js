function clock() {
  const relogio = document.querySelector(".relogio");
  let seconds = 0;
  let timer;

  // função inicia o relogio
  function startClock() {
    timer = setInterval(() => {
      seconds++;
      relogio.innerHTML = getSeconds(seconds);
    }, 1000);
  }

  // formata os segundos.
  function getSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  document.addEventListener("click", (e) => {
    const clicked = e.target; // me diz o que foi clicado

    // aqui eu identifico qual botão foi clicado.
    if (clicked.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      startClock();
    }

    if (clicked.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (clicked.classList.contains("zerar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      seconds = 0;
      relogio.innerHTML = getSeconds(0);
    }
  });
}

clock();
