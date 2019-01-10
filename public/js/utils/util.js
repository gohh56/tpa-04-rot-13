const rot13Input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const rot13Output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

const rotateChar = function(char) {
  const rotIndex = rot13Input.indexOf(char);
  return rotIndex !== -1 ? rot13Output[rotIndex] : char;
};

export {
  rotateChar,
};
