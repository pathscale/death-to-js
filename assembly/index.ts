// The entry file of your WebAssembly module.

interface Element {}

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function hello(): string {
  return "Hello World!";
}
