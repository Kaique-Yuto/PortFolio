// Select the grid container and reset button
const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');

// Set up grid size
const gridSize = 8;  // 8x8 grid
const maxBrightness = 16.0; // Maximum brightness level (black)

// Function to create the grid
function createGrid() {
    // Clear the grid before creating (useful for resetting)
    gridContainer.innerHTML = '';

    // Set CSS grid properties
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    // Create grid cells
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        
        // Initialize brightness level for each cell (0 to maxBrightness)
        cell.brightness = 0;  // Start with 0, which is white
        
        // Function to update cell color based on brightness
        const updateCellColor = () => {
            const brightnessValue = Math.min(cell.brightness, maxBrightness);
            const grayScale = Math.floor((1 - (brightnessValue / maxBrightness)) * 255); // Invert grayscale
            cell.style.backgroundColor = `rgb(${grayScale}, ${grayScale}, ${grayScale})`;
        };

        // Set initial cell color to white
        cell.style.backgroundColor = 'rgb(255, 255, 255)';

        // Event listeners for interaction
        cell.addEventListener('mousedown', () => {
            cell.brightness += 4; // Increment brightness on click
            updateCellColor();
        });

        cell.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) { // If mouse is held down, increase brightness on drag
                cell.brightness += 4;
                updateCellColor();
            }
        });

        gridContainer.appendChild(cell);
    }
}

// Function to reset the grid
function resetGrid() {
    createGrid(); // Re-create the grid with initial white cells
}

// Initialize the grid on page load
window.onload = createGrid;

// Add event listener to the reset button
resetButton.addEventListener('click', resetGrid);

