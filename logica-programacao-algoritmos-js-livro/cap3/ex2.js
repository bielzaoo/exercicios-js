const btnVerificar = document.querySelector("#btnVerificar");

btnVerificar.addEventListener("click", (e) => {
    const inVelCondutor = document.querySelector("#inVelCond");
    const inVelPerm = document.querySelector("#inVelPerm");
    const resposta = document.querySelector("#resposta");

    const velPerm = inVelPerm.value;
    const velCond = inVelCond.value;
    
    if (velCond <= velPerm) {
        resposta.textContent = 'Situação: sem multa';
    } else if(velCond <= (velPerm * 1.20)) {
        resposta.textContent = 'Situação: multa leve';
    } else {
        resposta.textContent = 'Situação: Multa grave';
    }

})