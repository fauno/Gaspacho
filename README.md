#Gaspacho - un router inteligente

![Gaspacho](manual/exportados/mascota_320.png)

Mini nodo para una red libre, gestor de multimedia y descargas **P2P**, con soporte para la [libreVPN](http://librevpn.org.ar).
Un router con un preconfiguracion que permita agilizar la red (cachear, sacar publicidad, indexar), guardar tus vídeos y audios, te permita descargar contenido multimedia vía p2p y reproducirlo  online.

##Como funciona

* Un portal cautivo con clave que permite el acceso a internet, el resto solo tiene permiso de **comunidad**
* El **puerto 80** tiene un proxy transparente con tinyproxy + polipo 
* Polipo redirecciona las URLs que pueden ser segura a **HTTPS**
* A la vez guarda todo el log en `/tmp/url.log` un crontab cada X cantidad de tiempo busca archivos multimedias y los guarda en otro log de archivos multimedia `/root/multimedia.log` como todo esta cacheado por polipo el usuario puede acceder a archivos almacenados en el router en cualquier momento, sin necesidad de internet.
* Todos los errores 404 son redireccionados al portal cautivo de Gaspacho
* Polipo también redirecciona los archivo **.torrent** a transmission de modo tal que se ponen a descargar automáticamente.
* Transmission al descargar los archivos los almacena en `/root/descargas`
* `/root/descargas` en accesible por todas las personas que estan conectadas al router a través de **http**, **ftp**, **samba**, **DLNA** y **p2p**
* El contenido estaría dividido en **hogar**, **comunidad** y **mundo** y depende como fuese marcado es el acceso que se les da a los usuarios que acceden a ese contenido.

###Ideas para la primera versión

* Potal cautivo (?)
* Uhttpd para visaulizar descargas
* Bloquear publiciadad (firewall + tinyproxy + polipo + tokycabrinet)
* Seeks (con el servidor web se vuelve  un poco inestable)
* Busquedas en isohunt + Transmission + redireccionamiento de polipo
* Sugerencia de archivos interesante de la navegacion (/tmp/url.log + script)
* LibreVPN
* Método de unión de nodos
* Sugerir plugin y navegador Icecat, Iceweasel, Firefox

###Manual

Para instalar las fuentes tipografías: `cd instalar; sh fuentes.sh`

##Pagina Web

Lograr que se parezca al portal cautivo de Gaspacho y el manual de usuario

##Modelo simple

Compuesto por tan solo router, si se conecta un pendrive o disco externo se habiliten las funciones de **p2p** y cacheo. La idea es tener todo el software comprimido y que se descomprima y monte automáticamente al conectar un disco.

##Hardware

* tl-wr701n
* microSD + adaptador USB a microSD

##Arte

* papercraft de la [mascota de gaspacho](manual/papercraft.svg), imprimir en dos hojas de color y mezclar entre si.

##Software

Se instaló **openWRT** sobre el router y luego se hizo un [extroot](http://wiki.openwrt.org/doc/howto/extroot) y particiones en la **microSD** para iniciar el router con mucha más memoria.

###Preconfiguración

* portal cautivo
 * presentación de contenido (seeks, icecast, configuracion, etc)
 * cookie para los MAC (cuando ponen la clave en el portal cautivo, tienen internet, si no solo muestra el contenido dentro del router)
* configuración de wifi (muy simple)

####Servicios

* ~~Transmisión de audio/video - Icecast~~ _(rechaza los videos, en audio ogg funciona perfectamente)_
* Buscador - seeks _(sobre exige el router, funciona bien con json)_

####Ajax (parche para el navegador o plugin)

* Inspecciona los enlaces 
 * si son `magnet://` o `ed2k://` sugiere descargas
 * si son `irc://` sugiere correrlo con Pidgin
 * si son audio y/o video sugiere instalar VLC
 * si una paginas parece basura sugiere unirla a bloqueadas

#####Sugerir programa

Sugerir programas por tipo de archivos, en lo posible tiene que correr en los 3 sistemas operativos.

* Video y audio - VLC
* Navegador - Mozilla Firefox
* Evince - PDF
* Calibre / FBreader - Epub
* Chats - Pidgin
* Office - LibreOffice
* Sistema operativo - GNU/Linux (?)

####Compartir archivos

* FTP - vsftp _(en nobody comparte los archivos sin permiso de lectura)_
* UPNP - ushare / minidlna (DNLA/UPNP) _(ambos parecen funcionar, pero no los pude comprobar)_
* Samba _(funciona perfectamente)_
* Webdav - lighttpd

####P2P

* Torrent - transmission _(funciona bien)_
* ED2K - amule _(no funciona, fuera de mantenimiento)_
* Compartir todo en transmision (script mas o menos hecho)
* Mostrar el contenido descargado en un gestor multimedia puede ser algo simple tipo indexado (lo tengo por la mitad)

####Comunicación

* IRC - ngircd _(funciona perfectamente)_
* mosquitto _(funciona bien)_
* Cliente web - Candy

####Proxy

* Cache y Filtros de red - Polipo y tinyproxy _(funcionan bien)_
 * Bloquear publicidad, privasida, cache, redireccionar errores y .torrent
* Anonimato - TOR (?)

####Redes

* Soporte red Local :D
 * Avahi _(problemas con mdns)_
* Soporte LibreVPN
* Soporte Redes Libres

####Nubes

* Buscador de torrent - IsoHunt
* Buscadores y embed mejorados
 * Archive Internet
 * Vimeo
 * Youtube
 * VK

## Quehaceres

* Configurar polipo de modo transparente
* Poner libreprojects en el portal cautivo
* Leaflat como Mapa
