const boxes = document.getElementById('boxes');
const numberInput = document.querySelector('input'); 
document.querySelector("button[data-create]").addEventListener('click', createBoxesButtonListener);
document.querySelector("button[data-destroy]").addEventListener('click', deleteBoxes);

// Create Boxes
function createBoxes(amount) {
  deleteBoxes();
  const DEFAULT_SIZE = 30;
  const RATIO = 10;

  const newBoxes = Array.from({length: amount}, (_, i) => {
    const size = `${DEFAULT_SIZE + ((i + boxes.children.length) * RATIO)}px`;

    const newBox = document.createElement('div');
    newBox.style.width = size;
    newBox.style.height = size;
    newBox.style.backgroundColor = getRandomHexColor();

    return newBox;
  });

  boxes.append(...newBoxes);
}

function createBoxesButtonListener() {
  const amount = parseInt(numberInput.valueAsNumber);

  if (amount < 1 || amount > 100) {
    alert('Provided number is out of the licit range!');
    return;
  } 

  createBoxes(amount);
  numberInput.value = "";
}

//Delete Boxes
function deleteBoxes() {
  boxes.replaceChildren();
}

//RandomColor
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}