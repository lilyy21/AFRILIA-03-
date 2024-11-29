confirm("apakah anda ingin mengisikan nama anda?");
var nama= prompt("masukkan nama anda?", "");
document.write("<p>hallo "+ nama +"</p>");
document.write("<p>hallo "+ nama +"</p>");
document.write("<p>hallo "+ nama +"</p>");
document.write("<p>hallo "+ nama +"</p>");
document.write("<p>hallo "+ nama +"</p>");
document.write("<p>hallo "+ nama +"</p>");
document.write("<p>hallo "+ nama +"</p>");
alert("hallo " + nama);
var ulangi = confirm("Apakah anda mau mengulang?");;
var counter = 0;

do {
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
} while(ulangi)

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");