noseX = 30;
noseY = 30;

difference = 100;

rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,500);
    canvas.position(550,300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
    text("Hi",noseX , noseY );
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw(){
            
    textSize(difference*4/11);
    background('#2bffdc');
    text('Hi', noseX,noseY);
    document.getElementById("square_side").innerHTML = "Font Size of the text is = " + difference + "px";
}

function gotPoses(results){
    if(results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}