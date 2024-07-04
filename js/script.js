// Ini Javascript //
function validateForm() {
    let Nama = document.getElementById('nama').value;
    let TanggalLahir = document.getElementById('tanggallahir').value;

    console.log(Nama);
    console.log(TanggalLahir);

    if (Nama != '' && TanggalLahir != '') {
        document.querySelector('#result').innerHTML = Nama + ' ' + TanggalLahir + ' ' + Pesan;
    } else {
        alert('Inputan ada yang kosong');
    }
}

function replaceName() {
    let name = prompt("Halo, Siapa nama anda?", "");
    document.getElementById("name").innerHTML = name
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName()
})

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  alert("klik ikon")
});