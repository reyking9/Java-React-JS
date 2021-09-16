# FRONT-END:
## El reto consiste en crear un inventario de vacunación para empleados utilizando REACT como FRONT-END

## En primer lugar se necesita tener algún gestor de instalación instalado, en este caso se uso NPM, se instaló con el siguiente comando:
### npm install -g npm
## También se necesitará tener instalado node.js, se instalará en su página oficial dependiendo de la necesidad:
## https://nodejs.org/es/
### Para iniciar el proyecto se utiliza el comando:
## npm start
### La aplicación se ejecutará en la siguiente dirección:
## http://localhost:3000
### Se utilizó las siguientes librerías:
#### Nombre: React Bootstrap  
#### Comando de instalación: npm install react-bootstrap@next bootstrap@5.1.0
#### ------------------------------------------------------------------------
#### Nombre: Axios
#### Comando de instalación: npm install axios
#### ------------------------------------------------------------------------
#### Nombre: React-Route
#### Comando de instalación: npm install --save react-router-dom
#### ------------------------------------------------------------------------
#### Nombre: FontAwesome
#### Comandos de instalación:  npm i --save @fortawesome/fontawesome-svg-core
####                           npm install --save @fortawesome/free-solid-svg-icons
####                           npm install --save @fortawesome/react-fontawesome




# BACK END:
## El reto consiste en crear un inventario de vacunación para empleados utilizando JAVA y Spring Boot como BACK-END
## Reemmplazar datos dependiendo de su base de datos:
## spring.datasource.url=jdbc:postgresql://localhost:5432/InventarioVacuncacion
## spring.datasource.username=postgres
## spring.datasource.password=123
## spring.jpa.hibernate.dll-auto=update

## En primer lugar se necesita tener un editor de código, en este caso usaremos Apache NetBeans:
### https://netbeans.apache.org
## También se necesitará tener instalado java, el jdk:
## https://www.java.com/es/download/help/develop.html
### Para iniciar el proyecto desde Apache NetBeans, bastara con ejecutarlo desde el botón RUN
### El programa se ejecutará en 
## http://localhost:8080
### Se utilizan las siguientes rutas para la API:
#### Get (todos los usuarios)
#### http://localhost:8080/api/test/usuarios 
#### ------------------------------------------------------------------------
#### Get (búsqueda por id)
#### http://localhost:8080/api/test/usuarios/+{id}
#### ------------------------------------------------------------------------
#### Delete
#### http://localhost:8080/api/test/usuarios/+{id}
#### ------------------------------------------------------------------------
#### Post
#### http://localhost:8080/api/test/usuarios/+{id}
#### ------------------------------------------------------------------------
#### Put
#### http://localhost:8080/api/test/usuarios/+{id}
#### ------------------------------------------------------------------------
#### Datos de ejemplo en Json:
[
  {
    "id": 1,
    "cedula": "130000000",
    "nombres": "Rey Cruz",
    "apellidos": "Mera Macias",
    "email": "rey@gmail.com",
    "fechanacimiento": "12/10/1995",
    "direcciondomicilio": "Portoviejo",
    "telefonomovil": "0998888444",
    "estadovacuna": false,
    "tipovacuna": "Pfizer",
    "fechavacuna": "07/08/2021",
    "numerodosis": 2
  }
]
