// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const ignoreArray = ['!', '?', '.', ',', "'"];
  return str
    .split(' ')
    .map(blob => (ignoreArray.indexOf(blob) < 0 ? `${blob.slice(1) + blob[0]}ay` : blob))
    .join(' ');
}

it('pig latin', () => {
  expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
  expect(pigit('This is my string')).toBe('hisTay siay ymay tringsay');
});
