import loader from "@assemblyscript/loader";

const imports = {
  index: {},
};

async function main() {
  const { exports } = await loader.instantiate(fetch("optimized.wasm"), imports);
  console.log(exports.add(1, 2));

  const helloString = exports.__getString(exports.hello());
  console.log(helloString);

  const el = document.createElement("h1");
  el.textContent = helloString;
  document.body.append(el);
}

main();
