// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

function descendingOrder(n) {
  return parseInt(
    `${n}`
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  );
}

it('descending order', () => {
  expect(descendingOrder(0)).toBe(0);
  expect(descendingOrder(1)).toBe(1);
  expect(descendingOrder(1254859723)).toBe(9875543221);
  expect(descendingOrder(21445)).toBe(54421);
});
