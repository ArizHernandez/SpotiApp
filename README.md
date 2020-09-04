# SpotyApp
  
  ## Preview
  ### Home
![SpotiApp1](https://user-images.githubusercontent.com/37966712/92272666-35ee9a00-eea7-11ea-8629-7f114a2135c1.png)

  ## Search
![SpotiApp2](https://user-images.githubusercontent.com/37966712/92272674-3ab34e00-eea7-11ea-9f9b-c08918746b31.png)

  ## Pagina de artista
![SpotiApp3](https://user-images.githubusercontent.com/37966712/92273843-5ae40c80-eea9-11ea-815e-05229437d5d5.png)

## Pasos importates por hacer para que el programa corra correctamente:
- Recordar que antes de iniciar la aplicacion instalar los node_modules con npm install
- Tambien de cambiar el token que esta en los servicios para conseguir el token, se 
  necesita hacer una petición POST al https://accounts.spotify.com/api/token
  para esto es recomendado hacerlo con herramientas como postman.
  
  Puedes revisar la documentación de spotify para mas información
  https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow en la seccion Client **Credentials Flow**


### *Esta pagina web fue creada con fines de conocimiento.*

Este ejercicio consiste en una pagina web utilizando la api de spotify para poder mostrar
los ultimos release y tambien poder buscar tu artista preferico en el cual cada artista tiene
su propia pagina con sus canciónes mas populares y un preview de las mismas.

-------

## Mas informacion y herramientas utilizadas:
 - **Angular** ( Framework utilizado en su version 10.0.4 )
 - **SPA** ( Single Page Application )
 - **Enrutamiento** ( Nos permite navegar entre las distintas paginas sin necesidad de recargar la pagina web )
 - **Spotify API** ( Se consume la api de spotify para obtener todos los datos de los nuevos releases, 
                     realizar la busqueda e información de los artistas )
 - **ActivatedRouter** ( Nos permite obtener la informacion que se le envia a la ruta )
 
