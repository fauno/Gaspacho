/*
	Gaspacho
	Obtiene la categoria, la busqueda y tipo

*/

// #CategoriaTipo
hash = location.hash.replace("#","");

segunda=hash.replace(/^[A-Z].*[A-Z]/, '').length+1
primera=hash.length - segunda;

function Buscar () {
	alert ("buscando");
}

var categoria = hash.substr(0, primera);
var tipo = hash.substr(segunda*-1);


if (!categoria) {
	categoria = tipo
	tipo = ""
}

// busqueda	&q=busqueda(&|#)
var busqueda = location.search.replace(/^.*[&|?]q=/,"").replace(/&.*$/, '');

var fileref = document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", "js/"+categoria+".js");
document.getElementsByTagName("head")[0].appendChild(fileref);


/* Botones */

/* Captura de Formularios */

/* Alertas simples */


/* Eventos 

	Se me ocurre un evento estilo `eval(tipo())`

*/
