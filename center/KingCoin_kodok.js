//Kód Szám
var kod1 = ['Q18762CRF'];

function ellenorzes() {

    //Kód Szám
    kod1 = ['Q18762CRF'];

    var input = document.getElementById('textinput').value;
    if (kod1 == input){
     alert("Kód sikeresen beaktiváltva");

        return true;
    }
    else {
        alert("Kérjük, adjon meg egy érvényes kódot");
        return false;
    }
}

