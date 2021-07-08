var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x =10;
player_y =10;
var player_object="";
function player_update()
{
    fabric.Image.formURL("player.png", function(Img){
    player_object =Img;
    
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    });
}
var block_object="";
function new_image(get_image)
{
    fabric.Image.formURL(get_image, function(Img){
    block_object =Img;
    
    block_object.scaleToWidth(block_image_width);
    block_object.scaleToHeight(block_image_height);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object);
    });
}