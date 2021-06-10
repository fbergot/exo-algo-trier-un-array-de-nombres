//un algorythme "à tiroir"

/**
 * sort the array
 * @param {Array<Number>} arr 
 * @returns {Array<Number>}
 */
export function triage(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        i = -1;
    }
    i++;
  }
  return arr;
}

