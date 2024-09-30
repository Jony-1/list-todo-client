# list-todo-client
Este proyecto es un pequeño aplicativo que permite gestionar una lista de tareas pendientes (to-do list) usando una arquitectura cliente-servidor. La interfaz del cliente está desarrollada con React.js, y el servidor backend está desarrollado con Flask.


# Aplicación de Lista de Tareas (To-Do List)

Este proyecto es una aplicación web de lista de tareas (To-Do List) desarrollada usando una arquitectura cliente-servidor. El cliente está construido con **React.js** y el servidor backend está hecho con **Flask** en **Python**. La aplicación permite agregar, eliminar y visualizar tareas a través de una interfaz web amigable.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```
todo-client/
├── node_modules/
├── public/
├── src/
│   └── App.js            # Código principal del cliente React
├── app.py                # Código del servidor Flask
├── README.md             # Este archivo
├── package.json          # Dependencias del proyecto React
├── package-lock.json
└── ...
```

## Instalación y Configuración

### Requisitos Previos

Para ejecutar esta aplicación necesitas tener instalados los siguientes componentes:

- **Node.js** y **npm** (para ejecutar el cliente React).
- **Python 3** y **Flask** (para ejecutar el servidor backend).

### Paso 1: Instalación de las Dependencias del Cliente (React)

Primero, navega al directorio raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias de React:

```bash
npm install
```

### Paso 2: Instalación de Flask para el Servidor

Si no tienes Flask instalado, instálalo con el siguiente comando usando `pip`:

```bash
pip install Flask
```

También necesitas instalar el paquete `flask-cors` para manejar solicitudes CORS (Cross-Origin Resource Sharing):

```bash
pip install flask-cors
```

### Paso 3: Ejecución del Servidor Flask

Una vez instaladas las dependencias, puedes ejecutar el servidor Flask desde el archivo `app.py`. En el directorio raíz del proyecto, ejecuta:

```bash
python app.py
```

Esto iniciará el servidor Flask en `http://localhost:5000`, el cual se encargará de gestionar las solicitudes de la aplicación React.

### Paso 4: Ejecución del Cliente React

Con el servidor Flask corriendo, abre una nueva terminal en el mismo directorio y ejecuta la aplicación React con:

```bash
npm start
```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

### Paso 5: Probar la Aplicación

La aplicación estará disponible en tu navegador. Podrás:
- **Agregar tareas** usando el campo de texto y el botón "Add Task".
- **Eliminar tareas** presionando el botón "Delete" junto a cada tarea.

## Funcionalidades

- **Agregar tareas**: Puedes agregar nuevas tareas a la lista.
- **Eliminar tareas**: Puedes eliminar una tarea de la lista por su ID.
- **Listar tareas**: Muestra todas las tareas que has agregado.

## Detalles Técnicos

### Backend (Servidor Flask)

El servidor Flask gestiona las siguientes rutas:

- `GET /tasks`: Devuelve la lista de tareas en formato JSON.
- `POST /tasks`: Permite agregar una nueva tarea.
- `DELETE /tasks/<id>`: Permite eliminar una tarea por su ID.

### Frontend (Cliente React.js)

El frontend está desarrollado en **React.js**. Se comunica con el servidor Flask utilizando **Fetch API** para realizar las operaciones de agregar, eliminar y listar tareas.

## Autor

Desarrollado por Jonathan para la actividad de aprendizaje individual.