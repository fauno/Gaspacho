![Gaspacho](manual/exportados/tipografia.png)

![Gaspacho](manual/exportados/mascota_320.png)

## ¿Qué es Gaspacho?

**Gaspacho** es un router inalámbrico inteligente, capaz de acelerar la navegación por internet desde cualquier dispositivo _(computadoras, smart-phones, tablets, smart-tvs, etc)_. Asegura nuestra seguridad, bloquea publicidades y contenido no deseado y nos sugiere búsquedas de modo automático. A la vez, desde su página web, podemos realizar búsquedas tanto de direcciones, como de música, imágenes,y videos, y descargarlos fácilmente a nuestro dispositivo.

Adicionalmente, los Gaspachos pueden conectarse entre sí formando una red segura y cooperar, compartiendo contenidos y comunicando a sus usuarios, sin importar dónde se encuentren.

## ¿Cómo funciona? 

Al conectar nuestros dispositivos a **Gaspacho** y navegar por internet, éste almacena los contenidos relevantes como videos, audios y direcciones más visitadas y nos permite volver a verlas de modo rápido y fácil. Además, elimina publicidades y bloquea páginas maliciosas y programas espía. Todo esto mientras se asegura que toda la navegación se realice de la forma más segura disponible.

## Grado de desarrollo

### Mencione brevemente cuáles son los aspectos que aún debe solucionar para finalizar el prototipo

Solo faltan mejoras para el usuario final, afinamiento del uso del procesador y mejoras en las performance, dado que deberá permanecer todo el tiempo prendido.

### Estime el tiempo y la inversión necesarios para lograr su desarrollo completo

Hacen faltan aproximadamente 6 meses de desarrollo, sobre todo hacer pruebas de campo con usuarios sin experiencia en redes informáticas, probandolo en condiciones reales.

# Novedad

## ¿Cuál es el aspecto novedoso de este producto o proceso respecto de productos o procesos existentes?

**Gaspacho** es novedoso porque provee almacenamiento local de contenidos (caching), una funcionalidad que hasta el día de hoy sólo está disponible para grandes y medianas empresas. Además brinda funcionalidades extra como un historial de contenido multimedia y protección contra webs maliciosas.

**Gaspacho** utiliza componentes de fácil acceso y bajo costo de una forma alternativa e innovadora. Está construido integramente sobre Software Libre, permitiendo la mejora y desarrollo contínuo en el país, sin el pago de regalías o licencias, ni dependencia de terceros.

## ¿Cuál es la ventaja que resulta de su uso?

La velocidad de navegación aumenta notablemente. Esto se debe a que **Gaspacho** almacena los contenidos y a la reducción de la cantidad de publicidades.

**Gaspacho** permite compartir los contenidos multimedia que hemos visitado de manera muy rápida y sencilla con otros usuarios, otorgándole un enfoque social y grupal a nuestra experiencia en la red.

El bloqueo de contenidos maliciosos o indeseados nos defiende contra virus y programas espía.

## ¿Realizó alguna búsqueda en bases de datos de patentes, internet u otros que confirme la novedad del proyecto?

El proyecto da un enfoce innovador al uso y combinación de tecnologias ampliamente disponibles. 

