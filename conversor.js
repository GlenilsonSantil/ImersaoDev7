var inputNome = document.querySelector("#input-nome");
var btnConfirme = document.querySelector("#btn-confirme");
var mainContainer = document.querySelector("#main-container");

var dolarEmReal = 4.89;

function converter() {
  var saida = document.querySelector("#saida");
  var dolar = document.querySelector("#input-dolar").value;

  var real = dolarEmReal * dolar;

  saida.textContent = `$${dolar} dolares é igual a R$${real.toFixed(2)}`;
}

btnConfirme.addEventListener("click", () => {
  var nome = inputNome.value;
  if (!nome) {
    return;
  }

  mainContainer.innerHTML = `
    <h2>Olá ${nome}, dolar referente ao dia 14/11</h2>
    <div class="conversor">
      <label for="input-dolar">$</label>
      <input 
        oninput="converter()"
        id="input-dolar" 
        type="number" 
        placeholder="Dolar">
      </input>
    </div>
    <h3 id="saida"></h3>
  `;
});
