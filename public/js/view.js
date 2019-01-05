import { convertRot13 } from './logic.js';

const handleBtnConvert = function() {
  const sourceText = document.querySelector('.source-text').value;
  const convertedText = convertRot13(sourceText);
  document.querySelector('.destination-text').value = convertedText;
};

const initForm = function() {
  const form = document.querySelector('.form-convert');
  // see https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault
  form.addEventListener('submit', evt => evt.preventDefault());
};

const initListener = function() {
  const btn = document.querySelector('.btn-convert');
  btn.addEventListener('click', handleBtnConvert);
};

const initDOMAndListeners = function() {
  initForm();
  initListener();
};

export {
  initDOMAndListeners,
};
