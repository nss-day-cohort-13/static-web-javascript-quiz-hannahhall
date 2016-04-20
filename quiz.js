var grow= [];

function tree(branches, leaf) {
	for(i=0; i<branches; i++) {
		 grow.push(leaf);
		 grow.unshift(" ");

		 console.log(grow.join(""));
	}

}

tree(5, "*");