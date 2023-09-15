const cript = document.querySelector("#cript");
const decript = document.querySelector("#decript");

let letrasPares = [];
let letrasImpares = [];

cript.addEventListener("click", () => {
  const iniMsg = document.querySelector("#inMsg");
  const resultado = document.querySelector("#resultado");

  const msg = iniMsg.value;

  if (!msg) {
    alert("Digite uma mensagem!");
    return;
  }
  
  // desmonta a string
  for(let i = 0; i < msg.length; i++){
    if (i % 2 === 0) {
        letrasPares.push(msg.charAt(i));
    } else {
        letrasImpares.push(msg.charAt(i));
    }
  }

  let msgCript = '';
  // monta a string
  for(let i = 0; i < letrasImpares.length; i++){
    msgCript += letrasImpares[i];
  }

  for(let i = 0; i < letrasPares.length; i++){
    msgCript += letrasPares[i];
  }

  resultado.textContent = '';
  resultado.textContent = msgCript;
});

decript.addEventListener("click", () => {
  const iniMsg = document.querySelector("#inMsg");
  const resultado = document.querySelector("#resultado");

  const msg = iniMsg.value;

  if (!msg) {
    alert("Digite uma mensagem!");
    return;
  }

  // demonta a string
  for(let i = 0; i < msg.length / 2; i++){
    letrasPares.push(msg.charAt(i));
  }
  for(let i = msg.length / 2; i < msg.length; i++){
    letrasImpares.push(msg.charAt(i));
  }

  let msgDecript = '';
  // monta a string
  // no lugar de letrasPares.length poderia ser letrasImpares.length, deixei assim
  // por ecolha minha mesmo.

  // nomes com tamnho impares repetia o primeiro caractere no final, então tive
  // que fazer esta checagem para que o primeiro carctere não fosse repetido.
  if (!msg.length % 2 === 0) {    
    for (let i = 0; i  < letrasPares.length; i++) {
      msgDecript += letrasImpares[i];
      if (i === letrasPares.length - 1) {
        break;
      }
      msgDecript += letrasPares[i];
    }
  } else {
    for (let i = 0; i  < letrasPares.length; i++) {
      msgDecript += letrasImpares[i];
      msgDecript += letrasPares[i];
    }    
  }


  resultado.textContent = '';
  resultado.textContent = msgDecript;
});
