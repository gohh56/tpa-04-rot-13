const rot13Input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const rot13Output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

const rotateChar = function(char) {
  const rotIndex = rot13Input.indexOf(char);
  return rotIndex !== -1 ? rot13Output[rotIndex] : char;
};

const convertRot13 = function(sourceText) {
  return sourceText.split('').map(rotateChar).join('');
};

const handleBtnConvert = function() {
  const sourceText = document.querySelector('.source-text').value;
  const convertedText = convertRot13(sourceText);
  document.querySelector('.destination-text').value = convertedText;
};

const initPage = function() {
  const form = document.querySelector('.form-convert');
  // see https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault
  form.addEventListener('submit', evt => evt.preventDefault());

  const btn = document.querySelector('.btn-convert');
  btn.addEventListener('click', handleBtnConvert);
};

initPage();
