const arrowFunction = nama => nama

console.log(arrowFunction('Dedi'));

const arrowFunction = (nama, umur) => {
  return { nama, umur}
}
const arrowFunction = (nama, umur) => ({ nama, umur })

console.log(arrowFunction('Dedi', 22));




const arrowFunction = () => {
  console.log(this);
}
console.log(arrowFunction());

const expresion = function() {
  
}
const arrow = () => {
  return ['satu', 'dua']
}
arrow().map(item => console.log(item))