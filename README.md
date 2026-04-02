# Prueba-tecnica-Serena
Prueba tecnica full stack junior  
Este proyecto es la prueba técnica fullstack para Serena, desarrollada utilizando React en el frontend y Node.js / Express en el backend.  

## Tecnologías utilizadas
Frontend: React, Material UI, Day.js, ReactRouter, vite  
Backend: Node.js, Express  
El proyecto no presenta base de datos, simplemente archivos mockeados que simulan la carga de datos desde una BD Relacional  

## Instalación
Clonar el repositorio:  
`   git clone <URL_DEL_REPOSITORIO> `
`   cd serena                       `

### Backend
Correr los siguientes comandos:  
`    cd backend     `
`    npm install    `
    
### Frontend
Correr los siguientes comandos:  
`    cd frontend    `
`    npm install    `

## Ejecucion
### Backend
Abrir una terminal en la raiz del proyecto y correr los comandos:  
`    cd backend     `
`    cd src          `
`    node server.js  `
El backend quedara corriendo en localhost:3000  

### Frontend
Abrir una terminal en la raiz del proyecto y correr los comandos:  
`    cd backend     `
`    node server.js `
El frontend quedara corriendo en localhost:5173  

## Estructura del repositorio
`PRUEBA-TECNICA-SERENA/`
`├── backend/`
`│   ├── src/`
`│   │   ├── controllers/   # Lógica de negocio`
`│   │   ├── data/          # Datos estáticos o seed`
`│   │   ├── DTO/           # Objetos de transferencia de datos`
`│   │   ├── models/        # Modelos de la base de datos`
`│   │   ├── repository/    # Acceso y consultas a la base de datos`
`│   │   ├── routes/        # Rutas de la API`
`│   │   └── services/      # Lógica adicional o utilidades`
`│   │       └── pruebajs.js`
`│   ├── package.json`
`│   └── server.js`
`├── frontend/`
`│   ├── public/            # Archivos estáticos`
`│   ├── src/`
`│   │   ├── components/    # Componentes React reutilizables`
`│   │   ├── services/      # Funciones para consumir APIs`
`│   │   ├── App.jsx`
`│   │   ├── App.css`
`│   │   ├── index.css`
`│   │   ├── main.jsx`
`│   │   └── index.html`
`│   ├── package.json`
`│   └── vite.config.js`
`└── README.md`

## Objetivos alcanzados
### Backend
    -Definición de rutas RESTful solicitadas.  
    -Implementación de controladores para manejar la lógica de negocio.  
    -Organización de código mediante repository y servicios para separación de responsabilidades.  
    -Modelado de entidades y DTOs para manejo claro de datos.  
    -Manejo de datos simulados (JSON) y preparación para integración con base de datos real.  

### Frontend
    -Navegación entre páginas con React Router.  
    -Maquetacion de todas las paginas necesarias para la prueba.  
    -Aplicacion de hojas de estilo.  
    -Integracion con componentes de MaterialUI  

## Objetivos no alcanzados
### Backend
Considero que cumpli con todos los requisitos planteados para el backend   

### Frontend
    -Lograr un diseño 100% responsive.  
    -Terminar integracion de backend con el frontend para la muestra de los turnos disponibles por psicologo  
    -Terminar integracion de backend con el frontend para la reserva de sesiones  
    -Termina integracion de backend con el frontend para la consultas de sesiones reservadas  

## Plan a seguir  
Se explicara cuales eran las estrategias a tomar para los objetivos no alcanzados.  
### Integracion para muestra de agenda  
El pipeline que estaba siguiendo era el siguiente:  
1. Obtener las fechas desde el backend para un psicologo en particular (hecho)  
2. Guardar la fecha y hora del DatePicker y el TimePicker de MaterialUI (hecho)  
3. Extraer de la agenda recuperada desde el backend los turnos del dia que seleccionamos en el datePicker, comparandolas en formato utc (hecho)  
4. Guardar en un useMemo los turnos ocupados para la fecha seleccionada del DatePicker (hecho)  
5. Implementar la funcion shouldDisableTime que permite excluir horarios para la selccion en el timePicker. Esto se iba a realizar comparando las horas disponibles con las horas ocupadas almacenadas en los turnos del useMemo (falta)  
Para el manejo de las fechas se estaba utilizando la libreria dayJs  

### Integracion para reseva de sesion
El pipeline propuesto es el siguiente:  
1. Obtener fechas y horas de los pickers.  
2. transformarlas a formato utc  
3. obtener el id del empleado, psicologo y turno del psicologo  
4. Hacer el POST al servidor  

### Integracion para muestra de sesiones reservadas
pipeline propuesto:  
1. Obtener sesiones reservadas del usuario con una consulta GET  
2. Mostrar las consultas en la tabla  

## Nota personal
Mi experiencia se centra principalmente en desarrollo backend con Java y Spring Boot. Por este motivo, al recibir la prueba solicitando el uso de Express, primero tuve que aprender el framework, lo que redujo el tiempo disponible para completar el proyecto.  
 
## Contacto
Quedo atento a cualquier consulta, dejo mis lineas de contacto:   
mail: fabricioquinteros@gmail.com  
whatsapp: +54 9 3804 583529  
Linkedin: https://www.linkedin.com/in/fabricioquinteros/   
portfolio: https://portfolio-nu-one-69.vercel.app/  

