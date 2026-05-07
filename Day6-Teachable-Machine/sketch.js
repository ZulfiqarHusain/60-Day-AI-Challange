let classifier;
let video;
let label = "Waiting...";
// GitHub Pages ka pura path taaki browser confuse na ho
let imageModelURL = 'https://zulfiqarhusain.github.io/60-Day-AI-Challange/Day6-Teachable-Machine/';

function preload() {
  // Model load ho raha hai
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('canvas-container');
  
  // Webcam start
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  classifyVideo();
}

function draw() {
  background(0);
  // Mirroring the video for natural feel
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  
  // Back to normal for text
  scale(-1, 1);
  translate(-width, 0);
  
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
  document.getElementById('status').innerText = "Object Detected: " + label;
  classifyVideo();
}
