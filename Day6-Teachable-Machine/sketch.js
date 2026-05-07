let classifier;
let video;
let label = "Initializing Model...";
// Path check kar lo, agar folder ka naam yahi hai toh:
let imageModelURL = 'https://zulfiqarhusain.github.io/60-Day-AI-Challange/Day6-Teachable-Machine/';

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
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
  // Mirroring effect
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  // Label display logic
  fill(0, 255, 0);
  textSize(32);
  textAlign(CENTER);
  text(label, width / 2, height - 20);
}

function classifyVideo() {
  // Ye function baar baar classification run karega
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Yahan hum label ko results se update kar rahe hain
  label = results[0].label;
  document.getElementById('status').innerText = "Detected: " + label;
  
  // Agli prediction start karo
  classifyVideo();
}
