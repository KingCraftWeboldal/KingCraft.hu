var kingcoin_lekereslekeres = Cookies.get("KingCoin", "");
var KingCoin_added_lekeres  = Cookies.get("KingCoin_added", "");
var VIP = document.getElementById("VIP_buy_btn");


function Adatlekérés() {
    Cookies.get("VIP_ara", "");
    kingcoin_lekereslekeres = Cookies.get("KingCoin", "");
    console.log("Adatok lekérve!")
}

function buy() {
    var VIP_ara = Cookies.get("VIP_ara", "");
    kingcoin_lekereslekeres = Cookies.get("KingCoin", "");

    if (kingcoin_lekereslekeres >= 800 && VIP_ara < 999999) {
        console.log("Megvásárolva!")
        alert("Sikeresen Megvásárolva!")
    } else {
 
        console.error("Nincs elegendő KingCoinod ehhez a rang megvásárlásához");
        alert("Nincs elegendő KingCoinod ehhez a rang megvásárlásához");
    }

}
function update() {
    kingcoin_lekereslekeres = Cookies.get("KingCoin", "");
    KingCoin_added_lekeres  = Cookies.get("KingCoin_added", "");
}

update();
Adatlekérés();

