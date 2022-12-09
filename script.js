alert('selamat datang..');
var lagi = true;

while( lagi ) {
    //ketika user mencet OK maka akan masukan nama lagi
    var nama = prompt('masukan nama:');
    alert('halo ' + nama);
     //kalo cancel coba lagi
    lagi = confirm('coba lagi?');
}

alert('terima kasih..');