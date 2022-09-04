# Tipos de peticiones

* **GET:** : El método GET solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.

* **POST:** El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.

* **PUT:** El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

* **HEAD:** El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.

* **DELETE:** El método DELETE borra un recurso en específico.

* **CONNECT:** El método CONNECT establece un túnel hacia el servidor identificado por el recurso.

* **OPTIONS:** El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.

* **TRACE:**El método TRACE realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

* **PATCH:** El método PATCH es utilizado para aplicar modificaciones parciales a un recurso.

# Codigos de Respuesta


* **Respuestas informativas** (100–199)

*  **Respuestas satisfactorias** (200–299)

*  **Redirecciones** (300–399)

*  **Errores de los clientes** (400–499)

*  **Errores de los servidores** (500–599).

# Respuestas Sastifactorias

* **200 OK:**
    La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP

* **201 Created:**
    La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello. Ésta es típicamente la respuesta enviada después de una petición PUT.

* **202 Accepted:**
    La solicitud se ha recibido, pero aún no se ha actuado. Es una petición "sin compromiso", lo que significa que no hay manera en HTTP que permite enviar una respuesta asíncrona que indique el resultado del procesamiento de la solicitud. Está pensado para los casos en que otro proceso o servidor maneja la solicitud, o para el procesamiento por lotes.

# Errores del Cliente

* **400 Bad Request:**
    Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.

* **401 Unauthorized:**
    Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.

* **402 Payment Required:**
    Este código de respuesta está reservado para futuros usos. El objetivo inicial de crear este código fue para ser utilizado en sistemas digitales de pagos. Sin embargo, no está siendo usado actualmente.

* **403 Forbidden:**
    El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.

* **404 Not Found**
    El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.

# Errores del Servidor

* **500 Internal Server Error:**
    El servidor ha encontrado una situación que no sabe cómo manejarla.

* **501 Not Implemented (en-US)**
    El método solicitado no está soportado por el servidor y no puede ser manejado. Los únicos métodos que los servidores requieren soporte (y por lo tanto no deben retornar este código) son GET y HEAD.

* **502 Bad Gateway**
    Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.