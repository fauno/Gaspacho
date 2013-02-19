/*
	quitar yahoo pipe y poner un lector de json propio
	basado en https://raw.github.com/edent/Mobile-Web-Torrent/master/index.php

*/

var pipeURL = "http://pipes.yahoo.com/pipes/pipe.run?u="+
"http%3A%2F%2Fisohunt.com%2Fjs%2Fjson.php%3Fihq%3D"+
busqueda+
"%26rows=10"+
"%26sort="+
"seeds"+
"&_id=332d9216d8910ba39e6c2577fd321a6a&_render=json&_callback=?";


$.getJSON(pipeURL, function(data) {
		var listItems = "<ul class='thumbnails'>";

		$.each(data.value.items[0].items.list, function(i,item)	{

			var seeds = item.Seeds;
	            	var category = item.category;
			var comments = item.comments;
	            	var downloads = item.downloads;
			var enclosure_url = item.enclosure_url;
			var exempts = item.exempts;
			var files = item.files;
			var guid = item.guid;
			var hash = item.hash;
			var kws = item.kws;
			var leechers = item.leechers;
			var Length = item.length;
			var link = item.link;
			var original_link = item.original_link;
			var original_site = item.original_site;
			var pubDate = item.pubDate;
			var size = item.size;
			var title = item.title.replace(/(<([^>]+)>)/ig,""); // Strip tags
			var tracker = item.tracker;
			var tracker_url = item.tracker_url;
			var votes = item.votes;


			detalles = '<p>' + item.exempts + "</p>";

			detalles += '<span class="badge"><i class="icon-hdd"></i> '+ item.size+"</span>";
			detalles += '<span class="badge"><i class="icon-folder-open"></i> '+item.files+"</span>";
			if ( seeds & leechers ) {
				detalles += '<span class="badge" ><i class="icon-group"></i>' + seeds + "/" + leechers + "</span>";
			}
			detalles += '<span class="badge">'+ item.category+"</span>";

			listItems += ListaElemento (
							title,
							null, 
							detalles,
							item.enclosure_url,
							"magnet"
			);

		});
		listItems += "</ul>";
		$("#ContenidoBuscar").html(listItems);

});
