type FunctionType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

function cacheWrapper<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => FunctionType<T> {
  const cache = new Map<string, FunctionType<T>>();

  return (...args: Parameters<T>): FunctionType<T> => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log('from cash:');
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result);
    console.log('calculated:')
    return result;
  };
}
const add = (a: number, b: number) => a + b;
const cachedAdd = cacheWrapper(add);

console.log(cachedAdd(2, 2)); // 4 calculated
console.log(cachedAdd(5, 8)); // 13 calculated
console.log(cachedAdd(2, 2)); // 4 from cache
