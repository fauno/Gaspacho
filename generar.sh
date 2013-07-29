#!/bin/bash

pandoc -f markdown \
	-c css/markdown.css \
	--standalone \
	-t html5 \
	index.md \
	-o index.html

