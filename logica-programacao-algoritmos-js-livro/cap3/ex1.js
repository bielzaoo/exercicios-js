const btnVer = document.querySelector("#btnVer");

btnVer.addEventListener("click", (e) => {
    const inNum = document.querySelector("#inNum");
    const resposta = document.querySelector("#resposta");
    const num = inNum.value;
    
    if (!num || Number.isNaN(num)) {
        alert("Por favor, digite apenas números!");
        inNum.focus();
        return;
        
    }
    
    if (num % 2 === 0) {
        resposta.textContent = `${num} é Par.`;
    } else {
        resposta.textContent = `${num} é ìmpar.`;
    }
});