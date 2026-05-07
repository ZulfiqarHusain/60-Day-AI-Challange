let classifier;
let video;
let label = "Model Initializing...";

function preload() {
  // Direct file names use kar rahe hain jo usi folder mein hain
  classifier = ml5.imageClassifier('./model.json');
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('canvas-holder');
  
  // Webcam chalu karo
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  classifyVideo();
}

function draw() {
  background(0);
  
  // Webcam image display (Mirrored)
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  // Label UI
  fill(0, 255, 0);
  textSize(32);
  textAlign(CENTER);
  text(label, width / 2, height - 20);
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  document.getElementById("status").innerText = "AI Status: Online";
  classifyVideo();
}
