// basado en https://raw.github.com/edent/Mobile-Web-Torrent/master/index.php
/*
	quitar yahoo pipe y poner un lector de json propio

*/
$("#target").submit(function() {

			//	Clear the list
			$("ul").empty();
			
			//	Get the contents of the search box
			var searchTerm = $("#searchField").val();
			
			//	Get the sort parameter
			var sortBy = $(":checked").val();

			//	Display a pop up telling the user what they're searching for
			$(	"<div class='ui-loader ui-overlay-shadow ui-body-b ui-corner-all' id='popup'>"+
					"<h1>Your phone is now searching for \""+searchTerm+"\".</h1>"+
					"<h1>Sorting by "+sortBy+".</h1>"+
					"<span class='ui-icon ui-icon-loading spin'></span>"+
				"</div>")
				.css({ "display": "block", "opacity": 0.96, "top": $(window).scrollTop() + 100 })
				.appendTo( $.mobile.pageContainer )
				.delay( 5000 )
				.fadeOut( 400, function(){
				
				//	The popup is dismissed once the getJSON has finished
				//$(this).remove();
				}
			);

			//cue the page loader 			
			//$.mobile.showPageLoadingMsg();	

			//	Construct the URL to call from Yahoo Pipes
			// http://isohunt.com/js/json.php?ihq=ubuntu
			//	http://ca.isohunt.com/forum/viewtopic.php?t=150656
			var pipeURL = "http://pipes.yahoo.com/pipes/pipe.run?u="+
									"http%3A%2F%2Fisohunt.com%2Fjs%2Fjson.php%3Fihq%3D"+
										searchTerm+
									"%26rows=10"+
										"%26sort="+
										sortBy+
									"&_id=332d9216d8910ba39e6c2577fd321a6a&_render=json&_callback=?";
			
			//	Get the JSONP and parse it
			$.getJSON(pipeURL,
				function(data)
				{
					// An Array of list items to be added to the ul
					var listItems = [];
					
					//	Loop through the results
					$.each(data.value.items[0].items.list, function(i,item)
					{
						//	Get all the properties of each result
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

						listItems.push (ListaElemento (
						title + " ("+size+")", 
						null, 
						"<b>Descripción:</b>" +
						"<p>Archivos: "+item.files+"</p>" +
						"<p>Pares: "+seeds+"/"+item.leechers+"</p>" +
						"<p>Archivos: "+item.files+"</p>",
						item.original_link,
						"magnet"));


						//	Create a set of <li></li> which can be added to the <ul></ul>
						/*
						listItems.push('<li class="ui-li ui-li-divider ui-btn ui-bar-b ui-li-has-count ui-btn-down-undefined ui-btn-up-undefined" role="heading" data-role="list-divider">'+
												'<a class="ui-link-inherit" href="'+enclosure_url+'">'+title+'</a>'+
												'<span class="ui-li-count ui-btn-up-c ui-btn-corner-all">Files: '+files+'</span>'+
											'</li>'+
											'<li class="" data-theme="c">'+
												'<div class="ui-btn-inner ui-li" aria-hidden="true">'+
													'<div class="ui-btn-text">'+
														'<p class="ui-li-aside ui-li-desc"><strong>'+pubDate+'</strong>'+
														'</p>'+
														'<h3 class="ui-li-heading">'+size+'</h3>'+
														'<p class="ui-li-desc"><strong>Seeds: '+seeds+'</strong></p>'+
														'<p class="ui-li-desc">Peers: '+leechers+'</p>'+
													'</div>'+
													'<span class="ui-icon ui-icon-arrow-r ui-icon-shadow"></span>'+
												'</div>'+
											'</li>');
						*/
						

						//	Only display 4 results

						//if ( i == 3 ) return false;
					});
					
					//	Add the listItems to the screen
					$("ul").append( listItems.join('') );
					
					//	Refresh
					$("ul").listview("refresh");
					
					//	Change the button text
					$("#searchButton").text("Search Again");
					$("#searchButton").prev('span').find('span.ui-btn-text').text("Search Again");
					
					//	Dismiss the popup
					$("#popup").remove();

				});
				
			//	Do not actually submit the form
			return false;
});
