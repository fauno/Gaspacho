/*	Gaspacho	*/

// Categoria	#categoria
categoria = location.hash.replace("#","");

// Tipo		?tipo(&|#)
tipo = location.search.replace("?","").replace(/&.*$/, '');

// busqueda	&q=busqueda(&|#)
busqueda = location.search.replace(/^.*[&|?]q=/,"").replace(/&.*$/, '');
