// Object property shorthand

const name = 'Tym';
const userAge = 49;

const user = {
  name,
  age: userAge,
  location: 'Perth',
};

console.log(user);

// Object destructuring

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const { label: productLabel, stock } = product;

// console.log(`${productLabel} and ${stock}`);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
