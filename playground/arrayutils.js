const trees = ['birch', 'maple', 'oak', 'poplar', 'mandarins'];

//const result = trees.find((tree) => trees.pop());

const newTrees = trees.filter((tree) => {
  return tree.startsWith('m');
});

console.log(newTrees);
