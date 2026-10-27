let blokje = document.querySelector("#blokje");
let knopje = document.querySelector("#knopId");
let tekst = "Dit is tekst!";
let knop2 = document.querySelector("#knop2");
let tijd = 'avond';

blokje.style.backgroundColor = "yellow";
blokje.style.fontFamily = "Arial";
blokje.innerHTML = tekst;

knopje.addEventListener("click", zegHallo );

function zegHallo() {
    if (tijd == 'dag') {
        melding = 'Goede middag';
    } else {
        melding = 'Goede avond';
    }
    blokje.innerHTML = melding;
    blokje.style.backgroundColor = "tomato";
}
// zegHallo();

function leesInput() {
    welkomTitel.innerHTML += " " + naam.value;
}
knop2.addEventListener("click", leesInput);


