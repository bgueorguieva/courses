let text = 'Hello JavaScript!';

console.log(text.substring(3, -7));
console.log('----');
console.log(text.slice(3, -7));
console.log('----');

console.log(text.substring(-7)); // stava na 0 i vrushta celiqt string
console.log('----');
console.log(text.slice(-7));