import loader from "@assemblyscript/loader";

const imports = {
  index: {
    createElement(text) {
      const el = document.createElement("h1");
      el.textContent = text;
      document.body.append(el);
    },
  },
};

async function main() {
  const { exports } = await loader.instantiate(fetch("optimized.wasm"), imports);
  console.log(exports.add(1, 2));
  console.log(exports.hello());
}

main();
