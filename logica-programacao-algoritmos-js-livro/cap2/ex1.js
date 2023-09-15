const btnPromocao = document.querySelector("#btnPromocao");

btnPromocao.addEventListener("click", (e) => {
    const inMedicamento = document.querySelector("#inMedicamento");
    const inPreco = document.querySelector("#inPreco");
    const outMedicamento = document.querySelector("#outMedicamento");
    const promoção = document.querySelector("#promoção");

    const promocaoValor = Math.floor(inPreco.value) * 2;

    outMedicamento.textContent = `Promoção de ${inMedicamento.value}`;
    promocao.textContent = `Leve 2 por apenas R$ ${promocaoValor.toFixed(2)}`;
});