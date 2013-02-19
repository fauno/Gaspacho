	if (tipo == 'Mapas') {

		var fileref = document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", "js/Mapas.js");
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}


	if ( busqueda ) {

		// base busqueda
		var fileref = document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", "js/BusquedaArchiveOrg.js");
		document.getElementsByTagName("head")[0].appendChild(fileref);

		// busca torrents
		var fileref = document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", "js/IsoHunt.js");
		document.getElementsByTagName("head")[0].appendChild(fileref);

/*
		var fileref = document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", "https://archive.org/advancedsearch.php?q="+busqueda+"&output=json&callback=BusquedaArchiveOrg&rows=30");
		document.getElementsByTagName("head")[0].appendChild(fileref);


		// seeks
		var fileref = document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", "js/Seeks.js");
		document.getElementsByTagName("head")[0].appendChild(fileref);

*/

	}
