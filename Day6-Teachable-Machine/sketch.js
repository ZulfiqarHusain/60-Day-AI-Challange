let model, webcam, labelContainer, maxPredictions;
let label = "Loading AI...";

// FIXED URL: 'y0jWHLJV4' (Zero hai, 'O' nahi)
const URL = "https://teachablemachine.withgoogle.com/models/y0jWHLJV4/";

async function setup() {
    // Canvas create karo
    createCanvas(640, 480).parent('canvas-container');
    
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
        // Model load karo Google ke server se
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Webcam setup
        const flip = true; 
        webcam = new tmImage.Webcam(640, 480, flip); 
        await webcam.setup(); 
        await webcam.play();
        window.requestAnimationFrame(loop);

        document.getElementById("status").innerText = "Model Active! ✅";
    } catch (e) {
        console.error("Model load nahi ho paya:", e);
        document.getElementById("status").innerText = "Error: Check URL or Internet Connection";
    }
}

async function loop() {
    webcam.update(); 
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
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
        // Webcam ki image draw karo
        image(webcam.canvas, 0, 0);
        
        // Label dikhao (Green Color)
        fill(0, 255, 0);
        textSize(40);
        textAlign(CENTER);
        text(label, width / 2, height - 30);
    }
}
