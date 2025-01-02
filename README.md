# Proyecto de Graduación

## Diseño de prototipo de pasarela de pago utilizando realidad aumentada en el sector alimenticio de la economía informal de Guatemala


El proyecto de graduación está basado en la creación del prototipo de una paserla de pago móvil enfocada al sector informal. Pretende capturar la naturaleza de una transacción en efectivo y ejecutarla por medio de software utilizando elementos de usabilidad y animaciones de realidad aumentada. El proyecto está construido con React Native, Expo, PostgreSQL y Firebase.

#### Fredy Velásquez 201011

### Requisitos previos

1. Descargar la aplicación Expo desde cualquier tienda de aplicaciones como App Store o Google Play. En esta aplicación es en donde se ejecuta el prototipo de pasarela de pago.

2. Crear una cuenta en Expo con correo electrónico

### Comandos para instalar el proyecto

1. Clonar el repositorio de forma local con el comando `git clone` + la URL del repositorio en donde se encuentra este código.

1. Ingresar a la carpeta /src, dentro ejecutar el comando `npm i`. Esto instala todas las dependencias para el front-end.

2. Ejecutar el comando `npx expo start`. Esto corre la aplicación móvil. Seleccionar la opción de emulador o el dispositivo físico con el que se quiere correr la aplicación.

3. Comenzar la navegación en la aplicación, empezando por crear una cuenta en la app.

4. Ingresar a la carpeta /payment-backend y ejecutar el comando `npm i`. Esto instala todas las dependencias para el back-end.

5. En la misma carpeta /payment-backend ejecutar `node server.js` esto corre el servidor que permite la ejecución de la lógica de la aplicación.

### Variables de entorno

Las variables de entorno ya están configuradas y apuntan a Firebase el cual maneja varios procesos lógicos en la app, entre ellos la autenticación. Sin embargo, los requerimientos para la base de datos en PostgreSQL se deben de configurar en /payment-backend/server con los datos de la base de datos creada.

### Tests

Para ejecutar las pruebas unitarias y de integración basta con ejecutar `npm test`. Este comando ejecutará todos los tests. 

Para las pruebas automatizadas ejecutar `npx cypress open`. Este comando abrirá el navegador y se ejecutarán las pruebas elaboradas.


### Video

[Demo](./demo/DemoMP4.mp4)
[DemoYT](https://youtube.com/shorts/GvxdaInsqes)

### Documento

[Documento](./docs/informe_final.pdf)

