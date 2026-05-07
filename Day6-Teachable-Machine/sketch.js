// Classifier Variable
let classifier;
// Model URL - Isme humne link ki jagah './' rakha hai kyunki files usi folder mein hain
let imageModelURL = './';

// Video variable
let video;
let flippedVideo;
// To store the classification
let label = "Model Loading...";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  // Canvas create karo
  let canvas = createCanvas(640, 480);
  canvas.parent('canvas-container');
  
  // Webcam capture start karo
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Classification shuru karo
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Drawing the label
  fill(0, 255, 0); // Green color for label
  textSize(32);
  textAlign(CENTER);
  text(label, width / 2, height - 20);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  label = results[0].label;
  
  // Status update in HTML
  document.getElementById('status').innerText = "Model Active: Detecting " + label;
  
  // Classifiy again!
  classifyVideo();
}
