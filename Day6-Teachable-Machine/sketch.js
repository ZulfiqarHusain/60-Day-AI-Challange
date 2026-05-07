let model, webcam, maxPredictions;
let label = "Loading AI...";

// Tera Hosted Link (Cloud)
const URL = "https://teachablemachine.withgoogle.com/models/yOjWHLJV4/";

async function setup() {
    // Canvas size aur placement
    const canvas = createCanvas(640, 480);
    canvas.parent('canvas-container');
    
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
        // Model load ho raha hai
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Webcam setup
        const flip = true; 
        webcam = new tmImage.Webcam(640, 480, flip); 
        await webcam.setup(); 
        await webcam.play();
        
        document.getElementById("status").innerText = "Model Active! ✅";
        window.requestAnimationFrame(loop);
    } catch (e) {
        console.error(e);
        document.getElementById("status").innerText = "Error: Check URL or Camera Permission";
    }
}

async function loop() {
    webcam.update(); 
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    let highestProb = 0;
    
    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability > highestProb) {
            highestProb = prediction[i].probability;
            label = prediction[i].className;
        }
    }
}

function draw() {
    if (webcam && webcam.canvas) {
        // Webcam output display
        image(webcam.canvas, 0, 0);
        
        // Green Text for detected object
        fill(0, 255, 0);
        textSize(42);
        textAlign(CENTER);
        text(label, width / 2, height - 30);
    }
}
