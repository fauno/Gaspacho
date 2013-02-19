#!/bin/sh
#
#	le agrega un callback a los json rotos
#

echo "Content-type: text/javascript"
echo 
echo "Resultados($(wget $QUERY_STRING -U "$HTTP_USER_AGENT" --no-check-certificate -qO-));"

exit 

Quehaceres:
	- Hacer que muestre json la para lista de archivos (Descargas, videos, imagenes, etc)
		- genere la miniatura
	- Filtro para q no manden codigos raros :P
	- Hacer que no sea tan bestia

ejemplos:
	`/json/?http://buscador/search?q=perrod&output=json`
	`/json/?https://isohunt.com/js/json.php?ihq=ubuntu&start=21&rows=20&sort=seeds`


PD: Si, si, esto seguro puede ser hacer mucho mejor
