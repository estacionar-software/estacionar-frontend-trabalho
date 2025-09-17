  const popup = document.getElementById("popup");
  const form = document.getElementById("form-veiculo");
  let currentRow = null;

  function abrirPopup(btn){
    currentRow = btn.closest("tr");
    document.getElementById("imagem").value = currentRow.children[0].querySelector("img").src;
    document.getElementById("placa").value = currentRow.children[1].textContent;
    document.getElementById("modelo").value = currentRow.children[2].textContent;
    document.getElementById("status").value = currentRow.children[3].textContent;
    popup.style.display = "flex";
  }

  function fecharPopup(){
    popup.style.display = "none";
  }

  form.addEventListener("submit", function(e){
    e.preventDefault();
    if(currentRow){
      currentRow.children[0].querySelector("img").src = document.getElementById("imagem").value;
      currentRow.children[1].textContent = document.getElementById("placa").value;
      currentRow.children[2].textContent = document.getElementById("modelo").value;
      currentRow.children[3].textContent = document.getElementById("status").value;
    }
    fecharPopup();
  });