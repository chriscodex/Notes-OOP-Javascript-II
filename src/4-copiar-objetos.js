const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'AAAAAA'
  }
};

// Object to String
const stringfiedComplexObject = JSON.stringify(obj1);
