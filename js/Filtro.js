// Función para filtrar elementos de la página web
function filtrarMascotas(tipo) {
    var elementos = document.getElementsByClassName('white');
    for (var i = 0; i < elementos.length; i++) {
      if (tipo === 'todos') {
        elementos[i].style.display = 'block';
      } else {
        if (elementos[i].classList.contains(tipo)) {
          elementos[i].style.display = 'block';
        } else {
          elementos[i].style.display = 'none';
        }
      }
    }
  }

