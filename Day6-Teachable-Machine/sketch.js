let model, webcam, labelContainer, maxPredictions;
let label = "Loading...";

// Link wahi jo Teachable Machine ne diya tha (Cloud Link)
// Isse local files ka tension khatam ho jayega
const URL = "https://teachablemachine.withgoogle.com/models/y0jWHLJV4/";

async function setup() {
    createCanvas(640, 480).parent('canvas-container');
    
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Model load karo
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Webcam setup
    const flip = true; 
    webcam = new tmImage.Webcam(640, 480, flip); 
    await webcam.setup(); 
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("status").innerText = "Model Ready! ✅";
}

async function loop() {
    webcam.update(); 
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    // Sabse zyada confidence wala result uthao
    let highestConf = 0;
    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability > highestConf) {
            highestConf = prediction[i].probability;
            label = prediction[i].className;
        }
    }
}

function draw() {
    if (webcam && webcam.canvas) {
        image(webcam.canvas, 0, 0);
        fill(0, 255, 0);
        textSize(32);
        textAlign(CENTER);
        text(label, width / 2, height - 20);
    }
}
