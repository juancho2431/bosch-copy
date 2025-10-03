# ConfortGas - Sitio informativo

Sitio web estático en español orientado a la promoción de servicios de mantenimiento, reparación e instalación de gasodomésticos multi-marca.

## Estructura

- `index.html`: Página principal con secciones de hero, servicios, marcas aliadas, casos de éxito y formulario de contacto interactivo.
- `mantenimiento.html`: Landing page enfocada en planes de mantenimiento preventivo.
- `reparacion.html`: Landing page para el servicio de reparación correctiva.
- `venta.html`: Landing page para instalación y venta de equipos.
- `styles.css`: Estilos globales con fondos dinámicos, animaciones suaves y secciones responsivas.
- `script.js`: Manejo del formulario de contacto con validaciones, envío asíncrono y animaciones de aparición.
- `assets/logo-icon.svg` y `assets/logo-lockup.svg`: Nuevos logotipos con brillos y degradados coherentes con la identidad visual.

## Uso

Abre cualquiera de los archivos `.html` en un navegador moderno para visualizar el contenido. No se requiere configuración adicional.

## Formulario de contacto

El formulario envía la información mediante una petición `fetch` al endpoint configurado en el atributo `data-endpoint` del formulario (por defecto, `https://formsubmit.co/ajax/servicio@confortgas.com`).

1. Reemplaza el correo por el de destino deseado o por tu propio endpoint.
2. En caso de usar FormSubmit, verifica la dirección de correo para activar el formulario.
3. Si necesitas un backend propio, actualiza el atributo `data-endpoint` sin modificar la lógica de JavaScript.
