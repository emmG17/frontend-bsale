# frontend-bsale
**Tienda en línea**

Esta es una página web que permite a los usuarios visualizar los productos disponibles, seleccionarlos por categoría y encontrarlos mediante barra de búsqueda.
Se ocuparon las siguientes tecnologías en la construcción de esta web:
* HTML
* CSS
* Javascript
* Bootstrap 5
* Vite

***
## Javascript

Se utilizaron modulos de Javascript para crear componentes reutilizables a través de la aplicación para facilitar el desarrollo y mantenimiento de la aplicación web.
Los modulos que se encuentran dentro del directorio Components son:
### Category.js

Crea un elemento de la lista de categorías
### Product.js

Crea una tarjeta que permita visualizar la información completa de un producto (nombre, imagen, precio, descuento)

### ProductModal.js

Crea una representación modal de un producto, reutiliza la tarjeta obtenida de Product.

### Store.js

Provee una serie de funciones que permite obtener información desde la base de datos sobre productos y categorías.

### helpers/TitleCase.js

Da formato al texto para que cada palabra comience con mayúscula.

Para empaquetar los modulos de Javascript se utilizó Vite.

***

## Estilo

Para agilizar el desarrollo del diseño de la interfaz de usuario se utilizaron elementos de Bootstrap, estos permiten agregar propiedades y responsividad de forma sencilla.
En style.css se sobreescribieron propiedades de Bootstrap y se añadieron nuevas para permitir una representación visual agradable.

