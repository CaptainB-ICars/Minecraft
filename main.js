var canvas=new fabric.Canvas("myCanvas");


block_width=30;
block_height=30;


player_x=10;
player_y=10;
var player_object="";


function player_update()
{
    fabric.Image.fromURL("skin1.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_height);
        block_object.scaleToHeight(block_width);
        block_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_object);
    });
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(keyPressed=='38')
    {
        Up();
    }

    if(keyPressed=='40')
    {
        Down();
    }
    
    if(keyPressed=='37')
    {
        left();
    }
    
    if(keyPressed=='39')
    {
        Right();
    }


    if(keyPressed=='66')
    {
        new_image('black.png');
    }

    if(keyPressed=='68')
    {
        new_image('dimond.png');
    }
    
    if(keyPressed=='70')
    {
        new_image('fence.png');
    }

    if(keyPressed=='71')
    {
        new_image('ground.png');
    }
    
    if(keyPressed=='72')
    {
        new_image('hay.png');
    }
    
    if(keyPressed=='81')
    {
        new_image('quartz.png');
    }
    
    if(keyPressed=='82')
    {
        new_image('red.png');
    }
    
    if(keyPressed=='')
    {
        new_image('skin1.png');
    }
    
    if(keyPressed=='84')
    {
        new_image('tnt.png');
    }
    
    if(keyPressed=='87')
    {
        new_image('wood.png');
    }
}


function Up()
{
    if(player_y>=0)
    {
        player_y=player_y-30;
        canvas.remove(player_object);
        player_update();
    }

}

function Down()
{
    if(player_y<=650)
    {
        player_y=player_y+30;
        canvas.remove(player_object);
        player_update();
    }

}

function Right()
{
    if(player_x<=900)
    {
        player_x=player_x+30;
        canvas.remove(player_object);
        player_update();
    }

}

function left()
{
    if(player_x>=0)
    {
        player_x=player_x-30;
        canvas.remove(player_object);
        player_update();
    }

}






