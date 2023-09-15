const btnAdd = document.querySelector("#btnAdd");
const btnExec = document.querySelector('#btnExec');
const outPendentes = document.querySelector('#pendentes');
const inVeiculoServico = document.querySelector('#inVeiculoServico');
const outService = document.querySelector('#outService');

btnAdd.addEventListener("click", addService);
btnExec.addEventListener("click", executeService);
inVeiculoServico.addEventListener('keypress', (e) => {
  if (e.key == "Enter") {
    addService();
  }
})

let services = localStorage.getItem("services");
let pendentes = localStorage.getItem("pendentes");
let pendindServices;
let currentService;


if (!localStorage.getItem("services")) {
  services = '';
  outService.textContent = currentService;
}

if (!localStorage.getItem("pendentes")) {
  pendentes = 0;
  outPendentes.textContent = pendentes;
}

outPendentes.textContent = pendentes;
if (localStorage.getItem("currentServ")) {
  outService.textContent = localStorage.getItem("currentServ");
}

function addService() {
  
  const currentService = inVeiculoServico.value;
  
  if (!currentService) {
    alert("Informe um serviço!");
    inVeiculoServico.focus();
    return;
  }

  services += currentService + ",";

  pendentes++;
  localStorage.setItem("services", services);
  localStorage.setItem("pendentes", pendentes);

  let servPendentes = Number(pendentes);

  outPendentes.textContent = pendentes;
  
  console.log(services);
  if (!services) {
    alert('Adicione um servioço');
    return;
  }
  pendindServices = services.split(',');
  pendindServices.pop();  // retira o elemento vazio que fica no final do array.
}

function executeService() {

  if (pendentes === 0) {
    outService.textContent = "Não há mais serviços pendentes.";
    return;
  }

  currentService = pendindServices.shift();
  localStorage.setItem("currentServ", currentService);
  console.log(pendindServices);
  outService.textContent = currentService;

  let servPendentes = Number(pendentes);
  servPendentes--;
 
  outPendentes.textContent = pendentes;
}