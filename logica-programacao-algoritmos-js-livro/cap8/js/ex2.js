const btnAdd = document.querySelector("#btnAdd");
const btnLimpar = document.querySelector("#btnLimpar");
const inProduto = document.querySelector("#inProduto");
const listaProdutos = document.querySelector("#listaProdutos");
let produtos = localStorage.getItem("produtos");

if (localStorage.getItem("produtos")) {
  let produtos2 = localStorage.getItem("produtos").split(',');
  produtos2.sort();
  for(let produto of produtos2){
    listaProdutos.textContent += produto + "\n";
  }  
}

function adcionarItem() {
  const produto = inProduto.value;
  
  produtos += produto + ",";
  
  localStorage.setItem("produtos", produtos);
  
  listaProdutos.textContent += produto + "\n";  
}

inProduto.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adcionarItem();
  }
});

btnAdd.addEventListener("click", adcionarItem);
