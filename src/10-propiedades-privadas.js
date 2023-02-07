function requiredParam(param) {
  throw new Error(`${param} is required`);
}

// Object Factory
function createStudent({
  name = requiredParam('name'),
  age,
  email = requiredParam('email'),
  twitter,
  instagram,
  facebook,
} = {}) {
}

// Declaración del objeto
const chris = createStudent({
  name: 'Christian',
  age: 24,
  email: 'c.espinoza.code@gmail.com',
  twitter: 'chriscodex',
});
