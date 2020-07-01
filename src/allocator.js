// This is a unique integer which is used for the id of the JS objects
let jsRefId = 0;

// This is a dictionary which maps from id to JS object
const jsRefs = {};

// This creates a new id, puts the object into the dictionary, then returns the new id
export function mallocJsRef(obj) {
  const id = jsRefId;
  // Because we always increment the id, it's guaranteed to be unique
  // (until it reaches 4294967295)
  ++jsRefId;
  jsRefs[id] = obj;
  return id;
}

// This looks up the JS object based upon its id
export function lookupJsRef(id) {
  return jsRefs[id];
}

// This cleans up the memory for the JS object (by allowing it to be garbage collected)
export function freeJsRef(id) {
  delete jsRefs[id];
}
