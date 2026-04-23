IA_HISTORY.md — Registro de Uso de IA
Alumno/a: Fiorella Valdivia
Fecha: 23/04/2026

Prompt 1
Momento del proceso
Al principio del desarrollo, luego de acomodar mi entorno de trabajo en VS Code, necesitaba corregir los errores de semántica (la "divitis") y limpiar el documento base para empezar a estructurar bien el contenido.

Lo que le pedí a la IA
"te lo vuelvo a pasar y me ayudas con los divs" (adjuntando el código HTML inicial).

Análisis del resultado obtenido
La IA tomó un enfoque estructurado, dividiendo la corrección por secciones lógicas en lugar de darme todo el código resuelto de golpe. El resultado fue muy útil como guía paso a paso porque me permitió entender la jerarquía de las etiquetas semánticas nuevas (article, section). Como punto de partida, me sirvió muchísimo para identificar rápidamente dónde estaban los contenedores principales y poder avanzar bloque por bloque sin perderme.

Qué debí corregir manualmente y por qué
Al ir aplicando las sugerencias de la IA y reemplazando las etiquetas, me quedaron algunas etiquetas superpuestas y mal cerradas en el menú de navegación y en el pie de página. Lo detecté al revisar visualmente el código en el editor y notar que las indentaciones de las listas no coincidían y sobraban etiquetas de cierre. Técnicamente esto rompía la estructura del DOM y generaba nodos huérfanos, así que tuve que borrar los </div> residuales manualmente e indentar correctamente las etiquetas <ul>, <li> y <nav> para que la página renderizara sin errores.

Prompt 2
Momento del proceso
Al momento de separar los estilos CSS del archivo HTML principal y tratar de implementar la grilla estructural y solucionar los problemas de contraste de colores que exigía la consigna.

Lo que le pedí a la IA
Le envié una captura de pantalla de mi editor con el código CSS inicial y le pregunté: "¿asi?"

Análisis del resultado obtenido
La IA analizó la captura de pantalla y no solo evaluó mi código de CSS Grid, sino que detectó errores de sintaxis y entorno en mi espacio de trabajo. Su enfoque fue sumamente preventivo, avisándome sobre problemas estructurales antes de darme la solución del layout. El resultado fue exactamente lo que necesitaba, ya que además de explicarme cómo usar grid-template-areas, me resolvió el problema de accesibilidad ajustando los colores hexadecimales para pasar las pruebas de contraste.

Qué debí corregir manualmente y por qué
La IA me dio el bloque de código CSS correcto, pero yo había creado el archivo de estilos en mi proyecto simplemente como .css sin el nombre "style" adelante. Lo detecté porque el navegador no estaba aplicando ningún estilo al HTML, y la consola de herramientas de desarrollador no encontraba la hoja de rutas. Tuve que usar el explorador de archivos del sistema operativo para renombrar manualmente el documento a style.css y luego asegurarme de guardar los cambios para que la etiqueta <link> del HTML finalmente pudiera conectarse y aplicar el diseño.

Reflexión final
Durante el proceso, noté que al interactuar con la IA es fácil perder el control de la estructura si se copia y pega código sin revisar, lo que me llevó a errores de etiquetas cruzadas que tuve que arreglar por mi cuenta leyendo el DOM. Sin embargo, para la lógica de JavaScript y la refactorización de CSS, la IA resolvió todo muy bien a la primera, dándome código moderno sin usar variables obsoletas como var. La próxima vez cambiaría la forma en que le pido las cosas: en lugar de mandarle todo el código completo de una vez, le pasaría componentes aislados o secciones más chicas para mantener un mejor control de versiones en mi cabeza y evitar romper otras partes del proyecto.