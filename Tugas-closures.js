
//tugas no.1
function sekolah(waktu){
    return function(nama){
      console.log(`${nama} ${waktu == '08.30' ? 'masuk' : 'pulang'}  pukul ${waktu}`)
    }
  }
  
  const aktivitas = sekolah('08.30')
  const aktifitas2 = sekolah('17.30')
  aktivitas('Andi')
  aktifitas2('Andi')

//tugas no.2
function aktivitas(waktu){
    return function(name){
      console.log(`halo selamat ${waktu} ${name}`)
    }
  }
  
  const kegiatan = aktivitas('pagi')
  kegiatan('Budi')
  const kegiatan2 = aktivitas('malam')
  kegiatan2('pegi')

  //tugas no.3
const tes = () => {
    return [65, 70, 80, 85]
  }
  
  tes().map(item => item >= 80 ? console.log(item + ' lulus') : console.log(item + ' tidak lulus'))
  