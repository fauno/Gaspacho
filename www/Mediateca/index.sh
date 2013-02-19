#!/bin/sh
#
#	Genera listas en json y text de los archivos multimedia en la cache
#	Nota: hay que borrar ',]' al final del array
#

if [ $QUERY_STRING ]; then

	TAMANIO=`echo "$QUERY_STRING" | sed -n 's/^.*tamanio=\([^&]*\).*$/\1/p' | sed "s/%20/ /g"`
	EXTENSION=`echo "$QUERY_STRING" | sed -n 's/^.*extension=\([^&]*\).*$/\1/p' | sed 's/%20/ /g; s/,/\\\|/g''`
	FORMATO=`echo "$QUERY_STRING" | sed -n 's/^.*formato=\([^&]*\).*$/\1/p' | sed "s/%20/ /g"`
	TIPO=`echo "$QUERY_STRING" | sed -n 's/^.*tipo=\([^&]*\).*$/\1/p' | sed "s/%20/ /g"`
	EXTRA=`echo "$QUERY_STRING" | sed -n 's/^.*extra=\([^&]*\).*$/\1/p' | sed "s/%20/ /g; s/%27/'/g"`

	if [ $TIPO == 'imagenes' ]; then
		EXTENSION='jpg\|png\|jpeg'
		TAMANIO='+96'
	fi
	if [ $TIPO == 'videos' ]; then
		EXTENSION='avi\|mp4\|ogg\|ogv\|mpg'
		TAMANIO='+1024'
	fi
fi

TAMANIO='+96'

cd /root/Cache

ls | while read carpeta; do
	echo $carpeta
	cd "$carpeta"
	find . -size $TAMANIO 
	sleep 1
done

exit

-exec \


sed -n "/HTTP/,/^\r$/p" * \
grep "X-Polipo-Location: .*\.\($EXTENSION\)" {} \; \
| sed 's/X-Polipo-Location:\ //'

exit
| if [ $FORMATO == 'json' ]; then
	# --------- Generador de json ------------
	echo "callback({["
	while read ARCHIVO; do
		echo $ARCHIVO
	done | xargs | sed "s/^\(.*\)$/'\1'/; s/\ '/'/g; s/,\ ]/]/"
	echo "]});"
	exit
fi
