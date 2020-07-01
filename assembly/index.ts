// The entry file of your WebAssembly module.

interface Element {}

export declare function createElement(text: string): void;

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function hello(): void {
  createElement("Hello World!");
}
