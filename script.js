 // Menampilkan feature hitung luas, jika di click maka feature untuk menghitung Luas Persegi akan di tampilkan 
 function btnLuas() {
    const luas_persegi = document.getElementById("luas-persegi"); 
    var keliling_persegi = document.getElementById("keliling-persegi");
    // memberitahukan bahwa variabel diatas didapat dari id yang sudah di set dalam html
 
    if (luas_persegi.style.display == "block") 
     {
         luas_persegi.style.display = "none";
 }
 else {
     luas_persegi.style.display ="block";
     keliling_persegi.style.display = "none";
    
 }
 /* 
     karena feature dari hitung luas persegi di set none pada pertama kali
     Maka perintah yang akan dijalankan adalah kondisi else yang mana disana akan ditampilkannya feature dari hitung luas persegi dan akan menghide feature dari hitungg keliling
     Karena kondisi dari if diatas adalah jika luas_persegi dalam keadaan sudah ditampilkan 
     dan ketika  sudah ditampilkan maka jika kita mengclick sekali lagi dia baru akan menjalankan kondisi if diatas dan menghide nya lagi
     */
  }
  
 
 // Menampilkan feature hitung keliling , jika di click maka feature untuk menghitung keliling Persegi akan di tampilkan 
  function btnKeliling(){
     var keliling_persegi = document.getElementById("keliling-persegi");
     var luas_persegi = document.getElementById("luas-persegi");
     if (keliling_persegi.style.display == "block") {
         keliling_persegi.style.display ="none";
     }
     else {
         keliling_persegi.style.display = "block";
         luas_persegi.style.display = "none"
     }   
 
 // pada else di kedua fungsi diatas terdapat variabel dari feature yang lain karena jika pertama kali di set itu akan baik baik saja menampilkan feature tersebut
 // tetapi jika kita mengklik feature yang lain maka feature dari sebelumnya tidak akan hilang karena kita tidak meng set variabel dari feature yang lain menjadi hide
 
  }
  
  function hitungLuas(){
   var sisi = parseInt(document.getElementById("sisi-luas").value); //Karena type awalnya berbentuk string maka dilakukan pareIint untuk mengubah kedalam integer
  
   var luas = sisi*sisi; // rumus luas persegi

    if (isNaN(sisi)){ //IsNan diggunakan untuk validate 

      alert("Only Number")
    
    }
    else {
        
        document.getElementById("sisi").innerHTML = "L = "+ sisi + " x "+sisi;
        document.getElementById("output_luas").innerHTML = "L="+luas; // Hasil dari perhitungan
       
    }
   
} 

function hitungKeliling(){
    var sisi = parseInt(document.getElementById("sisi-keliling").value);
    var keliling = 4*sisi;

    if (isNaN(sisi)) {
        alert ("Only Number")
    }
    else {
    document.getElementById("sisikel").innerHTML = "K = 4 x "+sisi;
    document.getElementById("output_keliling").innerHTML = "K = "+keliling;
}
}

