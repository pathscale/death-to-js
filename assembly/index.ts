// The entry file of your WebAssembly module.

export declare function makeNewArray(): usize;
export declare function push(id: usize, value: i32): void;
export declare function length(id: usize): i32;
export declare function logInt(value: i32): void;
export declare function logRef(id: usize): void;
export declare function free(id: usize): void;

export function main(): void {
  const arr = makeNewArray();
  push(arr, 1);
  push(arr, 1);
  push(arr, 2);
  push(arr, 3);
  push(arr, 5);
  logInt(length(arr));
  logRef(arr);
  free(arr);
}
