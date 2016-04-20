var grow= [];
var branchNum= document.getElementById("branches");
var leafNum= document.getElementById("leaf");
var button = document.getElementById("button");

function tree(branches, leaf) {
	if (branchNum.value==="" || leafNum.value===""){
		alert("Both fields must have a value");
	} else {
		for(i=0; i<branches; i++) {
			grow.push(leaf);
			grow.unshift(" ");
			console.log(grow);
		}
	}
}
function growTree (clickEvent) {
	tree(branchNum.value, leafNum.value);
}

button.addEventListener("click", growTree);
leafNum.addEventListener("keydown", enterKey);
branchNum.addEventListener("keydown", enterKey);

function enterKey(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
  		tree(branchNum.value, leafNum.value);
  }
}








