#!/bin/sh
#
#	instalación de gaspacho
#

# primero instalar el firmware y 

# copy files
scp -r -o UserKnownHostsFile=/dev/null packages/*.ipk root@192.168.1.1:/root/
scp -r -o UserKnownHostsFile=/dev/null www/* root@192.168.1.1:/www/
scp -r -o UserKnownHostsFile=/dev/null setup_remote.sh root@192.168.1.1:/root/

# execute setup_remote.sh on router
ssh -o UserKnownHostsFile=/dev/null root@192.168.1.1 'chmod +x /root/setup_remote.sh; /root/setup_remote.sh'


# ---- depencias de gaspacho ----
DEPENDENCIAS=$(echo "
avahi-daemon 
mdnsd 
hotplug2 
block-mount 
kmod-scsi-core 
kmod-usb-audio 
kmod-usb-core 
kmod-usb-storage 
kmod-usb2 
kmod-fs-ext4 
kmod-gpio-button-hotplug 
kmod-input-core 
kmod-ledtrig-timer 
lua 
luac 
luci 
luci-app-firewall 
minidlna 
miniupnpd 
luci-app-minidlna 
luci-app-polipo 
luci-app-samba 
luci-app-transmission 
luci-app-upnp 
luci-i18n-spanish 
luci-lib-core 
luci-lib-fastindex 
luci-lib-ipkg 
luci-lib-lmo 
luci-lib-nixio 
luci-lib-sys 
luci-lib-web 
luci-mod-admin-core 
luci-mod-admin-full 
luci-proto-3g 
luci-proto-core 
luci-proto-ppp 
luci-sgi-cgi 
luci-sgi-uhttpd 
luci-theme-base 
luci-theme-bootstrap 
mosquitto 
mosquitto-client 
htop 
nano 
polipo 
samba36-server 
seeks 
swap-utils 
tinc 
tinyproxy 
tokyocabinet 
transmission-daemon 
transmission-web 
uci 
uhttpd 
uhttpd-mod-lua 
unzip 
vsftpd 
wget" | xargs)

echo "actualizanod repos"
opkg update

ehco "instalando"
echo $DEPENDENCIAS
opkg install $DEPENDENCIAS
