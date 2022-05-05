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
}
function draw(){
    image(0,0,600,500);
    
}