const array = [1, 2, 3, 6, 7, 9];

function arrayMutateRemove(arr: number[], item: unknown) {
    const removedElements = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] % 2 === 0) {
        removedElements.push(arr.splice(i, 1)[0]);
      } else {
        i++;
      }
    }
    return removedElements;
  }

const removedElements = arrayMutateRemove(array, (item: number) => item % 2 === 0);

console.log(array); // [1, 3, 7, 9]
console.log(removedElements); // [2, 6]

