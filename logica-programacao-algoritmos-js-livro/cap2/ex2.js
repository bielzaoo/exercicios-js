const btncalcular = document.querySelector("#calcular");

btncalcular.addEventListener("click", (e) => {
    const inHoraValor = document.querySelector("#inValorHora");
    const inHoraUso = document.querySelector("#inHoraUso");
    const resultado = document.querySelector("#resultado");

    const horaValor = inHoraValor.value;
    const horaUso = inHoraUso.value;
    const resultadoValor = horaValor * horaUso;

    resultado.textContent = `Valor a pagar R$: ${resultadoValor.toFixed(2)}`;

});