d3.select("body").style("background-color", "gray");

(function() {
	//var width = 960,
		//height = 500,
	var width = screen.width*0.9,
		height = screen.height*0.8,
		duration = 50,
		root = {},
		data = [root];
	var timeout = 30000;
	var radius = Math.min(width, height)/1.5;
	var timer = setInterval(update, timeout);

var tree = d3.layout.tree()
    .size([360, radius - 120])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

	var vis = d3.select("#chart").append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
    .attr("transform", "translate(" + width/2 + "," + height/2 + ")");
		//.attr("transform", "translate(10, 10)");

	if(0){
		vis.selectAll("circle")
			.data(tree(root))
			.enter().append("circle")
			.attr("class", "node")
			.attr("r", 3.5)
			.attr("cx", x)
			.attr("cy", y);
	}else{
		vis.selectAll("text")
			.data(tree(root))
			.enter().append("text")
			.attr("class", "node")
			.attr("x", x)
			.attr("y", y);
	}

	function proc_hierarchy(node, topic, topics, retain){
		if(!node) return;
		if(node.ts){
			node.ts = (+new Date)+timeout;
		}
		if(topics.length > 0){
			var sliced = topics.slice(1, topics.length);

			if(node.children){
				for(i=0;i<node.children.length;i++){
					if(topics[0] == node.children[i].hier){
						/* We have already added this hier. */
						proc_hierarchy(node.children[i], topic, sliced, retain);
						//break;
						return;
					}
				}
				/* No matching child */
				var did = topic.split("/");
				did = did.slice(0, did.length-topics.length+1).join("/");
				var d = {id: did, hier: topics[0], ts: (+new Date)+timeout};
				var c = node.children.push(d);
				data.push(d);
				proc_hierarchy(c[0], topic, sliced, retain);
			}else{
				/* No child. */
				var did = topic.split("/");
				did = did.slice(0, did.length-topics.length+1).join("/");
				var d = {id: did, hier: topics[0], ts: (+new Date)+timeout};
				console.log("ts: "+d.ts);
				node.children = [d];
				data.push(d);
				var c = node.children;
				proc_hierarchy(c[0], topic, sliced, retain);
			}
		}
	};

	function update(){
		// Compute the new tree layout. We'll stash the old layout in the data.
		var nodes = tree.nodes(root);

		var now=+new Date;
		console.log("now: "+now + " len: "+data.length);
		for(var i=data.length-1;i>=0; i--){
			if(now > data[i].ts){
				if(data[i].children && data[i].children.length>0){
				}else{
					if(data[i].parent){
						data[i].parent.children.pop(data[i]);
					}
					data.splice(i, 1);
					console.log(i);
				}
			}
		}
		if(1){
			// Update the nodes…
			if(0){
				var node = vis.selectAll("text.node")
					.data(nodes, function(d) { return d.id; });

			// Enter any new nodes at the parent's previous position.
				node.enter().append("text")
					.attr("x", function(d) { return d.x0; })
					.attr("y", function(d) { return d.y0; })
					.text(function(d) { return d.hier; });
				node.exit().remove();
			}else{
				var node = vis.selectAll("circle.node")
					.data(nodes, function(d) { return d.id; });
				//node.enter().append("circle")
					//.attr("r", 3.5)
					//.attr("cx", function(d) { return d.parent.x0; })
					//.attr("cy", function(d) { return d.parent.y0; });

				node.exit().remove();
			}
		}else{
			var node = vis.selectAll("g.node")
				.data(nodes)
				.enter().append("g")
				.attr("class", "node")
				.attr("transform", function(d) {
					if(d.parent){
						return "translate(" + d.parent.y + "," + d.parent.x + ")";
					}else{
						return "translate(" + d.y + "," + d.x + ")"; }})

			node.append("circle")
				.attr("r", 4.5);

			node.append("text")
				.attr("dx", 8)
				.attr("dy", 3)
				.attr("text-anchor", "start")
				.text(function(d) { return d.id; });
		}

		// Transition nodes to their new position.
		node.transition()
			.duration(duration)
			.attr("cx", x)
			.attr("cy", y);

		// Update the links…
		var link = vis.selectAll("path.link")
			.data(tree.links(nodes), function(d) { return d.target.id; });

		// Enter any new links at the parent's previous position.
		link.enter().insert("path", "circle")
			.attr("class", "link")
			.attr("d", function(d) {
				var o = {x: d.source.x0, y: d.source.y0};
				return diagonal({source: o, target: o});
			});

		// Transition links to their new position.
		link.transition()
			.duration(duration)
			.attr("d", diagonal);
		link.exit().remove();
	};

	var mosq = new Mosquitto();
	mosq.onmessage = function(topic, payload, qos, retain){
		if (retain || data.length >= 400) return;

		var d = {id: topic};
		var topics = topic.split("/");
		proc_hierarchy(root, topic, topics, retain);
		update();
	};
	mosq.connect("ws://broker.mqttdashboard.com");
	mosq.subscribe("#", 0);

function x(d) {
	return d.x0 = d.x;
}

function y(d) {
	return d.y0 = d.y;
}

}).call(this);

