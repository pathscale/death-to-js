import loader from "@assemblyscript/loader";
import { freeJsRef, lookupJsRef, mallocJsRef } from "./allocator";

const imports = {
  index: {
    makeNewArray: function () {
      return mallocJsRef([]);
    },
    push: function (id, value) {
      lookupJsRef(id).push(value);
    },
    length: function (id) {
      return lookupJsRef(id).length;
    },
    logInt: function (value) {
      console.log(value);
    },
    logRef: function (id) {
      console.log(lookupJsRef(id));
    },
    free: function (id) {
      freeJsRef(id);
    },
  },
};

async function main() {
  const { exports } = await loader.instantiateStreaming(fetch("optimized.wasm"), imports);
  exports.main();
}

main();
