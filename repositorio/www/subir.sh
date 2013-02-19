#!/bin/sh

echo "Content-type: text/html"
echo "Pragma: no-cache"
echo ""

if [ "$CONTENT_LENGTH" != "" ]; then
	read data
	filesplit1=`echo $data | awk -F'&' '{print $1}'`

	if [ "$filesplit1" != "fileis=" ]; then
	    filename=`echo $filesplit1 | sed "s/%20/ /g" | cut -f 2 -d "="`
	fi

	echo "$QUERY_STRING_POST" > Descargas/$filename
	echo Subido
	exit
fi

echo "Algo raro ocurrio"

exit

echo "<form name=Updfw_form method=post >"
echo "$msg020"
echo "<input name='fileis' id='UpLoad' type='file'>"
echo "<br> </br>"
echo "<input name='update' \>"
echo "</form>"
