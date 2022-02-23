noseX = 0;
noseY = 0;

rightWristX = 0;
leftWristX = 0;
difference = 0;

Name1="";

function setup() {
    video = createCapture(VIDEO);
    video.position(18, 80);
    video.size(550, 500);
    canvas = createCanvas(550, 425);
    canvas.position(650, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Intialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Left wrist = " + leftWristX + "Right wrist = " + rightWristX);
        difference = leftWristX - rightWristX;
    }
}

function draw() {
    background("#1185ba");
    Name1=document.getElementById("My_name1").value;
    stroke("green");
    fill("yellow")
    textSize(difference);
    text(Name1,noseX,noseY);
}
