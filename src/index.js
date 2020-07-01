import loader from "@assemblyscript/loader";

const imports = {};

async function main() {
  const { exports } = await loader.instantiateStreaming(fetch("optimized.wasm"), imports);
  console.log(exports.add(1, 2));

  const helloString = exports.hello(num => {
    console.log(num);
  });

  console.log(helloString);

  const el = document.createElement("h1");
  el.textContent = helloString;
  document.body.append(el);
}

main();
