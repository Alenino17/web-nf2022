function convert() {
    let inputNilaiAwal = document.getElementById("nilaiAwal").value;
    let hitungKurs = document.getElementById("selectKurs").value;
    let hasil;
    
    if (hitungKurs == "USD") {
        hasil = inputNilaiAwal * 9915;
    } else if (hitungKurs == "SGD") {
        hasil = inputNilaiAwal * 13472;
    } else if (hitungKurs == "Ringgit") {
        hasil = inputNilaiAwal * 874;
    } else if (hitungKurs == "Yen") {
        hasil = inputNilaiAwal * 120;
    } else if (hitungKurs == "EURO") {
        hasil = inputNilaiAwal * 15888
    } else if (hitungKurs == "Riyal") {
        hasil = inputNilaiAwal * 3592;
    } else {
        hasil = 0;
    }

    document.getElementById("nilaiRupiah").value = String("Rp. " + hasil);
}
</script>

}