import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const rule = {
  "--double-next": 1,
  "--double-prev": 2,
  "--discard-next": 3,
  "--discard-prev": 4
};
export default function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error();
  }

  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (rule[arr[i]]) {
      switch (rule[arr[i]]) {
        case 1:
          if (i < arr.length - 1) {
            result.push(arr[i + 1]);
          }
          break;
        case 2:
          if (i > 0) {
            result.push(result[result.length - 1]);
          }
          break;
        case 3:
          if (i < arr.length) {
            result.push(undefined);
            i += 1;
          }
          break;
        case 4:
          if (i > 0) {
            result.pop();
          }
          break;
      }
    } else {
      result.push(arr[i]);
    }
  }
  const res = result.filter(function (x) {
    return x !== undefined;
  });
  return res;
}
