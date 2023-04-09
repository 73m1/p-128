music1 = "";
music2 = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup() {
    canvas = createCanvas(900,600);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotResults)
}

function preload() {
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function draw() {
    image(video,0,0,900,600)
}

function modelLoaded() {
    console.log("It hath begun")
}

function gotResults(results) {
    if (results.length > 0) {
        console.log(results)

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}