const changeButton = document.querySelector('.change-color');
changeButton.addEventListener("click", changeBackground);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackground() {
  const getColor = getRandomHexColor();
  document.body.style.backgroundColor = getColor;
  document.querySelector('.color').textContent = getColor;
}