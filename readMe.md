¿Cómo funciona?
Esta función permite que el texto extenso del uso de datos se muestre de forma resumida al principio, y los usuarios pueden expandirlo para leer el contenido completo.

El proceso:

Guarda el texto completo: Al cargar la página, el código JavaScript guarda todo el contenido de la política de privacidad, incluyendo un enlace.

Muestra el texto corto: Inicialmente, solo se muestra una parte del texto, junto con un botón que dice "Ver más".
Expande/Contrae al hacer clic:
Si haces clic en "Ver más", el texto completo aparece.
Adicionale el enlace a la "Política de Privacidad" en extendido consutinua funcionando,

¿Por qué es útil?
Esta función mejora la experiencia del usuario: Evita que el usuario vea un bloque de texto muy largo al principio, haciendo el formulario más limpio y fácil de usar.
Optimiza el espacio: Ayuda a que el diseño del formulario se vea bien en cualquier dispositivo, especialmente en pantallas pequeñas.

¿Cómo se implementó?
La idea surgió para hacer el formulario de contacto menos abrumador visualmente.

Al principio, probamos solo con texto, pero eso rompía el enlace de la política de privacidad.
La solución final fue trabajar con el contenido HTML completo del texto (innerHTML). Así, al expandir el texto, se restaura el HTML original, y el enlace de la "Política de Privacidad" sigue funcionando.
