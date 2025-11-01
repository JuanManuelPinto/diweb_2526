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

// Espera a que todo el contenido HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona el botón y el menú por sus IDs
    const menuToggle = document.getElementById('menuToggle');
    const menuLinks = document.getElementById('menuLinks');

    // Añade un 'escuchador' de eventos para el 'clic'
    menuToggle.addEventListener('click', () => {
        // Cuando se haga clic:
        // Añade o quita la clase 'active' del menú de enlaces
        menuLinks.classList.toggle('active');
    });

});