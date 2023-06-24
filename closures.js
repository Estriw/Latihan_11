function parent1(waktu) {
  return function(nama) {
    console.log(`halo ${nama} selamat ${waktu}`);
  }
}
const sayHello = parent1('Siang')
sayHello('Dedi')

let nama = 'Diki'
function name() {
  console.log(nama);
}
nama = 'Dodi'

function getName() {
  let nama = 'Diki'
  return function() {
    console.log(nama);
  }
}

nama = 'Budi'
const callName = getName()
callName()



