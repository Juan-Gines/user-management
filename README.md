# Plantilla base - Gestión de usuarios

## Definición de entidades

-   **Usuario**: Usuario registrado en la plataforma, todos los campos son requeridos.
    -   Nombre: Mínimo de 3 caracteres y un máximo 25 (Todos los caracteres serán válidos)
    -   Apellidos: Mínimo de 4 y máximo de 50 (Todos los caracteres serán válidos)
    -   Email: Formato email válido.
    -   Contraseña: Mínimo de 10 caracteres y máximo de 25 (Al menos una minúscula, mayúscula y un número)

## Requisitos funcionales

-   El usuario podrá registrarse en la aplicación, introduciendo los datos necesarios.
-   El usuario podrá autenticarse ante la aplicación utilizando su email y contraseña.
    -   Si la autenticación es válida, la aplicación le devolverá al usuario un identificador que le servirá para demostrar su identidad ante la aplicación cuando quiera cambiar/eliminar sus datos.
-   El usuario podrá obtener todos sus datos exceptuando su contraseña, utilizando su identificador.
-   El usuario podrá actualizar su nombre y apellidos, será necesario el identificador.
-   El usuario podrá actualizar su email, será necesario el identificador y la contraseña actual.
-   El usuario podrá actualizar su contraseña, será necesario el identificador y la contraseña actual.
-   El usuario podrá eliminar todos sus datos de la plataforma, será necesario el identificador y la contraseña actual.

## Tecnologías 

- Node
