const btnVerificar = document.querySelector("#verificar");

btnVerificar.addEventListener("click", (e) => {
	const inLadoA = document.querySelector("#inLadoA");
	const inLadoB = document.querySelector("#inLadoB");
	const inLadoC = document.querySelector("#inLadoC");
	const resultado = document.querySelector("#resultado");
	const tipoTriangulo = document.querySelector("#tipoTriangulo");

	const ladoA = inLadoA.value;
	const ladoB = inLadoB.value;
	const ladoC = inLadoC.value;

	if (!ladoA || Number.isNaN(ladoA)) {
		resultado.textContent = 'Digite apenas números';
		inLadoA.focus();
		return;
	} else if (!ladoB || Number.isNaN(ladoB)) {
		resultado.textContent = 'Digite apenas números';
		inLadoB.focus();
		return;
	} else if (!ladoC || Number.isNaN(ladoC)){
		resultado.textContent = 'Digite apenas números';
		inLadoC.focus();
		return;
	}

	if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
		resultado.textContent = 'Lados podem formar um triangulo';

		if (ladoA === ladoB && ladoA === ladoC) {
			tipoTriangulo.textContent = 'Tipo: Equilátero';
		} else if (ladoA === ladoB || ladoA === ladoC) {
			tipoTriangulo.textContent = 'Tipo: Isósceles';
		} else {
			tipoTriangulo.textContent = 'Tipo: Escaleno';
		}
	} else {
		resultado.textContent = 'Lados não formam um triangulo';
			tipoTriangulo.textContent = '';
	}
});