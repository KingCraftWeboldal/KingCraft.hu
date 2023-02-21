var kingcoin = document.getElementById("kingcoindisplay");
var kingcoinbalance = 0;
var kingcoin_added_to_cookie = false;


kingcoin.innerHTML = "" + kingcoinbalance;




//Function
function addkingcoin() {
    kingcoinbalance += 1;
    Cookies.set("KingCoin", "" + kingcoinbalance);
}

function addkingcointocookies() {


        if (Cookies.get("KingCoin_added", "")) {
        console.log("TRUE");
        Cookies.get("KingCoin", "" + kingcoinbalance);
        Cookies.get("KingCoin_added", "" + kingcoin_added_to_cookie);
        kingcoin.innerHTML = "" + Cookies.get("KingCoin", "");

    } else {
        console.log("FALSE");
        Cookies.set("KingCoin", "" + kingcoinbalance);
        Cookies.set("KingCoin_added", "" + kingcoin_added_to_cookie);
        kingcoin_added_to_cookie = true;
    }

}


function update() {
    kingcoin.innerHTML = "" + Cookies.get("KingCoin", "");
}
update();
addkingcointocookies();
addkingcointocookies();



