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

let indexSlide = 1; // [0, 1, 2]
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
    console.log('IndexSlide kita tambah ' + n);
    console.log(indexSlide + 'Ini NextSlide');
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('banner-item');
    if (n > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log(indexSlide - 1 + 'Ini ShowSlide');
}
