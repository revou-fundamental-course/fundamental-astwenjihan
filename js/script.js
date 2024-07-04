// Ini Javascript //
function validateForm() {
    let Nama = document.getElementById('nama').value;
    let TanggalLahir = document.getElementById('tanggallahir').value;

    console.log(Nama);
    console.log(TanggalLahir);

    if (Nama != '' && TanggalLahir != '') {
        document.querySelector('#result').innerHTML = Nama + ' ' + TanggalLahir;
    } else {
        alert('Inputan ada yang kosong');
    }
}