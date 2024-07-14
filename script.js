const gridContainer = document.getElementById('grid-container');
const resizeButton = document.getElementById('resizeButton');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

function createGrid(size) {
    // Clear any existing grid items
    gridContainer.innerHTML = '';

    // Calculate dimensions for the grid items
    const itemSize = 400 / size; // 400px total size

    // Create the grid items
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;
        gridItem.dataset.interactions = '0'; // Interaction counter

        gridItem.addEventListener('mouseover', () => {
            let interactions = parseInt(gridItem.dataset.interactions);
            interactions++;
            gridItem.dataset.interactions = interactions.toString();

            if (interactions === 1) {
                const { r, g, b } = getRandomColor();
                gridItem.dataset.color = `${r}, ${g}, ${b}`;
                gridItem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
            
            if (interactions <= 10) {
                let currentOpacity = parseFloat(gridItem.style.opacity) || 0;
                currentOpacity += 0.1;
                gridItem.style.opacity = currentOpacity;
            }
        });

        gridContainer.appendChild(gridItem);
    }
}

function promptGridSize() {
    let newSize;
    do {
        newSize = prompt("Enter new grid size (max 100):");
    } while (newSize > 100 || newSize < 1 || isNaN(newSize));

    createGrid(newSize);
}

resizeButton.addEventListener('click', promptGridSize);

// Initialize with a 16x16 grid
createGrid(16);


resizeButton.addEventListener('click', promptGridSize);

// Initialize with a 16x16 grid
createGrid(16);
