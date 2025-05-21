// DOM Elements
const textPara = document.getElementById('dynamic-text');
const boxContainer = document.getElementById('box-container');

document.getElementById('change-text').addEventListener('click', () => {
  textPara.textContent = '🎊 Text successfully changed with JavaScript!';
});

document.getElementById('change-style').addEventListener('click', () => {
  textPara.style.color = '#d63031';
  textPara.style.fontSize = '1.5rem';
  textPara.style.fontWeight = 'bold';
  textPara.style.backgroundColor = '#ffeaa7';
  textPara.style.padding = '0.5rem';
  textPara.style.borderRadius = '8px';
});

document.getElementById('toggle-element').addEventListener('click', () => {
  const existingBox = document.querySelector('.dynamic-box');
  if (existingBox) {
    existingBox.remove();
  } else {
    const box = document.createElement('div');
    box.className = 'dynamic-box';
    boxContainer.appendChild(box);
  }
});
