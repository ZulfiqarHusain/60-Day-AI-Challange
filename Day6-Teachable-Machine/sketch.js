let classifier;
let video;
let label = "Model Loading...";

function preload() {
  // Direct filename without any extra slash
  classifier = ml5.imageClassifier('model.json');
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('canvas-container');
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  classifyVideo();
}

function draw() {
  background(0);
  image(video, 0, 0);
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
  document.getElementById('status').innerText = "AI Online";
  classifyVideo();
}
