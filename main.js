leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

megalovania = "";
minecraft = "";

function preload(){
    megalovania = loadSound("megalovania.mp3");
    minecraft = loadSound("minecraft.mp3"); 
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    
}
function modelLoaded(){
    console.log("posenet made");
} 
function gotPoses(){
    if(results > 0)
    {
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist X = "+leftWristX+" and leftWrist Y = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+" and rightWristY = "+rightWristY);
    }
}