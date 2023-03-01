  //Név Kiírása a profilom
  var nevkiirascenter = document.getElementById("centernev");
  nevkiirascenter.innerHTML = Cookies.get("Nev", "" );

  var emailkiirascenter = document.getElementById("centeremail");
  emailkiirascenter.innerHTML = Cookies.get("E-Mail", "" );



  var fioktorlescenter = document.getElementById("centerfioktorles");
  function torles() {
    fioktorlescenter = document.getElementById("centerfioktorles");

  fioktorlescenter = Cookies.remove("Nev", "" );
  fioktorlescenter = Cookies.remove("E-Mail", "" );
  fioktorlescenter = Cookies.remove("Jelszo", "" );
  fioktorlescenter = Cookies.remove("KingCoin", "");
  fioktorlescenter = Cookies.remove("KingCoin_added");
  console.log("törölve")
  }



  function webujratoltes() {
    torles();
    window.close(self);
    window.open("../loginregister/index.html")
  }

  
