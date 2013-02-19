/*

el contenido multimedia tiene que tener las clases "Imagenes" "Videos" "Audio"


*/

function MediatecaListaArchivos (url) {

	$("#ContenidoMediateca").load(url + " ol", function () {

		// decorar lista
		/*
			Convertir la lista de archivos en ejemplo:

			[icono de texto] nombre del archivo [nuevo] [muy liviano (grafico)]
			
			
		*/
		$("#ContenidoMediateca ol").addClass("thumbnails");

		$("#ContenidoMediateca li").each(function( index ) {
			texto = "['"+$(this).text()+"'],";
			texto = texto.replace("-","','").replace("modified:","','").replace("GMT","GMT','");
			//alert(texto);
			$(this).addClass("thumbnail");
			$(this).addClass("span9");

		});

		$("#ContenidoMediateca li a").each(function( index ) {
			if (url == "./Descargas" && $(this).parent().text() =="../") {
				$(this).parent().parent().remove(); 
				return; 
			}
			$(this).click(function() {
				// comprueba si es un directorio
				if ( $(this).parent().text().substr(-1,1) != "/") return
				// reemplaza los enlaces
				MediatecaListaArchivos(this.href);
				return false;
			});
			if ( $(this).parent().text() =="../") {
				$(this).html("Volver");
				return;

			}
			// agregar miniatura si no es un directorio
			$(this).parent().after('<a href="/accion.sh?archivo='+this.href+'&accion=borrar" class="close"  target="IframeOculto" onclick="$(this).parent().fadeOut();" >&times;</a>');
			$(this).parent().after('<a href="/accion.sh?archivo='+this.href+'&accion=descargar" class="close"  target="IframeOculto"><i class="icon-download"></i></a>');
		});
		$("#ContenidoMediateca li small").each(function( index ) {
			texto = $(this).text();
			if (texto.indexOf("directory") > 0) {
				$(this).hide();
			}
			$(this).addClass("");
		});
		// ajax para las miniaturas
	});
}


function callback (entrada) {

	MediatecaListaArchivos("./Descargas"); 
	return

	listItems = entrada.length + " archivos";
	listItems = "<ul class=\"thumbnails\">";
	n = 0;
	for (i in entrada) {
		n++
		if (entrada[i])	{
			listItems += "<li class=\"span2 thumbnail\" >";	
			// reemplazar por una funcion			
			listItems += "	<a href=\"" + entrada[i] + "\"  style=\"display: block;  width: 100%; text-align: center; padding: 4px;\" >";
			listItems += "		<img src=\"" + entrada[i] + "\" />";

			//listItems +=  entrada[i];
			listItems += "	</a>";
			listItems += '<div class="clearfix" ></div>';
			listItems += '<a href="/accion.sh?archivo='+entrada[i]+'&accion=borrar" class="close"  target="IframeOculto" onclick="$(this).parent().fadeOut();" >&times;</a>';
			listItems += '<a href="/accion.sh?archivo='+entrada[i]+'&accion=descargar" class="close	"  target="IframeOculto"><i class="icon-download"></i></a>';
			listItems += "</li>";

		}
		if (n > 5) break;
	}
	listItems += "</ul>";
	// agregar enlaces a las carpetas 

	listItems += "<hr />";
	
/*
//	if ( ! $("#ContenidoMediateca").html() == listItems ) {
		$("#ContenidoMediateca").html(listItems);
//	}

*/

	
}



var fileref = document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", "/estaticas/"+categoria+".js");
document.getElementsByTagName("head")[0].appendChild(fileref);
