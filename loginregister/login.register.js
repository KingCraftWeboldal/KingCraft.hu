// - Regisztráció

   //adatok
   var nevreg = document.getElementById('registernev').value;
   var emailreg = document.getElementById('registeremail').value;
   var jelszoreg = document.getElementById('registerjelszo').value;


function ellenorzesregister() {
    //Lekéri az adatokat
    nevreg = document.getElementById('registernev').value;
    emailreg = document.getElementById('registeremail').value;
    jelszoreg = document.getElementById('registerjelszo').value;

    //Ellenörzi hogy üres-e vagy nem a textinput
    if (nevreg =="false") {
      
    } else {
      
    }







        //Kiirja a Consoleba (tesztelésre)
        console.log("Név: "+ nevreg);
        console.log("Email: " +emailreg);
        console.log("Jelszó: "+ jelszoreg);
        //Név
        Cookies.set("Nev", "" + nevreg);

        //E-Mail

        Cookies.set("E-Mail", "" + emailreg);

        //Jelszó

        Cookies.set("Jelszo", "" + jelszoreg);
    
       

        console.log("Név: "+ nevreg);
        console.log("Email: " +emailreg);
        console.log("Jelszó: "+ jelszoreg);
        //Név
        Cookies.set("Nev", "" + nevreg);

        //E-Mail

        Cookies.set("E-Mail", "" + emailreg);

        //Jelszó

        Cookies.set("Jelszo", "" + jelszoreg);

        
    
    // - Bejelentkezés
    
}







function ellenorzesbejelentkezes() {
    //Lekéri az adatokat
    nevreg = document.getElementById('registernev').value;
    jelszoreg = document.getElementById('registerjelszo').value;   

    nevlog = document.getElementById('loginnev').value;
    jellog = document.getElementById('loginjelszo').value;   
   
    var nevlog_accept = false;
    var jellog_accept = false;


    var nevcookies = Cookies.get("Nev", "" + nevreg);
    var jelszocookies = Cookies.get("Jelszo", "" + jelszoreg);


    
    if (nevcookies == nevlog) {
        nevlog_accept = true;
        console.log("Név: "+ nevreg);
        console.log("Jelszó: "+ jelszoreg);
        
     } else {
       console.error("helytelen Név")
       alert("Helytelen Név")
     }
 

    if (jelszocookies == jellog){
        jellog_accept = true;
        console.log("Név: "+ nevreg);
        console.log("Jelszó: "+ jelszoreg);
     } else { 
       console.error("helytelen jelszó")
       alert("Helytelen jelszó")
     }
 

    if(jellog_accept) {
      if(nevlog_accept) {
        console.log("Név: "+ nevreg);
        console.log("Jelszó: "+ jelszoreg);
        window.close(self);
        window.open("../center/index.html");
      }
    }
}

