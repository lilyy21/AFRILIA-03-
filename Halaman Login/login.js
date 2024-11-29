var dialog = document.querySelector("dialog");

document.querySelector("#open-popup").onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        dialog.showModal();
    } 
};


document.querySelector(".IYA-btn").onclick = function() {
    dialog.close();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username ==="AFRILIA"&& password==="2104"){
        window.location.href = 'halaman berikutnya.html'; 
    } else alert ("akun tidak ditemukan");
};

document.querySelector("#acucu-btn").onclick = function() {
    dialog.close();
    alert("apakah anda ingin login?");
    var ulangi = confirm("Apakah anda mau mengulang?");;
var counter = 0;

do {
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
} while(ulangi)

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");
};