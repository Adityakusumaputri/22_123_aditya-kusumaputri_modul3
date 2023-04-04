// buat navbar



function klik(){

    var harga= document.getElementById("harga").value;
    var jumlah= document.getElementById("jumlah").value;
    var diskon= document.getElementById("diskon").value;
    var hasil= harga*jumlah;
    var hargaDiskon= hasil*(diskon/100);
    var hargaTotal= hasil - hargaDiskon;
    
    if(diskon <= 20){
        alert("Wahh, selamat dapat diskon 20%, cek harga nya yukk");
    }
    else{
        alert("eror");
    }
    
    
    document.getElementById("total").value= hargaTotal;
    }

// buat scroll top

function scrollKeatas(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

