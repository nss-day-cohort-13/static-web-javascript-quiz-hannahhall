var grow= [];
var branchNum= document.getElementById("branches");
var leafNum= document.getElementById("leaf");
var button = document.getElementById("button");

function tree(branches, leaf) {
	if (branchNum.value==="" || leafNum.value===""){
		alert("Both fields must have a value");
		} else{
		for(j=0; j<branches-1; j++) {
			grow.unshift(" ");
		}
		grow.push(leaf);
		console.log(grow.join(""));
		for(i=0; i<branches-1; i++) {
			grow.push(leaf);
			grow.push(leaf);
			grow.shift(" ");
			console.log(grow.join(""));
		}

	}
}
function growTree (clickEvent) {
	tree(branchNum.value, leafNum.value);
}
function enterKey(e) {
	var keyCode = e.keyCode;
	if(keyCode==13) {
		tree(branchNum.value, leafNum.value);
	}
}

button.addEventListener("click", growTree);
leafNum.addEventListener("keydown", enterKey);
branchNum.addEventListener("keydown", enterKey);










