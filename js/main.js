document.addEventListener("DOMContentLoaded", () => {
  const texto = "Juan Manuel Pinto Garrucho";
  const elemento = document.getElementById("nombre");
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, 100); // velocidad de escritura (100 ms por letra)
    } else {
      // Añadimos un brillo al terminar la animación
      elemento.style.textShadow = "0 0 15px #00ffff, 0 0 30px #00ffff";
    }
  }

  escribir();
});
