## Función 'Ver más/menos' en el Formulario de Contacto

Esta función permite que el texto extenso sobre el uso de datos se muestre de forma resumida al principio, y los usuarios pueden expandirlo para leer el contenido completo.

### El Proceso:

* **Guarda el texto completo:** Al cargar la página, el código JavaScript guarda todo el contenido de la política de privacidad, incluyendo un enlace.

* **Muestra el texto corto:** Inicialmente, solo se muestra una parte del texto, junto con un botón que dice "Ver más".

* **Expansión del texto:** Si haces clic en "Ver más", el texto completo aparece.

* **Funcionalidad del enlace:** El enlace a la "Política de Privacidad" en el texto extendido continúa funcionando correctamente.

### ¿Por qué es útil?

Esta función mejora significativamente la experiencia del usuario:

* **Evita la sobrecarga visual:** Impide que el usuario vea un bloque de texto muy largo al principio, haciendo el formulario más limpio y fácil de usar.

* **Optimiza el espacio:** Ayuda a que el diseño del formulario se vea bien en cualquier dispositivo, especialmente en pantallas pequeñas.

### ¿Cómo se implementó?

La idea surgió para hacer el formulario de contacto menos abrumador visualmente.

* Al principio, se probo solo con `textContent`, pero eso rompía el enlace de la política de privacidad.

* La solución final fue trabajar con el contenido HTML completo del texto (`innerHTML`). Así, al expandir el texto, se restaura el HTML original, y el enlace de la "Política de Privacidad" sigue funcionando.