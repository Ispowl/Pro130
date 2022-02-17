song1 ="";
song2 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
scoreleftWristY = "";
scorerightWristY = "";
statusr = "";
statusr2 = "";
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log('POSENET IS INTIALIZED');
}

function draw(){
    image(video,0,0,600,400);

    fill('#FF0000');
    stroke('#FF0000');
    statusr = song1.isPlaying();
    if(scoreleftWristY > 0.2){
        song2.pause();
        song1.pause();
        circle(leftWristX,leftWristY,20);
     if(statusr = "false"){
         song1.play();
         
         document.getElementById("song").innerHTML = "Song - Harry potter theme";
    }
    }
    statusr2 = song2.isPlaying();
    if(scorerightWristY > 0.2){
        song1.pause();
        song2.pause();
        circle(rightWristX,rightWristY,20);
        if(statusr2 = "false"){
            song2.play();
            document.getElementById("song").innerHTML = "Song - Peter pan song";
        }
    }
}

function play(){
    song1.play();
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        scorerightWristY = results[0].pose.keypoints[10].score;
        scoreleftWristY = results[0].pose.keypoints[9].score;
        console.log("ScoreleftWristY = "+scoreleftWristY);
        console.log("ScorerightWristY = "+scorerightWristY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+" leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+" rightWristY = "+rightWristY);
    }
}