Está inspirado en varios proyectos de uso alternativo de routers y el proyecto de la [FreedomBox Foundation](http://freedomboxfoundation.org/), quienes incentivan el uso y modificacion de sus proyectos por terceros de forma libre.

**Gaspacho** utiliza software libre, software de almacenamiento y filtros de contenido, los cuales también carecen de patentes e incentivan el uso y modificación por terceros. 

## ¿El desarrollo de su innovación está relacionado con su actividad laboral?

Los desarrolladores de **Gaspacho** trabajamos contínuamente en el desarrollo software libre como parte fundamental de nuestra actividad laboral. **Gaspacho** constituye una implementación de funcionalidades que estamos habituados a utilizar sobre servidores de mayor costo y de difícil acceso y configuración. Nuestro proyecto contituye otra manera de implementar las mismas funcionalidades sobre un router inalámbrico de bajo costo, de forma tal que sea accesible a un mayor número de personas.

## ¿En qué consiste su proyecto? ¿Qué problema soluciona?

**Gaspacho** es un router inalámbrico que mejora nuestra experiencia en internet acelerando la velocidad de navegación, protegiéndonos de aplicaciones maliciosas y haciendo de internet una experiencia más social y divertida.

## ¿Por qué es mejor que los existentes en el mercado?

Los routers que existen en el mercado se limitan, básicamente, a dar conectividad a internet. Gaspacho, además de ofrecer todas las funciones usuales de un router, provee un almacenamiento local, un gestor de contenido multimedia y filtros de publicidades, webs maliciosas y programas espías, haciendo que nuestra experiencia en la red sea más rápida, fácil y segura.

## ¿Cuál es la diferencia?


**Gaspacho** hace un mejor uso de los recursos del router inalámbrico y lo convierte en una pequeña computadora capaz de mejorar diferentes aspectos de la navegación por internet (velocidad, seguridad, etc.) a la vez que facilita la formación de redes seguras entre dispositivos.


## ¿Cómo funciona? 


Cuando accedemos a cualquier contenido en internet, ya sea una página o contenidos multimedia como videos o música, éstos se descargan desde el servidor a nuestra computadora pasando por el router.
Gaspacho, en su rol de almacenador local de contenido, guarda una copia de dicho contenido en su memoria externa. De esta forma, cada vez que se desee acceder al mismo contenido, se descargará directamente de la memoria externa del dispositivo, acortando así, de manera notable, el tiempo de espera para la descarga y aumentando la velocidad de navegación.

**Gaspacho** ofrece una interfaz web con un listado de los contenidos disponibles localmente, que pueden reproducirse sin tener que ser descargados de internet. Además, **Gaspacho** trae incorporadas aplicaciones que normalmente requieren el uso de internet, como traductores, mapas, listas de estaciones de radio y video, entre otras.

La comunicación entre diferentes Gaspachos se realiza utilizando conexiones seguras entre dispositivos, de establecimiento automático una vez definido el vínculo inicial.

# Fotos y imagenes.

![Vista general](https://raw.github.com/b4zz4/Gaspacho/master/fotos/PIC_0049.JPG)

![Conectado](https://raw.github.com/b4zz4/Gaspacho/master/fotos/PIC_0051.JPG)

![Conectado a la computadora](https://raw.github.com/b4zz4/Gaspacho/master/fotos/PIC_0052.JPG)

![Empaque](https://raw.github.com/b4zz4/Gaspacho/master/fotos/PIC_0199.JPG)


## Conceptos basicos del desarrollo

* Un portal cautivo con clave que permite el acceso a internet, el resto solo tiene permiso de **comunidad**
* El **puerto 80** tiene un proxy transparente con tinyproxy + polipo 
* Polipo redirecciona las URLs que pueden ser segura a **HTTPS**
* A la vez guarda todo el log en `/tmp/url.log` un crontab cada X cantidad de tiempo busca archivos multimedias y los guarda en otro log de archivos multimedia `/root/multimedia.log` como todo esta cacheado por polipo el usuario puede acceder a archivos almacenados en el router en cualquier momento, sin necesidad de internet.
* Todos los errores 404 son redireccionados al portal cautivo de Gaspacho
* Polipo también redirecciona los archivo **.torrent** a transmission de modo tal que se ponen a descargar automáticamente.
* Transmission al descargar los archivos los almacena en `/root/descargas`
* `/root/descargas` en accesible por todas las personas que estan conectadas al router a través de **http**, **ftp**, **samba**, **DLNA** y **p2p**
* El contenido estaría dividido en **hogar**, **comunidad** y **mundo** y depende como fuese marcado es el acceso que se les da a los usuarios que acceden a ese contenido.

### Ideas para el prototipo (en desarrollo)

Compuesto por tan solo router, si se conecta un pendrive o disco externo se habiliten las funciones de **p2p** y cacheo. La idea es tener todo el software comprimido y que se descomprima y monte automáticamente al conectar un disco.

* Interfaz web / Potal cautivo
 * Uhttpd 
   * visaulizar descargas
   * presentación de contenido
     * Seeks (con el servidor web se vuelve un poco inestable, se puede usar json + javascript)
     * configuracion
   * Buscadores y embed mejorados
     * Busquedas en isohunt + Transmission (redireccionamiento de polipo)
     * Archive Internet
     * Vimeo
     * Youtube
     * VK
     * leaflatjs (mapa)
  * Sugerir plugin y navegador Icecat, Iceweasel, Firefox
     * http://prism.hackcoop.com.ar/#browser-addons
  * Aplicaciones "offline" y almacenamiento tipo [unhosted](http://unhosted.org/)
 * portal cautivo
  * software apropiado
  * cookie para los MAC (cuando ponen la clave en el portal cautivo, tienen internet, si no solo muestra el contenido dentro del router)
  * configuración de la red inalambrica
* Bloquear publiciadad (firewall + tinyproxy + polipo + tokycabrinet)
* Sugerencia de archivos interesante de la navegacion (/tmp/url.log + script)
* [LibreVPN](http://librevpn.org.ar)
 * Método de unión de nodos
 * Avahi _(problemas con mdns)_
* Anonimato - TOR (?)
* Cache y Filtros de red - Polipo y tinyproxy _(funcionan bien)_
 * Bloquear publicidad, privasida, cache, redireccionar errores y .torrent
* Compartir archivos
 * FTP - vsftp _(en nobody comparte los archivos sin permiso de lectura)_
 * UPNP - ushare / minidlna (DNLA/UPNP) _(ambos parecen funcionar, pero no los pude comprobar)_
 * Samba _(funciona perfectamente)_
 * Webdav - ~~lighttpd~~
 * P2P
  * Torrent - transmission _(funciona bien)_
  * ED2K - amule _(no funciona, fuera de mantenimiento)_
  * Compartir todo en transmision (Kula ?)
  * Mostrar el contenido descargado en un gestor multimedia puede ser algo simple tipo indexado (lo tengo por la mitad)
* Ajax o plugin durante la navegación
 * Inspecciona los enlaces 
   * si son `magnet://` o `ed2k://` sugiere descargas
   * si son `irc://` sugiere correrlo con Pidgin
   * si son audio y/o video sugiere instalar VLC
   * si una paginas parece basura sugiere unirla a bloqueadas
 * Sugerir programa
   * Video y audio - VLC
   * Navegador - Mozilla Firefox
   * Evince - PDF
   * Calibre / FBreader - Epub
   * Chats - Pidgin
   * Office - LibreOffice
   * Sistema operativo - GNU/Linux (?)
* Comunicación
 * Avahi
 * IRC - ngircd _(funciona perfectamente)_
  * Cliente web - Chatzilla
 * mosquitto _(funciona bien)_

### Hardware

* tl-wr701n
 * Se instaló **openWRT** sobre el router 
* microSD y su adaptador a USB
 * [extroot](http://wiki.openwrt.org/doc/howto/extroot) y particiones en la **microSD** para iniciar el router con mucha más memoria.
* papercraft de la [mascota de gaspacho](manual/papercraft.svg), imprimir en dos hojas de color y mezclar entre si.

### Documentación

Para instalar las fuentes tipografías: `cd instalar; sh fuentes.sh`

#### Paginas web promocional

Lograr que se parezca la interfaz web de Gaspacho y el manual de usuario
