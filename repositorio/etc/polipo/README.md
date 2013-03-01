## Dependencias

Polipo y tokyocabinet.


## Instalar

  cd /etc
  git clone git://ponape.com.ar/polipo-config.git polipo


## Bloquear publicidades

  /etc/polipo/forbidden-update-from-hosts-tokyo


## Agregar a la lista de bloqueo

* Para agregar un dominio (el script extrae el dominio por su cuenta)

  /etc/polipo/add-to-redirector -d http://dominio.com/?p=1

  Redirige cualquier visita a *dominio.com* hacia http://localhost/403.html

* Agregar una URL (extrae los argumentos)

  /etc/polipo/add-to-redirector -u http://dominio.com/?p=1

  Redirige cualquier visita a *http://dominio.com* hacia http://localhost/403.html

* Agregar una URL explícita

  /etc/polipo/add-to-redirector http://dominio.com/?p=1

  Redirige cualquier visita a *http://dominio.com?p=1* hacia
  http://localhost/403.html

* No procesar una URL o dominio

  /etc/polipo/add-to-redirector http://dominio.com/?p=1 nil


## Tips

El log de URLs visitadas está en */tmp/urls.log*.


## TODO

* Aplicar [Redirect Cleaner][0]

* Conversor de reglas de [HTTPS Everywhere][1]

* Aplicar [Priv3][2]. Por ahora se pueden agregar las direcciones:
  - http://www.facebook.com/plugins/like.php
  - http://www.facebook.com/plugins/likebox.php
  - http://www.facebook.com/plugins/fan.php
  - http://www.facebook.com/plugins/recommendations_bar.php
  - http://apis.google.com/js/plusone.js


[0]: https://addons.mozilla.org/en-US/firefox/addon/redirect-cleaner/
[1]: https://www.eff.org/https-everywhere
[2]: http://priv3.icsi.berkeley.edu/
