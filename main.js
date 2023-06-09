noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup ()  
{
video=createCapture (VIDEO);
video.size(550,500);

canvas=createCanvas(550,500);
canvas.position(560, 150);

poseNet=ml5.poseNet(video,modeLoaded);
poseNet.on('pose', gotPoses);
}

function modeLoaded ()
{
    console.log('posesNet esta inicializado');
}

function gotPoses (results) {
    if(results.length >0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results [0].pose.nose.y;
    console.log("noseX= "+noseX+" noseY= "+noseY);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);


    console.log("leftWristX= " +leftWristX+" rightWristX= "+rightWristX)
}
}
function draw ()  {
    background('#6A5ACD');

    document.getElementById("square_size") .innerHTML="el ancho y el alto del cuadrado sera "+difference+"px";

    fill('#7B68EE');
    stroke('#7B68EE');
    square(noseX,noseY,difference);
}

