import { rotateChar } from './utils/util.js';

const convertRot13 = function(sourceText) {
  return sourceText.split('').map(rotateChar).join('');
};

export {
  convertRot13,
};
