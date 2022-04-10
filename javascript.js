var cipo01= 10000

var cipo02= 20000

var cipo03= 30000

function kosarba(termek){
    db = Number(prompt("db"))
    localStorage.setItem(termek,db)
}

function torl(){
    localStorage.clear()
}

function kos() {
    var list = "<tr><th>Termék neve: </th><th>darabszáma: </th><th>Ára: </th></tr>\n"

    var ossz = 0;
    var darab = 0;
    var key = "";


    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        darab = parseInt(localStorage.getItem(key));
        list += "<tr><td>" + key + "</td><td>" + "<button style=\"width:100%\" onclick='ModifyItem(\"" + key + "\", " + "prompt(\"Mennyi legyen?\")" + ")'>" + darab + "</button>" + "</td>" + "</td><td>" + (window[key] * darab) + " Ft" ;
        ossz += window[key] * darab;
    }

    list += "<tr> <th>VÉGÖSSZEG: </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"



    document.getElementById('table').innerHTML = list
}

