🌍 WildSoul – Travel Experiences (React)

WildSoul es una aplicación web desarrollada con React que simula una plataforma de viajes de aventura.
Este proyecto forma parte de un ejercicio académico cuyo objetivo principal es practicar:

Componentes en React

Hooks personalizados

Context API

Gestión de estado global

Persistencia con localStorage

Navegación con React Router

Este proyecto es solo frontend y no utiliza backend ni base de datos.

Tecnologías utilizadas:

React

React Router DOM

Context API

Custom Hooks

JavaScript (ES6+)

CSS

📁 Estructura del proyecto
src/
├── components/        
├── context/           
├── hooks/             
├── pages/             
├── api/            
├── App.jsx
├── main.jsx
└── index.css

Gestión del carrito (arquitectura)

La gestión del carrito sigue una arquitectura separada y limpia:

🔹 CartProvider (Context)

Almacena el estado del carrito

Persiste los datos en localStorage

No contiene lógica de negocio

🔹 useCart (Custom Hook)

Encapsula toda la lógica del carrito:

Añadir viaje

Eliminar viaje

Comprar viaje

Facilita la reutilización de la lógica en cualquier componente

Este enfoque sigue buenas prácticas de React y una correcta separación de responsabilidades.

🛒 Funcionalidades principales

Visualización de viajes

Añadir viajes al carrito

Eliminar viajes del carrito

Simulación de compra

Persistencia del carrito entre recargas

Navegación entre páginas

▶️ Cómo ejecutar el proyecto

Clona el repositorio:

git clone <url-del-repositorio>


Instala las dependencias:

npm install


Ejecuta el proyecto:

npm run dev


Abre en el navegador:

http://localhost:5173

Contexto académico:

Este proyecto ha sido desarrollado con fines educativos, como base inicial para un proyecto más avanzado con backend.
El foco principal está en el correcto uso de React, Context API y custom hooks.

Autor:

Proyecto desarrollado por: Lorena Ruiz Lara
Curso de Desarrollo Full Stack – React