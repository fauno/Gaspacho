#!/bin/sh
#
#	instalación de gaspacho en el router
#

# primero instalar el firmware y extroot

echo "¿tenes que tener un extroot?"

# copiar configuraciones e instalar dependencias
scp  ../repositorio/* root@192.168.1.1:/
ssh root@192.168.1.1 'sh /root/instalar_dependencias.sh'
