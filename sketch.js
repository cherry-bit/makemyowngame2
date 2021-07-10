var bg,bgImg,char,characterImage,invisibleGround,obs1Group,o1,o2,o3,v1,v2,obs1,vir1,vir1Group
function preload(){
bgImg=loadImage("images/bg.jpg");
characterImage=loadAnimation("images/running man 1.png","images/running man 2.png","images/running man 3.png");
o1=loadImage("images/OIP(1).png")
o2=loadImage("images/OIP (2).png")
o3=loadImage("images/OIP (4).png")
v1=loadImage("images/virus1.png")
v2=loadImage("images/virus2.png")
}



function setup(){
createCanvas(1200,600)
bg= createSprite(600,300,1800,800);
bg.addImage(bgImg)
bg.scale=1.5
bg.velocityX=-2;
char=createSprite(75,475,50,50);
char.addAnimation("running",characterImage);
char.scale=0.6
invisibleGround=createSprite(600,575,1200,10);
invisibleGround.visible=false;
obs1Group=createGroup();
vir1Group=createGroup();

}




function draw(){
    background("lightgreen")
    drawSprites();
    if(bg.x<230){
        bg.x=600
    }
    
    if(keyDown("space")){
        char.velocityY=-8;
    }
    char.velocityY+=0.5;
    char.collide(invisibleGround);
    obstacles()
    virus()
}
function obstacles(){
    if(frameCount%250===0){
        var obs=createSprite(1200,495,20,20);
        obs.velocityX=-9;
        obs.scale=0.7;
        obs.lifetime=134;
        obs1Group.add(obs);
        obs1=Math.round(random(1,3));
        switch(obs1){
        case 1:
            obs.addImage(o1)
            break
            case 2:
                obs.addImage(o2)
                break
                case 3:
                obs.addImage(o3)
                break
                default:
                    break
        }
    }

}

function virus(){
    if(frameCount%150===0){
        var vir=createSprite(1200,random(275,400),20,20);
        vir.velocityX=-6;
        vir.lifetime=200;
        vir1Group.add(vir);
        vir1=Math.round(random(1,2));
        vir.scale=1/7
        switch(vir1){
            case 1:
                vir.addImage(v1)
                break
                case 2:
                    vir.addImage(v2)
                    break
                    default:
                        break
        }



    }   
}