import loader from "@assemblyscript/loader";

const imports = {
  /* imports go here */
};

async function main() {
  const { exports } = await loader.instantiate(fetch("optimized.wasm"), imports);
  console.log(exports.add(1, 2));
}

main();
