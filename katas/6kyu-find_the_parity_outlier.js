// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  function findEven(n) {
    return n % 2 === 0;
  }
  function findOdd(n) {
    return !findEven(n);
  }

  return integers.slice(0, 3).filter(findEven).length >= 2
    ? integers.find(findOdd)
    : integers.find(findEven);
}

function randomTest(length) {
  function floorRandom(max) {
    return Math.floor(Math.random() * max);
  }

  const odd = Math.random() > 0.5;
  const tempArray = Array.from({ length }, (_, i) => (floorRandom(100) * 2 + odd ? 1 : 0));
  const rogue = floorRandom(100) * 2 + odd ? 0 : 1;
  tempArray[floorRandom(length)] = rogue;
  expect(findOutlier(tempArray)).toBe(rogue);
}

it('parity outlier', () => {
  expect(findOutlier([0, 1, 2])).toBe(1);
  expect(findOutlier([1, 2, 3])).toBe(2);
  expect(findOutlier([2, 6, 8, 10, 3])).toBe(3);
  expect(findOutlier([0, 0, 3, 0, 0])).toBe(3);
  expect(findOutlier([1, 1, 0, 1, 1])).toBe(0);
  randomTest(100);
  randomTest(1000);
  randomTest(1000);
  randomTest(1000);
});
