var img;

onload = function(){
	img = new Image();
	img.src = "serval.png";
}

function make(){
	var form = document.forms.fm;
	var sz = parseInt(form.sz.value);
	var ta = form.ta.value;
	var canvas = document.createElement("canvas");
	canvas.width = 800;
	canvas.height = 450;
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	ctx.font = ""+sz+"px"+" 'メイリオ'";
	ctx.fillStyle = "rgb(0,0,0)";
	var txts = ta.split("\n");
	for(var i=0;i<txts.length;i++)ctx.fillText(txts[i],31,225+sz+sz*i-sz*txts.length/2);
	document.getElementById("output").innerHTML = "<img src='" + canvas.toDataURL() + "'></br>";
	
}
