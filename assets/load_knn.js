async function loadModel() {
    try {
        const session = await ort.InferenceSession.create('/models/knn_model.onnx');
        console.log("Model loaded successfully");
        return session;
    } catch (error) {
        console.error("Error loading model:", error);
    }
}


function getGridData() {
    const gridCells = document.querySelectorAll('.grid-cell');
    const inputArray = [];

    gridCells.forEach(cell => {
        // Collect the brightness property of each cell
        inputArray.push(cell.brightness || 0); // Default to 0 if undefined
    });

    return inputArray;
}


document.querySelector('#predict-button').addEventListener('click', () => {
    console.log(getGridData());
});



async function predict() {
    try {
        const session = await loadModel();
        console.log("Session created successfully");

        // Use a constant input tensor with 64 zeros
        const constantTensor = new ort.Tensor("float32", new Float32Array(64).fill(0), [1, 64]);
        console.log("Constant input tensor created:", constantTensor);

        // Run the model with the constant tensor
        console.log("Running the model...");
        const results = await session.run({ float_input: constantTensor });

        // Log the results structure if it reaches this point
        console.log("Model output structure:", results);

        // Access the output if available
        if (results.output_label && results.output_label.data) {
            const output = results.output_label.data[0];
            document.querySelector('#result').innerText = `Predicted digit: ${output}`;
        } else {
            console.error("Unexpected results structure:", results);
        }

    } catch (error) {
        console.error("Prediction error:", error);
    }
}





document.querySelector('#predict-button').addEventListener('click', predict);
