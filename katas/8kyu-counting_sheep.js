// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayofSheep) {
  return arrayofSheep.filter(s => s === true).length;
}

function randomTest(length = 10) {
  let count = 0;

  const tempArray = Array.from({ length }, (_, i) => {
    const factor = Math.random() > 0.5;
    if (factor) count++;
    return factor;
  });
  return { array: tempArray, count };
}

it('counting sheeps 🐑', () => {
  const test1 = randomTest();
  const test2 = randomTest(20);
  const test3 = randomTest(30);
  test3.array.push(null, null, undefined, 'a', 'b', 'c');
  expect(countSheeps(test1.array)).toBe(test1.count);
  expect(countSheeps(test2.array)).toBe(test2.count);
  expect(countSheeps(test3.array)).toBe(test3.count);
});
