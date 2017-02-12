var img;

onload = function(){
	img = new Image();
	img.src = "serval.png";
}

function make(){
	var canvas = document.createElement("canvas");
	canvas.width = 800;
	canvas.height = 450;
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	document.getElementById("output").innerHTML = "<img src='" + canvas.toDataURL() + "'></br>";
	
}
