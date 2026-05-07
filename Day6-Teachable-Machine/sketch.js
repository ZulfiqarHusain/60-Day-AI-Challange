let classifier;
// Is line ko maine fix kiya hai taaki files sahi se mil sakein
let imageModelURL = './'; 

let video;
let flippedVideo;
let label = "Initializing Model...";

function preload() {
  // Model loading with explicit file name
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('canvas-container');
  
  // Webcam setup
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  classifyVideo();
}

function draw() {
  background(0);
  // Mirror output
  push();
  translate(width, 0);
  scale(-1, 1);
  if (video) {
    image(video, 0, 0, width, height);
  }
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
  document.getElementById('status').innerText = "Model Active: Detecting Object";
  classifyVideo();
}
