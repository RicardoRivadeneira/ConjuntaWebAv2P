# Bodega RJ

## Características Implementadas

Este proyecto incluye diversas características diseñadas para ofrecer una experiencia de usuario robusta y funcionalidades completas para la gestión de productos, tales como:

- **Visualización de Productos**: Implementación de una tabla responsiva para mostrar productos almacenados en Firebase.
- **CRUD de Productos**: Capacidades completas para crear, leer, actualizar y eliminar productos desde una interfaz de usuario intuitiva.
- **Interfaz de Usuario Mejorada**: Uso de Tailwind CSS para estilos mejorados y responsivos adaptados a diferentes dispositivos.
- **Edición de Productos**: Integración de un modal para facilitar la edición de productos sin necesidad de navegar fuera de la página actual.
- **Eliminación de Productos**: Funcionalidad para eliminar productos directamente desde la interfaz de usuario con confirmación para evitar eliminaciones accidentales.

# Configuración y Desarrollo del Proyecto de Inventario

Este documento proporciona una visión general de cómo se configuró y desarrolló el proyecto de inventario, detallando el uso de tecnologías específicas como Vite, Firebase, Tailwind CSS, Axios, y React Router Dom.

## Configuración del Proyecto

### Vite

El proyecto se inicializó utilizando Vite, seleccionado por su eficiencia y rapidez en el entorno de desarrollo para aplicaciones de React. Vite ofrece una experiencia de desarrollo mejorada con recarga rápida de módulos y una configuración optimizada fuera de la caja, lo cual acelera significativamente el tiempo de desarrollo.

### Firebase

Para el backend, se optó por Firebase debido a su amplio conjunto de herramientas y servicios que facilitan el desarrollo de aplicaciones web. Firebase proporciona soluciones integradas para la base de datos (Firestore), la autenticación de usuarios, el almacenamiento en la nube, y más, lo que nos permitió centrarnos en la lógica del negocio sin preocuparnos por la infraestructura del backend.

## Desarrollo del Front-End

Se implementaron vistas y componentes React para manejar las operaciones del inventario, siguiendo principios de diseño responsivo y UX/UI para garantizar una experiencia de usuario fluida y accesible en diferentes dispositivos.

### Tailwind CSS

Para el estilizado de la aplicación, se integró Tailwind CSS. Esta herramienta permitió aplicar estilos de manera eficiente con clases de utilidad directamente en los componentes, facilitando la creación de una interfaz coherente y personalizable.

## Integración con el Backend

Utilizando las API de Firebase, se configuró la autenticación de usuarios y la gestión de datos del inventario. Esto incluyó operaciones CRUD (crear, leer, actualizar, eliminar) para los productos del inventario, aprovechando las capacidades en tiempo real de Firestore.

## Consumo de Servicios Web

### Axios

Para comunicarse con servicios web externos, se utilizó Axios, una biblioteca cliente HTTP basada en promesas que simplifica las solicitudes HTTP. Aunque el proyecto se centró en Firebase, Axios está disponible para integraciones futuras que requieran consumir APIs REST.

### React Router Dom

Se implementó React Router Dom para gestionar la navegación entre las distintas vistas de la aplicación, permitiendo una experiencia de usuario fluida y sin recargas de página. Esto contribuye a la estructura SPA (Single Page Application) del proyecto.

## Seguridad Web

Se tomaron medidas para proteger la aplicación contra ataques comunes, como XSS y CSRF, y se utilizó la autenticación y autorización de Firebase para proteger rutas y acciones sensibles dentro del sistema.

Para configurar y ejecutar este proyecto, por favor siga las instrucciones detalladas proporcionadas en las secciones de configuración específicas de este documento.

## Cómo Empezar

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

### Pre-requisitos

Asegúrate de tener instalado Node.js y npm en tu sistema. Puedes verificar sus instalaciones con los siguientes comandos:
```
node --version
npm --version
```

### Instalación

1. Clona el repositorio en tu máquina local

2. Navega al directorio del proyecto e instala las dependencias necesarias: (Abre tu Visual Studio Code, Open Folder, Selecciona la carpeta descomprimida de este proyecto) o por la terminal ingresa a la carpeta descomprimida ```cd carpetaCodigo```
3. En la terminal coloca: ```npm install```
4. Inicia el servidor de desarrollo local: ```npm run dev```
5. El proyecto debería estar ahora corriendo y accesible a través de `http://localhost:5173`

### Ejecución
1. Una vez dentro de la aplicación, esta ofrecerá la pantalla de inicio en la cual se podrá loguear si dispone de una cuenta, si no es así, podrá registrarse creando una con su correo electónico y colocando una clave, o si lo desea registrarse mediante una cuenta de Google, de la misma forma si llegase a tener problemas con la contraseña puede solicitar un cambio de esta, lo cual hará que se envié a su correo un enlace en el cual podrá cambiarla.
2. Una vez ingrese con sus datos correctamente podrá acceder a la página que le dará la bienvenida y podrá tener control sobre lo que es el CRUD de la bodega, aquí podrá agregar un nuevo producto, editarlo o eliminarlo.
3. Si usted desea cerrar sesión, está el botón habilitado en la esquina superior, con lo cual podrá volver a la pagina de login, de igual forma todos los cambios realizados quedarán guradados en la base de datos de Firebase.
## Conclusión

Este proyecto demuestra una implementación efectiva de un sistema de inventario utilizando tecnologías modernas. La combinación de Vite, Firebase, Tailwind CSS, Axios, y React Router Dom proporciona una base sólida para aplicaciones web escalables y seguras.

## Elaborado por:
Ricardo Rivadeneira, Jose Imbaquinga
