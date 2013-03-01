/*	/?tipo&q=busqueda#Buscar	*/

/*
	Quehaceres:
		- Falta crear algunas ingenierías de búsque
*/

if (tipo == "Web" || tipo == "") engines="google,yahoo,bing";
if (tipo == "Imagenes") {engines="opensearch_rss:archive-imagenes"; icono = "picture";}
if (tipo == "Videos") {engines="dailymotion,youtube,opensearch_rss:archive-videos"; icono = "film";}
if (tipo == "Audios") { engines="opensearch_rss:archive-audios"; icono = "music";}
if (tipo == "Documentos") engines="opensearch_rss:archive-documentos";
if (tipo == "Opiniones") engines="twitter,identica";
if (tipo == "Mapas") engines="dailymotion,youtube";
if (tipo == "Otros") engines="mediawiki";

var fileref = document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute(
	"src",
	"http://buscar/json/?http://192.168.1.1:8080/search?q="+busqueda+"&engines="+engines+"&output=json"
);
document.getElementsByTagName("head")[0].appendChild(fileref);

function Resultados (data) {

	listItems = "<ul class='thumbnails'>";
	$.each(data.snippets, function(i, item)  {
		if (item.title) listItems += ListaElemento (item.title, null, item.summary,item.url, icono);
	});
	listItems += "</ul>";
	$("#ContenidoBuscar").html(listItems);
}
