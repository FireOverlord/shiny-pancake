noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/GpPQzXvY/download-removebg-preview.png');
}
function Switch(){
    ImgNo=0;
    ImgNo=ImgNo+1;
    if(ImgNo>1){
        ImgNo=0;
    }
    if(ImgNo=1){
        clown_nose=loadImage('https://i.postimg.cc/GpPQzXvY/download-removebg-preview.png');
    }else{
        clown_nose=loadImage('https://i.postimg.cc/Cx7CqR0H/HI-removebg-preview.png')
    }
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.assert("PoseNet has been activated");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-75;
        noseY=results[0].pose.nose.y-75;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,500,500);
    fill(255,0,0);
    stroke(255,0,0);
   // circle(noseX,noseY,20);
    image(clown_nose,noseX,noseY,150,150);
}
















































































































