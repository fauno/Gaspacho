function ListaElemento (titulo, medio, descripcion, enlace, tipo) {

	/*
		descripcion = descripcion.replace(/(<([^>]+)>)/ig,"").substr(0,300);
		=Quehaceres=
			1) Estilizar entradas
			2) Verificar el tipo de enlace
			3) Generar miniaturas con la cache
	*/

	salida  = '<li class="row">';
	salida += '	<div class="span9">';
	salida += '		<a href="'+enlace+'" >';
	salida += '			<h3><i class="icon-' + tipo + '"></i>' + titulo + '</h3>';
	salida += '		</a>';
	// nota: quitar el align-center por bootstrap
	salida += '		<div class="span2" style="text-align: center">';
	salida += '			<a href="'+ enlace +'" >';
	if (medio) {
		salida += '<img src="' + medio + '" class="img-polaroid" width="120" height="96" />';
	} else {
		// genera miniaturas
		salida += '<img src="https://open.thumbshots.com/image.pxf?url=' + enlace + '" class="img-polaroid" width="120" height="96" />';
	}
	salida += '			</a>';
	salida += '		</div>';
	salida += '		<div class="span6">';
	salida += '			<p>' + descripcion + '</p>';
	salida += '		</div>';
	salida += '	</div>';
	salida += '</li>';

	return salida
}

function BusquedaSimpleArchiveOrg (id) {

    // http://archive.org/help/example.js
    // http://archive.org/details/FrankenberryCountChoculaTevevisionCommercial1971&output=json&callback=IAE.favorite

    str ="<ol>";
    for (var hit,i=0; hit=id.response.docs[i]; i++) {
        //------------
      var mt = typeof(hit.mediatype)=='undefined' ? '' : hit.mediatype;
      var collex = typeof(hit.collection)=='undefined' ? '' : hit.collection;
      var img = (mt.toLowerCase()=='movies'  ||  mt.toLowerCase()=='movingimage' ?
                 'movies' : (mt.toLowerCase()=='audio'  ||  mt.toLowerCase()=='sound'
                 ||  mt.toLowerCase()=='etree'  ? 'audio' : (mt.toLowerCase()=='texts' ? 'text' : '')));
      str += '<li><a href="archive.org.xsl#' + hit.identifier+'" >';
      if (img) str += '<img src="http://archive.org/images/mediatype_'+img+'.gif"/>';
      str +=  hit.title;
      str += '</a></li>';
    }
    str +="</ol>";
    $("#ContenidoBuscar").html(str);
}


function  BusquedaArchiveOrg (id) {

    	// http://archive.org/help/example.js
    	// http://archive.org/details/FrankenberryCountChoculaTevevisionCommercial1971&output=json&callback=IAE.favorite

	var str = '<ul class="thumbnails">';
	for (var hit,i=0; hit=id.response.docs[i]; i++) {
		var mt = typeof(hit.mediatype)=='undefined' ? '' : hit.mediatype;
		var collex = typeof(hit.collection)=='undefined' ? '' : hit.collection;
		var img = mt.toLowerCase()=='movies' ? 'film': mt.toLowerCase()=='movingimage' ? 'picture' : (mt.toLowerCase()=='audio'  ||  mt.toLowerCase()=='sound'||  mt.toLowerCase()=='etree'  ? 'headphones' : (mt.toLowerCase()=='texts' ? 'book' : 'question-sign'));
		if ( img != 'question-sign' ) str += ListaElemento (hit.title, "http://archive.org/download/"+hit.identifier+"/format=Animated+Gif" , hit.description, "#" , img);
	}
	str += '</ul>';
	// para el buscador        
	$("#ContenidoBuscar").html(str);
}


/*
// buscar
function buscar (texto, tipo) {
        location.href = '/archive.org.xsl?q=' + texto + ' AND mediatype:' + tipo;
}
*/
