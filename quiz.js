var grow= [];
var branchNum= document.getElementById("branches");
var leafNum= document.getElementById("leaf");
var button = document.getElementById("button");
var input = {
	branches: "",
	leaf: ""
};
function tree(input) {
	if (input.branches==="" || input.leaf===""){
		alert("Both fields must have a value");
		} else{
		for(j=0; j<input.branches-1; j++) {
			grow.unshift(" ");
		}
		grow.push(input.leaf);
		console.log(grow.join(""));
		for(i=0; i<input.branches-1; i++) {
			grow.push(input.leaf);
			grow.push(input.leaf);
			grow.shift(" ");
			console.log(grow.join(""));
		}

	}
}
function growTree (clickEvent) {
	input.branches= branchNum.value
	input.leaf = leafNum.value
	tree(input);
}
function enterKey(e) {
	input.branches= branchNum.value
	input.leaf = leafNum.value
	var keyCode = e.keyCode;
	if(keyCode==13) {
		tree(input);
	}
}

button.addEventListener("click", growTree);
leafNum.addEventListener("keydown", enterKey);
branchNum.addEventListener("keydown", enterKey);
