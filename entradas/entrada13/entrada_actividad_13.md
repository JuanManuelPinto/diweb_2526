# Modelos de Diseño Web

---

## 1. Fijo (Fixed)

Este es un modelo de diseño obsoleto en el que el ancho de la página web se establece en un valor estático, medido en píxeles (por ejemplo, 960 píxeles de ancho).

**Cómo funciona:** El diseño tiene un tamaño único y no cambia, independientemente del tamaño de la pantalla o de la ventana del navegador del usuario.

**Comportamiento:**
* En **pantallas más grandes** que el ancho fijo, aparecen espacios vacíos (márgenes) a los lados.
* En **pantallas más pequeñas** que el ancho fijo, el contenido se corta y aparece una barra de desplazamiento horizontal, obligando al usuario a moverse lateralmente para ver todo el contenido.

**Ejemplo:**
* [Viajeros Cádiz](https://viajeros30.com/espana/andalucia/cadiz)

---

## 2. Líquido (Liquid o Fluido)

Este modelo utiliza porcentajes (%) en lugar de píxeles fijos para definir el ancho de los elementos principales del diseño.

**Cómo funciona:** El diseño es fluido y se expande o contrae para ocupar todo el ancho disponible de la ventana del navegador, como un líquido que llena su contenedor.

**Comportamiento:**
* En **pantallas muy anchas**, el diseño se estira al máximo, lo que puede hacer que las líneas de texto sean demasiado largas y difíciles de leer.
* En **pantallas estrechas**, el diseño se comprime, lo que puede hacer que las columnas sean demasiado delgadas y el contenido se vea apretado.

**Ejemplo:**
* [El País](https://elpais.com)

---

## 3. Adaptativo (Adaptive)

Este enfoque consiste en crear múltiples diseños fijos distintos, cada uno optimizado para un rango específico de tamaño de pantalla (puntos de ruptura o *breakpoints*).

**Cómo funciona:** El sitio web detecta el ancho de la pantalla del dispositivo y luego carga la hoja de estilo (CSS) que corresponde a ese tamaño específico (por ejemplo, una versión para móvil, una para tableta y una para escritorio).

**Comportamiento:**
* El diseño no es fluido. Cuando un usuario cambia el tamaño de la ventana de su navegador, el diseño permanece estático hasta que cruza un punto de ruptura, momento en el que **"salta"** (o "snaps") abruptamente al siguiente diseño predefinido.

**Ejemplo:**
* [Apple](https://www.apple.com/es)

---

## 4. Responsivo (Responsive)

Este es el estándar moderno y combina las mejores ideas de los modelos líquido y adaptativo. Utiliza cuadrículas fluidas (basadas en porcentajes) junto con puntos de ruptura (*media queries*).

**Cómo funciona:** El diseño es inherentemente fluido (como el modelo líquido), pero utiliza puntos de ruptura (como el modelo adaptativo) para reordenar, ocultar o cambiar el tamaño de los elementos a medida que el espacio de la pantalla cambia.

**Comportamiento:**
* El diseño se ajusta **suavemente** a *cualquier* tamaño de pantalla. En lugar de "saltar", el contenido fluye y se reorganiza de manera continua. Por ejemplo, un diseño de tres columnas en un escritorio puede reorganizarse a dos columnas en una tableta y apilarse en una sola columna en un móvil.

**Ejemplo:**
* [Samsung](https://www.samsung.com/es)