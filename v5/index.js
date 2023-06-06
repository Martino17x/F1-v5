// Ejecutar funciones
document.querySelector(".search-box").addEventListener("click", mostrarListaDesplegable);
document.getElementById("main-container").addEventListener("click", ocultarBuscador);

// Variables
var listaDesplegable = document.getElementById("box-search-bars");
var inputSearch = document.getElementById("inputSearch");
var ocultar_barra = document.getElementById("main-container");

// Funciones
function mostrarListaDesplegable() {
  listaDesplegable.classList.add("visible");
  inputSearch.focus();
}

function ocultarBuscador(event) {
  // Verificar si se hizo clic dentro o fuera del buscador
  if (!listaDesplegable.contains(event.target)) {
    listaDesplegable.classList.remove("visible");
  }
}

// FILTRO DE BUSQUEDA
document.getElementById("inputSearch").addEventListener("keyup", buscadorInterno);

function buscadorInterno() {
  var filter = inputSearch.value.toUpperCase();
  var li = listaDesplegable.getElementsByTagName("li");

  // Recorriendo elementos filtrados mediante los "li"
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    var textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
