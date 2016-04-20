var grow= [];
function tree(branches, leaf) {
	for(i=0; i<branches; i++) {
		grow.push(leaf);
		grow.unshift(" ");
		console.log(grow.join(""));
	}
}
var button = document.getElementById("button");
function growTree (clickEvent) {
	tree(document.getElementById("branches").value, document.getElementById("leaf").value);
}
button.addEventListener("click", growTree);
document.getElementById("leaf").addEventListener("keydown", enterKey, false);
function enterKey(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
  		tree(document.getElementById("branches").value, document.getElementById("leaf").value);
  }
}







