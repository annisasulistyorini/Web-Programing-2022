// JavaScript Document
function pilih(){
    var pil=document.getElementById("form1").pic.value;
     if (pil=="1")
       {
           document.getElementById("img").innerHTML="<img src='IMG/ayam.jpg'>";
           window.alert("Ini Adalah Gambar Dari ayam.jpg");
       }
       else if (pil=="2")
       {
           document.getElementById("img").innerHTML="<img src='IMG/buaya.jpg'>";
           window.alert("Ini Adalah Gambar Dari buaya.jpg");
       }
       else if (pil=="3")
       {
           document.getElementById("img").innerHTML="<img src='IMG/gajah.jpg'>";
           window.alert("Ini Adalah Gambar Dari gajah.jpg");
       }
       else if (pil=="4")
       {
           document.getElementById("img").innerHTML="<img src='IMG/kambing.jpg'>";
           window.alert("Ini Adalah Gambar Dari kambing.jpg");
       }
       else if (pil=="5")
       {
           document.getElementById("img").innerHTML="<img src='IMG/kucing.jpg'>";
           window.alert("Ini Adalah Gambar Dari kucing.jpg");
       }
       else if (pil=="6")
       {
           document.getElementById("img").innerHTML="<img src='IMG/panda.jpg'>";
           window.alert("Ini Adalah Gambar Dari panda.jpg");
       }
       else if (pil=="7")
       {
           document.getElementById("img").innerHTML="<img src='IMG/sapi.jpg'>";
           window.alert("Ini Adalah Gambar Dari sapi.jpg");
       }
       else if (pil=="8")
       {
           document.getElementById("img").innerHTML="<img src='IMG/kupu-kupu.jpg'>";
           window.alert("Ini Adalah Gambar Dari kupu-kupu.jpg");
       }else{
           document.getElementById("img").innerHTML="<img src='IMG/search.jpg'>";
       }
       
   }