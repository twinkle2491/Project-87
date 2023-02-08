
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromUrl(get_image, function(Img) {
		blocked_image_object.scaleTowidth(block_image_width);
		blocked_image_object.scaleToHeight(block_image_height);
		blocked_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_objects);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_image('rrl.png');
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('grl.png');
		console.log("r");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('brl.png');
		console.log("r");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('yrl.png');
		console.log("r");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('prl.png');
		console.log("r");
	}
	
}

