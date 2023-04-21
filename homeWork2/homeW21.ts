/* Write a function that accepts any kind of array and an asynchronous callback, that is invoked on each array element sequentially. The result of invocation must be an array of callback results. All types must apply automatically (Template function). Invocation example:
const array: Array<string> = ["one", "two", "three"];

const results = await runSequentially(array, (item, index) =>
  Promise.resolve({
    item,
    index,
  })
);
IDE must consider variables from example as next:
item type = string
index type = number
results type = Array<{item: string, index: number}>
*/

  const array: string[] = ["one", "two", "three"];

async function runSequentially(arr: Array<string>): 
Promise<{item: string, index: number}> {
    let results = arr.map(item => [item, arr.indexOf(item)]);
    await console.log(results);
    return;
};

runSequentially(array);
