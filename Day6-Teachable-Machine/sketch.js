let classifier;
let imageModelURL = './'; // Iska matlab isi folder se files uthao
let video;
let label = "";

function preload() {
  // Model load ho raha hai
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('canvas-container');
  
  // Webcam chalu karo
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Prediction shuru karo
  classifyVideo();
}

function draw() {
  background(0);
  // Mirror image dikhane ke liye
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  // Label dikhao
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
  // Result update karo aur phir se classify karo
  label = results[0].label;
  document.getElementById('status').innerText = "Model Active: Detecting...";
  classifyVideo();
}
