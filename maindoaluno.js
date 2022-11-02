//Crie uma referência para o canvas
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


window.addEventListener("keydown", ???);//Coloque o nome da função que irá acontecer quando o evento 'keydown' acontecer

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla do alfabeto";
	     }
		else if((keyPressed >=48 && keyPressed<=57)){ 
		numberkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla númerica";
		 }
		else if((keyPressed >=37 && keyPressed<=40 )){ 
			arrowkey();
	  		document.getElementById("d1").innerHTML="Você pressionou uma tecla Tecla Direcional";
	     }
	    else {
			specialkey();
	  		document.getElementById("d1").innerHTML="Você pressionou uma tecla especial";
		}
		
}

function aplhabetkey()
{
	img_image="alfabeto.png";
	???();//nome da função que adiciona uma imagem

}
function numberkey()
{
	img_image="número.png";
	???();//nome da função que adiciona uma imagem
}
function arrowkey()
{
	img_image="direcional.png";
	???();//nome da função que adiciona uma imagem
}
function specialkey()
{
	img_image="especial.png";
	???();//nome da função que adiciona uma imagem
}
function otherkey()
{
	img_image="otherkey.png";
	???();//nome da função que adiciona uma imagem
}
	
