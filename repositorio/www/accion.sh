#!/bin/sh
#
#	cgi simple para el manejo de archivos
#
#	http://www.yolinux.com/TUTORIALS/BashShellCgi.html

# poner polipo
proxy=""

# obtiene las variables del path
archivo=`echo "$QUERY_STRING" | sed -n 's/^.*archivo=\([^&]*\).*$/\1/p' | sed "s/%20/ /g"`
accion=`echo "$QUERY_STRING" | sed -n 's/^.*accion=\([^&]*\).*$/\1/p' | sed "s/%20/ /g"`

if [ "$accion" != "" ]; then
	if [ "$accion" == "borrar" ]; then
		# borra un archivo en la mediateca
		rm "/root/$archivo"

		# recrea el archivo json sin el archivo faltante
		/root/bin/descargas2json 2> /dev/null 1> /dev/null > /dev/null
	fi
	if [ "$accion" == "guardar" ]; then
		# descarga una archivo a la 
		cd "/root/Descargas"
		wget $proxy --no-check-certificate $archivo -O $(basename $archivo)
		mensaje="archivo guardado"
		/root/bin/descargas2json 2> /dev/null 1> /dev/null > /dev/null
	fi
	if [ "$accion" == "descargar" ]; then
		echo "Content-Type: application/force-download"
		echo "Content-Type: application/octet-stream"
		echo "Content-type: application/download"
		echo "Pragma: no-cache"
		echo "Cache-Control: must-revalidate, post-check=0, pre-check=0"
		echo "Content-Disposition: attachment;filename=$(basename $archivo)"
		echo 'Content-Transfer-Encoding: binary'
		echo 
		cat "/root/$archivo"
		exit
	fi
	if [ "$mensaje" != "" ]; then
		# escribe los mensajes de salida
		echo "Content-type: text/html"
		echo "Pragma: no-cache"
		echo 
		echo $mensaje
		echo "<script>parent.alert('$mensaje');</script>"
	fi
fi


exit

Quehaceres
----------

	- alert para respuesta: 'window.alert("mensaje de ejemplo");'
	- actualizar mediateca
	- 
