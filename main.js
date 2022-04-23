function preload() {
}

function setup() {
    canvas= createCanvas(640,480);
    canvas.position(110, 250);
    video=createCapture(IMAGE);
    video.hide();

}

function draw() {
    image (0,0,640,480);
    
}

function take_snapshot() {
    save('student_name.png');
}

