var przyciskDruku = document.getElementById("drukujListe");
przyciskDruku.addEventListener("click", widokDruku); 

var przyciskDodawania = document.getElementById("dodajZyczenie"); 
przyciskDodawania.addEventListener("click", dodajElement);

var mojaLista = []; 
var obszarMojejListy = document.getElementById("listaZyczen");

function dodajElement() {
    var zyczenie = document.getElementById("zyczenie"); 

    dodajDoListy(zyczenie);
    wyczyscPoleTekstowe(zyczenie);
}

function widokDruku() {

}

function dodajDoListy(rzeczDoDodania) {
    mojaLista.push(rzeczDoDodania.value);
    var nowyElement = document.createElement("li");
    nowyElement.innerHTML = mojaLista[mojaLista.length - 1];

    obszarMojejListy.appendChild(nowyElement); 
}
function wyczyscPoleTekstowe(poleDoWyczyszczenia) {
    poleDoWyczyszczenia.value ="";

}

function widokDruku() {
    var stronaLista = document.getElementById("stronaLista");
    var obszarFormularza = document.getElementById("obszarFormularza");

    obszarFormularza.style.display = "none";
    stronaLista.className = "wydruk";
    obszarMojejListy.innerHTML = ""; 
    mojaLista.sort();

    for (var i = 0; i < mojaLista.length; i++) {
        obszarMojejListy.innerHTML += "<li>" + mojaLista [i] + "</li>";
        
    }
}