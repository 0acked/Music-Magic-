leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
leftWristScore = 0;
rightWrist

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
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000"); 

    if(rightWristScore > 0.2){
        circle(rightWristX,rightWristY,20);
        megalovania.stop();

        if(minecraft.isPlaying(false)){
            minecraft.play();
            document.getElementById("song").index.HTML = "Playing - Minecraft Music"
        }
    }

if (leftWristScore > 0.2)
{
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " +volume;
    song.setVolume(volume);
}

    
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

        rightWristScore = results[0].pose.keypoints[10].score;
        leftWristScore = results[0].pose.keypoints[9].score;
    }
}