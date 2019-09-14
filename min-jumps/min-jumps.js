'use strict';

// [2, 1, 2, 3, 4]

// 2 => 1
// [1, 2, 3, 4]

// 1 => 2
// [2, 3, 4]

// 2 => 4
// [4]

// 2 => 3
// [3, 4]

// 3 => 4
// [4]

// 2 => 2
// [2, 3, 4]

// 2 => 4
// [4]

// 2 => 3
// [3, 4]

// 3 => 4
// 4

// [2, 1, 2, 0, 4]

// [[1, 2, 0, 4], [2, 0, 4]]

// 1 + func([1, 2, 0, 4]), 1 + func([2, 0, 4])
// 1 + func([2, 0, 4])
// 1 + func([0, 4]), 1 + func([4])
// problem, 1

const generatePossibilities = arr => {
  const possibilities = [];
  const possibleJumps = arr[0];

  for (let i = 1; i <= possibleJumps; i++) {
    const possible = arr.slice(0 + i);
    possibilities.push(possible);
  }

  return possibilities;
};

// Complete this algo
const minJumps = arr => {
  if (arr.length <= 1) {
    return 0;
  } else {
    const possibilities = generatePossibilities(arr);

    const numJumps = possibilities.map(p => {
      if (p[0] === 0) {
        return Infinity;
      } else {
        return 1 + minJumps(p);
      }
    });

    return Math.min(...numJumps);
  }
};

module.exports = minJumps;
